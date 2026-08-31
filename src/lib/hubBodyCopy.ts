import type { Locale } from './payload'

export type CopySection = {
  h2: string
  paragraphs: string[]
}

export type PageCopy = {
  h1: string
  lead?: string[]
  sections: CopySection[]
  next?: string
}

export const HOME_COPY: Record<Locale, PageCopy> = {
  en: {
    h1: 'Lombera Law — Attorneys in Redlands and Palm Springs',
    lead: [
      'Lombera Law is the Law Offices of Edgar Lombera — a bilingual firm with a staffed office in Redlands and another in Palm Springs. Founding attorney Edgar P. Lombera has practiced more than 15 years. The docket is limited to two areas: personal injury and bankruptcy. The first meeting is free, in English or Spanish, and you speak with him — not an intake screener.',
    ],
    sections: [
      {
        h2: 'Personal Injury — No Fee Unless We Win',
        paragraphs: [
          'Personal injury is the crash-and-recovery side of the firm. That means car, truck, motorcycle, rideshare, pedestrian, and bicycle wrecks, plus dog bites, brain injury, spinal cord injury, and wrongful death. Injury cases run on contingency: no fee unless we win. If a wreck left you with medical bills and time off work, start on the personal injury page.',
        ],
      },
      {
        h2: 'Bankruptcy — Chapter 7 and Chapter 13',
        paragraphs: [
          'Bankruptcy is the debt-and-home side. Chapter 7 can wipe out many credit cards and hospital bills. Chapter 13 is the court plan that lets many homeowners catch up on the mortgage. The firm also handles foreclosure defense and wage garnishment. Consumer cases file at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside. We are a debt relief agency. We help people file for bankruptcy relief under the Bankruptcy Code.',
        ],
      },
      {
        h2: 'Why Both Practices Live in One Firm',
        paragraphs: [
          'The two practices live in one firm because they often start as one problem. A wreck on the I-10 can create medical debt that a wage levy then tries to collect. The same lawyer who is already in the medical records can walk you through Chapter 7 or Chapter 13 if the bills cannot wait for the injury case to finish. You do not have to retell the story to a second office.',
        ],
      },
      {
        h2: 'Two Offices — Inland Empire and Coachella Valley',
        paragraphs: [
          'Redlands sits at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374, (909) 915-0181, for San Bernardino County and the western Inland Empire. Palm Springs sits at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262, (760) 835-9353, for the Coachella Valley.',
        ],
      },
      {
        h2: 'Meet Edgar P. Lombera',
        paragraphs: [
          'Founding attorney Edgar P. Lombera has practiced more than 15 years. The docket is limited to two areas: personal injury and bankruptcy. The first meeting is free, in English or Spanish, and you speak with him — not an intake screener.',
        ],
      },
      {
        h2: 'Hours and How to Reach Us',
        paragraphs: [
          'Hours are Monday–Friday 9am–6pm, Saturday 10am–4pm, and Sunday by appointment. Serious injuries get a 24/7 emergency consult.',
        ],
      },
    ],
    next: 'Open the card that matches your problem — injury or bankruptcy — or call the nearer office and ask for Edgar.',
  },
  es: {
    h1: 'Oficina Legal de Edgar Lombera — Redlands y Palm Springs',
    lead: [
      'Lombera Law es la Oficina Legal de Edgar Lombera — un despacho bilingüe con oficina con personal en Redlands y otra en Palm Springs. El abogado fundador Edgar P. Lombera lleva más de 15 años en ejercicio. El expediente se limita a dos áreas: lesiones personales y bancarrota. La primera reunión es gratuita, en inglés o español, y habla con él — no con un filtro de llamadas.',
    ],
    sections: [
      {
        h2: 'Lesiones personales — sin honorarios a menos que ganemos',
        paragraphs: [
          'Las lesiones personales son el lado de choques y recuperación del despacho. Eso incluye accidentes de auto, camión, motocicleta, rideshare, peatón y bicicleta, además de mordeduras de perro, lesión cerebral, lesión de médula espinal y muerte injusta. Los casos de lesiones son a contingencia: no paga honorarios a menos que ganemos. Si un choque le dejó facturas médicas y tiempo sin trabajar, comience en la página de lesiones personales.',
        ],
      },
      {
        h2: 'Bancarrota — Capítulo 7 y Capítulo 13',
        paragraphs: [
          'La bancarrota es el lado de deudas y vivienda. El Capítulo 7 puede eliminar muchas tarjetas de crédito y facturas hospitalarias. El Capítulo 13 es el plan judicial que permite a muchos propietarios ponerse al día con la hipoteca. El despacho también maneja defensa de ejecución hipotecaria y embargo de salario. Los casos de consumidores se presentan en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota.',
        ],
      },
      {
        h2: 'Por qué las dos prácticas están en un solo despacho',
        paragraphs: [
          'Las dos prácticas conviven en un solo despacho porque muchas veces empiezan como un solo problema. Un choque en la I-10 puede generar deuda médica que luego un embargo de salario intenta cobrar. El mismo abogado que ya está en los expedientes médicos puede orientarle sobre el Capítulo 7 o el Capítulo 13 si las facturas no pueden esperar a que termine el caso de lesiones. No tiene que repetir su historia en una segunda oficina.',
        ],
      },
      {
        h2: 'Dos oficinas — Inland Empire y Valle de Coachella',
        paragraphs: [
          'Redlands está en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374, (909) 915-0181, para el condado de San Bernardino y el Inland Empire occidental. Palm Springs está en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262, (760) 835-9353, para el Valle de Coachella.',
        ],
      },
      {
        h2: 'Conozca a Edgar P. Lombera',
        paragraphs: [
          'El abogado fundador Edgar P. Lombera lleva más de 15 años en ejercicio. El expediente se limita a dos áreas: lesiones personales y bancarrota. La primera reunión es gratuita, en inglés o español, y habla con él — no con un filtro de llamadas.',
        ],
      },
      {
        h2: 'Horario y cómo contactarnos',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm y domingo con cita. Lesiones graves tienen consulta de emergencia las 24 horas.',
        ],
      },
    ],
    next: 'Abra la tarjeta que coincida con su problema — lesiones o bancarrota — o llame a la oficina más cercana y pida a Edgar.',
  },
}

export const PI_HUB_COPY: Record<Locale, PageCopy> = {
  en: {
    h1: 'Inland Empire personal injury lawyer',
    lead: [
      'If another driver’s negligence left you hurt in San Bernardino County or Riverside County, this is the claim page — not the brand homepage. Edgar P. Lombera takes Inland Empire injury files on contingency from 2068 Orange Tree Lane, Suite 220 in Redlands and 1276 N Palm Canyon Dr #107 in Palm Springs. The first consult is free, in English or Spanish. You talk to him.',
    ],
    sections: [
      {
        h2: 'What This Firm Handles',
        paragraphs: [
          'The live services are car, truck, motorcycle, and rideshare wrecks on those roads, plus pedestrian cases, dog bites, traumatic brain injury, spinal cord injury, and wrongful death. Bicycle wrecks are taken as well. Slip-and-fall and product-liability claims are referred to other firms; they are not practices this office handles.',
        ],
      },
      {
        h2: 'After a Crash on I-10, I-15, I-215, or Highway 111',
        paragraphs: [
          'The corridors that generate most of this work are I-10, I-15, I-215, and Highway 111 through the Coachella Valley.',
        ],
      },
      {
        h2: 'California Deadlines (CCP §335.1 and Gov. Code §911.2)',
        paragraphs: [
          'California Code of Civil Procedure §335.1 generally gives you two years from the date of injury to file a lawsuit. If a public entity is involved — a city vehicle, a county road crew, a state-highway issue — Government Code §911.2 usually requires a written claim within six months. Missing either clock can end the case before discovery starts. Call while the photos, the crash report, and the witness names still exist.',
        ],
      },
      {
        h2: 'How a Contingency Fee Works',
        paragraphs: [
          'Contingency means the office advances the work and is paid from a recovery. No fee unless we win. That is different from a bankruptcy filing, where the court charges its own fee and the attorney fee is quoted before a petition goes in. Injury clients do not pay a retainer to open the file.',
        ],
      },
      {
        h2: 'Inland Empire and Coachella Valley Offices',
        paragraphs: [
          'Two offices keep the file local. Redlands at (909) 915-0181 covers the I-10 east of the 15 and San Bernardino County streets. Palm Springs at (760) 835-9353 covers Highway 111 and valley cities. Hours are Monday–Friday 9am–6pm and Saturday 10am–4pm; Sunday is by appointment. Serious injuries can reach the office after hours for an emergency consult.',
        ],
      },
    ],
  },
  es: {
    h1: 'Abogado de Lesiones Personales en el Inland Empire',
    lead: [
      'Si la negligencia de otro conductor le dejó lesionado en el condado de San Bernardino o Riverside, esta es la página del reclamo — no la portada de la firma. Edgar P. Lombera acepta expedientes de lesiones del Inland Empire a contingencia desde 2068 Orange Tree Lane, Suite 220 en Redlands y 1276 N Palm Canyon Dr #107 en Palm Springs. La primera consulta es gratuita, en inglés o español. Usted habla con él.',
    ],
    sections: [
      {
        h2: 'Qué maneja este despacho',
        paragraphs: [
          'Los servicios activos son choques de auto, camión, motocicleta y rideshare en esas carreteras, además de casos de peatones, mordeduras de perro, lesión cerebral traumática, lesión de médula espinal y muerte injusta. También se aceptan choques de bicicleta. Los reclamos por resbalones y caídas y responsabilidad de productos se derivan a otros despachos; no son prácticas de esta oficina.',
        ],
      },
      {
        h2: 'Después de un choque en la I-10, I-15, I-215 o Carretera 111',
        paragraphs: [
          'Los corredores que generan la mayor parte de este trabajo son la I-10, la I-15, la I-215 y la Carretera 111 a través del Valle de Coachella.',
        ],
      },
      {
        h2: 'Plazos en California (CCP §335.1 y Código de Gobierno §911.2)',
        paragraphs: [
          'El Código de Procedimiento Civil de California §335.1 generalmente le da dos años desde la fecha de la lesión para presentar una demanda. Si interviene una entidad pública — un vehículo municipal, una cuadrilla del condado, un problema en carretera estatal — el Código de Gobierno §911.2 suele exigir un reclamo por escrito dentro de seis meses. Perder cualquiera de esos plazos puede terminar el caso antes de que empiece el descubrimiento. Llame mientras las fotos, el reporte del choque y los nombres de testigos aún existan.',
        ],
      },
      {
        h2: 'Cómo funciona la tarifa a contingencia',
        paragraphs: [
          'Contingencia significa que la oficina adelanta el trabajo y cobra de una recuperación. Sin honorarios a menos que ganemos. Eso es distinto de una bancarrota, donde el tribunal cobra su propia tarifa y los honorarios del abogado se cotizan antes de presentar la petición. Los clientes de lesiones no pagan anticipo para abrir el expediente.',
        ],
      },
      {
        h2: 'Oficinas del Inland Empire y Valle de Coachella',
        paragraphs: [
          'Dos oficinas mantienen el expediente local. Redlands al (909) 915-0181 cubre la I-10 al este del 15 y las calles del condado de San Bernardino. Palm Springs al (760) 835-9353 cubre la Carretera 111 y las ciudades del valle. Horario: lunes a viernes 9am–6pm y sábado 10am–4pm; domingo con cita. Lesiones graves pueden contactar la oficina fuera de horario para consulta de emergencia.',
        ],
      },
    ],
  },
}

export const BK_HUB_COPY: Record<Locale, PageCopy> = {
  en: {
    h1: 'Bankruptcy Lawyer for the Inland Empire',
    lead: [
      'When the bills are credit cards, hospital statements, a wage levy, or a foreclosure notice, the tool is federal — not a private settlement club. Lombera Law files Chapter 7 and Chapter 13 for families in San Bernardino County and Riverside County, including the Coachella Valley. The consult is free, in English or Spanish, with Edgar P. Lombera. We are a debt relief agency. We help people file for bankruptcy relief under the Bankruptcy Code.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — Wipe Out Unsecured Debt',
        paragraphs: [
          'Chapter 7 is the shorter case. If you pass the means test, many unsecured debts — cards, medical bills, personal loans — can be discharged in a few months.',
        ],
      },
      {
        h2: 'Chapter 13 — Catch Up and Keep the House',
        paragraphs: [
          'Chapter 13 is a three-to-five-year court plan. People use it to catch up on a mortgage, keep a house that Chapter 7 would not save, or file when income is too high for Chapter 7. Foreclosure defense and a stop on wage garnishment usually ride on the same petition.',
        ],
      },
      {
        h2: 'The Automatic Stay',
        paragraphs: [
          'The automatic stay is the first legal effect. The day the petition is filed, most garnishments, collection lawsuits, and foreclosure sales have to pause. That is why waiting for “next month” is the expensive choice: the stay cannot start until a case number exists.',
        ],
      },
      {
        h2: 'The Means Test and California’s Homestead',
        paragraphs: [
          'California’s homestead exemption is large enough that most Inland Empire filers keep the house; we confirm the current number in the consult. Do not guess equity from a website. The means test looks at household size and recent income. Both questions are answered with documents, not slogans, in the free meeting.',
        ],
      },
      {
        h2: 'Filed at the Riverside Bankruptcy Court',
        paragraphs: [
          'Every consumer case from these offices files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside. Court filing fees in 2026 are $338 for Chapter 7 and $313 for Chapter 13. Those are court charges, separate from attorney fees, which are explained before anything is filed. Redlands is (909) 915-0181. Palm Springs is (760) 835-9353.',
        ],
      },
    ],
  },
  es: {
    h1: 'Abogado de Bancarrota en el Inland Empire',
    lead: [
      'Cuando las facturas son tarjetas de crédito, estados de hospital, un embargo de salario o un aviso de ejecución hipotecaria, la herramienta es federal — no un club de acuerdos privados. Lombera Law presenta Capítulo 7 y Capítulo 13 para familias en el condado de San Bernardino y Riverside, incluido el Valle de Coachella. La consulta es gratuita, en inglés o español, con Edgar P. Lombera. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — eliminar deuda no garantizada',
        paragraphs: [
          'El Capítulo 7 es el caso más corto. Si pasa la prueba de medios, muchas deudas no garantizadas — tarjetas, facturas médicas, préstamos personales — pueden eliminarse en unos pocos meses.',
        ],
      },
      {
        h2: 'Capítulo 13 — ponerse al día y conservar la casa',
        paragraphs: [
          'El Capítulo 13 es un plan judicial de tres a cinco años. La gente lo usa para ponerse al día con la hipoteca, conservar una casa que el Capítulo 7 no salvaría, o presentar cuando los ingresos son demasiado altos para el Capítulo 7. La defensa de ejecución hipotecaria y la detención del embargo de salario suelen ir en la misma petición.',
        ],
      },
      {
        h2: 'La suspensión automática',
        paragraphs: [
          'La suspensión automática es el primer efecto legal. El día que se presenta la petición, la mayoría de embargos, demandas de cobro y subastas de ejecución hipotecaria deben pausar. Por eso esperar al “próximo mes” es la opción costosa: la suspensión no empieza hasta que existe un número de caso.',
        ],
      },
      {
        h2: 'La prueba de medios y la exención de vivienda en California',
        paragraphs: [
          'La exención de vivienda en California es lo suficientemente amplia para que la mayoría de los solicitantes del Inland Empire conserven la casa; confirmamos la cifra actual en la consulta. No adivine el capital desde un sitio web. La prueba de medios mira el tamaño del hogar y los ingresos recientes. Ambas preguntas se responden con documentos, no con eslóganes, en la reunión gratuita.',
        ],
      },
      {
        h2: 'Presentado en el tribunal de bancarrota de Riverside',
        paragraphs: [
          'Todo caso de consumidor de estas oficinas se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside. Las tarifas judiciales en 2026 son $338 para el Capítulo 7 y $313 para el Capítulo 13. Son cargos del tribunal, separados de los honorarios del abogado, que se explican antes de presentar nada. Redlands: (909) 915-0181. Palm Springs: (760) 835-9353.',
        ],
      },
    ],
  },
}

export function hubCopy(practice: 'personal-injury' | 'bankruptcy', locale: Locale): PageCopy {
  return practice === 'personal-injury' ? PI_HUB_COPY[locale] : BK_HUB_COPY[locale]
}
