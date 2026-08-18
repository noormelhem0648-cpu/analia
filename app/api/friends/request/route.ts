import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// Send a friend request by username.
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { username } = await req.json()
  if (!username) return NextResponse.json({ error: 'Missing username' }, { status: 400 })

  const { data: target } = await supabase
    .from('profiles').select('id, username').ilike('username', String(username).trim()).maybeSingle()
  if (!target) return NextResponse.json({ error: 'not_found' }, { status: 404 })
  if (target.id === user.id) return NextResponse.json({ error: 'self' }, { status: 400 })

  // Avoid duplicates in either direction
  const { data: existing } = await supabase
    .from('friendships')
    .select('id, status, requester_id, addressee_id')
    .or(`and(requester_id.eq.${user.id},addressee_id.eq.${target.id}),and(requester_id.eq.${target.id},addressee_id.eq.${user.id})`)
    .maybeSingle()
  if (existing) return NextResponse.json({ error: 'exists', status: existing.status }, { status: 409 })

  const { error } = await supabase.from('friendships').insert({
    requester_id: user.id, addressee_id: target.id, status: 'pending',
  })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
