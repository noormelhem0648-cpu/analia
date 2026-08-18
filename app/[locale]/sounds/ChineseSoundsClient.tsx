'use client'

import { useState } from 'react'
import { Volume2 } from 'lucide-react'
import { PINYIN_INITIALS, PINYIN_FINALS, TONE_GUIDE } from '@/lib/hskContent'

const TONE_COLORS = ['#6B7280', '#DC2626', '#EA580C', '#16A34A', '#2563EB']

function speak(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'zh-CN'
  u.rate = 0.8
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(u)
}

const tx = {
  ar: {
    title: 'نظام النطق الصيني', sub: 'أشهر الأصوات: النغمات، الحروف الساكنة (Initials)، والحركات (Finals)',
    tones: 'النغمات الأربع', initials: 'الأصوات الساكنة (Initials)', finals: 'الحركات (Finals)',
    tapHint: 'اضغط أي بطاقة لسماع النطق', example: 'مثال', like: 'يشبه',
  },
  en: {
    title: 'Chinese Pronunciation', sub: 'Core sounds: tones, initials and finals',
    tones: 'The Four Tones', initials: 'Initials (consonants)', finals: 'Finals (vowels)',
    tapHint: 'Tap any card to hear it', example: 'Example', like: 'Like',
  },
  zh: {
    title: '汉语发音系统', sub: '核心发音：声调、声母、韵母',
    tones: '四个声调', initials: '声母', finals: '韵母',
    tapHint: '点击卡片听发音', example: '例', like: '类似',
  },
}

export default function ChineseSoundsClient({ locale }: { locale: string }) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const [active, setActive] = useState<string | null>(null)
  const isAr = locale === 'ar'

  const play = (id: string, say: string) => { setActive(id); speak(say) }

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-2">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{t.title}</h1>
          <p className="text-gray-600 mt-1">{t.sub}</p>
          <p className="text-xs text-gray-400 mt-1">🔊 {t.tapHint}</p>
        </div>

        {/* Tones */}
        <section className="mt-8">
          <h2 className="font-bold text-gray-800 mb-3">① {t.tones}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {TONE_GUIDE.map(tone => (
              <button key={tone.tone} onClick={() => play(`tone-${tone.tone}`, tone.example_pinyin)}
                className={`text-start rounded-2xl p-4 border-2 transition-all hover:shadow-md ${active === `tone-${tone.tone}` ? 'shadow-md' : ''}`}
                style={{ borderColor: TONE_COLORS[tone.tone], background: `${TONE_COLORS[tone.tone]}0D` }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-3xl font-bold" style={{ color: TONE_COLORS[tone.tone] }}>{tone.symbol}</span>
                  <Volume2 size={18} className="text-gray-400" />
                </div>
                <p className="font-semibold text-gray-800 text-sm">{tone.name_ar}</p>
                <p className="text-xs text-gray-600 mt-0.5">{tone.description_ar}</p>
                <p className="text-sm mt-2 text-gray-700">
                  {t.example}: <span className="font-bold" style={{ color: TONE_COLORS[tone.tone] }}>{tone.example_hanzi} ({tone.example_pinyin})</span> — {tone.example_meaning}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Initials */}
        <section className="mt-10">
          <h2 className="font-bold text-gray-800 mb-3">② {t.initials}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PINYIN_INITIALS.map(p => (
              <button key={p.initial} onClick={() => play(`ini-${p.initial}`, p.example_pinyin)}
                className={`text-start bg-white rounded-xl p-3 border transition-all hover:shadow-md ${active === `ini-${p.initial}` ? 'border-red-300 shadow-md' : 'border-gray-100'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{p.initial}</span>
                  <Volume2 size={15} className="text-gray-400" />
                </div>
                <p className="text-sm font-semibold text-gray-700 mt-1">{p.example_hanzi} <span className="text-gray-400 font-normal">{p.example_pinyin}</span></p>
                {isAr && <p className="text-xs text-gray-500 mt-0.5">{t.like}: {p.audio_hint_ar}</p>}
              </button>
            ))}
          </div>
        </section>

        {/* Finals */}
        <section className="mt-10">
          <h2 className="font-bold text-gray-800 mb-3">③ {t.finals}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PINYIN_FINALS.map(p => (
              <button key={p.final} onClick={() => play(`fin-${p.final}`, p.example_pinyin)}
                className={`text-start bg-white rounded-xl p-3 border transition-all hover:shadow-md ${active === `fin-${p.final}` ? 'border-red-300 shadow-md' : 'border-gray-100'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{p.final}</span>
                  <Volume2 size={15} className="text-gray-400" />
                </div>
                <p className="text-sm font-semibold text-gray-700 mt-1">{p.example_hanzi} <span className="text-gray-400 font-normal">{p.example_pinyin}</span></p>
                {isAr && <p className="text-xs text-gray-500 mt-0.5">{t.like}: {p.audio_hint_ar}</p>}
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
