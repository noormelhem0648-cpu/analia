'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, RotateCcw } from 'lucide-react'
import ExerciseEngine from '@/components/lesson/ExerciseEngine'
import { generateLetterExercises, generateVocabExercises } from '@/lib/generateExercises'
import { PRE_A1_GREETINGS, ARABIC_NUMBERS, PRE_A1_VOCAB } from '@/lib/preA1Content'
import { A1_PRONOUNS, A1_PROFESSIONS, A1_PLACES, A1_TIME, A1_VERBS_PAST, A1_VERBS_PRESENT } from '@/lib/a1Content'
import { A2_SENTENCE_STRUCTURE, A2_BODY_HEALTH, A2_FOOD, A2_TRAVEL, A2_COMPARISON, A2_FAMILY } from '@/lib/a2Content'
import { B1_VERBS, B1_CULTURE, B1_WORK, B1_OPINION } from '@/lib/b1Content'
import { B2_ABSTRACT, B2_MEDIA, B2_POLITICS, B2_ACADEMIC, B2_ADVANCED_VERBS } from '@/lib/b2Content'
import { C1_RHETORIC, C1_CLASSICAL, C1_PHILOSOPHY, C2_LITERARY, C2_ACADEMIC_ADVANCED } from '@/lib/c1c2Content'

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

  function buildExercises() {
    const t = lesson.lesson_type
    const ti = lesson.title_en?.toLowerCase() || ''
    if (t === 'letters') return generateLetterExercises(lesson.day_number, 8)
    if (t === 'greetings') return generateVocabExercises(PRE_A1_GREETINGS.map(v => ({ ar: v.arabic, en: v.meaning_en, zh: v.meaning_zh })), 8)
    if (t === 'numbers')   return generateVocabExercises(ARABIC_NUMBERS.map(v => ({ ar: v.arabic_with_harakat, en: v.meaning_en, zh: v.meaning_zh })), 8)
    if (t === 'vocabulary') {
      const levelCode = lesson.levels?.code
      let bank = PRE_A1_VOCAB
      if (levelCode === 'a1') {
        if (ti.includes('pronoun') || ti.includes('demonst')) bank = A1_PRONOUNS
        else if (ti.includes('profession')) bank = A1_PROFESSIONS
        else if (ti.includes('place') || ti.includes('national')) bank = A1_PLACES
        else if (ti.includes('time')) bank = A1_TIME
        else if (ti.includes('past')) bank = A1_VERBS_PAST
        else if (ti.includes('present')) bank = A1_VERBS_PRESENT
      } else if (levelCode === 'a2') {
        if (ti.includes('connector') || ti.includes('sentence')) bank = A2_SENTENCE_STRUCTURE
        else if (ti.includes('body') || ti.includes('health')) bank = A2_BODY_HEALTH
        else if (ti.includes('food') || ti.includes('drink')) bank = A2_FOOD
        else if (ti.includes('travel') || ti.includes('transport')) bank = A2_TRAVEL
        else if (ti.includes('compar')) bank = A2_COMPARISON
        else if (ti.includes('family') || ti.includes('relation')) bank = A2_FAMILY
        else bank = A2_FOOD
      } else if (levelCode === 'b1') {
        if (ti.includes('verb')) bank = B1_VERBS
        else if (ti.includes('culture') || ti.includes('heritage')) bank = B1_CULTURE
        else if (ti.includes('work') || ti.includes('career')) bank = B1_WORK
        else if (ti.includes('opinion') || ti.includes('express')) bank = B1_OPINION
        else bank = B1_WORK
      } else if (levelCode === 'b2') {
        if (ti.includes('media') || ti.includes('news')) bank = B2_MEDIA
        else if (ti.includes('politic') || ti.includes('society')) bank = B2_POLITICS
        else if (ti.includes('abstract')) bank = B2_ABSTRACT
        else if (ti.includes('academic') || ti.includes('writing')) bank = B2_ACADEMIC
        else if (ti.includes('verb')) bank = B2_ADVANCED_VERBS
        else bank = B2_ABSTRACT
      } else if (levelCode === 'c1') {
        if (ti.includes('rhetoric') || ti.includes('eloquence')) bank = C1_RHETORIC
        else if (ti.includes('classical')) bank = C1_CLASSICAL
        else if (ti.includes('philosoph')) bank = C1_PHILOSOPHY
        else bank = C1_RHETORIC
      } else if (levelCode === 'c2') {
        if (ti.includes('literary') || ti.includes('analysis')) bank = C2_LITERARY
        else bank = C2_ACADEMIC_ADVANCED
      }
      return generateVocabExercises(bank.map(v => ({ ar: v.arabic, en: v.meaning_en, zh: v.meaning_zh })), 8)
    }
    return []
  }
  const exercises = buildExercises()

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
