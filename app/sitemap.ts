import { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_APP_URL || 'https://analia-pted.vercel.app'
const LOCALES = ['zh', 'en', 'ar']

const PUBLIC_PAGES = ['auth/login', 'auth/register', 'auth/forgot-password']
const AUTH_PAGES = ['dashboard', 'levels', 'vocabulary', 'ai-tutor', 'achievements', 'settings', 'placement-test']

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  LOCALES.forEach(locale => {
    PUBLIC_PAGES.forEach(page => {
      entries.push({ url: `${BASE}/${locale}/${page}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 })
    })
    AUTH_PAGES.forEach(page => {
      entries.push({ url: `${BASE}/${locale}/${page}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 })
    })
  })

  return entries
}
