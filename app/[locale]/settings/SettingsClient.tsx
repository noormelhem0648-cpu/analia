'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Save, User, Globe, Bell, Shield } from 'lucide-react'

const tx = {
  zh: {
    title: '设置',
    profile: '个人资料',
    display_name: '显示名称',
    username: '用户名',
    language: '界面语言',
    save: '保存更改',
    saving: '保存中...',
    saved: '已保存！',
    save_error: '保存失败，请重试',
    danger: '危险区域',
    account: '账户设置',
    lang_zh: '中文',
    lang_en: 'English',
    lang_ar: 'العربية',
    email: '邮箱地址',
  },
  en: {
    title: 'Settings',
    profile: 'Profile',
    display_name: 'Display Name',
    username: 'Username',
    language: 'Interface Language',
    save: 'Save Changes',
    saving: 'Saving...',
    saved: 'Saved!',
    save_error: 'Failed to save, please try again',
    danger: 'Danger Zone',
    account: 'Account Settings',
    lang_zh: 'Chinese (中文)',
    lang_en: 'English',
    lang_ar: 'Arabic (العربية)',
    email: 'Email',
  },
  ar: {
    title: 'الإعدادات',
    profile: 'الملف الشخصي',
    display_name: 'الاسم المعروض',
    username: 'اسم المستخدم',
    language: 'لغة الواجهة',
    save: 'حفظ التغييرات',
    saving: 'جارٍ الحفظ...',
    saved: 'تم الحفظ!',
    save_error: 'فشل الحفظ، أعد المحاولة',
    danger: 'منطقة الخطر',
    account: 'إعدادات الحساب',
    lang_zh: 'الصينية (中文)',
    lang_en: 'الإنجليزية',
    lang_ar: 'العربية',
    email: 'البريد الإلكتروني',
  },
}

interface Props {
  locale: string
  profile: {
    display_name?: string
    username: string
    email: string
    ui_language?: string
    learning_direction?: string
    total_xp?: number
    streak_days?: number
  }
}

export default function SettingsClient({ locale, profile }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const router = useRouter()

  const [displayName, setDisplayName] = useState(profile.display_name || '')
  const [uiLanguage, setUiLanguage] = useState(profile.ui_language || locale)
  const [learningDirection, setLearningDirection] = useState(profile.learning_direction || 'zh_learns_ar')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [saveError, setSaveError] = useState(false)

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordSuccess, setPasswordSuccess] = useState(false)
  const [savingPassword, setSavingPassword] = useState(false)

  async function handlePasswordChange() {
    setPasswordError('')
    setPasswordSuccess(false)
    if (newPassword.length < 8) {
      setPasswordError(locale === 'ar' ? 'كلمة المرور يجب أن تكون 8 أحرف على الأقل' : locale === 'zh' ? '密码至少需要8个字符' : 'Password must be at least 8 characters')
      return
    }
    if (newPassword !== confirmPassword) {
      setPasswordError(locale === 'ar' ? 'كلمتا المرور غير متطابقتان' : locale === 'zh' ? '两次密码不一致' : 'Passwords do not match')
      return
    }
    setSavingPassword(true)
    try {
      const res = await fetch('/api/profile/change-password', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ new_password: newPassword }),
      })
      const data = await res.json()
      if (!res.ok) {
        setPasswordError(data.error || (locale === 'ar' ? 'حدث خطأ' : 'Error'))
      } else {
        setPasswordSuccess(true)
        setCurrentPassword('')
        setNewPassword('')
        setConfirmPassword('')
      }
    } catch {
      setPasswordError(locale === 'ar' ? 'خطأ في الاتصال' : locale === 'zh' ? '连接错误' : 'Connection error')
    }
    setSavingPassword(false)
  }

  async function handleSave() {
    setSaving(true)
    setSaveError(false)
    try {
      const res = await fetch('/api/profile/update', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ display_name: displayName, ui_language: uiLanguage, learning_direction: learningDirection }),
      })
      setSaving(false)
      if (res.ok) {
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
        if (uiLanguage !== locale) {
          router.push(`/${uiLanguage}/settings`)
        } else {
          router.refresh()
        }
      } else {
        const data = await res.json().catch(() => ({}))
        console.error('Profile update error:', data)
        setSaveError(true)
        setTimeout(() => setSaveError(false), 3000)
      }
    } catch (e) {
      console.error('Profile update exception:', e)
      setSaving(false)
      setSaveError(true)
      setTimeout(() => setSaveError(false), 3000)
    }
  }

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
      </div>

      {/* Profile section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="font-bold text-gray-800 flex items-center gap-2 mb-6">
          <User size={18} style={{ color: '#C9858A' }} />
          {t.profile}
        </h2>

        {/* Avatar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
            style={{ background: 'linear-gradient(135deg, #C9858A, #A96368)' }}>
            {(displayName || profile.username || '?')[0].toUpperCase()}
          </div>
          <div>
            <p className="font-medium text-gray-800">{displayName || profile.username}</p>
            <p className="text-sm text-gray-600">{profile.email}</p>
            <div className="flex gap-3 mt-1 text-xs text-gray-700">
              <span>⭐ {profile.total_xp || 0} XP</span>
              <span>🔥 {profile.streak_days || 0} days</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.display_name}</label>
            <input
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.username}</label>
            <input
              value={profile.username}
              disabled
              className="w-full px-4 py-2.5 border border-gray-100 rounded-xl text-sm bg-gray-50 text-gray-600 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
            <input
              value={profile.email}
              disabled
              className="w-full px-4 py-2.5 border border-gray-100 rounded-xl text-sm bg-gray-50 text-gray-600 cursor-not-allowed"
            />
          </div>
        </div>
      </div>

      {/* Language section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="font-bold text-gray-800 flex items-center gap-2 mb-4">
          <Globe size={18} style={{ color: '#C9858A' }} />
          {t.language}
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { code: 'zh', label: t.lang_zh, flag: '🇨🇳' },
            { code: 'en', label: t.lang_en, flag: '🌍' },
            { code: 'ar', label: t.lang_ar, flag: '🌙' },
          ].map(lang => (
            <button key={lang.code} onClick={() => setUiLanguage(lang.code)}
              className={`flex flex-col items-center gap-2 py-3 px-2 rounded-xl border-2 transition-all ${uiLanguage === lang.code ? 'border-blue-400 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
              <span className="text-2xl">{lang.flag}</span>
              <span className="text-xs font-medium text-gray-700">{lang.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Learning Direction */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="font-bold text-gray-800 flex items-center gap-2 mb-4">
          <span>🎓</span>
          {locale === 'ar' ? 'ماذا تريد أن تتعلم؟' : locale === 'zh' ? '你想学什么？' : 'What do you want to learn?'}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => setLearningDirection('zh_learns_ar')}
            className={`flex flex-col items-center gap-2 py-4 px-3 rounded-xl border-2 transition-all ${learningDirection === 'zh_learns_ar' ? 'border-blue-400 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
            <span className="text-3xl">🕌</span>
            <span className="font-semibold text-gray-800 text-sm">{locale === 'ar' ? 'أتعلم العربية' : locale === 'zh' ? '学习阿拉伯语' : 'Learn Arabic'}</span>
            <span className="text-xs text-gray-500">{locale === 'ar' ? 'للناطقين بالصينية' : locale === 'zh' ? '中文母语者' : 'For Chinese speakers'}</span>
          </button>
          <button onClick={() => setLearningDirection('ar_learns_zh')}
            className={`flex flex-col items-center gap-2 py-4 px-3 rounded-xl border-2 transition-all ${learningDirection === 'ar_learns_zh' ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}>
            <span className="text-3xl">🏮</span>
            <span className="font-semibold text-gray-800 text-sm">{locale === 'ar' ? 'أتعلم الصينية' : locale === 'zh' ? '学习阿拉伯语' : 'Learn Chinese'}</span>
            <span className="text-xs text-gray-500">{locale === 'ar' ? 'للناطقين بالعربية' : locale === 'zh' ? '阿拉伯语母语者' : 'For Arabic speakers'}</span>
          </button>
        </div>
      </div>

      {/* Security */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>🔐</span>
          {locale === 'ar' ? 'الأمان' : locale === 'zh' ? '账户安全' : 'Security'}
        </h2>

        {/* Change Password */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700">
            {locale === 'ar' ? 'تغيير كلمة المرور' : locale === 'zh' ? '更改密码' : 'Change Password'}
          </p>
          <input
            type="password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            placeholder={locale === 'ar' ? 'كلمة المرور الحالية' : locale === 'zh' ? '当前密码' : 'Current password'}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-300"
          />
          <input
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder={locale === 'ar' ? 'كلمة المرور الجديدة (8 أحرف على الأقل)' : locale === 'zh' ? '新密码（至少8个字符）' : 'New password (min 8 chars)'}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-300"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder={locale === 'ar' ? 'تأكيد كلمة المرور الجديدة' : locale === 'zh' ? '确认新密码' : 'Confirm new password'}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-300"
          />
          {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
          {passwordSuccess && <p className="text-sm text-green-600">{locale === 'ar' ? 'تم تغيير كلمة المرور بنجاح!' : locale === 'zh' ? '密码已成功更改！' : 'Password changed successfully!'}</p>}
          <button
            onClick={handlePasswordChange}
            disabled={savingPassword || !newPassword || !confirmPassword}
            className="w-full py-2.5 rounded-xl text-white font-medium disabled:opacity-50 transition-all"
            style={{ background: '#C9858A' }}>
            {savingPassword ? (locale === 'ar' ? 'جارٍ الحفظ...' : locale === 'zh' ? '保存中...' : 'Saving...') : (locale === 'ar' ? 'تغيير كلمة المرور' : locale === 'zh' ? '更改密码' : 'Change Password')}
          </button>
        </div>
      </div>

      {saveError && (
        <div className="mb-3 px-4 py-2.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm text-center">
          {(t as typeof tx['en']).save_error}
        </div>
      )}
      {/* Save button */}
      <button onClick={handleSave} disabled={saving}
        className="w-full py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-60"
        style={{ background: saved ? '#10B981' : saveError ? '#EF4444' : 'linear-gradient(135deg, #C9858A, #A96368)' }}>
        <Save size={18} />
        {saved ? t.saved : saving ? t.saving : t.save}
      </button>
    </main>
  )
}
