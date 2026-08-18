import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import ChallengesClient, { type ChallengeCard } from './ChallengesClient'

export default async function ChallengesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const { data: profile } = await supabase.from('profiles').select('total_xp, streak_days').eq('id', user.id).maybeSingle()

  const today = new Date().toISOString().split('T')[0]
  const [{ data: challenges }, { data: mine }] = await Promise.all([
    supabase.from('challenges').select('*').eq('is_active', true).or(`ends_at.is.null,ends_at.gte.${today}`).order('scope'),
    supabase.from('challenge_participants').select('challenge_id, progress, completed').eq('user_id', user.id),
  ])

  const myMap: Record<string, { progress: number; completed: boolean }> = {}
  ;(mine || []).forEach(m => { myMap[m.challenge_id] = { progress: m.progress, completed: m.completed } })

  const cards: ChallengeCard[] = (challenges || []).map(c => ({
    id: c.id, title_ar: c.title_ar, title_en: c.title_en, title_zh: c.title_zh,
    description_ar: c.description_ar, description_en: c.description_en, description_zh: c.description_zh,
    type: c.type, goal: c.goal, scope: c.scope, icon: c.icon, reward_xp: c.reward_xp, ends_at: c.ends_at,
    joined: !!myMap[c.id], progress: myMap[c.id]?.progress ?? 0, completed: myMap[c.id]?.completed ?? false,
  }))

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} isAdmin={user.email === process.env.ADMIN_EMAIL} />
      <ChallengesClient locale={locale} challenges={cards} />
    </div>
  )
}
