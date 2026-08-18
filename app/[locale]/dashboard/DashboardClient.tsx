'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Flame, Target, Brain, Sparkles } from 'lucide-react'
import { getStudyMinutesToday, getXpToday } from '@/lib/localProgress'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, type: 'spring' as const, stiffness: 260, damping: 22 } }),
}

const LEVEL_COLORS: Record<string, string> = {
  'pre-a1': '#10B981', 'a1': '#3B82F6', 'a2': '#8B5CF6',
  'b1': '#F59E0B', 'b2': '#EF4444', 'c1': '#6366F1', 'c2': '#C9858A',
  'pre-hsk': '#DC2626', 'hsk1': '#EA580C', 'hsk2': '#D97706',
  'hsk3': '#16A34A', 'hsk4': '#0284C7', 'hsk5': '#7C3AED', 'hsk6': '#BE185D',
  'zh-pre-a1': '#DC2626', 'zh-a1': '#EA580C', 'zh-a2': '#D97706',
  'zh-b1': '#16A34A', 'zh-b2': '#0284C7', 'zh-c1': '#7C3AED',
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
  recentProgress: Array<{ lesson_id: number; status: string; score?: number; lessons?: { title_ar?: string; title_en?: string; title_zh?: string; level_id: number } }>
  learningDirection?: string
  totalLessons?: number
  serverXpToday?: number
  serverMinutesToday?: number
}

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'greeting_morning'
  if (h < 18) return 'greeting_day'
  return 'greeting_evening'
}

export default function DashboardClient({ locale, profile, levels, recentProgress, learningDirection, totalLessons, serverXpToday, serverMinutesToday }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const name = profile?.display_name?.trim() || profile?.username?.trim() || 'Learner'
  const [studyMinutes, setStudyMinutes] = useState(0)
  const [xpToday, setXpToday] = useState(0)
  useEffect(() => {
    // localStorage is only available after mount (SSR-safe) — intentional mount-time read.
    /* eslint-disable react-hooks/set-state-in-effect */
    setStudyMinutes(getStudyMinutesToday())
    setXpToday(getXpToday())
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [])
  // Server (Supabase) is the source of truth so every device shows identical stats.
  // localStorage is only a pre-hydration hint used before the server value is known.
  const effectiveXpToday = serverXpToday != null ? serverXpToday : xpToday
  const effectiveMinutes = serverMinutesToday != null ? serverMinutesToday : studyMinutes
  const lessonsCount = totalLessons ?? recentProgress.length
  const xp = profile?.total_xp || 0
  const streak = profile?.streak_days || 0
  const currentLevelId = profile?.current_level_id || (levels[0]?.id ?? 0)
  const greetKey = getGreeting() as keyof typeof t
  const greeting = t[greetKey] as string

  const dailyXpGoal = 50
  const goalPct = Math.round((effectiveXpToday / dailyXpGoal) * 100)

  const isZh = learningDirection === 'ar_learns_zh'
  const heroSub = isZh
    ? (locale === 'zh' ? '今天继续您的汉语之旅！' : locale === 'ar' ? 'واصل رحلتك مع الصينية اليوم!' : 'Continue your Chinese journey today!')
    : t.subtitle
  const heroGrad = 'linear-gradient(135deg, #C9858A 0%, #A96368 100%)'
  const accent = '#C9858A'
  const heroGlyph = isZh ? '中' : 'أ'
  const rtl = locale === 'ar'

  return (
    <main className="lg:ml-64 flex-1 p-5 lg:p-10 pb-28 lg:pb-10" dir={rtl ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto">

        {/* Hero */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="relative overflow-hidden rounded-[28px] p-6 mb-5 text-white shadow-lg"
          style={{ background: heroGrad }}>
          <div className="absolute -top-10 -right-8 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-14 -left-6 w-44 h-44 rounded-full bg-white/10 blur-2xl" />
          <span className="absolute top-1/2 -translate-y-1/2 end-4 text-[8rem] leading-none opacity-15 select-none"
            style={{ fontFamily: 'Amiri, Noto Sans SC, serif' }}>{heroGlyph}</span>
          <div className="relative z-10">
            <p className="text-white/80 text-sm">{greeting} 👋</p>
            <h1 className="text-2xl lg:text-3xl font-extrabold mt-0.5">{name}</h1>
            <p className="text-white/85 mt-1 text-sm">{heroSub}</p>
            <div className="mt-4 inline-flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-3 py-1.5">
              <Flame size={16} className="text-amber-300" />
              <span className="font-bold">{streak}</span>
              <span className="text-xs text-white/80">{t.streak}</span>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { icon: '⭐', label: t.total_xp, value: xp.toLocaleString(), color: '#F59E0B' },
            { icon: '📚', label: t.lessons_done, value: lessonsCount, color: '#8B5CF6' },
            { icon: '⏱️', label: locale === 'zh' ? '今日' : locale === 'ar' ? 'اليوم' : 'Today', value: `${effectiveMinutes}${locale === 'zh' ? '分' : locale === 'ar' ? 'د' : 'm'}`, color: '#10B981' },
          ].map((s, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" animate="show" custom={i + 1}
              whileTap={{ scale: 0.96 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl mb-1.5">{s.icon}</div>
              <div className="text-xl font-extrabold text-gray-900 leading-none">{s.value}</div>
              <div className="text-[11px] text-gray-500 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Daily goal ring */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5 flex items-center gap-5">
          <GoalRing pct={goalPct} />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Target size={16} style={{ color: accent }} />
              <span className="font-bold text-gray-800">{t.daily_goal}</span>
            </div>
            <p className="text-sm text-gray-600">{effectiveXpToday} / {dailyXpGoal} XP</p>
            <p className="text-xs text-gray-400 mt-1">{goalPct >= 100 ? (locale === 'ar' ? 'أنجزت هدف اليوم! 🎉' : locale === 'zh' ? '今日目标已完成！🎉' : 'Daily goal done! 🎉') : `${goalPct}% ${locale === 'ar' ? 'من هدف اليوم' : locale === 'zh' ? '的每日目标' : 'of daily goal'}`}</p>
          </div>
        </motion.div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { href: `/${locale}/vocabulary/review`, icon: <Brain size={20} />, title: locale === 'ar' ? 'مراجعة اليوم' : locale === 'zh' ? '今日复习' : "Review", grad: 'linear-gradient(135deg,#7C3AED,#A78BFA)' },
            { href: `/${locale}/challenges`, icon: <Target size={20} />, title: locale === 'ar' ? 'التحديات' : locale === 'zh' ? '挑战' : 'Challenges', grad: 'linear-gradient(135deg,#EA580C,#F59E0B)' },
          ].map((q, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" animate="show" custom={9 + i} whileTap={{ scale: 0.96 }}>
              <Link href={q.href} className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: q.grad }}>{q.icon}</span>
                <span className="font-semibold text-gray-800 text-sm">{q.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Levels */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-gray-800 flex items-center gap-1.5"><Sparkles size={16} className="text-amber-500" />{t.levels}</h2>
          <Link href={`/${locale}/levels`} className="text-sm font-medium hover:underline" style={{ color: accent }}>{t.view_all} →</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {levels.map((level, i) => {
            const isActive = level.id === currentLevelId
            const isDone = level.order_index < (levels.find(l => l.id === currentLevelId)?.order_index ?? 0)
            const color = level.color_primary || LEVEL_COLORS[level.code] || '#6366F1'
            const displayName = locale === 'zh' ? level.name_zh : locale === 'ar' ? level.name_ar : level.name_en
            return (
              <motion.div key={level.id} variants={fadeUp} initial="hidden" animate="show" custom={11 + i}
                whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                <Link href={`/${locale}/levels/${level.id}`}
                  className={`block rounded-2xl p-4 border transition-shadow ${isActive ? 'shadow-md' : 'border-gray-100 hover:shadow-md'}`}
                  style={isActive ? { background: `${color}1F`, borderColor: color } : { background: '#FFFFFF', borderColor: '#E8E2DB' }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold mb-2 text-white"
                    style={{ background: isDone || isActive ? color : '#D1D5DB' }}>
                    {isDone ? '✓' : level.icon_emoji || String(level.order_index + 1)}
                  </div>
                  <p className="font-bold text-sm text-gray-800 leading-tight">{displayName}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{level.code?.toUpperCase()}</p>
                  {isActive && <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: color }}>{t.level_current}</span>}
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

// Animated circular progress ring for the daily goal
function GoalRing({ pct }: { pct: number }) {
  const r = 30, c = 2 * Math.PI * r
  const clamped = Math.min(100, Math.max(0, pct))
  const col = '#C9858A'
  return (
    <div className="relative w-[76px] h-[76px] flex-shrink-0">
      <svg width="76" height="76" className="-rotate-90">
        <circle cx="38" cy="38" r={r} fill="none" stroke="#F3F4F6" strokeWidth="7" />
        <motion.circle cx="38" cy="38" r={r} fill="none" stroke={col} strokeWidth="7" strokeLinecap="round"
          strokeDasharray={c} initial={{ strokeDashoffset: c }} animate={{ strokeDashoffset: c - (c * clamped) / 100 }}
          transition={{ duration: 1, ease: 'easeOut' }} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-sm font-extrabold text-gray-800">{clamped}%</div>
    </div>
  )
}
