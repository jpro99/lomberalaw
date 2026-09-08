import type { Locale } from '@/lib/payload'
import { notFound } from 'next/navigation'
import { ServiceDetailView, getServiceMetadata } from '@/components/ServiceDetailView'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'
import { isBkCitySlug, normalizeCitySlug } from '@/lib/cityBodyCopy'
import { isBkService } from '@/lib/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; service: string }>
}) {
  const { locale, service } = await params
  const citySlug = normalizeCitySlug(service)
  if (isBkCitySlug(citySlug)) return getPracticeCityMetadata('bankruptcy', citySlug, locale)
  return getServiceMetadata('bankruptcy', service, locale)
}

export default async function BankruptcySlugPage({
  params,
}: {
  params: Promise<{ locale: Locale; service: string }>
}) {
  const { locale, service } = await params
  const citySlug = normalizeCitySlug(service)
  if (isBkCitySlug(citySlug)) {
    return <PracticeCityView practiceSlug="bankruptcy" citySlug={citySlug} locale={locale} />
  }
  if (!isBkService(service)) notFound()
  return <ServiceDetailView practiceSlug="bankruptcy" serviceSlug={service} locale={locale} />
}
