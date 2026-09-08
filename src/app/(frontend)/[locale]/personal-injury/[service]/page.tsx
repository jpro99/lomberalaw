import type { Locale } from '@/lib/payload'
import { notFound } from 'next/navigation'
import { ServiceDetailView, getServiceMetadata } from '@/components/ServiceDetailView'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'
import { isPiCitySlug, normalizeCitySlug } from '@/lib/cityBodyCopy'
import { isPiService } from '@/lib/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; service: string }>
}) {
  const { locale, service } = await params
  const citySlug = normalizeCitySlug(service)
  if (isPiCitySlug(citySlug)) return getPracticeCityMetadata('personal-injury', citySlug, locale)
  return getServiceMetadata('personal-injury', service, locale)
}

export default async function PersonalInjurySlugPage({
  params,
}: {
  params: Promise<{ locale: Locale; service: string }>
}) {
  const { locale, service } = await params
  const citySlug = normalizeCitySlug(service)
  if (isPiCitySlug(citySlug)) {
    return <PracticeCityView practiceSlug="personal-injury" citySlug={citySlug} locale={locale} />
  }
  if (!isPiService(service)) notFound()
  return <ServiceDetailView practiceSlug="personal-injury" serviceSlug={service} locale={locale} />
}
