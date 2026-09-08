import type { Locale } from '@/lib/payload'
import { PracticeCityView, getPracticeCityMetadata } from '@/components/PracticeCityView'

export const dynamic = 'force-dynamic'

const LOCALE: Locale = 'es'

export async function generateMetadata() {
  return getPracticeCityMetadata('personal-injury', 'indio', LOCALE)
}

export default function IndioLesionesPersonalesPage() {
  return <PracticeCityView practiceSlug="personal-injury" citySlug="indio" locale={LOCALE} />
}
