import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import LevelsClient from './LevelsClient'

export default async function LevelsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const [{ data: profile }, { data: levels }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).maybeSingle(),
    supabase.from('levels').select('*, lessons(count)').order('order_index'),
  ])

  // Get progress per level
  const { data: lessonProgress } = await supabase
    .from('user_lesson_progress')
    .select('lesson_id, status, lessons(level_id)')
    .eq('user_id', user.id)
    .eq('status', 'completed')

  const completedByLevel: Record<number, number> = {}
  lessonProgress?.forEach(p => {
    const lvlId = (p.lessons as unknown as { level_id: number })?.level_id
    if (lvlId) completedByLevel[lvlId] = (completedByLevel[lvlId] || 0) + 1
  })

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} />
      <LevelsClient
        locale={locale}
        levels={levels || []}
        currentLevelId={profile?.current_level_id || 1}
        completedByLevel={completedByLevel}
      />
    </div>
  )
}
