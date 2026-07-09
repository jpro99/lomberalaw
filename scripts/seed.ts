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
