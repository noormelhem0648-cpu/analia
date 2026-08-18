'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Repeat, Flame, UserPlus, Check } from 'lucide-react'

export interface Partner { id: string; username: string; display_name?: string; total_xp: number; streak_days: number; bio: string }

const tx = {
  ar: {
    title: 'شريك التبادل اللغوي', sub: 'تعلّم معاً: أنت تعلّمه لغتك وهو يعلّمك لغته',
    optinTitle: 'اجعل ملفك مرئياً للشركاء', optinDesc: 'فعّل الظهور ليجدك متعلّمون آخرون للتبادل', bioPh: 'نبذة قصيرة عنك واهتماماتك...', save: 'حفظ',
    on: 'مرئي ✓', off: 'غير مرئي', add: 'طلب تبادل', sent: 'تم الإرسال ✓',
    partnersAr: 'ناطقون بالصينية يتعلّمون العربية', partnersZh: 'ناطقون بالعربية يتعلّمون الصينية',
    empty: 'لا شركاء متاحون بعد — كن أول من يفعّل الظهور وادعُ أصدقاءك!', xp: 'نقطة',
    hintOptin: 'فعّل الظهور أدناه لتبدأ.',
  },
  zh: {
    title: '语言交换伙伴', sub: '互相学习：你教他你的母语，他教你他的母语',
    optinTitle: '让伙伴看到你', optinDesc: '开启可见性，让其他学习者找到你', bioPh: '简短介绍你自己和兴趣…', save: '保存',
    on: '可见 ✓', off: '不可见', add: '交换请求', sent: '已发送 ✓',
    partnersAr: '学阿拉伯语的中文母语者', partnersZh: '学中文的阿拉伯语母语者',
    empty: '暂无可用伙伴——第一个开启可见性并邀请朋友吧！', xp: '积分',
    hintOptin: '请先在下方开启可见性。',
  },
  en: {
    title: 'Language Exchange', sub: 'Learn together: you teach your language, they teach theirs',
    optinTitle: 'Make your profile visible', optinDesc: 'Turn on visibility so other learners can find you', bioPh: 'Short bio & interests...', save: 'Save',
    on: 'Visible ✓', off: 'Hidden', add: 'Exchange request', sent: 'Sent ✓',
    partnersAr: 'Chinese speakers learning Arabic', partnersZh: 'Arabic speakers learning Chinese',
    empty: 'No partners yet — be the first to go visible and invite friends!', xp: 'XP',
    hintOptin: 'Turn on visibility below to start.',
  },
}

export default function ExchangeClient({ locale, partners, myDirection, optedIn, bio }: {
  locale: string; partners: Partner[]; myDirection: string; optedIn: boolean; bio: string
}) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const router = useRouter()
  const [visible, setVisible] = useState(optedIn)
  const [bioText, setBioText] = useState(bio)
  const [savingOpt, setSavingOpt] = useState(false)
  const [sent, setSent] = useState<Record<string, boolean>>({})

  // partners are the opposite direction; label depends on what THEY are (native of my target)
  const partnersLabel = myDirection === 'ar_learns_zh' ? t.partnersZh : t.partnersAr

  async function saveOptin(next: boolean) {
    setSavingOpt(true); setVisible(next)
    try {
      await fetch('/api/exchange/optin', {
        method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ opt_in: next, bio: bioText }),
      })
      router.refresh()
    } catch {}
    setSavingOpt(false)
  }

  async function requestExchange(username: string) {
    try {
      const res = await fetch('/api/friends/request', {
        method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      })
      if (res.ok || res.status === 409) setSent(s => ({ ...s, [username]: true }))
    } catch {}
  }

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2"><Repeat size={26} style={{ color: '#C9858A' }} /> {t.title}</h1>
          <p className="text-gray-600 mt-1">{t.sub}</p>
        </div>

        {/* Opt-in card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-semibold text-gray-800">{t.optinTitle}</p>
              <p className="text-sm text-gray-500">{t.optinDesc}</p>
            </div>
            <button onClick={() => saveOptin(!visible)} disabled={savingOpt}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${visible ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
              {visible ? t.on : t.off}
            </button>
          </div>
          <textarea value={bioText} onChange={e => setBioText(e.target.value)} placeholder={t.bioPh} rows={2}
            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-300 resize-none" />
          <div className="text-end mt-2">
            <button onClick={() => saveOptin(visible)} disabled={savingOpt} className="text-sm px-4 py-1.5 rounded-lg text-white" style={{ background: '#C9858A' }}>{t.save}</button>
          </div>
        </div>

        <h2 className="font-bold text-gray-800 mb-3">{partnersLabel} ({partners.length})</h2>
        {partners.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center text-gray-500">{t.empty}</div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {partners.map(p => (
              <div key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold" style={{ background: 'linear-gradient(135deg,#C9858A,#A96368)' }}>{(p.display_name || p.username)[0]?.toUpperCase()}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 truncate">{p.display_name || p.username}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-2"><span className="flex items-center gap-0.5"><Flame size={11} className="text-orange-500" />{p.streak_days}</span><span style={{ color: '#F59E0B' }}>{p.total_xp} {t.xp}</span></p>
                  </div>
                </div>
                {p.bio && <p className="text-sm text-gray-600 mb-3 line-clamp-2">{p.bio}</p>}
                {sent[p.username] ? (
                  <span className="text-sm font-medium text-green-600 flex items-center gap-1"><Check size={15} />{t.sent}</span>
                ) : (
                  <button onClick={() => requestExchange(p.username)} className="w-full py-2 rounded-xl text-white text-sm font-medium flex items-center justify-center gap-1.5" style={{ background: '#C9858A' }}><UserPlus size={15} />{t.add}</button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
