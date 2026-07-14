import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import LeaderboardClient from './LeaderboardClient'

export default async function LeaderboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const [{ data: profile }, { data: topUsers }] = await Promise.all([
    supabase.from('profiles').select('total_xp, streak_days').eq('id', user.id).maybeSingle(),
    supabase.from('profiles')
      .select('id, display_name, username, total_xp, streak_days, placement_level_code')
      .order('total_xp', { ascending: false })
      .limit(50),
  ])

  const myRank = (topUsers || []).findIndex(u => u.id === user.id) + 1

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} />
      <LeaderboardClient locale={locale} users={topUsers || []} myId={user.id} myRank={myRank} />
    </div>
  )
}
