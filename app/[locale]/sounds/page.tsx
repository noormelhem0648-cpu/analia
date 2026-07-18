import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import ArabicSoundsChart from '@/components/lesson/ArabicSoundsChart'

export default async function SoundsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10">
      <ArabicSoundsChart locale={locale} />
    </main>
  )
}
