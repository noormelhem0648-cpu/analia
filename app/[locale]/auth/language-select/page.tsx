'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const LANGUAGES = [
  { code: 'zh', label: '中文', sublabel: 'Chinese (Simplified)', flag: '🇨🇳', gradient: 'from-red-500 to-red-700' },
  { code: 'en', label: 'English', sublabel: 'English', flag: '🌍', gradient: 'from-blue-500 to-blue-700' },
  { code: 'ar', label: 'العربية', sublabel: 'Arabic', flag: '🌙', gradient: 'from-emerald-500 to-emerald-700' },
]

const DIRECTIONS = [
  {
    key: 'zh_learns_ar',
    emoji: '🕌',
    label_zh: '学阿拉伯语',
    label_en: 'Learn Arabic',
    label_ar: 'تعلم العربية',
    desc_zh: '从零开始，掌握阿拉伯语',
    desc_en: 'Master Arabic from scratch',
    desc_ar: 'تعلم العربية من الصفر',
    color: '#C9858A',
    gradient: 'linear-gradient(135deg, #C9858A 0%, #A96368 100%)',
  },
  {
    key: 'ar_learns_zh',
    emoji: '🏮',
    label_zh: '学中文',
    label_en: 'Learn Chinese',
    label_ar: 'تعلم الصينية',
    desc_zh: '掌握普通话 & HSK',
    desc_en: 'Master Mandarin & HSK',
    desc_ar: 'أتقن الماندرين ومنهج HSK',
    color: '#A96368',
    gradient: 'linear-gradient(135deg, #A96368 0%, #C9858A 100%)',
  },
]

export default function LanguageSelectPage() {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2>(1)
  const [selectedLang, setSelectedLang] = useState<string | null>(null)

  function handleLangSelect(code: string) {
    setSelectedLang(code)
    if (typeof window !== 'undefined') {
      localStorage.setItem('analia_lang', code)
    }
    setTimeout(() => setStep(2), 280)
  }

  function handleDirectionSelect(directionKey: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('analia_direction', directionKey)
    }
    const lang = selectedLang || 'zh'
    router.push(`/${lang}/auth/register`)
  }

  const lang = selectedLang || 'zh'

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-6"
      style={{ background: 'linear-gradient(155deg, #F8F5F2 0%, #F5E8E9 55%, #F5E8E9 100%)' }}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <span className="text-[30rem] font-bold" style={{ fontFamily: 'Amiri, serif', color: '#C9858A' }}>ع</span>
      </div>

      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl" style={{ fontFamily: 'Amiri, serif', color: '#A96368' }}>أ</span>
            <h1 className="text-4xl font-bold tracking-wide" style={{ color: '#C9858A' }}>ANALIA</h1>
          </div>
          <p className="text-sm" style={{ color: '#7A7370' }}>
            {step === 1
              ? 'اختر لغة الواجهة · Choose UI language · 选择界面语言'
              : lang === 'ar'
                ? 'ماذا تريد أن تتعلم؟'
                : lang === 'zh'
                  ? '您想学习什么语言？'
                  : 'What language do you want to learn?'}
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2].map(s => (
            <div key={s} style={{
              width: s === step ? 32 : 10,
              height: 10,
              borderRadius: 5,
              background: s <= step ? '#A96368' : '#E8E2DB',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {LANGUAGES.map((l, i) => (
                <motion.button
                  key={l.code}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLangSelect(l.code)}
                  className="w-full flex items-center gap-4 p-5 rounded-2xl text-left transition-all group bg-white"
                  style={{
                    border: selectedLang === l.code ? '2px solid #A96368' : '1.5px solid #E8E2DB',
                    boxShadow: selectedLang === l.code ? '0 4px 14px rgba(169,99,104,0.15)' : 'none',
                  }}
                >
                  <span className="text-3xl">{l.flag}</span>
                  <div className="flex-1">
                    <div className="font-bold text-xl" style={{ color: '#1A1A1A' }}>{l.label}</div>
                    <div className="text-sm" style={{ color: '#7A7370' }}>{l.sublabel}</div>
                  </div>
                  <div className={`w-1 h-10 rounded-full bg-gradient-to-b ${l.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  {selectedLang === l.code && <span style={{ color: '#A96368' }} className="text-xl">✓</span>}
                </motion.button>
              ))}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {DIRECTIONS.map((dir, i) => (
                <motion.button
                  key={dir.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleDirectionSelect(dir.key)}
                  className="w-full rounded-2xl overflow-hidden text-left transition-all"
                  style={{
                    background: dir.gradient,
                    boxShadow: `0 8px 32px ${dir.color}50`,
                    border: `2px solid ${dir.color}40`,
                  }}
                >
                  <div className="p-6 flex items-center gap-4">
                    <span className="text-5xl">{dir.emoji}</span>
                    <div className="flex-1">
                      <div className="text-white font-bold text-2xl mb-1">
                        {lang === 'ar' ? dir.label_ar : lang === 'zh' ? dir.label_zh : dir.label_en}
                      </div>
                      <div className="text-white/80 text-sm">
                        {lang === 'ar' ? dir.desc_ar : lang === 'zh' ? dir.desc_zh : dir.desc_en}
                      </div>
                      <div className="text-white/40 text-xs mt-2">
                        {dir.label_ar} · {dir.label_en} · {dir.label_zh}
                      </div>
                    </div>
                    <span className="text-white/60 text-2xl">→</span>
                  </div>
                </motion.button>
              ))}

              <button
                onClick={() => setStep(1)}
                className="w-full py-3 text-sm transition-colors mt-2"
                style={{ color: '#7A7370' }}
              >
                ← {lang === 'ar' ? 'رجوع لاختيار اللغة' : lang === 'zh' ? '返回选择界面语言' : 'Back to language selection'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-xs text-center"
          style={{ color: '#B5AEA9' }}
        >
          ANALIA · Arabic ↔ Chinese Learning Platform · 阿拉伯语 ↔ 中文学习平台
        </motion.p>
      </div>
    </div>
  )
}
