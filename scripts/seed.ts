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
    await payload.update({
      collection: 'offices',
      id: doc.id,
      data: { name: seed.name, phone: seed.phone, address: seed.address, hours: seed.hoursEn },
    })
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
    await payload.update({ collection: 'practice-areas', id: doc.id, data: seed.en })
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
      bodyEn: lexicalParagraphs([
        'Whether you were a passenger, a driver, or in another vehicle entirely, a rideshare crash raises a question most people don\u2019t expect to have to answer: which insurance policy actually applies? Uber and Lyft carry different coverage depending on whether the driver had the app off, on and waiting for a ride, or actively transporting a passenger \u2014 and the company\u2019s own coverage during an active trip can reach $1 million.',
        'Edgar investigates the driver\u2019s app status at the moment of the crash, identifies every policy that may apply, and pursues the coverage that actually reflects what happened \u2014 rather than accepting whatever the rideshare company\u2019s insurer offers first.',
        'This firm has represented rideshare accident victims across the Inland Empire and Coachella Valley for more than 15 years, and every case is prepared with the thoroughness it takes to go to trial if the insurer won\u2019t offer a fair number.',
        'There is no fee unless we recover money for you. The first consultation is free and confidential, and you\u2019ll be speaking with Edgar directly.',
      ]),
      bodyEs: lexicalParagraphs([
        'Ya sea que usted haya sido pasajero, conductor, u ocupante de otro vehículo, un choque de Uber o Lyft plantea una pregunta que la mayoría de la gente no espera tener que responder: ¿qué póliza de seguro aplica realmente? Uber y Lyft tienen cobertura diferente dependiendo de si el conductor tenía la aplicación apagada, encendida y esperando un viaje, o transportando activamente a un pasajero \u2014 y la propia cobertura de la empresa durante un viaje activo puede llegar a $1 millón.',
        'Edgar investiga el estado de la aplicación del conductor en el momento del choque, identifica cada póliza que pueda aplicar, y persigue la cobertura que realmente refleja lo que pasó \u2014 en lugar de aceptar lo primero que ofrezca la aseguradora de la empresa de transporte.',
        'Este despacho ha representado a víctimas de accidentes de Uber/Lyft en el Inland Empire y el Valle de Coachella durante más de 15 años, y cada caso se prepara con la minuciosidad que se necesita para ir a juicio si la aseguradora no ofrece una cifra justa.',
        'No hay honorarios a menos que recuperemos dinero para usted. La primera consulta es gratuita y confidencial, y usted hablará directamente con Edgar.',
      ]),
    },
    {
      slug: 'traumatic-brain-injury',
      practiceArea: 'personal-injury',
      titleEn: 'Traumatic Brain Injury',
      titleEs: 'Lesión Cerebral Traumática',
      order: 40,
      summaryEn: 'TBI cases require medical documentation and expert testimony most insurance adjusters hope you never gather.',
      summaryEs: 'Los casos de lesión cerebral traumática requieren documentación médica y testimonio de expertos que la mayoría de los ajustadores de seguros esperan que usted nunca reúna.',
      bodyEn: lexicalParagraphs([
        'A traumatic brain injury often doesn\u2019t look like much from the outside \u2014 no cast, no visible scar \u2014 which is exactly why insurance companies are quick to dispute how serious it really is. The effects show up over weeks and months: memory problems, personality changes, difficulty concentrating, headaches that don\u2019t resolve. A case built only on the emergency room bill misses most of what a TBI actually costs a person.',
        'Edgar works with neurologists and neuropsychologists to properly document the injury\u2019s real scope, and stays engaged with treating physicians over the course of recovery rather than settling before the full picture is known.',
        'This firm has handled traumatic brain injury cases across the Inland Empire and Coachella Valley for more than 15 years, preparing every case as if it is going to trial \u2014 because insurers take documentation more seriously when they know the firm is ready to prove it in court.',
        'There is no fee unless we recover money for you, and every consultation and case decision happens directly with Edgar.',
      ]),
      bodyEs: lexicalParagraphs([
        'Una lesión cerebral traumática a menudo no se ve como algo grave desde afuera \u2014 sin yeso, sin cicatriz visible \u2014 y por eso las compañías de seguros son rápidas para cuestionar qué tan grave es realmente. Los efectos aparecen a lo largo de semanas y meses: problemas de memoria, cambios de personalidad, dificultad para concentrarse, dolores de cabeza que no se resuelven. Un caso construido solo con la factura de la sala de emergencias pierde la mayor parte de lo que una lesión cerebral realmente le cuesta a una persona.',
        'Edgar trabaja con neurólogos y neuropsicólogos para documentar adecuadamente el alcance real de la lesión, y se mantiene en contacto con los médicos tratantes durante el proceso de recuperación en lugar de llegar a un acuerdo antes de conocer el panorama completo.',
        'Este despacho ha manejado casos de lesión cerebral traumática en el Inland Empire y el Valle de Coachella durante más de 15 años, preparando cada caso como si fuera a juicio \u2014 porque las aseguradoras toman la documentación más en serio cuando saben que el despacho está listo para probarlo en la corte.',
        'No hay honorarios a menos que recuperemos dinero para usted, y cada consulta y decisión del caso se maneja directamente con Edgar.',
      ]),
    },
    {
      slug: 'spinal-cord-injury',
      practiceArea: 'personal-injury',
      titleEn: 'Spinal Cord Injury',
      titleEs: 'Lesión de la Médula Espinal',
      order: 50,
      summaryEn: 'A spinal cord injury often means a lifetime of care -- your case should account for every year of it, not just the first.',
      summaryEs: 'Una lesión de la médula espinal a menudo significa toda una vida de cuidados -- su caso debe tener en cuenta cada año de ella, no solo el primero.',
      bodyEn: lexicalParagraphs([
        'A spinal cord injury changes what a home, a car, and a daily routine need to look like \u2014 sometimes permanently. Wheelchairs, home modifications, personal care assistance, and ongoing medical treatment are not one-time costs; they recur for the rest of a person\u2019s life. A settlement that only covers the first year of care leaves a family to cover everything after that alone.',
        'Edgar works with life-care planners and economists to calculate the actual lifetime cost of a spinal cord injury \u2014 not an estimate based on today\u2019s bills, but a real projection of what the years ahead will require.',
        'This firm has represented spinal cord injury victims across the Inland Empire and Coachella Valley for more than 15 years, and prepares every case as if it is going to trial, because insurers offer differently when they know a firm is ready to prove the full cost in court.',
        'There is no fee unless we recover money for you. The first consultation is free and confidential, and you will be speaking with Edgar directly.',
      ]),
      bodyEs: lexicalParagraphs([
        'Una lesión de la médula espinal cambia cómo debe ser un hogar, un auto y una rutina diaria \u2014 a veces de forma permanente. Las sillas de ruedas, las modificaciones del hogar, la asistencia de cuidado personal y el tratamiento médico continuo no son costos únicos; se repiten por el resto de la vida de una persona. Un acuerdo que solo cubre el primer año de cuidados deja a una familia para cubrir todo lo demás sola.',
        'Edgar trabaja con planificadores de cuidado de por vida y economistas para calcular el costo real de por vida de una lesión de la médula espinal \u2014 no una estimación basada en las facturas de hoy, sino una proyección real de lo que requerirán los años venideros.',
        'Este despacho ha representado a víctimas de lesiones de la médula espinal en el Inland Empire y el Valle de Coachella durante más de 15 años, y prepara cada caso como si fuera a juicio, porque las aseguradoras ofrecen de manera diferente cuando saben que un despacho está listo para probar el costo completo en la corte.',
        'No hay honorarios a menos que recuperemos dinero para usted. La primera consulta es gratuita y confidencial, y usted hablará directamente con Edgar.',
      ]),
    },
    {
      slug: 'wrongful-death',
      practiceArea: 'personal-injury',
      titleEn: 'Wrongful Death',
      titleEs: 'Muerte Injusta',
      order: 60,
      summaryEn: 'No settlement can undo the loss. What it can do is hold the responsible party fully accountable.',
      summaryEs: 'Ningún acuerdo puede deshacer la pérdida. Lo que sí puede hacer es responsabilizar completamente a la parte responsable.',
      bodyEn: lexicalParagraphs([
        'No amount of money changes what happened. What a wrongful death claim can do is hold the responsible party fully accountable, and provide real financial stability for the family left behind \u2014 lost income, lost support, funeral costs, and the value of a relationship that should not have been cut short.',
        'Edgar handles these cases personally and directly, with the understanding that a grieving family shouldn\u2019t have to manage a legal fight on top of everything else. He identifies every party who bears responsibility \u2014 not just the most obvious one \u2014 and builds the case with the same thoroughness whether it resolves through negotiation or trial.',
        'This firm has represented families across the Inland Empire and Coachella Valley for more than 15 years. There is no fee unless we recover money for you, and the first consultation is free and confidential.',
      ]),
      bodyEs: lexicalParagraphs([
        'Ninguna cantidad de dinero cambia lo que sucedió. Lo que un reclamo por muerte injusta sí puede hacer es responsabilizar completamente a la parte responsable, y brindar una estabilidad financiera real para la familia que queda \u2014 ingresos perdidos, apoyo perdido, costos funerarios y el valor de una relación que no debió terminar de esa manera.',
        'Edgar maneja estos casos de manera personal y directa, entendiendo que una familia en duelo no debería tener que manejar una batalla legal además de todo lo demás. Él identifica a cada parte que tiene responsabilidad \u2014 no solo la más obvia \u2014 y construye el caso con la misma minuciosidad, ya sea que se resuelva mediante negociación o juicio.',
        'Este despacho ha representado a familias en el Inland Empire y el Valle de Coachella durante más de 15 años. No hay honorarios a menos que recuperemos dinero para usted, y la primera consulta es gratuita y confidencial.',
      ]),
    },
    {
      slug: 'medical-malpractice',
      practiceArea: 'personal-injury',
      titleEn: 'Medical Malpractice',
      titleEs: 'Negligencia Médica',
      order: 70,
      summaryEn: 'Medical malpractice cases are handled selectively and require early expert review -- California\u2019s deadlines and certificate-of-merit requirements move fast.',
      summaryEs: 'Los casos de negligencia médica se manejan de manera selectiva y requieren una revisión temprana de expertos -- los plazos de California y los requisitos de certificado de mérito avanzan rápido.',
      bodyEn: lexicalParagraphs([
        'Trusting a doctor or hospital and then discovering something went wrong is disorienting \u2014 and not every bad outcome is malpractice. A medical malpractice claim requires showing that a provider\u2019s care fell below the accepted standard, which is a different and higher bar than simply "the treatment didn\u2019t work."',
        'Edgar handles medical malpractice cases directly and personally, working with independent medical experts early \u2014 California law imposes strict early notice requirements and short deadlines in these cases, and waiting to talk to an attorney can close off options that were available at the start.',
        'This firm evaluates each potential medical malpractice case carefully before taking it on, because these cases require real expert support to prove. If your case is accepted, it is prepared with the same thoroughness as every other case this firm handles \u2014 ready for trial if that is what it takes.',
        'The first consultation is free and confidential, and there is no fee unless we recover money for you.',
      ]),
      bodyEs: lexicalParagraphs([
        'Confiar en un médico o hospital y luego descubrir que algo salió mal es desorientador \u2014 y no todo mal resultado es negligencia médica. Un reclamo por negligencia médica requiere demostrar que la atención de un proveedor estuvo por debajo del estándar aceptado, lo cual es un estándar diferente y más alto que simplemente "el tratamiento no funcionó."',
        'Edgar maneja los casos de negligencia médica de manera directa y personal, trabajando con expertos médicos independientes desde el principio \u2014 la ley de California impone requisitos estrictos de notificación temprana y plazos cortos en estos casos, y esperar para hablar con un abogado puede cerrar opciones que estaban disponibles al principio.',
        'Este despacho evalúa cuidadosamente cada posible caso de negligencia médica antes de aceptarlo, porque estos casos requieren apoyo experto real para probarse. Si su caso es aceptado, se prepara con la misma minuciosidad que cualquier otro caso que maneja este despacho \u2014 listo para juicio si eso es lo que se necesita.',
        'La primera consulta es gratuita y confidencial, y no hay honorarios a menos que recuperemos dinero para usted.',
      ]),
    },
    { slug: 'car-accidents', practiceArea: 'personal-injury', titleEn: 'Car Accidents', titleEs: 'Accidentes de Auto', order: 80 },
    { slug: 'motorcycle-accidents', practiceArea: 'personal-injury', titleEn: 'Motorcycle Accidents', titleEs: 'Accidentes de Motocicleta', order: 90 },
    { slug: 'pedestrian-accidents', practiceArea: 'personal-injury', titleEn: 'Pedestrian Accidents', titleEs: 'Accidentes de Peatones', order: 100 },
    // Bankruptcy
    {
      slug: 'chapter-7',
      practiceArea: 'bankruptcy',
      titleEn: 'Chapter 7 Bankruptcy',
      titleEs: 'Bancarrota Capítulo 7',
      order: 10,
      summaryEn: 'A fresh start from overwhelming debt, typically resolved in a matter of months.',
      summaryEs: 'Un nuevo comienzo frente a deudas abrumadoras, típicamente resuelto en cuestión de meses.',
      bodyEn: lexicalParagraphs([
        'When collection calls, credit card debt, and medical bills pile up faster than income can cover them, Chapter 7 offers a real reset \u2014 most unsecured debt discharged, typically within four to five months of filing.',
        'Edgar reviews your specific financial situation to determine whether you qualify (Chapter 7 has income limits) and walks you through exactly what property California law protects before you file anything \u2014 most people keep their essential property.',
        'This firm has guided families across the Inland Empire and Coachella Valley through Chapter 7 for more than 15 years. Every consultation and filing decision happens directly with Edgar, in English or Spanish.',
        'The first consultation is free and confidential.',
      ]),
      bodyEs: lexicalParagraphs([
        'Cuando las llamadas de cobro, la deuda de tarjetas de crédito y las facturas médicas se acumulan más rápido de lo que los ingresos pueden cubrir, el Capítulo 7 ofrece un reinicio real \u2014 la mayoría de la deuda no garantizada se elimina, típicamente dentro de cuatro a cinco meses de la presentación.',
        'Edgar revisa su situación financiera específica para determinar si usted califica (el Capítulo 7 tiene límites de ingresos) y le explica exactamente qué propiedad protege la ley de California antes de presentar cualquier documento \u2014 la mayoría de las personas conservan su propiedad esencial.',
        'Este despacho ha guiado a familias en el Inland Empire y el Valle de Coachella a través del Capítulo 7 durante más de 15 años. Cada consulta y decisión de presentación se maneja directamente con Edgar, en inglés o español.',
        'La primera consulta es gratuita y confidencial.',
      ]),
    },
    {
      slug: 'chapter-13',
      practiceArea: 'bankruptcy',
      titleEn: 'Chapter 13 Bankruptcy',
      titleEs: 'Bancarrota Capítulo 13',
      order: 20,
      summaryEn: 'A structured repayment plan that lets you catch up and keep what matters -- your home, your car, your stability.',
      summaryEs: 'Un plan de pago estructurado que le permite ponerse al día y conservar lo que importa -- su casa, su auto, su estabilidad.',
      bodyEn: lexicalParagraphs([
        'Chapter 13 is built for a different situation than Chapter 7: you have income to work with, but you\u2019re behind on a mortgage or car payment and need a structured way to catch up without losing what you\u2019ve worked for. A repayment plan spread over three to five years can bring past-due debt current while you keep the property.',
        'Edgar reviews your income, debts, and goals to determine whether Chapter 13 fits your situation better than Chapter 7, and builds a plan proposal that\u2019s realistic for your actual budget \u2014 not just technically compliant.',
        'This firm has guided families across the Inland Empire and Coachella Valley through Chapter 13 for more than 15 years, with every consultation and filing decision handled directly with Edgar.',
        'The first consultation is free and confidential.',
      ]),
      bodyEs: lexicalParagraphs([
        'El Capítulo 13 está diseñado para una situación diferente a la del Capítulo 7: usted tiene ingresos con los que trabajar, pero está atrasado en un pago de hipoteca o auto y necesita una forma estructurada de ponerse al día sin perder lo que ha logrado. Un plan de pago distribuido en tres a cinco años puede poner al día la deuda atrasada mientras usted conserva la propiedad.',
        'Edgar revisa sus ingresos, deudas y objetivos para determinar si el Capítulo 13 se ajusta mejor a su situación que el Capítulo 7, y construye una propuesta de plan que sea realista para su presupuesto real \u2014 no solo técnicamente conforme.',
        'Este despacho ha guiado a familias en el Inland Empire y el Valle de Coachella a través del Capítulo 13 durante más de 15 años, con cada consulta y decisión de presentación manejada directamente con Edgar.',
        'La primera consulta es gratuita y confidencial.',
      ]),
    },
    {
      slug: 'foreclosure-defense',
      practiceArea: 'bankruptcy',
      titleEn: 'Foreclosure Defense',
      titleEs: 'Defensa de Ejecución Hipotecaria',
      order: 30,
      summaryEn: 'The sooner you talk to an attorney after a notice of default, the more options stay open.',
      summaryEs: 'Cuanto antes hable con un abogado después de un aviso de incumplimiento, más opciones seguirán abiertas.',
      bodyEn: lexicalParagraphs([
        'A notice of default starts a clock, and it can feel like there\u2019s no way to stop it. Filing for bankruptcy triggers an automatic stay that immediately halts a foreclosure sale, giving real breathing room to work out a longer-term solution \u2014 whether that\u2019s a Chapter 13 repayment plan that catches up the mortgage over time, a loan modification, or another path entirely.',
        'Edgar reviews your specific timeline and mortgage situation to identify which options are actually still available \u2014 the earlier you talk to an attorney after a notice of default, the more of them remain open.',
        'This firm has helped families across the Inland Empire and Coachella Valley protect their homes for more than 15 years. Every consultation happens directly with Edgar, in English or Spanish.',
        'The first consultation is free and confidential \u2014 and if your sale date is close, say so when you call.',
      ]),
      bodyEs: lexicalParagraphs([
        'Un aviso de incumplimiento pone en marcha un reloj, y puede sentirse como si no hubiera forma de detenerlo. Presentar una bancarrota activa una suspensión automática que detiene inmediatamente una venta de ejecución hipotecaria, dando un respiro real para trabajar en una solución a más largo plazo \u2014 ya sea un plan de pago del Capítulo 13 que pone al día la hipoteca con el tiempo, una modificación de préstamo, u otro camino completamente distinto.',
        'Edgar revisa su cronograma específico y su situación hipotecaria para identificar qué opciones realmente siguen disponibles \u2014 mientras antes hable con un abogado después de un aviso de incumplimiento, más de ellas permanecen abiertas.',
        'Este despacho ha ayudado a familias en el Inland Empire y el Valle de Coachella a proteger sus hogares durante más de 15 años. Cada consulta se maneja directamente con Edgar, en inglés o español.',
        'La primera consulta es gratuita y confidencial \u2014 y si su fecha de venta está cerca, dígalo cuando llame.',
      ]),
    },
    {
      slug: 'wage-garnishment',
      practiceArea: 'bankruptcy',
      titleEn: 'Wage Garnishment Defense',
      titleEs: 'Defensa de Embargo de Salario',
      order: 40,
      summaryEn: 'An automatic stay can stop wage garnishment quickly -- often before your next paycheck.',
      summaryEs: 'Una suspensión automática puede detener el embargo de salario rápidamente -- a menudo antes de su próximo cheque de pago.',
      bodyEn: lexicalParagraphs([
        'Watching a chunk of every paycheck disappear to a garnishment order makes it harder to catch up on everything else, and the situation can feel like it\u2019s only getting worse. Filing for bankruptcy triggers an automatic stay that halts most wage garnishment quickly \u2014 the exact timing depends on how fast your employer processes the notice, but relief often arrives before your next check.',
        'Edgar reviews the underlying debt and your full financial picture to determine whether Chapter 7 or Chapter 13 fits your situation, and moves quickly once you decide to proceed \u2014 because every additional garnished paycheck is money you don\u2019t get back.',
        'This firm has helped families across the Inland Empire and Coachella Valley stop wage garnishment for more than 15 years. Every consultation happens directly with Edgar, in English or Spanish.',
        'The first consultation is free and confidential.',
      ]),
      bodyEs: lexicalParagraphs([
        'Ver que una parte de cada cheque de pago desaparece por una orden de embargo hace que sea más difícil ponerse al día con todo lo demás, y la situación puede sentirse como si solo empeorara. Presentar una bancarrota activa una suspensión automática que detiene la mayoría de los embargos de salario rápidamente \u2014 el momento exacto depende de qué tan rápido su empleador procese el aviso, pero el alivio a menudo llega antes de su próximo cheque.',
        'Edgar revisa la deuda subyacente y su panorama financiero completo para determinar si el Capítulo 7 o el Capítulo 13 se ajusta a su situación, y actúa rápidamente una vez que usted decide proceder \u2014 porque cada cheque adicional embargado es dinero que no recupera.',
        'Este despacho ha ayudado a familias en el Inland Empire y el Valle de Coachella a detener el embargo de salario durante más de 15 años. Cada consulta se maneja directamente con Edgar, en inglés o español.',
        'La primera consulta es gratuita y confidencial.',
      ]),
    },
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
  // Real testimonials, pulled directly from the current live site
  // (lomberalaw.com homepage + dedicated testimonials page) at
  // Jeff's request -- not fabricated. Scoped to bankruptcy only per
  // his explicit instruction, since the new site doesn't represent
  // immigration/family law/criminal defense. Light cleanup only
  // (typos, trimming redundant phrases) -- no rewritten substance,
  // matching the "real voice, not ghostwritten" standard agreed on.
  // Attribution kept to first name + last initial, matching the
  // privacy convention the live site's newer testimonials already
  // use. PERSONAL INJURY TESTIMONIALS ARE STILL MISSING -- neither
  // page checked had an unambiguous, clearly-attributed PI review;
  // the firm's actual Google Business Profile (271 reviews, cited
  // on the live homepage) is the real source for those and needs a
  // human to pull 2-3 directly from Google.
  const testimonialSeeds = [
    {
      author: 'Don C.',
      ratingEn:
        'Edgar Lombera is the best bankruptcy lawyer. I sought help from many different lawyers, but many didn\u2019t know how to help me. Edgar gave me step-by-step guidance with great patience and achieved what many others couldn\u2019t. 100% recommended.',
      ratingEs:
        'Edgar Lombera es el mejor abogado de bancarrota. Busqu\u00e9 ayuda de muchos abogados diferentes, pero muchos no sab\u00edan c\u00f3mo ayudarme. Edgar me dio orientaci\u00f3n paso a paso con mucha paciencia y logr\u00f3 lo que muchos otros no pudieron. 100% recomendado.',
      practiceArea: 'bankruptcy',
    },
    {
      author: 'Abraham D.',
      ratingEn:
        'Both Edgar and the staff were very kind and courteous. They helped every step of the way, were always accessible, and very professional. Their support was a big relief during a stressful time.',
      ratingEs:
        'Tanto Edgar como el personal fueron muy amables y corteses. Me ayudaron en cada paso del camino, siempre estuvieron disponibles y fueron muy profesionales. Su apoyo fue un gran alivio durante un momento estresante.',
      practiceArea: 'bankruptcy',
    },
    {
      author: 'Bill L.',
      ratingEn:
        'Mr. Lombera and team were very helpful and professional from start to finish. They worked with us to ensure our case went smoothly. They went above and beyond what was required or expected. We\u2019re very grateful for their services and assistance.',
      ratingEs:
        'El Sr. Lombera y su equipo fueron muy serviciales y profesionales de principio a fin. Trabajaron con nosotros para asegurarse de que nuestro caso avanzara sin problemas. Hicieron m\u00e1s de lo que se esperaba. Estamos muy agradecidos por sus servicios y asistencia.',
      practiceArea: 'bankruptcy',
    },
    {
      author: 'Jodi D.',
      ratingEn:
        'I cannot say enough positive things about Lombera Law. Edgar met with me and stopped a wage garnishment immediately. I had a million questions and concerns -- he called me back right away to answer all of them, and even worked with me on payments. Everyone in his office was kind, understanding, and available. I got a fresh start thanks to Edgar Lombera.',
      ratingEs:
        'No puedo decir suficientes cosas positivas sobre Lombera Law. Edgar se reuni\u00f3 conmigo y detuvo un embargo de salario de inmediato. Ten\u00eda un mill\u00f3n de preguntas e inquietudes -- y me devolvi\u00f3 la llamada de inmediato para responderlas todas, e incluso trabaj\u00f3 conmigo en los pagos. Todos en su oficina fueron amables, comprensivos y estuvieron disponibles. Tuve un nuevo comienzo gracias a Edgar Lombera.',
      practiceArea: 'bankruptcy',
    },
    {
      author: 'Miguel N.',
      ratingEn:
        'Mr. Lombera made my bankruptcy process very easy and stress-free. His staff were so caring and on top of everything. If you need an attorney, Lombera Law is who you need to contact.',
      ratingEs:
        'El Sr. Lombera hizo que mi proceso de bancarrota fuera muy f\u00e1cil y sin estr\u00e9s. Su personal fue muy atento y estuvo al tanto de todo. Si necesita un abogado, Lombera Law es a quien debe contactar.',
      practiceArea: 'bankruptcy',
    },
    {
      author: 'Stephen F.',
      ratingEn: 'Edgar did my Chapter 7 a few years ago and was 100 percent helpful throughout the whole thing. I highly recommend this guy.',
      ratingEs: 'Edgar hizo mi Cap\u00edtulo 7 hace unos a\u00f1os y fue 100 por ciento \u00fatil durante todo el proceso. Lo recomiendo ampliamente.',
      practiceArea: 'bankruptcy',
    },
    {
      author: 'Patricia T.',
      ratingEn:
        'Mr. Lombera helped me with a bankruptcy case. I am so grateful for his help. He is very knowledgeable, experienced, and a true gentleman. Thank you so much, Mr. Lombera.',
      ratingEs:
        'El Sr. Lombera me ayud\u00f3 con un caso de bancarrota. Estoy muy agradecida por su ayuda. Es muy conocedor, experimentado y todo un caballero. Muchas gracias, Sr. Lombera.',
      practiceArea: 'bankruptcy',
    },
    {
      author: 'Thanhya P.',
      ratingEn:
        'I was recommended by a friend to seek legal services from Edgar. It was a very stressful time for my husband and me. Edgar put us at ease, explained the process, and let us know he would take care of everything. He was there to answer questions and guide us through the bankruptcy process. Because of Edgar, we went through it without the fear and headaches that usually go along with it.',
      ratingEs:
        'Un amigo me recomend\u00f3 buscar los servicios legales de Edgar. Fue un momento muy estresante para mi esposo y para m\u00ed. Edgar nos tranquiliz\u00f3, nos explic\u00f3 el proceso, y nos hizo saber que \u00e9l se encargar\u00eda de todo. Estuvo disponible para responder preguntas y guiarnos a trav\u00e9s del proceso de bancarrota. Gracias a Edgar, pasamos por el proceso sin el miedo y los dolores de cabeza que normalmente lo acompa\u00f1an.',
      practiceArea: 'bankruptcy',
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
    await payload.update({
      collection: 'testimonials',
      id: doc.id,
      data: { author: seed.author, quote: seed.ratingEn, rating: 5, featured: true, practiceArea: practiceAreaIds[seed.practiceArea] },
    })
    await payload.update({ collection: 'testimonials', id: doc.id, locale: 'es', data: { quote: seed.ratingEs } })
  }
  console.log(`  ✓ ${testimonialSeeds.length} testimonials (real, bankruptcy only -- PI testimonials still needed from Google Business Profile)`)

  // Clean up the original placeholder testimonials from the very
  // first seed run tonight. The find-by-author-name pattern above
  // only ever adds or updates -- it never removes stale records
  // with a different author name, so these placeholders have been
  // sitting in the database this whole time, un-replaced, right
  // alongside the real ones. Since the homepage has no explicit
  // sort on the featured-testimonials query, it was showing
  // whichever came first by creation order -- these older
  // placeholders, not the real reviews. Explicitly removing them
  // (not just unfeaturing) since they were never real client
  // testimonials and shouldn't exist in the collection at all.
  for (const staleAuthor of ['Redlands client', 'Palm Springs client']) {
    const stale = await payload.find({ collection: 'testimonials', where: { author: { equals: staleAuthor } }, limit: 5 })
    for (const doc of stale.docs) {
      await payload.delete({ collection: 'testimonials', id: doc.id })
    }
  }
  console.log('  ✓ Removed placeholder testimonials from the original seed run')

  // ---------------------------------------------------------------
  // Cities
  // NOTE: courthouse/hospital names below are well-known public
  // landmarks, but court branch assignments change over time.
  // Flagged for staff to verify before these go live on money pages
  // -- wrong courthouse info on a law firm site is a real problem,
  // not just a typo.
  // ---------------------------------------------------------------
  const citySeeds = [
    { slug: 'riverside', name: 'Riverside', county: 'Riverside County' as const, office: 'Redlands Office', courthouse: 'Riverside County Superior Court — Riverside Historic Courthouse, 4050 Main Street, Riverside (verified via court records)', highways: ['I-215', 'SR-91', 'SR-60'] },
    { slug: 'san-bernardino', name: 'San Bernardino', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — Civil Division, San Bernardino Justice Center, 247 West Third Street, San Bernardino (verified: civil cases are centralized here countywide, not split by district)', highways: ['I-215', 'I-10'] },
    { slug: 'redlands', name: 'Redlands', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — Civil Division, San Bernardino Justice Center, 247 West Third Street, San Bernardino (Redlands\u2019 own branch was consolidated into this courthouse in 2014)', highways: ['I-10', 'SR-38'] },
    { slug: 'moreno-valley', name: 'Moreno Valley', county: 'Riverside County' as const, office: 'Redlands Office', courthouse: 'Riverside County Superior Court — Moreno Valley Courthouse, 13800 Heacock Street Bldg. D, Moreno Valley (verified: handles civil locally, does not route through downtown Riverside)', highways: ['SR-60', 'SR-215'] },
    { slug: 'fontana', name: 'Fontana', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — Civil Division, San Bernardino Justice Center, 247 West Third Street, San Bernardino (civil is centralized countywide)', highways: ['I-10', 'I-15'] },
    { slug: 'ontario', name: 'Ontario', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — Civil Division, San Bernardino Justice Center, 247 West Third Street, San Bernardino (civil is centralized countywide)', highways: ['I-10', 'I-15'] },
    { slug: 'palm-springs', name: 'Palm Springs', county: 'Riverside County' as const, office: 'Palm Springs Office', courthouse: 'Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way, Palm Springs (verified: handles civil and personal injury cases locally)', highways: ['I-10', 'SR-111'] },
    { slug: 'palm-desert', name: 'Palm Desert', county: 'Riverside County' as const, office: 'Palm Springs Office', courthouse: 'Riverside County Superior Court — Larson Justice Center, 46-200 Oasis Street, Indio (verify current branch for your specific case type)', highways: ['I-10', 'SR-111'] },
    { slug: 'indio', name: 'Indio', county: 'Riverside County' as const, office: 'Palm Springs Office', courthouse: 'Riverside County Superior Court — Larson Justice Center, 46-200 Oasis Street, Indio', highways: ['I-10', 'SR-111'] },
    { slug: 'cathedral-city', name: 'Cathedral City', county: 'Riverside County' as const, office: 'Palm Springs Office', courthouse: 'Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way, Palm Springs (nearest civil-handling branch; verify current branch for your specific case type)', highways: ['I-10', 'SR-111'] },
    { slug: 'la-quinta', name: 'La Quinta', county: 'Riverside County' as const, office: 'Palm Springs Office', courthouse: 'Riverside County Superior Court — Larson Justice Center, 46-200 Oasis Street, Indio (verify current branch for your specific case type)', highways: ['I-10', 'SR-111'] },
    { slug: 'rancho-mirage', name: 'Rancho Mirage', county: 'Riverside County' as const, office: 'Palm Springs Office', courthouse: 'Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way, Palm Springs (nearest civil-handling branch; verify current branch for your specific case type)', highways: ['I-10', 'SR-111'] },
    { slug: 'rialto', name: 'Rialto', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — Civil Division, San Bernardino Justice Center, 247 West Third Street, San Bernardino (civil is centralized countywide)', highways: ['I-10', 'I-215'] },
    { slug: 'highland', name: 'Highland', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — Civil Division, San Bernardino Justice Center, 247 West Third Street, San Bernardino (civil is centralized countywide)', highways: ['SR-210', 'SR-330'] },
    { slug: 'big-bear-lake', name: 'Big Bear Lake', county: 'San Bernardino County' as const, office: 'Redlands Office', courthouse: 'San Bernardino County Superior Court — Civil Division, San Bernardino Justice Center, 247 West Third Street, San Bernardino (no separate mountain-area civil branch found; verify current branch for your specific case type)', highways: ['SR-18', 'SR-330'] },
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
  // Redirects — populates the Payload collection purely for admin
  // visibility. The list itself lives in src/lib/legacyRedirects.mjs
  // and is what next.config.mjs actually uses to redirect visitors
  // (build-time, zero per-request cost) -- editing an entry here in
  // the database does NOT change live behavior. See that file's
  // header comment for the full explanation, and why this exists:
  // per Jeff, the original HTML site ranked #1 across most of the
  // service area; the move to WordPress lost that ranking for years
  // because redirects weren't handled carefully, and that's the
  // direct reason the firm started paying for ads. This is the
  // safeguard against that happening a second time.
  // ---------------------------------------------------------------
  // @ts-expect-error -- plain .mjs data file, no type declarations needed for a script
  const redirectSeeds = (await import('../src/lib/legacyRedirects.mjs')).legacyRedirects

  for (const r of redirectSeeds) {
    const existing = await payload.find({ collection: 'redirects', where: { from: { equals: r.from } }, limit: 1 })
    const existingDoc = existing.docs[0]
    if (existingDoc) {
      await payload.update({ collection: 'redirects', id: existingDoc.id, data: { to: r.to, type: '301' } })
    } else {
      await payload.create({ collection: 'redirects', data: { from: r.from, to: r.to, type: '301' } })
    }
  }
  console.log(`  ✓ ${redirectSeeds.length} redirects from the live site's real URLs`)

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
