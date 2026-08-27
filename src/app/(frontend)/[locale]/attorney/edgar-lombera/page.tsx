import { redirect } from 'next/navigation'
import type { Locale } from '@/lib/payload'
import { pageMetadata } from '@/lib/seo'
import { ABOUT_SEO } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return pageMetadata({
    title: ABOUT_SEO.title,
    description: ABOUT_SEO.description,
    path: '/about-us',
    locale,
  })
}

/** Legacy path — 301 exists in middleware; redirect at render for static builds. */
export default async function AttorneyBioPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  redirect(locale === 'es' ? '/es/sobre-nosotros/' : '/about-us/')
}
