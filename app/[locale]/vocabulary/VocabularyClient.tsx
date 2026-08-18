'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, BookOpen } from 'lucide-react'
import { speakArabic } from '@/lib/tts'
import { PRE_A1_GREETINGS, ARABIC_NUMBERS, PRE_A1_VOCAB } from '@/lib/preA1Content'
import { A1_PRONOUNS, A1_PROFESSIONS, A1_PLACES, A1_TIME, A1_VERBS_PAST, A1_VERBS_PRESENT } from '@/lib/a1Content'
import { A2_SENTENCE_STRUCTURE, A2_BODY_HEALTH, A2_FOOD, A2_TRAVEL, A2_COMPARISON, A2_FAMILY } from '@/lib/a2Content'
import { B1_VERBS, B1_CULTURE, B1_WORK, B1_OPINION, B1_HOBBIES, B1_CITY, B1_GRAMMAR } from '@/lib/b1Content'
import { B2_ABSTRACT, B2_MEDIA, B2_POLITICS, B2_ACADEMIC, B2_ADVANCED_VERBS, B2_ECONOMY, B2_ENVIRONMENT } from '@/lib/b2Content'
import { C1_RHETORIC, C1_CLASSICAL, C1_PHILOSOPHY, C1_DIALECTS, C2_LITERARY, C2_ACADEMIC_ADVANCED, C2_TRANSLATION } from '@/lib/c1c2Content'

const tx = {
  zh: { title: '词汇库', subtitle: '所有阿拉伯语单词', search: '搜索词汇...', meaning: '含义', example: '例句', all: '全部', no_results: '没有找到词汇', builtin: '内置词汇', db: '我的学习词汇', words: '个词', category: '分类', filter_all: '全部分类' },
  en: { title: 'Vocabulary', subtitle: 'All Arabic words', search: 'Search words...', meaning: 'Meaning', example: 'Example', all: 'All', no_results: 'No vocabulary found', builtin: 'Built-in Vocab', db: 'My Learned Words', words: 'words', category: 'Category', filter_all: 'All Categories' },
  ar: { title: 'المفردات', subtitle: 'جميع الكلمات العربية', search: 'ابحث عن كلمة...', meaning: 'المعنى', example: 'مثال', all: 'الكل', no_results: 'لا توجد مفردات', builtin: 'المفردات الأساسية', db: 'مفرداتي', words: 'كلمة', category: 'الفئة', filter_all: 'كل الفئات' },
}

// Merge all built-in vocab into a unified list
const ALL_BUILTIN = [
  ...PRE_A1_GREETINGS,
  ...ARABIC_NUMBERS,
  ...PRE_A1_VOCAB,
  ...A1_PRONOUNS,
  ...A1_PROFESSIONS,
  ...A1_PLACES,
  ...A1_TIME,
  ...A1_VERBS_PAST,
  ...A1_VERBS_PRESENT,
  ...A2_SENTENCE_STRUCTURE,
  ...A2_BODY_HEALTH,
  ...A2_FOOD,
  ...A2_TRAVEL,
  ...A2_COMPARISON,
  ...A2_FAMILY,
  ...B1_VERBS,
  ...B1_CULTURE,
  ...B1_WORK,
  ...B1_OPINION,
  ...B1_HOBBIES,
  ...B1_CITY,
  ...B1_GRAMMAR,
  ...B2_ABSTRACT,
  ...B2_MEDIA,
  ...B2_POLITICS,
  ...B2_ACADEMIC,
  ...B2_ADVANCED_VERBS,
  ...B2_ECONOMY,
  ...B2_ENVIRONMENT,
  ...C1_RHETORIC,
  ...C1_CLASSICAL,
  ...C1_PHILOSOPHY,
  ...C1_DIALECTS,
  ...C2_LITERARY,
  ...C2_ACADEMIC_ADVANCED,
  ...C2_TRANSLATION,
]

// Pre-mapped at module level — avoids re-computing on every render
const BUILTIN_UNIFIED = ALL_BUILTIN.map((v, i) => ({
  id: `bi-${i}`,
  arabic: v.arabic,
  arabic_with_harakat: v.arabic_with_harakat,
  transliteration: v.transliteration,
  meaning_zh: v.meaning_zh,
  meaning_en: v.meaning_en,
  meaning_ar: '',
  category: v.category,
  example_sentence: v.example_sentence,
  emoji: v.emoji,
}))

// Unified card shape shared by Arabic and Chinese modes
export interface UnifiedCard {
  id: string
  arabic: string
  arabic_with_harakat: string
  transliteration: string
  meaning_zh: string
  meaning_en: string
  meaning_ar: string
  category: string
  example_sentence?: string
  emoji?: string
}

function speakChinese(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'zh-CN'; u.rate = 0.85
  window.speechSynthesis.cancel(); window.speechSynthesis.speak(u)
}


const CATEGORY_COLORS: Record<string, string> = {
  greetings: '#10B981', numbers: '#14B8A6', pronouns: '#3B82F6',
  family: '#F59E0B', colors: '#8B5CF6', objects: '#6366F1',
  food: '#EF4444', adjectives: '#C9858A', professions: '#F97316',
  places: '#06B6D4', nationalities: '#84CC16', time: '#A78BFA',
  verbs: '#C9858A', sentences: '#0EA5E9', demonstratives: '#7C3AED',
}

interface VocabCard {
  id: number
  word_ar: string
  word_transliteration?: string
  meaning_en?: string
  meaning_zh?: string
  meaning_ar?: string
  example_sentence_ar?: string
}

interface Props {
  locale: string
  cards: VocabCard[]
  dueCount?: number
  isChinese?: boolean
  chineseBuiltin?: UnifiedCard[]
}

export default function VocabularyClient({ locale, cards, dueCount = 0, isChinese = false, chineseBuiltin = [] }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const [search, setSearch] = useState('')
  const [flippedId, setFlippedId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'builtin' | 'db'>('builtin')
  const [categoryFilter, setCategoryFilter] = useState('all')

  // Unify DB cards into same shape as builtin
  const dbUnified: UnifiedCard[] = cards.map(c => ({
    id: `db-${c.id}`,
    arabic: c.word_ar,
    arabic_with_harakat: c.word_ar,
    transliteration: c.word_transliteration || '',
    meaning_zh: c.meaning_zh || '',
    meaning_en: c.meaning_en || '',
    meaning_ar: c.meaning_ar || '',
    category: 'learned',
    example_sentence: c.example_sentence_ar,
    emoji: '📖',
  }))

  const builtinSource: UnifiedCard[] = isChinese ? chineseBuiltin : BUILTIN_UNIFIED
  const sourceList = activeTab === 'builtin' ? builtinSource : dbUnified
  const categories = ['all', ...Array.from(new Set(builtinSource.map(v => v.category)))]
  const subtitle = isChinese
    ? (locale === 'zh' ? '所有汉语词汇' : locale === 'ar' ? 'جميع الكلمات الصينية' : 'All Chinese words')
    : t.subtitle

  const filtered = sourceList.filter(c => {
    const q = search.toLowerCase()
    const matchSearch = !q || c.arabic.includes(q) ||
      c.meaning_en.toLowerCase().includes(q) ||
      c.meaning_zh.toLowerCase().includes(q) ||
      c.transliteration.toLowerCase().includes(q)
    const matchCat = categoryFilter === 'all' || c.category === categoryFilter
    return matchSearch && matchCat
  })

  function getMeaning(c: typeof filtered[0]) {
    if (isChinese && locale === 'ar' && c.meaning_ar) return c.meaning_ar
    return locale === 'zh' ? c.meaning_zh : c.meaning_en
  }

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{t.title}</h1>
          <p className="text-gray-700 mt-1">{subtitle}</p>
        </div>
        <Link href={`/${locale}/vocabulary/review`}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium shrink-0"
          style={{ background: '#C9858A' }}>
          🔁 {locale === 'ar' ? 'مراجعة اليوم' : locale === 'zh' ? '今日复习' : "Today's Review"}
          {dueCount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{dueCount}</span>
          )}
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(['builtin', 'db'] as const).map(tab => (
          <button key={tab} onClick={() => { setActiveTab(tab); setFlippedId(null); setCategoryFilter('all') }}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === tab ? 'text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
            style={activeTab === tab ? { background: 'linear-gradient(135deg, #C9858A, #A96368)' } : {}}>
            {tab === 'builtin'
              ? `${t.builtin} (${BUILTIN_UNIFIED.length})`
              : `${t.db} (${dbUnified.length})`}
          </button>
        ))}
      </div>

      {/* Search + Category Filter */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t.search}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 bg-white shadow-sm"
          />
        </div>
        {activeTab === 'builtin' && (
          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="border border-gray-200 rounded-xl text-sm px-3 py-2.5 bg-white shadow-sm focus:outline-none focus:border-blue-300">
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? t.filter_all : cat}
              </option>
            ))}
          </select>
        )}
      </div>

      <p className="text-sm text-gray-500 mb-4">{filtered.length} {t.words}</p>

      {/* Empty state for DB tab */}
      {activeTab === 'db' && dbUnified.length === 0 && (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-600 font-medium">{t.no_results}</p>
          <p className="text-gray-500 text-sm mt-1">
            {locale === 'zh' ? '完成课程后这里会显示你学过的词汇' : locale === 'ar' ? 'أكمل دروساً لتظهر المفردات هنا' : 'Complete lessons to see your learned vocabulary here'}
          </p>
        </div>
      )}

      {/* Cards grid */}
      {filtered.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map(card => {
            const color = CATEGORY_COLORS[card.category] || '#C9858A'
            const isFlipped = flippedId === card.id
            return (
              <div key={card.id}
                onClick={() => setFlippedId(isFlipped ? null : card.id)}
                className="cursor-pointer select-none"
                style={{ perspective: '800px', height: '150px' }}>
                <div className="relative w-full h-full transition-transform duration-500"
                  style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>

                  {/* Front */}
                  <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center shadow-sm border-b-4 bg-white overflow-hidden"
                    style={{ backfaceVisibility: 'hidden', borderBottomColor: color }}>
                    {card.emoji && <span className="text-xl mb-1">{card.emoji}</span>}
                    <span className="text-2xl font-bold text-gray-800 mb-0.5" dir={isChinese ? 'ltr' : 'rtl'}
                      style={{ fontFamily: isChinese ? 'Noto Sans SC, sans-serif' : 'Noto Naskh Arabic, Amiri, serif', color: '#C9858A' }}>
                      {card.arabic_with_harakat}
                    </span>
                    {card.transliteration && (
                      <span className="text-[10px] text-gray-500 italic">{card.transliteration}</span>
                    )}
                    <button onClick={e => { e.stopPropagation(); if (isChinese) speakChinese(card.arabic); else speakArabic(card.arabic) }}
                      className="mt-1.5 text-xs px-2 py-0.5 rounded-full text-white transition-all hover:opacity-80"
                      style={{ background: color }}>
                      🔊
                    </button>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-3 shadow-sm bg-white border border-gray-100"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <span className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color }}>
                      {card.category}
                    </span>
                    <p className="text-sm font-bold text-gray-800 text-center">{getMeaning(card)}</p>
                    {card.example_sentence && (
                      <p className="text-[10px] text-gray-500 text-center mt-1.5 leading-relaxed line-clamp-2" dir={isChinese ? 'ltr' : 'rtl'}
                        style={{ fontFamily: isChinese ? 'Noto Sans SC, sans-serif' : 'Noto Naskh Arabic, Amiri, serif' }}>
                        {card.example_sentence}
                      </p>
                    )}
                    <button onClick={e => { e.stopPropagation(); if (card.example_sentence) { if (isChinese) speakChinese(card.example_sentence); else speakArabic(card.example_sentence) } }}
                      className="mt-1.5 text-[10px] text-gray-400 hover:text-gray-600">
                      🔊 {locale === 'zh' ? '例句' : 'example'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </main>
  )
}
