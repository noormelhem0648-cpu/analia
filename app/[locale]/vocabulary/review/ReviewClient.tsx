'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, RotateCcw, CheckCircle, XCircle, Clock } from 'lucide-react'

interface SrsCard {
  id: string
  card_id: number
  easiness_factor: number
  interval_days: number
  repetitions: number
  next_review_date: string
  vocabulary_cards: {
    id: number
    word_ar: string
    word_transliteration?: string
    meaning_en?: string
    meaning_zh?: string
    meaning_ar?: string
    example_sentence_ar?: string
  } | null
}

interface Props {
  locale: string
  dueCards: SrsCard[]
}

const QUALITY_LABELS = {
  ar: { perfect: 'ممتاز', correct: 'صحيح', hard: 'صعب', fail: 'نسيت' },
  zh: { perfect: '非常好', correct: '正确', hard: '困难', fail: '忘记' },
  en: { perfect: 'Perfect', correct: 'Correct', hard: 'Hard', fail: 'Forgot' },
}

export default function ReviewClient({ locale, dueCards }: Props) {
  const [cards] = useState(() => dueCards.filter(c => c.vocabulary_cards))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState(false)
  const [reviewedCount, setReviewedCount] = useState(0)
  const [saving, setSaving] = useState(false)

  const labels = QUALITY_LABELS[locale as keyof typeof QUALITY_LABELS] || QUALITY_LABELS.en
  const current = cards[currentIndex]
  const total = cards.length

  const t = {
    ar: { title: 'مراجعة المفردات', subtitle: 'بطاقة اليوم', flip: 'اكشف الإجابة', done_title: 'أحسنت! انتهت المراجعة', done_sub: 'راجعت كل بطاقاتك لليوم', back: 'رجوع', next_session: 'جلسة غداً', no_cards: 'لا توجد بطاقات للمراجعة اليوم', no_cards_sub: 'ستظهر بطاقات جديدة بعد إكمال دروس' },
    zh: { title: '词汇复习', subtitle: '今日卡片', flip: '翻转查看答案', done_title: '太棒了！复习完成', done_sub: '今天的卡片全部完成', back: '返回', next_session: '明天继续', no_cards: '今天没有需要复习的卡片', no_cards_sub: '完成课程后会出现新卡片' },
    en: { title: 'Vocabulary Review', subtitle: "Today's Cards", flip: 'Flip to reveal', done_title: 'Great job! Review complete', done_sub: "You've reviewed all cards for today", back: 'Back', next_session: "Tomorrow's session", no_cards: 'No cards due today', no_cards_sub: 'Cards will appear after completing lessons' },
  }
  const tx = t[locale as keyof typeof t] || t.en

  async function handleQuality(quality: number) {
    if (!current || saving) return
    setSaving(true)
    try {
      await fetch('/api/vocabulary/review', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          srs_id: current.id,
          quality,
          easiness_factor: current.easiness_factor,
          interval_days: current.interval_days,
          repetitions: current.repetitions,
        }),
      })
    } catch {}
    setSaving(false)
    setReviewedCount(p => p + 1)
    setFlipped(false)
    if (currentIndex + 1 >= cards.length) {
      setDone(true)
    } else {
      setCurrentIndex(p => p + 1)
    }
  }

  if (cards.length === 0) {
    return (
      <main className="lg:ml-64 flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-sm">
          <div className="text-6xl mb-4">📭</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{tx.no_cards}</h1>
          <p className="text-gray-600 mb-6">{tx.no_cards_sub}</p>
          <Link href={`/${locale}/vocabulary`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium"
            style={{ background: '#C9858A' }}>
            <ChevronLeft size={16} /> {tx.back}
          </Link>
        </div>
      </main>
    )
  }

  if (done) {
    return (
      <main className="lg:ml-64 flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-sm">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{tx.done_title}</h1>
          <p className="text-gray-600 mb-2">{tx.done_sub}</p>
          <p className="text-lg font-bold text-green-600 mb-6">{reviewedCount} / {total}</p>
          <div className="flex gap-3 justify-center">
            <Link href={`/${locale}/vocabulary`}
              className="px-6 py-3 rounded-xl border border-gray-200 font-medium text-gray-700 hover:bg-gray-50">
              {tx.back}
            </Link>
            <Link href={`/${locale}/dashboard`}
              className="px-6 py-3 rounded-xl text-white font-medium"
              style={{ background: '#C9858A' }}>
              {locale === 'ar' ? 'لوحة القيادة' : locale === 'zh' ? '主页' : 'Dashboard'}
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const card = current.vocabulary_cards!
  const meaning = locale === 'zh' ? card.meaning_zh : locale === 'ar' ? card.meaning_ar : card.meaning_en

  return (
    <main className="lg:ml-64 flex-1 flex flex-col p-6 lg:p-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link href={`/${locale}/vocabulary`}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
          <ChevronLeft size={18} /> {tx.back}
        </Link>
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-gray-500" />
          <span className="text-sm text-gray-600">{currentIndex + 1} / {total}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-gray-100 rounded-full mb-8 overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500"
          style={{ width: `${(currentIndex / total) * 100}%`, background: 'linear-gradient(90deg, #C9858A, #A96368)' }} />
      </div>

      {/* Card */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
        <div
          onClick={() => setFlipped(f => !f)}
          className="w-full cursor-pointer"
          style={{ perspective: '1000px' }}>
          <div style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.5s',
            position: 'relative',
            minHeight: '280px',
          }}>
            {/* Front */}
            <div style={{ backfaceVisibility: 'hidden', position: 'absolute', width: '100%' }}
              className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 flex flex-col items-center justify-center min-h-[280px]">
              <p className="text-6xl font-bold text-gray-900 mb-4" dir="rtl"
                style={{ fontFamily: 'Amiri, serif', lineHeight: 1.5 }}>
                {card.word_ar}
              </p>
              {card.word_transliteration && (
                <p className="text-lg text-gray-500">{card.word_transliteration}</p>
              )}
              <p className="text-sm text-gray-400 mt-4">{tx.flip}</p>
            </div>

            {/* Back */}
            <div style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', position: 'absolute', width: '100%' }}
              className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 flex flex-col items-center justify-center min-h-[280px]">
              <p className="text-4xl font-bold text-gray-900 mb-3">{meaning}</p>
              <p className="text-lg text-gray-500 mb-4">{card.meaning_en}</p>
              {card.example_sentence_ar && (
                <p className="text-base text-gray-600 text-center p-3 bg-gray-50 rounded-xl" dir="rtl"
                  style={{ fontFamily: 'Amiri, serif' }}>
                  {card.example_sentence_ar}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Rating buttons — show only when flipped */}
        {flipped && (
          <div className="grid grid-cols-4 gap-3 mt-6 w-full">
            {[
              { quality: 1, label: labels.fail, color: '#EF4444', icon: <XCircle size={16} /> },
              { quality: 2, label: labels.hard, color: '#F59E0B', icon: <RotateCcw size={16} /> },
              { quality: 4, label: labels.correct, color: '#3B82F6', icon: <CheckCircle size={16} /> },
              { quality: 5, label: labels.perfect, color: '#10B981', icon: <CheckCircle size={16} /> },
            ].map(btn => (
              <button key={btn.quality}
                onClick={() => handleQuality(btn.quality)}
                disabled={saving}
                className="flex flex-col items-center gap-1 py-3 rounded-xl text-white font-medium text-xs transition-all hover:opacity-90 disabled:opacity-50"
                style={{ background: btn.color }}>
                {btn.icon}
                {btn.label}
              </button>
            ))}
          </div>
        )}

        {!flipped && (
          <button
            onClick={() => setFlipped(true)}
            className="mt-6 w-full py-4 rounded-xl text-white font-semibold transition-all hover:opacity-90"
            style={{ background: '#C9858A' }}>
            {tx.flip}
          </button>
        )}
      </div>
    </main>
  )
}
