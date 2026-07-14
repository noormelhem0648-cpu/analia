'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const languages = [
  {
    code: 'zh',
    label: '中文',
    sublabel: 'Chinese',
    flag: '🇨🇳',
    desc: '用中文界面学习阿拉伯语',
    gradient: 'from-red-500 to-red-700',
  },
  {
    code: 'en',
    label: 'English',
    sublabel: 'الإنجليزية',
    flag: '🌍',
    desc: 'Learn Arabic with English interface',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    code: 'ar',
    label: 'العربية',
    sublabel: 'Arabic Interface',
    flag: '🌙',
    desc: 'تعلّم العربية بواجهة عربية',
    gradient: 'from-emerald-500 to-emerald-700',
  },
]

export default function LanguageSelectPage() {
  const router = useRouter()

  function choose(code: string) {
    localStorage.setItem('analia_lang', code)
    router.push(`/${code}/auth/login`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A8E 60%, #1a2f4a 100%)' }}>

      {/* Arabic calligraphy background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <span className="text-[30rem] font-bold" style={{ fontFamily: 'Amiri, serif' }}>ع</span>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-5xl" style={{ fontFamily: 'Amiri, serif', color: '#C9A84C' }}>أ</span>
          <h1 className="text-4xl font-bold text-white tracking-wide">ANALIA</h1>
        </div>

        {/* Trilingual title */}
        <div className="space-y-1">
          <p className="text-white/90 text-lg font-medium">Choose your learning language</p>
          <p className="text-white/70 text-base" style={{ fontFamily: 'Noto Sans SC, sans-serif' }}>选择您的学习界面语言</p>
          <p className="text-white/70 text-base" style={{ fontFamily: 'Noto Naskh Arabic, serif' }}>اختر لغة الواجهة</p>
        </div>
      </motion.div>

      {/* Language cards */}
      <div className="flex flex-col sm:flex-row gap-5 relative z-10 px-6 w-full max-w-3xl">
        {languages.map((lang, i) => (
          <motion.button
            key={lang.code}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => choose(lang.code)}
            className="flex-1 rounded-2xl p-8 text-center cursor-pointer border border-white/20
              bg-white/10 backdrop-blur-md hover:bg-white/20
              shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="text-5xl mb-4">{lang.flag}</div>
            <div className="text-3xl font-bold text-white mb-1">{lang.label}</div>
            <div className="text-white/60 text-sm mb-4">{lang.sublabel}</div>
            <div className="text-white/80 text-sm leading-relaxed">{lang.desc}</div>
            <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${lang.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
          </motion.button>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-white/40 text-sm relative z-10"
      >
        تعلّم العربية من الصفر · Learn Arabic from Zero · 从零学阿拉伯语
      </motion.p>
    </div>
  )
}
