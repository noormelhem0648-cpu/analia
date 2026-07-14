import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import PlacementTestClient from './PlacementTestClient'

export default async function PlacementTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  // Allow retaking from sidebar — no redirect if already done

  return <PlacementTestClient locale={locale} />
}
