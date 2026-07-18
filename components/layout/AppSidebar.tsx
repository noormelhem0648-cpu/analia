'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Home, BookOpen, Map, Star, MessageCircle, Trophy, Settings, LogOut, ShieldCheck, Globe, Medal, Music2 } from 'lucide-react'

const navItems = [
  { icon: Home,        labelZh: '主页',     labelEn: 'Home',    labelAr: 'الرئيسية',    href: 'dashboard' },
  { icon: Map,         labelZh: '路径',     labelEn: 'Path',    labelAr: 'المسار',      href: 'levels' },
  { icon: Music2,      labelZh: '发音图表', labelEn: 'Sounds',  labelAr: 'الأصوات',     href: 'sounds' },
  { icon: BookOpen,    labelZh: '词汇',     labelEn: 'Vocab',   labelAr: 'المفردات',    href: 'vocabulary' },
  { icon: MessageCircle, labelZh: 'AI老师', labelEn: 'AI',      labelAr: 'معلم',        href: 'ai-tutor' },
  { icon: Medal,       labelZh: '排行榜',   labelEn: 'Ranks',   labelAr: 'المتصدرون',   href: 'leaderboard' },
  { icon: Trophy,      labelZh: '成就',     labelEn: 'Awards',  labelAr: 'إنجازات',     href: 'achievements' },
  { icon: Settings,    labelZh: '设置',     labelEn: 'Settings',labelAr: 'الإعدادات',   href: 'settings' },
]

function getLabel(item: typeof navItems[0], locale: string) {
  if (locale === 'zh') return item.labelZh
  if (locale === 'ar') return item.labelAr
  return item.labelEn
}

interface Props {
  locale: string
  xp?: number
  streak?: number
  isAdmin?: boolean
}

const LANGS = [
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ar', label: 'ع', flag: '🇸🇦' },
]

export default function AppSidebar({ locale, xp = 0, streak = 0, isAdmin = false }: Props) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <>
      {/* ── Desktop sidebar (hidden on mobile) ── */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col border-r border-gray-100 z-40 bg-white">

        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-100">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
            <span className="text-white text-xl font-bold" style={{ fontFamily: 'Amiri, serif' }}>أ</span>
          </div>
          <span className="text-lg font-bold text-gray-800">ANALIA</span>
        </div>

        {/* Quick stats */}
        <div className="flex items-center gap-4 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-1.5 text-sm">
            <span>⭐</span>
            <span className="font-bold text-gray-700">{xp.toLocaleString()}</span>
            <span className="text-gray-600 text-xs">XP</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-1.5 text-sm">
            <span>🔥</span>
            <span className="font-bold text-gray-700">{streak}</span>
            <span className="text-gray-600 text-xs">{locale === 'ar' ? 'يوم' : locale === 'zh' ? '天' : 'days'}</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map(item => {
            const href = `/${locale}/${item.href}`
            const isActive = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link key={item.href} href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                  isActive ? 'text-white shadow-sm' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-800'
                }`}
                style={isActive ? { background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' } : {}}>
                <item.icon size={19} className="flex-shrink-0" />
                <span className="text-sm font-medium">{getLabel(item, locale)}</span>
              </Link>
            )
          })}

          {isAdmin && (
            <Link href={`/${locale}/admin`}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all mt-2 ${
                pathname.includes('/admin') ? 'text-white' : 'text-purple-500 hover:bg-purple-50'
              }`}
              style={pathname.includes('/admin') ? { background: 'linear-gradient(135deg, #7C3AED, #5B21B6)' } : {}}>
              <ShieldCheck size={19} className="flex-shrink-0" />
              <span className="text-sm font-medium">
                {locale === 'ar' ? 'الإدارة' : locale === 'zh' ? '管理' : 'Admin'}
              </span>
            </Link>
          )}
        </nav>

        {/* Placement test retake */}
        <div className="px-2 pb-2">
          <Link href={`/${locale}/placement-test`}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-amber-600 hover:bg-amber-50 transition-all border border-amber-200 border-dashed">
            <Star size={17} className="flex-shrink-0" />
            <span className="text-xs font-medium">
              {locale === 'zh' ? '重测水平' : locale === 'ar' ? 'اختبر مستواك' : 'Retake Test'}
            </span>
          </Link>
        </div>

        {/* Language switcher */}
        <div className="px-2 pb-2">
          <div className="flex items-center gap-1 px-3 py-2">
            <Globe size={15} className="text-gray-600 flex-shrink-0" />
            <div className="flex items-center gap-1 ml-1">
              {LANGS.map(lang => (
                <button key={lang.code}
                  onClick={() => router.push(pathname.replace(/^\/[a-z]{2}/, `/${lang.code}`))}
                  className={`px-2 py-0.5 rounded-lg text-xs font-medium transition-all ${
                    locale === lang.code ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-700 hover:bg-gray-100'
                  }`}>
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="px-2 py-3 border-t border-gray-100">
          <form action="/api/auth/logout" method="POST">
            <button type="submit"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-500 transition-all">
              <LogOut size={19} className="flex-shrink-0" />
              <span className="text-sm font-medium">
                {locale === 'zh' ? '退出' : locale === 'ar' ? 'خروج' : 'Logout'}
              </span>
            </button>
          </form>
        </div>
      </aside>

      {/* ── Mobile bottom tab bar (hidden on desktop) ── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex items-center justify-around px-2 py-1 safe-area-inset-bottom"
        style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}>
        {navItems.slice(0, 5).map(item => {
          const href = `/${locale}/${item.href}`
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link key={item.href} href={href}
              className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all min-w-[52px] ${
                isActive ? 'text-white' : 'text-gray-500'
              }`}
              style={isActive ? { background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' } : {}}>
              <item.icon size={22} />
              <span className="text-[10px] font-medium leading-tight">{getLabel(item, locale)}</span>
            </Link>
          )
        })}
        {/* Language toggle on mobile */}
        <button
          onClick={() => {
            const idx = LANGS.findIndex(l => l.code === locale)
            const next = LANGS[(idx + 1) % LANGS.length]
            router.push(pathname.replace(/^\/[a-z]{2}/, `/${next.code}`))
          }}
          className="flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl text-gray-500 min-w-[52px]">
          <Globe size={22} />
          <span className="text-[10px] font-medium">{LANGS.find(l => l.code === locale)?.flag}</span>
        </button>
      </nav>
    </>
  )
}
