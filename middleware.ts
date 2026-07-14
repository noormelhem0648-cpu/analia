import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { updateSession } from '@/lib/supabase/middleware'

const intlMiddleware = createMiddleware(routing)

export async function middleware(request: NextRequest) {
  // 1. Refresh Supabase session (must run first)
  const { supabaseResponse } = await updateSession(request)

  // 2. Run next-intl locale routing
  const intlResponse = intlMiddleware(request)

  // 3. Merge Supabase auth cookies into final response
  const finalResponse = intlResponse || supabaseResponse
  supabaseResponse.cookies.getAll().forEach(cookie => {
    finalResponse.cookies.set(cookie.name, cookie.value, {
      path: cookie.path,
      httpOnly: cookie.httpOnly,
      secure: cookie.secure,
      sameSite: cookie.sameSite as 'lax' | 'strict' | 'none' | undefined,
      maxAge: cookie.maxAge,
    })
  })

  return finalResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
}
