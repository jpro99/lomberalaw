import type { Locale } from '@/lib/payload'
import { notFound } from 'next/navigation'
import { ServiceDetailView, getServiceMetadata } from '@/components/ServiceDetailView'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'
import { isLiveCity, isPiService } from '@/lib/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; service: string }>
}) {
  const { locale, service } = await params
  if (isLiveCity(service)) return getPracticeCityMetadata('personal-injury', service, locale)
  return getServiceMetadata('personal-injury', service, locale)
}

export default async function PersonalInjurySlugPage({
  params,
}: {
  params: Promise<{ locale: Locale; service: string }>
}) {
  const { locale, service } = await params
  if (isLiveCity(service)) {
    return <PracticeCityView practiceSlug="personal-injury" citySlug={service} locale={locale} />
  }
  if (!isPiService(service)) notFound()
  return <ServiceDetailView practiceSlug="personal-injury" serviceSlug={service} locale={locale} />
}
