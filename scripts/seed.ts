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
          'After a serious injury, the outcome often depends on how thoroughly the case is investigated and how prepared your attorney is to go to trial if the insurance company won\u2019t offer what it\u2019s truly worth.',
        body: lexicalParagraphs([
          'Edgar P. Lombera has represented injury victims across the Inland Empire and Coachella Valley for more than 15 years, with a focus on cases involving serious and catastrophic injury \u2014 commercial trucking accidents, rideshare collisions, traumatic brain and spinal cord injury, wrongful death, and medical malpractice.',
          'After a serious crash, the at-fault driver\u2019s insurance company is not on your side. Adjusters are trained to call within hours asking for a recorded statement, looking for anything that can be used to minimize or deny the claim \u2014 and the fast, lowball settlement offer that follows is usually a fraction of what the case is actually worth before the full extent of an injury is even known.',
          'California follows comparative negligence, meaning you can still recover compensation even if you share some fault for the crash \u2014 your recovery is reduced by your percentage of responsibility, not eliminated by it. Damages can include medical costs and future care, lost wages and earning capacity, pain and suffering, and in cases of extreme recklessness, punitive damages under California Civil Code \u00a73294.',
          'The firm works on contingency: no fee unless we recover money for you, and case costs are advanced and reimbursed from the settlement or verdict. Every case is prepared with the same thoroughness, whether it resolves through negotiation or trial \u2014 because the strength of a settlement offer usually depends on how ready you are to walk away from it.',
        ]),
      },
      es: {
        name: 'Lesiones Personales',
        intro:
          'Después de una lesión grave, el resultado a menudo depende de qué tan a fondo se investigue el caso y qué tan preparado esté su abogado para ir a juicio si la compañía de seguros no ofrece lo que realmente vale.',
        body: lexicalParagraphs([
          'Edgar P. Lombera ha representado a víctimas de lesiones en el Inland Empire y el Valle de Coachella durante más de 15 años, con un enfoque en casos de lesiones graves y catastróficas \u2014 accidentes de camiones comerciales, colisiones de Uber/Lyft, lesión cerebral traumática y de la médula espinal, muerte injusta y negligencia médica.',
          'Después de un choque grave, la compañía de seguros del conductor responsable no está de su lado. Los ajustadores están entrenados para llamar dentro de horas pidiendo una declaración grabada, buscando cualquier cosa que pueda usarse para minimizar o negar el reclamo \u2014 y la oferta de acuerdo rápida y baja que sigue generalmente es una fracción de lo que el caso realmente vale antes de que se conozca el alcance completo de una lesión.',
          'California sigue la negligencia comparativa, lo que significa que usted puede recuperar compensación incluso si comparte algo de culpa por el choque \u2014 su recuperación se reduce por su porcentaje de responsabilidad, no se elimina por ella. Los daños pueden incluir costos médicos y atención futura, salarios perdidos y capacidad de ingresos, dolor y sufrimiento, y en casos de negligencia extrema, daños punitivos bajo el Código Civil de California \u00a73294.',
          'El despacho trabaja por contingencia: no paga honorarios a menos que recuperemos dinero para usted, y los costos del caso se adelantan y se reembolsan del acuerdo o veredicto. Cada caso se prepara con el mismo nivel de minuciosidad, ya sea que se resuelva mediante negociación o juicio \u2014 porque la fuerza de una oferta de acuerdo generalmente depende de qué tan preparado esté usted para rechazarla.',
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
  const serviceSeeds: {
    slug: string
    practiceArea: string
    titleEn: string
    titleEs: string
    order: number
    summaryEn?: string
    summaryEs?: string
    bodyEn?: ReturnType<typeof lexicalParagraphs>
    bodyEs?: ReturnType<typeof lexicalParagraphs>
  }[] = [
    // Personal Injury -- ordered per the firm's positioning: serious/
    // catastrophic/commercial-negligence cases lead, routine auto
    // claims still exist for SEO capture but sit lower in the list.
    {
      slug: 'catastrophic-injury',
      practiceArea: 'personal-injury',
      titleEn: 'Catastrophic Injury',
      titleEs: 'Lesiones Catastróficas',
      order: 10,
      summaryEn: 'Life-changing injuries deserve a case built for the full scope of loss -- medical costs, lost earning capacity, and long-term care, prepared with trial-level thoroughness.',
      summaryEs: 'Las lesiones que cambian la vida merecen un caso construido para el alcance completo de la pérdida -- costos médicos, capacidad de ingresos perdida y cuidado a largo plazo, preparado con la minuciosidad de un juicio.',
      bodyEn: lexicalParagraphs([
        'A catastrophic injury does not resolve when the hospital discharges you. It follows you into every year that comes after -- ongoing treatment, equipment, therapy, and often the loss of the work you built your life around. A case that only accounts for the bills you have today will fall short of what the next twenty years actually cost.',
        'Edgar personally investigates every catastrophic injury case from the ground up: medical experts to project future care, economists to calculate lost earning capacity, and -- when the injury involved a commercial vehicle, a defective product, or medical negligence -- the corporate or institutional defendant\u2019s own safety and training records.',
        'This firm has represented catastrophic injury victims across the Inland Empire and Coachella Valley for more than 15 years. Every case is prepared as if it is going to trial, because insurance companies pay closer attention to the firms that are actually ready to go there.',
        'There is no fee unless we recover money for you. The first consultation is free and confidential, and you will be speaking with Edgar directly -- not a case manager.',
      ]),
      bodyEs: lexicalParagraphs([
        'Una lesión catastrófica no termina cuando le dan de alta en el hospital. Lo sigue durante cada año que viene después -- tratamiento continuo, equipo, terapia y a menudo la pérdida del trabajo sobre el cual construyó su vida. Un caso que solo tenga en cuenta las facturas de hoy se quedará corto frente a lo que realmente costarán los próximos veinte años.',
        'Edgar investiga personalmente cada caso de lesión catastrófica desde cero: expertos médicos para proyectar la atención futura, economistas para calcular la capacidad de ingresos perdida y -- cuando la lesión involucró un vehículo comercial, un producto defectuoso o negligencia médica -- los propios registros de seguridad y capacitación del demandado corporativo o institucional.',
        'Este despacho ha representado a víctimas de lesiones catastróficas en el Inland Empire y el Valle de Coachella durante más de 15 años. Cada caso se prepara como si fuera a juicio, porque las compañías de seguros prestan más atención a los despachos que realmente están dispuestos a llegar ahí.',
        'No hay honorarios a menos que recuperemos dinero para usted. La primera consulta es gratuita y confidencial, y usted hablará directamente con Edgar -- no con un administrador de casos.',
      ]),
    },
    {
      slug: 'truck-accidents',
      practiceArea: 'personal-injury',
      titleEn: 'Trucking & Commercial Vehicle Accidents',
      titleEs: 'Accidentes de Camiones y Vehículos Comerciales',
      order: 20,
      summaryEn: 'Commercial trucking cases involve larger insurance policies and more complex liability -- federal safety regulations, black box data, and corporate defendants.',
      summaryEs: 'Los casos de camiones comerciales involucran pólizas de seguro más grandes y responsabilidad más compleja -- regulaciones federales de seguridad, datos de caja negra y demandados corporativos.',
      bodyEn: lexicalParagraphs([
        'A fully loaded commercial truck can weigh 20 times more than a passenger car. When one causes a crash, the injuries are rarely minor -- and the case is never as simple as a routine collision. Trucking companies and their insurers know this, and they move fast to protect themselves before you\u2019ve even seen a doctor.',
        'Federal Motor Carrier Safety Administration regulations govern driver hours, vehicle maintenance, and company hiring practices -- and violations of those regulations are often the reason the crash happened at all. Edgar works to preserve black box data, driver logs, and maintenance records before they can be lost or destroyed, and investigates whether the trucking company itself bears responsibility, not just the driver.',
        'These cases typically involve a commercial insurance policy far larger than a standard auto policy -- which also means the company\u2019s legal team will fight harder to minimize what they pay. That is exactly why the case needs to be built for trial from day one, not for a quick settlement.',
        'There is no fee unless we recover money for you, and every consultation and case decision happens directly with Edgar.',
      ]),
      bodyEs: lexicalParagraphs([
        'Un camión comercial completamente cargado puede pesar 20 veces más que un automóvil de pasajeros. Cuando uno causa un choque, las lesiones rara vez son menores -- y el caso nunca es tan simple como una colisión de rutina. Las compañías de camiones y sus aseguradoras lo saben, y se mueven rápido para protegerse incluso antes de que usted haya visto a un médico.',
        'Las regulaciones de la Administración Federal de Seguridad de Transportistas Motorizados (FMCSA) rigen las horas de los conductores, el mantenimiento de los vehículos y las prácticas de contratación de las empresas -- y las violaciones de esas regulaciones a menudo son la razón por la que ocurrió el choque. Edgar trabaja para preservar los datos de la caja negra, los registros del conductor y los registros de mantenimiento antes de que se puedan perder o destruir, e investiga si la propia empresa de camiones tiene responsabilidad, no solo el conductor.',
        'Estos casos típicamente involucran una póliza de seguro comercial mucho más grande que una póliza de auto estándar -- lo que también significa que el equipo legal de la empresa luchará más para minimizar lo que paga. Por eso exactamente el caso debe construirse para un juicio desde el primer día, no para un acuerdo rápido.',
        'No hay honorarios a menos que recuperemos dinero para usted, y cada consulta y decisión del caso se maneja directamente con Edgar.',
      ]),
    },
    {
      slug: 'rideshare-accidents',
      practiceArea: 'personal-injury',
      titleEn: 'Rideshare Accidents',
      titleEs: 'Accidentes de Uber/Lyft',
      order: 30,
      summaryEn: 'Uber and Lyft crashes involve layered commercial insurance coverage that most firms never fully investigate.',
      summaryEs: 'Los choques de Uber y Lyft involucran cobertura de seguro comercial en capas que la mayoría de los despachos nunca investigan completamente.',
    },
    {
      slug: 'traumatic-brain-injury',
      practiceArea: 'personal-injury',
      titleEn: 'Traumatic Brain Injury',
      titleEs: 'Lesión Cerebral Traumática',
      order: 40,
      summaryEn: 'TBI cases require medical documentation and expert testimony most insurance adjusters hope you never gather.',
      summaryEs: 'Los casos de lesión cerebral traumática requieren documentación médica y testimonio de expertos que la mayoría de los ajustadores de seguros esperan que usted nunca reúna.',
    },
    {
      slug: 'spinal-cord-injury',
      practiceArea: 'personal-injury',
      titleEn: 'Spinal Cord Injury',
      titleEs: 'Lesión de la Médula Espinal',
      order: 50,
      summaryEn: 'A spinal cord injury often means a lifetime of care -- your case should account for every year of it, not just the first.',
      summaryEs: 'Una lesión de la médula espinal a menudo significa toda una vida de cuidados -- su caso debe tener en cuenta cada año de ella, no solo el primero.',
    },
    {
      slug: 'wrongful-death',
      practiceArea: 'personal-injury',
      titleEn: 'Wrongful Death',
      titleEs: 'Muerte Injusta',
      order: 60,
      summaryEn: 'No settlement can undo the loss. What it can do is hold the responsible party fully accountable.',
      summaryEs: 'Ningún acuerdo puede deshacer la pérdida. Lo que sí puede hacer es responsabilizar completamente a la parte responsable.',
    },
    {
      slug: 'medical-malpractice',
      practiceArea: 'personal-injury',
      titleEn: 'Medical Malpractice',
      titleEs: 'Negligencia Médica',
      order: 70,
      summaryEn: 'Medical malpractice cases are handled selectively and require early expert review -- California\u2019s deadlines and certificate-of-merit requirements move fast.',
      summaryEs: 'Los casos de negligencia médica se manejan de manera selectiva y requieren una revisión temprana de expertos -- los plazos de California y los requisitos de certificado de mérito avanzan rápido.',
    },
    { slug: 'car-accidents', practiceArea: 'personal-injury', titleEn: 'Car Accidents', titleEs: 'Accidentes de Auto', order: 80 },
    { slug: 'motorcycle-accidents', practiceArea: 'personal-injury', titleEn: 'Motorcycle Accidents', titleEs: 'Accidentes de Motocicleta', order: 90 },
    { slug: 'pedestrian-accidents', practiceArea: 'personal-injury', titleEn: 'Pedestrian Accidents', titleEs: 'Accidentes de Peatones', order: 100 },
    // Bankruptcy
    { slug: 'chapter-7', practiceArea: 'bankruptcy', titleEn: 'Chapter 7 Bankruptcy', titleEs: 'Bancarrota Capítulo 7', order: 10 },
    { slug: 'chapter-13', practiceArea: 'bankruptcy', titleEn: 'Chapter 13 Bankruptcy', titleEs: 'Bancarrota Capítulo 13', order: 20 },
    { slug: 'foreclosure-defense', practiceArea: 'bankruptcy', titleEn: 'Foreclosure Defense', titleEs: 'Defensa de Ejecución Hipotecaria', order: 30 },
    { slug: 'wage-garnishment', practiceArea: 'bankruptcy', titleEn: 'Wage Garnishment Defense', titleEs: 'Defensa de Embargo de Salario', order: 40 },
  ]

  for (const s of serviceSeeds) {
    const existing = await payload.find({ collection: 'services', where: { slug: { equals: s.slug } }, limit: 1 })
    const doc =
      existing.docs[0] ||
      (await payload.create({
        collection: 'services',
        data: {
          slug: s.slug,
          title: s.titleEn,
          practiceArea: practiceAreaIds[s.practiceArea],
          displayOrder: s.order,
          summary: s.summaryEn,
          ...(s.bodyEn ? { body: s.bodyEn } : {}),
        },
      }))
    // Update title/order/summary/body even on existing docs so
    // re-running the seed after a content update applies it.
    await payload.update({
      collection: 'services',
      id: doc.id,
      data: {
        title: s.titleEn,
        displayOrder: s.order,
        ...(s.summaryEn ? { summary: s.summaryEn } : {}),
        ...(s.bodyEn ? { body: s.bodyEn } : {}),
      },
    })
    if (s.summaryEs) {
      await payload.update({
        collection: 'services',
        id: doc.id,
        locale: 'es',
        data: { title: s.titleEs, summary: s.summaryEs, ...(s.bodyEs ? { body: s.bodyEs } : {}) },
      })
    } else {
      await payload.update({ collection: 'services', id: doc.id, locale: 'es', data: { title: s.titleEs } })
    }
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
          'This is a small firm by design. On personal injury cases, clients work directly with Edgar \u2014 in English or Spanish \u2014 from the first consultation through resolution, rather than being handed to a case manager.',
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
        'Este es un despacho pequeño por diseño. En los casos de lesiones personales, los clientes trabajan directamente con Edgar \u2014 en inglés o español \u2014 desde la primera consulta hasta la resolución, en lugar de ser transferidos a un administrador de casos.',
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
    { slug: 'rialto', name: 'Rialto', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — San Bernardino District (verify current branch for your case type)', highways: ['I-10', 'I-215'] },
    { slug: 'highland', name: 'Highland', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — San Bernardino District (verify current branch for your case type)', highways: ['SR-210', 'SR-330'] },
    { slug: 'big-bear-lake', name: 'Big Bear Lake', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — mountain-area branch (verify current branch for your case type; confirm whether Big Bear cases route through San Bernardino District)', highways: ['SR-18', 'SR-330'] },
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
    'san-bernardino': ['redlands', 'fontana', 'highland', 'rialto', 'riverside'],
    redlands: ['san-bernardino', 'highland', 'riverside', 'fontana'],
    'moreno-valley': ['riverside', 'redlands'],
    fontana: ['ontario', 'rialto', 'san-bernardino'],
    ontario: ['fontana', 'san-bernardino'],
    'palm-springs': ['cathedral-city', 'rancho-mirage', 'palm-desert'],
    'palm-desert': ['palm-springs', 'rancho-mirage', 'la-quinta'],
    indio: ['la-quinta', 'palm-desert', 'cathedral-city'],
    'cathedral-city': ['palm-springs', 'rancho-mirage'],
    'la-quinta': ['indio', 'palm-desert'],
    'rancho-mirage': ['palm-springs', 'palm-desert'],
    rialto: ['fontana', 'san-bernardino'],
    highland: ['san-bernardino', 'redlands'],
    'big-bear-lake': ['redlands', 'san-bernardino'],
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
  const tier1Services = ['truck-accidents', 'catastrophic-injury', 'car-accidents', 'chapter-7', 'chapter-13']
  const tier1Cities = ['riverside', 'san-bernardino', 'palm-springs', 'palm-desert', 'indio', 'redlands']

  function truckingMoneyBody(cityName: string) {
    return {
      en: lexicalParagraphs([
        `A commercial truck crash in or around ${cityName} is not the same case as a routine fender-bender -- it usually means a larger insurance policy, a corporate defendant, and federal safety regulations that most firms never fully investigate.`,
        `Edgar handles every ${cityName}-area trucking case personally, working to preserve black box data, driver logs, and maintenance records before they disappear. There is no fee unless we recover money for you.`,
        `These cases are prepared as if they are going to trial from day one -- because that is what it takes to get a fair number from a company with every incentive to minimize what you're owed.`,
      ]),
      es: lexicalParagraphs([
        `Un choque con un camión comercial en o cerca de ${cityName} no es el mismo caso que un choque de rutina -- generalmente significa una póliza de seguro más grande, un demandado corporativo y regulaciones federales de seguridad que la mayoría de los despachos nunca investigan completamente.`,
        `Edgar maneja personalmente cada caso de camiones del área de ${cityName}, trabajando para preservar los datos de la caja negra, los registros del conductor y los registros de mantenimiento antes de que desaparezcan. No hay honorarios a menos que recuperemos dinero para usted.`,
        `Estos casos se preparan como si fueran a juicio desde el primer día -- porque eso es lo que se necesita para obtener una cifra justa de una empresa con todo el incentivo para minimizar lo que se le debe.`,
      ]),
    }
  }

  function carAccidentMoneyBody(cityName: string) {
    return {
      en: lexicalParagraphs([
        `If you were hurt in a crash in or around ${cityName}, the first call should be to a lawyer who already knows the local roads, the local insurance adjusters, and the local court -- not a national call center.`,
        `On personal injury cases, you work directly with Edgar -- from the first conversation through settlement or trial. There is no fee unless we recover money for you.`,
        `And if your crash involved a commercial vehicle, a rideshare driver, or serious injuries, those cases are handled differently -- with larger insurance policies and more complex liability at stake. That is exactly the kind of case this firm is built for.`,
      ]),
      es: lexicalParagraphs([
        `Si resultó herido en un accidente en o cerca de ${cityName}, la primera llamada debe ser a un abogado que ya conozca las carreteras locales, los ajustadores de seguros locales y la corte local -- no un centro de llamadas nacional.`,
        `En los casos de lesiones personales, usted trabaja directamente con Edgar -- desde la primera conversación hasta el acuerdo o el juicio. No hay honorarios a menos que recuperemos dinero para usted.`,
        `Y si su choque involucró un vehículo comercial, un conductor de Uber o Lyft, o lesiones graves, esos casos se manejan de manera diferente -- con pólizas de seguro más grandes y una responsabilidad más compleja en juego. Ese es exactamente el tipo de caso para el que este despacho está construido.`,
      ]),
    }
  }

  function catastrophicMoneyBody(cityName: string) {
    return {
      en: lexicalParagraphs([
        `A catastrophic injury in ${cityName} changes the math on what a case is worth -- future medical care, lost earning capacity, and long-term support all have to be accounted for, not just the first round of bills.`,
        `Edgar personally reviews every catastrophic injury case from the ${cityName} area in a free, confidential consultation, and prepares each one with the depth it takes to go to trial if the insurance company won't offer what it's truly worth.`,
        `There is no fee unless we recover money for you, and every consultation and case update happens directly with Edgar -- in English or Spanish.`,
      ]),
      es: lexicalParagraphs([
        `Una lesión catastrófica en ${cityName} cambia el cálculo de lo que vale un caso -- la atención médica futura, la capacidad de ingresos perdida y el apoyo a largo plazo deben tenerse en cuenta, no solo la primera ronda de facturas.`,
        `Edgar revisa personalmente cada caso de lesión catastrófica del área de ${cityName} en una consulta gratuita y confidencial, y prepara cada uno con la profundidad que se necesita para ir a juicio si la compañía de seguros no ofrece lo que realmente vale.`,
        `No hay honorarios a menos que recuperemos dinero para usted, y cada consulta y actualización de caso se maneja directamente con Edgar -- en inglés o español.`,
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

      let body: { en: ReturnType<typeof lexicalParagraphs>; es: ReturnType<typeof lexicalParagraphs> }
      let titleEn: string
      let titleEs: string

      if (isBankruptcy) {
        body = bkMoneyBody(city.name as string, chapterLabel)
        titleEn = `${city.name} ${chapterLabel} Bankruptcy Attorney`
        titleEs = `Abogado de Bancarrota ${chapterLabelEs} en ${city.name}`
      } else if (serviceSlug === 'truck-accidents') {
        body = truckingMoneyBody(city.name as string)
        titleEn = `${city.name} Truck Accident Attorney`
        titleEs = `Abogado de Accidentes de Camión en ${city.name}`
      } else if (serviceSlug === 'car-accidents') {
        body = carAccidentMoneyBody(city.name as string)
        titleEn = `${city.name} Car Accident Lawyer`
        titleEs = `Abogado de Accidentes de Auto en ${city.name}`
      } else {
        body = catastrophicMoneyBody(city.name as string)
        titleEn = `${city.name} Catastrophic Injury Attorney`
        titleEs = `Abogado de Lesiones Catastróficas en ${city.name}`
      }

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
