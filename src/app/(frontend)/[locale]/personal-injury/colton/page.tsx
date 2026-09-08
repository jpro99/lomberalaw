import type { Locale } from '@/lib/payload'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return getPracticeCityMetadata('personal-injury', 'colton', locale)
}

export default async function ColtonPersonalInjuryPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return <PracticeCityView practiceSlug="personal-injury" citySlug="colton" locale={locale} />
}
