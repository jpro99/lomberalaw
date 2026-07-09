import type { Locale } from '@/lib/payload'
import { MoneyPageView, getMoneyPageMetadata } from '@/components/MoneyPageView'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; service: string; city: string }>
}) {
  const { locale, service, city } = await params
  return getMoneyPageMetadata('personal-injury', service, city, locale)
}

export default async function PersonalInjuryMoneyPage({
  params,
}: {
  params: Promise<{ locale: Locale; service: string; city: string }>
}) {
  const { locale, service, city } = await params
  return <MoneyPageView practiceSlug="personal-injury" serviceSlug={service} citySlug={city} locale={locale} />
}
