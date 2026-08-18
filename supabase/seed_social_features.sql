-- ============================================================
-- ANALIA — Social Features: Community + Challenges + Language Exchange
-- Safe to re-run (IF NOT EXISTS everywhere).
-- ============================================================

-- ---------- Profile additions ----------
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS native_lang TEXT;            -- 'ar' | 'zh'
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS exchange_opt_in BOOLEAN DEFAULT false;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS bio TEXT;

-- Derive native_lang from learning_direction when missing
UPDATE profiles SET native_lang = CASE
  WHEN learning_direction = 'ar_learns_zh' THEN 'ar'
  WHEN learning_direction = 'zh_learns_ar' THEN 'zh'
  ELSE native_lang END
WHERE native_lang IS NULL;

-- ---------- Friendships ----------
CREATE TABLE IF NOT EXISTS friendships (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  requester_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  addressee_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  status TEXT CHECK (status IN ('pending','accepted','blocked')) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (requester_id, addressee_id)
);
CREATE INDEX IF NOT EXISTS idx_friend_addressee ON friendships(addressee_id, status);
CREATE INDEX IF NOT EXISTS idx_friend_requester ON friendships(requester_id, status);

-- ---------- Activity feed ----------
CREATE TABLE IF NOT EXISTS activity_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL,           -- lesson_completed | level_completed | badge | streak | challenge_joined | challenge_completed
  meta JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_activity_user_time ON activity_events(user_id, created_at DESC);

-- ---------- Challenges ----------
CREATE TABLE IF NOT EXISTS challenges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title_ar TEXT, title_en TEXT, title_zh TEXT,
  description_ar TEXT, description_en TEXT, description_zh TEXT,
  type TEXT CHECK (type IN ('lessons','xp','vocab','streak')) NOT NULL,
  goal INT NOT NULL,
  scope TEXT CHECK (scope IN ('daily','weekly','special')) DEFAULT 'weekly',
  icon TEXT DEFAULT '🎯',
  reward_xp INT DEFAULT 100,
  starts_at DATE DEFAULT current_date,
  ends_at DATE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS challenge_participants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  challenge_id UUID REFERENCES challenges(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  progress INT DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  joined_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (challenge_id, user_id)
);
CREATE INDEX IF NOT EXISTS idx_cp_user ON challenge_participants(user_id);

-- ---------- RLS ----------
ALTER TABLE friendships ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_participants ENABLE ROW LEVEL SECURITY;

-- friendships: involved users can see/insert/update their rows
DROP POLICY IF EXISTS friendships_select ON friendships;
CREATE POLICY friendships_select ON friendships FOR SELECT
  USING (auth.uid() = requester_id OR auth.uid() = addressee_id);
DROP POLICY IF EXISTS friendships_insert ON friendships;
CREATE POLICY friendships_insert ON friendships FOR INSERT
  WITH CHECK (auth.uid() = requester_id);
DROP POLICY IF EXISTS friendships_update ON friendships;
CREATE POLICY friendships_update ON friendships FOR UPDATE
  USING (auth.uid() = requester_id OR auth.uid() = addressee_id);
DROP POLICY IF EXISTS friendships_delete ON friendships;
CREATE POLICY friendships_delete ON friendships FOR DELETE
  USING (auth.uid() = requester_id OR auth.uid() = addressee_id);

-- activity: anyone authenticated can read (feed is filtered to friends in app), owner inserts
DROP POLICY IF EXISTS activity_select ON activity_events;
CREATE POLICY activity_select ON activity_events FOR SELECT USING (auth.role() = 'authenticated');
DROP POLICY IF EXISTS activity_insert ON activity_events;
CREATE POLICY activity_insert ON activity_events FOR INSERT WITH CHECK (auth.uid() = user_id);

-- challenges: readable by all
DROP POLICY IF EXISTS challenges_select ON challenges;
CREATE POLICY challenges_select ON challenges FOR SELECT USING (true);

-- participants: read all (for leaderboards), write own
DROP POLICY IF EXISTS cp_select ON challenge_participants;
CREATE POLICY cp_select ON challenge_participants FOR SELECT USING (auth.role() = 'authenticated');
DROP POLICY IF EXISTS cp_insert ON challenge_participants;
CREATE POLICY cp_insert ON challenge_participants FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS cp_update ON challenge_participants;
CREATE POLICY cp_update ON challenge_participants FOR UPDATE USING (auth.uid() = user_id);

-- ---------- Helper: advance a user's active challenges of a given type ----------
CREATE OR REPLACE FUNCTION bump_challenges(p_user_id UUID, p_type TEXT, p_amount INT)
RETURNS void AS $$
BEGIN
  UPDATE challenge_participants cp
  SET progress = LEAST(cp.progress + p_amount, c.goal),
      completed = (cp.progress + p_amount) >= c.goal
  FROM challenges c
  WHERE cp.challenge_id = c.id
    AND cp.user_id = p_user_id
    AND c.type = p_type
    AND c.is_active = true
    AND (c.ends_at IS NULL OR c.ends_at >= current_date)
    AND cp.completed = false;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ---------- Seed a few starter challenges ----------
INSERT INTO challenges (title_ar, title_en, title_zh, description_ar, description_zh, type, goal, scope, icon, reward_xp, ends_at)
SELECT * FROM (VALUES
  ('٥ دروس هذا الأسبوع', '5 lessons this week', '本周5节课', 'أكمل ٥ دروس خلال الأسبوع', '本周完成5节课', 'lessons', 5, 'weekly', '📚', 100, current_date + 7),
  ('١٠٠ نقطة اليوم', '100 XP today', '今日100积分', 'اجمع ١٠٠ نقطة خبرة اليوم', '今天获得100经验', 'xp', 100, 'daily', '⚡', 50, current_date + 1),
  ('٣٠ كلمة جديدة', '30 new words', '30个新词', 'تعلّم ٣٠ كلمة جديدة هذا الأسبوع', '本周学习30个新单词', 'vocab', 30, 'weekly', '🔤', 120, current_date + 7)
) AS v(title_ar, title_en, title_zh, description_ar, description_zh, type, goal, scope, icon, reward_xp, ends_at)
WHERE NOT EXISTS (SELECT 1 FROM challenges WHERE is_active = true);
