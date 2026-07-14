import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import PracticeClient from './PracticeClient'

export default async function PracticePage({
  params,
}: {
  params: Promise<{ locale: string; levelId: string; lessonId: string }>
}) {
  const { locale, levelId, lessonId } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const [{ data: profile }, { data: lesson }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).maybeSingle(),
    supabase.from('lessons')
      .select('*, levels(name_ar, name_en, name_zh, code, color_primary)')
      .eq('id', parseInt(lessonId))
      .maybeSingle(),
  ])

  if (!lesson) notFound()

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} />
      <PracticeClient locale={locale} lesson={lesson} levelId={parseInt(levelId)} />
    </div>
  )
}
