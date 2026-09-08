import type { Locale } from '@/lib/payload'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'

export const dynamic = 'force-dynamic'

const LOCALE: Locale = 'es'

export async function generateMetadata() {
  return getPracticeCityMetadata('personal-injury', 'colton', LOCALE)
}

export default function ColtonLesionesPersonalesPage() {
  return <PracticeCityView practiceSlug="personal-injury" citySlug="colton" locale={LOCALE} />
}
