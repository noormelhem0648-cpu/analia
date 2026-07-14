'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, CheckCircle, Clock, Star, BookOpen, Trophy } from 'lucide-react'
import LetterCard from '@/components/lesson/LetterCard'
import Confetti from '@/components/lesson/Confetti'
import { getLettersForLesson } from '@/lib/arabicAlphabet'
import { generateLetterExercises, type GeneratedExercise } from '@/lib/generateExercises'

interface Lesson {
  id: number
  title_ar: string; title_en: string; title_zh: string
  description_ar?: string; description_en?: string; description_zh?: string
  lesson_type: string; day_number: number; xp_reward: number; estimated_minutes: number
  levels?: { name_ar: string; name_en: string; name_zh: string; code: string; color_primary?: string }
}
interface DBExercise {
  id: number; exercise_type: string; question_ar?: string; question_en?: string; question_zh?: string
  correct_answer: unknown; options?: unknown; explanation_ar?: string; explanation_en?: string; explanation_zh?: string; xp_reward: number
}
interface Section { id: number; section_type: string; order_index: number }
interface Progress { status: string; score?: number }
interface Props {
  locale: string; lesson: Lesson; sections: Section[]; exercises: DBExercise[]
  progress: Progress | null; levelId: number
}

const tx = {
  zh: { back: '返回', of: '/', start: '开始', next: '下一步', prev: '上一步', finish: '完成并获得XP', loading: '保存中...', great: '太棒了！', xp_earned: '获得积分', minutes: '分钟', check: '检查答案', correct: '正确！', wrong: '错误！', letters: '个字母', practice: '强化练习' },
  en: { back: 'Back', of: '/', start: 'Start', next: 'Next', prev: 'Previous', finish: 'Finish & Earn XP', loading: 'Saving...', great: 'Great job!', xp_earned: 'XP Earned', minutes: 'min', check: 'Check', correct: 'Correct!', wrong: 'Wrong!', letters: 'letters', practice: 'Practice Exercises' },
  ar: { back: 'رجوع', of: 'من', start: 'ابدأ', next: 'التالي', prev: 'السابق', finish: 'أنهِ واكسب النقاط', loading: 'جارٍ الحفظ...', great: 'أحسنت!', xp_earned: 'نقاط مكتسبة', minutes: 'د', check: 'تحقق', correct: 'صحيح!', wrong: 'خطأ!', letters: 'حرف', practice: 'تمرين التعزيز' },
}

type StepType = 'intro' | 'letter' | 'exercise' | 'complete'
interface Step { type: StepType; index: number }

function InlineExercise({ ex, locale, color, onNext }: {
  ex: GeneratedExercise; locale: string; color: string; onNext: () => void
}) {
  const [selected, setSelected] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const t = tx[locale as keyof typeof tx] || tx.en
  const q = locale === 'zh' ? ex.question_zh : locale === 'ar' ? ex.question_ar : ex.question_en
  const expl = locale === 'zh' ? ex.explanation_zh : locale === 'ar' ? ex.explanation_ar : ex.explanation_en
  const correctStr = Array.isArray(ex.correct_answer) ? (ex.correct_answer as string[])[0] : String(ex.correct_answer)
  const isCorrect = selected === correctStr || (ex.type === 'true_false' && selected === correctStr)

  return (
    <div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
        <p className="font-semibold text-gray-800 text-lg mb-5 text-center"
          dir={/[؀-ۿ]/.test(q || '') ? 'rtl' : 'ltr'}
          style={{ fontFamily: /[؀-ۿ]/.test(q || '') ? 'Noto Naskh Arabic, Amiri, serif' : 'inherit' }}>
          {q}
        </p>
        {ex.type === 'true_false' ? (
          <div className="grid grid-cols-2 gap-3">
            {(['true', 'false'] as const).map(val => {
              const label = locale === 'ar' ? (val === 'true' ? 'صح' : 'خطأ') : locale === 'zh' ? (val === 'true' ? '正确' : '错误') : (val === 'true' ? 'True' : 'False')
              const isSelected = selected === val
              const isRight = correctStr === val
              let cls = 'border-2 border-gray-200 bg-white'
              if (checked) { cls = isRight ? 'border-green-400 bg-green-50' : isSelected ? 'border-red-400 bg-red-50' : 'border-gray-100 bg-white' }
              else if (isSelected) { cls = 'border-blue-400 bg-blue-50' }
              return (
                <button key={val} onClick={() => !checked && setSelected(val)}
                  className={`py-4 rounded-xl font-bold text-lg ${cls} transition-all`}>
                  {label}
                </button>
              )
            })}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {(ex.options || []).map((opt, i) => {
              const isSelected = selected === opt
              const isRight = correctStr === opt
              let cls = 'border-2 border-gray-200 bg-white'
              if (checked) { cls = isRight ? 'border-green-400 bg-green-50' : isSelected ? 'border-red-400 bg-red-50' : 'border-gray-100 bg-white' }
              else if (isSelected) { cls = 'border-blue-400 bg-blue-50' }
              const isAr = /[؀-ۿ]/.test(opt)
              return (
                <button key={i} onClick={() => !checked && setSelected(opt)}
                  className={`p-3 rounded-xl ${cls} transition-all flex items-center justify-center min-h-[56px]`}>
                  <span dir={isAr ? 'rtl' : 'ltr'}
                    style={{ fontFamily: isAr ? 'Noto Naskh Arabic, Amiri, serif' : 'inherit', fontSize: isAr ? '2rem' : '1rem' }}>
                    {opt}
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </div>
      {checked && (
        <div className={`rounded-2xl p-4 mb-4 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? t.correct : t.wrong}
          </p>
          {expl && <p className="text-sm text-gray-600 mt-0.5">{expl}</p>}
        </div>
      )}
      {!checked ? (
        <button onClick={() => setChecked(true)} disabled={!selected}
          className="w-full py-3 rounded-xl text-white font-semibold disabled:opacity-40 transition-all"
          style={{ background: color }}>
          {t.check}
        </button>
      ) : (
        <button onClick={onNext}
          className="w-full py-3 rounded-xl text-white font-semibold transition-all"
          style={{ background: isCorrect ? '#10B981' : color }}>
          {t.next} →
        </button>
      )}
    </div>
  )
}

export default function LessonViewer({ locale, lesson, exercises, progress, levelId }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const color = lesson.levels?.color_primary || '#1E3A5F'
  const title = locale === 'zh' ? lesson.title_zh : locale === 'ar' ? lesson.title_ar : lesson.title_en
  const desc = locale === 'zh' ? lesson.description_zh : locale === 'ar' ? lesson.description_ar : lesson.description_en
  const levelName = locale === 'zh' ? lesson.levels?.name_zh : locale === 'ar' ? lesson.levels?.name_ar : lesson.levels?.name_en

  const letters = lesson.lesson_type === 'letters' ? getLettersForLesson(lesson.day_number) : []
  const generatedExercises = lesson.lesson_type === 'letters' ? generateLetterExercises(lesson.day_number, 4) : []

  const steps: Step[] = [
    { type: 'intro', index: 0 },
    ...letters.map((_, i) => ({ type: 'letter' as const, index: i })),
    ...generatedExercises.slice(0, 3).map((_, i) => ({ type: 'exercise' as const, index: i })),
    { type: 'complete', index: 0 },
  ]

  const [currentStep, setCurrentStep] = useState(0)
  const [saving, setSaving] = useState(false)
  const [done, setDone] = useState(progress?.status === 'completed')
  const [confetti, setConfetti] = useState(false)
  const startTime = useRef(Date.now())

  const step = steps[currentStep]
  const isFirst = currentStep === 0
  const isLast = currentStep === steps.length - 1

  function next() { if (!isLast) setCurrentStep(s => s + 1) }
  function prev() { if (!isFirst) setCurrentStep(s => s - 1) }

  async function finishLesson() {
    setSaving(true)
    const timeSpent = Math.round((Date.now() - startTime.current) / 1000)
    await fetch('/api/progress/lesson', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lesson_id: lesson.id, status: 'completed', score: 100, time_spent_seconds: timeSpent, xp_earned: lesson.xp_reward }),
    })
    setDone(true)
    setConfetti(true)
    setTimeout(() => setConfetti(false), 4000)
    setSaving(false)
  }

  const pct = Math.round((currentStep / Math.max(steps.length - 1, 1)) * 100)

  if (done) {
    return (
      <main className="ml-20 lg:ml-64 flex-1 flex items-center justify-center p-6" style={{ minHeight: '100vh' }}>
        <Confetti active={confetti} />
        <div className="max-w-md w-full text-center">
          <div className="text-7xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.great}</h1>
          <p className="text-gray-700 mb-6">{title}</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6 flex items-center justify-center gap-3">
            <Star size={24} className="text-yellow-500" fill="currentColor" />
            <span className="text-2xl font-bold text-gray-800">+{lesson.xp_reward}</span>
            <span className="text-gray-700">{t.xp_earned}</span>
          </div>
          {generatedExercises.length > 0 && (
            <Link href={`/${locale}/levels/${levelId}/lessons/${lesson.id}/practice`}
              className="block w-full py-3 rounded-xl border-2 font-semibold mb-3 transition-all hover:bg-gray-50"
              style={{ borderColor: color, color: color }}>
              {'🎯 ' + t.practice}
            </Link>
          )}
          <div className="flex gap-3">
            <Link href={`/${locale}/levels/${levelId}`}
              className="flex-1 py-3 rounded-xl border border-gray-200 font-medium text-gray-600 hover:bg-gray-50 transition-all text-center">
              {t.back}
            </Link>
            <Link href={`/${locale}/levels/${levelId}/lessons/${lesson.id + 1}`}
              className="flex-1 py-3 rounded-xl text-white font-medium transition-all text-center hover:opacity-90"
              style={{ background: color }}>
              {t.next + ' →'}
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="ml-20 lg:ml-64 flex-1 flex flex-col" style={{ minHeight: '100vh' }}>
      <Confetti active={false} />

      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4">
        <Link href={`/${locale}/levels/${levelId}`}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-600 transition-colors">
          <ChevronLeft size={18} />
          <span className="text-sm">{t.back}</span>
        </Link>
        <div className="flex-1">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: pct + '%', background: color }} />
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Star size={14} className="text-yellow-500" fill="currentColor" />
          <span className="font-medium text-gray-700">{lesson.xp_reward} XP</span>
        </div>
        <span className="text-sm text-gray-600">{currentStep + 1} {t.of} {steps.length}</span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-10">
        <div className="w-full max-w-xl">

          {step.type === 'intro' && (
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, ' + color + 'CC, ' + color + ')' }}>
                <BookOpen size={36} className="text-white" />
              </div>
              <p className="text-sm font-medium mb-2" style={{ color: color }}>{levelName}</p>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{title}</h1>
              <p className="text-gray-700 mb-6">{desc}</p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-8">
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {lesson.estimated_minutes} {t.minutes}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500" fill="currentColor" />
                  {lesson.xp_reward} XP
                </span>
                {letters.length > 0 && (
                  <span className="flex items-center gap-1">
                    <span style={{ fontFamily: 'Amiri, serif', fontSize: '1.1rem' }}>أ</span>
                    {letters.length} {t.letters}
                  </span>
                )}
              </div>
              <button onClick={next}
                className="px-10 py-3 rounded-xl text-white font-semibold transition-all hover:opacity-90"
                style={{ background: color }}>
                {t.start + ' →'}
              </button>
            </div>
          )}

          {step.type === 'letter' && letters[step.index] && (
            <div>
              <p className="text-center text-sm text-gray-600 mb-6">
                {locale === 'ar' ? 'الحرف' : locale === 'zh' ? '字母' : 'Letter'} {step.index + 1} {t.of} {letters.length}
              </p>
              <LetterCard data={letters[step.index]} locale={locale} />
              <p className="text-center text-xs text-gray-600 mt-4">
                {locale === 'ar' ? 'اضغط على البطاقة لرؤية التفاصيل' : locale === 'zh' ? '点击卡片查看详情' : 'Tap the card to see details'}
              </p>
            </div>
          )}

          {step.type === 'exercise' && generatedExercises[step.index] && (
            <div>
              <p className="text-center text-sm text-gray-600 mb-4">
                {locale === 'ar' ? 'تمرين' : locale === 'zh' ? '练习' : 'Exercise'} {step.index + 1} {t.of} {generatedExercises.slice(0, 3).length}
              </p>
              <InlineExercise
                key={currentStep}
                ex={generatedExercises[step.index]}
                locale={locale}
                color={color}
                onNext={next}
              />
            </div>
          )}

          {step.type === 'complete' && (
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-green-100">
                <CheckCircle size={48} className="text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{t.great}</h1>
              <p className="text-gray-700 mb-8">{title}</p>
              <button onClick={finishLesson} disabled={saving}
                className="w-full py-4 rounded-xl text-white font-bold text-lg disabled:opacity-60 transition-all hover:opacity-90"
                style={{ background: color }}>
                {saving ? t.loading : t.finish + ' (+' + lesson.xp_reward + ' XP)'}
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Bottom nav */}
      {step.type !== 'exercise' && step.type !== 'complete' && (
        <div className="bg-white border-t border-gray-100 px-6 py-4 flex justify-between">
          <button onClick={prev} disabled={isFirst}
            className="flex items-center gap-2 px-5 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 transition-all">
            <ChevronLeft size={16} /> {t.prev}
          </button>
          <button onClick={next} disabled={isLast}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-white font-medium disabled:opacity-30 transition-all hover:opacity-90"
            style={{ background: color }}>
            {t.next} <ChevronRight size={16} />
          </button>
        </div>
      )}
    </main>
  )
}

