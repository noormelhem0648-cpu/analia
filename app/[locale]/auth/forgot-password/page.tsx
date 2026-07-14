'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Mail, ArrowLeft } from 'lucide-react'

const t = {
  zh: { title: '重置密码', subtitle: '输入您的邮箱，我们将发送重置链接', email: '邮箱地址', btn: '发送重置链接', sending: '发送中...', success: '已发送！请检查您的邮箱。', back: '返回登录', error: '未找到此邮箱' },
  en: { title: 'Reset Password', subtitle: "Enter your email and we'll send a reset link", email: 'Email address', btn: 'Send Reset Link', sending: 'Sending...', success: 'Sent! Check your inbox.', back: 'Back to Login', error: 'Email not found' },
  ar: { title: 'إعادة تعيين كلمة المرور', subtitle: 'أدخل بريدك وسنرسل رابط الإعادة', email: 'البريد الإلكتروني', btn: 'إرسال الرابط', sending: 'جارٍ الإرسال...', success: 'تم الإرسال! تحقق من بريدك.', back: 'العودة لتسجيل الدخول', error: 'البريد غير موجود' },
}

export default function ForgotPasswordPage() {
  const params = useParams()
  const locale = (params?.locale as string) || 'zh'
  const tx = t[locale as keyof typeof t] || t.zh

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    setLoading(false)
    if (res.ok) {
      setSuccess(true)
    } else {
      const data = await res.json()
      setError(data.error || tx.error)
    }
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
            <div className="text-5xl mb-4">📧</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{tx.success}</h2>
            <Link href={`/${locale}/auth/login`}
              className="mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              <ArrowLeft size={16} /> {tx.back}
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{tx.title}</h2>
              <p className="text-gray-700 mt-1 text-sm">{tx.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{tx.email}</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com" />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{error}</div>
              )}

              <button type="submit" disabled={loading}
                className="w-full py-3 rounded-xl font-semibold text-white disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
                {loading ? tx.sending : tx.btn}
              </button>
            </form>

            <p className="text-center mt-4">
              <Link href={`/${locale}/auth/login`}
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1">
                <ArrowLeft size={14} /> {tx.back}
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
