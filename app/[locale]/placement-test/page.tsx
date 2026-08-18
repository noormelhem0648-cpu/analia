import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import PlacementTestClient from './PlacementTestClient'
import ChinesePlacementTestClient from './ChinesePlacementTestClient'
import { isChineseDirection } from '@/lib/chinese'

export default async function PlacementTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  // Route to the correct placement test by learning direction — the two are fully separate.
  const { data: profile } = await supabase.from('profiles').select('learning_direction').eq('id', user.id).maybeSingle()
  const direction = (profile as { learning_direction?: string } | null)?.learning_direction

  if (isChineseDirection(direction)) {
    return <ChinesePlacementTestClient locale={locale} />
  }
  return <PlacementTestClient locale={locale} />
}
