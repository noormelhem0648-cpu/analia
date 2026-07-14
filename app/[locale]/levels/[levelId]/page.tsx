import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import LevelDetailClient from './LevelDetailClient'

export default async function LevelDetailPage({
  params,
}: {
  params: Promise<{ locale: string; levelId: string }>
}) {
  const { locale, levelId } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const [{ data: profile }, { data: level }, { data: lessons }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).single(),
    supabase.from('levels').select('*').eq('id', parseInt(levelId)).single(),
    supabase.from('lessons').select('*').eq('level_id', parseInt(levelId)).order('order_index'),
  ])

  if (!level) notFound()

  const { data: progress } = await supabase
    .from('user_lesson_progress')
    .select('lesson_id, status, score, xp_earned')
    .eq('user_id', user.id)
    .in('lesson_id', (lessons || []).map(l => l.id))

  const progressMap: Record<number, { status: string; score?: number; xp_earned?: number }> = {}
  progress?.forEach(p => { progressMap[p.lesson_id] = p })

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} />
      <LevelDetailClient
        locale={locale}
        level={level}
        lessons={lessons || []}
        progressMap={progressMap}
        currentLevelId={profile?.current_level_id || 1}
      />
    </div>
  )
}
