import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// Join a challenge (idempotent).
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { challenge_id } = await req.json()
  if (!challenge_id) return NextResponse.json({ error: 'Missing challenge_id' }, { status: 400 })

  const { error } = await supabase.from('challenge_participants').insert({
    challenge_id, user_id: user.id, progress: 0, completed: false,
  })
  // Unique violation = already joined → treat as success
  if (error && !String(error.message).toLowerCase().includes('duplicate')) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Log activity (non-fatal)
  try {
    await supabase.from('activity_events').insert({ user_id: user.id, type: 'challenge_joined', meta: { challenge_id } })
  } catch {}

  return NextResponse.json({ ok: true })
}
