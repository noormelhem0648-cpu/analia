'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Lock, Eye, EyeOff } from 'lucide-react'

const t = {
  zh: { title: '设置新密码', pw: '新密码', confirm: '确认密码', btn: '保存密码', saving: '保存中...', mismatch: '密码不匹配', success: '密码已更新！', error: '出错了，请重试' },
  en: { title: 'Set New Password', pw: 'New Password', confirm: 'Confirm Password', btn: 'Save Password', saving: 'Saving...', mismatch: "Passwords don't match", success: 'Password updated!', error: 'Something went wrong' },
  ar: { title: 'تعيين كلمة مرور جديدة', pw: 'كلمة المرور الجديدة', confirm: 'تأكيد كلمة المرور', btn: 'حفظ كلمة المرور', saving: 'جارٍ الحفظ...', mismatch: 'كلمتا المرور غير متطابقتين', success: 'تم تحديث كلمة المرور!', error: 'حدث خطأ، أعد المحاولة' },
}

export default function ResetPasswordPage() {
  const params = useParams()
  const locale = (params?.locale as string) || 'zh'
  const tx = t[locale as keyof typeof t] || t.zh
  const router = useRouter()
  const supabase = createClient()

  const [pw, setPw] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (pw !== confirm) { setError(tx.mismatch); return }
    setLoading(true)
    setError('')
    const { error: err } = await supabase.auth.updateUser({ password: pw })
    setLoading(false)
    if (err) { setError(tx.error); return }
    setSuccess(true)
    setTimeout(() => router.push(`/${locale}/dashboard`), 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6"
      style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A8E 100%)' }}>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-3xl" style={{ fontFamily: 'Amiri, serif', color: '#1E3A5F' }}>أ</span>
          <span className="text-xl font-bold text-gray-800">ANALIA</span>
        </div>

        {success ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-xl font-bold text-gray-900">{tx.success}</h2>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{tx.title}</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{tx.pw}</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input type={showPw ? 'text' : 'password'} value={pw} onChange={e => setPw(e.target.value)}
                    required minLength={6}
                    className="w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••" />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
                    {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{tx.confirm}</label>
                <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••" />
              </div>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{error}</div>
              )}
              <button type="submit" disabled={loading}
                className="w-full py-3 rounded-xl font-semibold text-white disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
                {loading ? tx.saving : tx.btn}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
