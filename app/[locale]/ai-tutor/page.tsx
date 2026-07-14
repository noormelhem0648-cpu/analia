import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import AiTutorClient from './AiTutorClient'

export default async function AiTutorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle()

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} isAdmin={user.email === process.env.ADMIN_EMAIL} />
      <AiTutorClient
        locale={locale}
        userName={profile?.display_name || profile?.username || 'Learner'}
        uiLanguage={profile?.ui_language || locale}
        currentLevel={profile?.current_level_id || 1}
      />
    </div>
  )
}
