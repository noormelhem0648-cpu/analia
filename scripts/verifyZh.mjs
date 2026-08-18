import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
const env = readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
const get = k => env.match(new RegExp(`^${k}=(.*)$`, 'm'))?.[1]?.trim()
const sb = createClient(get('NEXT_PUBLIC_SUPABASE_URL'), get('SUPABASE_SECRET_KEY'))

const { data: levels, error: le } = await sb.from('levels').select('id, code, name_en').like('code', 'zh-%').order('order_index')
if (le) { console.log('levels error:', le.message); process.exit(0) }
console.log('=== zh-* LEVELS ===', levels.length)

let unitsOk = true, totalUnits = 0, totalLessons = 0
for (const lv of levels) {
  const { data: units, error: ue } = await sb.from('units').select('id').eq('level_id', lv.id)
  if (ue) { console.log('  units table missing:', ue.message); unitsOk = false; break }
  const { count: lessonCount } = await sb.from('lessons').select('id', { count: 'exact', head: true }).eq('level_id', lv.id)
  totalUnits += units.length; totalLessons += lessonCount || 0
  console.log(`  ${lv.code}: ${units.length} units, ${lessonCount} lessons`)
}
if (unitsOk) console.log(`\nTOTAL: ${totalUnits} units, ${totalLessons} lessons (target 63 units / 330 lessons)`)
