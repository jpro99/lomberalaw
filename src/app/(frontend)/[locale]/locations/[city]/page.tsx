import type { Locale } from '@/lib/payload'
import { CityHubView, getCityHubMetadata } from '@/components/CityHubView'
import {
  OfficeLocationView,
  getOfficeLocationMetadata,
  isOfficeLocationSlug,
} from '@/components/OfficeLocationView'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; city: string }> }) {
  const { locale, city } = await params
  if (isOfficeLocationSlug(city)) return getOfficeLocationMetadata(city, locale)
  return getCityHubMetadata(city, locale)
}

export default async function CityPage({ params }: { params: Promise<{ locale: Locale; city: string }> }) {
  const { locale, city } = await params
  if (isOfficeLocationSlug(city)) return <OfficeLocationView slug={city} locale={locale} />
  return <CityHubView citySlug={city} locale={locale} />
}
