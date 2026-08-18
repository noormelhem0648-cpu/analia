import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import ArabicSoundsChart from '@/components/lesson/ArabicSoundsChart'
import ChineseSoundsClient from './ChineseSoundsClient'
import { isChineseDirection } from '@/lib/chinese'

export default async function SoundsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const { data: profile } = await supabase
    .from('profiles')
    .select('total_xp, streak_days, learning_direction')
    .eq('id', user.id)
    .maybeSingle()

  const isAdmin = user.email === process.env.ADMIN_EMAIL
  const isChinese = isChineseDirection((profile as { learning_direction?: string } | null)?.learning_direction)

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar
        locale={locale}
        xp={profile?.total_xp || 0}
        streak={profile?.streak_days || 0}
        isAdmin={isAdmin}
      />
      {isChinese ? (
        <ChineseSoundsClient locale={locale} />
      ) : (
        <main className="lg:ml-64 flex-1 p-6 lg:p-10 pb-24 lg:pb-10">
          <ArabicSoundsChart locale={locale} />
        </main>
      )}
    </div>
  )
}
