import type { Locale } from './payload'

export const dictionary = {
  en: {
    nav: {
      personalInjury: 'Personal Injury',
      bankruptcy: 'Bankruptcy',
      attorney: 'About Edgar',
      contact: 'Contact',
      locations: 'Locations',
      callNow: 'Call Now',
      freeConsult: 'Free Consultation',
      offices: 'Offices',
    },
    home: {
      heroKicker: 'Redlands & Palm Springs · Hablamos Español',
      heroHeadline: 'On your injury case, you work with the attorney. Not a case manager.',
      heroSub:
        "When an injury changes your life — a commercial truck crash, a rideshare collision, a preventable medical error — you need an attorney who prepares every case as if it's going to trial. At this firm, personal injury clients work directly with Edgar on their case, from the first consultation through settlement or trial.",
      heroCTA: 'Get a Free Consultation',
      trust: ['15+ years practicing', '2,500+ families helped', '4.9 on Google', 'No fee unless we win'],
      servicesKicker: 'How we help',
      piName: 'Personal Injury',
      piDesc: 'Serious and catastrophic injury, trucking and commercial vehicle accidents, rideshare crashes, wrongful death, and medical malpractice. We work on contingency — you owe nothing unless we win.',
      bkName: 'Bankruptcy',
      bkDesc: 'Chapter 7 and Chapter 13, foreclosure defense, wage garnishment defense. Stop creditor calls and protect what matters.',
      meetKicker: 'Meet Your Attorney',
      meetCTA: "Read Edgar's full story",
      learnMore: 'Learn more',
      whyKicker: 'Why families choose this firm',
      testimonialsKicker: 'What clients say',
      finalCTAHeadline: 'The consultation is free. On injury cases, you deal directly with Edgar.',
    },
    attorney: {
      kicker: 'Founding Attorney',
      credKicker: 'Credentials',
      langKicker: 'Languages',
      bioCTA: 'Talk to Edgar',
    },
    contact: {
      kicker: 'Get in touch',
      headline: 'Two offices. A small firm where your case isn\u2019t handed down the line.',
      qualifier:
        'We\u2019re a small office -- when you call, our team gets you to the right place, and on personal injury matters you\u2019ll be talking with Edgar himself about what happened and what your case may be worth. He\u2019ll walk you through your options honestly, including whether litigation is the right path.',
      hoursLabel: 'Hours',
      directionsLabel: 'Get directions',
      callLabel: 'Call this office',
    },
    footer: {
      disclaimer:
        'Attorney Advertising. The information on this website is for general informational purposes only and should not be construed as legal advice. Every case is different. Past results do not guarantee future outcomes. An attorney-client relationship is not formed until a written agreement is signed.',
      rights: 'All rights reserved.',
    },
  },
  es: {
    nav: {
      personalInjury: 'Lesiones Personales',
      bankruptcy: 'Bancarrota',
      attorney: 'Sobre Edgar',
      contact: 'Contacto',
      locations: 'Ubicaciones',
      callNow: 'Llame Ahora',
      freeConsult: 'Consulta Gratuita',
      offices: 'Oficinas',
    },
    home: {
      heroKicker: 'Redlands y Palm Springs · Hablamos Español',
      heroHeadline: 'En su caso de lesiones, usted trabaja con el abogado. No con un administrador de casos.',
      heroSub:
        'Cuando una lesión cambia su vida — un choque con un camión comercial, una colisión de Uber o Lyft, un error médico prevenible — necesita un abogado que prepare cada caso como si fuera a juicio. En este despacho, los clientes de lesiones personales trabajan directamente con Edgar en su caso, desde la primera consulta hasta el acuerdo o el juicio.',
      heroCTA: 'Consulta Gratuita',
      trust: ['Más de 15 años de experiencia', 'Más de 2,500 familias ayudadas', '4.9 en Google', 'No paga a menos que ganemos'],
      servicesKicker: 'Cómo ayudamos',
      piName: 'Lesiones Personales',
      piDesc: 'Lesiones graves y catastróficas, accidentes de camiones y vehículos comerciales, choques de Uber/Lyft, muerte injusta y negligencia médica. Trabajamos por contingencia — no paga nada a menos que ganemos.',
      bkName: 'Bancarrota',
      bkDesc: 'Capítulo 7 y Capítulo 13, defensa de ejecución hipotecaria, defensa de embargo de salario. Detenga las llamadas de acreedores.',
      meetKicker: 'Conozca a Su Abogado',
      meetCTA: 'Lea la historia completa de Edgar',
      learnMore: 'Más información',
      whyKicker: 'Por qué las familias eligen este despacho',
      testimonialsKicker: 'Lo que dicen nuestros clientes',
      finalCTAHeadline: 'La consulta es gratis. En casos de lesiones, usted trata directamente con Edgar.',
    },
    attorney: {
      kicker: 'Abogado Fundador',
      credKicker: 'Credenciales',
      langKicker: 'Idiomas',
      bioCTA: 'Hable con Edgar',
    },
    contact: {
      kicker: 'Contáctenos',
      headline: 'Dos oficinas. Un despacho pequeño donde su caso no pasa de mano en mano.',
      qualifier:
        'Somos una oficina pequeña -- cuando llama, nuestro equipo lo dirige al lugar correcto, y en asuntos de lesiones personales hablará con Edgar mismo sobre lo que sucedió y lo que su caso puede valer. Él le explicará sus opciones honestamente, incluyendo si el litigio es el camino correcto.',
      hoursLabel: 'Horario',
      directionsLabel: 'Cómo llegar',
      callLabel: 'Llamar a esta oficina',
    },
    footer: {
      disclaimer:
        'Publicidad de abogado. La información en este sitio web es solo para fines informativos generales y no debe interpretarse como asesoría legal. Cada caso es diferente. Los resultados pasados no garantizan resultados futuros. No se forma una relación abogado-cliente hasta que se firme un acuerdo por escrito.',
      rights: 'Todos los derechos reservados.',
    },
  },
} as const satisfies Record<Locale, unknown>

export function t(locale: Locale) {
  return dictionary[locale]
}
