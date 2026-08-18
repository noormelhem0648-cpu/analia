'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Screen 1: interface language (two boxes: Arabic / Chinese)
const UI_LANGS = [
  { code: 'ar', title: 'العربية', sub: 'Arabic', flag: '🌙', gradient: 'linear-gradient(135deg, #C9858A, #A96368)' },
  { code: 'zh', title: '中文', sub: 'Chinese', flag: '🇨🇳', gradient: 'linear-gradient(135deg, #A96368, #C9858A)' },
]

// Screen 2: what to learn
const DIRECTIONS = [
  { key: 'ar_learns_zh', emoji: '🏮', ar: 'أتعلّم الصينية', zh: '学中文', en: 'Learn Chinese', descAr: 'الماندرين ومنهج HSK', descZh: '普通话 & HSK', color: '#A96368', gradient: 'linear-gradient(135deg, #A96368, #C9858A)' },
  { key: 'zh_learns_ar', emoji: '🕌', ar: 'أتعلّم العربية', zh: '学阿拉伯语', en: 'Learn Arabic', descAr: 'العربية من الصفر', descZh: '从零学阿拉伯语', color: '#C9858A', gradient: 'linear-gradient(135deg, #C9858A, #A96368)' },
]

export default function OnboardingClient({ locale }: { locale: string }) {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2>(1)
  const [uiLang, setUiLang] = useState<string>(locale)
  const [saving, setSaving] = useState(false)

  function pickLang(code: string) {
    setUiLang(code)
    setTimeout(() => setStep(2), 220)
  }

  async function pickDirection(dir: string) {
    setSaving(true)
    try {
      await fetch('/api/profile/update', {
        method: 'POST', credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ui_language: uiLang, learning_direction: dir }),
      })
    } catch {}
    // Go to the (direction-aware) placement test in the chosen interface language
    router.push(`/${uiLang}/placement-test`)
  }

  const heading = step === 1
    ? 'اختر لغة الواجهة · Choose language · 选择界面语言'
    : uiLang === 'zh' ? '你想学什么？' : 'ماذا تريد أن تتعلّم؟'

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-6"
      style={{ background: 'linear-gradient(155deg, #F8F5F2 0%, #F5E8E9 55%, #F5E8E9 100%)' }}
      dir={uiLang === 'ar' ? 'rtl' : 'ltr'}>

      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <span className="text-[26rem] font-bold" style={{ fontFamily: 'Amiri, serif', color: '#C9858A' }}>أ</span>
      </div>

      <div className="w-full max-w-xl relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-5xl" style={{ fontFamily: 'Amiri, serif', color: '#A96368' }}>أ</span>
            <h1 className="text-4xl font-bold tracking-wide" style={{ color: '#C9858A' }}>ANALIA</h1>
          </div>
          <p className="text-sm" style={{ color: '#7A7370' }}>{heading}</p>
        </div>

        {/* step dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2].map(s => (
            <div key={s} style={{ width: s === step ? 32 : 10, height: 10, borderRadius: 5, background: s <= step ? '#A96368' : '#E8E2DB', transition: 'all 0.3s' }} />
          ))}
        </div>

        {step === 1 ? (
          <div className="grid grid-cols-2 gap-4">
            {UI_LANGS.map(l => (
              <button key={l.code} onClick={() => pickLang(l.code)}
                className="rounded-3xl p-8 text-center transition-all hover:scale-105"
                style={{ background: l.gradient, boxShadow: uiLang === l.code ? '0 0 0 3px #A96368' : 'none' }}>
                <div className="text-5xl mb-3">{l.flag}</div>
                <div className="text-white font-bold text-2xl">{l.title}</div>
                <div className="text-white/70 text-sm mt-1">{l.sub}</div>
              </button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {DIRECTIONS.map(d => (
              <button key={d.key} onClick={() => pickDirection(d.key)} disabled={saving}
                className="flex items-center gap-4 rounded-2xl p-5 text-start transition-all hover:scale-[1.02] disabled:opacity-60"
                style={{ background: d.gradient }}>
                <span className="text-4xl">{d.emoji}</span>
                <div className="flex-1">
                  <div className="text-white font-bold text-xl">{uiLang === 'zh' ? d.zh : uiLang === 'ar' ? d.ar : d.en}</div>
                  <div className="text-white/70 text-sm">{uiLang === 'zh' ? d.descZh : d.descAr}</div>
                </div>
                <span className="text-white/80 text-2xl">→</span>
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <button onClick={() => setStep(1)} className="mt-6 mx-auto block text-sm transition-colors"
            style={{ color: '#7A7370' }}>
            ← {uiLang === 'zh' ? '返回' : uiLang === 'ar' ? 'رجوع' : 'Back'}
          </button>
        )}
      </div>
    </div>
  )
}
