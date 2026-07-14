-- Add last_studied_at to user_lesson_progress if missing
ALTER TABLE user_lesson_progress ADD COLUMN IF NOT EXISTS last_studied_at TIMESTAMPTZ DEFAULT NOW();
ALTER TABLE user_lesson_progress ADD COLUMN IF NOT EXISTS xp_earned INTEGER DEFAULT 0;

-- XP increment function
CREATE OR REPLACE FUNCTION increment_xp(user_id UUID, xp_amount INTEGER)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE profiles
  SET total_xp = total_xp + xp_amount
  WHERE id = user_id;
END;
$$;

-- Update last_studied_at on upsert trigger
CREATE OR REPLACE FUNCTION update_lesson_progress_timestamp()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.last_studied_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS lesson_progress_timestamp ON user_lesson_progress;
CREATE TRIGGER lesson_progress_timestamp
  BEFORE INSERT OR UPDATE ON user_lesson_progress
  FOR EACH ROW EXECUTE FUNCTION update_lesson_progress_timestamp();
