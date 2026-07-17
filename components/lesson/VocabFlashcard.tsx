'use client'

import { useState } from 'react'
import { Volume2, ChevronRight } from 'lucide-react'
import { speakArabic } from '@/lib/tts'
import type { VocabItem } from '@/lib/preA1Content'

interface Props {
  item: VocabItem
  locale?: string
  onNext: () => void
  totalItems?: number
  currentIndex?: number
}

export default function VocabFlashcard({ item, locale = 'zh', onNext, totalItems, currentIndex }: Props) {
  const [revealed, setRevealed] = useState(false)

  const meaning = locale === 'zh' ? item.meaning_zh : item.meaning_en
  const l = locale as 'zh' | 'en' | 'ar'

  const nextLabel = { zh: '下一个', en: 'Next', ar: 'التالي' }[l]
  const revealLabel = { zh: '显示翻译', en: 'Reveal', ar: 'اكشف' }[l]
  const exampleLabel = { zh: '例句', en: 'Example', ar: 'مثال' }[l]
  const categoryLabel = { zh: '分类', en: 'Category', ar: 'الفئة' }[l]

  const categoryColors: Record<string, string> = {
    greetings: '#10B981', pronouns: '#3B82F6', family: '#F59E0B',
    colors: '#8B5CF6', objects: '#6366F1', food: '#EF4444',
    adjectives: '#EC4899', numbers: '#14B8A6',
  }
  const color = categoryColors[item.category] || '#1E3A5F'

  function handleNext() {
    setRevealed(false)
    onNext()
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Progress dots */}
      {totalItems !== undefined && currentIndex !== undefined && (
        <div className="flex justify-center gap-1 mb-2">
          {Array.from({ length: totalItems }).map((_, i) => (
            <div key={i} className="h-1.5 rounded-full transition-all"
              style={{
                width: i === currentIndex ? 24 : 8,
                background: i <= currentIndex ? color : '#E5E7EB',
              }} />
          ))}
        </div>
      )}

      {/* Card */}
      <div className="rounded-3xl border-2 bg-white shadow-lg overflow-hidden"
        style={{ borderColor: color }}>

        {/* Category header */}
        <div className="px-5 py-2 flex items-center justify-between"
          style={{ background: color + '15' }}>
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color }}>
            {categoryLabel}: {item.category}
          </span>
          {item.emoji && <span className="text-xl">{item.emoji}</span>}
        </div>

        {/* Main content */}
        <div className="p-6 text-center">
          {/* Arabic */}
          <div className="mb-2">
            <span className="text-6xl font-bold leading-none" dir="rtl"
              style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', color: '#1E3A5F' }}>
              {item.arabic_with_harakat}
            </span>
          </div>

          {/* Transliteration */}
          <p className="text-gray-500 text-sm mb-4 italic">{item.transliteration}</p>

          {/* TTS button */}
          <button
            onClick={() => speakArabic(item.arabic)}
            className="mx-auto flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium mb-5 transition-all hover:opacity-90"
            style={{ background: color }}>
            <Volume2 size={15} />
            {locale === 'zh' ? '播放发音' : locale === 'ar' ? 'استمع' : 'Listen'}
          </button>

          {/* Reveal area */}
          {!revealed ? (
            <button onClick={() => setRevealed(true)}
              className="w-full py-3 rounded-2xl border-2 border-dashed font-semibold text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-all"
              style={{ borderColor: color + '66', color }}>
              {revealLabel} →
            </button>
          ) : (
            <div className="space-y-3 animate-in fade-in duration-300">
              {/* Meaning */}
              <div className="rounded-2xl p-4" style={{ background: color + '11' }}>
                <p className="text-3xl font-bold text-gray-800">{meaning}</p>
                {locale === 'zh' && item.meaning_en !== item.meaning_zh && (
                  <p className="text-sm text-gray-500 mt-1">{item.meaning_en}</p>
                )}
              </div>

              {/* Example sentence */}
              {item.example_sentence && (
                <div className="bg-gray-50 rounded-2xl p-4 text-right">
                  <p className="text-xs font-semibold text-gray-500 text-left mb-2">{exampleLabel}</p>
                  <p className="text-lg leading-relaxed" dir="rtl"
                    style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', color: '#1E3A5F' }}>
                    {item.example_sentence}
                  </p>
                  {item.example_meaning_zh && locale === 'zh' && (
                    <p className="text-sm text-gray-600 mt-2 text-left">{item.example_meaning_zh}</p>
                  )}
                  <button onClick={() => speakArabic(item.example_sentence!)}
                    className="mt-2 text-xs flex items-center gap-1 text-gray-500 hover:text-gray-700">
                    <Volume2 size={12} /> {locale === 'zh' ? '播放' : 'Play'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Next button */}
      <button onClick={handleNext}
        className="w-full py-3 rounded-2xl text-white font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90"
        style={{ background: color }}>
        {nextLabel} <ChevronRight size={18} />
      </button>
    </div>
  )
}
