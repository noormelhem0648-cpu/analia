'use client'

import { useState } from 'react'
import { Users, BookOpen, Star, Flame, TrendingUp, Award, MessageCircle, Brain } from 'lucide-react'

interface Profile {
  id: string
  email: string
  display_name?: string
  username: string
  total_xp: number
  streak_days: number
  created_at: string
  placement_level_code?: string
  placement_test_done?: boolean
  ui_language?: string
}

interface Stats {
  totalUsers: number
  totalXp: number
  totalLessonsCompleted: number
  totalAiChats: number
  totalAchievements: number
}

interface Props {
  profiles: Profile[]
  stats: Stats
  locale: string
}

export default function AdminClient({ profiles, stats, locale }: Props) {
  const [search, setSearch] = useState('')

  const filtered = profiles.filter(p =>
    (p.email || '').toLowerCase().includes(search.toLowerCase()) ||
    (p.display_name || '').toLowerCase().includes(search.toLowerCase()) ||
    (p.username || '').toLowerCase().includes(search.toLowerCase())
  )

  const statCards = [
    { icon: Users, label: 'إجمالي المستخدمين', value: stats.totalUsers, color: '#3B82F6', bg: '#EFF6FF' },
    { icon: Star, label: 'مجموع النقاط XP', value: stats.totalXp.toLocaleString(), color: '#F59E0B', bg: '#FFFBEB' },
    { icon: BookOpen, label: 'دروس مكتملة', value: stats.totalLessonsCompleted, color: '#10B981', bg: '#ECFDF5' },
    { icon: MessageCircle, label: 'محادثات AI', value: stats.totalAiChats, color: '#8B5CF6', bg: '#F5F3FF' },
    { icon: Award, label: 'إنجازات مكتسبة', value: stats.totalAchievements, color: '#EF4444', bg: '#FEF2F2' },
    { icon: Brain, label: 'اختبارات أُجريت', value: profiles.filter(p => p.placement_test_done).length, color: '#06B6D4', bg: '#ECFEFF' },
  ]

  return (
    <main className="ml-20 lg:ml-64 flex-1 p-6 lg:p-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
            <TrendingUp size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">لوحة الإدارة</h1>
            <p className="text-gray-700 text-sm">Admin Dashboard · ANALIA</p>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {statCards.map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: s.bg }}>
                <s.icon size={18} style={{ color: s.color }} />
              </div>
              <span className="text-xs text-gray-700 font-medium">{s.label}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Users table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Users size={18} style={{ color: '#1E3A5F' }} />
            المستخدمون ({profiles.length})
          </h2>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="بحث..."
            className="px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-300 w-48"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-600 border-b border-gray-100">
                <th className="text-right px-6 py-3 font-medium">المستخدم</th>
                <th className="text-right px-4 py-3 font-medium">اللغة</th>
                <th className="text-right px-4 py-3 font-medium">المستوى</th>
                <th className="text-right px-4 py-3 font-medium">XP</th>
                <th className="text-right px-4 py-3 font-medium">Streak</th>
                <th className="text-right px-4 py-3 font-medium">الاختبار</th>
                <th className="text-right px-4 py-3 font-medium">تاريخ التسجيل</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(p => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
                        {(p.display_name || p.username || '?')[0].toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{p.display_name || p.username}</p>
                        <p className="text-xs text-gray-600">{p.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                      {p.ui_language === 'zh' ? '🇨🇳 ZH' : p.ui_language === 'ar' ? '🌙 AR' : '🌍 EN'}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {p.placement_level_code?.toUpperCase() || '—'}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm font-bold text-amber-600">⭐ {p.total_xp || 0}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm font-bold text-orange-500">🔥 {p.streak_days || 0}</span>
                  </td>
                  <td className="px-4 py-4">
                    {p.placement_test_done
                      ? <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">✅ مكتمل</span>
                      : <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">⏳ لم يؤخذ</span>
                    }
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs text-gray-600">
                      {new Date(p.created_at).toLocaleDateString('ar-SA')}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="px-6 py-10 text-center text-gray-600 text-sm">لا توجد نتائج</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
