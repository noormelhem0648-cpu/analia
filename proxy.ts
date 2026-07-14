import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'
import { createServerClient } from '@supabase/ssr'

const intl = createMiddleware(routing)

const PUBLIC = ['/auth/language-select', '/auth/login', '/auth/register', '/verify']

function stripLocale(p: string) {
  return p.replace(/^\/(zh|en|ar)/, '') || '/'
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const clean = stripLocale(pathname)

  // Run intl middleware (handles locale redirects + headers)
  const intlRes = intl(request)

  // If intl issued a redirect (e.g. / → /zh), honor it
  if (intlRes.status >= 300 && intlRes.status < 400) {
    return intlRes
  }

  // Public paths — no auth needed
  if (clean === '/' || PUBLIC.some(p => clean.startsWith(p))) {
    return intlRes
  }

  // Auth check for protected routes
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: () => {},
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    const parts = pathname.split('/')
    const locale = ['zh', 'en', 'ar'].includes(parts[1]) ? parts[1] : 'zh'
    return NextResponse.redirect(new URL(`/${locale}/auth/login`, request.url))
  }

  return intlRes
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon\\.ico|.*\\..*).*)',],
}
