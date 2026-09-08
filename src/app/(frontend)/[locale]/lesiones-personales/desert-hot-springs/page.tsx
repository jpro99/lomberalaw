import type { Locale } from '@/lib/payload'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'

export const dynamic = 'force-dynamic'

const LOCALE: Locale = 'es'

export async function generateMetadata() {
  return getPracticeCityMetadata('personal-injury', 'desert-hot-springs', LOCALE)
}

export default function DesertHotSpringsLesionesPersonalesPage() {
  return <PracticeCityView practiceSlug="personal-injury" citySlug="desert-hot-springs" locale={LOCALE} />
}
