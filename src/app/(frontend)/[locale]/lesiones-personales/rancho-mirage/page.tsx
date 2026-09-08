import type { Locale } from '@/lib/payload'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'

export const dynamic = 'force-dynamic'

const LOCALE: Locale = 'es'

export async function generateMetadata() {
  return getPracticeCityMetadata('personal-injury', 'rancho-mirage', LOCALE)
}

export default function RanchoMirageLesionesPersonalesPage() {
  return <PracticeCityView practiceSlug="personal-injury" citySlug="rancho-mirage" locale={LOCALE} />
}
