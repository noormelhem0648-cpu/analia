'use client'

import Link from 'next/link'
import { BookOpen, Flame, Star, Target, ChevronRight, Play } from 'lucide-react'

const LEVEL_COLORS: Record<string, string> = {
  'pre-a1': '#10B981', 'a1': '#3B82F6', 'a2': '#8B5CF6',
  'b1': '#F59E0B', 'b2': '#EF4444', 'c1': '#6366F1', 'c2': '#EC4899',
}

const tx = {
  zh: {
    greeting_morning: '早上好', greeting_day: '你好', greeting_evening: '晚上好',
    subtitle: '今天继续您的阿拉伯语之旅！',
    continue: '继续学习', start: '开始学习',
    your_progress: '您的进度', total_xp: '总积分', streak: '连续天数',
    lessons_done: '完成课程', vocab_learned: '学会词汇',
    levels: '学习等级', view_all: '查看全部',
    daily_goal: '每日目标', xp_today: '今日积分',
    no_progress: '还没有学习记录，开始第一课吧！',
    level_locked: '未解锁', level_done: '已完成', level_current: '进行中',
  },
  en: {
    greeting_morning: 'Good morning', greeting_day: 'Hello', greeting_evening: 'Good evening',
    subtitle: 'Continue your Arabic journey today!',
    continue: 'Continue', start: 'Start Learning',
    your_progress: 'Your Progress', total_xp: 'Total XP', streak: 'Day Streak',
    lessons_done: 'Lessons Done', vocab_learned: 'Vocab Learned',
    levels: 'Levels', view_all: 'View All',
    daily_goal: 'Daily Goal', xp_today: "Today's XP",
    no_progress: 'No lessons yet — start your first lesson!',
    level_locked: 'Locked', level_done: 'Done', level_current: 'In Progress',
  },
  ar: {
    greeting_morning: 'صباح الخير', greeting_day: 'مرحباً', greeting_evening: 'مساء الخير',
    subtitle: 'واصل رحلتك مع العربية اليوم!',
    continue: 'متابعة التعلم', start: 'ابدأ التعلم',
    your_progress: 'تقدمك', total_xp: 'مجموع النقاط', streak: 'أيام متتالية',
    lessons_done: 'دروس مكتملة', vocab_learned: 'مفردات تعلمتها',
    levels: 'المستويات', view_all: 'عرض الكل',
    daily_goal: 'هدف اليوم', xp_today: 'نقاط اليوم',
    no_progress: 'لا دروس بعد — ابدأ درسك الأول!',
    level_locked: 'مقفل', level_done: 'مكتمل', level_current: 'قيد التعلم',
  },
}

interface Profile {
  display_name?: string
  username?: string
  total_xp?: number
  streak_days?: number
  ui_language?: string
  current_level_id?: number
}

interface Level {
  id: number
  code: string
  name_ar: string
  name_en: string
  name_zh: string
  color_primary?: string
  icon_emoji?: string
  order_index: number
}

interface Props {
  locale: string
  profile: Profile | null
  levels: Level[]
  recentProgress: Array<{ lesson_id: number; status: string; score?: number; lessons?: { title: string; level_id: number } }>
}

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'greeting_morning'
  if (h < 18) return 'greeting_day'
  return 'greeting_evening'
}

export default function DashboardClient({ locale, profile, levels, recentProgress }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const name = profile?.display_name || profile?.username || 'Learner'
  const xp = profile?.total_xp || 0
  const streak = profile?.streak_days || 0
  const currentLevelId = profile?.current_level_id || 1
  const greetKey = getGreeting() as keyof typeof t
  const greeting = t[greetKey] as string

  const dailyXpGoal = 50
  const xpToday = Math.min(xp % 100, dailyXpGoal)
  const goalPct = Math.round((xpToday / dailyXpGoal) * 100)

  return (
    <main className="ml-20 lg:ml-64 flex-1 p-6 lg:p-10">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {greeting}, <span style={{ color: '#1E3A5F' }}>{name}</span>!
            </h1>
            <p className="text-gray-700 mt-1">{t.subtitle}</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-2">
            <Flame size={18} className="text-orange-500" />
            <span className="font-bold text-gray-800">{streak}</span>
            <span className="text-xs text-gray-700">{t.streak}</span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon="⭐" label={t.total_xp} value={xp.toLocaleString()} color="#F59E0B" />
        <StatCard icon="🔥" label={t.streak} value={`${streak} d`} color="#EF4444" />
        <StatCard icon="📚" label={t.lessons_done} value={recentProgress.length} color="#8B5CF6" />
        <StatCard icon="🔤" label={t.vocab_learned} value="0" color="#10B981" />
      </div>

      {/* Daily goal */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Target size={18} style={{ color: '#1E3A5F' }} />
            <span className="font-semibold text-gray-800">{t.daily_goal}</span>
          </div>
          <span className="text-sm text-gray-700">{xpToday} / {dailyXpGoal} XP</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-700"
            style={{ width: `${goalPct}%`, background: 'linear-gradient(90deg, #1E3A5F, #2D5A8E)' }} />
        </div>
        <p className="text-xs text-gray-600 mt-2">{goalPct}% {locale === 'ar' ? 'من هدف اليوم' : locale === 'zh' ? '的每日目标' : 'of daily goal'}</p>
      </div>

      {/* Continue / Start learning */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <BookOpen size={18} style={{ color: '#1E3A5F' }} />
          {recentProgress.length > 0 ? t.continue : t.start}
        </h2>
        {recentProgress.length > 0 ? (
          <div className="space-y-3">
            {recentProgress.map((p, i) => (
              <Link key={i} href={`/${locale}/levels/${p.lessons?.level_id}/lessons/${p.lesson_id}`}
                className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #1E3A5F22, #2D5A8E22)' }}>
                    <BookOpen size={18} style={{ color: '#1E3A5F' }} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{p.lessons?.title || 'Lesson'}</p>
                    <p className="text-xs text-gray-600 capitalize">{p.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {p.score !== undefined && p.score !== null && (
                    <span className="text-sm font-medium text-green-600">{p.score}%</span>
                  )}
                  <Play size={16} className="text-gray-500 group-hover:text-blue-500 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <Link href={`/${locale}/levels`}
            className="flex items-center justify-between bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
                <span className="text-2xl text-white" style={{ fontFamily: 'Amiri, serif' }}>أ</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">{t.no_progress}</p>
                <p className="text-sm text-blue-600 mt-1">{t.start} →</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-500 group-hover:text-blue-500 transition-colors" />
          </Link>
        )}
      </div>

      {/* Level overview */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">{t.levels}</h2>
          <Link href={`/${locale}/levels`} className="text-sm font-medium hover:underline" style={{ color: '#2D5A8E' }}>
            {t.view_all} →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {levels.slice(0, 4).map(level => {
            const isActive = level.id === currentLevelId
            const isDone = level.order_index < (levels.find(l => l.id === currentLevelId)?.order_index ?? 0)
            const color = level.color_primary || LEVEL_COLORS[level.code] || '#6366F1'
            const displayName = locale === 'zh' ? level.name_zh : locale === 'ar' ? level.name_ar : level.name_en
            return (
              <Link key={level.id} href={`/${locale}/levels/${level.id}`}
                className={`rounded-2xl p-4 border transition-all hover:scale-105 ${isActive ? 'shadow-md border-transparent' : isDone ? 'border-gray-100' : 'border-gray-100 opacity-60'}`}
                style={isActive ? { background: `${color}18`, borderColor: color } : { background: 'white' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2"
                  style={{ background: isDone || isActive ? color : '#E5E7EB', color: 'white' }}>
                  {isDone ? '✓' : level.icon_emoji || String(level.order_index + 1)}
                </div>
                <p className="font-bold text-sm text-gray-800">{displayName}</p>
                <p className="text-xs text-gray-600 mt-0.5">{level.code?.toUpperCase()}</p>
                {isActive && <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full text-white" style={{ background: color }}>{t.level_current}</span>}
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}

function StatCard({ icon, label, value, color }: { icon: string; label: string; value: string | number; color: string }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-700 mt-0.5">{label}</div>
      <div className="mt-2 h-1 rounded-full" style={{ background: `${color}30` }}>
        <div className="h-full w-1/2 rounded-full" style={{ background: color }} />
      </div>
    </div>
  )
}
