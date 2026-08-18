// Generates supabase/seed_ar_curriculum.sql from lib/arabicCurriculum.ts
// Run: npx tsx scripts/genArSeed.mts
import { writeFileSync } from 'fs'
import { AR_CURRICULUM, AR_TOTALS } from '../lib/arabicCurriculum.ts'

const q = (s: string) => `'${s.replace(/'/g, "''")}'`
const xpByLevel: Record<string, number> = { 'pre-a1': 20, 'a1': 25, 'a2': 30, 'b1': 35, 'b2': 40, 'c1': 50 }
const codes = AR_CURRICULUM.map(l => l.code)

let sql = `-- ============================================================
-- ANALIA: Arabic Curriculum for Chinese speakers (Units + Lessons)
-- AUTO-GENERATED from lib/arabicCurriculum.ts — do not edit by hand.
-- ${AR_TOTALS.units} units · ${AR_TOTALS.lessons} lessons
-- Requires the units table (from seed_zh_units_schema.sql).
-- Idempotent: wipes & re-seeds the Arabic levels below only.
-- ============================================================

-- Idempotent + safe: clear progress for previously-seeded UNIT lessons (FK has no cascade),
-- then drop the units (cascade removes their lessons). Legacy flat lessons (unit_id IS NULL)
-- are left untouched — they are simply hidden once a level has units.
DELETE FROM user_lesson_progress WHERE lesson_id IN (
  SELECT l.id FROM lessons l JOIN units u ON l.unit_id = u.id
  WHERE u.level_id IN (SELECT id FROM levels WHERE code IN (${codes.map(q).join(', ')}))
);
DELETE FROM units WHERE level_id IN (SELECT id FROM levels WHERE code IN (${codes.map(q).join(', ')}));

`

for (const level of AR_CURRICULUM) {
  sql += `\n-- ============ LEVEL ${level.code} ============\n`
  let order = 0
  level.units.forEach((u, ui) => {
    sql += `INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, ${q(u.code)}, ${q(u.title_ar)}, ${q(u.title_en)}, ${q(u.title_zh)}, ${q(u.icon)}, ${ui + 1}
FROM levels WHERE code = ${q(level.code)}
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;\n`
    u.lessons.forEach((les) => {
      order += 1
      const xp = xpByLevel[level.code] ?? 25
      sql += `INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, ${order}, ${q(les.title_ar)}, ${q(les.title_en)}, ${q(les.title_zh)}, ${q(les.type)}, ${order}, ${xp}, 15
FROM levels lv JOIN units un ON un.code = ${q(u.code)} WHERE lv.code = ${q(level.code)};\n`
    })
  })
}

sql += `\n-- Update total_lessons counters
UPDATE levels lv SET total_lessons = (SELECT COUNT(*) FROM lessons WHERE level_id = lv.id)
WHERE lv.code IN (${codes.map(q).join(', ')});
`

writeFileSync(new URL('../supabase/seed_ar_curriculum.sql', import.meta.url), sql, 'utf8')
console.log(`Wrote seed_ar_curriculum.sql — ${AR_TOTALS.units} units, ${AR_TOTALS.lessons} lessons`)
