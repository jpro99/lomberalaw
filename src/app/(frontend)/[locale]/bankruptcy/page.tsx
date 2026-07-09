import type { Locale } from '@/lib/payload'
import { PracticeHubView, getPracticeHubMetadata } from '@/components/PracticeHubView'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return getPracticeHubMetadata('bankruptcy', locale)
}

export default async function BankruptcyHub({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <PracticeHubView slug="bankruptcy" locale={locale} />
}
