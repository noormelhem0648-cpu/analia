'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, RotateCcw } from 'lucide-react'
import ExerciseEngine from '@/components/lesson/ExerciseEngine'
import { generateLetterExercises } from '@/lib/generateExercises'

interface Lesson {
  id: number
  title_ar: string
  title_en: string
  title_zh: string
  lesson_type: string
  day_number: number
  xp_reward: number
  levels?: { name_ar: string; name_en: string; name_zh: string; code: string; color_primary?: string }
}

const tx = {
  zh: { practice: '练习模式', back: '返回', restart: '重新开始', done_title: '练习完成！', done_back: '返回课程', no_exercises: '本课暂无练习题' },
  en: { practice: 'Practice Mode', back: 'Back', restart: 'Restart', done_title: 'Practice Complete!', done_back: 'Back to Lesson', no_exercises: 'No exercises for this lesson yet' },
  ar: { practice: 'وضع التمرين', back: 'رجوع', restart: 'أعد من البداية', done_title: 'اكتمل التمرين!', done_back: 'العودة للدرس', no_exercises: 'لا تمارين لهذا الدرس بعد' },
}

export default function PracticeClient({ locale, lesson, levelId }: { locale: string; lesson: Lesson; levelId: number }) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const color = lesson.levels?.color_primary || '#1E3A5F'
  const title = locale === 'zh' ? lesson.title_zh : locale === 'ar' ? lesson.title_ar : lesson.title_en

  const [key, setKey] = useState(0)
  const [result, setResult] = useState<{ score: number; xp: number } | null>(null)

  const exercises = lesson.lesson_type === 'letters'
    ? generateLetterExercises(lesson.day_number, 8)
    : []

  function handleComplete(score: number, xp: number) {
    setResult({ score, xp })
    fetch('/api/progress/lesson', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lesson_id: lesson.id, status: score >= 80 ? 'completed' : 'in_progress', score, xp_earned: xp }),
    })
  }

  return (
    <main className="lg:ml-64 flex-1 flex flex-col pb-20 lg:pb-0">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4">
        <Link href={`/${locale}/levels/${levelId}/lessons/${lesson.id}`}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-600 transition-colors">
          <ChevronLeft size={18} />
          <span className="text-sm">{t.back}</span>
        </Link>
        <div className="flex-1">
          <p className="text-xs text-gray-600">{t.practice}</p>
          <p className="font-semibold text-gray-800 text-sm truncate">{title}</p>
        </div>
        {result && (
          <button onClick={() => { setKey(k => k + 1); setResult(null) }}
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">
            <RotateCcw size={14} /> {t.restart}
          </button>
        )}
      </div>

      <div className="flex-1 flex items-start justify-center p-6 lg:p-10">
        <div className="w-full max-w-xl">
          {exercises.length === 0 ? (
            <div className="text-center py-16 text-gray-600">
              <p className="text-4xl mb-3">📭</p>
              <p>{t.no_exercises}</p>
            </div>
          ) : result ? (
            <div className="text-center bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="text-6xl mb-4">{result.score === 100 ? '🏆' : result.score >= 70 ? '⭐' : '💪'}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.done_title}</h2>
              <div className="flex items-center justify-center gap-8 my-6">
                <div>
                  <div className="text-3xl font-bold" style={{ color }}>{result.score}%</div>
                  <div className="text-xs text-gray-600 mt-0.5">Score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500">+{result.xp}</div>
                  <div className="text-xs text-gray-600 mt-0.5">XP</div>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => { setKey(k => k + 1); setResult(null) }}
                  className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium">
                  {t.restart}
                </button>
                <Link href={`/${locale}/levels/${levelId}/lessons/${lesson.id}`}
                  className="flex-1 py-3 rounded-xl text-white font-medium text-center"
                  style={{ background: color }}>
                  {t.done_back}
                </Link>
              </div>
            </div>
          ) : (
            <div key={key} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <ExerciseEngine
                exercises={exercises}
                locale={locale}
                accentColor={color}
                onComplete={handleComplete}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
