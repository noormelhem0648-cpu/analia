'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Home, BookOpen, Map, MessageCircle, Trophy, Settings, LogOut, ShieldCheck, Globe, Medal, Music2, Brain, Users, Target, Repeat, Flame, Star, PanelLeftClose, PanelLeftOpen, Mail } from 'lucide-react'

// Noura design system: warm dusty-rose accent on white/warm-white surfaces
const ACCENT = '#C9858A'
const ACCENT_DARK = '#A96368'
const ACCENT_LIGHT = '#F5E8E9'
const BORDER = '#E8E2DB'
const TEXT_MUTED = '#7A7370'
const ACTIVE_GRAD = 'linear-gradient(135deg, #C9858A, #A96368)'

const navItems = [
  { icon: Home,        labelZh: '主页',     labelEn: 'Home',    labelAr: 'الرئيسية',    href: 'dashboard' },
  { icon: Map,         labelZh: '路径',     labelEn: 'Path',    labelAr: 'المسار',      href: 'levels' },
  { icon: Music2,      labelZh: '发音图表', labelEn: 'Sounds',  labelAr: 'الأصوات',     href: 'sounds' },
  { icon: BookOpen,    labelZh: '词汇',     labelEn: 'Vocab',   labelAr: 'المفردات',    href: 'vocabulary' },
  { icon: Brain,       labelZh: '复习',     labelEn: 'Review',  labelAr: 'المراجعة',    href: 'vocabulary/review' },
  { icon: Users,       labelZh: '社区',     labelEn: 'Community', labelAr: 'المجتمع',   href: 'community' },
  { icon: Target,      labelZh: '挑战',     labelEn: 'Challenges', labelAr: 'التحديات', href: 'challenges' },
  { icon: Repeat,      labelZh: '语言交换', labelEn: 'Exchange', labelAr: 'تبادل لغوي', href: 'exchange' },
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

interface Account { name: string; email: string; levelLabel: string; xp: number; streak: number }

export default function AppSidebar({ locale, xp = 0, streak = 0, isAdmin = false }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)
  const [acct, setAcct] = useState<Account | null>(null)

  // Restore collapse preference
  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('analia_sidebar_collapsed') === '1'
    // Intentional mount-time restore of the persisted collapse preference.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCollapsed(saved)
    document.documentElement.classList.toggle('sidebar-collapsed', saved)
  }, [])

  // Load account details (name, email, level) client-side so every page shows them
  useEffect(() => {
    let alive = true
    ;(async () => {
      try {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user || !alive) return
        const { data: p } = await supabase
          .from('profiles').select('display_name, username, email, total_xp, streak_days, current_level_id').eq('id', user.id).maybeSingle()
        let levelLabel = ''
        const lvlId = (p as { current_level_id?: number } | null)?.current_level_id
        if (lvlId) {
          const { data: lv } = await supabase.from('levels').select('name_ar, name_en, name_zh, code').eq('id', lvlId).maybeSingle()
          if (lv) levelLabel = (locale === 'zh' ? lv.name_zh : locale === 'ar' ? lv.name_ar : lv.name_en) || lv.code?.toUpperCase() || ''
        }
        if (!alive) return
        setAcct({
          name: p?.display_name?.trim() || p?.username?.trim() || 'Learner',
          email: p?.email || user.email || '',
          levelLabel,
          xp: p?.total_xp ?? xp,
          streak: p?.streak_days ?? streak,
        })
      } catch { /* ignore */ }
    })()
    return () => { alive = false }
  }, [locale, xp, streak])

  function toggleCollapse() {
    const next = !collapsed
    setCollapsed(next)
    document.documentElement.classList.toggle('sidebar-collapsed', next)
    try { localStorage.setItem('analia_sidebar_collapsed', next ? '1' : '0') } catch { /* ignore */ }
  }

  const name = acct?.name || 'Learner'
  const email = acct?.email || ''
  const dispXp = acct?.xp ?? xp
  const dispStreak = acct?.streak ?? streak

  return (
    <>
      {/* Floating reopen button (desktop, when collapsed) */}
      {collapsed && (
        <button onClick={toggleCollapse}
          className="hidden lg:flex fixed top-4 left-4 z-50 w-10 h-10 rounded-xl items-center justify-center text-white shadow-lg"
          style={{ background: ACTIVE_GRAD }} aria-label="Open menu">
          <PanelLeftOpen size={18} />
        </button>
      )}

      {/* ── Desktop sidebar ── */}
      <motion.aside
        animate={{ x: collapsed ? '-110%' : '0%' }}
        transition={{ type: 'spring', stiffness: 320, damping: 34 }}
        className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col z-40 bg-white"
        style={{ borderRight: `1px solid ${BORDER}` }}>

        {/* Logo + collapse */}
        <div className="flex items-center justify-between px-4 py-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ACTIVE_GRAD }}>
              <span className="text-white text-lg font-bold" style={{ fontFamily: 'Amiri, serif' }}>أ</span>
            </div>
            <span className="text-lg font-bold tracking-wide" style={{ color: ACCENT }}>ANALIA</span>
          </div>
          <button onClick={toggleCollapse}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ color: TEXT_MUTED }}
            onMouseEnter={e => { e.currentTarget.style.color = ACCENT; e.currentTarget.style.background = ACCENT_LIGHT }}
            onMouseLeave={e => { e.currentTarget.style.color = TEXT_MUTED; e.currentTarget.style.background = 'transparent' }}
            aria-label="Hide menu">
            <PanelLeftClose size={18} />
          </button>
        </div>

        {/* Account card — show a skeleton (not a wrong placeholder name) until the real
            account has loaded client-side, so nothing incorrect ever flashes on screen. */}
        <div className="px-3 pt-3">
          {!acct ? (
            <div className="rounded-2xl p-3" style={{ border: `1px solid ${BORDER}` }}>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl flex-shrink-0 animate-pulse" style={{ background: BORDER }} />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="h-3 w-24 rounded animate-pulse" style={{ background: BORDER }} />
                  <div className="h-2.5 w-32 rounded animate-pulse" style={{ background: '#F8F5F2' }} />
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="h-3 w-14 rounded animate-pulse" style={{ background: BORDER }} />
                <div className="h-3 w-10 rounded animate-pulse" style={{ background: BORDER }} />
              </div>
            </div>
          ) : (
            <Link href={`/${locale}/settings`} className="block rounded-2xl p-3 transition-colors"
              style={{ border: `1.5px solid ${BORDER}` }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER }}>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ background: ACTIVE_GRAD }}>
                  {name[0]?.toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm truncate" style={{ color: '#1A1A1A' }}>{name}</p>
                  {email && <p className="text-[11px] truncate flex items-center gap-1" style={{ color: TEXT_MUTED }}><Mail size={10} />{email}</p>}
                </div>
              </div>
              {acct.levelLabel && (
                <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ background: ACCENT_LIGHT, color: ACCENT_DARK }}>
                  <Star size={10} fill="currentColor" /> {acct.levelLabel}
                </div>
              )}
              <div className="flex items-center gap-3 mt-2.5 text-xs">
                <span className="flex items-center gap-1"><Star size={13} style={{ color: ACCENT_DARK }} fill="currentColor" /><span className="font-bold" style={{ color: '#1A1A1A' }}>{dispXp.toLocaleString()}</span><span style={{ color: TEXT_MUTED }}>XP</span></span>
                <span className="flex items-center gap-1"><Flame size={13} style={{ color: ACCENT }} /><span className="font-bold" style={{ color: '#1A1A1A' }}>{dispStreak}</span><span style={{ color: TEXT_MUTED }}>{locale === 'ar' ? 'يوم' : locale === 'zh' ? '天' : 'd'}</span></span>
              </div>
            </Link>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2.5 py-3 space-y-0.5 overflow-y-auto">
          {navItems.map(item => {
            const href = `/${locale}/${item.href}`
            const isActive = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link key={item.href} href={href} className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors"
                style={!isActive ? { color: TEXT_MUTED } : undefined}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = ACCENT_LIGHT }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}>
                {isActive && (
                  <motion.span layoutId="sideActive" transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-xl -z-10" style={{ background: ACTIVE_GRAD }} />
                )}
                <item.icon size={19} className="flex-shrink-0" style={{ color: isActive ? '#FFFFFF' : TEXT_MUTED }} />
                <span className="text-sm font-medium" style={{ color: isActive ? '#FFFFFF' : '#1A1A1A' }}>{getLabel(item, locale)}</span>
              </Link>
            )
          })}

          {isAdmin && (
            <Link href={`/${locale}/admin`}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors mt-1"
              style={pathname.includes('/admin') ? { background: ACCENT_LIGHT, color: ACCENT_DARK } : { color: TEXT_MUTED }}>
              <ShieldCheck size={19} className="flex-shrink-0" />
              <span className="text-sm font-medium">{locale === 'ar' ? 'الإدارة' : locale === 'zh' ? '管理' : 'Admin'}</span>
            </Link>
          )}
        </nav>

        {/* Placement retake */}
        <div className="px-2.5 pb-2">
          <Link href={`/${locale}/placement-test`}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors"
            style={{ color: ACCENT_DARK, border: `1px dashed ${ACCENT}88` }}
            onMouseEnter={e => { e.currentTarget.style.background = ACCENT_LIGHT }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
            <Star size={16} className="flex-shrink-0" />
            <span className="text-xs font-medium">{locale === 'zh' ? '重测水平' : locale === 'ar' ? 'اختبر مستواك' : 'Retake Test'}</span>
          </Link>
        </div>

        {/* Language switcher */}
        <div className="px-3 pb-2">
          <div className="flex items-center gap-1.5 px-1 py-1.5">
            <Globe size={15} className="flex-shrink-0" style={{ color: TEXT_MUTED }} />
            {LANGS.map(lang => (
              <button key={lang.code}
                onClick={() => router.push(pathname.replace(/^\/(zh|en|ar)(?=\/|$)/, `/${lang.code}`))}
                className="px-2 py-0.5 rounded-lg text-xs font-medium transition-colors"
                style={locale === lang.code ? { background: ACCENT_LIGHT, color: ACCENT_DARK } : { color: TEXT_MUTED }}>
                {lang.flag} {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="px-2.5 py-3" style={{ borderTop: `1px solid ${BORDER}` }}>
          <form action="/api/auth/logout" method="POST">
            <button type="submit"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors"
              style={{ color: TEXT_MUTED }}
              onMouseEnter={e => { e.currentTarget.style.color = '#DC2626'; e.currentTarget.style.background = '#FEF2F2' }}
              onMouseLeave={e => { e.currentTarget.style.color = TEXT_MUTED; e.currentTarget.style.background = 'transparent' }}>
              <LogOut size={19} className="flex-shrink-0" />
              <span className="text-sm font-medium">{locale === 'zh' ? '退出' : locale === 'ar' ? 'خروج' : 'Logout'}</span>
            </button>
          </form>
        </div>
      </motion.aside>

      {/* ── Mobile bottom tab bar ── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 pt-1.5 backdrop-blur-lg bg-white/95"
        style={{ borderTop: `1px solid ${BORDER}`, paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}>
        {navItems.slice(0, 5).map(item => {
          const href = `/${locale}/${item.href}`
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link key={item.href} href={href} className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 min-w-[54px]">
              {isActive && (
                <motion.span layoutId="mobileTab" transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  className="absolute inset-x-1 -top-0.5 bottom-0 rounded-2xl -z-10" style={{ background: ACTIVE_GRAD }} />
              )}
              <motion.span whileTap={{ scale: 0.82 }} style={{ color: isActive ? '#FFFFFF' : TEXT_MUTED }}>
                <item.icon size={21} />
              </motion.span>
              <span className="text-[10px] font-medium leading-tight" style={{ color: isActive ? '#FFFFFF' : TEXT_MUTED }}>{getLabel(item, locale)}</span>
            </Link>
          )
        })}
        <button
          onClick={() => {
            const idx = LANGS.findIndex(l => l.code === locale)
            const next = LANGS[(idx + 1) % LANGS.length]
            router.push(pathname.replace(/^\/[a-z]{2}/, `/${next.code}`))
          }}
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 min-w-[54px]" style={{ color: TEXT_MUTED }}>
          <Globe size={21} />
          <span className="text-[10px] font-medium">{LANGS.find(l => l.code === locale)?.flag}</span>
        </button>
      </nav>
    </>
  )
}
