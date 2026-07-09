import type { Locale } from '@/lib/payload'
import { ServiceDetailView, getServiceMetadata } from '@/components/ServiceDetailView'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; service: string }>
}) {
  const { locale, service } = await params
  return getServiceMetadata('personal-injury', service, locale)
}

export default async function PersonalInjuryServicePage({
  params,
}: {
  params: Promise<{ locale: Locale; service: string }>
}) {
  const { locale, service } = await params
  return <ServiceDetailView practiceSlug="personal-injury" serviceSlug={service} locale={locale} />
}
