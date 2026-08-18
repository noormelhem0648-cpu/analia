import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
const env = readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
const get = k => env.match(new RegExp(`^${k}=(.*)$`, 'm'))?.[1]?.trim()
const sb = createClient(get('NEXT_PUBLIC_SUPABASE_URL'), get('SUPABASE_SECRET_KEY'))

console.log('===== CHINESE PATH AUDIT =====\n')

// 1. Levels
const { data: levels } = await sb.from('levels').select('id, code, name_ar, order_index, lang_pair, xp_required').eq('lang_pair','zh').order('order_index')
console.log('1) zh levels:', levels.length)

// 2. Units + lessons per level, check orphans
let totalUnits = 0, totalLessons = 0, orphanLessons = 0
for (const lv of levels) {
  const { data: units } = await sb.from('units').select('id, order_index, code').eq('level_id', lv.id).order('order_index')
  const { data: lessons } = await sb.from('lessons').select('id, unit_id, order_index, lesson_type').eq('level_id', lv.id)
  totalUnits += units.length; totalLessons += lessons.length
  const orphans = lessons.filter(l => !l.unit_id).length
  orphanLessons += orphans
  // duplicate order_index within level?
  const orders = lessons.map(l=>l.order_index)
  const dupOrders = orders.length !== new Set(orders).size
  console.log(`   ${lv.code}: ${units.length}u / ${lessons.length}L${orphans?` ⚠️ ${orphans} orphan`:''}${dupOrders?' ⚠️ dup order_index':''}`)
}
console.log(`   TOTAL: ${totalUnits}u / ${totalLessons}L, orphans=${orphanLessons}`)

// 3. lesson_type distribution (must be valid enum)
const { data: allZhLessons } = await sb.from('lessons').select('lesson_type, level_id').in('level_id', levels.map(l=>l.id))
const types = {}
allZhLessons.forEach(l => types[l.lesson_type] = (types[l.lesson_type]||0)+1)
console.log('\n2) lesson_type distribution:', JSON.stringify(types))

// 4. content_data presence
const { data: withContent } = await sb.from('lessons').select('id', { count:'exact', head:true }).in('level_id', levels.map(l=>l.id)).neq('content_data','{}')
console.log('3) lessons with content_data:', withContent ?? 0, '(rest use generated fallback)')

// 5. next-lesson navigation check: are order_index contiguous per level?
for (const lv of levels.slice(0,2)) {
  const { data: ls } = await sb.from('lessons').select('order_index').eq('level_id', lv.id).order('order_index')
  const orders = ls.map(l=>l.order_index)
  console.log(`   ${lv.code} order_index range: ${orders[0]}..${orders[orders.length-1]} (count ${orders.length})`)
}

// 6. profile direction of real user
const { data: prof } = await sb.from('profiles').select('learning_direction, current_level_id, placement_test_done').eq('email','nooralnimer2006@gmail.com').maybeSingle()
console.log('\n4) real user:', JSON.stringify(prof))
