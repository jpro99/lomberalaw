import type { Locale } from '@/lib/payload'
import { AboutUsView, getAboutMetadata } from '@/components/AboutUsView'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return getAboutMetadata(locale, '/about-us')
}

export default async function AboutUsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <AboutUsView locale={locale} canonicalPath="/about-us" />
}
