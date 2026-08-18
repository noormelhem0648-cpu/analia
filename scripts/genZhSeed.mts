// Generates supabase/seed_zh_curriculum.sql from lib/zhCurriculum.ts
// Run: npx tsx scripts/genZhSeed.mts
import { writeFileSync } from 'fs'
import { ZH_CURRICULUM, ZH_TOTALS } from '../lib/zhCurriculum.ts'

const q = (s: string) => `'${s.replace(/'/g, "''")}'`

const xpByLevel: Record<string, number> = {
  'zh-pre-a1': 20, 'zh-a1': 25, 'zh-a2': 30, 'zh-b1': 35, 'zh-b2': 40, 'zh-c1': 50,
}

let sql = `-- ============================================================
-- ANALIA: Chinese Curriculum Seed (Units + Lessons)
-- AUTO-GENERATED from lib/zhCurriculum.ts — do not edit by hand.
-- ${ZH_TOTALS.units} units · ${ZH_TOTALS.lessons} lessons
-- Run AFTER seed_zh_units_schema.sql (or as one combined file).
-- Idempotent: wipes & re-seeds the zh-* levels only.
-- ============================================================

-- Clean previous zh curriculum (cascade removes lessons under these units)
DELETE FROM units WHERE level_id IN (SELECT id FROM levels WHERE code LIKE 'zh-%');

`

for (const level of ZH_CURRICULUM) {
  sql += `\n-- ============ LEVEL ${level.code} ============\n`
  let lessonOrder = 0
  level.lessons.forEach((u, ui) => {
    // Insert unit
    sql += `INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, ${q(u.code)}, ${q(u.title_ar)}, ${q(u.title_en)}, ${q(u.title_zh)}, ${q(u.icon)}, ${ui + 1}
FROM levels WHERE code = ${q(level.code)}
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;\n`
    // Insert lessons for this unit
    u.lessons.forEach((les) => {
      lessonOrder += 1
      const xp = xpByLevel[level.code] ?? 25
      sql += `INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, ${lessonOrder}, ${q(les.title_ar)}, ${q(les.title_en)}, ${q(les.title_zh)}, ${q(les.type)}, ${lessonOrder}, ${xp}, 15
FROM levels lv JOIN units un ON un.code = ${q(u.code)} WHERE lv.code = ${q(level.code)};\n`
    })
  })
}

sql += `\n-- Update total_lessons counters per level
UPDATE levels lv SET total_lessons = (SELECT COUNT(*) FROM lessons WHERE level_id = lv.id)
WHERE lv.code LIKE 'zh-%';
`

writeFileSync(new URL('../supabase/seed_zh_curriculum.sql', import.meta.url), sql, 'utf8')
console.log(`Wrote seed_zh_curriculum.sql — ${ZH_TOTALS.units} units, ${ZH_TOTALS.lessons} lessons`)
