-- ═══════════════════════════════════════════════════════
--  ANALIA — University Features Schema
--  Safe to re-run (all IF NOT EXISTS)
-- ═══════════════════════════════════════════════════════

-- 1. Server-side daily progress tracking on profiles
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS xp_today INT DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS study_minutes_today INT DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS last_xp_date DATE;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS total_lessons_completed INT DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS learning_direction TEXT DEFAULT 'zh_learns_ar';

-- 2. Classes / cohorts (teacher creates, students join via code)
CREATE TABLE IF NOT EXISTS classes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  teacher_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  join_code TEXT UNIQUE NOT NULL,  -- 6-char alphanumeric code
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS class_members (
  class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  role TEXT DEFAULT 'student' CHECK (role IN ('student', 'assistant')),
  PRIMARY KEY (class_id, user_id)
);

-- 3. Lesson comments (discussion per lesson)
CREATE TABLE IF NOT EXISTS lesson_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lesson_id INT REFERENCES lessons(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL CHECK (char_length(content) <= 2000),
  parent_id UUID REFERENCES lesson_comments(id) ON DELETE CASCADE,  -- for replies
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. User notifications (track which notifications each user has seen)
CREATE TABLE IF NOT EXISTS user_notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  type TEXT DEFAULT 'info' CHECK (type IN ('info', 'achievement', 'reminder', 'alert')),
  link TEXT,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Certificates (already exists, but ensure columns)
ALTER TABLE certificates ADD COLUMN IF NOT EXISTS score INT;
ALTER TABLE certificates ADD COLUMN IF NOT EXISTS total_lessons INT;
ALTER TABLE certificates ADD COLUMN IF NOT EXISTS completed_lessons INT;

-- 6. Indexes for performance
CREATE INDEX IF NOT EXISTS idx_srs_review ON user_vocabulary_srs(user_id, next_review_date);
CREATE INDEX IF NOT EXISTS idx_comments_lesson ON lesson_comments(lesson_id, created_at);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON user_notifications(user_id, read_at, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_progress_user_status ON user_lesson_progress(user_id, status);
CREATE INDEX IF NOT EXISTS idx_class_members_user ON class_members(user_id);

-- 7. RLS Policies
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_notifications ENABLE ROW LEVEL SECURITY;

-- Classes: teacher can CRUD their own; members can SELECT
DROP POLICY IF EXISTS classes_teacher ON classes;
CREATE POLICY classes_teacher ON classes USING (teacher_id = auth.uid());
DROP POLICY IF EXISTS classes_member_select ON classes;
CREATE POLICY classes_member_select ON classes FOR SELECT USING (
  EXISTS (SELECT 1 FROM class_members WHERE class_id = classes.id AND user_id = auth.uid())
);

-- Class members: anyone can join (INSERT with their own user_id); select own rows
DROP POLICY IF EXISTS class_members_own ON class_members;
CREATE POLICY class_members_own ON class_members USING (user_id = auth.uid());
DROP POLICY IF EXISTS class_members_teacher ON class_members;
CREATE POLICY class_members_teacher ON class_members FOR SELECT USING (
  EXISTS (SELECT 1 FROM classes WHERE id = class_id AND teacher_id = auth.uid())
);

-- Comments: anyone logged in can read; author can write/delete
DROP POLICY IF EXISTS comments_select ON lesson_comments;
CREATE POLICY comments_select ON lesson_comments FOR SELECT USING (auth.uid() IS NOT NULL);
DROP POLICY IF EXISTS comments_insert ON lesson_comments;
CREATE POLICY comments_insert ON lesson_comments FOR INSERT WITH CHECK (user_id = auth.uid());
DROP POLICY IF EXISTS comments_delete ON lesson_comments;
CREATE POLICY comments_delete ON lesson_comments FOR DELETE USING (user_id = auth.uid());

-- Notifications: user sees own
DROP POLICY IF EXISTS notif_own ON user_notifications;
CREATE POLICY notif_own ON user_notifications USING (user_id = auth.uid());

-- 8. Function: update_daily_xp — resets xp_today if new day
CREATE OR REPLACE FUNCTION update_daily_xp(p_user_id UUID, p_xp INT, p_minutes INT)
RETURNS void AS $$
BEGIN
  UPDATE profiles SET
    xp_today = CASE WHEN last_xp_date = CURRENT_DATE THEN xp_today + p_xp ELSE p_xp END,
    study_minutes_today = CASE WHEN last_xp_date = CURRENT_DATE THEN study_minutes_today + p_minutes ELSE p_minutes END,
    last_xp_date = CURRENT_DATE,
    total_lessons_completed = total_lessons_completed + 1
  WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 9. Function: issue_certificate — called after all lessons in a level are done
CREATE OR REPLACE FUNCTION issue_certificate(p_user_id UUID, p_level_id INT)
RETURNS UUID AS $$
DECLARE
  v_cert_id UUID;
  v_total INT;
  v_done INT;
  v_user_name TEXT;
  v_level_name TEXT;
BEGIN
  SELECT COUNT(*) INTO v_total FROM lessons WHERE level_id = p_level_id AND is_published = true;
  SELECT COUNT(*) INTO v_done FROM user_lesson_progress
    WHERE user_id = p_user_id AND lesson_id IN (SELECT id FROM lessons WHERE level_id = p_level_id)
    AND status = 'completed';

  IF v_done < v_total OR v_total = 0 THEN
    RETURN NULL;
  END IF;

  -- Don't double-issue
  IF EXISTS (SELECT 1 FROM certificates WHERE user_id = p_user_id AND level_id = p_level_id) THEN
    SELECT id INTO v_cert_id FROM certificates WHERE user_id = p_user_id AND level_id = p_level_id;
    RETURN v_cert_id;
  END IF;

  SELECT COALESCE(display_name, username, email) INTO v_user_name FROM profiles WHERE id = p_user_id;
  SELECT name_ar INTO v_level_name FROM levels WHERE id = p_level_id;

  INSERT INTO certificates (user_id, level_id, issued_at, verification_code, user_name, level_name, total_lessons, completed_lessons)
  VALUES (p_user_id, p_level_id, NOW(), gen_random_uuid(), v_user_name, v_level_name, v_total, v_done)
  RETURNING id INTO v_cert_id;

  RETURN v_cert_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 10. Function: generate_join_code — random 6-char code for classes
CREATE OR REPLACE FUNCTION generate_join_code()
RETURNS TEXT AS $$
DECLARE
  chars TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  result TEXT := '';
  i INT;
BEGIN
  FOR i IN 1..6 LOOP
    result := result || substr(chars, floor(random() * length(chars) + 1)::int, 1);
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE plpgsql;
