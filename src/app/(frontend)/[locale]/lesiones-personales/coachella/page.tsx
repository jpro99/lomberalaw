import type { Locale } from '@/lib/payload'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'

export const dynamic = 'force-dynamic'

const LOCALE: Locale = 'es'

export async function generateMetadata() {
  return getPracticeCityMetadata('personal-injury', 'coachella', LOCALE)
}

export default function CoachellaLesionesPersonalesPage() {
  return <PracticeCityView practiceSlug="personal-injury" citySlug="coachella" locale={LOCALE} />
}
