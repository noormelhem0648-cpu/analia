import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { display_name, ui_language, learning_direction } = await req.json()

  const fields = {
    display_name,
    ui_language,
    ...(learning_direction ? { learning_direction } : {}),
    updated_at: new Date().toISOString(),
  }

  // Update and return affected rows so we can detect a missing profile
  const { data: updated, error: updateErr } = await supabase
    .from('profiles')
    .update(fields)
    .eq('id', user.id)
    .select('id')

  if (updateErr) return NextResponse.json({ error: updateErr.message }, { status: 500 })

  // Self-heal: no profile row exists for this user → create it
  if (!updated || updated.length === 0) {
    const base = (user.email || user.id).split('@')[0].replace(/[^a-zA-Z0-9_]/g, '') || 'user'
    const { error: insertErr } = await supabase.from('profiles').insert({
      id: user.id,
      email: user.email || `${user.id}@noemail.local`,
      username: `${base}_${user.id.slice(0, 6)}`,
      display_name: display_name || base,
      ui_language: ui_language || 'ar',
      ...(learning_direction ? { learning_direction } : {}),
    })
    if (insertErr) return NextResponse.json({ error: insertErr.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
