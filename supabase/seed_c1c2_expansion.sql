-- ═══════════════════════════════════════════════════════════════
--  ANALIA C1/C2 Expansion — Add missing lessons
--  Run in Supabase SQL Editor (safe to re-run — ON CONFLICT DO NOTHING)
-- ═══════════════════════════════════════════════════════════════

-- ─────────────────────────────────────────────────────────────
--  C1: Add 4 more lessons (existing 1–6 stay where they are)
--  Result: C1 grows from 6 → 10 lessons
-- ─────────────────────────────────────────────────────────────
DO $$
DECLARE c1_id INT;
BEGIN
  SELECT id INTO c1_id FROM levels WHERE code = 'c1';

  INSERT INTO lessons (level_id, day_number, lesson_type, title_ar, title_en, title_zh, xp_reward, estimated_minutes, order_index) VALUES
    (c1_id,  7, 'vocabulary',   'التقنية واللغة',                 'Technology & Language',            '科技与语言',         85,  30,  7),
    (c1_id,  8, 'vocabulary',   'التراث الإسلامي والعلوم',        'Islamic Heritage & Science',       '伊斯兰文明遗产',     85,  32,  8),
    (c1_id,  9, 'conversation', 'قصة: التقنية ومستقبل العربية',   'Story: Technology & Arabic Future','故事：科技与阿拉伯语',100, 35,  9),
    (c1_id, 10, 'conversation', 'قصة: إرث العصر الذهبي',          'Story: Legacy of the Golden Age',  '故事：黄金时代遗产', 100, 35, 10)
  ON CONFLICT DO NOTHING;
END $$;

-- ─────────────────────────────────────────────────────────────
--  C2: Add 3 more lessons (existing 1–4 stay where they are)
--  Result: C2 grows from 4 → 7 lessons
-- ─────────────────────────────────────────────────────────────
DO $$
DECLARE c2_id INT;
BEGIN
  SELECT id INTO c2_id FROM levels WHERE code = 'c2';

  INSERT INTO lessons (level_id, day_number, lesson_type, title_ar, title_en, title_zh, xp_reward, estimated_minutes, order_index) VALUES
    (c2_id, 5, 'vocabulary',   'الأدب المقارن',              'Comparative Literature',         '比较文学',         100, 35, 5),
    (c2_id, 6, 'vocabulary',   'مناهج البحث المتقدمة',      'Advanced Research Methods',      '高级研究方法',     110, 38, 6),
    (c2_id, 7, 'conversation', 'قصة: بانية الجسور',          'Story: The Bridge Builder',      '故事：架桥者',     120, 40, 7)
  ON CONFLICT DO NOTHING;
END $$;
