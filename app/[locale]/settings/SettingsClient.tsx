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
    total_xp?: number
    streak_days?: number
  }
}

export default function SettingsClient({ locale, profile }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const router = useRouter()

  const [displayName, setDisplayName] = useState(profile.display_name || '')
  const [uiLanguage, setUiLanguage] = useState(profile.ui_language || locale)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSave() {
    setSaving(true)
    const res = await fetch('/api/profile/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ display_name: displayName, ui_language: uiLanguage }),
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
          <User size={18} style={{ color: '#1E3A5F' }} />
          {t.profile}
        </h2>

        {/* Avatar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
            style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
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
          <Globe size={18} style={{ color: '#1E3A5F' }} />
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

      {/* Save button */}
      <button onClick={handleSave} disabled={saving}
        className="w-full py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-60"
        style={{ background: saved ? '#10B981' : 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
        <Save size={18} />
        {saved ? t.saved : saving ? t.saving : t.save}
      </button>
    </main>
  )
}
