'use client'

import { useState } from 'react'
import { speakArabic } from '@/lib/tts'
import ArticulationDiagram from './ArticulationDiagram'
import type { ArabicLetter } from '@/lib/arabicAlphabet'

interface Props {
  data: ArabicLetter
  locale?: string
  onFlip?: () => void
}

const DIFFICULTY_LABEL: Record<number, { zh: string; en: string; color: string }> = {
  1: { zh: '简单', en: 'Easy', color: '#10B981' },
  2: { zh: '中等', en: 'Medium', color: '#F59E0B' },
  3: { zh: '较难', en: 'Hard', color: '#EF4444' },
}

export default function LetterCard({ data, locale = 'zh', onFlip }: Props) {
  const [flipped, setFlipped] = useState(false)
  const [showDiagram, setShowDiagram] = useState(false)

  function handleFlip() {
    setFlipped(f => !f)
    onFlip?.()
  }

  const name = locale === 'zh' ? data.name_zh : locale === 'ar' ? data.name_ar : data.name_en
  const exampleMeaning = locale === 'zh' ? data.example_meaning_zh : data.example_meaning_en
  const diff = DIFFICULTY_LABEL[data.difficulty]

  return (
    <div className="w-full space-y-3">
      {/* Flip card */}
      <div
        onClick={handleFlip}
        className="cursor-pointer select-none"
        style={{ perspective: '1000px', width: '100%', height: '300px' }}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* ── Front ── */}
          <div
            className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center shadow-lg border border-gray-100"
            style={{ backfaceVisibility: 'hidden', background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}
          >
            {/* Difficulty badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              {data.no_chinese_equivalent && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-500 text-white font-semibold">
                  {locale === 'zh' ? '中文无此音' : 'No CN equiv.'}
                </span>
              )}
              <span className="text-xs px-2 py-0.5 rounded-full text-white font-semibold"
                style={{ background: diff.color }}>
                {locale === 'zh' ? diff.zh : diff.en}
              </span>
            </div>

            {/* Main letter */}
            <span
              className="text-8xl text-white mb-2"
              dir="rtl"
              style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', lineHeight: 1 }}
            >
              {data.isolated}
            </span>
            <p className="text-blue-200 text-lg font-medium">{data.transliteration}</p>
            <p className="text-blue-100 text-sm mt-1">{name}</p>

            {/* Harakat row */}
            <div className="flex gap-3 mt-3">
              {[
                { form: data.with_fatha, label: 'a' },
                { form: data.with_damma, label: 'u' },
                { form: data.with_kasra, label: 'i' },
                { form: data.with_sukun, label: '°' },
              ].map(({ form, label }) => (
                <button key={label}
                  onClick={e => { e.stopPropagation(); speakArabic(form) }}
                  className="flex flex-col items-center gap-0.5 bg-white/15 hover:bg-white/25 rounded-xl px-2 py-1.5 transition-all">
                  <span className="text-xl text-white" style={{ fontFamily: 'Amiri, serif' }}>{form}</span>
                  <span className="text-[10px] text-blue-200">{label}</span>
                </button>
              ))}
            </div>

            <button
              onClick={e => { e.stopPropagation(); speakArabic(data.isolated) }}
              className="mt-3 bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-1.5 text-sm flex items-center gap-1.5 transition-all"
            >
              🔊 {locale === 'ar' ? 'استمع' : locale === 'zh' ? '播放' : 'Listen'}
            </button>
            <p className="text-blue-100 text-xs mt-2 opacity-60">
              {locale === 'ar' ? 'اضغط لعرض التفاصيل' : locale === 'zh' ? '点击查看详情' : 'Tap to reveal'}
            </p>
          </div>

          {/* ── Back ── */}
          <div
            className="absolute inset-0 rounded-3xl p-5 shadow-lg bg-white border border-gray-100 overflow-y-auto"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
                    <p className="text-gray-500 text-sm">{data.transliteration} — {data.makhraj_zh}</p>
                  </div>
                  <span className="text-4xl" dir="rtl" style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif' }}>
                    {data.isolated}
                  </span>
                </div>

                {/* Chinese tip */}
                {locale === 'zh' && data.tip_zh && (
                  <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-3 py-2 mb-3 text-sm text-gray-700">
                    {data.tip_zh}
                  </div>
                )}

                {/* Similar sound */}
                <div className="bg-green-50 rounded-xl px-3 py-2 mb-3 text-sm">
                  <span className="font-semibold text-green-700">
                    {locale === 'zh' ? '近似音：' : 'Sounds like: '}
                  </span>
                  <span className="text-gray-700">{locale === 'zh' ? data.similar_zh : data.similar_en}</span>
                </div>

                {/* 4 forms */}
                <div className="grid grid-cols-4 gap-1.5 mb-3">
                  {[
                    { label: locale === 'zh' ? '独立' : 'Isol.', form: data.isolated },
                    { label: locale === 'zh' ? '词首' : 'Init.', form: data.initial },
                    { label: locale === 'zh' ? '词中' : 'Med.', form: data.medial },
                    { label: locale === 'zh' ? '词尾' : 'Final', form: data.final },
                  ].map(({ label, form }) => (
                    <div key={label} className="bg-gray-50 rounded-xl p-1.5 text-center">
                      <span className="text-2xl block font-bold" dir="rtl"
                        style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', color: '#1E3A5F' }}>
                        {form}
                      </span>
                      <span className="text-[10px] text-gray-500">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example + diagram toggle */}
              <div>
                <div className="bg-blue-50 rounded-xl p-3 flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{locale === 'zh' ? '例词' : 'Example'}</p>
                    <p className="text-sm text-gray-700 font-medium">{exampleMeaning}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={e => { e.stopPropagation(); speakArabic(data.example_word, 0.7) }}
                      className="text-lg hover:scale-110 transition-transform">🔊</button>
                    <span className="text-2xl" dir="rtl" style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', color: '#1E3A5F' }}>
                      {data.example_word_with_harakat}
                    </span>
                  </div>
                </div>

                <button
                  onClick={e => { e.stopPropagation(); setShowDiagram(d => !d) }}
                  className="w-full text-xs text-center text-blue-600 hover:text-blue-700 py-1 transition-all">
                  {showDiagram
                    ? (locale === 'zh' ? '▲ 收起口型图' : '▲ Hide diagram')
                    : (locale === 'zh' ? '▼ 查看口型发音图' : '▼ Show articulation')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articulation diagram (outside card so it doesn't flip) */}
      {flipped && showDiagram && (
        <div className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm flex flex-col items-center gap-2">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            {locale === 'zh' ? '发音部位示意图' : locale === 'ar' ? 'مخرج الحرف' : 'Articulation Point'}
          </p>
          <ArticulationDiagram activeZone={data.makhraj_zone} locale={locale} size={240} />
          <p className="text-xs text-gray-600 text-center max-w-xs">{data.makhraj_zh}</p>
        </div>
      )}
    </div>
  )
}
