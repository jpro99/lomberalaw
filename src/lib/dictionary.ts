import type { Locale } from './payload'

export const dictionary = {
  en: {
    nav: {
      personalInjury: 'Personal Injury',
      bankruptcy: 'Bankruptcy',
      attorney: 'About Edgar',
      contact: 'Contact',
      callNow: 'Call Now',
      freeConsult: 'Free Consultation',
      offices: 'Offices',
    },
    home: {
      heroKicker: 'Redlands & Palm Springs · Hablamos Español',
      heroHeadline: 'You talk to Edgar. Not a paralegal, not a call center.',
      heroSub:
        "Every consultation, every case update, every settlement discussion — handled personally by attorney Edgar P. Lombera. Personal injury and bankruptcy, for families across the Inland Empire and Coachella Valley.",
      heroCTA: 'Get a Free Consultation',
      trust: ['15+ years practicing', '2,500+ families helped', '4.9 on Google', 'No fee unless we win'],
      servicesKicker: 'How we help',
      piName: 'Personal Injury',
      piDesc: 'Car, truck, motorcycle, rideshare, and pedestrian accidents. We work on contingency — you owe nothing unless we win.',
      bkName: 'Bankruptcy',
      bkDesc: 'Chapter 7 and Chapter 13, foreclosure defense, wage garnishment defense. Stop creditor calls and protect what matters.',
      learnMore: 'Learn more',
      whyKicker: 'Why families choose this firm',
      testimonialsKicker: 'What clients say',
      finalCTAHeadline: 'The first conversation is free — and it\u2019s with Edgar.',
    },
    attorney: {
      kicker: 'Founding Attorney',
      credKicker: 'Credentials',
      langKicker: 'Languages',
      bioCTA: 'Talk to Edgar',
    },
    contact: {
      kicker: 'Get in touch',
      headline: 'Two offices. One attorney who picks up the phone.',
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
      callNow: 'Llame Ahora',
      freeConsult: 'Consulta Gratuita',
      offices: 'Oficinas',
    },
    home: {
      heroKicker: 'Redlands y Palm Springs · Hablamos Español',
      heroHeadline: 'Usted habla con Edgar. No con un paralegal, no con un centro de llamadas.',
      heroSub:
        'Cada consulta, cada actualización de su caso, cada conversación sobre un acuerdo — manejada personalmente por el abogado Edgar P. Lombera. Lesiones personales y bancarrota, para familias del Inland Empire y el Valle de Coachella.',
      heroCTA: 'Consulta Gratuita',
      trust: ['Más de 15 años de experiencia', 'Más de 2,500 familias ayudadas', '4.9 en Google', 'No paga a menos que ganemos'],
      servicesKicker: 'Cómo ayudamos',
      piName: 'Lesiones Personales',
      piDesc: 'Accidentes de auto, camión, motocicleta, Uber/Lyft y peatones. Trabajamos por contingencia — no paga nada a menos que ganemos.',
      bkName: 'Bancarrota',
      bkDesc: 'Capítulo 7 y Capítulo 13, defensa de ejecución hipotecaria, defensa de embargo de salario. Detenga las llamadas de acreedores.',
      learnMore: 'Más información',
      whyKicker: 'Por qué las familias eligen este despacho',
      testimonialsKicker: 'Lo que dicen nuestros clientes',
      finalCTAHeadline: 'La primera conversación es gratis — y es con Edgar.',
    },
    attorney: {
      kicker: 'Abogado Fundador',
      credKicker: 'Credenciales',
      langKicker: 'Idiomas',
      bioCTA: 'Hable con Edgar',
    },
    contact: {
      kicker: 'Contáctenos',
      headline: 'Dos oficinas. Un abogado que contesta el teléfono.',
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
