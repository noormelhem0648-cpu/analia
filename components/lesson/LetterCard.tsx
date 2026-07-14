'use client'

import { useState } from 'react'

interface LetterData {
  letter: string
  name_ar: string
  name_en: string
  name_zh: string
  transliteration: string
  isolated: string
  initial: string
  medial: string
  final: string
  example_word: string
  example_meaning_en: string
  example_meaning_zh: string
  sound_description?: string
}

interface Props {
  data: LetterData
  locale?: string
  onFlip?: () => void
}

export default function LetterCard({ data, locale = 'zh', onFlip }: Props) {
  const [flipped, setFlipped] = useState(false)

  function handleFlip() {
    setFlipped(f => !f)
    onFlip?.()
  }

  const name = locale === 'zh' ? data.name_zh : locale === 'ar' ? data.name_ar : data.name_en
  const exampleMeaning = locale === 'zh' ? data.example_meaning_zh : data.example_meaning_en

  return (
    <div
      onClick={handleFlip}
      className="cursor-pointer select-none"
      style={{ perspective: '1000px', width: '100%', height: '280px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center shadow-lg border border-gray-100"
          style={{ backfaceVisibility: 'hidden', background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}
        >
          <span
            className="text-8xl text-white mb-4"
            dir="rtl"
            style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', lineHeight: 1 }}
          >
            {data.isolated}
          </span>
          <p className="text-white/70 text-sm">{data.transliteration}</p>
          <p className="text-white/50 text-xs mt-1">{locale === 'ar' ? 'اضغط لعرض التفاصيل' : locale === 'zh' ? '点击查看详情' : 'Tap to reveal'}</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-3xl p-6 shadow-lg bg-white border border-gray-100"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
                  <p className="text-gray-400 text-sm">{data.transliteration}</p>
                </div>
                <span className="text-4xl" dir="rtl" style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif' }}>
                  {data.isolated}
                </span>
              </div>

              {/* 4 forms */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  { label: locale === 'ar' ? 'مستقل' : locale === 'zh' ? '独立' : 'Isolated', form: data.isolated },
                  { label: locale === 'ar' ? 'أول' : locale === 'zh' ? '词首' : 'Initial', form: data.initial },
                  { label: locale === 'ar' ? 'وسط' : locale === 'zh' ? '词中' : 'Medial', form: data.medial },
                  { label: locale === 'ar' ? 'آخر' : locale === 'zh' ? '词尾' : 'Final', form: data.final },
                ].map(({ label, form }) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-2 text-center">
                    <span className="text-3xl block font-bold" dir="rtl"
                      style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', color: '#1E3A5F' }}>
                      {form}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Example */}
            <div className="bg-blue-50 rounded-xl p-3 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{locale === 'ar' ? 'مثال' : locale === 'zh' ? '例词' : 'Example'}</p>
                <p className="text-sm text-gray-600">{exampleMeaning}</p>
              </div>
              <span className="text-2xl" dir="rtl" style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', color: '#1E3A5F' }}>
                {data.example_word}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
