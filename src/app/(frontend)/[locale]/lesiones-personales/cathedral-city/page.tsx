import type { Locale } from '@/lib/payload'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'

export const dynamic = 'force-dynamic'

const LOCALE: Locale = 'es'

export async function generateMetadata() {
  return getPracticeCityMetadata('personal-injury', 'cathedral-city', LOCALE)
}

export default function CathedralCityLesionesPersonalesPage() {
  return <PracticeCityView practiceSlug="personal-injury" citySlug="cathedral-city" locale={LOCALE} />
}
