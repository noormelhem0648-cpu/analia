import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import ExchangeClient, { type Partner } from './ExchangeClient'

export default async function ExchangePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const { data: profile } = await supabase
    .from('profiles').select('total_xp, streak_days, learning_direction, exchange_opt_in, bio').eq('id', user.id).maybeSingle()

  const myDir = (profile as { learning_direction?: string } | null)?.learning_direction || 'zh_learns_ar'
  // A good partner learns MY native language: opposite direction.
  const partnerDir = myDir === 'ar_learns_zh' ? 'zh_learns_ar' : 'ar_learns_zh'

  const { data: partnersRaw } = await supabase
    .from('profiles')
    .select('id, username, display_name, total_xp, streak_days, bio')
    .eq('learning_direction', partnerDir)
    .eq('exchange_opt_in', true)
    .neq('id', user.id)
    .order('streak_days', { ascending: false })
    .limit(40)

  const partners: Partner[] = (partnersRaw || []).map(p => ({
    id: p.id, username: p.username, display_name: p.display_name, total_xp: p.total_xp || 0, streak_days: p.streak_days || 0, bio: p.bio || '',
  }))

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} isAdmin={user.email === process.env.ADMIN_EMAIL} />
      <ExchangeClient
        locale={locale}
        partners={partners}
        myDirection={myDir}
        optedIn={!!(profile as { exchange_opt_in?: boolean } | null)?.exchange_opt_in}
        bio={(profile as { bio?: string } | null)?.bio || ''}
      />
    </div>
  )
}
