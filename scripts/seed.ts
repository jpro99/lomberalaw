import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../src/payload.config'
import { lexicalParagraphs } from './lexical'

async function main() {
  const payload = await getPayload({ config })
  console.log('Seeding Lombera Law starter content...')

  // ---------------------------------------------------------------
  // Offices
  // ---------------------------------------------------------------
  const officeSeeds = [
    {
      name: 'Redlands Office',
      phone: '(909) 915-0181',
      address: '2068 Orange Tree Lane, Suite 220, Redlands, CA 92374',
      hoursEn: 'Mon–Fri: 8:30am–5:30pm\nFree consultations by appointment',
      hoursEs: 'Lun–Vie: 8:30am–5:30pm\nConsultas gratuitas con cita previa',
    },
    {
      name: 'Palm Springs Office',
      phone: '(760) 835-9353',
      address: '1276 N. Palm Canyon Dr, Suite 107, Palm Springs, CA 92262',
      hoursEn: 'Mon–Fri: 8:30am–5:30pm\nFree consultations by appointment',
      hoursEs: 'Lun–Vie: 8:30am–5:30pm\nConsultas gratuitas con cita previa',
    },
  ]

  const officeIds: Record<string, string | number> = {}

  for (const seed of officeSeeds) {
    const existing = await payload.find({ collection: 'offices', where: { name: { equals: seed.name } }, limit: 1 })
    const doc =
      existing.docs[0] ||
      (await payload.create({
        collection: 'offices',
        data: { name: seed.name, phone: seed.phone, address: seed.address, hours: seed.hoursEn },
      }))
    await payload.update({ collection: 'offices', id: doc.id, locale: 'es', data: { hours: seed.hoursEs } })
    officeIds[seed.name] = doc.id
    console.log(`  ✓ Office: ${seed.name}`)
  }

  // ---------------------------------------------------------------
  // Practice Areas
  // ---------------------------------------------------------------
  const practiceAreaSeeds = [
    {
      slug: 'personal-injury',
      en: {
        name: 'Personal Injury',
        intro:
          'If someone else\u2019s carelessness left you hurt, you deserve a straight answer about what your case is worth \u2014 and an attorney who stays on the phone until you have it.',
        body: lexicalParagraphs([
          'Edgar P. Lombera has represented accident victims across the Inland Empire and Coachella Valley for more than 15 years \u2014 car, truck, motorcycle, rideshare, and pedestrian accidents among them.',
          'The firm works on contingency: no fee unless we recover money for you, and case costs are advanced and reimbursed from the settlement or verdict.',
          'Every consultation, case update, and settlement discussion happens directly with Edgar \u2014 not a paralegal, not a call center.',
        ]),
      },
      es: {
        name: 'Lesiones Personales',
        intro:
          'Si la negligencia de alguien más lo dejó lesionado, usted merece una respuesta clara sobre el valor de su caso \u2014 y un abogado que no cuelgue el teléfono hasta dársela.',
        body: lexicalParagraphs([
          'Edgar P. Lombera ha representado a víctimas de accidentes en el Inland Empire y el Valle de Coachella durante más de 15 años \u2014 accidentes de auto, camión, motocicleta, Uber/Lyft y peatones, entre ellos.',
          'El despacho trabaja por contingencia: no paga honorarios a menos que recuperemos dinero para usted, y los costos del caso se adelantan y se reembolsan del acuerdo o veredicto.',
          'Cada consulta, actualización de caso y conversación sobre un acuerdo se maneja directamente con Edgar \u2014 no con un paralegal, no con un centro de llamadas.',
        ]),
      },
    },
    {
      slug: 'bankruptcy',
      en: {
        name: 'Bankruptcy',
        intro:
          'Wage garnishment, foreclosure, and creditor calls can be stopped \u2014 often immediately. Edgar walks you through exactly what Chapter 7 or Chapter 13 would mean for your home, your car, and your paycheck.',
        body: lexicalParagraphs([
          'Filing bankruptcy triggers an automatic stay that halts foreclosure, wage garnishment, and most collection calls right away.',
          'Chapter 7 can eliminate qualifying unsecured debt in as little as four months. Chapter 13 restructures debt over three to five years while protecting your home and other property.',
          'California\u2019s exemptions protect most essential property in both chapters \u2014 Edgar reviews your specific situation in a free, confidential consultation before you decide anything.',
        ]),
      },
      es: {
        name: 'Bancarrota',
        intro:
          'El embargo de salario, la ejecución hipotecaria y las llamadas de acreedores se pueden detener \u2014 a menudo de inmediato. Edgar le explica exactamente qué significaría el Capítulo 7 o el Capítulo 13 para su casa, su auto y su salario.',
        body: lexicalParagraphs([
          'Presentar bancarrota activa una suspensión automática que detiene de inmediato la ejecución hipotecaria, el embargo de salario y la mayoría de las llamadas de cobro.',
          'El Capítulo 7 puede eliminar deudas no garantizadas calificadas en tan solo cuatro meses. El Capítulo 13 reestructura la deuda durante tres a cinco años mientras protege su casa y otras propiedades.',
          'Las exenciones de California protegen la mayoría de las propiedades esenciales en ambos capítulos \u2014 Edgar revisa su situación específica en una consulta gratuita y confidencial antes de que usted decida algo.',
        ]),
      },
    },
  ]

  const practiceAreaIds: Record<string, string | number> = {}

  for (const seed of practiceAreaSeeds) {
    const existing = await payload.find({ collection: 'practice-areas', where: { slug: { equals: seed.slug } }, limit: 1 })
    const doc =
      existing.docs[0] ||
      (await payload.create({ collection: 'practice-areas', data: { slug: seed.slug, ...seed.en } }))
    await payload.update({ collection: 'practice-areas', id: doc.id, locale: 'es', data: seed.es })
    practiceAreaIds[seed.slug] = doc.id
    console.log(`  ✓ Practice area: ${seed.slug}`)
  }

  // ---------------------------------------------------------------
  // Services
  // ---------------------------------------------------------------
  const serviceSeeds: { slug: string; practiceArea: string; titleEn: string; titleEs: string }[] = [
    { slug: 'car-accidents', practiceArea: 'personal-injury', titleEn: 'Car Accidents', titleEs: 'Accidentes de Auto' },
    { slug: 'truck-accidents', practiceArea: 'personal-injury', titleEn: 'Truck Accidents', titleEs: 'Accidentes de Camión' },
    { slug: 'motorcycle-accidents', practiceArea: 'personal-injury', titleEn: 'Motorcycle Accidents', titleEs: 'Accidentes de Motocicleta' },
    { slug: 'rideshare-accidents', practiceArea: 'personal-injury', titleEn: 'Rideshare Accidents', titleEs: 'Accidentes de Uber/Lyft' },
    { slug: 'pedestrian-accidents', practiceArea: 'personal-injury', titleEn: 'Pedestrian Accidents', titleEs: 'Accidentes de Peatones' },
    { slug: 'slip-and-fall', practiceArea: 'personal-injury', titleEn: 'Slip & Fall', titleEs: 'Resbalones y Caídas' },
    { slug: 'wrongful-death', practiceArea: 'personal-injury', titleEn: 'Wrongful Death', titleEs: 'Muerte Injusta' },
    { slug: 'chapter-7', practiceArea: 'bankruptcy', titleEn: 'Chapter 7 Bankruptcy', titleEs: 'Bancarrota Capítulo 7' },
    { slug: 'chapter-13', practiceArea: 'bankruptcy', titleEn: 'Chapter 13 Bankruptcy', titleEs: 'Bancarrota Capítulo 13' },
    { slug: 'foreclosure-defense', practiceArea: 'bankruptcy', titleEn: 'Foreclosure Defense', titleEs: 'Defensa de Ejecución Hipotecaria' },
    { slug: 'wage-garnishment', practiceArea: 'bankruptcy', titleEn: 'Wage Garnishment Defense', titleEs: 'Defensa de Embargo de Salario' },
  ]

  for (const s of serviceSeeds) {
    const existing = await payload.find({ collection: 'services', where: { slug: { equals: s.slug } }, limit: 1 })
    const doc =
      existing.docs[0] ||
      (await payload.create({
        collection: 'services',
        data: { slug: s.slug, title: s.titleEn, practiceArea: practiceAreaIds[s.practiceArea] },
      }))
    await payload.update({ collection: 'services', id: doc.id, locale: 'es', data: { title: s.titleEs } })
  }
  console.log(`  ✓ ${serviceSeeds.length} services`)

  // ---------------------------------------------------------------
  // Attorney: Edgar P. Lombera
  // ---------------------------------------------------------------
  const existingAttorney = await payload.find({ collection: 'attorneys', where: { slug: { equals: 'edgar-lombera' } }, limit: 1 })
  const attorneyDoc =
    existingAttorney.docs[0] ||
    (await payload.create({
      collection: 'attorneys',
      data: {
        name: 'Edgar P. Lombera',
        slug: 'edgar-lombera',
        barNumber: '',
        yearsPracticing: 15,
        languages: ['English', 'Spanish'],
        credentials: [{ item: 'State Bar of California' }, { item: 'Western State College of Law' }],
        bio: lexicalParagraphs([
          'Edgar P. Lombera founded this practice on a simple idea: the people who need an attorney the most are often the people who feel most powerless walking into a law office.',
          'For more than 15 years, Edgar has represented working families across the Inland Empire and Coachella Valley \u2014 fighting insurance companies after accidents, defending homes against foreclosure, and helping clients eliminate debt that has followed them for years.',
          'Every client at this firm talks directly to Edgar. Not a paralegal, not an intake screener \u2014 the attorney himself, in English or Spanish, from the first call to the final resolution.',
          'Edgar is a graduate of Western State College of Law and a member in good standing of the State Bar of California.',
        ]),
      },
    }))
  await payload.update({
    collection: 'attorneys',
    id: attorneyDoc.id,
    locale: 'es',
    data: {
      bio: lexicalParagraphs([
        'Edgar P. Lombera fundó este despacho sobre una idea simple: las personas que más necesitan un abogado son a menudo las que se sienten más impotentes al entrar a un despacho legal.',
        'Durante más de 15 años, Edgar ha representado a familias trabajadoras en el Inland Empire y el Valle de Coachella \u2014 luchando contra compañías de seguros después de accidentes, defendiendo hogares contra la ejecución hipotecaria y ayudando a clientes a eliminar deudas que los han seguido durante años.',
        'Cada cliente de este despacho habla directamente con Edgar. No con un paralegal, no con un evaluador de admisión \u2014 el abogado mismo, en inglés o español, desde la primera llamada hasta la resolución final.',
        'Edgar se graduó de Western State College of Law y es miembro en buen estado del Colegio de Abogados del Estado de California.',
      ]),
    },
  })
  console.log('  ✓ Attorney: Edgar P. Lombera')

  // ---------------------------------------------------------------
  // Testimonials (placeholders — replace with verified, permissioned
  // reviews before launch; do not publish scraped review text as-is)
  // ---------------------------------------------------------------
  const testimonialSeeds = [
    {
      author: 'Redlands client',
      ratingEn: 'Edgar stopped a wage garnishment right away and called back personally every time I had a question.',
      ratingEs: 'Edgar detuvo un embargo de salario de inmediato y me devolvió la llamada personalmente cada vez que tuve una pregunta.',
      practiceArea: 'bankruptcy',
    },
    {
      author: 'Palm Springs client',
      ratingEn: 'He explained every step of my case in Spanish and never made me feel rushed.',
      ratingEs: 'Me explicó cada paso de mi caso en español y nunca me hizo sentir apurado.',
      practiceArea: 'personal-injury',
    },
  ]

  for (const seed of testimonialSeeds) {
    const existing = await payload.find({ collection: 'testimonials', where: { author: { equals: seed.author } }, limit: 1 })
    const doc =
      existing.docs[0] ||
      (await payload.create({
        collection: 'testimonials',
        data: {
          author: seed.author,
          quote: seed.ratingEn,
          rating: 5,
          featured: true,
          practiceArea: practiceAreaIds[seed.practiceArea],
          source: 'Google',
        },
      }))
    await payload.update({ collection: 'testimonials', id: doc.id, locale: 'es', data: { quote: seed.ratingEs } })
  }
  console.log(`  ✓ ${testimonialSeeds.length} testimonials (placeholder — swap for verified reviews before launch)`)

  // ---------------------------------------------------------------
  // Cities
  // NOTE: courthouse/hospital names below are well-known public
  // landmarks, but court branch assignments change over time.
  // Flagged for staff to verify before these go live on money pages
  // -- wrong courthouse info on a law firm site is a real problem,
  // not just a typo.
  // ---------------------------------------------------------------
  const citySeeds = [
    { slug: 'riverside', name: 'Riverside', county: 'Riverside County' as const, office: 'Redlands Office', courthouse: 'Riverside County Superior Court — Historic Courthouse, downtown Riverside (verify current branch for your case type)', highways: ['I-215', 'SR-91', 'SR-60'] },
    { slug: 'san-bernardino', name: 'San Bernardino', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — San Bernardino District (verify current branch for your case type)', highways: ['I-215', 'I-10'] },
    { slug: 'redlands', name: 'Redlands', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — San Bernardino District (verify current branch for your case type)', highways: ['I-10', 'SR-38'] },
    { slug: 'moreno-valley', name: 'Moreno Valley', county: 'Riverside County' as const, office: 'Redlands Office', courthouse: 'Riverside County Superior Court — Riverside District (verify current branch for your case type)', highways: ['SR-60', 'SR-215'] },
    { slug: 'fontana', name: 'Fontana', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — Fontana District (verify current branch for your case type)', highways: ['I-10', 'I-15'] },
    { slug: 'ontario', name: 'Ontario', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — Rancho Cucamonga District (verify current branch for your case type)', highways: ['I-10', 'I-15'] },
    { slug: 'palm-springs', name: 'Palm Springs', county: 'Riverside County' as const, office: 'Palm Springs Office', courthouse: 'Riverside County Superior Court — Larson Justice Center, Indio (verify current branch for your case type)', highways: ['I-10', 'SR-111'] },
    { slug: 'palm-desert', name: 'Palm Desert', county: 'Riverside County' as const, office: 'Palm Springs Office', courthouse: 'Riverside County Superior Court — Larson Justice Center, Indio (verify current branch for your case type)', highways: ['I-10', 'SR-111'] },
    { slug: 'indio', name: 'Indio', county: 'Riverside County' as const, office: 'Palm Springs Office', courthouse: 'Riverside County Superior Court — Larson Justice Center, Indio (verify current branch for your case type)', highways: ['I-10', 'SR-111'] },
    { slug: 'cathedral-city', name: 'Cathedral City', county: 'Riverside County' as const, office: 'Palm Springs Office', courthouse: 'Riverside County Superior Court — Larson Justice Center, Indio (verify current branch for your case type)', highways: ['I-10', 'SR-111'] },
    { slug: 'la-quinta', name: 'La Quinta', county: 'Riverside County' as const, office: 'Palm Springs Office', courthouse: 'Riverside County Superior Court — Larson Justice Center, Indio (verify current branch for your case type)', highways: ['I-10', 'SR-111'] },
    { slug: 'rancho-mirage', name: 'Rancho Mirage', county: 'Riverside County' as const, office: 'Palm Springs Office', courthouse: 'Riverside County Superior Court — Larson Justice Center, Indio (verify current branch for your case type)', highways: ['I-10', 'SR-111'] },
  ]

  const cityIds: Record<string, string | number> = {}

  for (const c of citySeeds) {
    const existing = await payload.find({ collection: 'cities', where: { slug: { equals: c.slug } }, limit: 1 })
    const doc =
      existing.docs[0] ||
      (await payload.create({
        collection: 'cities',
        data: {
          name: c.name,
          slug: c.slug,
          county: c.county,
          servingOffice: officeIds[c.office],
          courthouse: c.courthouse,
          highways: c.highways.map((name) => ({ name })),
        },
      }))
    cityIds[c.slug] = doc.id
  }
  console.log(`  ✓ ${citySeeds.length} cities (courthouse assignments flagged -- verify before publishing money pages)`)

  // Nearby-city relationships, set after all cities exist
  const nearbyMap: Record<string, string[]> = {
    riverside: ['moreno-valley', 'san-bernardino', 'redlands'],
    'san-bernardino': ['redlands', 'fontana', 'riverside'],
    redlands: ['san-bernardino', 'riverside', 'fontana'],
    'moreno-valley': ['riverside', 'redlands'],
    fontana: ['ontario', 'san-bernardino'],
    ontario: ['fontana', 'san-bernardino'],
    'palm-springs': ['cathedral-city', 'rancho-mirage', 'palm-desert'],
    'palm-desert': ['palm-springs', 'rancho-mirage', 'la-quinta'],
    indio: ['la-quinta', 'palm-desert', 'cathedral-city'],
    'cathedral-city': ['palm-springs', 'rancho-mirage'],
    'la-quinta': ['indio', 'palm-desert'],
    'rancho-mirage': ['palm-springs', 'palm-desert'],
  }
  for (const [slug, nearbySlugs] of Object.entries(nearbyMap)) {
    const id = cityIds[slug]
    if (!id) continue
    await payload.update({
      collection: 'cities',
      id,
      data: { nearbyCities: nearbySlugs.map((s) => cityIds[s]).filter(Boolean) },
    })
  }
  console.log('  ✓ nearby-city links')

  // ---------------------------------------------------------------
  // FAQs (starter set -- expand per service/city as content grows)
  // ---------------------------------------------------------------
  const faqSeeds = [
    {
      q: 'How much does it cost to hire Edgar for a personal injury case?',
      qEs: '¿Cuánto cuesta contratar a Edgar para un caso de lesiones personales?',
      a: 'Nothing up front. Personal injury cases are handled on contingency -- there is no fee unless we recover money for you.',
      aEs: 'Nada por adelantado. Los casos de lesiones personales se manejan por contingencia -- no hay honorarios a menos que recuperemos dinero para usted.',
      service: 'car-accidents',
    },
    {
      q: 'Will filing bankruptcy stop wage garnishment immediately?',
      qEs: '¿Presentar bancarrota detendrá el embargo de salario de inmediato?',
      a: 'In most cases, yes. Filing triggers an automatic stay that halts wage garnishment right away, though timing can depend on how quickly your employer processes the notice.',
      aEs: 'En la mayoría de los casos, sí. Presentar la solicitud activa una suspensión automática que detiene el embargo de salario de inmediato, aunque el momento puede depender de qué tan rápido su empleador procese el aviso.',
      service: 'wage-garnishment',
    },
    {
      q: 'Do I need to speak English to work with this firm?',
      qEs: '¿Necesito hablar inglés para trabajar con este despacho?',
      a: 'No. Edgar handles every consultation and case update personally in English or Spanish, whichever you prefer.',
      aEs: 'No. Edgar maneja cada consulta y actualización de caso personalmente en inglés o español, lo que usted prefiera.',
      service: 'chapter-7',
    },
  ]

  for (const f of faqSeeds) {
    const svc = await payload.find({ collection: 'services', where: { slug: { equals: f.service } }, limit: 1 })
    const existing = await payload.find({ collection: 'faqs', where: { question: { equals: f.q } }, limit: 1 })
    const doc =
      existing.docs[0] ||
      (await payload.create({
        collection: 'faqs',
        data: {
          question: f.q,
          answer: lexicalParagraphs([f.a]),
          services: svc.docs[0] ? [svc.docs[0].id] : [],
          showOnGeneralFAQPage: true,
        },
      }))
    await payload.update({
      collection: 'faqs',
      id: doc.id,
      locale: 'es',
      data: { question: f.qEs, answer: lexicalParagraphs([f.aEs]) },
    })
  }
  console.log(`  ✓ ${faqSeeds.length} FAQs`)

  // ---------------------------------------------------------------
  // Tier-1 Service x City money pages
  // Selective, not exhaustive -- only the highest-intent service x
  // city combinations get a full dedicated page (see the local-SEO
  // tier matrix in the IA doc). Content below is templated but
  // genuinely city-specific (pulls each city's real courthouse/
  // highway data). Treat as a strong starter draft -- expand with
  // more unique local color per page before a heavy SEO push.
  // ---------------------------------------------------------------
  const tier1Services = ['car-accidents', 'chapter-7', 'chapter-13']
  const tier1Cities = ['riverside', 'san-bernardino', 'palm-springs', 'palm-desert', 'indio', 'redlands']

  function piMoneyBody(cityName: string) {
    return {
      en: lexicalParagraphs([
        `If you were hurt in a crash in or around ${cityName}, the first call should be to a lawyer who already knows the local roads, the local insurance adjusters, and the local court -- not a national call center.`,
        `Edgar handles every ${cityName}-area case personally, from the first conversation through settlement or trial. There is no fee unless we recover money for you.`,
        `We work with the medical providers, tow yards, and police departments in the area every day, which means less time chasing paperwork and more time focused on your recovery.`,
      ]),
      es: lexicalParagraphs([
        `Si resultó herido en un accidente en o cerca de ${cityName}, la primera llamada debe ser a un abogado que ya conozca las carreteras locales, los ajustadores de seguros locales y la corte local -- no un centro de llamadas nacional.`,
        `Edgar maneja personalmente cada caso del área de ${cityName}, desde la primera conversación hasta el acuerdo o el juicio. No hay honorarios a menos que recuperemos dinero para usted.`,
        `Trabajamos todos los días con los proveedores médicos, los depósitos de remolque y los departamentos de policía de la zona, lo que significa menos tiempo persiguiendo papeleo y más tiempo enfocado en su recuperación.`,
      ]),
    }
  }

  function bkMoneyBody(cityName: string, chapterLabel: string) {
    return {
      en: lexicalParagraphs([
        `Families in ${cityName} facing wage garnishment, collection calls, or foreclosure have real options under ${chapterLabel} -- and the sooner you talk to an attorney, the more of those options stay open.`,
        `Edgar reviews your specific situation in a free, confidential consultation and explains exactly what ${chapterLabel} would mean for your home, your car, and your paycheck before you decide anything.`,
        `Every consultation and case update happens directly with Edgar, in English or Spanish, from the first call to discharge.`,
      ]),
      es: lexicalParagraphs([
        `Las familias en ${cityName} que enfrentan embargo de salario, llamadas de cobro o ejecución hipotecaria tienen opciones reales bajo el ${chapterLabel} -- y cuanto antes hable con un abogado, más opciones seguirán abiertas.`,
        `Edgar revisa su situación específica en una consulta gratuita y confidencial y le explica exactamente qué significaría el ${chapterLabel} para su casa, su auto y su salario antes de que usted decida algo.`,
        `Cada consulta y actualización de caso se maneja directamente con Edgar, en inglés o español, desde la primera llamada hasta la resolución del caso.`,
      ]),
    }
  }

  let moneyPageCount = 0
  for (const serviceSlug of tier1Services) {
    const svcRes = await payload.find({ collection: 'services', where: { slug: { equals: serviceSlug } }, limit: 1 })
    const svc = svcRes.docs[0]
    if (!svc) continue

    for (const citySlugKey of tier1Cities) {
      const cityRes = await payload.find({ collection: 'cities', where: { slug: { equals: citySlugKey } }, limit: 1 })
      const city = cityRes.docs[0]
      if (!city) continue

      const existing = await payload.find({
        collection: 'service-city-pages',
        where: { service: { equals: svc.id }, city: { equals: city.id } },
        limit: 1,
      })
      if (existing.docs.length > 0) continue

      const isBankruptcy = serviceSlug === 'chapter-7' || serviceSlug === 'chapter-13'
      const chapterLabel = serviceSlug === 'chapter-7' ? 'Chapter 7' : 'Chapter 13'
      const chapterLabelEs = serviceSlug === 'chapter-7' ? 'Capítulo 7' : 'Capítulo 13'
      const body = isBankruptcy ? bkMoneyBody(city.name as string, chapterLabel) : piMoneyBody(city.name as string)

      const titleEn = isBankruptcy
        ? `${city.name} ${chapterLabel} Bankruptcy Attorney`
        : `${city.name} Car Accident Lawyer`
      const titleEs = isBankruptcy
        ? `Abogado de Bancarrota ${chapterLabelEs} en ${city.name}`
        : `Abogado de Accidentes de Auto en ${city.name}`

      const doc = await payload.create({
        collection: 'service-city-pages',
        data: {
          title: titleEn,
          service: svc.id,
          city: city.id,
          tier: 'tier1',
          localBody: body.en,
        },
      })
      await payload.update({
        collection: 'service-city-pages',
        id: doc.id,
        locale: 'es',
        data: { title: titleEs, localBody: body.es },
      })
      moneyPageCount++
    }
  }
  console.log(`  ✓ ${moneyPageCount} tier-1 money pages (service x city)`)

  const generalFaqSeeds = [
    {
      q: 'Do you offer free consultations?',
      qEs: '¿Ofrecen consultas gratuitas?',
      a: 'Yes. Every initial consultation is free and confidential, whether by phone or in person at either office.',
      aEs: 'Sí. Cada consulta inicial es gratuita y confidencial, ya sea por teléfono o en persona en cualquiera de las oficinas.',
    },
    {
      q: 'What areas does the firm serve?',
      qEs: '¿Qué áreas atiende el despacho?',
      a: 'The firm serves the Inland Empire and Coachella Valley from offices in Redlands and Palm Springs, including Riverside, San Bernardino, Palm Desert, Indio, and surrounding cities.',
      aEs: 'El despacho atiende el Inland Empire y el Valle de Coachella desde oficinas en Redlands y Palm Springs, incluyendo Riverside, San Bernardino, Palm Desert, Indio y ciudades cercanas.',
    },
  ]
  for (const f of generalFaqSeeds) {
    const existing = await payload.find({ collection: 'faqs', where: { question: { equals: f.q } }, limit: 1 })
    const doc =
      existing.docs[0] ||
      (await payload.create({
        collection: 'faqs',
        data: { question: f.q, answer: lexicalParagraphs([f.a]), showOnGeneralFAQPage: true },
      }))
    await payload.update({
      collection: 'faqs',
      id: doc.id,
      locale: 'es',
      data: { question: f.qEs, answer: lexicalParagraphs([f.aEs]) },
    })
  }
  console.log(`  ✓ ${generalFaqSeeds.length} general FAQs`)

  // ---------------------------------------------------------------
  // Starter resource post -- links down to money pages per the
  // internal linking rule (no dead-end blog content).
  // ---------------------------------------------------------------
  const attorneyRes = await payload.find({ collection: 'attorneys', where: { slug: { equals: 'edgar-lombera' } }, limit: 1 })
  const carAccidentsRes = await payload.find({ collection: 'services', where: { slug: { equals: 'car-accidents' } }, limit: 1 })

  const existingPost = await payload.find({ collection: 'posts', where: { slug: { equals: 'what-to-do-after-a-car-accident' } }, limit: 1 })
  const postDoc =
    existingPost.docs[0] ||
    (await payload.create({
      collection: 'posts',
      data: {
        title: 'What to Do in the First 24 Hours After a Car Accident',
        slug: 'what-to-do-after-a-car-accident',
        excerpt: 'The steps you take right after a crash can affect your health, your claim, and what you recover.',
        author: attorneyRes.docs[0]?.id,
        relatedServices: carAccidentsRes.docs[0] ? [carAccidentsRes.docs[0].id] : [],
        publishedAt: new Date().toISOString(),
        body: lexicalParagraphs([
          'Get medical attention first, even if you feel fine. Some injuries, especially soft-tissue and head injuries, do not show symptoms right away, and a medical record close to the time of the crash matters later.',
          'Call the police and get a report number, even for a minor-seeming collision. Exchange insurance information, and photograph the vehicles, the road, and any visible injuries before anything is moved.',
          'Be careful what you say to the other driver\u2019s insurance company. You are not required to give a recorded statement right away, and anything you say can be used to reduce what you are eventually offered.',
          'Talk to an attorney before you sign anything from an insurance company. A quick settlement offer in the first few days is often far less than a case is actually worth once the full extent of an injury is known.',
        ]),
      },
    }))
  await payload.update({
    collection: 'posts',
    id: postDoc.id,
    locale: 'es',
    data: {
      title: 'Qué Hacer en las Primeras 24 Horas Después de un Accidente de Auto',
      excerpt: 'Los pasos que tome justo después de un choque pueden afectar su salud, su reclamo y lo que recupere.',
      body: lexicalParagraphs([
        'Busque atención médica primero, incluso si se siente bien. Algunas lesiones, especialmente de tejido blando y de cabeza, no muestran síntomas de inmediato, y un registro médico cercano al momento del choque importa después.',
        'Llame a la policía y obtenga un número de reporte, incluso para una colisión que parezca menor. Intercambie información del seguro y fotografíe los vehículos, la carretera y cualquier lesión visible antes de que se mueva algo.',
        'Tenga cuidado con lo que le dice a la compañía de seguros del otro conductor. No está obligado a dar una declaración grabada de inmediato, y cualquier cosa que diga puede usarse para reducir lo que eventualmente le ofrezcan.',
        'Hable con un abogado antes de firmar algo de una compañía de seguros. Una oferta de acuerdo rápida en los primeros días suele ser mucho menor de lo que un caso realmente vale una vez que se conoce el alcance completo de una lesión.',
      ]),
    },
  })
  console.log('  ✓ Starter resource post')

  // ---------------------------------------------------------------
  // Site Settings
  // ---------------------------------------------------------------
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      firmName: 'Law Offices of Edgar P. Lombera',
      defaultMetaTitle: 'Personal Injury & Bankruptcy Attorney | Redlands & Palm Springs',
      defaultMetaDescription:
        'Bilingual personal injury and bankruptcy attorney serving the Inland Empire and Coachella Valley. Free consultation.',
      googleReviewUrl: '',
    },
  })
  console.log('  ✓ Site settings')

  console.log('\nDone. Visit /admin to review and refine.')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
