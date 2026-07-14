'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Eye, EyeOff, User, Mail, Lock, Globe, Calendar } from 'lucide-react'

const t = {
  zh: { title: '创建账户', subtitle: '开始您的阿拉伯语之旅', username: '用户名', display_name: '显示名称', email: '邮箱', password: '密码', confirm_password: '确认密码', age: '年龄', country: '国家', btn: '注册', loading: '注册中...', already: '已有账户？', login: '登录', pw_mismatch: '密码不匹配', username_hint: '3-20个字符，仅限字母数字', success: '注册成功！正在跳转...' },
  en: { title: 'Create Account', subtitle: 'Start your Arabic journey', username: 'Username', display_name: 'Display Name', email: 'Email', password: 'Password', confirm_password: 'Confirm Password', age: 'Age', country: 'Country', btn: 'Register', loading: 'Creating account...', already: 'Already have an account?', login: 'Login', pw_mismatch: 'Passwords do not match', username_hint: '3-20 characters, letters and numbers only', success: 'Account created! Redirecting...' },
  ar: { title: 'إنشاء حساب', subtitle: 'ابدأ رحلتك مع العربية', username: 'اسم المستخدم', display_name: 'الاسم المعروض', email: 'البريد الإلكتروني', password: 'كلمة المرور', confirm_password: 'تأكيد كلمة المرور', age: 'العمر', country: 'الدولة', btn: 'إنشاء حساب', loading: 'جارٍ إنشاء الحساب...', already: 'لديك حساب؟', login: 'سجّل دخولك', pw_mismatch: 'كلمتا المرور غير متطابقتين', username_hint: '٣-٢٠ حرفاً، حروف وأرقام فقط', success: 'تم إنشاء الحساب! جارٍ التحويل...' },
}

const COUNTRIES = ['China / 中国', 'Saudi Arabia / السعودية', 'Egypt / مصر', 'UAE / الإمارات', 'Jordan / الأردن', 'Morocco / المغرب', 'Indonesia', 'Malaysia', 'Pakistan', 'Other / أخرى']

export default function RegisterPage() {
  const params = useParams()
  const locale = (params?.locale as string) || 'zh'
  const tx = t[locale as keyof typeof t] || t.zh
  const router = useRouter()
  const supabase = createClient()

  const [form, setForm] = useState({ username: '', display_name: '', email: '', password: '', confirm: '', age: '', country: '' })
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  function set(key: string, value: string) {
    setForm(f => ({ ...f, [key]: value }))
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (form.password !== form.confirm) { setError(tx.pw_mismatch); return }
    if (form.username.length < 3) { setError('Username must be at least 3 characters'); return }

    setLoading(true)

    const { error: err } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          username: form.username.toLowerCase().trim(),
          display_name: form.display_name || form.username,
          ui_language: locale,
          age: form.age ? parseInt(form.age) : null,
          country: form.country,
        },
      },
    })

    setLoading(false)

    if (err) {
      setError(String(err.message || 'Registration failed. Please try again.'))
      return
    }

    // Success — sign in immediately
    const { error: loginErr } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    })

    if (loginErr) {
      setSuccess(true)
      setTimeout(() => router.push(`/${locale}/auth/login`), 2000)
    } else {
      router.push(`/${locale}/dashboard`)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A8E 100%)' }}>
        <div className="bg-white rounded-3xl p-10 text-center max-w-md shadow-2xl">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{tx.success}</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A8E 100%)' }}>
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">

        <div className="flex items-center gap-2 mb-6">
          <span className="text-3xl" style={{ fontFamily: 'Amiri, serif', color: '#1E3A5F' }}>أ</span>
          <span className="text-xl font-bold text-gray-800">ANALIA</span>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{tx.title}</h2>
          <p className="text-gray-500 mt-1">{tx.subtitle}</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{tx.username} *</label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" value={form.username} onChange={e => set('username', e.target.value)}
                  required minLength={3} maxLength={20}
                  className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="username123" />
              </div>
              <p className="text-xs text-gray-400 mt-1">{tx.username_hint}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{tx.display_name}</label>
              <input type="text" value={form.display_name} onChange={e => set('display_name', e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{tx.email} *</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
                required className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{tx.password} *</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type={showPw ? 'text' : 'password'} value={form.password}
                  onChange={e => set('password', e.target.value)} required minLength={6}
                  className="w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••" />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{tx.confirm_password} *</label>
              <input type="password" value={form.confirm} onChange={e => set('confirm', e.target.value)}
                required className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{tx.age}</label>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="number" value={form.age} onChange={e => set('age', e.target.value)}
                  min={5} max={100}
                  className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="20" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{tx.country}</label>
              <div className="relative">
                <Globe size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select value={form.country} onChange={e => set('country', e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                  <option value="">—</option>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </div>

          {error !== null && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-white disabled:opacity-60"
            style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
            {loading ? tx.loading : tx.btn}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-5">
          {tx.already}{' '}
          <Link href={`/${locale}/auth/login`} className="font-semibold text-blue-600 hover:text-blue-700">
            {tx.login}
          </Link>
        </p>

        <p className="text-center mt-3">
          <Link href={`/${locale}/auth/language-select`} className="text-xs text-gray-400 hover:text-gray-600">
            🌐 Change language
          </Link>
        </p>
      </div>
    </div>
  )
}
