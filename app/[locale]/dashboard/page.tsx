import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import DashboardClient from './DashboardClient'

export default async function DashboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  // Fire-and-forget streak + achievements update
  supabase.rpc('update_streak', { p_user_id: user.id }).then(() =>
    supabase.rpc('check_and_grant_achievements', { p_user_id: user.id })
  )

  const [{ data: profile }, { data: levels }, { data: recentProgress }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).maybeSingle(),
    supabase.from('levels').select('*').order('order_index'),
    supabase.from('user_lesson_progress')
      .select('*, lessons(title, level_id)')
      .eq('user_id', user.id)
      .order('last_studied_at', { ascending: false })
      .limit(3),
  ])

  const isAdmin = user.email === process.env.ADMIN_EMAIL

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
        levels={levels || []}
        recentProgress={recentProgress || []}
      />
    </div>
  )
}
