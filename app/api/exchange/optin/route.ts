import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// Toggle language-exchange visibility + optional bio.
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { opt_in, bio } = await req.json()
  const { error } = await supabase.from('profiles').update({
    exchange_opt_in: !!opt_in,
    ...(bio !== undefined ? { bio: String(bio).slice(0, 300) } : {}),
  }).eq('id', user.id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
