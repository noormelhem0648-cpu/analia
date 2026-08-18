import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
const env = readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
const get = k => env.match(new RegExp(`^${k}=(.*)$`, 'm'))?.[1]?.trim()
const sb = createClient(get('NEXT_PUBLIC_SUPABASE_URL'), get('SUPABASE_SECRET_KEY'))

// 1. Old HSK levels hidden?
const { data: old } = await sb.from('levels').select('code, lang_pair').in('code', ['pre-hsk','hsk1','hsk6'])
console.log('=== old HSK levels lang_pair (should be retired-zh) ===')
old?.forEach(l => console.log(`  ${l.code}: ${l.lang_pair}`))

// 2. Simulate ar_learns_zh filter — what a Chinese learner sees
const { data: levels } = await sb.from('levels').select('code, name_en, lang_pair').order('order_index')
const shown = levels.filter(l => l.lang_pair === 'zh')
console.log('\n=== levels shown to ar_learns_zh learner ===', shown.length)
shown.forEach(l => console.log(`  ${l.code} — ${l.name_en}`))

// 3. Sample a lesson from zh-pre-a1 unit 1 (structure check)
const { data: lvl } = await sb.from('levels').select('id').eq('code','zh-pre-a1').maybeSingle()
const { data: units } = await sb.from('units').select('id, title_en, order_index').eq('level_id', lvl.id).order('order_index')
console.log('\n=== zh-pre-a1 units ===')
for (const u of units) {
  const { data: ls } = await sb.from('lessons').select('title_en, unit_id, order_index').eq('unit_id', u.id).order('order_index')
  console.log(`  U${u.order_index} ${u.title_en}: ${ls.length} lessons — e.g. "${ls[0]?.title_en}"`)
}

// 4. Ensure real user is on Chinese path
const { data: prof } = await sb.from('profiles').select('learning_direction').eq('email','nooralnimer2006@gmail.com').maybeSingle()
console.log('\n=== real user learning_direction ===', prof?.learning_direction)
