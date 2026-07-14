import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import AdminClient from './AdminClient'

export default async function AdminPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)
  if (user.email !== process.env.ADMIN_EMAIL) redirect(`/${locale}/dashboard`)

  const [
    { data: profiles },
    { data: profile },
    { count: totalLessons },
    { count: totalAiChats },
    { count: totalAchievements },
  ] = await Promise.all([
    supabase.from('profiles').select('*').order('created_at', { ascending: false }),
    supabase.from('profiles').select('total_xp, streak_days').eq('id', user.id).single(),
    supabase.from('user_lesson_progress').select('*', { count: 'exact', head: true }).eq('status', 'completed'),
    supabase.from('ai_conversations').select('*', { count: 'exact', head: true }),
    supabase.from('user_achievements').select('*', { count: 'exact', head: true }),
  ])

  const totalXp = (profiles || []).reduce((sum, p) => sum + (p.total_xp || 0), 0)

  const stats = {
    totalUsers: profiles?.length || 0,
    totalXp,
    totalLessonsCompleted: totalLessons || 0,
    totalAiChats: totalAiChats || 0,
    totalAchievements: totalAchievements || 0,
  }

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} />
      <AdminClient profiles={profiles || []} stats={stats} locale={locale} />
    </div>
  )
}
