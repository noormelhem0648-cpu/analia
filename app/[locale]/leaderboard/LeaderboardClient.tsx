'use client'

import { Trophy, Flame, Star } from 'lucide-react'

const tx = {
  zh: { title: '排行榜', subtitle: '与其他学生竞争', rank: '排名', xp: 'XP积分', streak: '连续天数', level: '等级', you: '你', empty: '暂无数据' },
  en: { title: 'Leaderboard', subtitle: 'Compete with other learners', rank: 'Rank', xp: 'XP', streak: 'Streak', level: 'Level', you: 'You', empty: 'No data yet' },
  ar: { title: 'لوحة المتصدرين', subtitle: 'تنافس مع الطلاب الآخرين', rank: 'المركز', xp: 'النقاط', streak: 'التسلسل', level: 'المستوى', you: 'أنت', empty: 'لا توجد بيانات' },
}

const MEDAL = ['🥇', '🥈', '🥉']

interface User {
  id: string
  display_name?: string
  username: string
  total_xp: number
  streak_days: number
  placement_level_code?: string
}

interface Props {
  locale: string
  users: User[]
  myId: string
  myRank: number
}

export default function LeaderboardClient({ locale, users, myId, myRank }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en

  const top3 = users.slice(0, 3)
  const rest = users.slice(3)

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #F59E0B, #EF4444)' }}>
              <Trophy size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-gray-600 text-sm">{t.subtitle}</p>
            </div>
          </div>

          {myRank > 0 && (
            <div className="mt-4 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-3 flex items-center gap-3">
              <span className="text-2xl font-bold text-blue-600">#{myRank}</span>
              <span className="text-blue-700 text-sm font-medium">{t.you}</span>
              <span className="text-blue-500 text-sm ml-auto">⭐ {users.find(u => u.id === myId)?.total_xp?.toLocaleString() || 0} XP</span>
            </div>
          )}
        </div>

        {/* Top 3 podium */}
        {top3.length > 0 && (
          <div className="flex items-end justify-center gap-4 mb-8">
            {[top3[1], top3[0], top3[2]].filter(Boolean).map((u, i) => {
              const rank = i === 0 ? 2 : i === 1 ? 1 : 3
              const heights = { 1: 'h-32', 2: 'h-24', 3: 'h-20' }
              const isMe = u.id === myId
              return (
                <div key={u.id} className="flex flex-col items-center gap-2 flex-1">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md ${isMe ? 'ring-4 ring-blue-400' : ''}`}
                    style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
                    {(u.display_name || u.username || '?')[0].toUpperCase()}
                  </div>
                  <p className="text-xs font-medium text-gray-700 text-center truncate w-full text-center">
                    {u.display_name || u.username}{isMe ? ` (${t.you})` : ''}
                  </p>
                  <p className="text-xs text-gray-500">⭐ {u.total_xp?.toLocaleString()}</p>
                  <div className={`w-full ${heights[rank as keyof typeof heights]} rounded-t-2xl flex items-start justify-center pt-2`}
                    style={{ background: rank === 1 ? '#F59E0B' : rank === 2 ? '#94A3B8' : '#CD7F32' }}>
                    <span className="text-2xl">{MEDAL[rank - 1]}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Rest of leaderboard */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {rest.map((u, i) => {
            const rank = i + 4
            const isMe = u.id === myId
            return (
              <div key={u.id}
                className={`flex items-center gap-4 px-5 py-3.5 border-b border-gray-50 last:border-b-0 transition-colors ${isMe ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                <span className="w-8 text-center text-sm font-bold text-gray-500">#{rank}</span>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: isMe ? 'linear-gradient(135deg, #2563EB, #1D4ED8)' : 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
                  {(u.display_name || u.username || '?')[0].toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    {u.display_name || u.username}{isMe ? ` (${t.you})` : ''}
                  </p>
                  {u.placement_level_code && (
                    <span className="text-xs text-blue-600">{u.placement_level_code.toUpperCase()}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="flex items-center gap-1 text-xs text-orange-500">
                    <Flame size={13} />
                    <span className="font-medium">{u.streak_days}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-amber-500">
                    <Star size={13} />
                    <span className="font-bold">{u.total_xp?.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )
          })}
          {users.length === 0 && (
            <div className="text-center py-16 text-gray-500">{t.empty}</div>
          )}
        </div>
      </div>
    </main>
  )
}
