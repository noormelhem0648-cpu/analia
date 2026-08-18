import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function LocaleRoot({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  // Already logged in → go to dashboard; new visitor → language select
  if (user) redirect(`/${locale}/dashboard`)
  else redirect(`/${locale}/auth/language-select`)
}
