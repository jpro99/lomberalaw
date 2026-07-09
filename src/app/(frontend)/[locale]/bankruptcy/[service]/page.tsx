import type { Locale } from '@/lib/payload'
import { ServiceDetailView, getServiceMetadata } from '@/components/ServiceDetailView'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; service: string }>
}) {
  const { locale, service } = await params
  return getServiceMetadata('bankruptcy', service, locale)
}

export default async function BankruptcyServicePage({
  params,
}: {
  params: Promise<{ locale: Locale; service: string }>
}) {
  const { locale, service } = await params
  return <ServiceDetailView practiceSlug="bankruptcy" serviceSlug={service} locale={locale} />
}
