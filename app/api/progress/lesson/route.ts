import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { lesson_id, status, score, time_spent_seconds, xp_earned } = await req.json()
    if (!lesson_id) return NextResponse.json({ error: 'Missing lesson_id' }, { status: 400 })

    // Upsert progress
    const { error: progressErr } = await supabase
      .from('user_lesson_progress')
      .upsert({
        user_id: user.id,
        lesson_id,
        status,
        score,
        time_spent_seconds,
        completed_at: status === 'completed' ? new Date().toISOString() : null,
      }, { onConflict: 'user_id,lesson_id' })

    if (progressErr) throw progressErr

    // Award XP if completed
    if (status === 'completed' && xp_earned) {
      await supabase.rpc('increment_xp', { user_id: user.id, xp_amount: xp_earned })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
