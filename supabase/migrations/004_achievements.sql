-- Achievements definition table
CREATE TABLE IF NOT EXISTS achievements (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  name_ar TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_zh TEXT NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  description_zh TEXT,
  icon TEXT NOT NULL,
  xp_reward INTEGER DEFAULT 0,
  condition_type TEXT NOT NULL, -- 'xp', 'streak', 'lessons', 'ai_chat'
  condition_value INTEGER NOT NULL
);

-- User achievements
CREATE TABLE IF NOT EXISTS user_achievements (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  achievement_id INTEGER REFERENCES achievements(id),
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- Seed achievements
INSERT INTO achievements (code, name_ar, name_en, name_zh, description_ar, description_en, description_zh, icon, xp_reward, condition_type, condition_value)
VALUES
  ('first_lesson',  'الخطوة الأولى',   'First Steps',     '第一步',      'أكملت أول درس لك!',             'Completed your first lesson!',      '完成了第一课！',        '🌟', 10,  'lessons', 1),
  ('lessons_5',     'طالب نشيط',        'Active Learner',  '积极学习者',  'أكملت ٥ دروس',                   'Completed 5 lessons',               '完成了5节课',          '📚', 20,  'lessons', 5),
  ('lessons_10',    'شغوف بالعربية',    'Arabic Lover',    '阿语爱好者',  'أكملت ١٠ دروس',                  'Completed 10 lessons',              '完成了10节课',         '💙', 50,  'lessons', 10),
  ('streak_3',      'على النار',        'On Fire',         '燃起来了',    'حافظت على ٣ أيام متتالية',       '3-day learning streak',             '连续学习3天',          '🔥', 15,  'streak',  3),
  ('streak_7',      'محارب الأسبوع',   'Week Warrior',    '一周战士',    'حافظت على أسبوع متتالي',         'Kept a 7-day streak',               '连续学习7天',          '💪', 30,  'streak',  7),
  ('streak_30',     'لا يُوقف',         'Unstoppable',     '势不可挡',    'حافظت على شهر متتالي',           'Kept a 30-day streak',              '连续学习30天',         '🏆', 100, 'streak',  30),
  ('xp_50',         'جامع النقاط',      'XP Hunter',       'XP猎手',     'جمعت ٥٠ نقطة',                   'Earned 50 XP',                      '获得50 XP',            '⭐', 0,   'xp',      50),
  ('xp_100',        'محترف',            'Pro Learner',     '专业学员',    'جمعت ١٠٠ نقطة',                  'Earned 100 XP',                     '获得100 XP',           '🎯', 0,   'xp',      100),
  ('xp_500',        'بطل العربية',      'Arabic Champion', '阿语冠军',    'جمعت ٥٠٠ نقطة',                  'Earned 500 XP',                     '获得500 XP',           '👑', 0,   'xp',      500),
  ('ai_chat',       'محادث ذكي',        'AI Chatter',      '智能聊天者',  'استخدمت معلم الذكاء الاصطناعي', 'Used the AI tutor for the first time','首次使用AI老师',      '🤖', 10,  'ai_chat', 1)
ON CONFLICT (code) DO NOTHING;

-- Function: check and grant achievements for a user
CREATE OR REPLACE FUNCTION check_and_grant_achievements(p_user_id UUID)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_xp INTEGER;
  v_streak INTEGER;
  v_lessons INTEGER;
  v_ai_chats INTEGER;
  ach RECORD;
  already_has BOOLEAN;
BEGIN
  SELECT total_xp, streak_days INTO v_xp, v_streak FROM profiles WHERE id = p_user_id;
  SELECT COUNT(*) INTO v_lessons FROM user_lesson_progress WHERE user_id = p_user_id AND status = 'completed';
  SELECT COUNT(*) INTO v_ai_chats FROM ai_conversations WHERE user_id = p_user_id;

  FOR ach IN SELECT * FROM achievements LOOP
    SELECT EXISTS(SELECT 1 FROM user_achievements WHERE user_id = p_user_id AND achievement_id = ach.id) INTO already_has;
    IF NOT already_has THEN
      IF (ach.condition_type = 'xp'      AND v_xp      >= ach.condition_value) OR
         (ach.condition_type = 'streak'  AND v_streak  >= ach.condition_value) OR
         (ach.condition_type = 'lessons' AND v_lessons >= ach.condition_value) OR
         (ach.condition_type = 'ai_chat' AND v_ai_chats >= ach.condition_value)
      THEN
        INSERT INTO user_achievements (user_id, achievement_id) VALUES (p_user_id, ach.id) ON CONFLICT DO NOTHING;
        IF ach.xp_reward > 0 THEN
          UPDATE profiles SET total_xp = total_xp + ach.xp_reward WHERE id = p_user_id;
        END IF;
      END IF;
    END IF;
  END LOOP;
END;
$$;

-- Function: update streak
CREATE OR REPLACE FUNCTION update_streak(p_user_id UUID)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_last_active DATE;
  v_today DATE := CURRENT_DATE;
BEGIN
  SELECT last_active_date INTO v_last_active FROM profiles WHERE id = p_user_id;
  IF v_last_active IS NULL OR v_last_active < v_today - INTERVAL '1 day' THEN
    -- Reset streak if more than 1 day gap
    IF v_last_active IS NULL OR v_last_active < v_today - INTERVAL '1 day' THEN
      UPDATE profiles SET streak_days = CASE WHEN v_last_active = v_today - INTERVAL '1 day' THEN streak_days + 1 ELSE 1 END,
                          last_active_date = v_today WHERE id = p_user_id;
    END IF;
  ELSIF v_last_active < v_today THEN
    UPDATE profiles SET streak_days = streak_days + 1, last_active_date = v_today WHERE id = p_user_id;
  END IF;
END;
$$;

-- Add last_active_date to profiles if missing
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS last_active_date DATE;

-- Enable RLS on new tables
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'achievements' AND policyname = 'achievements_public_read') THEN
    CREATE POLICY "achievements_public_read" ON achievements FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_achievements' AND policyname = 'user_achievements_own') THEN
    CREATE POLICY "user_achievements_own" ON user_achievements FOR ALL USING (auth.uid() = user_id);
  END IF;
END $$;
