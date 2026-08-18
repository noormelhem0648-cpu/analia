'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Target, Check } from 'lucide-react'

export interface ChallengeCard {
  id: string
  title_ar?: string; title_en?: string; title_zh?: string
  description_ar?: string; description_en?: string; description_zh?: string
  type: string; goal: number; scope: string; icon: string; reward_xp: number; ends_at?: string | null
  joined: boolean; progress: number; completed: boolean
}

const tx = {
  ar: { title: 'التحديات', sub: 'انضم للتحديات واكسب نقاطاً إضافية', join: 'انضمّ', joined: 'منضمّ', done: 'مكتمل ✓', daily: 'يومي', weekly: 'أسبوعي', special: 'خاص', reward: 'مكافأة', empty: 'لا تحديات نشطة حالياً' },
  zh: { title: '挑战', sub: '加入挑战，赢取额外积分', join: '加入', joined: '已加入', done: '已完成 ✓', daily: '每日', weekly: '每周', special: '特别', reward: '奖励', empty: '暂无进行中的挑战' },
  en: { title: 'Challenges', sub: 'Join challenges and earn bonus XP', join: 'Join', joined: 'Joined', done: 'Done ✓', daily: 'Daily', weekly: 'Weekly', special: 'Special', reward: 'Reward', empty: 'No active challenges right now' },
}

const SCOPE_COLOR: Record<string, string> = { daily: '#EA580C', weekly: '#2563EB', special: '#7C3AED' }

export default function ChallengesClient({ locale, challenges }: { locale: string; challenges: ChallengeCard[] }) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const router = useRouter()
  const [busy, setBusy] = useState<string | null>(null)

  const title = (c: ChallengeCard) => locale === 'ar' ? c.title_ar : locale === 'zh' ? c.title_zh : c.title_en
  const desc = (c: ChallengeCard) => locale === 'ar' ? c.description_ar : locale === 'zh' ? c.description_zh : c.description_en
  const scopeLabel = (s: string) => (t as Record<string, string>)[s] || s

  async function join(id: string) {
    setBusy(id)
    try {
      await fetch('/api/challenges/join', {
        method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ challenge_id: id }),
      })
      router.refresh()
    } catch {}
    setBusy(null)
  }

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2"><Target size={26} style={{ color: '#C9858A' }} /> {t.title}</h1>
          <p className="text-gray-600 mt-1">{t.sub}</p>
        </div>

        {challenges.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center text-gray-500">{t.empty}</div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {challenges.map((c, i) => {
              const pct = Math.min(100, Math.round((c.progress / c.goal) * 100))
              const scopeColor = SCOPE_COLOR[c.scope] || '#C9858A'
              return (
                <motion.div key={c.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, type: 'spring', stiffness: 240, damping: 22 }} whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-3xl">{c.icon}</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: scopeColor }}>{scopeLabel(c.scope)}</span>
                  </div>
                  <p className="font-bold text-gray-800">{title(c)}</p>
                  <p className="text-sm text-gray-600 mt-0.5 mb-3">{desc(c)}</p>

                  {c.joined && (
                    <div className="mb-3">
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: c.completed ? '#10B981' : scopeColor }} />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{c.progress} / {c.goal}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium" style={{ color: '#F59E0B' }}>⭐ {t.reward}: {c.reward_xp} XP</span>
                    {c.completed ? (
                      <span className="text-sm font-semibold text-green-600 flex items-center gap-1"><Check size={15} />{t.done}</span>
                    ) : c.joined ? (
                      <span className="text-sm font-medium text-gray-400">{t.joined}</span>
                    ) : (
                      <button onClick={() => join(c.id)} disabled={busy === c.id}
                        className="px-4 py-1.5 rounded-xl text-white text-sm font-medium disabled:opacity-50" style={{ background: scopeColor }}>{t.join}</button>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
