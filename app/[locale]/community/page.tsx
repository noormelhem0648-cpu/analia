import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AppSidebar from '@/components/layout/AppSidebar'
import CommunityClient, { type Friend, type PendingRequest, type FeedItem } from './CommunityClient'

export default async function CommunityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/${locale}/auth/login`)

  const { data: profile } = await supabase.from('profiles').select('total_xp, streak_days').eq('id', user.id).maybeSingle()

  // All friendship rows involving me
  const { data: rows } = await supabase
    .from('friendships')
    .select('id, status, requester_id, addressee_id')
    .or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`)

  const accepted = (rows || []).filter(r => r.status === 'accepted')
  const incoming = (rows || []).filter(r => r.status === 'pending' && r.addressee_id === user.id)
  const outgoing = (rows || []).filter(r => r.status === 'pending' && r.requester_id === user.id)

  const friendIds = accepted.map(r => (r.requester_id === user.id ? r.addressee_id : r.requester_id))
  const incomingIds = incoming.map(r => r.requester_id)

  // Fetch profile cards for friends + incoming requesters
  const idsToFetch = Array.from(new Set([...friendIds, ...incomingIds]))
  const profileMap: Record<string, { username: string; display_name?: string; total_xp?: number; streak_days?: number }> = {}
  if (idsToFetch.length) {
    const { data: profs } = await supabase
      .from('profiles').select('id, username, display_name, total_xp, streak_days').in('id', idsToFetch)
    ;(profs || []).forEach(p => { profileMap[p.id] = p })
  }

  const friends: Friend[] = accepted.map(r => {
    const fid = r.requester_id === user.id ? r.addressee_id : r.requester_id
    const p = profileMap[fid] || { username: '?' }
    return { friendship_id: r.id, id: fid, username: p.username, display_name: p.display_name, total_xp: p.total_xp || 0, streak_days: p.streak_days || 0 }
  }).sort((a, b) => (b.total_xp || 0) - (a.total_xp || 0))

  const requests: PendingRequest[] = incoming.map(r => {
    const p = profileMap[r.requester_id] || { username: '?' }
    return { friendship_id: r.id, id: r.requester_id, username: p.username, display_name: p.display_name }
  })

  // Activity feed: my friends' events (+ mine), most recent
  let feed: FeedItem[] = []
  const feedUserIds = [...friendIds, user.id]
  if (feedUserIds.length) {
    const { data: events } = await supabase
      .from('activity_events')
      .select('id, user_id, type, meta, created_at')
      .in('user_id', feedUserIds)
      .order('created_at', { ascending: false })
      .limit(30)
    feed = (events || []).map(e => ({
      id: e.id, user_id: e.user_id, type: e.type, meta: e.meta || {}, created_at: e.created_at,
      username: e.user_id === user.id ? (locale === 'ar' ? 'أنت' : locale === 'zh' ? '你' : 'You') : (profileMap[e.user_id]?.display_name || profileMap[e.user_id]?.username || '؟'),
    }))
  }

  return (
    <div className="flex min-h-screen" style={{ background: '#F8F9FF' }}>
      <AppSidebar locale={locale} xp={profile?.total_xp || 0} streak={profile?.streak_days || 0} isAdmin={user.email === process.env.ADMIN_EMAIL} />
      <CommunityClient
        locale={locale}
        friends={friends}
        requests={requests}
        outgoingCount={outgoing.length}
        feed={feed}
      />
    </div>
  )
}
