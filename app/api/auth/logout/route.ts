import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  await supabase.auth.signOut()
  // Detect locale from the referer path (/zh/... /en/... /ar/...)
  const referer = req.headers.get('referer') || ''
  const localeMatch = referer.match(/\/(zh|en|ar)\//)
  const locale = localeMatch ? localeMatch[1] : 'zh'
  return NextResponse.redirect(new URL(`/${locale}/auth/login`, process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'))
}
