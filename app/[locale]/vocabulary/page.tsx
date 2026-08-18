import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import VocabularyClient, { type UnifiedCard } from './VocabularyClient'
import { isChineseDirection } from '@/lib/chinese'
import {
  HSK1_GREETINGS, HSK1_PRONOUNS, HSK1_NUMBERS, HSK1_FAMILY, HSK1_FOOD, HSK1_PLACES, HSK1_VERBS, HSK1_TIME, HSK1_ADJECTIVES, HSK1_QUESTION_WORDS,
  HSK2_DAILY_LIFE, HSK2_WORK_STUDY, HSK2_BODY_HEALTH, HSK2_EMOTIONS, HSK3_SOCIETY, HSK3_CULTURE,
  HSK4_BUSINESS, HSK4_SOCIETY, HSK4_ADVANCED_VERBS, HSK5_ACADEMIC, HSK5_ADVANCED_EXPRESSIONS, HSK6_LITERARY, HSK6_MASTERY,
  type HskItem,
} from '@/lib/hskContent'

const ALL_HSK: HskItem[] = [
  ...HSK1_GREETINGS, ...HSK1_PRONOUNS, ...HSK1_NUMBERS, ...HSK1_FAMILY, ...HSK1_FOOD, ...HSK1_PLACES, ...HSK1_VERBS, ...HSK1_TIME, ...HSK1_ADJECTIVES, ...HSK1_QUESTION_WORDS,
  ...HSK2_DAILY_LIFE, ...HSK2_WORK_STUDY, ...HSK2_BODY_HEALTH, ...HSK2_EMOTIONS, ...HSK3_SOCIETY, ...HSK3_CULTURE,
  ...HSK4_BUSINESS, ...HSK4_SOCIETY, ...HSK4_ADVANCED_VERBS, ...HSK5_ACADEMIC, ...HSK5_ADVANCED_EXPRESSIONS, ...HSK6_LITERARY, ...HSK6_MASTERY,
]

function buildChineseCards(): UnifiedCard[] {
  return ALL_HSK.map((v, i) => ({
    id: `zh-${i}`,
    arabic: v.hanzi,
    arabic_with_harakat: v.hanzi,
    transliteration: v.pinyin,
    meaning_zh: v.meaning_ar,
    meaning_en: v.meaning_en,
    meaning_ar: v.meaning_ar,
    category: v.category || `HSK${v.hsk_level}`,
    example_sentence: v.example_zh,
    emoji: v.emoji || '🀄',
  }))
}

export default async function VocabularyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const { data: profile } = await supabase.from('profiles').select('total_xp, streak_days, learning_direction').eq('id', user.id).maybeSingle()
  const isChinese = isChineseDirection((profile as { learning_direction?: string } | null)?.learning_direction)

  const [{ data: cards }, { count: dueCount }] = await Promise.all([
    supabase.from('vocabulary_cards').select('*').order('id'),
    supabase
      .from('user_vocabulary_srs')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .lte('next_review_date', new Date().toISOString().split('T')[0]),
  ])

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} isAdmin={user.email === process.env.ADMIN_EMAIL} />
      <VocabularyClient
        locale={locale}
        cards={cards || []}
        dueCount={dueCount || 0}
        isChinese={isChinese}
        chineseBuiltin={isChinese ? buildChineseCards() : []}
      />
    </div>
  )
}
