'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { speakArabic } from '@/lib/tts'

const tx = {
  zh: { title: '词汇库', subtitle: '学过的所有阿拉伯语单词', search: '搜索词汇...', meaning: '含义', example: '例句', all: '全部', no_results: '没有找到词汇' },
  en: { title: 'Vocabulary', subtitle: 'All Arabic words you have learned', search: 'Search words...', meaning: 'Meaning', example: 'Example', all: 'All', no_results: 'No vocabulary found' },
  ar: { title: 'المفردات', subtitle: 'جميع الكلمات العربية التي تعلمتها', search: 'ابحث عن كلمة...', meaning: 'المعنى', example: 'مثال', all: 'الكل', no_results: 'لا توجد مفردات' },
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
}

export default function VocabularyClient({ locale, cards }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const [search, setSearch] = useState('')
  const [flipped, setFlipped] = useState<number | null>(null)

  const filtered = cards.filter(c => {
    const q = search.toLowerCase()
    return !q || c.word_ar.includes(q) ||
      (c.meaning_en || '').toLowerCase().includes(q) ||
      (c.meaning_zh || '').toLowerCase().includes(q) ||
      (c.word_transliteration || '').toLowerCase().includes(q)
  })

  function getMeaning(c: VocabCard) {
    return locale === 'zh' ? c.meaning_zh : locale === 'ar' ? c.meaning_ar : c.meaning_en
  }

  return (
    <main className="ml-20 lg:ml-64 flex-1 p-6 lg:p-10">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-gray-700 mt-1">{t.subtitle}</p>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={t.search}
          className="w-full max-w-md pl-11 pr-4 py-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 bg-white shadow-sm"
        />
      </div>

      {cards.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4" style={{ fontFamily: 'Amiri, serif' }}>كلمات</div>
          <p className="text-gray-600 text-lg font-medium">{t.no_results}</p>
          <p className="text-gray-600 text-sm mt-2">
            {locale === 'ar' ? 'أكمل دروساً لتظهر المفردات هنا' : locale === 'zh' ? '完成课程后词汇将显示在这里' : 'Complete lessons to see vocabulary here'}
          </p>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-4">{filtered.length} {locale === 'ar' ? 'كلمة' : locale === 'zh' ? '个词' : 'words'}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map(card => (
              <div key={card.id}
                onClick={() => setFlipped(flipped === card.id ? null : card.id)}
                className="cursor-pointer select-none"
                style={{ perspective: '800px', height: '140px' }}>
                <div className="relative w-full h-full transition-transform duration-400"
                  style={{ transformStyle: 'preserve-3d', transform: flipped === card.id ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                  {/* Front */}
                  <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center shadow-sm border border-gray-100"
                    style={{ backfaceVisibility: 'hidden', background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
                    <span className="text-3xl text-white mb-1" dir="rtl"
                      style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif' }}>
                      {card.word_ar}
                    </span>
                    {card.word_transliteration && (
                      <span className="text-blue-200 text-xs mb-1">{card.word_transliteration}</span>
                    )}
                    <button onClick={e => { e.stopPropagation(); speakArabic(card.word_ar) }}
                      className="text-white/80 hover:text-white text-xs mt-1 flex items-center gap-1 transition-colors">
                      🔊
                    </button>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-3 shadow-sm bg-white border border-gray-100"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <p className="text-sm font-semibold text-gray-800 text-center">{getMeaning(card)}</p>
                    {card.example_sentence_ar && (
                      <p className="text-xs text-gray-600 text-center mt-2 leading-relaxed" dir="rtl"
                        style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif' }}>
                        {card.example_sentence_ar}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  )
}
