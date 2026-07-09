import type { Locale } from '@/lib/payload'
import { PracticeHubView, getPracticeHubMetadata } from '@/components/PracticeHubView'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return getPracticeHubMetadata('personal-injury', locale)
}

export default async function PersonalInjuryHub({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <PracticeHubView slug="personal-injury" locale={locale} />
}
