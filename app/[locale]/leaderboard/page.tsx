import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import LeaderboardClient from './LeaderboardClient'

export default async function LeaderboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const [{ data: profile }, { data: top }] = await Promise.all([
    supabase.from('profiles').select('total_xp, streak_days').eq('id', user.id).maybeSingle(),
    supabase
      .from('profiles')
      .select('id, display_name, username, total_xp, streak_days')
      .order('total_xp', { ascending: false })
      .limit(50),
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
      <LeaderboardClient
        locale={locale}
        currentUserId={user.id}
        entries={top || []}
      />
    </div>
  )
}
