import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import ReviewClient from './ReviewClient'

export default async function ReviewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const [{ data: profile }, { data: dueCards }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).maybeSingle(),
    supabase
      .from('user_vocabulary_srs')
      .select(`
        id, card_id, easiness_factor, interval_days, repetitions, next_review_date,
        vocabulary_cards (
          id, word_ar, word_transliteration, meaning_en, meaning_zh, meaning_ar,
          example_sentence_ar
        )
      `)
      .eq('user_id', user.id)
      .lte('next_review_date', new Date().toISOString().split('T')[0])
      .order('next_review_date')
      .limit(20),
  ])

  // Supabase returns vocabulary_cards as an array for joined relations; normalize to single object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const normalizedCards = ((dueCards || []).map((row: any) => ({
    ...row,
    vocabulary_cards: Array.isArray(row.vocabulary_cards)
      ? (row.vocabulary_cards[0] ?? null)
      : row.vocabulary_cards,
  })) as unknown) as Parameters<typeof ReviewClient>[0]['dueCards']

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} />
      <ReviewClient locale={locale} dueCards={normalizedCards} />
    </div>
  )
}
