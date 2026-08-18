'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, CheckCircle, Play, Star, Search, ChevronDown } from 'lucide-react'

const LEVEL_COLORS: Record<string, string> = {
  'pre-a1': '#10B981', 'a1': '#3B82F6', 'a2': '#8B5CF6',
  'b1': '#F59E0B', 'b2': '#EF4444', 'c1': '#6366F1', 'c2': '#C9858A',
  'zh-pre-a1': '#DC2626', 'zh-a1': '#EA580C', 'zh-a2': '#D97706',
  'zh-b1': '#16A34A', 'zh-b2': '#0284C7', 'zh-c1': '#7C3AED',
}

interface Lesson {
  id: number
  title_ar: string
  title_en: string
  title_zh: string
  description_ar?: string
  description_en?: string
  description_zh?: string
  order_index: number
  xp_reward?: number
  estimated_minutes?: number
  lesson_type?: string
  unit_id?: number | null
}

interface Unit {
  id: number
  code: string
  title_ar: string
  title_en: string
  title_zh: string
  icon_emoji?: string
  order_index: number
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
  units: Unit[]
  progressMap: Record<number, { status: string; score?: number; xp_earned?: number }>
  currentLevelId: number
}

const tx = {
  zh: { back: '返回路径', lessons: '课程', unit: '单元', completed: '已完成', start: '开始', review: '复习', continue: '继续', minutes: '分钟', xp: 'XP' },
  en: { back: 'Back to Path', lessons: 'lessons', unit: 'Unit', completed: 'completed', start: 'Start', review: 'Review', continue: 'Continue', minutes: 'min', xp: 'XP' },
  ar: { back: 'العودة للمسار', lessons: 'درس', unit: 'الوحدة', completed: 'مكتمل', start: 'ابدأ', review: 'راجع', continue: 'تابع', minutes: 'د', xp: 'نقطة' },
}

const LESSON_TYPE_EMOJI: Record<string, string> = {
  'grammar': '📝', 'vocabulary': '🔤', 'letters': '🔡', 'pronunciation': '🎤',
  'reading': '📖', 'writing': '✍️', 'listening': '🎧',
  'conversation': '💬', 'review': '🧪', 'culture': '🌍', 'intro': '🌟',
}

export default function LevelDetailClient({ locale, level, lessons, units, progressMap }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const color = level.color_primary || LEVEL_COLORS[level.code] || '#6366F1'
  const levelIcon = level.icon_emoji || '📚'
  const displayName = locale === 'zh' ? level.name_zh : locale === 'ar' ? level.name_ar : level.name_en
  const displayDesc = locale === 'zh' ? level.description_zh : locale === 'ar' ? level.description_ar : level.description_en

  const [search, setSearch] = useState('')
  const hasUnits = units.length > 0
  // When a level has units, ignore legacy flat lessons (unit_id null) that are no longer shown.
  const activeLessons = hasUnits ? lessons.filter(l => l.unit_id != null) : lessons
  const totalLessons = activeLessons.length
  const doneCount = activeLessons.filter(l => progressMap[l.id]?.status === 'completed').length
  const progress = totalLessons > 0 ? Math.round((doneCount / totalLessons) * 100) : 0
  const lname = (l: Lesson) => (locale === 'ar' ? l.title_ar : locale === 'zh' ? l.title_zh : l.title_en)
  const uname = (u: Unit) => (locale === 'ar' ? u.title_ar : locale === 'zh' ? u.title_zh : u.title_en)

  const matches = (l: Lesson) => {
    if (!search) return true
    const q = search.toLowerCase()
    return (l.title_en || '').toLowerCase().includes(q) || (l.title_zh || '').includes(search) || (l.title_ar || '').includes(search)
  }

  // Which unit is expanded (first incomplete unit open by default)
  const [openUnit, setOpenUnit] = useState<number | null>(() => {
    if (!hasUnits) return null
    for (const u of units) {
      const uls = lessons.filter(l => l.unit_id === u.id)
      if (uls.some(l => progressMap[l.id]?.status !== 'completed')) return u.id
    }
    return units[0]?.id ?? null
  })

  function LessonRow({ lesson, idx }: { lesson: Lesson; idx: number }) {
    const prog = progressMap[lesson.id]
    const isCompleted = prog?.status === 'completed'
    const inProgress = prog && prog.status !== 'completed'
    const emoji = LESSON_TYPE_EMOJI[lesson.lesson_type || ''] || '📚'
    let btnLabel = t.start
    if (isCompleted) btnLabel = t.review
    else if (inProgress) btnLabel = t.continue
    return (
      <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border shadow-sm transition-all hover:shadow-md hover:border-gray-200">
        <div className={`w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-xl ${isCompleted ? 'bg-green-100' : inProgress ? 'bg-blue-50' : 'bg-gray-50'}`}>
          {isCompleted ? <CheckCircle size={20} className="text-green-500" /> : <span>{emoji}</span>}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">#{idx}</span>
            {isCompleted && prog?.score !== undefined && (
              <span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">{prog.score}%</span>
            )}
          </div>
          <p className="font-semibold text-gray-800 truncate">{lname(lesson)}</p>
          <div className="flex items-center gap-3 mt-0.5">
            {lesson.estimated_minutes && <span className="text-xs text-gray-600">{lesson.estimated_minutes} {t.minutes}</span>}
            <span className="flex items-center gap-0.5 text-xs text-yellow-600">
              <Star size={11} fill="currentColor" />{lesson.xp_reward || 10} {t.xp}
            </span>
          </div>
        </div>
        <Link href={`/${locale}/levels/${level.id}/lessons/${lesson.id}`}
          className="flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-xl text-white flex-shrink-0 transition-all hover:opacity-90"
          style={{ background: isCompleted ? '#10B981' : color }}>
          {isCompleted ? <CheckCircle size={14} /> : <Play size={14} />}{btnLabel}
        </Link>
      </div>
    )
  }

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10">
      <div className="max-w-2xl mx-auto">
        <Link href={`/${locale}/levels`} className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-800 mb-6 transition-colors">
          <ChevronLeft size={16} />{t.back}
        </Link>

        {/* Level header */}
        <div className="rounded-3xl p-6 mb-8 text-white" style={{ background: `linear-gradient(135deg, ${color}DD, ${color})` }}>
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
              <span>{doneCount} / {totalLessons} {t.lessons}{hasUnits ? ` · ${units.length} ${locale === 'ar' ? 'وحدات' : locale === 'zh' ? '单元' : 'units'}` : ''}</span>
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

        {/* Units accordion OR flat list */}
        {hasUnits ? (
          <div className="space-y-4">
            {units.map((u, ui) => {
              const allU = lessons.filter(l => l.unit_id === u.id)
              const uLessons = allU.filter(matches)
              if (search && uLessons.length === 0) return null
              const uDone = allU.filter(l => progressMap[l.id]?.status === 'completed').length
              const uPct = allU.length ? Math.round((uDone / allU.length) * 100) : 0
              const isOpen = search ? true : openUnit === u.id
              return (
                <motion.div key={u.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: ui * 0.05, type: 'spring', stiffness: 240, damping: 24 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <button onClick={() => setOpenUnit(isOpen ? -1 : u.id)}
                    className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-start active:bg-gray-100">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${color}18` }}>{u.icon_emoji || '📦'}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium" style={{ color }}>{t.unit} {ui + 1}</p>
                      <p className="font-bold text-gray-800 truncate">{uname(u)}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden max-w-[140px]">
                          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${uPct}%`, background: color }} />
                        </div>
                        <span className="text-xs text-gray-500">{uDone}/{allU.length}</span>
                      </div>
                    </div>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-gray-400 flex-shrink-0">
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <div className="p-3 pt-0 space-y-2">
                          {uLessons.map((lesson, li) => (
                            <motion.div key={lesson.id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: li * 0.03 }}>
                              <LessonRow lesson={lesson} idx={li + 1} />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        ) : (
          <div className="space-y-3">
            {lessons.filter(matches).map((lesson, idx) => (
              <LessonRow key={lesson.id} lesson={lesson} idx={idx + 1} />
            ))}
          </div>
        )}

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
