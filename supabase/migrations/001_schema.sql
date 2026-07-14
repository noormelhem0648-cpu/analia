-- ANALIA Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- PROFILES
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  ui_language TEXT DEFAULT 'zh' CHECK (ui_language IN ('ar', 'en', 'zh')),
  country TEXT,
  age INTEGER,
  current_level_id INTEGER DEFAULT 0,
  total_xp INTEGER DEFAULT 0,
  streak_days INTEGER DEFAULT 0,
  last_study_date DATE,
  is_premium BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- LEVELS
CREATE TABLE IF NOT EXISTS levels (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  name_ar TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_zh TEXT NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  description_zh TEXT,
  order_index INTEGER NOT NULL,
  total_lessons INTEGER DEFAULT 0,
  color_primary TEXT,
  icon_emoji TEXT,
  xp_required INTEGER DEFAULT 0,
  pass_percentage INTEGER DEFAULT 80
);

-- LESSONS
CREATE TABLE IF NOT EXISTS lessons (
  id SERIAL PRIMARY KEY,
  level_id INTEGER REFERENCES levels(id),
  day_number INTEGER NOT NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  title_zh TEXT NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  description_zh TEXT,
  lesson_type TEXT CHECK (lesson_type IN ('letters','vocabulary','grammar','listening','conversation','reading','writing','review')),
  order_index INTEGER NOT NULL,
  xp_reward INTEGER DEFAULT 10,
  estimated_minutes INTEGER DEFAULT 20,
  is_published BOOLEAN DEFAULT TRUE,
  content_data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- LESSON SECTIONS
CREATE TABLE IF NOT EXISTS lesson_sections (
  id SERIAL PRIMARY KEY,
  lesson_id INTEGER REFERENCES lessons(id) ON DELETE CASCADE,
  section_type TEXT CHECK (section_type IN ('intro','explanation','examples','audio','video','exercise','quiz','summary')),
  order_index INTEGER NOT NULL,
  title_ar TEXT,
  title_en TEXT,
  title_zh TEXT,
  content_ar JSONB,
  content_en JSONB,
  content_zh JSONB,
  audio_url TEXT,
  video_url TEXT,
  pdf_url TEXT
);

-- EXERCISES
CREATE TABLE IF NOT EXISTS exercises (
  id SERIAL PRIMARY KEY,
  lesson_id INTEGER REFERENCES lessons(id) ON DELETE CASCADE,
  exercise_type TEXT CHECK (exercise_type IN (
    'multiple_choice','true_false','fill_blank','matching',
    'word_order','sentence_reorder','writing','speaking',
    'listening','drag_drop'
  )),
  question_ar TEXT,
  question_en TEXT,
  question_zh TEXT,
  question_audio_url TEXT,
  correct_answer JSONB NOT NULL,
  options JSONB,
  explanation_ar TEXT,
  explanation_en TEXT,
  explanation_zh TEXT,
  difficulty INTEGER DEFAULT 1 CHECK (difficulty BETWEEN 1 AND 5),
  xp_reward INTEGER DEFAULT 5,
  order_index INTEGER NOT NULL
);

-- USER PROGRESS
CREATE TABLE IF NOT EXISTS user_lesson_progress (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id INTEGER REFERENCES lessons(id),
  status TEXT DEFAULT 'locked' CHECK (status IN ('locked','available','in_progress','completed','mastered')),
  score INTEGER,
  attempts INTEGER DEFAULT 0,
  completed_at TIMESTAMPTZ,
  time_spent_seconds INTEGER DEFAULT 0,
  UNIQUE(user_id, lesson_id)
);

CREATE TABLE IF NOT EXISTS user_exercise_attempts (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  exercise_id INTEGER REFERENCES exercises(id),
  user_answer JSONB,
  is_correct BOOLEAN,
  time_taken_seconds INTEGER,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

-- VOCABULARY & SRS
CREATE TABLE IF NOT EXISTS vocabulary_cards (
  id SERIAL PRIMARY KEY,
  word_ar TEXT NOT NULL,
  word_transliteration TEXT,
  meaning_en TEXT,
  meaning_zh TEXT,
  meaning_ar TEXT,
  example_sentence_ar TEXT,
  example_audio_url TEXT,
  image_url TEXT,
  level_id INTEGER REFERENCES levels(id),
  lesson_id INTEGER REFERENCES lessons(id)
);

CREATE TABLE IF NOT EXISTS user_vocabulary_srs (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  card_id INTEGER REFERENCES vocabulary_cards(id),
  easiness_factor FLOAT DEFAULT 2.5,
  interval_days INTEGER DEFAULT 1,
  repetitions INTEGER DEFAULT 0,
  next_review_date DATE DEFAULT CURRENT_DATE,
  last_reviewed_at TIMESTAMPTZ,
  UNIQUE(user_id, card_id)
);

-- ACHIEVEMENTS
CREATE TABLE IF NOT EXISTS achievements (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  name_ar TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_zh TEXT NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  description_zh TEXT,
  icon_emoji TEXT,
  xp_reward INTEGER DEFAULT 50,
  achievement_type TEXT CHECK (achievement_type IN ('streak','lessons','xp','level','perfect_score','speed'))
);

CREATE TABLE IF NOT EXISTS user_achievements (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  achievement_id INTEGER REFERENCES achievements(id),
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- CERTIFICATES
CREATE TABLE IF NOT EXISTS certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  level_id INTEGER REFERENCES levels(id),
  issued_at TIMESTAMPTZ DEFAULT NOW(),
  verification_code TEXT UNIQUE DEFAULT gen_random_uuid()::TEXT,
  user_name TEXT NOT NULL,
  level_name TEXT NOT NULL
);

-- FAVORITES
CREATE TABLE IF NOT EXISTS user_favorites (
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id INTEGER REFERENCES lessons(id),
  added_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, lesson_id)
);

-- AI CONVERSATIONS
CREATE TABLE IF NOT EXISTS ai_conversations (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id INTEGER REFERENCES lessons(id),
  messages JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ADMIN
CREATE TABLE IF NOT EXISTS admin_users (
  user_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'teacher' CHECK (role IN ('super_admin','admin','teacher','content_editor')),
  added_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS notifications (
  id SERIAL PRIMARY KEY,
  title_ar TEXT,
  title_en TEXT,
  title_zh TEXT,
  body_ar TEXT,
  body_en TEXT,
  body_zh TEXT,
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  target TEXT DEFAULT 'all'
);

-- PLACEMENT TESTS
CREATE TABLE IF NOT EXISTS placement_tests (
  id SERIAL PRIMARY KEY,
  level_id INTEGER REFERENCES levels(id),
  questions JSONB NOT NULL,
  passing_score INTEGER DEFAULT 80
);

CREATE TABLE IF NOT EXISTS user_placement_results (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  level_id INTEGER REFERENCES levels(id),
  score INTEGER,
  passed BOOLEAN,
  taken_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS POLICIES
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_exercise_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_vocabulary_srs ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_placement_results ENABLE ROW LEVEL SECURITY;

-- RLS: Users can read/update their own profile
CREATE POLICY "profiles_own" ON profiles FOR ALL USING (auth.uid() = id);

-- RLS: Users can manage their own progress
CREATE POLICY "progress_own" ON user_lesson_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "attempts_own" ON user_exercise_attempts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "srs_own" ON user_vocabulary_srs FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "achievements_own" ON user_achievements FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "certificates_own" ON certificates FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "favorites_own" ON user_favorites FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "conversations_own" ON ai_conversations FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "placement_own" ON user_placement_results FOR ALL USING (auth.uid() = user_id);

-- Public read for levels, lessons, exercises, vocabulary
ALTER TABLE levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE vocabulary_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "levels_public_read" ON levels FOR SELECT USING (true);
CREATE POLICY "lessons_public_read" ON lessons FOR SELECT USING (true);
CREATE POLICY "exercises_public_read" ON exercises FOR SELECT USING (true);
CREATE POLICY "vocab_public_read" ON vocabulary_cards FOR SELECT USING (true);
CREATE POLICY "sections_public_read" ON lesson_sections FOR SELECT USING (true);
CREATE POLICY "achievements_public_read" ON achievements FOR SELECT USING (true);

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, email, username, display_name, ui_language)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'ui_language', 'zh')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE handle_new_user();
