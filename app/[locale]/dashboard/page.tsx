import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import DashboardClient from './DashboardClient'

export default async function DashboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  // Best-effort streak + achievements update (non-fatal)
  await Promise.allSettled([
    supabase.rpc('update_streak', { p_user_id: user.id }),
    supabase.rpc('check_and_grant_achievements', { p_user_id: user.id }),
  ])

  const [{ data: profile }, { data: recentProgress }, { count: totalLessonsCount }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).maybeSingle(),
    supabase.from('user_lesson_progress')
      .select('*, lessons(title_ar, title_en, title_zh, level_id)')
      .eq('user_id', user.id)
      .order('last_studied_at', { ascending: false })
      .limit(5),
    supabase.from('user_lesson_progress')
      .select('lesson_id', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('status', 'completed'),
  ])

  const isAdmin = user.email === process.env.ADMIN_EMAIL
  const direction = (profile as Record<string, unknown> | null)?.learning_direction as string || 'zh_learns_ar'

  // Filter levels by learning direction
  const { data: allLevels } = await supabase.from('levels').select('*').order('order_index')
  const hasLangPair = (allLevels || []).some((l: Record<string, unknown>) => l.lang_pair != null)
  const levels = (allLevels || []).filter((l: Record<string, unknown>) => {
    if (!hasLangPair) return true
    if (direction === 'ar_learns_zh') return l.lang_pair === 'zh'
    return !l.lang_pair || l.lang_pair === 'ar'
  })

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar
        locale={locale}
        xp={profile?.total_xp || 0}
        streak={profile?.streak_days || 0}
        isAdmin={isAdmin}
      />
      <DashboardClient
        locale={locale}
        profile={profile}
        levels={levels}
        recentProgress={recentProgress || []}
        learningDirection={direction}
        totalLessons={totalLessonsCount ?? (profile as Record<string, unknown> | null)?.total_lessons_completed as number ?? 0}
        serverXpToday={(profile as Record<string, unknown> | null)?.xp_today as number ?? 0}
        serverMinutesToday={(profile as Record<string, unknown> | null)?.study_minutes_today as number ?? 0}
      />
    </div>
  )
}
