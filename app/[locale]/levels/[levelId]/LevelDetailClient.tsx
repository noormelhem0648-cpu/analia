'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Lock, CheckCircle, Play, Star, Search } from 'lucide-react'

const LEVEL_COLORS: Record<string, string> = {
  'pre-a1': '#10B981', 'a1': '#3B82F6', 'a2': '#8B5CF6',
  'b1': '#F59E0B', 'b2': '#EF4444', 'c1': '#6366F1', 'c2': '#EC4899',
}

interface Lesson {
  id: number
  title: string
  description?: string
  order_index: number
  xp_reward?: number
  estimated_minutes?: number
  lesson_type?: string
}

interface Level {
  id: number
  code: string
  name_ar: string
  name_en: string
  name_zh: string
  description_ar?: string
  description_en?: string
  description_zh?: string
  color_primary?: string
  icon_emoji?: string
  order_index: number
}

interface Props {
  locale: string
  level: Level
  lessons: Lesson[]
  progressMap: Record<number, { status: string; score?: number; xp_earned?: number }>
  currentLevelId: number
}

const tx = {
  zh: { back: '返回路径', lessons: '课程', completed: '已完成', locked: '未解锁', start: '开始', review: '复习', continue: '继续', minutes: '分钟', xp: 'XP' },
  en: { back: 'Back to Path', lessons: 'lessons', completed: 'completed', locked: 'Locked', start: 'Start', review: 'Review', continue: 'Continue', minutes: 'min', xp: 'XP' },
  ar: { back: 'العودة للمسار', lessons: 'درس', completed: 'مكتمل', locked: 'مقفل', start: 'ابدأ', review: 'راجع', continue: 'تابع', minutes: 'د', xp: 'نقطة' },
}

const LESSON_TYPE_EMOJI: Record<string, string> = {
  'grammar': '📝', 'vocabulary': '🔤', 'pronunciation': '🎤',
  'reading': '📖', 'writing': '✍️', 'listening': '👂',
  'conversation': '💬', 'culture': '🌍', 'intro': '🌟',
}

export default function LevelDetailClient({ locale, level, lessons, progressMap, currentLevelId }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const color = level.color_primary || LEVEL_COLORS[level.code] || '#6366F1'
  const levelIcon = level.icon_emoji || '📚'
  const displayName = locale === 'zh' ? level.name_zh : locale === 'ar' ? level.name_ar : level.name_en
  const displayDesc = locale === 'zh' ? level.description_zh : locale === 'ar' ? level.description_ar : level.description_en
  const isCurrentLevel = level.id === currentLevelId

  const [search, setSearch] = useState('')
  const totalLessons = lessons.length
  const doneCount = Object.values(progressMap).filter(p => p.status === 'completed').length
  const progress = totalLessons > 0 ? Math.round((doneCount / totalLessons) * 100) : 0

  const filteredLessons = search
    ? lessons.filter(l => (l.title || '').toLowerCase().includes(search.toLowerCase()))
    : lessons

  // Unlock logic: first lesson always unlocked, next unlocked after previous completed
  function isUnlocked(lesson: Lesson, idx: number) {
    if (!isCurrentLevel && level.id < currentLevelId) return true // past levels all unlocked
    if (idx === 0) return true
    const prev = lessons[idx - 1]
    return !!progressMap[prev.id]
  }

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link href={`/${locale}/levels`}
          className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-800 mb-6 transition-colors">
          <ChevronLeft size={16} />
          {t.back}
        </Link>

        {/* Level header */}
        <div className="rounded-3xl p-6 mb-8 text-white"
          style={{ background: `linear-gradient(135deg, ${color}DD, ${color})` }}>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-bold opacity-80 uppercase tracking-wide">{level.code?.toUpperCase()}</span>
              <p className="text-lg font-bold mt-1">{displayName}</p>
              <p className="text-sm opacity-75 mt-0.5">{displayDesc}</p>
            </div>
            <div className="text-5xl opacity-90">{levelIcon}</div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1 opacity-80">
              <span>{doneCount} / {totalLessons} {t.lessons}</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder={locale === 'zh' ? '搜索课程...' : locale === 'ar' ? 'ابحث في الدروس...' : 'Search lessons...'}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-300 bg-white" />
        </div>

        {/* Lessons list */}
        <div className="space-y-3">
          {filteredLessons.map((lesson, idx) => {
            const prog = progressMap[lesson.id]
            const isCompleted = prog?.status === 'completed'
            const inProgress = prog && prog.status !== 'completed'
            const unlocked = isUnlocked(lesson, idx)
            const emoji = LESSON_TYPE_EMOJI[lesson.lesson_type || ''] || '📚'

            let btnLabel = t.start
            if (isCompleted) btnLabel = t.review
            else if (inProgress) btnLabel = t.continue

            return (
              <div key={lesson.id}
                className={`flex items-center gap-4 bg-white rounded-2xl p-4 border shadow-sm transition-all ${unlocked ? 'hover:shadow-md hover:border-gray-200 cursor-pointer' : 'opacity-50'}`}>

                {/* Status circle */}
                <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-xl ${isCompleted ? 'bg-green-100' : inProgress ? 'bg-blue-50' : unlocked ? 'bg-gray-50' : 'bg-gray-100'}`}>
                  {isCompleted ? <CheckCircle size={22} className="text-green-500" /> :
                   !unlocked ? <Lock size={18} className="text-gray-600" /> :
                   <span>{emoji}</span>}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">#{idx + 1}</span>
                    {isCompleted && prog?.score !== undefined && (
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">{prog.score}%</span>
                    )}
                  </div>
                  <p className="font-semibold text-gray-800 truncate">{lesson.title}</p>
                  <div className="flex items-center gap-3 mt-0.5">
                    {lesson.estimated_minutes && (
                      <span className="text-xs text-gray-600">{lesson.estimated_minutes} {t.minutes}</span>
                    )}
                    <span className="flex items-center gap-0.5 text-xs text-yellow-600">
                      <Star size={11} fill="currentColor" />
                      {lesson.xp_reward || 10} {t.xp}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                {unlocked && (
                  <Link href={`/${locale}/levels/${level.id}/lessons/${lesson.id}`}
                    className="flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-xl text-white flex-shrink-0 transition-all hover:opacity-90"
                    style={{ background: isCompleted ? '#10B981' : color }}>
                    {isCompleted ? <CheckCircle size={14} /> : <Play size={14} />}
                    {btnLabel}
                  </Link>
                )}
              </div>
            )
          })}
        </div>

        {lessons.length === 0 && (
          <div className="text-center py-16 text-gray-600">
            <p className="text-4xl mb-3">📭</p>
            <p>{locale === 'ar' ? 'لا توجد دروس بعد' : locale === 'zh' ? '暂无课程' : 'No lessons yet'}</p>
          </div>
        )}
      </div>
    </main>
  )
}
