import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import VocabularyClient from './VocabularyClient'

export default async function VocabularyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const { data: profile } = await supabase.from('profiles').select('total_xp, streak_days').eq('id', user.id).single()

  // Get all vocabulary cards (public)
  const { data: cards } = await supabase.from('vocabulary_cards').select('*').order('id')

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} />
      <VocabularyClient locale={locale} cards={cards || []} />
    </div>
  )
}
