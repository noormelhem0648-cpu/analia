import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ messages: [] })

    const { data } = await supabase
      .from('ai_conversations')
      .select('messages, response, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: true })
      .limit(10)

    if (!data?.length) return NextResponse.json({ messages: [] })

    // Flatten into message list (last 10 exchanges)
    const flat: { role: string; content: string }[] = []
    for (const row of data.slice(-5)) {
      const msgs = row.messages as { role: string; content: string }[]
      if (msgs?.length) {
        const last = msgs[msgs.length - 1]
        if (last?.role === 'user') flat.push(last)
      }
      if (row.response) flat.push({ role: 'assistant', content: row.response })
    }

    return NextResponse.json({ messages: flat })
  } catch {
    return NextResponse.json({ messages: [] })
  }
}
