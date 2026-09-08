import type { Locale } from '@/lib/payload'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return getPracticeCityMetadata('personal-injury', 'la-quinta', locale)
}

export default async function LaQuintaPersonalInjuryPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <PracticeCityView practiceSlug="personal-injury" citySlug="la-quinta" locale={locale} />
}
