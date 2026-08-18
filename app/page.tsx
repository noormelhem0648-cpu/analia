import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export default async function RootPage() {
  const hdrs = await headers()
  const acceptLang = hdrs.get('accept-language') || ''
  const locale = acceptLang.startsWith('ar') ? 'ar' : acceptLang.startsWith('en') ? 'en' : 'zh'
  redirect(`/${locale}/auth/language-select`)
}
