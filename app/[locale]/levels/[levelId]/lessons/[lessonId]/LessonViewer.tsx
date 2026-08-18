'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, CheckCircle, Clock, Star, BookOpen, Trophy } from 'lucide-react'
import LetterCard from '@/components/lesson/LetterCard'
import Confetti from '@/components/lesson/Confetti'
import HarakatLesson from '@/components/lesson/HarakatLesson'
import VocabFlashcard from '@/components/lesson/VocabFlashcard'
import StoryDialogueLesson from '@/components/lesson/StoryDialogueLesson'
import HanziCard from '@/components/lesson/HanziCard'
import { getLettersForLesson } from '@/lib/arabicAlphabet'
import { generateLetterExercises, generateVocabExercises, generateHskExercises, type GeneratedExercise } from '@/lib/generateExercises'
import { HSK1_GREETINGS, HSK1_PRONOUNS, HSK1_NUMBERS, HSK1_FAMILY, HSK1_FOOD, HSK1_PLACES, HSK1_VERBS, HSK1_TIME, HSK1_ADJECTIVES, HSK1_QUESTION_WORDS, HSK2_DAILY_LIFE, HSK2_WORK_STUDY, HSK2_BODY_HEALTH, HSK2_EMOTIONS, HSK3_SOCIETY, HSK3_CULTURE, HSK4_BUSINESS, HSK4_SOCIETY, HSK4_ADVANCED_VERBS, HSK5_ACADEMIC, HSK5_ADVANCED_EXPRESSIONS, HSK6_LITERARY, HSK6_MASTERY, type HskItem } from '@/lib/hskContent'
import { PRE_A1_VOCAB, PRE_A1_GREETINGS, ARABIC_NUMBERS, type VocabItem } from '@/lib/preA1Content'
import { MING_STORIES, A1_PRONOUNS, A1_PROFESSIONS, A1_PLACES, A1_TIME, A1_VERBS_PAST, A1_VERBS_PRESENT } from '@/lib/a1Content'
import { A2_STORIES, A2_SENTENCE_STRUCTURE, A2_BODY_HEALTH, A2_FOOD, A2_TRAVEL, A2_COMPARISON, A2_FAMILY } from '@/lib/a2Content'
import { B1_STORIES, B1_VERBS, B1_CULTURE, B1_WORK, B1_OPINION, B1_HOBBIES, B1_CITY, B1_GRAMMAR } from '@/lib/b1Content'
import { B2_STORIES, B2_ABSTRACT, B2_MEDIA, B2_POLITICS, B2_ACADEMIC, B2_ADVANCED_VERBS, B2_ECONOMY, B2_ENVIRONMENT, B2_ENVIRONMENT_STORY } from '@/lib/b2Content'
import { C1_STORIES, C2_STORIES, C1_RHETORIC, C1_CLASSICAL, C1_PHILOSOPHY, C1_DIALECTS, C2_LITERARY, C2_ACADEMIC_ADVANCED, C2_TRANSLATION, C1_TECHNOLOGY, C1_HERITAGE, C2_COMPARATIVE, C2_RESEARCH, C1_TECH_STORY, C1_HERITAGE_STORY, C2_BOOK_STORY } from '@/lib/c1c2Content'
import { recordXpEarned, recordStudyTime } from '@/lib/localProgress'

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
  progress: Progress | null; levelId: number; nextLessonId?: number | null
}

const tx = {
  zh: { back: '返回', of: '/', start: '开始', next: '下一步', prev: '上一步', finish: '完成并获得XP', loading: '保存中...', great: '太棒了！', xp_earned: '获得积分', minutes: '分钟', check: '检查答案', correct: '正确！', wrong: '错误！', letters: '个字母', practice: '强化练习' },
  en: { back: 'Back', of: '/', start: 'Start', next: 'Next', prev: 'Previous', finish: 'Finish & Earn XP', loading: 'Saving...', great: 'Great job!', xp_earned: 'XP Earned', minutes: 'min', check: 'Check', correct: 'Correct!', wrong: 'Wrong!', letters: 'letters', practice: 'Practice Exercises' },
  ar: { back: 'رجوع', of: 'من', start: 'ابدأ', next: 'التالي', prev: 'السابق', finish: 'أنهِ واكسب النقاط', loading: 'جارٍ الحفظ...', great: 'أحسنت!', xp_earned: 'نقاط مكتسبة', minutes: 'د', check: 'تحقق', correct: 'صحيح!', wrong: 'خطأ!', letters: 'حرف', practice: 'تمرين التعزيز' },
}

type StepType = 'intro' | 'letter' | 'exercise' | 'complete' | 'harakat' | 'vocab' | 'dialogue' | 'hanzi'
interface Step { type: StepType; index: number }

function InlineExercise({ ex, locale, color, onNext }: {
  ex: GeneratedExercise; locale: string; color: string; onNext: (wasCorrect: boolean) => void
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
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
          style={{ unicodeBidi: 'isolate' }}>
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
        <button onClick={() => onNext(isCorrect)}
          className="w-full py-3 rounded-xl text-white font-semibold transition-all"
          style={{ background: isCorrect ? '#10B981' : color }}>
          {t.next} →
        </button>
      )}
    </div>
  )
}

export default function LessonViewer({ locale, lesson, exercises, progress, levelId, nextLessonId }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const color = lesson.levels?.color_primary || '#C9858A'
  const title = locale === 'zh' ? lesson.title_zh : locale === 'ar' ? lesson.title_ar : lesson.title_en
  const desc = locale === 'zh' ? lesson.description_zh : locale === 'ar' ? lesson.description_ar : lesson.description_en
  const levelName = locale === 'zh' ? lesson.levels?.name_zh : locale === 'ar' ? lesson.levels?.name_ar : lesson.levels?.name_en

  const letters = lesson.lesson_type === 'letters' ? getLettersForLesson(lesson.day_number) : []
  const generatedExercises = lesson.lesson_type === 'letters' ? generateLetterExercises(lesson.day_number, 4) : []
  const isHarakat = lesson.lesson_type === 'harakat'
  const isVocab = lesson.lesson_type === 'vocabulary'
  const isGreetings = lesson.lesson_type === 'greetings'
  const isNumbers = lesson.lesson_type === 'numbers'
  const isDialogue = lesson.lesson_type === 'dialogue' || lesson.lesson_type === 'conversation'

  // pick dialogue by level code + title keyword
  const activeDialogue = isDialogue ? (() => {
    const c = lesson.levels?.code
    const titleLow = lesson.title_en?.toLowerCase() || ''
    if (c === 'a2') {
      const idx = A2_STORIES.findIndex(s => titleLow.includes(s.id))
      return A2_STORIES[idx >= 0 ? idx : 0]
    }
    if (c === 'b1') {
      const idx = B1_STORIES.findIndex(s => titleLow.includes(s.id))
      return B1_STORIES[idx >= 0 ? idx : 0]
    }
    if (c === 'b2') {
      if (titleLow.includes('environ') || titleLow.includes('un ') || titleLow.includes('climate')) return B2_ENVIRONMENT_STORY
      const idx = B2_STORIES.findIndex(s => titleLow.includes(s.id))
      return B2_STORIES[idx >= 0 ? idx : 0]
    }
    if (c === 'c1') {
      if (titleLow.includes('technolog') || titleLow.includes('arabic future')) return C1_TECH_STORY
      if (titleLow.includes('golden') || titleLow.includes('heritage') || titleLow.includes('legacy')) return C1_HERITAGE_STORY
      const idx = C1_STORIES.findIndex(s => titleLow.includes(s.id))
      return C1_STORIES[idx >= 0 ? idx : 0]
    }
    if (c === 'c2') {
      if (titleLow.includes('bridge') || titleLow.includes('builder')) return C2_BOOK_STORY
      const idx = C2_STORIES.findIndex(s => titleLow.includes(s.id))
      return C2_STORIES[idx >= 0 ? idx : 0]
    }
    const idx = MING_STORIES.findIndex(s => titleLow.includes(s.id))
    return MING_STORIES[idx >= 0 ? idx : 0]
  })() : null

  // pick vocab bank by title keyword — use `title` to avoid shadowing outer `t` (translations)
  function pickA1Vocab(): VocabItem[] {
    const title = lesson.title_en?.toLowerCase() || ''
    if (title.includes('pronoun')) return A1_PRONOUNS
    if (title.includes('profession')) return A1_PROFESSIONS
    if (title.includes('place') || title.includes('national')) return A1_PLACES
    if (title.includes('time')) return A1_TIME
    if (title.includes('past')) return A1_VERBS_PAST
    if (title.includes('present')) return A1_VERBS_PRESENT
    if (title.includes('demonst')) return A1_PRONOUNS
    return A1_PRONOUNS
  }

  function pickB1Vocab(): VocabItem[] {
    const title = lesson.title_en?.toLowerCase() || ''
    if (title.includes('verb')) return B1_VERBS
    if (title.includes('culture') || title.includes('heritage')) return B1_CULTURE
    if (title.includes('work') || title.includes('career')) return B1_WORK
    if (title.includes('opinion') || title.includes('express')) return B1_OPINION
    if (title.includes('hobb') || title.includes('free time') || title.includes('leisure')) return B1_HOBBIES
    if (title.includes('city') || title.includes('neighbor') || title.includes('urban')) return B1_CITY
    if (title.includes('adjective') || title.includes('adverb') || title.includes('grammar')) return B1_GRAMMAR
    return B1_WORK
  }

  function pickB2Vocab(): VocabItem[] {
    const title = lesson.title_en?.toLowerCase() || ''
    if (title.includes('media') || title.includes('news')) return B2_MEDIA
    if (title.includes('politic') || title.includes('society')) return B2_POLITICS
    if (title.includes('abstract')) return B2_ABSTRACT
    if (title.includes('academic') || title.includes('writing')) return B2_ACADEMIC
    if (title.includes('verb')) return B2_ADVANCED_VERBS
    if (title.includes('econom') || title.includes('trade') || title.includes('commerce')) return B2_ECONOMY
    if (title.includes('environ') || title.includes('climate') || title.includes('nature')) return B2_ENVIRONMENT
    return B2_ABSTRACT
  }

  function pickC1Vocab(): VocabItem[] {
    const title = lesson.title_en?.toLowerCase() || ''
    if (title.includes('rhetoric') || title.includes('eloquence')) return C1_RHETORIC
    if (title.includes('classical')) return C1_CLASSICAL
    if (title.includes('philosoph')) return C1_PHILOSOPHY
    if (title.includes('dialect') || title.includes('colloquial')) return C1_DIALECTS
    if (title.includes('technolog') || title.includes('language')) return C1_TECHNOLOGY
    if (title.includes('heritage') || title.includes('islamic') || title.includes('science')) return C1_HERITAGE
    return C1_RHETORIC
  }

  function pickC2Vocab(): VocabItem[] {
    const title = lesson.title_en?.toLowerCase() || ''
    if (title.includes('literary') || title.includes('analysis')) return C2_LITERARY
    if (title.includes('academic') && !title.includes('research')) return C2_ACADEMIC_ADVANCED
    if (title.includes('translat') || title.includes('interpret')) return C2_TRANSLATION
    if (title.includes('compar')) return C2_COMPARATIVE
    if (title.includes('research') || title.includes('method')) return C2_RESEARCH
    return C2_LITERARY
  }

  function pickA2Vocab(): VocabItem[] {
    const title = lesson.title_en?.toLowerCase() || ''
    if (title.includes('connector') || title.includes('sentence')) return A2_SENTENCE_STRUCTURE
    if (title.includes('body') || title.includes('health')) return A2_BODY_HEALTH
    if (title.includes('food') || title.includes('drink')) return A2_FOOD
    if (title.includes('travel') || title.includes('transport')) return A2_TRAVEL
    if (title.includes('compar')) return A2_COMPARISON
    if (title.includes('family') || title.includes('relation')) return A2_FAMILY
    return A2_FOOD
  }

  const vocabItems: VocabItem[] = isGreetings ? PRE_A1_GREETINGS
    : isNumbers ? ARABIC_NUMBERS
    : isVocab ? (lesson.levels?.code === 'c2' ? pickC2Vocab() : lesson.levels?.code === 'c1' ? pickC1Vocab() : lesson.levels?.code === 'b2' ? pickB2Vocab() : lesson.levels?.code === 'b1' ? pickB1Vocab() : lesson.levels?.code === 'a2' ? pickA2Vocab() : lesson.levels?.code === 'a1' ? pickA1Vocab() : PRE_A1_VOCAB)
    : []
  const vocabExercises = (isGreetings || isNumbers || isVocab)
    ? generateVocabExercises(vocabItems.map(v => ({ ar: v.arabic, en: v.meaning_en, zh: v.meaning_zh })), 4, locale)
    : []

  // ---- Chinese (HSK) lesson support ----
  const HSK_CODES = ['pre-hsk', 'hsk1', 'hsk2', 'hsk3', 'hsk4', 'hsk5', 'hsk6']
  const isChineseLesson = HSK_CODES.includes(lesson.levels?.code || '')

  function pickHskItems(): HskItem[] {
    const titleLow = lesson.title_en?.toLowerCase() || ''
    const code = lesson.levels?.code || ''
    if (code === 'hsk1') {
      if (titleLow.includes('greeting')) return HSK1_GREETINGS
      if (titleLow.includes('pronoun')) return HSK1_PRONOUNS
      if (titleLow.includes('number')) return HSK1_NUMBERS
      if (titleLow.includes('family')) return HSK1_FAMILY
      if (titleLow.includes('food') || titleLow.includes('drink')) return HSK1_FOOD
      if (titleLow.includes('place')) return HSK1_PLACES
      if (titleLow.includes('verb')) return HSK1_VERBS
      if (titleLow.includes('time') || titleLow.includes('date')) return HSK1_TIME
      if (titleLow.includes('adjective')) return HSK1_ADJECTIVES
      if (titleLow.includes('question')) return HSK1_QUESTION_WORDS
      return HSK1_GREETINGS
    }
    if (code === 'hsk2') {
      if (titleLow.includes('daily') || titleLow.includes('shop') || titleLow.includes('transport') || titleLow.includes('weather')) return HSK2_DAILY_LIFE
      if (titleLow.includes('work') || titleLow.includes('study')) return HSK2_WORK_STUDY
      if (titleLow.includes('body') || titleLow.includes('health')) return HSK2_BODY_HEALTH
      if (titleLow.includes('emotion') || titleLow.includes('feel') || titleLow.includes('color')) return HSK2_EMOTIONS
      return HSK2_DAILY_LIFE
    }
    if (code === 'hsk3') {
      if (titleLow.includes('culture') || titleLow.includes('festiv') || titleLow.includes('tradit')) return HSK3_CULTURE
      return HSK3_SOCIETY
    }
    if (code === 'hsk4') {
      if (titleLow.includes('business') || titleLow.includes('company') || titleLow.includes('أعمال')) return HSK4_BUSINESS
      if (titleLow.includes('society') || titleLow.includes('social') || titleLow.includes('مجتمع')) return HSK4_SOCIETY
      if (titleLow.includes('verb') || titleLow.includes('express')) return HSK4_ADVANCED_VERBS
      return HSK4_BUSINESS
    }
    if (code === 'hsk5') {
      if (titleLow.includes('express') || titleLow.includes('connect')) return HSK5_ADVANCED_EXPRESSIONS
      return HSK5_ACADEMIC
    }
    if (code === 'hsk6') {
      if (titleLow.includes('liter') || titleLow.includes('poetry') || titleLow.includes('أدب')) return HSK6_LITERARY
      return HSK6_MASTERY
    }
    return HSK3_SOCIETY
  }

  const hskItems: HskItem[] = isChineseLesson ? pickHskItems() : []
  const hskExercises = isChineseLesson
    ? generateHskExercises(hskItems, 4, locale)
    : []

  const steps: Step[] = isDialogue
    ? [{ type: 'intro', index: 0 }, { type: 'dialogue' as StepType, index: 0 }, { type: 'complete', index: 0 }]
    : isHarakat
    ? [{ type: 'intro', index: 0 }, { type: 'harakat' as StepType, index: 0 }, { type: 'complete', index: 0 }]
    : isChineseLesson
    ? [
        { type: 'intro', index: 0 },
        ...hskItems.map((_, i) => ({ type: 'hanzi' as StepType, index: i })),
        ...hskExercises.slice(0, 3).map((_, i) => ({ type: 'exercise' as const, index: i })),
        { type: 'complete', index: 0 },
      ]
    : [
        { type: 'intro', index: 0 },
        ...letters.map((_, i) => ({ type: 'letter' as const, index: i })),
        ...vocabItems.map((_, i) => ({ type: 'vocab' as StepType, index: i })),
        ...[...generatedExercises, ...vocabExercises].slice(0, 3).map((_, i) => ({ type: 'exercise' as const, index: i })),
        { type: 'complete', index: 0 },
      ]

  const posKey = `analia_lesson_${lesson.id}_step`
  const [currentStep, setCurrentStep] = useState(() => {
    if (progress?.status === 'completed') return 0
    try { return parseInt(localStorage.getItem(posKey) || '0', 10) } catch { return 0 }
  })
  const [exerciseResults, setExerciseResults] = useState<boolean[]>([])
  const [saving, setSaving] = useState(false)
  const [done, setDone] = useState(progress?.status === 'completed')
  const [confetti, setConfetti] = useState(false)
  const [newAchievements, setNewAchievements] = useState<Array<{ icon: string; name_zh: string; name_en: string; name_ar: string }>>([])
  const startTime = useRef<number | null>(null)

  const step = steps[currentStep]
  const isFirst = currentStep === 0
  const isLast = currentStep === steps.length - 1

  function next() {
    if (!isLast) {
      // Start timing on first navigation away from intro screen
      if (startTime.current === null) startTime.current = Date.now()
      const nextStep = currentStep + 1
      setCurrentStep(nextStep)
      try { localStorage.setItem(posKey, String(nextStep)) } catch {}
    }
  }
  function prev() {
    if (!isFirst) {
      const prevStep = currentStep - 1
      setCurrentStep(prevStep)
      try { localStorage.setItem(posKey, String(prevStep)) } catch {}
    }
  }

  async function finishLesson() {
    setSaving(true)
    const timeSpent = Math.round((Date.now() - (startTime.current ?? Date.now())) / 1000)
    try { recordStudyTime(Math.round(timeSpent / 60)) } catch {}
    const exerciseScore = exerciseResults.length > 0
      ? Math.round((exerciseResults.filter(Boolean).length / exerciseResults.length) * 100)
      : 100
    try {
      const res = await fetch('/api/progress/lesson', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lesson_id: lesson.id, status: 'completed', score: exerciseScore, time_spent_seconds: timeSpent, xp_earned: lesson.xp_reward }),
      })
      const data = await res.json().catch(() => ({}))
      if (data.achievements?.length) setNewAchievements(data.achievements)
    } catch {}
    // Save vocabulary words for SRS review
    try {
      await fetch('/api/vocabulary/save-lesson-words', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lesson_id: lesson.id }),
      })
    } catch {}
    try { recordXpEarned(lesson.xp_reward) } catch {}
    try { localStorage.removeItem(posKey) } catch {}
    setDone(true)
    setConfetti(true)
    setTimeout(() => setConfetti(false), 4000)
    setSaving(false)
  }

  const pct = Math.round((currentStep / Math.max(steps.length - 1, 1)) * 100)

  if (done) {
    return (
      <main className="lg:ml-64 flex-1 flex items-center justify-center p-6" style={{ minHeight: '100vh' }}>
        <Confetti active={confetti} />
        <div className="max-w-md w-full text-center">
          <div className="text-7xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.great}</h1>
          <p className="text-gray-700 mb-6">{title}</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-4 flex items-center justify-center gap-3">
            <Star size={24} className="text-yellow-500" fill="currentColor" />
            <span className="text-2xl font-bold text-gray-800">+{lesson.xp_reward}</span>
            <span className="text-gray-700">{t.xp_earned}</span>
          </div>

          {newAchievements.length > 0 && (
            <div className="mb-6 space-y-2">
              {newAchievements.map((ach, i) => {
                const name = locale === 'zh' ? ach.name_zh : locale === 'ar' ? ach.name_ar : ach.name_en
                return (
                  <div key={i} className="flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-2xl px-4 py-3">
                    <span className="text-2xl">{ach.icon}</span>
                    <div className="text-left">
                      <p className="text-xs text-purple-500 font-semibold uppercase tracking-wide">
                        {locale === 'zh' ? '新成就解锁！' : locale === 'ar' ? 'إنجاز جديد!' : 'Achievement Unlocked!'}
                      </p>
                      <p className="text-sm font-bold text-gray-800">{name}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {(generatedExercises.length > 0 || vocabExercises.length > 0 || hskExercises.length > 0) && (
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
            {nextLessonId ? (
              <Link href={`/${locale}/levels/${levelId}/lessons/${nextLessonId}`}
                className="flex-1 py-3 rounded-xl text-white font-medium transition-all text-center hover:opacity-90"
                style={{ background: color }}>
                {t.next + ' →'}
              </Link>
            ) : (
              <Link href={`/${locale}/levels/${levelId}`}
                className="flex-1 py-3 rounded-xl text-white font-medium transition-all text-center hover:opacity-90"
                style={{ background: color }}>
                {locale === 'zh' ? '返回关卡 →' : locale === 'ar' ? 'العودة للمستوى →' : 'Back to Level →'}
              </Link>
            )}
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="lg:ml-64 flex-1 flex flex-col pb-20 lg:pb-0" style={{ minHeight: '100vh' }}>

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

          {step.type === 'harakat' && (
            <HarakatLesson locale={locale} onComplete={next} />
          )}

          {step.type === 'dialogue' && activeDialogue && (
            <StoryDialogueLesson dialogue={activeDialogue} locale={locale} onComplete={next} />
          )}

          {step.type === 'vocab' && vocabItems[step.index] && (
            <VocabFlashcard item={vocabItems[step.index]} locale={locale} onNext={next} />
          )}

          {step.type === 'hanzi' && (() => {
            const item = hskItems[step.index]
            if (!item) return null
            return (
              <div>
                <p className="text-center text-sm text-gray-600 mb-4">
                  {locale === 'ar' ? 'كلمة' : locale === 'zh' ? '词汇' : 'Word'} {step.index + 1} {t.of} {hskItems.length}
                </p>
                <HanziCard item={item} locale={locale} onNext={next} />
              </div>
            )
          })()}

          {step.type === 'exercise' && (() => {
            const allEx = isChineseLesson
              ? hskExercises.slice(0, 3)
              : [...generatedExercises, ...vocabExercises].slice(0, 3)
            const ex = allEx[step.index]
            if (!ex) return null
            return (
              <div>
                <p className="text-center text-sm text-gray-600 mb-4">
                  {locale === 'ar' ? 'تمرين' : locale === 'zh' ? '练习' : 'Exercise'} {step.index + 1} {t.of} {allEx.length}
                </p>
                <InlineExercise key={currentStep} ex={ex} locale={locale} color={color} onNext={(wasCorrect) => { setExerciseResults(prev => [...prev, wasCorrect]); next() }} />
              </div>
            )
          })()}
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

