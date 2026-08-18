import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import LessonViewer from './LessonViewer'
import ZhLessonViewer from '@/components/lesson/ZhLessonViewer'
import ArLessonViewer from '@/components/lesson/ArLessonViewer'

export default async function LessonPage({
  params,
}: {
  params: Promise<{ locale: string; levelId: string; lessonId: string }>
}) {
  const { locale, levelId, lessonId } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const [{ data: profile }, { data: lesson }, { data: sections }, { data: exercises }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).maybeSingle(),
    supabase.from('lessons').select('*, levels(name_ar, name_en, name_zh, code, color_primary)').eq('id', parseInt(lessonId)).maybeSingle(),
    supabase.from('lesson_sections').select('*').eq('lesson_id', parseInt(lessonId)).order('order_index'),
    supabase.from('exercises').select('*').eq('lesson_id', parseInt(lessonId)).order('order_index'),
  ])

  if (!lesson) notFound()

  // Fetch the next lesson in the same level (by order_index)
  const { data: nextLesson } = await supabase
    .from('lessons')
    .select('id, order_index')
    .eq('level_id', parseInt(levelId))
    .gt('order_index', lesson.order_index ?? 0)
    .order('order_index', { ascending: true })
    .limit(1)
    .maybeSingle()

  const { data: progress } = await supabase
    .from('user_lesson_progress')
    .select('*')
    .eq('user_id', user.id)
    .eq('lesson_id', parseInt(lessonId))
    .maybeSingle()

  const isZh = (lesson.levels?.code || '').startsWith('zh-')
  // New Arabic path lessons live under units; legacy flat lessons fall back to the old viewer.
  const isArUnit = !isZh && lesson.unit_id != null

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} />
      {isZh ? (
        <ZhLessonViewer
          locale={locale}
          lesson={lesson}
          progress={progress}
          levelId={parseInt(levelId)}
          nextLessonId={nextLesson?.id ?? null}
        />
      ) : isArUnit ? (
        <ArLessonViewer
          locale={locale}
          lesson={lesson}
          progress={progress}
          levelId={parseInt(levelId)}
          nextLessonId={nextLesson?.id ?? null}
        />
      ) : (
        <LessonViewer
          locale={locale}
          lesson={lesson}
          sections={sections || []}
          exercises={exercises || []}
          progress={progress}
          levelId={parseInt(levelId)}
          nextLessonId={nextLesson?.id ?? null}
        />
      )}
    </div>
  )
}
