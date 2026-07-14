'use client'

const tx = {
  zh: {
    title: '我的成就',
    subtitle: '您解锁的所有徽章',
    earned: '已获得',
    locked: '未解锁',
    xp: 'XP奖励',
    progress: '进度',
    all: '全部',
    completed: '已完成',
  },
  en: {
    title: 'My Achievements',
    subtitle: 'All your unlocked badges',
    earned: 'Earned',
    locked: 'Locked',
    xp: 'XP Reward',
    progress: 'Progress',
    all: 'All',
    completed: 'Completed',
  },
  ar: {
    title: 'إنجازاتي',
    subtitle: 'جميع شاراتك المكتسبة',
    earned: 'مكتسب',
    locked: 'مقفل',
    xp: 'مكافأة النقاط',
    progress: 'التقدم',
    all: 'الكل',
    completed: 'مكتملة',
  },
}

interface Achievement {
  id: number
  code: string
  name_ar: string
  name_en: string
  name_zh: string
  description_ar?: string
  description_en?: string
  description_zh?: string
  icon: string
  xp_reward: number
  condition_type: string
  condition_value: number
}

interface UserAchievement {
  achievement_id: number
  earned_at: string
}

interface Props {
  locale: string
  achievements: Achievement[]
  userAchievements: UserAchievement[]
  totalXp: number
  streak: number
  lessonsCount: number
}

export default function AchievementsClient({ locale, achievements, userAchievements, totalXp, streak, lessonsCount }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const earnedIds = new Set(userAchievements.map(ua => ua.achievement_id))
  const earnedCount = earnedIds.size

  function getName(a: Achievement) {
    return locale === 'zh' ? a.name_zh : locale === 'ar' ? a.name_ar : a.name_en
  }
  function getDesc(a: Achievement) {
    return locale === 'zh' ? a.description_zh : locale === 'ar' ? a.description_ar : a.description_en
  }

  function getProgress(a: Achievement): number {
    if (a.condition_type === 'xp') return Math.min(totalXp / a.condition_value, 1)
    if (a.condition_type === 'streak') return Math.min(streak / a.condition_value, 1)
    if (a.condition_type === 'lessons') return Math.min(lessonsCount / a.condition_value, 1)
    return 0
  }

  const earned = achievements.filter(a => earnedIds.has(a.id))
  const locked = achievements.filter(a => !earnedIds.has(a.id))

  return (
    <main className="ml-20 lg:ml-64 flex-1 p-6 lg:p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-gray-700 mt-1">{t.subtitle}</p>
      </div>

      {/* Summary bar */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: t.earned, value: earnedCount, icon: '🏅', color: '#F59E0B' },
          { label: t.locked, value: achievements.length - earnedCount, icon: '🔒', color: '#6B7280' },
          { label: t.completed, value: `${Math.round((earnedCount / Math.max(achievements.length, 1)) * 100)}%`, icon: '📊', color: '#10B981' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs text-gray-700 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Earned */}
      {earned.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>✅</span> {t.earned} ({earned.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {earned.map(a => (
              <div key={a.id} className="bg-white rounded-2xl p-5 shadow-sm border-2 transition-all"
                style={{ borderColor: '#10B98133' }}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #10B98118, #10B98130)' }}>
                    {a.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-900 text-sm">{getName(a)}</h3>
                      <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">✓</span>
                    </div>
                    <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">{getDesc(a)}</p>
                    {a.xp_reward > 0 && (
                      <span className="inline-block mt-2 text-xs text-yellow-600 font-medium bg-yellow-50 px-2 py-0.5 rounded-full">
                        +{a.xp_reward} {t.xp}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Locked */}
      {locked.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>🔒</span> {t.locked} ({locked.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {locked.map(a => {
              const pct = getProgress(a)
              return (
                <div key={a.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 opacity-70">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 bg-gray-100 grayscale">
                      {a.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-700 text-sm">{getName(a)}</h3>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{getDesc(a)}</p>
                      {/* Progress bar */}
                      {pct > 0 && (
                        <div className="mt-2">
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full rounded-full transition-all"
                              style={{ width: `${pct * 100}%`, background: 'linear-gradient(90deg, #1E3A5F, #2D5A8E)' }} />
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{Math.round(pct * 100)}%</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}
    </main>
  )
}
