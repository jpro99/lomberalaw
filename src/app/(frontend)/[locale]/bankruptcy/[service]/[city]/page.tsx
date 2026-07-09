import type { Locale } from '@/lib/payload'
import { MoneyPageView, getMoneyPageMetadata } from '@/components/MoneyPageView'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; service: string; city: string }>
}) {
  const { locale, service, city } = await params
  return getMoneyPageMetadata('bankruptcy', service, city, locale)
}

export default async function BankruptcyMoneyPage({
  params,
}: {
  params: Promise<{ locale: Locale; service: string; city: string }>
}) {
  const { locale, service, city } = await params
  return <MoneyPageView practiceSlug="bankruptcy" serviceSlug={service} citySlug={city} locale={locale} />
}
