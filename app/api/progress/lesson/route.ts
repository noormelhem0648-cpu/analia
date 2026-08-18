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
        xp_earned: xp_earned ?? null,
        completed_at: status === 'completed' ? new Date().toISOString() : null,
      }, { onConflict: 'user_id,lesson_id' })

    if (progressErr) throw progressErr

    if (status === 'completed') {
      // Award XP (non-fatal)
      if (xp_earned) {
        try { await supabase.rpc('increment_xp', { user_id: user.id, xp_amount: xp_earned }) } catch {}
      }

      // Update streak (non-fatal)
      try { await supabase.rpc('update_streak', { p_user_id: user.id }) } catch {}

      // Check and grant achievements (non-fatal)
      try { await supabase.rpc('check_and_grant_achievements', { p_user_id: user.id }) } catch {}

      // Social: broadcast activity + advance active challenges (all non-fatal)
      try { await supabase.from('activity_events').insert({ user_id: user.id, type: 'lesson_completed', meta: { lesson_id } }) } catch {}
      try { await supabase.rpc('bump_challenges', { p_user_id: user.id, p_type: 'lessons', p_amount: 1 }) } catch {}
      if (xp_earned) {
        try { await supabase.rpc('bump_challenges', { p_user_id: user.id, p_type: 'xp', p_amount: xp_earned }) } catch {}
      }

      // Update daily XP and total lessons counter
      try {
        await supabase.rpc('update_daily_xp', {
          p_user_id: user.id,
          p_xp: xp_earned ?? 0,
          p_minutes: Math.round((time_spent_seconds ?? 0) / 60),
        })
      } catch {}

      // Check if entire level is now complete → issue certificate
      try {
        const { data: lessonData } = await supabase
          .from('lessons').select('level_id').eq('id', lesson_id).maybeSingle()
        if (lessonData?.level_id) {
          await supabase.rpc('issue_certificate', {
            p_user_id: user.id,
            p_level_id: lessonData.level_id,
          })
        }
      } catch {}

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
