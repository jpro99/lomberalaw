import type { Locale } from '@/lib/payload'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'

export const dynamic = 'force-dynamic'

const LOCALE: Locale = 'es'

export async function generateMetadata() {
  return getPracticeCityMetadata('personal-injury', 'rancho-cucamonga', LOCALE)
}

export default function RanchoCucamongaLesionesPersonalesPage() {
  return <PracticeCityView practiceSlug="personal-injury" citySlug="rancho-cucamonga" locale={LOCALE} />
}
