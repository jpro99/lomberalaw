import type { Locale } from '@/lib/payload'
import { notFound } from 'next/navigation'
import { ServiceDetailView, getServiceMetadata } from '@/components/ServiceDetailView'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'
import { isBkService, isLiveCity } from '@/lib/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; service: string }>
}) {
  const { locale, service } = await params
  if (isLiveCity(service)) return getPracticeCityMetadata('bankruptcy', service, locale)
  return getServiceMetadata('bankruptcy', service, locale)
}

export default async function BankruptcySlugPage({
  params,
}: {
  params: Promise<{ locale: Locale; service: string }>
}) {
  const { locale, service } = await params
  if (isLiveCity(service)) {
    return <PracticeCityView practiceSlug="bankruptcy" citySlug={service} locale={locale} />
  }
  if (!isBkService(service)) notFound()
  return <ServiceDetailView practiceSlug="bankruptcy" serviceSlug={service} locale={locale} />
}
