'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import { Eye, EyeOff, BookOpen } from 'lucide-react'

const t = {
  zh: { title: '登录', email: '邮箱', password: '密码', btn: '登录', no_account: '没有账户？', register: '立即注册', error: '邮箱或密码错误', loading: '登录中...', or: '或', welcome: '欢迎回来！', subtitle: '继续您的阿拉伯语学习之旅' },
  en: { title: 'Login', email: 'Email', password: 'Password', btn: 'Login', no_account: "Don't have an account?", register: 'Register', error: 'Invalid email or password', loading: 'Logging in...', or: 'or', welcome: 'Welcome back!', subtitle: 'Continue your Arabic learning journey' },
  ar: { title: 'تسجيل الدخول', email: 'البريد الإلكتروني', password: 'كلمة المرور', btn: 'دخول', no_account: 'ليس لديك حساب؟', register: 'سجّل الآن', error: 'البريد أو كلمة المرور خطأ', loading: 'جارٍ الدخول...', or: 'أو', welcome: 'مرحباً بعودتك!', subtitle: 'أكمل رحلة تعلمك للعربية' },
}

export default function LoginPage() {
  const params = useParams()
  const locale = (params?.locale as string) || 'zh'
  const tx = t[locale as keyof typeof t] || t.zh
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { data, error: err } = await supabase.auth.signInWithPassword({ email, password })
    if (err) {
      setError(tx.error)
      setLoading(false)
    } else {
      // Check if placement test done
      const { data: profile } = await supabase
        .from('profiles')
        .select('placement_test_done')
        .eq('id', data.user!.id)
        .single()
      if (!profile?.placement_test_done) {
        router.push(`/${locale}/placement-test`)
      } else {
        router.push(`/${locale}/dashboard`)
      }
    }
  }

  return (
    <div className="min-h-screen flex" style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A8E 100%)' }}>
      {/* Left panel — branding */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 flex items-center justify-center">
          <span className="text-[20rem]" style={{ fontFamily: 'Amiri, serif', color: '#C9A84C' }}>أ</span>
        </div>
        <div className="relative z-10 text-center text-white px-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-6xl" style={{ fontFamily: 'Amiri, serif', color: '#C9A84C' }}>أ</span>
            <h1 className="text-5xl font-bold">ANALIA</h1>
          </div>
          <p className="text-2xl text-white mb-3">تعلّم العربية من الصفر</p>
          <p className="text-lg text-white">从零开始学阿拉伯语</p>
          <div className="mt-12 grid grid-cols-2 gap-4 text-sm">
            {[['🌱', '7 مستويات', '7 Levels'], ['🤖', 'معلم ذكي', 'AI Teacher'], ['🏆', 'شهادات', 'Certificates'], ['🔥', 'نظام تحفيز', 'Gamification']].map(([emoji, ar, en]) => (
              <div key={ar} className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">{emoji}</div>
                <div className="text-white font-medium">{ar}</div>
                <div className="text-blue-100 text-xs">{en}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8"
        >
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-6">
            <span className="text-3xl" style={{ fontFamily: 'Amiri, serif', color: '#1E3A5F' }}>أ</span>
            <span className="text-xl font-bold text-gray-800">ANALIA</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{tx.welcome}</h2>
            <p className="text-gray-700 mt-1">{tx.subtitle}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{tx.email}</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{tx.password}</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-12"
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-600">
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 disabled:opacity-60"
              style={{ background: loading ? '#94a3b8' : 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}
            >
              {loading ? tx.loading : tx.btn}
            </button>
          </form>

          <div className="text-center mt-4">
            <Link href={`/${locale}/auth/forgot-password`} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              {locale === 'ar' ? 'نسيت كلمة المرور؟' : locale === 'zh' ? '忘记密码？' : 'Forgot password?'}
            </Link>
          </div>

          <p className="text-center text-gray-700 text-sm mt-4">
            {tx.no_account}{' '}
            <Link href={`/${locale}/auth/register`} className="font-semibold text-blue-600 hover:text-blue-700">
              {tx.register}
            </Link>
          </p>

          <p className="text-center text-gray-600 text-xs mt-4">
            <Link href={`/${locale}/auth/language-select`} className="hover:text-gray-600">
              🌐 Change language / 切换语言 / تغيير اللغة
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
