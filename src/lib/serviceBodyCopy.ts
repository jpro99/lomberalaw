import type { Locale } from './payload'
import type { CopySection } from './hubBodyCopy'

export type ServicePageCopy = {
  title: string
  h1: string
  description: string
  lead: string[]
  sections: CopySection[]
}

const BK_COURT =
  'U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside'
const DEBT_RELIEF_EN =
  'We are a debt relief agency. We help people file for bankruptcy relief under the Bankruptcy Code (11 U.S.C. §528).'
const DEBT_RELIEF_ES =
  'Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).'
const REDLANDS_NAP =
  '2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — (909) 915-0181'
const PS_NAP = '1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — (760) 835-9353'
const EMAIL = 'lomberalaw@gmail.com'

type PiSlug =
  | 'car-accidents'
  | 'truck-accidents'
  | 'motorcycle-accidents'
  | 'rideshare-accidents'
  | 'pedestrian-accidents'
  | 'dog-bites'
  | 'traumatic-brain-injury'
  | 'spinal-cord-injury'
  | 'wrongful-death'

type BkSlug = 'chapter-7' | 'chapter-13'

const PI_EN: Record<PiSlug, ServicePageCopy> = {
  'car-accidents': {
    title: 'Car Accident Lawyer | San Bernardino & Riverside County | Lombera',
    h1: 'Car Accident Lawyer in San Bernardino and Riverside County',
    description:
      'Car crash claims on I-10, I-15, I-215, and Hwy 111. Comparative fault, UM/UIM, CCP §335.1. No fee unless we win. (909) 915-0181.',
    lead: [
      'Car wrecks on the I-10, I-15, I-215, Highway 111, and local arterials — Hospitality Lane, Florida Avenue, Ramon Road — produce most of the injury files in this office. Edgar P. Lombera takes San Bernardino County and Riverside County car accident claims from Redlands and Palm Springs on contingency. You speak with him, not a call center.',
    ],
    sections: [
      {
        h2: 'Freeways, comparative fault, and uninsured drivers',
        paragraphs: [
          'California is a comparative-fault state: your recovery can be reduced by your share of blame, but a partial fault finding does not end the case. We handle rear-end collisions, intersection crashes, and multi-vehicle pileups on the I-10 freight corridor, the I-215 through San Bernardino, and Highway 111 through the Coachella Valley.',
          'When the at-fault driver has little or no insurance, your own uninsured/underinsured motorist (UM/UIM) coverage may be the path to recovery. Edgar reviews every policy layer in the first consult — personal auto, rideshare, and commercial — before the adjuster frames the story.',
        ],
      },
      {
        h2: 'CCP §335.1 and the six-month government clock',
        paragraphs: [
          'Most private-defendant injury claims must be filed within two years of the crash date under California Code of Civil Procedure §335.1. If Caltrans, a city bus, or another public entity was involved, Government Code §911.2 may require a written government claim within six months — a shorter window that catches families who are still in treatment.',
          'San Bernardino County Superior Court sits at 247 W. 3rd St., San Bernardino. Riverside County Superior Court sits at 4050 Main St., Riverside. Preserve dashcam footage, 911 recordings, and witness names while memories are fresh.',
        ],
      },
      {
        h2: 'Contingency — Redlands and Palm Springs',
        paragraphs: [
          'No attorney fee unless money is recovered. Meet at the Redlands office or the Palm Springs office. Medical debt from a crash can also be addressed through Chapter 7 or Chapter 13 filed at 3420 Twelfth Street, Riverside — the same firm can handle both tracks when bills arrive before the injury case settles.',
        ],
      },
    ],
  },
  'truck-accidents': {
    title: 'Truck Accident Lawyer | Inland Empire | Lombera Law',
    h1: 'Truck Accident Lawyer for the Inland Empire',
    description:
      'I-10 and I-15 freight crashes, black box and ECM preservation, FMCSA violations. No fee unless we win. Redlands (909) 915-0181.',
    lead: [
      'The Inland Empire is a freight corridor — the I-10 and I-15 junction at Colton, the I-10 pass at Beaumont, and the SR-60 port traffic through Moreno Valley. When an 18-wheeler merges across lanes or runs a downgrade too fast, the injuries are rarely minor. Edgar P. Lombera builds truck cases for trial from day one, not for a quick insurance letter.',
    ],
    sections: [
      {
        h2: 'Preserve the ECM and driver logs now',
        paragraphs: [
          'Commercial trucks carry electronic control modules (ECM) and event data recorders that capture speed, braking, and throttle in the seconds before impact. Federal Motor Carrier Safety Administration rules govern driver hours, maintenance, and hiring — and violations are often why the crash happened.',
          'Edgar sends spoliation letters early to preserve black-box data, driver logs, and maintenance records before they rotate off or get overwritten. This is Inland Empire freight work — I-10 through Fontana, I-15 through Rancho Cucamonga — not a generic long-haul template copied from another market.',
        ],
      },
      {
        h2: 'Corporate defendants and catastrophic outcomes',
        paragraphs: [
          'Truck collisions produce traumatic brain injury, spinal cord injury, amputation-level trauma, and wrongful death claims. The carrier and its insurer will have counsel on the file within hours. Your case needs the same urgency — photographs of the scene, carrier DOT numbers, and independent witnesses secured before the rig leaves the state.',
        ],
      },
      {
        h2: 'San Bernardino and Riverside County filing',
        paragraphs: [
          'Truck lawsuits from this corridor typically land in San Bernardino County Superior Court or Riverside County Superior Court depending on where the crash occurred. CCP §335.1 gives most victims two years; government vehicles on the I-10 or I-215 can trigger the six-month notice under Gov. Code §911.2. Contingency fee — no recovery, no attorney fee.',
        ],
      },
    ],
  },
  'motorcycle-accidents': {
    title: 'Motorcycle Accident Lawyer | Inland Empire | Lombera Law',
    h1: 'Motorcycle accident lawyer in the Inland Empire',
    description:
      'Motorcycle crash claims in San Bernardino and Riverside County. Lane-splitting when safe; helmet use does not flip fault. Free consult.',
    lead: [
      'Motorcycle crashes on the I-10, I-215, SR-210, and desert highways draw immediate bias — adjusters assume the rider was speeding or lane-splitting recklessly even when the car driver failed to yield. Edgar P. Lombera takes motorcycle injury files across the Inland Empire and Coachella Valley on contingency.',
    ],
    sections: [
      {
        h2: 'Lane-splitting is legal when done safely',
        paragraphs: [
          'California Vehicle Code §21658.1 allows motorcycles to lane-split when done in a safe and prudent manner. A rider who was splitting legally at low speed in stopped traffic is not automatically at fault because a driver opened a door or changed lanes without looking.',
          'We reconstruct speed, visibility, and road geometry — not just accept the driver’s version because the rider was on two wheels.',
        ],
      },
      {
        h2: 'Helmet use does not flip fault',
        paragraphs: [
          'Riders over 21 may ride without a helmet under California law. Insurance adjusters sometimes argue that riding helmetless invited the injury or proves comparative fault. That is not the law — fault turns on who caused the collision, not what the rider wore.',
          'Road rash, fractures, traumatic brain injury, and spinal cord injury cases are built with treating physicians and accident reconstruction, not adjuster stereotypes about bikers.',
        ],
      },
      {
        h2: 'Contingency and court deadlines',
        paragraphs: [
          'No fee unless we win. Most motorcycle injury lawsuits file in San Bernardino or Riverside County Superior Court under the two-year limit in CCP §335.1. Call the Redlands line at (909) 915-0181 or Palm Springs at (760) 835-9353.',
        ],
      },
    ],
  },
  'rideshare-accidents': {
    title: 'Rideshare Accident Lawyer | Uber & Lyft | Lombera Law',
    h1: 'Rideshare accident lawyer for Uber and Lyft crashes',
    description:
      'Uber and Lyft crash claims — app-on status and which insurance layer applies. Inland Empire and Coachella Valley. Free consult.',
    lead: [
      'A rideshare crash raises a question most passengers never expect: which insurance policy actually responds? Uber and Lyft carry different coverage depending on whether the driver had the app off, on and waiting for a ride, or actively transporting a passenger. Edgar P. Lombera investigates app status at the moment of impact — not whatever the rideshare company’s insurer offers first.',
    ],
    sections: [
      {
        h2: 'App-on status and which layer applies',
        paragraphs: [
          'Period 1 (app on, waiting for a match), Period 2 (en route to pickup), and Period 3 (passenger in the vehicle) each trigger different coverage stacks — the driver’s personal policy, the rideshare company’s contingent coverage, and the commercial policy that applies during an active trip.',
          'Edgar pulls app logs, trip records, and police reports to lock the period before the carrier argues you were in the wrong layer. Whether you were the passenger, the rideshare driver, or in another vehicle entirely, the same analysis applies.',
        ],
      },
      {
        h2: 'Highway 111 and I-10 corridor rideshare wrecks',
        paragraphs: [
          'Palm Springs, Cathedral City, Indio, and Desert Hot Springs generate heavy Uber and Lyft traffic on Highway 111 and the I-10 approaches — festival weekends, tourism surges, and airport runs. San Bernardino County and the western Inland Empire see the same layered-insurance fights on the I-10 and I-215.',
          'These cases are prepared for trial if the insurer will not offer a fair number. No fee unless we recover money for you.',
        ],
      },
      {
        h2: 'Free consult — speak with Edgar',
        paragraphs: [
          'The first meeting is free and confidential, in English or Spanish. Redlands (909) 915-0181 · Palm Springs (760) 835-9353.',
        ],
      },
    ],
  },
  'pedestrian-accidents': {
    title: 'Pedestrian Accident Lawyer | San Bernardino & Riverside | Lombera',
    h1: 'Pedestrian accident lawyer in San Bernardino and Riverside County',
    description:
      'Pedestrian struck in a crosswalk, driveway, or frontage road. San Bernardino and Riverside County. No fee unless we win.',
    lead: [
      'Pedestrian strikes happen in marked crosswalks, unmarked intersections, strip-mall frontage roads, and driveway exits — often when a driver turns right on red or backs out of a parking space without looking. Edgar P. Lombera takes pedestrian injury files across San Bernardino County and Riverside County on contingency.',
    ],
    sections: [
      {
        h2: 'Crosswalks, frontage roads, and driveway exits',
        paragraphs: [
          'California drivers owe pedestrians in crosswalks the right of way under Vehicle Code §21950. That duty does not disappear on frontage roads along the I-10 or in busy retail corridors — a pedestrian hit in a parking lot or strip-mall driveway still has a claim when the driver failed to keep a proper lookout.',
          'We document sight lines, signal timing, and whether the municipality maintained the crosswalk markings — especially when a city or Caltrans vehicle was involved and the six-month government claim clock under Gov. Code §911.2 may apply.',
        ],
      },
      {
        h2: 'Serious injuries and wrongful death',
        paragraphs: [
          'Pedestrian collisions often produce traumatic brain injury, spinal cord injury, multiple fractures, and wrongful death — there is no vehicle frame to absorb the impact. Medical records, witness statements, and traffic-camera footage should be preserved immediately.',
        ],
      },
      {
        h2: 'CCP §335.1 and contingency fee',
        paragraphs: [
          'Most pedestrian claims must be filed within two years under CCP §335.1. No attorney fee unless money is recovered. Call (909) 915-0181 in Redlands or (760) 835-9353 in Palm Springs.',
        ],
      },
    ],
  },
  'dog-bites': {
    title: 'Dog Bite Lawyer | Inland Empire | Lombera Law',
    h1: 'Dog bite lawyer in the Inland Empire',
    description:
      'Dog bite claims under Civil Code §3342. Scarring, infection, and owner liability. San Bernardino and Riverside County. Free consult.',
    lead: [
      'California Civil Code §3342 makes dog owners strictly liable when their dog bites someone lawfully on public property or lawfully on private property — including the owner’s home. You do not have to prove the dog had bitten before. Edgar P. Lombera handles dog bite injury claims across the Inland Empire on contingency.',
    ],
    sections: [
      {
        h2: 'Strict liability under Civil Code §3342',
        paragraphs: [
          'The owner is responsible for bite injuries regardless of prior viciousness if you were lawfully present — delivering mail, visiting a neighbor, or walking on a public sidewalk. Trespassers and provocation are the main defenses; we evaluate those facts early.',
          'Homeowner’s and renter’s insurance policies often cover dog bite claims even when the owner has little cash — the policy, not the pocketbook, is usually where recovery comes from.',
        ],
      },
      {
        h2: 'Scarring, infection, and children',
        paragraphs: [
          'Dog attacks to the face, hands, and arms can leave permanent scarring and nerve damage. Children are disproportionately injured because they are closer to the dog’s mouth. Medical bills, future cosmetic care, and psychological trauma are part of the damages picture — not just the ER visit.',
        ],
      },
      {
        h2: 'Contingency — no fee unless we win',
        paragraphs: [
          'Free first consult in English or Spanish. Two-year filing limit under CCP §335.1 for most defendants. Redlands (909) 915-0181 · Palm Springs (760) 835-9353.',
        ],
      },
    ],
  },
  'traumatic-brain-injury': {
    title: 'Brain Injury Lawyer | Inland Empire | Lombera Law',
    h1: 'Traumatic brain injury lawyer in the Inland Empire',
    description:
      'TBI claims with delayed symptoms. Not medical advice — consult a physician. Document the full injury. Free consult.',
    lead: [
      'A traumatic brain injury often does not look serious at the scene — no cast, no visible wound — which is exactly why insurance companies dispute how bad it is. Headaches, memory gaps, dizziness, and personality changes can appear days or weeks after the crash. This page is legal information, not medical advice; see a physician if you have symptoms.',
    ],
    sections: [
      {
        h2: 'Delayed symptoms insurers will dispute',
        paragraphs: [
          'Adjusters train on the ER report that says “concussion, discharged.” They ignore the neurology follow-up, the missed work, and the family member who says you are not yourself. A case built only on the first hospital bill misses most of what a TBI costs.',
          'Edgar works with neurologists and neuropsychologists to document the injury’s real scope over time — not a rush to settle before the cognitive picture is clear.',
        ],
      },
      {
        h2: 'Truck, car, and fall-from-vehicle mechanisms',
        paragraphs: [
          'TBIs arrive from high-speed freeway crashes on the I-10 and I-15, rollover collisions, and blunt impact when a pedestrian or motorcyclist hits pavement. The mechanism matters for both medical experts and liability.',
        ],
      },
      {
        h2: 'Contingency and trial preparation',
        paragraphs: [
          'Every TBI file is prepared as if it is going to trial — because insurers take documentation more seriously when they know the firm can prove it in court. No fee unless we win. Redlands (909) 915-0181 · Palm Springs (760) 835-9353.',
        ],
      },
    ],
  },
  'spinal-cord-injury': {
    title: 'Spinal Cord Injury Lawyer | Inland Empire | Lombera Law',
    h1: 'Spinal cord injury lawyer in the Inland Empire',
    description:
      'SCI claims with lifetime care planning. Wheelchairs, home modifications, future treatment. No fee unless we win.',
    lead: [
      'A spinal cord injury changes what a home, a vehicle, and a daily routine need to look like — sometimes permanently. Wheelchairs, home modifications, personal care assistance, and ongoing medical treatment recur for decades. A settlement that only covers the first year of care leaves a family alone for everything after.',
    ],
    sections: [
      {
        h2: 'Future care, not just today’s bills',
        paragraphs: [
          'Edgar works with life-care planners and economists to project the actual lifetime cost of a spinal cord injury — equipment replacement, attendant care, surgeries, and lost earning capacity. The number has to survive cross-examination, not just look large on a demand letter.',
        ],
      },
      {
        h2: 'Freight corridor and high-speed mechanisms',
        paragraphs: [
          'SCI cases in this practice often follow truck collisions on the I-10/I-15 freight network, motorcycle wrecks, and rollover crashes on the SR-60 and Highway 111. Liability and damages both require early preservation of scene evidence and medical imaging.',
        ],
      },
      {
        h2: 'Contingency — prepared for trial',
        paragraphs: [
          'Insurers offer differently when they know a firm is ready to prove the full cost in court. No attorney fee unless money is recovered. Free consult in English or Spanish.',
        ],
      },
    ],
  },
  'wrongful-death': {
    title: 'Wrongful Death Lawyer | Inland Empire | Lombera Law',
    h1: 'Wrongful death lawyer in the Inland Empire',
    description:
      'Wrongful death claims for Inland Empire families. Who may file is reviewed in consult. No invented verdicts. Free consult.',
    lead: [
      'No amount of money changes what happened. A wrongful death claim can hold the responsible party accountable and provide financial stability for the family left behind — lost income, lost support, funeral costs, and the relationship that should not have been cut short. Edgar P. Lombera handles these cases personally; who has standing to sue is reviewed in the first consult under California Code of Civil Procedure §377.60.',
    ],
    sections: [
      {
        h2: 'Standing and the first consult',
        paragraphs: [
          'California limits who may bring a wrongful death action — typically the surviving spouse, domestic partner, children, and certain other heirs depending on who survived the decedent. Stepchildren, putative spouses, and financial dependents can present complex questions. Edgar reviews family structure and dependency in the first meeting rather than publishing a one-size chart on a webpage.',
          'This firm does not invent verdict amounts or parade anonymous “millions recovered” figures. Every case is different; past results do not predict future outcomes.',
        ],
      },
      {
        h2: 'Truck, freeway, and DUI fatalities',
        paragraphs: [
          'Wrongful death files from the I-10 freight corridor, I-15 commuter crashes, and Highway 111 collisions often involve commercial carriers, multiple defendants, and CHP investigations that must be matched to the civil case before evidence disappears.',
        ],
      },
      {
        h2: 'Contingency — you speak with Edgar',
        paragraphs: [
          'No fee unless we recover money for you. The first consultation is free and confidential, in English or Spanish. Redlands (909) 915-0181 · Palm Springs (760) 835-9353.',
        ],
      },
    ],
  },
}

const PI_ES: Partial<Record<PiSlug, ServicePageCopy>> = {
  'car-accidents': {
    title: 'Abogado de Accidentes de Auto | San Bernardino y Riverside | Lombera',
    h1: 'Abogado de accidentes de auto en el condado de San Bernardino y Riverside',
    description:
      'Reclamos por choques en la I-10, I-15, I-215 y la 111. Culpa comparativa, UM/UIM, CCP §335.1. Sin honorarios a menos que ganemos.',
    lead: [
      'Los choques en la I-10, la I-15, la I-215, la Carretera 111 y arterias locales — Hospitality Lane, Florida Avenue, Ramon Road — producen la mayoría de los expedientes de lesiones en esta oficina. Edgar P. Lombera acepta reclamos por accidentes de auto en el condado de San Bernardino y Riverside desde Redlands y Palm Springs a contingencia. Usted habla con él, no con un centro de llamadas.',
    ],
    sections: [
      {
        h2: 'Autopistas, culpa comparativa y conductores sin seguro',
        paragraphs: [
          'California es un estado de culpa comparativa: su recuperación puede reducirse por su parte de culpa, pero una adjudicación parcial no termina el caso. Manejamos colisiones por alcance, choques en intersecciones y apilamientos en el corredor de carga de la I-10, la I-215 por San Bernardino y la Carretera 111 por el Valle de Coachella.',
          'Cuando el conductor culpable tiene poco o ningún seguro, su propia cobertura de conductor sin seguro o con seguro insuficiente (UM/UIM) puede ser la vía de recuperación. Edgar revisa cada capa de póliza en la primera consulta.',
        ],
      },
      {
        h2: 'CCP §335.1 y el plazo de seis meses para entidades públicas',
        paragraphs: [
          'La mayoría de los reclamos contra demandados privados deben presentarse dentro de dos años de la fecha del choque bajo el Código de Procedimiento Civil de California §335.1. Si Caltrans, un autobús municipal u otra entidad pública estuvo involucrada, el Código de Gobierno §911.2 puede exigir un reclamo escrito en seis meses.',
          'El Tribunal Superior del Condado de San Bernardino está en 247 W. 3rd St., San Bernardino. El del condado de Riverside está en 4050 Main St., Riverside. Preserve video de dashcam, grabaciones del 911 y nombres de testigos.',
        ],
      },
      {
        h2: 'Contingencia — Redlands y Palm Springs',
        paragraphs: [
          'Sin honorarios de abogado a menos que se recupere dinero. Reúnase en la oficina de Redlands o Palm Springs. La deuda médica de un choque también puede abordarse con Capítulo 7 o Capítulo 13 presentado en 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  'truck-accidents': {
    title: 'Abogado de Accidentes de Camión | Inland Empire | Lombera',
    h1: 'Abogado de accidentes de camión en el Inland Empire',
    description:
      'Choques de carga en la I-10 e I-15, preservación de ECM y caja negra, violaciones FMCSA. Sin honorarios a menos que ganemos.',
    lead: [
      'El Inland Empire es un corredor de carga — el cruce de la I-10 y la I-15 en Colton, el paso de la I-10 en Beaumont y el tráfico portuario de la SR-60 en Moreno Valley. Cuando un remolque fusiona carriles o baja una pendiente demasiado rápido, las lesiones rara vez son menores. Edgar P. Lombera construye casos de camiones para juicio desde el primer día.',
    ],
    sections: [
      {
        h2: 'Preserve el ECM y los registros del conductor ahora',
        paragraphs: [
          'Los camiones comerciales llevan módulos de control electrónico (ECM) y registradores de datos que capturan velocidad, frenado y acelerador en los segundos antes del impacto. Las reglas de la FMCSA rigen horas del conductor, mantenimiento y contratación.',
          'Edgar envía cartas de spoliation temprano para preservar datos de caja negra, registros del conductor y mantenimiento antes de que roten o se sobrescriban. Este es trabajo de carga del Inland Empire — la I-10 por Fontana, la I-15 por Rancho Cucamonga.',
        ],
      },
      {
        h2: 'Demandados corporativos y resultados catastróficos',
        paragraphs: [
          'Las colisiones con camiones producen lesión cerebral traumática, lesión de médula espinal, trauma de amputación y muerte injusta. El transportista y su aseguradora tendrán abogados en el expediente en horas.',
        ],
      },
      {
        h2: 'Presentación en San Bernardino y Riverside',
        paragraphs: [
          'Las demandas por camiones de este corredor suelen llegar al Tribunal Superior de San Bernardino o Riverside según el lugar del choque. CCP §335.1 da dos años a la mayoría de las víctimas. Honorarios a contingencia.',
        ],
      },
    ],
  },
  'motorcycle-accidents': {
    title: 'Abogado de Accidentes de Motocicleta | Inland Empire | Lombera',
    h1: 'Abogado de accidentes de motocicleta en el Inland Empire',
    description:
      'Choques de motocicleta en San Bernardino y Riverside. Lane-splitting cuando es seguro; el casco no invierte la culpa. Consulta gratis.',
    lead: [
      'Los choques de motocicleta en la I-10, la I-215, la SR-210 y carreteras del desierto enfrentan prejuicio inmediato — los ajustadores asumen que el motociclista iba rápido aunque el conductor del auto no cedió el paso. Edgar P. Lombera acepta expedientes de lesiones por motocicleta en el Inland Empire y el Valle de Coachella a contingencia.',
    ],
    sections: [
      {
        h2: 'El lane-splitting es legal cuando se hace con seguridad',
        paragraphs: [
          'El Código de Vehículos de California §21658.1 permite que las motocicletas hagan lane-splitting de manera segura y prudente. Un motociclista que dividía carriles legalmente a baja velocidad no es automáticamente culpable porque un conductor abrió una puerta o cambió de carril sin mirar.',
        ],
      },
      {
        h2: 'El casco no invierte la culpa',
        paragraphs: [
          'Los motociclistas mayores de 21 pueden circular sin casco bajo la ley de California. Los ajustadores a veces argumentan que no usar casco invitó la lesión. La culpa depende de quién causó la colisión, no de lo que llevaba puesto el motociclista.',
        ],
      },
      {
        h2: 'Contingencia y plazos judiciales',
        paragraphs: [
          'Sin honorarios a menos que ganemos. La mayoría de las demandas se presentan bajo el plazo de dos años del CCP §335.1. Redlands (909) 915-0181 · Palm Springs (760) 835-9353.',
        ],
      },
    ],
  },
  'rideshare-accidents': {
    title: 'Abogado de Accidentes de Rideshare | Uber y Lyft | Lombera',
    h1: 'Abogado de accidentes de rideshare por choques de Uber y Lyft',
    description:
      'Choques de Uber y Lyft — estado de la app y qué capa de seguro aplica. Inland Empire y Valle de Coachella. Consulta gratis.',
    lead: [
      'Un choque de rideshare plantea una pregunta que la mayoría de los pasajeros no esperan: ¿qué póliza de seguro responde realmente? Uber y Lyft tienen cobertura diferente según si el conductor tenía la app apagada, encendida esperando un viaje o transportando activamente a un pasajero. Edgar P. Lombera investiga el estado de la app en el momento del impacto.',
    ],
    sections: [
      {
        h2: 'Estado de la app y qué capa aplica',
        paragraphs: [
          'El Periodo 1 (app encendida, esperando coincidencia), el Periodo 2 (en camino a recoger) y el Periodo 3 (pasajero a bordo) activan diferentes pilas de cobertura — la póliza personal del conductor, la cobertura contingente de la empresa y la póliza comercial del viaje activo.',
          'Edgar obtiene registros de la app, del viaje y del informe policial para fijar el periodo antes de que la aseguradora argumente que estaba en la capa equivocada.',
        ],
      },
      {
        h2: 'Rideshare en la 111 y la I-10',
        paragraphs: [
          'Palm Springs, Cathedral City, Indio y Desert Hot Springs generan tráfico intenso de Uber y Lyft en la Carretera 111 y los accesos de la I-10. Estos casos se preparan para juicio si la aseguradora no ofrece una cifra justa.',
        ],
      },
      {
        h2: 'Consulta gratis — hable con Edgar',
        paragraphs: [
          'La primera reunión es gratuita y confidencial, en inglés o español. Redlands (909) 915-0181 · Palm Springs (760) 835-9353.',
        ],
      },
    ],
  },
  'dog-bites': {
    title: 'Abogado de Mordeduras de Perro | Inland Empire | Lombera',
    h1: 'Abogado de mordeduras de perro en el Inland Empire',
    description:
      'Reclamos por mordeduras bajo el Código Civil §3342. Cicatrices, infección y responsabilidad del dueño. Consulta gratis.',
    lead: [
      'El Código Civil de California §3342 hace estrictamente responsables a los dueños de perros cuando su perro muerde a alguien legalmente en propiedad pública o privada — incluida la casa del dueño. No tiene que probar que el perro había mordido antes. Edgar P. Lombera maneja reclamos por mordeduras de perro en el Inland Empire a contingencia.',
    ],
    sections: [
      {
        h2: 'Responsabilidad estricta bajo el Código Civil §3342',
        paragraphs: [
          'El dueño responde por las lesiones de la mordedura sin importar la conducta previa del perro si usted estaba legalmente presente. Las pólizas de propietarios e inquilinos suelen cubrir reclamos por mordeduras.',
        ],
      },
      {
        h2: 'Cicatrices, infección y niños',
        paragraphs: [
          'Los ataques de perros en la cara, manos y brazos pueden dejar cicatrices permanentes y daño nervioso. Los niños resultan desproporcionadamente lesionados por su altura.',
        ],
      },
      {
        h2: 'Contingencia — sin honorarios a menos que ganemos',
        paragraphs: [
          'Primera consulta gratis en inglés o español. Plazo de dos años bajo CCP §335.1 para la mayoría de los demandados. Redlands (909) 915-0181 · Palm Springs (760) 835-9353.',
        ],
      },
    ],
  },
  'traumatic-brain-injury': {
    title: 'Abogado de Lesión Cerebral | Inland Empire | Lombera',
    h1: 'Abogado de lesión cerebral traumática en el Inland Empire',
    description:
      'Casos de LCT con síntomas tardíos. No es consejo médico — consulte a un médico. Documente la lesión completa.',
    lead: [
      'Una lesión cerebral traumática a menudo no parece grave en la escena — sin yeso, sin herida visible — y por eso las aseguradoras disputan qué tan grave es. Dolores de cabeza, lagunas de memoria, mareos y cambios de personalidad pueden aparecer días o semanas después. Esta página es información legal, no consejo médico; consulte a un médico si tiene síntomas.',
    ],
    sections: [
      {
        h2: 'Síntomas tardíos que las aseguradoras disputarán',
        paragraphs: [
          'Los ajustadores se apoyan en el informe de emergencia que dice “conmoción, dado de alta”. Ignoran el seguimiento neurológico, el trabajo perdido y el familiar que dice que no es la misma persona. Un caso construido solo con la primera factura hospitalaria pierde la mayor parte del costo real de una LCT.',
          'Edgar trabaja con neurólogos y neuropsicólogos para documentar el alcance real de la lesión con el tiempo.',
        ],
      },
      {
        h2: 'Mecanismos de camión, auto y impacto contra el pavimento',
        paragraphs: [
          'Las LCT llegan de choques a alta velocidad en la I-10 e I-15, vuelcos y impacto contundente cuando un peatón o motociclista golpea el pavimento.',
        ],
      },
      {
        h2: 'Contingencia y preparación para juicio',
        paragraphs: [
          'Cada expediente de LCT se prepara como si fuera a juicio. Sin honorarios a menos que ganemos. Redlands (909) 915-0181 · Palm Springs (760) 835-9353.',
        ],
      },
    ],
  },
  'spinal-cord-injury': {
    title: 'Abogado de Lesión de Médula Espinal | Inland Empire | Lombera',
    h1: 'Abogado de lesión de médula espinal en el Inland Empire',
    description:
      'Casos de LME con planificación de cuidado de por vida. Sillas de ruedas, modificaciones del hogar, tratamiento futuro.',
    lead: [
      'Una lesión de la médula espinal cambia cómo debe ser un hogar, un vehículo y una rutina diaria — a veces de forma permanente. Las sillas de ruedas, modificaciones del hogar, asistencia personal y tratamiento médico continuo se repiten durante décadas. Un acuerdo que solo cubre el primer año de cuidados deja a la familia sola después.',
    ],
    sections: [
      {
        h2: 'Cuidado futuro, no solo las facturas de hoy',
        paragraphs: [
          'Edgar trabaja con planificadores de cuidado de por vida y economistas para proyectar el costo real de por vida de una lesión de médula espinal — reemplazo de equipo, cuidado asistencial, cirugías y capacidad de ganancia perdida.',
        ],
      },
      {
        h2: 'Corredor de carga y mecanismos de alta velocidad',
        paragraphs: [
          'Los casos de LME en esta práctica a menudo siguen colisiones con camiones en la red de carga I-10/I-15, choques de motocicleta y vuelcos en la SR-60 y la Carretera 111.',
        ],
      },
      {
        h2: 'Contingencia — preparados para juicio',
        paragraphs: [
          'Las aseguradoras ofrecen de manera diferente cuando saben que un despacho está listo para probar el costo completo en la corte. Sin honorarios de abogado a menos que se recupere dinero.',
        ],
      },
    ],
  },
  'wrongful-death': {
    title: 'Abogado de Muerte Injusta | Inland Empire | Lombera',
    h1: 'Abogado de muerte injusta en el Inland Empire',
    description:
      'Reclamos por muerte injusta para familias del Inland Empire. Quién puede demandar se revisa en consulta. Sin veredictos inventados.',
    lead: [
      'Ninguna cantidad de dinero cambia lo que sucedió. Un reclamo por muerte injusta puede responsabilizar a la parte culpable y brindar estabilidad financiera a la familia — ingresos perdidos, apoyo perdido, costos funerarios y la relación que no debió terminar. Edgar P. Lombera maneja estos casos personalmente; quién tiene legitimación para demandar se revisa en la primera consulta bajo el CCP §377.60.',
    ],
    sections: [
      {
        h2: 'Legitimación y la primera consulta',
        paragraphs: [
          'California limita quién puede presentar una acción por muerte injusta — típicamente el cónyuge sobreviviente, pareja doméstica, hijos y ciertos otros herederos según quién sobrevivió al fallecido. Edgar revisa la estructura familiar en la primera reunión.',
          'Este despacho no inventa montos de veredictos ni desfila cifras anónimas de “millones recuperados”. Cada caso es diferente.',
        ],
      },
      {
        h2: 'Fatalidades en autopista y con camiones',
        paragraphs: [
          'Los expedientes de muerte injusta del corredor de carga de la I-10, choques en la I-15 y colisiones en la Carretera 111 a menudo involucran transportistas comerciales, múltiples demandados e investigaciones del CHP.',
        ],
      },
      {
        h2: 'Contingencia — usted habla con Edgar',
        paragraphs: [
          'Sin honorarios a menos que recuperemos dinero. La primera consulta es gratuita y confidencial, en inglés o español. Redlands (909) 915-0181 · Palm Springs (760) 835-9353.',
        ],
      },
    ],
  },
}

const BK_EN: Record<BkSlug, ServicePageCopy> = {
  'chapter-7': {
    title: 'Chapter 7 Bankruptcy Lawyer | Inland Empire | Lombera',
    h1: 'Chapter 7 Bankruptcy Lawyer in the Inland Empire',
    description:
      'Chapter 7 means test, unsecured discharge, no repayment plan. Typical no-asset timeline about 90–120 days when the trustee accepts. Court fee $338. Riverside Division. Free consult.',
    lead: [
      `Chapter 7 is a liquidation case for consumers who qualify: there is no three- or five-year repayment plan — eligible unsecured debt can be discharged and the case can close in a matter of months. Edgar P. Lombera prepares petitions at ${REDLANDS_NAP} or ${PS_NAP}. Riverside and San Bernardino County households file at ${BK_COURT}. English or Spanish. You speak with Edgar in the first meeting.`,
    ],
    sections: [
      {
        h2: 'Means test — when the Code requires the full worksheet',
        paragraphs: [
          'If your household’s current monthly income is above the state median for your family size, the Bankruptcy Code requires a means test to see whether a consumer Chapter 7 filing is presumed abusive. Below median, the full worksheet may not be required — but every case still turns on pay stubs, tax returns, and household size, not a slogan on a website.',
          'Edgar runs the numbers in the free consult. If the means test points to Chapter 13 — or you are behind on a mortgage and need to cure arrears — see /bankruptcy/chapter-13/ instead of forcing a Chapter 7 that the facts will not support.',
        ],
      },
      {
        h2: 'Unsecured debt, exemptions, and what Chapter 7 does not fix',
        paragraphs: [
          'Credit cards, medical bills, personal loans, and many other unsecured debts are the usual Chapter 7 targets when the case qualifies. California exemption law decides what a trustee can sell to pay creditors; we confirm your exemptions with your documents and do not print dollar amounts here.',
          'Chapter 7 does not cure mortgage arrears. Secured property — a home or car — can still be lost if ongoing payments, liens, or surrender choices are not handled. Keeping a house generally means staying current after filing, not expecting the chapter to rewrite a delinquent loan.',
        ],
      },
      {
        h2: 'No-asset timeline — not a guarantee',
        paragraphs: [
          'California’s self-help materials describe many Chapter 7 cases finishing in about three to six months. In a typical no-asset case, discharge often lands in about 90 to 120 days when the trustee accepts the petition — timing varies with court calendar, document requests, and whether any asset issues surface.',
          'There is no repayment plan in Chapter 7. That speed is why households that pass the means test and do not need a structured mortgage catch-up often start here rather than in Chapter 13.',
        ],
      },
      {
        h2: 'Automatic stay — breathing room, not a permanent shield',
        paragraphs: [
          'Filing triggers the automatic stay: most collection calls, garnishments, and state-court collection lawsuits pause while the stay is in effect. It is a pause ordered by the bankruptcy court, not a permanent bar — secured creditors may still pursue relief if you fall behind on a mortgage or car note after filing.',
          'Families waiting for “one more paycheck” before calling often lose garnished wages the stay would have protected. The stay buys time to finish the case; it does not replace the discharge order.',
        ],
      },
      {
        h2: 'Injury claims and collection pressure — one firm, one lawyer',
        paragraphs: [
          'This office sits in Redlands and Palm Springs with two practices only: personal injury and bankruptcy. A household juggling Kaiser or desert-hospital bills after a crash while collectors call does not need two law firms and two intake scripts — Edgar can map the injury track and whether Chapter 7 fits the debt side in one conversation.',
          'Local bankruptcy context: /bankruptcy/redlands/ and /bankruptcy/palm-springs/. Compare chapters: /bankruptcy/chapter-13/ when income or mortgage arrears push you toward a plan.',
        ],
      },
      {
        h2: '3420 Twelfth Street, Riverside — court fee $338',
        paragraphs: [
          'There is no bankruptcy court in Redlands, San Bernardino, Indio, or any Inland Empire city. Consumer Chapter 7 cases file only at 3420 Twelfth Street, Riverside (Central District, Riverside Division). The court filing fee for Chapter 7 is $338. The Section 341 meeting of creditors is often held remotely. Redlands (909) 915-0181 · Palm Springs (760) 835-9353. ' +
            DEBT_RELIEF_EN,
        ],
      },
    ],
  },
  'chapter-13': {
    title: 'Chapter 13 Bankruptcy Lawyer | Inland Empire | Lombera',
    h1: 'Chapter 13 Bankruptcy Lawyer in the Inland Empire',
    description:
      'Chapter 13 plan 36–60 months, trustee payments, mortgage catch-up. Below-median three years unless extended for cause; above median often five. Court fee $313. Riverside. Free consult.',
    lead: [
      `Chapter 13 is for households with regular income who need a court-approved repayment plan — not a quick unsecured discharge. Edgar P. Lombera drafts the plan from ${REDLANDS_NAP} or ${PS_NAP}. Payments go to the Chapter 13 trustee after confirmation. Every consumer case files at ${BK_COURT}. English or Spanish.`,
    ],
    sections: [
      {
        h2: 'Plan length — 36 to 60 months, never longer than five years',
        paragraphs: [
          'Below the state median income, the plan usually runs three years unless the court approves a longer period for cause. Above median, the plan is generally five years. The Bankruptcy Code does not allow a consumer Chapter 13 plan to stretch past five years.',
          'The proposal must be realistic for your actual budget — payroll deposits, housing, insurance, and court-approved expenses — not a template copied from another county.',
        ],
      },
      {
        h2: 'Mortgage arrears, trustee payments, and confirmation',
        paragraphs: [
          'Chapter 13’s core use for many Inland Empire homeowners is catching up mortgage arrears while keeping the house: past-due amounts fold into the plan alongside ongoing monthly payments. You send plan payments to the Chapter 13 trustee; the court confirms the plan after creditors and the trustee review it.',
          'Chapter 13 does not promise cramdown or lien stripping on every loan. Edgar builds the proposal from your mortgage statements and income — not from marketing copy that guarantees tools the facts may not allow.',
        ],
      },
      {
        h2: 'When Chapter 7 is the better fit',
        paragraphs: [
          'Households that pass the means test, are current on the mortgage, and mainly need unsecured relief often belong in Chapter 7 — no multi-year plan, no trustee payment stream. See /bankruptcy/chapter-7/ when arrears and plan funding are not the problem.',
          'If the means test presumes abuse in Chapter 7, or foreclosure pressure comes from months of missed house payments, Chapter 13 is usually the conversation — not an attempt to “quick discharge” secured arrears in Chapter 7.',
        ],
      },
      {
        h2: 'Automatic stay while the case stays active',
        paragraphs: [
          'The automatic stay begins when the petition is filed. Foreclosure sales, repossession timelines, and many wage garnishments halt for most creditors while the stay applies and the case remains in good standing — again, a temporary court-ordered pause, not a forever ban on secured enforcement if you default under the plan.',
          'State-court collection lawsuits can sit idle while the federal case is open, which buys months to confirm a plan — but missing trustee payments can end that protection.',
        ],
      },
      {
        h2: 'One attorney, two practices — injury and bankruptcy',
        paragraphs: [
          'Edgar P. Lombera is the founding attorney at both staffed offices — personal injury and bankruptcy only. When a family faces a foreclosure notice and an open bodily-injury claim from the same crash, coordinating timing matters; you do not need a national bankruptcy mill for the debt and a billboard firm for the injury.',
          'Office-specific bankruptcy pages: /bankruptcy/redlands/ and /bankruptcy/palm-springs/. Chapter comparison: /bankruptcy/chapter-7/ for means-test-qualified households without a mortgage catch-up.',
        ],
      },
      {
        h2: '3420 Twelfth Street, Riverside — court fee $313',
        paragraphs: [
          'Riverside and San Bernardino County consumer Chapter 13 cases file at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — not at county civil courthouses in San Bernardino, Indio, or downtown Riverside. The court filing fee for Chapter 13 is $313. Redlands (909) 915-0181 · Palm Springs (760) 835-9353. ' +
            DEBT_RELIEF_EN,
        ],
      },
    ],
  },
}

const BK_ES: Record<BkSlug, ServicePageCopy> = {
  'chapter-7': {
    title: 'Abogado de Bancarrota Capítulo 7 | Inland Empire | Lombera',
    h1: 'Abogado de bancarrota Capítulo 7 en el Inland Empire',
    description:
      'Capítulo 7: prueba de medios, descarga de deuda no garantizada, sin plan de pagos. Caso sin activos suele cerrar en unos 90–120 días si el síndico acepta. Tarifa $338. División Riverside.',
    lead: [
      `El Capítulo 7 es un caso de liquidación para consumidores que califican: no hay plan de reembolso de tres o cinco años — la deuda no garantizada elegible puede descargarse y el caso puede cerrarse en pocos meses. Edgar P. Lombera prepara las peticiones en ${REDLANDS_NAP} o en ${PS_NAP}. Los hogares del condado de Riverside y San Bernardino presentan en ${BK_COURT}. Inglés o español. Usted habla con Edgar en la primera reunión.`,
    ],
    sections: [
      {
        h2: 'Prueba de medios — cuándo el Código exige la hoja completa',
        paragraphs: [
          'Si el ingreso mensual actual de su hogar supera la mediana estatal para su tamaño familiar, el Código de Bancarrota exige una prueba de medios para ver si una petición de consumidor del Capítulo 7 se presume abusiva. Por debajo de la mediana, puede que no haga falta la hoja completa — pero cada caso depende de talones de pago, declaraciones de impuestos y personas en el hogar, no de un eslogan en internet.',
          'Edgar calcula las cifras en la consulta gratuita. Si la prueba de medios apunta al Capítulo 13 — o está atrasado en la hipoteca y necesita poner al día los atrasos — revise /es/bancarrota/bancarrota-capitulo-13/ en lugar de forzar un Capítulo 7 que los hechos no respaldan.',
        ],
      },
      {
        h2: 'Deuda no garantizada, exenciones y lo que el Capítulo 7 no arregla',
        paragraphs: [
          'Tarjetas de crédito, facturas médicas, préstamos personales y mucha otra deuda no garantizada son los objetivos habituales del Capítulo 7 cuando el caso califica. La ley de exenciones de California define qué puede vender un síndico para pagar acreedores; confirmamos sus exenciones con sus documentos y no publicamos montos en dólares aquí.',
          'El Capítulo 7 no cura atrasos de hipoteca. La propiedad garantizada — casa o auto — aún puede perderse si no se manejan los pagos continuos, los gravámenes o la entrega voluntaria. Conservar la casa generalmente significa mantenerse al día después de presentar, no esperar que el capítulo reescriba un préstamo en mora.',
        ],
      },
      {
        h2: 'Cronograma sin activos — no es una garantía',
        paragraphs: [
          'Los materiales de autoayuda de los tribunales de California describen muchos casos del Capítulo 7 que terminan en unos tres a seis meses. En un caso típico sin activos, la descarga suele llegar en unos 90 a 120 días cuando el síndico acepta la petición — el calendario varía según la corte, solicitudes de documentos y si surgen temas de activos.',
          'No hay plan de pagos en el Capítulo 7. Por eso los hogares que pasan la prueba de medios y no necesitan una recuperación estructurada de la hipoteca suelen empezar aquí en lugar del Capítulo 13.',
        ],
      },
      {
        h2: 'Suspensión automática — respiro temporal, no escudo permanente',
        paragraphs: [
          'La presentación activa la suspensión automática: la mayoría de las llamadas de cobro, embargos y demandas de cobro en tribunales estatales se detienen mientras la suspensión está vigente. Es una pausa ordenada por el tribunal de bancarrota, no una prohibición permanente — los acreedores garantizados pueden pedir alivio si se atrasa en la hipoteca o el auto después de presentar.',
          'Las familias que esperan “un cheque más” antes de llamar a menudo pierden salarios que la suspensión habría protegido. La suspensión da tiempo para terminar el caso; no sustituye la orden de descarga.',
        ],
      },
      {
        h2: 'Reclamos por lesiones y presión de cobro — un despacho, un abogado',
        paragraphs: [
          'Esta oficina está en Redlands y Palm Springs con solo dos prácticas: lesiones personales y bancarrota. Un hogar con facturas del hospital tras un choque y llamadas de cobradores no necesita dos despachos ni dos guiones de intake — Edgar puede trazar el reclamo por lesiones y si el Capítulo 7 encaja en el lado de la deuda en una sola conversación.',
          'Contexto local: /es/bancarrota/redlands/ y /es/bancarrota/palm-springs/. Compare capítulos: /es/bancarrota/bancarrota-capitulo-13/ cuando los ingresos o los atrasos de hipoteca empujan hacia un plan.',
        ],
      },
      {
        h2: '3420 Twelfth Street, Riverside — tarifa judicial $338',
        paragraphs: [
          'No hay tribunal de bancarrota en Redlands, San Bernardino, Indio ni ninguna ciudad del Inland Empire. Los casos de consumidor del Capítulo 7 se presentan solo en 3420 Twelfth Street, Riverside (Distrito Central, División Riverside). La tarifa de presentación judicial del Capítulo 7 es $338. La reunión de acreedores de la Sección 341 suele ser remota. Redlands (909) 915-0181 · Palm Springs (760) 835-9353. ' +
            DEBT_RELIEF_ES,
        ],
      },
    ],
  },
  'chapter-13': {
    title: 'Abogado de Bancarrota Capítulo 13 | Inland Empire | Lombera',
    h1: 'Abogado de bancarrota Capítulo 13 en el Inland Empire',
    description:
      'Plan del Capítulo 13 de 36–60 meses, pagos al síndico, recuperación de hipoteca. Tres años bajo la mediana salvo causa; cinco si está arriba. Tarifa $313. Riverside.',
    lead: [
      `El Capítulo 13 es para hogares con ingresos regulares que necesitan un plan de reembolso aprobado por el tribunal — no una descarga rápida de deuda no garantizada. Edgar P. Lombera redacta el plan desde ${REDLANDS_NAP} o ${PS_NAP}. Los pagos van al síndico del Capítulo 13 después de la confirmación. Todo caso de consumidor se presenta en ${BK_COURT}. Inglés o español.`,
    ],
    sections: [
      {
        h2: 'Duración del plan — de 36 a 60 meses, nunca más de cinco años',
        paragraphs: [
          'Por debajo de la mediana estatal de ingresos, el plan suele durar tres años salvo que el tribunal apruebe un periodo más largo por causa justificada. Por encima de la mediana, el plan generalmente es de cinco años. El Código de Bancarrota no permite que un plan de consumidor del Capítulo 13 se extienda más de cinco años.',
          'La propuesta debe ser realista para su presupuesto real — depósitos de nómina, vivienda, seguros y gastos aprobados por el tribunal — no una plantilla copiada de otro condado.',
        ],
      },
      {
        h2: 'Atrasos de hipoteca, pagos al síndico y confirmación',
        paragraphs: [
          'El uso central del Capítulo 13 para muchos propietarios del Inland Empire es poner al día los atrasos de hipoteca mientras conservan la casa: los montos vencidos entran al plan junto con los pagos mensuales en curso. Usted envía los pagos del plan al síndico del Capítulo 13; el tribunal confirma el plan después de que acreedores y síndico lo revisan.',
          'El Capítulo 13 no promete cramdown ni eliminación de gravamen en todo préstamo. Edgar construye la propuesta a partir de sus estados de hipoteca e ingresos — no con texto publicitario que garantiza herramientas que los hechos pueden no permitir.',
        ],
      },
      {
        h2: 'Cuándo el Capítulo 7 encaja mejor',
        paragraphs: [
          'Los hogares que pasan la prueba de medios, están al día en la hipoteca y principalmente necesitan alivio en deuda no garantizada suelen pertenecer al Capítulo 7 — sin plan de varios años ni flujo de pagos al síndico. Vea /es/bancarrota/bancarrota-capitulo-7/ cuando los atrasos y el financiamiento del plan no son el problema.',
          'Si la prueba de medios presume abuso en el Capítulo 7, o la presión de ejecución viene de meses sin pagar la casa, la conversación suele ser Capítulo 13 — no intentar “descargar rápido” atrasos garantizados en el Capítulo 7.',
        ],
      },
      {
        h2: 'Suspensión automática mientras el caso sigue activo',
        paragraphs: [
          'La suspensión automática comienza al presentar la petición. Las ventas de ejecución hipotecaria, plazos de recuperación de vehículos y muchos embargos de salario se detienen para la mayoría de los acreedores mientras la suspensión aplica y el caso permanece en regla — otra pausa temporal ordenada por el tribunal, no una prohibición eterna si incumple el plan.',
          'Las demandas de cobro en tribunales estatales pueden quedar en espera mientras el caso federal está abierto, lo que da meses para confirmar un plan — pero perder pagos al síndico puede terminar esa protección.',
        ],
      },
      {
        h2: 'Un abogado, dos prácticas — lesiones y bancarrota',
        paragraphs: [
          'Edgar P. Lombera es el abogado fundador en ambas oficinas con personal — solo lesiones personales y bancarrota. Cuando una familia enfrenta un aviso de ejecución y un reclamo por lesiones corporales del mismo choque, coordinar tiempos importa; no necesita un molino nacional de bancarrota para la deuda y un despacho de vallas para la lesión.',
          'Páginas de bancarrota por oficina: /es/bancarrota/redlands/ y /es/bancarrota/palm-springs/. Comparación de capítulos: /es/bancarrota/bancarrota-capitulo-7/ para hogares que pasan la prueba de medios sin recuperación de hipoteca.',
        ],
      },
      {
        h2: '3420 Twelfth Street, Riverside — tarifa judicial $313',
        paragraphs: [
          'Los casos de consumidor del Capítulo 13 del condado de Riverside y San Bernardino se presentan en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — no en tribunales civiles del condado en San Bernardino, Indio o el centro de Riverside. La tarifa de presentación judicial del Capítulo 13 es $313. Redlands (909) 915-0181 · Palm Springs (760) 835-9353. ' +
            DEBT_RELIEF_ES,
        ],
      },
    ],
  },
}

export const ABOUT_COPY: Record<Locale, ServicePageCopy> = {
  en: {
    title: 'Edgar P. Lombera | Founding Attorney | Lombera Law',
    h1: 'Edgar P. Lombera, Founding Attorney',
    description:
      'California Bar No. 259393, admitted December 8, 2008. Western State College of Law. Personal injury and bankruptcy in Redlands and Palm Springs.',
    lead: [
      'Edgar P. Lombera is the founding attorney of the Law Offices of Edgar Lombera — a bilingual firm with staffed offices in Redlands and Palm Springs. The docket is limited to personal injury and bankruptcy. You speak with Edgar in the first meeting, not an intake screener.',
    ],
    sections: [
      {
        h2: 'Bar admission and education',
        paragraphs: [
          'California State Bar No. 259393. Admitted December 8, 2008. J.D., Western State College of Law. More than 15 years representing families across San Bernardino County, Riverside County, and the Coachella Valley.',
        ],
      },
      {
        h2: 'Personal injury — contingency',
        paragraphs: [
          'Car, truck, motorcycle, rideshare, pedestrian, dog bite, traumatic brain injury, spinal cord injury, and wrongful death claims run on contingency — no attorney fee unless money is recovered. Serious crash and freight-corridor cases lead the injury docket.',
        ],
      },
      {
        h2: 'Bankruptcy — Chapter 7 and Chapter 13',
        paragraphs: [
          'Chapter 7 and Chapter 13 for credit cards, medical debt, wage garnishment, and foreclosure defense. Consumer petitions file at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside. ' +
            DEBT_RELIEF_EN,
        ],
      },
      {
        h2: 'Two offices',
        paragraphs: [
          `Redlands: ${REDLANDS_NAP}. Palm Springs: ${PS_NAP}. Hours Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment.`,
        ],
      },
    ],
  },
  es: {
    title: 'Edgar P. Lombera | Abogado Fundador | Lombera Law',
    h1: 'Edgar P. Lombera, Abogado Fundador',
    description:
      'Colegio de Abogados de California No. 259393, admitido el 8 de diciembre de 2008. Western State College of Law. Lesiones y bancarrota en Redlands y Palm Springs.',
    lead: [
      'Edgar P. Lombera es el abogado fundador de la Oficina Legal de Edgar Lombera — un despacho bilingüe con oficinas con personal en Redlands y Palm Springs. El expediente se limita a lesiones personales y bancarrota. En la primera reunión habla con Edgar, no con un filtro de llamadas.',
    ],
    sections: [
      {
        h2: 'Admisión al colegio y educación',
        paragraphs: [
          'Colegio de Abogados del Estado de California No. 259393. Admitido el 8 de diciembre de 2008. J.D., Western State College of Law. Más de 15 años representando familias en el condado de San Bernardino, el condado de Riverside y el Valle de Coachella.',
        ],
      },
      {
        h2: 'Lesiones personales — a contingencia',
        paragraphs: [
          'Accidentes de auto, camión, motocicleta, rideshare, peatón, mordeduras de perro, lesión cerebral traumática, lesión de médula espinal y muerte injusta son a contingencia — sin honorarios de abogado a menos que se recupere dinero.',
        ],
      },
      {
        h2: 'Bancarrota — Capítulo 7 y Capítulo 13',
        paragraphs: [
          'Capítulo 7 y Capítulo 13 para tarjetas de crédito, deuda médica, embargo de salario y defensa de ejecución hipotecaria. Las peticiones de consumidor se presentan en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside. ' +
            DEBT_RELIEF_ES,
        ],
      },
      {
        h2: 'Dos oficinas',
        paragraphs: [
          `Redlands: ${REDLANDS_NAP}. Palm Springs: ${PS_NAP}. Horario lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita.`,
        ],
      },
    ],
  },
}

export const CONTACT_COPY: Record<Locale, ServicePageCopy> = {
  en: {
    title: 'Contact Lombera Law | Redlands & Palm Springs',
    h1: 'Contact Lombera Law',
    description:
      'Personal injury and bankruptcy. Redlands (909) 915-0181 · Palm Springs (760) 835-9353 · lomberalaw@gmail.com. Free consult.',
    lead: [
      `Lombera Law handles personal injury and bankruptcy — both practices, one firm. Call the Redlands office at (909) 915-0181 or Palm Springs at (760) 835-9353. Email ${EMAIL}. The first consultation is free, in English or Spanish, and you speak with Edgar P. Lombera.`,
    ],
    sections: [
      {
        h2: 'Redlands office',
        paragraphs: [REDLANDS_NAP],
      },
      {
        h2: 'Palm Springs office',
        paragraphs: [PS_NAP],
      },
      {
        h2: 'Hours and email',
        paragraphs: [
          `Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Email: ${EMAIL}. Serious injuries can reach the office after hours for an emergency consult.`,
        ],
      },
      {
        h2: 'Personal injury and bankruptcy',
        paragraphs: [
          'Injury cases run on contingency — no fee unless we win. Bankruptcy consults cover Chapter 7, Chapter 13, garnishment relief, and foreclosure defense. Consumer cases file at 3420 Twelfth Street, Riverside. ' +
            DEBT_RELIEF_EN,
        ],
      },
    ],
  },
  es: {
    title: 'Contacte a Lombera Law | Redlands y Palm Springs',
    h1: 'Contacte a Lombera Law',
    description:
      'Lesiones personales y bancarrota. Redlands (909) 915-0181 · Palm Springs (760) 835-9353 · lomberalaw@gmail.com. Consulta gratis.',
    lead: [
      `Lombera Law maneja lesiones personales y bancarrota — las dos prácticas, un solo despacho. Llame a la oficina de Redlands al (909) 915-0181 o a Palm Springs al (760) 835-9353. Correo: ${EMAIL}. La primera consulta es gratuita, en inglés o español, y habla con Edgar P. Lombera.`,
    ],
    sections: [
      {
        h2: 'Oficina de Redlands',
        paragraphs: [REDLANDS_NAP],
      },
      {
        h2: 'Oficina de Palm Springs',
        paragraphs: [PS_NAP],
      },
      {
        h2: 'Horario y correo',
        paragraphs: [
          `Lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Correo: ${EMAIL}. Lesiones graves pueden contactar la oficina fuera de horario para consulta de emergencia.`,
        ],
      },
      {
        h2: 'Lesiones personales y bancarrota',
        paragraphs: [
          'Los casos de lesiones son a contingencia — sin honorarios a menos que ganemos. Las consultas de bancarrota cubren Capítulo 7, Capítulo 13, alivio de embargo y defensa de ejecución hipotecaria. Los casos de consumidor se presentan en 3420 Twelfth Street, Riverside. ' +
            DEBT_RELIEF_ES,
        ],
      },
    ],
  },
}

export function serviceCopy(
  practice: 'personal-injury' | 'bankruptcy',
  slug: string,
  locale: Locale,
): ServicePageCopy | null {
  if (practice === 'personal-injury') {
    if (locale === 'es') {
      return PI_ES[slug as PiSlug] ?? null
    }
    return PI_EN[slug as PiSlug] ?? null
  }
  if (practice === 'bankruptcy') {
    const bk = slug as BkSlug
    return locale === 'es' ? BK_ES[bk] ?? null : BK_EN[bk] ?? null
  }
  return null
}

export function serviceSeo(
  practice: 'personal-injury' | 'bankruptcy',
  slug: string,
  locale: Locale,
): { title: string; h1: string; description: string } | null {
  const copy = serviceCopy(practice, slug, locale)
  if (!copy) return null
  return { title: copy.title, h1: copy.h1, description: copy.description }
}
