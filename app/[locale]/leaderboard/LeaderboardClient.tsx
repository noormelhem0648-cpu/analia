'use client'

import { Trophy, Flame, Star } from 'lucide-react'

interface Entry {
  id: string
  display_name?: string
  username: string
  total_xp: number
  streak_days: number
}

interface Props {
  locale: string
  currentUserId: string
  entries: Entry[]
}

const tx = {
  zh: { title: '排行榜', subtitle: '全球学习者排名', xp: '积分', streak: '连续', days: '天', you: '你', empty: '暂无数据' },
  en: { title: 'Leaderboard', subtitle: 'Global learner rankings', xp: 'XP', streak: 'Streak', days: 'days', you: 'You', empty: 'No data yet' },
  ar: { title: 'لوحة المتصدرين', subtitle: 'ترتيب المتعلمين العالمي', xp: 'نقطة', streak: 'سلسلة', days: 'أيام', you: 'أنت', empty: 'لا توجد بيانات' },
}

const MEDAL: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' }

export default function LeaderboardClient({ locale, currentUserId, entries }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const top3 = entries.slice(0, 3)
  const rest = entries.slice(3)

  function displayName(e: Entry) {
    return e.display_name || e.username || '---'
  }

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <Trophy size={26} style={{ color: '#F59E0B' }} />
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{t.title}</h1>
          </div>
          <p className="text-gray-600 text-sm">{t.subtitle}</p>
        </div>

        {entries.length === 0 ? (
          <div className="text-center py-20 text-gray-500">{t.empty}</div>
        ) : (
          <>
            {/* Podium — top 3 */}
            {top3.length > 0 && (
              <div className="flex items-end justify-center gap-3 mb-8">
                {[top3[1], top3[0], top3[2]].filter(Boolean).map((e, vi) => {
                  const rank = vi === 0 ? 2 : vi === 1 ? 1 : 3
                  const height = rank === 1 ? 'h-28' : rank === 2 ? 'h-20' : 'h-16'
                  const isMe = e.id === currentUserId
                  return (
                    <div key={e.id} className="flex flex-col items-center gap-2 flex-1">
                      <div className={`text-2xl ${isMe ? 'ring-2 ring-blue-400 rounded-full' : ''}`}>
                        {MEDAL[rank]}
                      </div>
                      <p className={`text-xs font-bold truncate max-w-[80px] text-center ${isMe ? 'text-blue-600' : 'text-gray-700'}`}>
                        {displayName(e)}{isMe ? ` (${t.you})` : ''}
                      </p>
                      <p className="text-xs text-yellow-600 font-semibold">{e.total_xp.toLocaleString()} {t.xp}</p>
                      <div className={`w-full rounded-t-2xl ${height} flex items-center justify-center text-white font-bold text-lg shadow-md`}
                        style={{ background: rank === 1 ? 'linear-gradient(180deg,#F59E0B,#D97706)' : rank === 2 ? 'linear-gradient(180deg,#94A3B8,#64748B)' : 'linear-gradient(180deg,#CD7C2F,#A0522D)' }}>
                        #{rank}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Remaining entries */}
            <div className="space-y-2">
              {rest.map((e, i) => {
                const rank = i + 4
                const isMe = e.id === currentUserId
                return (
                  <div key={e.id}
                    className={`flex items-center gap-4 rounded-2xl px-4 py-3 border transition-all ${isMe ? 'border-blue-300 bg-blue-50 shadow-sm' : 'border-gray-100 bg-white'}`}>
                    <span className="w-7 text-sm font-bold text-gray-500 text-center flex-shrink-0">#{rank}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold truncate ${isMe ? 'text-blue-700' : 'text-gray-800'}`}>
                        {displayName(e)}{isMe ? ` (${t.you})` : ''}
                      </p>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="flex items-center gap-1 text-xs text-yellow-600">
                          <Star size={11} fill="currentColor" />
                          {e.total_xp.toLocaleString()} {t.xp}
                        </span>
                        {e.streak_days > 0 && (
                          <span className="flex items-center gap-1 text-xs text-orange-500">
                            <Flame size={11} />
                            {e.streak_days} {t.days}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
