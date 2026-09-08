import type { Locale } from '@/lib/payload'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'

export const dynamic = 'force-dynamic'

const LOCALE: Locale = 'es'

export async function generateMetadata() {
  return getPracticeCityMetadata('personal-injury', 'la-quinta', LOCALE)
}

export default function LaQuintaLesionesPersonalesPage() {
  return <PracticeCityView practiceSlug="personal-injury" citySlug="la-quinta" locale={LOCALE} />
}
