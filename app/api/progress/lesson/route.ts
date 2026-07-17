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

    if (status === 'completed') {
      // Award XP
      if (xp_earned) {
        await supabase.rpc('increment_xp', { user_id: user.id, xp_amount: xp_earned })
      }

      // Update streak (fire-and-forget — non-fatal if fails)
      try { await supabase.rpc('update_streak', { p_user_id: user.id }) } catch {}

      // Check and grant achievements then fetch newly unlocked ones
      try { await supabase.rpc('check_and_grant_achievements', { p_user_id: user.id }) } catch {}

      const { data: newAchievements } = await supabase
        .from('user_achievements')
        .select('achievements(icon, name_ar, name_en, name_zh)')
        .eq('user_id', user.id)
        .gte('earned_at', new Date(Date.now() - 10_000).toISOString())

      return NextResponse.json({ ok: true, achievements: newAchievements?.map(r => r.achievements) ?? [] })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
