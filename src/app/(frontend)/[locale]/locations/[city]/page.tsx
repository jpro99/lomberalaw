import type { Locale } from '@/lib/payload'
import { CityHubView, getCityHubMetadata } from '@/components/CityHubView'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; city: string }> }) {
  const { locale, city } = await params
  return getCityHubMetadata(city, locale)
}

export default async function CityPage({ params }: { params: Promise<{ locale: Locale; city: string }> }) {
  const { locale, city } = await params
  return <CityHubView citySlug={city} locale={locale} />
}
