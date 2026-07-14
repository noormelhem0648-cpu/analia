'use client'

import Link from 'next/link'
import { Lock, CheckCircle, ChevronRight, Star } from 'lucide-react'

const LEVEL_META: Record<string, { color: string; icon: string }> = {
  'pre-a1': { color: '#10B981', icon: '🌱' },
  'a1':     { color: '#3B82F6', icon: '🔤' },
  'a2':     { color: '#8B5CF6', icon: '📖' },
  'b1':     { color: '#F59E0B', icon: '💬' },
  'b2':     { color: '#EF4444', icon: '📰' },
  'c1':     { color: '#6366F1', icon: '🎓' },
  'c2':     { color: '#EC4899', icon: '👑' },
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
  lessons?: [{ count: number }]
}

interface Props {
  locale: string
  levels: Level[]
  currentLevelId: number
  completedByLevel: Record<number, number>
}

const tx = {
  zh: { title: '学习路径', subtitle: '从初级到精通的阿拉伯语之旅', lessons: '课程', completed: '已完成', locked: '未解锁', start: '开始', continue: '继续', done: '完成 ✓' },
  en: { title: 'Learning Path', subtitle: 'Your Arabic journey from beginner to mastery', lessons: 'lessons', completed: 'completed', locked: 'Locked', start: 'Start', continue: 'Continue', done: 'Done ✓' },
  ar: { title: 'مسار التعلم', subtitle: 'رحلتك في العربية من المبتدئ إلى الإتقان', lessons: 'درس', completed: 'مكتمل', locked: 'مقفل', start: 'ابدأ', continue: 'تابع', done: 'مكتمل ✓' },
}

export default function LevelsClient({ locale, levels, currentLevelId, completedByLevel }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const currentOrder = levels.find(l => l.id === currentLevelId)?.order_index ?? 0

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{t.title}</h1>
          <p className="text-gray-700 mt-1">{t.subtitle}</p>
        </div>

        {/* Path */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-gray-200 hidden lg:block" />

          <div className="space-y-6">
            {levels.map((level, idx) => {
              const meta = LEVEL_META[level.code] || { color: '#6366F1', icon: '📚' }
              const color = level.color_primary || meta.color
              const icon = level.icon_emoji || meta.icon
              const totalLessons = (level.lessons as unknown as [{ count: number }])?.[0]?.count || 0
              const done = completedByLevel[level.id] || 0
              const isActive = level.id === currentLevelId
              const isCompleted = level.order_index < currentOrder
              const isLocked = level.order_index > currentOrder

              const displayName = locale === 'zh' ? level.name_zh : locale === 'ar' ? level.name_ar : level.name_en
              const desc = locale === 'zh' ? level.description_zh : locale === 'ar' ? level.description_ar : level.description_en
              const progress = totalLessons > 0 ? Math.round((done / totalLessons) * 100) : 0

              let btnLabel = t.start
              if (isCompleted) btnLabel = t.done
              else if (isActive && done > 0) btnLabel = t.continue

              return (
                <div key={level.id} className={`relative flex gap-6 items-start group`}>
                  {/* Circle node */}
                  <div className={`relative z-10 w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl shadow-md transition-all group-hover:scale-105 ${isLocked ? 'opacity-40 grayscale' : ''}`}
                    style={{ background: isLocked ? '#E5E7EB' : `linear-gradient(135deg, ${color}CC, ${color})` }}>
                    {isLocked ? <Lock size={22} className="text-gray-600" /> : isCompleted ? <CheckCircle size={24} className="text-white" /> : <span>{icon}</span>}
                    {isActive && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white animate-pulse" />
                    )}
                  </div>

                  {/* Card */}
                  <div className={`flex-1 bg-white rounded-2xl p-5 shadow-sm border transition-all ${isActive ? 'border-2' : 'border-gray-100'} ${isLocked ? 'opacity-50' : 'hover:shadow-md'}`}
                    style={isActive ? { borderColor: color } : {}}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full text-white"
                            style={{ background: isLocked ? '#9CA3AF' : color }}>
                            {displayName}
                          </span>
                          {isActive && <span className="text-xs text-green-600 font-medium">● Active</span>}
                        </div>
                        <p className="text-sm text-gray-600">{desc}</p>
                        <p className="text-xs text-gray-600 mt-1">{totalLessons} {t.lessons} · {done} {t.completed}</p>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star size={14} fill="currentColor" />
                        <span className="text-xs font-bold text-gray-600">{(idx + 1) * 100} XP</span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    {!isLocked && totalLessons > 0 && (
                      <div className="mt-3">
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-700"
                            style={{ width: `${progress}%`, background: color }} />
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{progress}%</p>
                      </div>
                    )}

                    {/* CTA */}
                    {!isLocked && (
                      <Link href={`/${locale}/levels/${level.id}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl text-white transition-all hover:opacity-90"
                        style={{ background: isCompleted ? '#10B981' : color }}>
                        {btnLabel}
                        <ChevronRight size={15} />
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
