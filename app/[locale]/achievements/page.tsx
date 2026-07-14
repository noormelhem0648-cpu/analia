import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import AchievementsClient from './AchievementsClient'

export default async function AchievementsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const [{ data: profile }, { data: achievements }, { data: userAchievements }, { count: lessonsCount }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).single(),
    supabase.from('achievements').select('*').order('condition_value'),
    supabase.from('user_achievements').select('achievement_id, earned_at').eq('user_id', user.id),
    supabase.from('user_lesson_progress').select('*', { count: 'exact', head: true }).eq('user_id', user.id).eq('status', 'completed'),
  ])

  // Check and grant any newly earned achievements
  await supabase.rpc('check_and_grant_achievements', { p_user_id: user.id })
  // Update streak
  await supabase.rpc('update_streak', { p_user_id: user.id })

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} isAdmin={user.email === process.env.ADMIN_EMAIL} />
      <AchievementsClient
        locale={locale}
        achievements={achievements || []}
        userAchievements={userAchievements || []}
        totalXp={profile?.total_xp || 0}
        streak={profile?.streak_days || 0}
        lessonsCount={lessonsCount || 0}
      />
    </div>
  )
}
