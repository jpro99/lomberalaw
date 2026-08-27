// Keep in sync with spanishPaths.ts — used for legacy 301 generation at build time.

export const EN_TO_ES_PI_SERVICE = {
  'car-accidents': 'accidentes-de-auto',
  'truck-accidents': 'accidentes-de-camion',
  'motorcycle-accidents': 'accidentes-de-motocicleta',
  'rideshare-accidents': 'accidentes-de-rideshare',
  'wrongful-death': 'muerte-injusta',
  'dog-bites': 'mordedura-de-perro',
  'traumatic-brain-injury': 'lesion-cerebral',
  'spinal-cord-injury': 'lesiones-de-medula-espinal',
}

export const EN_TO_ES_BK_SERVICE = {
  'chapter-7': 'bancarrota-capitulo-7',
  'chapter-13': 'bancarrota-capitulo-13',
  'foreclosure-defense': 'defensa-de-ejecucion-hipotecaria',
  'wage-garnishment': 'embargo-de-salario',
}

export const LIVE_CITY_SLUGS = [
  'redlands',
  'san-bernardino',
  'fontana',
  'riverside',
  'moreno-valley',
  'highland',
  'palm-springs',
  'palm-desert',
  'cathedral-city',
  'indio',
  'beaumont',
  'hemet',
  'colton',
  'desert-hot-springs',
  'rancho-cucamonga',
]

const PI_HUB = '/es/lesiones-personales/'
const BK_HUB = '/es/bancarrota/'

/** 301 English practice segments accidentally served under /es/personal-injury|bankruptcy/. */
export function buildSpanishEnglishPracticeRedirects() {
  const redirects = []

  redirects.push({ from: '/es/personal-injury/', to: PI_HUB })
  redirects.push({ from: '/es/bankruptcy/', to: BK_HUB })

  for (const [en, es] of Object.entries(EN_TO_ES_PI_SERVICE)) {
    redirects.push({ from: `/es/personal-injury/${en}/`, to: `${PI_HUB}${es}/` })
    for (const city of LIVE_CITY_SLUGS) {
      redirects.push({
        from: `/es/personal-injury/${en}/${city}/`,
        to: `${PI_HUB}${es}/`,
      })
      redirects.push({
        from: `/es/lesiones-personales/${es}/${city}/`,
        to: `${PI_HUB}${es}/`,
      })
    }
  }

  for (const city of LIVE_CITY_SLUGS) {
    redirects.push({ from: `/es/personal-injury/${city}/`, to: `${PI_HUB}${city}/` })
    redirects.push({ from: `/es/bankruptcy/${city}/`, to: `${BK_HUB}${city}/` })
  }

  for (const [en, es] of Object.entries(EN_TO_ES_BK_SERVICE)) {
    redirects.push({ from: `/es/bankruptcy/${en}/`, to: `${BK_HUB}${es}/` })
    for (const city of LIVE_CITY_SLUGS) {
      redirects.push({
        from: `/es/bankruptcy/${en}/${city}/`,
        to: `${BK_HUB}${es}/`,
      })
      redirects.push({
        from: `/es/bancarrota/${es}/${city}/`,
        to: `${BK_HUB}${es}/`,
      })
    }
  }

  // Spanish slug served under English /es/personal-injury/ prefix
  for (const es of Object.values(EN_TO_ES_PI_SERVICE)) {
    redirects.push({ from: `/es/personal-injury/${es}/`, to: `${PI_HUB}${es}/` })
    for (const city of LIVE_CITY_SLUGS) {
      redirects.push({ from: `/es/personal-injury/${es}/${city}/`, to: `${PI_HUB}${es}/` })
    }
  }
  for (const es of Object.values(EN_TO_ES_BK_SERVICE)) {
    redirects.push({ from: `/es/bankruptcy/${es}/`, to: `${BK_HUB}${es}/` })
    for (const city of LIVE_CITY_SLUGS) {
      redirects.push({ from: `/es/bankruptcy/${es}/${city}/`, to: `${BK_HUB}${es}/` })
    }
  }

  // Unmapped English PI/BK services under /es → hub
  const unmappedPi = [
    'pedestrian-accidents',
    'bus-accidents',
    'bicycle-accidents',
    'catastrophic-injury',
    'medical-malpractice',
    'slip-and-fall',
    'premises-liability',
  ]
  for (const slug of unmappedPi) {
    redirects.push({ from: `/es/personal-injury/${slug}/`, to: PI_HUB })
  }

  const unmappedBk = ['stop-foreclosure', 'stop-wage-garnishment']
  for (const slug of unmappedBk) {
    redirects.push({ from: `/es/bankruptcy/${slug}/`, to: BK_HUB })
  }

  return redirects
}
