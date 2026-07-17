'use client'

import { useState } from 'react'
import { HARAKAT, type Haraka } from '@/lib/arabicAlphabet'
import { speakArabic } from '@/lib/tts'
import { Volume2, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'

const DEMO_LETTERS = ['بَ', 'بُ', 'بِ', 'بْ']

interface Props {
  locale?: string
  onComplete?: () => void
}

const tx = {
  zh: {
    title: '阿拉伯语符号 — الحركات',
    subtitle: '元音符号（短元音）是阿拉伯语读写的基础',
    position_above: '写在字母上方',
    position_below: '写在字母下方',
    position_above_double: '词尾上方（双符）',
    position_below_double: '词尾下方（双符）',
    example: '例词',
    tip: '学习提示',
    memory: '记忆口诀',
    listen: '点击播放',
    complete: '完成本节',
    prev: '上一个',
    next: '下一个',
    progress: '进度',
    sound: '发音',
    with_ba: '与ب组合',
  },
  en: {
    title: 'Arabic Diacritics — الحركات',
    subtitle: 'Vowel marks are the foundation of Arabic reading and writing',
    position_above: 'Written above letter',
    position_below: 'Written below letter',
    position_above_double: 'Above word-final (double)',
    position_below_double: 'Below word-final (double)',
    example: 'Example',
    tip: 'Tip',
    memory: 'Memory Trick',
    listen: 'Listen',
    complete: 'Complete Lesson',
    prev: 'Previous',
    next: 'Next',
    progress: 'Progress',
    sound: 'Sound',
    with_ba: 'With ب',
  },
  ar: {
    title: 'الحركات العربية',
    subtitle: 'الحركات هي أساس القراءة والكتابة العربية',
    position_above: 'تُكتب فوق الحرف',
    position_below: 'تُكتب تحت الحرف',
    position_above_double: 'فوق آخر الكلمة (مضاعفة)',
    position_below_double: 'تحت آخر الكلمة (مضاعفة)',
    example: 'مثال',
    tip: 'ملاحظة',
    memory: 'حيلة التذكر',
    listen: 'استمع',
    complete: 'إتمام الدرس',
    prev: 'السابق',
    next: 'التالي',
    progress: 'التقدم',
    sound: 'الصوت',
    with_ba: 'مع ب',
  },
}

function PositionBadge({ position, locale }: { position: Haraka['position']; locale: string }) {
  const t = tx[locale as keyof typeof tx] || tx.zh
  const map = {
    above: t.position_above,
    below: t.position_below,
    above_double: t.position_above_double,
    below_double: t.position_below_double,
  }
  const colorMap = {
    above: 'bg-blue-100 text-blue-700',
    below: 'bg-amber-100 text-amber-700',
    above_double: 'bg-purple-100 text-purple-700',
    below_double: 'bg-pink-100 text-pink-700',
  }
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${colorMap[position]}`}>
      {map[position]}
    </span>
  )
}

export default function HarakatLesson({ locale = 'zh', onComplete }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.zh
  const [current, setCurrent] = useState(0)
  const [seen, setSeen] = useState<Set<number>>(new Set([0]))
  const [completed, setCompleted] = useState(false)

  const haraka = HARAKAT[current]
  const progress = Math.round((seen.size / HARAKAT.length) * 100)

  function go(dir: 1 | -1) {
    const next = current + dir
    if (next < 0 || next >= HARAKAT.length) return
    setCurrent(next)
    setSeen(prev => new Set([...prev, next]))
  }

  function handleComplete() {
    setCompleted(true)
    onComplete?.()
  }

  if (completed) {
    return (
      <div className="flex flex-col items-center gap-6 py-12 text-center">
        <CheckCircle2 size={64} className="text-green-500" />
        <h2 className="text-2xl font-bold text-gray-800">
          {locale === 'zh' ? '🎉 恭喜！你已掌握阿拉伯语符号！' : locale === 'ar' ? '🎉 أحسنت! أتممت الحركات' : '🎉 Excellent! You\'ve learned the Harakat!'}
        </h2>
        <p className="text-gray-600 max-w-sm">
          {locale === 'zh' ? '现在你可以读懂带符号的阿拉伯语了。继续学习字母吧！' : locale === 'ar' ? 'يمكنك الآن قراءة العربية المشكولة' : 'You can now read fully vocalized Arabic text!'}
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">{t.title}</h2>
        <p className="text-sm text-gray-600 mt-1">{t.subtitle}</p>
        {/* Progress bar */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xs text-gray-500">{t.progress}</span>
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: haraka.color }} />
          </div>
          <span className="text-xs font-medium text-gray-600">{seen.size}/{HARAKAT.length}</span>
        </div>
      </div>

      {/* Dots nav */}
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {HARAKAT.map((h, i) => (
          <button key={h.id} onClick={() => { setCurrent(i); setSeen(prev => new Set([...prev, i])) }}
            className="w-8 h-8 rounded-full text-xs font-bold transition-all border-2"
            style={{
              background: i === current ? h.color : seen.has(i) ? h.color + '33' : 'white',
              borderColor: i === current ? h.color : seen.has(i) ? h.color : '#E5E7EB',
              color: i === current ? 'white' : seen.has(i) ? h.color : '#9CA3AF',
            }}>
            {h.symbol || '◌'}
          </button>
        ))}
      </div>

      {/* Main card */}
      <div className="rounded-3xl border-2 p-6 shadow-lg bg-white transition-all"
        style={{ borderColor: haraka.color }}>

        {/* Symbol + name */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0"
            style={{ background: haraka.color + '22', border: `2px solid ${haraka.color}` }}>
            <span className="text-5xl" style={{ fontFamily: 'Amiri, serif', color: haraka.color }}>
              {haraka.example_with_ba || haraka.symbol}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{haraka.name_zh}</h3>
            <p className="text-sm text-gray-600 mt-0.5">{haraka.name_en}</p>
            <div className="mt-2">
              <PositionBadge position={haraka.position} locale={locale} />
            </div>
          </div>
        </div>

        {/* Sound */}
        <div className="rounded-2xl p-4 mb-4" style={{ background: haraka.color + '11' }}>
          <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: haraka.color }}>
            {t.sound}
          </p>
          <p className="text-base font-medium text-gray-800">{haraka.sound_zh}</p>
          <p className="text-xs text-gray-500 mt-0.5">{haraka.sound_en}</p>
        </div>

        {/* With ب demonstration */}
        <div className="rounded-2xl p-4 mb-4 bg-gray-50">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">{t.with_ba}</p>
          <div className="flex items-center gap-3 flex-wrap">
            {['فَتْحة','ضَمَّة','كَسْرة','سُكون'].map((_, idx) => {
              const demos = [haraka.example_with_ba, haraka.example_with_ba, haraka.example_with_ba, haraka.example_with_ba]
              return null
            })}
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold" style={{ fontFamily: 'Amiri, serif', color: haraka.color }}>
                {haraka.example_with_ba}
              </span>
              <button
                onClick={() => speakArabic(haraka.example_with_ba)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ background: haraka.color }}>
                <Volume2 size={14} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Example word */}
        <div className="rounded-2xl p-4 mb-4 bg-gray-50">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">{t.example}</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl" style={{ fontFamily: 'Amiri, serif', color: '#1E3A5F' }}>
                {haraka.example_word_with_harakat}
              </span>
              <p className="text-xs text-gray-500 mt-1">{haraka.example_transliteration}</p>
              <p className="text-sm text-gray-700 font-medium mt-0.5">
                {locale === 'ar' ? haraka.example_meaning_en : locale === 'en' ? haraka.example_meaning_en : haraka.example_meaning_zh}
              </p>
            </div>
            <button
              onClick={() => speakArabic(haraka.example_word_with_harakat)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
              style={{ background: haraka.color }}>
              <Volume2 size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* Tip */}
        <div className="rounded-2xl p-4 mb-4 border-l-4" style={{ borderColor: haraka.color, background: '#FFFBEB' }}>
          <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: haraka.color }}>
            {t.tip}
          </p>
          <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{haraka.tip_zh}</p>
        </div>

        {/* Memory trick */}
        {haraka.memory_trick_zh && (
          <div className="rounded-2xl p-4" style={{ background: haraka.color + '11' }}>
            <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: haraka.color }}>
              {t.memory}
            </p>
            <p className="text-sm text-gray-700">{haraka.memory_trick_zh}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button onClick={() => go(-1)} disabled={current === 0}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
          <ChevronLeft size={18} /> {t.prev}
        </button>

        {current === HARAKAT.length - 1 ? (
          <button onClick={handleComplete}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-semibold shadow-md transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
            <CheckCircle2 size={18} /> {t.complete}
          </button>
        ) : (
          <button onClick={() => go(1)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-semibold transition-all hover:opacity-90"
            style={{ background: haraka.color }}>
            {t.next} <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  )
}
