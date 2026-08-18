import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// Accept / decline / remove a friendship.
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { friendship_id, action } = await req.json()
  if (!friendship_id || !['accept', 'decline', 'remove'].includes(action)) {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 })
  }

  const { data: fr } = await supabase
    .from('friendships').select('id, requester_id, addressee_id, status').eq('id', friendship_id).maybeSingle()
  if (!fr) return NextResponse.json({ error: 'not_found' }, { status: 404 })
  const involved = fr.requester_id === user.id || fr.addressee_id === user.id
  if (!involved) return NextResponse.json({ error: 'forbidden' }, { status: 403 })

  if (action === 'accept') {
    // Only the addressee can accept a pending request
    if (fr.addressee_id !== user.id) return NextResponse.json({ error: 'forbidden' }, { status: 403 })
    const { error } = await supabase.from('friendships').update({ status: 'accepted' }).eq('id', friendship_id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ ok: true })
  }

  // decline or remove → delete the row
  const { error } = await supabase.from('friendships').delete().eq('id', friendship_id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
