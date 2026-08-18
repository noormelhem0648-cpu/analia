'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { UserPlus, Check, X, Flame, Trophy, Users } from 'lucide-react'

export interface Friend { friendship_id: string; id: string; username: string; display_name?: string; total_xp: number; streak_days: number }
export interface PendingRequest { friendship_id: string; id: string; username: string; display_name?: string }
export interface FeedItem { id: string; user_id: string; type: string; meta: Record<string, unknown>; created_at: string; username: string }

const tx = {
  ar: {
    title: 'المجتمع', sub: 'أضف أصدقاءك وتابعوا تقدّم بعض', add: 'أضف صديقاً', addPh: 'اسم المستخدم', send: 'إرسال طلب',
    friends: 'الأصدقاء', requests: 'طلبات الصداقة', feed: 'آخر النشاطات', noFriends: 'لا أصدقاء بعد — أضف أول صديق!',
    noFeed: 'لا نشاطات بعد', accept: 'قبول', decline: 'رفض', sent: 'تم إرسال الطلب ✓', notFound: 'المستخدم غير موجود',
    already: 'يوجد طلب/صداقة بالفعل', self: 'لا يمكنك إضافة نفسك', xp: 'نقطة', pendingOut: 'طلبات مُرسَلة قيد الانتظار',
  },
  zh: {
    title: '社区', sub: '添加好友，一起进步', add: '添加好友', addPh: '用户名', send: '发送请求',
    friends: '好友', requests: '好友请求', feed: '最新动态', noFriends: '还没有好友——添加第一个吧！',
    noFeed: '暂无动态', accept: '接受', decline: '拒绝', sent: '请求已发送 ✓', notFound: '未找到用户',
    already: '已存在请求/好友', self: '不能添加自己', xp: '积分', pendingOut: '待处理的已发送请求',
  },
  en: {
    title: 'Community', sub: 'Add friends and follow each other’s progress', add: 'Add a friend', addPh: 'username', send: 'Send request',
    friends: 'Friends', requests: 'Friend Requests', feed: 'Activity', noFriends: 'No friends yet — add your first!',
    noFeed: 'No activity yet', accept: 'Accept', decline: 'Decline', sent: 'Request sent ✓', notFound: 'User not found',
    already: 'Request/friendship already exists', self: "You can't add yourself", xp: 'XP', pendingOut: 'pending sent requests',
  },
}

function feedText(item: FeedItem, locale: string): string {
  const who = item.username
  const m = item.meta || {}
  const lvl = (m.level_name as string) || ''
  switch (item.type) {
    case 'lesson_completed': return locale === 'ar' ? `${who} أكمل درساً` : locale === 'zh' ? `${who} 完成了一节课` : `${who} completed a lesson`
    case 'level_completed': return locale === 'ar' ? `${who} أنهى مستوى ${lvl}` : locale === 'zh' ? `${who} 完成了 ${lvl}` : `${who} finished ${lvl}`
    case 'badge': return locale === 'ar' ? `${who} حصل على شارة 🏅` : locale === 'zh' ? `${who} 获得徽章 🏅` : `${who} earned a badge 🏅`
    case 'streak': return locale === 'ar' ? `${who} وصل سلسلة ${m.days} يوم 🔥` : locale === 'zh' ? `${who} 连续 ${m.days} 天 🔥` : `${who} hit a ${m.days}-day streak 🔥`
    case 'challenge_joined': return locale === 'ar' ? `${who} انضم لتحدٍّ 🎯` : locale === 'zh' ? `${who} 加入了挑战 🎯` : `${who} joined a challenge 🎯`
    case 'challenge_completed': return locale === 'ar' ? `${who} أكمل تحدياً 🏆` : locale === 'zh' ? `${who} 完成了挑战 🏆` : `${who} completed a challenge 🏆`
    default: return `${who}`
  }
}

export default function CommunityClient({ locale, friends, requests, outgoingCount, feed }: {
  locale: string; friends: Friend[]; requests: PendingRequest[]; outgoingCount: number; feed: FeedItem[]
}) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null)
  const [busy, setBusy] = useState(false)

  async function sendRequest() {
    if (!username.trim()) return
    setBusy(true); setMsg(null)
    try {
      const res = await fetch('/api/friends/request', {
        method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim() }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) { setMsg({ ok: true, text: t.sent }); setUsername(''); router.refresh() }
      else if (data.error === 'not_found') setMsg({ ok: false, text: t.notFound })
      else if (data.error === 'self') setMsg({ ok: false, text: t.self })
      else if (data.error === 'exists') setMsg({ ok: false, text: t.already })
      else setMsg({ ok: false, text: '⚠️' })
    } catch { setMsg({ ok: false, text: '⚠️' }) }
    setBusy(false)
  }

  async function respond(friendship_id: string, action: 'accept' | 'decline') {
    setBusy(true)
    try {
      await fetch('/api/friends/respond', {
        method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ friendship_id, action }),
      })
      router.refresh()
    } catch {}
    setBusy(false)
  }

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2"><Users size={26} style={{ color: '#C9858A' }} /> {t.title}</h1>
          <p className="text-gray-600 mt-1">{t.sub}</p>
        </div>

        {/* Add friend */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-6">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-2"><UserPlus size={16} /> {t.add}</label>
          <div className="flex gap-2">
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder={t.addPh}
              onKeyDown={e => e.key === 'Enter' && sendRequest()}
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-300" />
            <button onClick={sendRequest} disabled={busy || !username.trim()}
              className="px-4 py-2.5 rounded-xl text-white text-sm font-medium disabled:opacity-50" style={{ background: '#C9858A' }}>{t.send}</button>
          </div>
          {msg && <p className={`text-sm mt-2 ${msg.ok ? 'text-green-600' : 'text-red-500'}`}>{msg.text}</p>}
          {outgoingCount > 0 && <p className="text-xs text-gray-400 mt-2">{outgoingCount} {t.pendingOut}</p>}
        </div>

        {/* Requests */}
        {requests.length > 0 && (
          <div className="mb-6">
            <h2 className="font-bold text-gray-800 mb-3">{t.requests} ({requests.length})</h2>
            <div className="space-y-2">
              {requests.map(r => (
                <div key={r.friendship_id} className="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold" style={{ background: 'linear-gradient(135deg,#C9858A,#A96368)' }}>{(r.display_name || r.username)[0]?.toUpperCase()}</div>
                  <div className="flex-1"><p className="font-semibold text-gray-800">{r.display_name || r.username}</p><p className="text-xs text-gray-500">@{r.username}</p></div>
                  <button onClick={() => respond(r.friendship_id, 'accept')} disabled={busy} className="px-3 py-1.5 rounded-lg bg-green-500 text-white text-sm flex items-center gap-1"><Check size={14} />{t.accept}</button>
                  <button onClick={() => respond(r.friendship_id, 'decline')} disabled={busy} className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm flex items-center gap-1"><X size={14} />{t.decline}</button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Friends leaderboard */}
          <div>
            <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><Trophy size={18} className="text-yellow-500" /> {t.friends} ({friends.length})</h2>
            {friends.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center text-gray-500">{t.noFriends}</div>
            ) : (
              <div className="space-y-2">
                {friends.map((f, i) => (
                  <div key={f.friendship_id} className="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-3">
                    <span className="w-6 text-center font-bold text-gray-400">{i + 1}</span>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold" style={{ background: 'linear-gradient(135deg,#C9858A,#A96368)' }}>{(f.display_name || f.username)[0]?.toUpperCase()}</div>
                    <div className="flex-1"><p className="font-semibold text-gray-800">{f.display_name || f.username}</p><p className="text-xs text-gray-500 flex items-center gap-2"><span className="flex items-center gap-0.5"><Flame size={11} className="text-orange-500" />{f.streak_days}</span></p></div>
                    <span className="text-sm font-bold" style={{ color: '#F59E0B' }}>{f.total_xp.toLocaleString()} <span className="text-xs text-gray-400">{t.xp}</span></span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Activity feed */}
          <div>
            <h2 className="font-bold text-gray-800 mb-3">{t.feed}</h2>
            {feed.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center text-gray-500">{t.noFeed}</div>
            ) : (
              <div className="space-y-2">
                {feed.map(item => (
                  <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 text-sm text-gray-700">{feedText(item, locale)}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
