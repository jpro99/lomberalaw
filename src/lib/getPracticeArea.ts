import { getPayload, PayloadUnavailableError } from './payload'
import type { Locale } from './payload'
import { PI_HUB_SERVICES, BK_SERVICES } from './routing'

const PRACTICE_NAMES = {
  'personal-injury': { en: 'Personal Injury', es: 'Lesiones Personales' },
  bankruptcy: { en: 'Bankruptcy', es: 'Bancarrota' },
} as const

const SERVICE_TITLES: Record<string, { en: string; es: string }> = {
  'car-accidents': { en: 'Car Accidents', es: 'Accidentes de Auto' },
  'truck-accidents': { en: 'Truck Accidents', es: 'Accidentes de Camión' },
  'motorcycle-accidents': { en: 'Motorcycle Accidents', es: 'Accidentes de Motocicleta' },
  'rideshare-accidents': { en: 'Rideshare Accidents', es: 'Accidentes de Rideshare' },
  'wrongful-death': { en: 'Wrongful Death', es: 'Muerte Injusta' },
  'dog-bites': { en: 'Dog Bites', es: 'Mordeduras de Perro' },
  'traumatic-brain-injury': { en: 'Traumatic Brain Injury', es: 'Lesión Cerebral' },
  'spinal-cord-injury': { en: 'Spinal Cord Injury', es: 'Lesiones de Médula Espinal' },
  'chapter-7': { en: 'Chapter 7 Bankruptcy', es: 'Bancarrota Capítulo 7' },
  'chapter-13': { en: 'Chapter 13 Bankruptcy', es: 'Bancarrota Capítulo 13' },
  'foreclosure-defense': { en: 'Foreclosure Defense', es: 'Defensa de Ejecución Hipotecaria' },
  'wage-garnishment': { en: 'Wage Garnishment', es: 'Embargo de Salario' },
}

function staticPracticeAreaBundle(slug: 'personal-injury' | 'bankruptcy', locale: Locale) {
  const slugs = slug === 'personal-injury' ? [...PI_HUB_SERVICES] : [...BK_SERVICES]
  return {
    practiceArea: {
      id: slug,
      slug,
      name: PRACTICE_NAMES[slug][locale],
    },
    services: slugs.map((serviceSlug) => ({
      id: serviceSlug,
      slug: serviceSlug,
      title: SERVICE_TITLES[serviceSlug]?.[locale] || serviceSlug,
    })),
    testimonials: [],
  }
}

export async function getPracticeAreaBundle(slug: 'personal-injury' | 'bankruptcy', locale: Locale) {
  try {
    const payload = await getPayload()

    const practiceAreaRes = await payload.find({
      collection: 'practice-areas',
      where: { slug: { equals: slug } },
      locale,
      limit: 1,
    })
    const practiceArea = practiceAreaRes.docs[0]
    if (!practiceArea) return staticPracticeAreaBundle(slug, locale)

    const [services, testimonials] = await Promise.all([
      payload.find({
        collection: 'services',
        where: { practiceArea: { equals: practiceArea.id } },
        locale,
        sort: 'displayOrder',
        limit: 20,
      }),
      payload.find({
        collection: 'testimonials',
        where: { practiceArea: { equals: practiceArea.id } },
        locale,
        limit: 6,
      }),
    ])

    return { practiceArea, services: services.docs, testimonials: testimonials.docs }
  } catch (e) {
    if (e instanceof PayloadUnavailableError) return staticPracticeAreaBundle(slug, locale)
    throw e
  }
}
