import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password, username, display_name, ui_language, age, country } = body

    if (!email || !password || !username) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Use admin client to create user (bypasses client-side key issues)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    )

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username.toLowerCase().trim(),
          display_name: display_name || username,
          ui_language: ui_language || 'zh',
          age: age ? parseInt(age) : null,
          country: country || '',
        },
      },
    })

    if (error) {
      console.error('Supabase signUp error:', JSON.stringify(error))
      return NextResponse.json({ error: error.message || 'Registration failed' }, { status: 400 })
    }

    return NextResponse.json({ success: true, userId: data.user?.id })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Server error'
    console.error('Register API error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
