-- ============================================================
-- ANALIA: Chinese Learning Path — Levels → Units → Lessons
-- Structure for Arabic speakers learning Mandarin (CEFR-based)
-- Safe to re-run.
-- ============================================================

-- 1. Units table (between levels and lessons)
CREATE TABLE IF NOT EXISTS units (
  id SERIAL PRIMARY KEY,
  level_id INTEGER REFERENCES levels(id) ON DELETE CASCADE,
  code TEXT UNIQUE NOT NULL,          -- e.g. 'zh-pre-a1-u1'
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  title_zh TEXT NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  description_zh TEXT,
  icon_emoji TEXT DEFAULT '📦',
  order_index INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_units_level ON units(level_id);

-- 2. Add unit_id to lessons
ALTER TABLE lessons ADD COLUMN IF NOT EXISTS unit_id INTEGER REFERENCES units(id) ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS idx_lessons_unit ON lessons(unit_id);

-- 3. Ensure lang_pair exists on levels
ALTER TABLE levels ADD COLUMN IF NOT EXISTS lang_pair TEXT DEFAULT 'ar';

-- 4. New Chinese levels (CEFR-based, distinct codes, lang_pair='zh')
INSERT INTO levels (code, name_ar, name_en, name_zh, description_ar, description_en, description_zh, order_index, color_primary, icon_emoji, xp_required, lang_pair)
VALUES
  ('zh-pre-a1', 'ما قبل A1 - التأسيس', 'Pre-A1 - Foundation',   '入门',   'أساسيات النطق والبينيين والنغمات', 'Pinyin, tones & first words', '拼音、声调与第一课', 0, '#DC2626', '🀄', 0,     'zh'),
  ('zh-a1',     'A1 - المبتدئ',        'A1 - Beginner',         '初级',   'الحياة اليومية والمحادثات الأساسية', 'Daily life & basic conversation', '日常生活与基础会话', 1, '#EA580C', '🏮', 400,   'zh'),
  ('zh-a2',     'A2 - أساسي',          'A2 - Elementary',       '基础',   'مواقف أوسع: العمل والصحة والسفر', 'Work, health, travel & more', '工作、健康与旅行', 2, '#D97706', '🎋', 1200,  'zh'),
  ('zh-b1',     'B1 - متوسط',          'B1 - Intermediate',     '中级',   'التعبير عن الرأي وسرد القصص', 'Opinions, storytelling & culture', '表达观点与叙述', 3, '#16A34A', '🐉', 3000,  'zh'),
  ('zh-b2',     'B2 - متوسط متقدم',    'B2 - Upper Intermediate','中高级', 'الاقتصاد والأعمال والإعلام', 'Business, media & society', '商务、媒体与社会', 4, '#0284C7', '🏯', 6500,  'zh'),
  ('zh-c1',     'C1 - متقدم',          'C1 - Advanced',         '高级',   'الأكاديمية والأدب والترجمة', 'Academic, literary & professional', '学术、文学与翻译', 5, '#7C3AED', '⛩️', 13000, 'zh')
ON CONFLICT (code) DO UPDATE SET
  name_ar = EXCLUDED.name_ar, name_en = EXCLUDED.name_en, name_zh = EXCLUDED.name_zh,
  description_ar = EXCLUDED.description_ar, description_en = EXCLUDED.description_en, description_zh = EXCLUDED.description_zh,
  order_index = EXCLUDED.order_index, color_primary = EXCLUDED.color_primary,
  icon_emoji = EXCLUDED.icon_emoji, xp_required = EXCLUDED.xp_required, lang_pair = EXCLUDED.lang_pair;

-- 5. RLS: units readable by all authenticated users
ALTER TABLE units ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "units_read_all" ON units;
CREATE POLICY "units_read_all" ON units FOR SELECT USING (true);

-- 6. Retire old flat HSK levels from the active path (keep data, hide via lang_pair)
--    Old hsk1..6 + pre-hsk stay in DB but are replaced by zh-* levels above.
--    We null their lang_pair so neither path shows them.
UPDATE levels SET lang_pair = 'retired-zh'
WHERE code IN ('pre-hsk','hsk1','hsk2','hsk3','hsk4','hsk5','hsk6');
