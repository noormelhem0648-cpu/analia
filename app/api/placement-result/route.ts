import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { level_code } = await req.json()

    // Find the level id from levels table
    const { data: level } = await supabase
      .from('levels')
      .select('id')
      .eq('code', level_code)
      .maybeSingle()

    await supabase.from('profiles').update({
      placement_test_done: true,
      placement_level_code: level_code,
      current_level_id: level?.id || 1,
    }).eq('id', user.id)

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
