import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

  const info: Record<string, string> = {
    url_configured: url ? url.substring(0, 40) + '...' : 'MISSING',
    key_configured: key ? key.substring(0, 20) + '...' : 'MISSING',
    key_type: key?.startsWith('eyJ') ? 'JWT (correct)' : key?.startsWith('sb_') ? 'NEW FORMAT (wrong)' : 'UNKNOWN',
  }

  try {
    const supabase = createClient(url, key)

    // Test 1: can we reach Supabase at all?
    const { data: pingData, error: pingErr } = await supabase
      .from('levels')
      .select('count')
      .limit(1)

    info.db_ping = pingErr ? `ERROR: ${pingErr.message}` : 'OK - DB reachable'

    // Test 2: try registering a test user
    const testEmail = `test_${Date.now()}@analia-test.com`
    const { data: signUpData, error: signUpErr } = await supabase.auth.signUp({
      email: testEmail,
      password: 'TestPass123!',
    })

    info.signup_test = signUpErr
      ? `FAILED: ${signUpErr.message} (status: ${signUpErr.status})`
      : `OK - user: ${signUpData.user?.id?.substring(0, 8)}... session: ${signUpData.session ? 'YES' : 'NO (email confirm required)'}`

    // Test 3: if signup worked, try login
    if (!signUpErr) {
      const { data: loginData, error: loginErr } = await supabase.auth.signInWithPassword({
        email: testEmail,
        password: 'TestPass123!',
      })
      info.login_test = loginErr
        ? `FAILED: ${loginErr.message}`
        : `OK - session: ${loginData.session?.access_token?.substring(0, 10)}...`

      // cleanup
      if (loginData.session) {
        await supabase.auth.signOut()
      }
    }

  } catch (e: unknown) {
    info.exception = e instanceof Error ? e.message : String(e)
  }

  return NextResponse.json(info, { status: 200 })
}
