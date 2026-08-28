import type { Locale } from './payload'
import type { CopySection } from './hubBodyCopy'

export type CityPageCopy = {
  title: string
  h1: string
  description: string
  lead: string[]
  sections: CopySection[]
}

type Practice = 'personal-injury' | 'bankruptcy'
type CitySlug =
  | 'redlands'
  | 'san-bernardino'
  | 'fontana'
  | 'riverside'
  | 'moreno-valley'
  | 'highland'
  | 'palm-springs'
  | 'palm-desert'
  | 'cathedral-city'
  | 'indio'
  | 'beaumont'
  | 'hemet'
  | 'colton'
  | 'desert-hot-springs'
  | 'rancho-cucamonga'

const REDLANDS_NAP =
  '2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — (909) 915-0181'
const PS_NAP = '1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — (760) 835-9353'
const BK_COURT =
  'U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside'
const HOURS = 'Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment'
const DEBT_RELIEF =
  'We are a debt relief agency. We help people file for bankruptcy relief under the Bankruptcy Code (11 U.S.C. §528).'

const CITY_NAMES: Record<CitySlug, { en: string; es: string }> = {
  redlands: { en: 'Redlands', es: 'Redlands' },
  'san-bernardino': { en: 'San Bernardino', es: 'San Bernardino' },
  fontana: { en: 'Fontana', es: 'Fontana' },
  riverside: { en: 'Riverside', es: 'Riverside' },
  'moreno-valley': { en: 'Moreno Valley', es: 'Moreno Valley' },
  highland: { en: 'Highland', es: 'Highland' },
  'palm-springs': { en: 'Palm Springs', es: 'Palm Springs' },
  'palm-desert': { en: 'Palm Desert', es: 'Palm Desert' },
  'cathedral-city': { en: 'Cathedral City', es: 'Cathedral City' },
  indio: { en: 'Indio', es: 'Indio' },
  beaumont: { en: 'Beaumont', es: 'Beaumont' },
  hemet: { en: 'Hemet', es: 'Hemet' },
  colton: { en: 'Colton', es: 'Colton' },
  'desert-hot-springs': { en: 'Desert Hot Springs', es: 'Desert Hot Springs' },
  'rancho-cucamonga': { en: 'Rancho Cucamonga', es: 'Rancho Cucamonga' },
}

const PI_EN: Record<CitySlug, CityPageCopy> = {
  fontana: {
    h1: 'Fontana personal injury lawyer',
    title: 'Fontana Personal Injury Lawyer | I-10 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / I-15 / SR-210 crashes in Fontana. Meet at 2068 Orange Tree Lane #220, Redlands — about 20 minutes east on the I-10. (909) 915-0181.',
    lead: [
      'There is no Lombera suite on Sierra Avenue. After a Fontana wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — about 20 minutes east on the I-10. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, I-15, and SR-210',
        paragraphs: [
          'Sierra Avenue, the Slover / Cherry warehouse grid, and Foothill Boulevard (Route 66) sit under through-truck traffic that produces the commercial collisions leading this docket. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is Inland Empire freight — not an LA harbor page. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Sierra Avenue',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Fontana rideshare claims stay on /personal-injury/fontana/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. County civil files are filed at San Bernardino County Superior Court, 247 W. 3rd St., San Bernardino — not a Fontana District courthouse. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, 20 minutes east',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. This is the Redlands office, not a Sierra Avenue storefront. Palm Springs is the second office — 1276 N Palm Canyon Dr #107, (760) 835-9353. Bankruptcy for medical debt files at 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  colton: {
    h1: 'Colton personal injury lawyer',
    title: 'Colton Personal Injury Lawyer | I-10/I-215 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / I-215 / Colton Crossing crashes. Meet at 2068 Orange Tree Lane #220, Redlands — about 10 minutes east on the I-10. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront on Cooley Street, Brier Avenue, or Inland Empire Boulevard. After a Colton wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From Colton City Hall at 650 N. La Cadena, take the 9th Street on-ramp to the I-10 east — about 6.47 miles and 10.2 minutes. The drive is east. I-215 is a crash corridor on this page, not the route to the office. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, I-215, Mt Vernon, and Colton Crossing',
        paragraphs: [
          'Colton Crossing — where the I-10 meets the I-215 — plus Mt Vernon Avenue and through-truck traffic produce the freight collisions that lead this docket. The Colton truck gap on live search is real, and these wrecks belong here. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is Colton’s I-10 / I-215 junction — not Fontana’s I-10 / I-15 / Sierra freight page, not Highland’s I-210 / SR-210 / Base Line, not Moreno Valley’s SR-60 / I-215, and not Riverside’s 60 / 91 / 215 stack. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Valley, La Cadena, and Rancho',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Colton rideshare claims stay on /personal-injury/colton/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 247 W. 3rd Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. County civil files are filed at San Bernardino County Superior Court, 247 W. 3rd St., San Bernardino — not 400 N. Pepper, not Arrow Boulevard, and not 4050 Main Street in Riverside. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, east',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside. Palm Springs is the second office — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'rancho-cucamonga': {
    h1: 'Rancho Cucamonga personal injury lawyer',
    title: 'Rancho Cucamonga Personal Injury Lawyer | I-15/I-210 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-15 / I-210 / I-10 crashes in Rancho Cucamonga. Meet at 2068 Orange Tree Lane #220, Redlands — about 31 minutes east on the I-10. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront on Utica Avenue, Laurel Avenue, or Arrow Route. After a Rancho Cucamonga wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From Rancho Cucamonga City Hall at 10500 Civic Center Drive, take the Haven on-ramp to the I-10 east — about 23.68 miles and 31.5 minutes. The drive is east. I-15 and I-210 are crash corridors on this page, not the route to the office. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-15, I-210, and I-10',
        paragraphs: [
          'Commercial truck traffic on I-15, I-210, and the I-10 approaches produces the freight collisions that lead this docket. The Rancho Cucamonga truck gap on live search is real, and these wrecks belong here. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is Rancho’s I-15 / I-210 / I-10 stack — not Fontana’s I-10 / I-15 / Sierra freight page, not Colton Crossing / Mt Vernon, not Highland’s I-210 / SR-210 / Base Line, not Moreno Valley’s SR-60 / I-215, and not Riverside’s 60 / 91 / 215. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Haven, Foothill, and Baseline',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Rancho Cucamonga rideshare claims stay on /personal-injury/rancho-cucamonga/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 8303 Haven Avenue',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Rancho Cucamonga civil files are filed at San Bernardino County Superior Court, 8303 Haven Avenue — not 247 W. 3rd St. in San Bernardino, not Arrow Boulevard, and not 4050 Main Street in Riverside. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, east',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside. Palm Springs is the second office — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  beaumont: {
    h1: 'Beaumont personal injury lawyer',
    title: 'Beaumont Personal Injury Lawyer | I-10 Pass Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / San Gorgonio Pass crashes in Beaumont, California. Meet at 2068 Orange Tree Lane #220, Redlands — about 23 minutes west. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront on 6th Street, Beaumont Avenue, or Highland Springs Avenue in Beaumont, California — not Beaumont, Texas. After a Beaumont wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — about 19 miles and 23 minutes west via Beaumont Avenue and the I-10. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, the San Gorgonio Pass, and Beaumont Avenue',
        paragraphs: [
          'Commercial truck traffic on I-10 through the San Gorgonio Pass and along Beaumont Avenue produces the freight collisions that lead this docket. Lombera already appears in AI summaries for Beaumont truck work — this URL is where those Pass and Beaumont Avenue wrecks belong. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is Beaumont’s Pass / Beaumont Avenue freight — not Fontana’s I-10 / I-15 / Sierra page, not Moreno Valley’s SR-60 / I-215, not Palm Springs’ desert San Gorgonio clone, and not Colton Crossing. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Beaumont Avenue, Highland Springs, Pennsylvania Avenue, and 6th Street',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Beaumont, California rideshare claims stay on /personal-injury/beaumont/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 4050 Main Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Beaumont civil files are filed at Riverside County Superior Court, 4050 Main Street, Riverside — not Tahquitz Canyon Way, not 13800 Heacock, not 247 W. 3rd St., not 8303 Haven Avenue, and not Oasis Street or the Indio Division. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, west',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside. Palm Springs is the other office — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'palm-springs': {
    h1: 'Palm Springs personal injury lawyer',
    title: 'Palm Springs Personal Injury Lawyer | I-10 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / San Gorgonio Pass crashes in Palm Springs. Office at 1276 N Palm Canyon Dr #107. (760) 835-9353.',
    lead: [
      'This is the Coachella Valley office — 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. After a Palm Springs wreck, meet Edgar P. Lombera here — about 3.17 miles and 6.3 minutes from the courthouse via Palm Canyon and Tahquitz. Call (760) 835-9353. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10 and the San Gorgonio Pass',
        paragraphs: [
          'Commercial truck traffic on I-10 through the San Gorgonio Pass produces the freight collisions that lead this docket. The Palm Springs truck gap on live search is real, and these wrecks belong here. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is desert I-10 / San Gorgonio Pass — not Fontana’s I-10 / I-15 / Sierra freight page, not Colton Crossing, not Rancho’s I-15 / I-210, not Highland’s I-210 / SR-210 / Base Line, not Moreno Valley’s SR-60 / I-215, and not Riverside’s 60 / 91 / 215. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Highway 111, Palm Canyon, and Indian Canyon',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Palm Springs rideshare claims stay on /personal-injury/palm-springs/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Palm Springs civil files are filed at Riverside County Superior Court, 3255 E. Tahquitz Canyon Way, Palm Springs — not Oasis Street, not the Indio Division, not 247 W. 3rd St., not 4050 Main Street, and not 8303 Haven Avenue. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. If the same wreck sinks the household, the same (760) 835-9353 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside. Redlands is the second office — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  'palm-desert': {
    h1: 'Palm Desert personal injury lawyer',
    title: 'Palm Desert Personal Injury Lawyer | I-10/111 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / Highway 111 crashes in Palm Desert. Meet at 1276 N Palm Canyon Dr #107, Palm Springs — about 26 minutes west. (760) 835-9353.',
    lead: [
      'There is no Lombera suite on El Paseo or Monterey Avenue — El Paseo is a corridor, not an office address. After a Palm Desert wreck, meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — about 17 miles and 26 minutes west via Monterey Avenue and the I-10. Call (760) 835-9353. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10 and Highway 111',
        paragraphs: [
          'Commercial truck traffic on I-10 and Highway 111 through Palm Desert produces the freight collisions that lead this docket. Lombera does not appear on live Google truck organic for this city — the index hole is real, and these wrecks belong here. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is Palm Desert’s I-10 / 111 corridor — not the San Gorgonio Pass page rewritten for Palm Springs, and not Fontana, Colton, or Rancho freight copy with a swapped city name. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber, Lyft, and rideshare on Highway 111, Cook Street, Monterey Avenue, and Fred Waring Drive',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Palm Desert rideshare claims stay on /personal-injury/palm-desert/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Palm Desert civil files are filed at the Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — not Oasis Street, not the Indio Division, not 4050 Main Street, not 247 W. 3rd St., and not 8303 Haven Avenue. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, west',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. If the same wreck sinks the household, the same (760) 835-9353 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside. Redlands is the other office — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  'cathedral-city': {
    h1: 'Cathedral City personal injury lawyer',
    title: 'Cathedral City Personal Injury Lawyer | I-10/111 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / Highway 111 crashes in Cathedral City. Meet at 1276 N Palm Canyon Dr #107, Palm Springs — about 15 minutes west. (760) 835-9353.',
    lead: [
      'There is no Lombera storefront in Cathedral City — no suite on Date Palm Drive, Ramon Road, or Highway 111. After a Cathedral City wreck, meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — about 9 miles and 15 minutes west via Cathedral Canyon Drive and Highway 111. Call (760) 835-9353. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, Date Palm Drive, and Ramon Road',
        paragraphs: [
          'Commercial truck traffic on I-10, the Date Palm and Cathedral City Boulevard on-ramps, Date Palm Drive, and Ramon Road produces the freight collisions that lead this docket. Lombera does not appear on live Google truck organic for this city — the index hole is real, and these wrecks belong here. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. The I-10 Date Palm and Cathedral City Boulevard on-ramps are a crash corridor on this page — not the route to the Palm Canyon office. This is Cathedral City’s I-10 / Date Palm / Ramon stack — not Palm Desert’s I-10 / 111 page, not the San Gorgonio Pass page for Palm Springs, and not Fontana, Colton, or Rancho freight copy. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber, Lyft, and rideshare on Highway 111, Date Palm Drive, Ramon Road, and Cathedral Canyon Drive',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Cathedral City rideshare claims stay on /personal-injury/cathedral-city/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Cathedral City civil files are filed at the Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — not Oasis Street, not the Indio Division, not 4050 Main Street, not 247 W. 3rd St., and not 8303 Haven Avenue. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, west',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. If the same wreck sinks the household, the same (760) 835-9353 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside. Redlands is the other office — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  indio: {
    h1: 'Indio personal injury lawyer',
    title: 'Indio Personal Injury Lawyer | I-10/111 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / Highway 111 crashes in Indio. Meet at 1276 N Palm Canyon Dr #107, Palm Springs — about 31 minutes west. (760) 835-9353.',
    lead: [
      'There is no Lombera storefront in Indio — no suite on Jackson Street, Monroe Street, or Highway 111. After an Indio wreck, meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — about 24 miles and 31 minutes west via Jackson Street and the I-10. Call (760) 835-9353. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10 and Highway 111',
        paragraphs: [
          'Commercial truck traffic on I-10 and Highway 111 through Indio produces the freight collisions that lead this docket. Lombera does not appear on live Google truck organic for this city — the index hole is real, and these wrecks belong here. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is Indio’s I-10 / 111 corridor — not Cathedral City’s Date Palm / Ramon page, not Palm Desert’s Cook / Monterey page, not the San Gorgonio Pass page for Palm Springs, and not Fontana, Colton, or Rancho freight copy. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber, Lyft, and rideshare on Highway 111, Monroe Street, Jackson, and Avenue 42–44',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Indio rideshare claims stay on /personal-injury/indio/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Indio civil files are filed at the Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — not Oasis Street, not the Indio Division, not 4050 Main Street, not 247 W. 3rd St., not 8303 Haven Avenue, and not “located right here in Indio.” CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, west',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. If the same wreck sinks the household, the same (760) 835-9353 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside. Redlands is the other office — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  redlands: {
    h1: 'Redlands personal injury lawyer at 2068 Orange Tree Lane',
    title: 'Redlands Personal Injury Lawyer | I-10 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from 2068 Orange Tree Lane #220, Redlands. (909) 915-0181. Free consult.',
    lead: [
      'This is the office — 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Call (909) 915-0181. Edgar P. Lombera, California State Bar No. 259393, takes Redlands injury files here in English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10 and I-210',
        paragraphs: [
          'Semi-truck collisions cluster at I-10 and Alabama Street, on the I-210 connector, and wherever through-truck traffic meets local commuters. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is an Inland Empire freight corridor — not an LA harbor page. Wrongful death and traumatic brain injury claims from these wrecks are handled on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft — which layer depends on app status',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Highway 111 is the Coachella Valley rideshare corridor; Redlands trips run I-10, Redlands Blvd, Orange Street, and Citrus Avenue and State Street. Rideshare injury claims from these arterials stay here.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. The same two-year clock under CCP §335.1 applies to most injury claims; a public entity may require six-month written notice under Government Code §911.2. Suits are typically filed at San Bernardino County Superior Court, 247 W. 3rd St., San Bernardino.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes — not a separate catastrophic-injury landing page. Families often receive initial treatment at Redlands Community Hospital or Loma Linda University Medical Center. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. Palm Springs is the second office — 1276 N Palm Canyon Dr #107, (760) 835-9353 — not the Redlands line. Bankruptcy for medical debt from a wreck files at 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  'san-bernardino': {
    h1: 'San Bernardino personal injury lawyer — meet on Orange Tree Lane',
    title: 'San Bernardino Personal Injury Lawyer | I-215 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / I-215 / I-210 crashes. Meet at 2068 Orange Tree Lane #220, Redlands. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront downtown. Injury lawsuits from San Bernardino file at San Bernardino County Superior Court, 247 W. 3rd St. Meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — about 15 minutes east on the I-10. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, I-215, and I-210',
        paragraphs: [
          'Freight and through-truck traffic on I-10, I-215, and the I-210 connector, plus Waterman Avenue and Hospitality Lane, produce the commercial collisions that lead this docket. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is an Inland Empire corridor — not an LA harbor page. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft — which layer depends on app status',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Hospitality Lane and downtown San Bernardino rideshare trips stay on this city URL — not a 50-state doorway.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 247 W. 3rd Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Suits are typically filed at San Bernardino County Superior Court, 247 W. 3rd St., San Bernardino. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes — not a separate catastrophic-injury landing page. Families often receive initial treatment at Community Hospital of San Bernardino, St. Bernardine Medical Center, or Loma Linda University Medical Center. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, not downtown',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. This is the Redlands office, not a fake San Bernardino suite. Palm Springs is the second office — 1276 N Palm Canyon Dr #107, (760) 835-9353. Bankruptcy for medical debt files at 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  riverside: {
    h1: 'Riverside personal injury lawyer',
    title: 'Riverside Personal Injury Lawyer | 60/91/215 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from SR-60 / SR-91 / I-215 crashes in Riverside. Meet at 2068 Orange Tree Lane #220, Redlands — about 20 minutes east via I-215 north to I-10 east. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront on Main Street, Pierce, Vine, or 11th. After a Riverside wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — about 20 minutes east via I-215 north to I-10 east, roughly 17 miles. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on SR-60, SR-91, and I-215',
        paragraphs: [
          'Through-truck traffic on the 60, the 91, and I-215 produces the commercial collisions that lead this docket. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is Riverside freeways — not Fontana’s I-10 / I-15 / Sierra freight page. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Mission Inn, UCR, and the 91/60/215 interchange',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Riverside rideshare claims stay on /personal-injury/riverside/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. County civil files are filed at the Historic Courthouse, 4050 Main Street, Riverside — not the Hall of Justice at 4100 Main. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, 20 minutes east',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside — the bankruptcy court is already in this city. Palm Springs is the second office if that drive is easier — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'moreno-valley': {
    h1: 'Moreno Valley personal injury lawyer',
    title: 'Moreno Valley Personal Injury Lawyer | 60/215 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from SR-60 / I-215 crashes in Moreno Valley. Meet at 2068 Orange Tree Lane #220, Redlands — I-215 north then I-10 east. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront on Heacock, Vine, or East Avenue. After a Moreno Valley wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From City Hall / Frederick take I-215 north then I-10 east, about 19.5 miles and 26 minutes. From Perris Boulevard / Alessandro, Reche Canyon north then I-10 east is about 15 to 17 miles. The drive is north then east. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on SR-60 and I-215',
        paragraphs: [
          'Perris Boulevard, Alessandro, Sunnymead, and the March ARB approaches sit under through-truck traffic on SR-60 and I-215. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is Moreno Valley’s 60/215 corridor — not Fontana’s I-10 / I-15 / Sierra freight page. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on SR-60, Frederick, Ironwood, Perris, and Alessandro',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Moreno Valley rideshare claims stay on /personal-injury/moreno-valley/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 4050 Main Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. County civil files are filed at the Historic Courthouse, 4050 Main Street, Riverside — not 13800 Heacock, which is limited civil only. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, north then east',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside. Palm Springs is the second office — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  highland: {
    h1: 'Highland personal injury lawyer',
    title: 'Highland Personal Injury Lawyer | 210/Base Line Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-210 / SR-210 / Base Line crashes in Highland. Meet at 2068 Orange Tree Lane #220, Redlands — about 10 minutes south. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront on 26940 Base Line or in downtown Highland. After a Highland wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From Highland City Hall / 27215 Base Line, take Palm Avenue and Alabama Street south, then a short hop on the I-10 — about 5 miles and 10 minutes. The drive is south. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-210, SR-210, and Base Line',
        paragraphs: [
          'Commercial truck traffic on I-210, SR-210, and Base Line produces the freight collisions that lead this docket — the Highland truck gap on search is real, and these wrecks belong here. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is Highland’s 210 / Base Line corridor — not Fontana’s I-10 / I-15 / Sierra freight page, not Moreno Valley’s SR-60 / I-215, and not Riverside’s 60 / 91 / 215 stack. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Base Line, Highland Avenue, and Palm Avenue',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Highland rideshare claims stay on /personal-injury/highland/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 247 W. 3rd Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. There is no Highland courthouse. County civil files are filed at San Bernardino County Superior Court, 247 W. 3rd St., San Bernardino — not Arrow Boulevard, and not 4050 Main Street in Riverside. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, south',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside. Palm Springs is the second office — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  hemet: {
    h1: 'Hemet personal injury lawyer',
    title: 'Hemet Personal Injury Lawyer | SR-74 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from SR-74 / Florida Avenue crashes in Hemet. Meet at 2068 Orange Tree Lane #220, Redlands — about 43 minutes northwest. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront at 145 S Carmalita Street, 1314 W Florida Avenue, 151 S State Street, or 445 E Florida Avenue by Hemet City Hall. After a Hemet wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — about 33 miles and 43 minutes northwest via Sanderson Avenue, Ramona Expressway, Lamb Canyon Road, and the I-10 west. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on SR-74, Florida Avenue, and SR-79',
        paragraphs: [
          'Commercial truck traffic on the SR-74 mountain corridor, Florida Avenue through downtown Hemet, and SR-79 toward Winchester produces the freight collisions that lead this docket. Lombera already ranks for Hemet truck work with a generic title — this URL is the unique SR-74 / Florida Avenue / SR-79 rewrite. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is San Jacinto Valley freight — not Beaumont’s I-10 / San Gorgonio Pass page, not Moreno Valley’s SR-60 / I-215, and not Fontana’s I-10 / I-15 / Sierra grid. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Florida Avenue, Sanderson Avenue, Stetson Avenue, and State Street',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Hemet rideshare claims stay on /personal-injury/hemet/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 4050 Main Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Hemet has a Riverside County Superior Court Hemet Division, but unlimited civil cases for ZIP codes 92543–92546 file at 4050 Main Street, Riverside — not at the Hemet Division courthouse, not at Menifee Center Drive limited jurisdiction, not at Tahquitz Canyon Way, not at 247 W. 3rd St., not at 13800 Heacock, and not at 8303 Haven Avenue. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, northwest',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside. Palm Springs is the other office — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'desert-hot-springs': {
    h1: 'Desert Hot Springs personal injury lawyer',
    title: 'Desert Hot Springs Personal Injury Lawyer | I-10 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / Whitewater / Pierson crashes in Desert Hot Springs. Meet at 1276 N Palm Canyon Dr #107, Palm Springs — about 18 minutes southwest. (760) 835-9353.',
    lead: [
      'There is no Lombera storefront at 69262 Crestwood Road or 11999 Palm Drive by Desert Hot Springs City Hall. After a Desert Hot Springs wreck, meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — about 11 miles and 18 minutes southwest via Palm Drive, Gene Autry Trail, and Vista Chino. Call (760) 835-9353. This is a personal injury practice — truck, Uber, wrongful death, and catastrophic injury lead the docket; bankruptcy is the second practice when the household sinks. English or Spanish. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, Whitewater, Cabazon, and Pierson Boulevard',
        paragraphs: [
          'Commercial truck traffic on I-10 through Whitewater and Cabazon, and along Pierson Boulevard through Desert Hot Springs, produces the freight collisions that lead this docket. Lombera already ranks for Desert Hot Springs truck work — this URL is the unique I-10 / Whitewater / Cabazon / Pierson rewrite. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. This is north-valley I-10 freight — not Palm Springs’ San Gorgonio Pass page, not Cathedral City’s Date Palm / Ramon stack, not Indio’s I-10 / Highway 111 clone, and not Beaumont’s Pass / Beaumont Avenue page. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Indian Canyon Drive, Pierson Boulevard, and Palm Drive',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Desert Hot Springs rideshare claims stay on /personal-injury/desert-hot-springs/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Desert Hot Springs has a Riverside County Superior Court Indio Division, but unlimited civil cases for ZIP codes 92240 and 92241 file at 3255 E. Tahquitz Canyon Way, Palm Springs — not at the Indio Division courthouse, not at Oasis Street, not at 4050 Main Street, not at 247 W. 3rd St., and not at 8303 Haven Avenue. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Future medical care and lost earning capacity drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, southwest',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. If the same wreck sinks the household, the same (760) 835-9353 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside. Redlands is the other office — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
}

const BK_EN: Record<CitySlug, CityPageCopy> = {
  fontana: {
    h1: 'Fontana bankruptcy lawyer — file at 3420 Twelfth Street',
    title: 'Fontana Bankruptcy Lawyer | Chapter 7 & 13 | Lombera',
    description:
      'Chapter 7 and Chapter 13 in Fontana. Stop garnishment and foreclosure. Filed at Riverside bankruptcy court. (909) 915-0181.',
    lead: [
      'Fontana families dealing with credit cards, medical bills, or a wage levy need federal relief — not another collection call. Edgar P. Lombera files Chapter 7 and Chapter 13 from the Redlands office. Every consumer case goes to the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside.',
    ],
    sections: [
      {
        h2: 'Chapter 7 vs Chapter 13',
        paragraphs: [
          'Chapter 7 discharges most unsecured debt in a few months if you pass the means test. Chapter 13 is the three-to-five-year plan to catch up a mortgage or stop foreclosure when you have regular income.',
        ],
      },
      {
        h2: 'Automatic stay on garnishment',
        paragraphs: [
          'The automatic stay starts the day the petition is filed — garnishments and most collection lawsuits must pause. Waiting another month lets another paycheck disappear.',
        ],
      },
      {
        h2: 'Riverside filing — not Indio',
        paragraphs: [
          'Fontana cases file at 3420 Twelfth Street, Riverside. Court fees are $338 for Chapter 7 and $313 for Chapter 13. We are a debt relief agency under 11 U.S.C. §528. Call (909) 915-0181.',
        ],
      },
    ],
  },
  colton: {
    h1: 'Colton bankruptcy lawyer — stop garnishment, file in Riverside',
    title: 'Colton Bankruptcy Lawyer | Stop Garnishment | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy in Colton. Wage garnishment and foreclosure defense. Riverside court. (909) 915-0181.',
    lead: [
      'A Colton wage garnishment or foreclosure notice means the state court process is already moving. Bankruptcy stops most collection the day a case is filed at the federal courthouse in Riverside. Edgar P. Lombera explains Chapter 7 and Chapter 13 in a free consult from Redlands.',
    ],
    sections: [
      {
        h2: 'Stop the levy before the next paycheck',
        paragraphs: [
          'Chapter 7 can wipe unsecured debt; Chapter 13 catches up a mortgage over three to five years. Foreclosure defense and wage garnishment relief ride on the same petition.',
        ],
      },
      {
        h2: 'California homestead and the means test',
        paragraphs: [
          'Most Inland Empire homeowners keep the house — we confirm the current homestead number in the consult. The means test uses household size and recent income; bring pay stubs and tax returns.',
        ],
      },
      {
        h2: '3420 Twelfth Street, Riverside',
        paragraphs: [
          'There is no bankruptcy court in Colton or San Bernardino city. Consumer cases file at the U.S. Bankruptcy Court, Central District of California, Riverside. (909) 915-0181.',
        ],
      },
    ],
  },
  'rancho-cucamonga': {
    h1: 'Rancho Cucamonga bankruptcy lawyer — Chapter 7 and 13 in Riverside',
    title: 'Rancho Cucamonga Bankruptcy Lawyer | Chapter 7 & 13',
    description:
      'Bankruptcy lawyer in Rancho Cucamonga. Chapter 7, Chapter 13, garnishment relief. Filed Riverside. (909) 915-0181.',
    lead: [
      'Rancho Cucamonga homeowners and renters hit with medical debt, credit cards, or a creditor lawsuit can file Chapter 7 or Chapter 13. Edgar P. Lombera prepares the petition from Redlands; filing is at 3420 Twelfth Street, Riverside.',
    ],
    sections: [
      {
        h2: 'Chapter 7 discharge',
        paragraphs: [
          'If you qualify through the means test, Chapter 7 can eliminate most unsecured debt in months — cards, medical bills, personal loans.',
        ],
      },
      {
        h2: 'Chapter 13 to save the house',
        paragraphs: [
          'When income is too high for Chapter 7 or you are behind on the mortgage, Chapter 13 spreads catch-up payments over three to five years while the automatic stay blocks foreclosure.',
        ],
      },
      {
        h2: 'Federal court in Riverside only',
        paragraphs: [
          'Every Rancho Cucamonga consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside. Debt relief agency. Free consult: (909) 915-0181.',
        ],
      },
    ],
  },
  beaumont: {
    h1: 'Beaumont bankruptcy lawyer — file in Riverside, not Indio',
    title: 'Beaumont Bankruptcy Lawyer | Chapter 7 & 13 | Lombera',
    description:
      'Beaumont bankruptcy — Chapter 7 and 13, foreclosure defense, wage garnishment. Riverside court. (909) 915-0181.',
    lead: [
      'Beaumont residents facing foreclosure on the I-10 corridor or a hospital bill from a pass-area ER can file bankruptcy in Riverside. Edgar P. Lombera handles Chapter 7 and Chapter 13 from the Redlands office — consult free, in English or Spanish.',
    ],
    sections: [
      {
        h2: 'Medical debt after a pass wreck',
        paragraphs: [
          'A crash on the I-10 can leave medical debt that outpaces insurance. Chapter 7 discharges many of those bills; Chapter 13 structures repayment when you need to keep the home.',
        ],
      },
      {
        h2: 'Automatic stay',
        paragraphs: [
          'Filing triggers the automatic stay — garnishments and foreclosure sales pause while the case is active.',
        ],
      },
      {
        h2: 'Riverside bankruptcy court',
        paragraphs: [
          'File at 3420 Twelfth Street, Riverside. Court fees $338 Ch.7 / $313 Ch.13. Never file in Indio — there is no bankruptcy court there. (909) 915-0181.',
        ],
      },
    ],
  },
  'palm-springs': {
    h1: 'Palm Springs bankruptcy lawyer — consult here, file in Riverside',
    title: 'Palm Springs Bankruptcy Lawyer | Chapter 7 & 13',
    description:
      'Bankruptcy in Palm Springs. Stop garnishment, save your home. Filed at Riverside. Palm Springs office (760) 835-9353.',
    lead: [
      'Palm Springs cost of living and seasonal income swings push valley families toward Chapter 7 or Chapter 13. Edgar P. Lombera meets clients at 1276 N Palm Canyon Dr #107; every consumer petition files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside.',
    ],
    sections: [
      {
        h2: 'Chapter 7 for unsecured debt',
        paragraphs: [
          'Credit cards, medical bills, and personal loans may be discharged in Chapter 7 if you pass the means test.',
        ],
      },
      {
        h2: 'Chapter 13 for homeowners',
        paragraphs: [
          'Behind on the mortgage? Chapter 13 catches up payments over three to five years while the automatic stay blocks foreclosure.',
        ],
      },
      {
        h2: 'Valley consult, Riverside filing',
        paragraphs: [
          'Meet in Palm Springs; file in Riverside at 3420 Twelfth Street. No Indio bankruptcy court exists. We are a debt relief agency. (760) 835-9353.',
        ],
      },
    ],
  },
  'palm-desert': {
    h1: 'Palm Desert bankruptcy lawyer — file at 3420 Twelfth Street',
    title: 'Palm Desert Bankruptcy Lawyer | Free Consult | Lombera',
    description:
      'Chapter 7 and Chapter 13 in Palm Desert. Foreclosure and garnishment relief. Riverside court. (760) 835-9353.',
    lead: [
      'Palm Desert homeowners and retirees facing creditor lawsuits or wage garnishment can file Chapter 7 or Chapter 13. Consult at the Palm Springs office; filing at the federal courthouse in Riverside at 3420 Twelfth Street.',
    ],
    sections: [
      {
        h2: 'Debt relief options',
        paragraphs: [
          'Chapter 7 is the faster discharge for qualifying filers. Chapter 13 is the repayment plan when you need to keep property or income exceeds Chapter 7 limits.',
        ],
      },
      {
        h2: 'Homestead exemption',
        paragraphs: [
          'California’s homestead exemption protects most valley homes — we verify equity in the free meeting with documents, not guesses.',
        ],
      },
      {
        h2: '3420 Twelfth Street, Riverside',
        paragraphs: [
          'All Coachella Valley consumer bankruptcies file in Riverside, not Indio. Court fees $338/$313. Debt relief agency under the Bankruptcy Code. (760) 835-9353.',
        ],
      },
    ],
  },
  'cathedral-city': {
    h1: 'Cathedral City bankruptcy lawyer — file in Riverside',
    title: 'Cathedral City Bankruptcy Lawyer | Chapter 7 & 13',
    description:
      'Bankruptcy lawyer in Cathedral City. Stop garnishment and foreclosure. Riverside filing. (760) 835-9353.',
    lead: [
      'Cathedral City families with mounting credit card debt, medical bills, or a foreclosure notice can stop collections by filing bankruptcy. Edgar P. Lombera prepares the case from Palm Springs; the U.S. Bankruptcy Court is at 3420 Twelfth Street, Riverside.',
    ],
    sections: [
      {
        h2: 'Chapter 7 and Chapter 13 explained',
        paragraphs: [
          'Chapter 7 wipes qualifying unsecured debt. Chapter 13 is the court-supervised plan to catch up a mortgage or manage debt when Chapter 7 is not available.',
        ],
      },
      {
        h2: 'Wage garnishment relief',
        paragraphs: [
          'The automatic stay halts most garnishments the day the petition is filed — before another paycheck is taken.',
        ],
      },
      {
        h2: 'Federal court address',
        paragraphs: [
          'U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside. Free consult in English or Spanish. (760) 835-9353.',
        ],
      },
    ],
  },
  indio: {
    h1: 'Indio bankruptcy lawyer — Oasis Street is not bankruptcy court',
    title: 'Indio Bankruptcy Lawyer | Riverside Court Filing | Lombera',
    description:
      'Indio bankruptcy — Chapter 7 and 13 filed at Riverside, not Larson Justice Center. Garnishment relief. (760) 835-9353.',
    lead: [
      `The Larson Justice Center at 46-200 Oasis St., Indio, handles civil Superior Court cases — not consumer bankruptcy. Meet Edgar at ${PS_NAP}; every Chapter 7 and Chapter 13 files at ${BK_COURT}. Edgar P. Lombera, California State Bar No. 259393.`,
    ],
    sections: [
      {
        h2: 'Oasis Street is civil court only',
        paragraphs: [
          'Injury lawsuits from Indio may be filed at the Larson Justice Center. Bankruptcy is federal and files only at 3420 Twelfth Street, Riverside — never at the Indio Superior Court branch.',
        ],
      },
      {
        h2: 'Chapter 7 and Chapter 13',
        paragraphs: [
          'Chapter 7 runs about 90 to 120 days if you pass the means test. Chapter 13 is a three-to-five-year plan. Foreclosure defense and wage garnishment stops are built into the petition — not separate add-ons. The automatic stay begins the day of filing.',
        ],
      },
      {
        h2: 'Homestead, 341, and court fees',
        paragraphs: [
          'Homestead exemption is confirmed in the consult with your documents. The 341 meeting is often remote. 2026 court fees: $338 Chapter 7, $313 Chapter 13. ' + DEBT_RELIEF,
        ],
      },
    ],
  },
  redlands: {
    h1: 'Redlands Bankruptcy Lawyer',
    title: 'Redlands Bankruptcy Lawyer | Chapter 7 & 13 | Inland Empire | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy from 2068 Orange Tree Lane, Suite 220, Redlands. Filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (909) 915-0181.',
    lead: [
      'This is the Inland Empire office — 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Edgar P. Lombera prepares Chapter 7 and Chapter 13 petitions here. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. Every consumer case files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — there is no bankruptcy court in Redlands, San Bernardino, or Indio. Call (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 wipes most unsecured debt when the household passes the means test — credit cards, medical bills, and deficiency balances after repossession. This is an Inland Empire household review at Orange Tree Lane, not a national mill assembly line. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 catches up mortgage arrears over three to five years and can cram down certain secured debt when the code allows. Redlands homeowners behind on the mortgage or facing a sale date use the plan to force a pause and a structured catch-up — not a separate foreclosure-defense product.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay starts the day the petition is filed — wage garnishments, foreclosure sales, and vehicle repossession efforts must pause for most creditors. Waiting until the next paycheck or trustee sale date burns lead time the stay would have protected.',
        ],
      },
      {
        h2: 'Where Redlands files — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Every Redlands consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — about 12 miles and 17 minutes west-southwest via California Street, the I-10, the I-215, and Mission Inn Avenue. That is not 4050 Main Street civil court, not 247 W. 3rd St., not Tahquitz Canyon Way, and not the Indio Division. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
        ],
      },
      {
        h2: 'Tax debt vs injury settlement',
        paragraphs: [
          'Older income-tax debt may discharge in Chapter 7 when timing and notice rules are met — we confirm in the consult, not on a webpage. A personal injury settlement from the same household is a separate question; bankruptcy and injury work stay in two practices under one roof. California homestead exemptions are confirmed with your documents — we do not print dollar caps here.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Palm Springs is the other office — 1276 N Palm Canyon Dr #107, (760) 835-9353. ' + DEBT_RELIEF,
        ],
      },
    ],
  },
  'san-bernardino': {
    h1: 'San Bernardino Bankruptcy Lawyer',
    title: 'San Bernardino Bankruptcy Lawyer | Chapter 7 & 13 | Inland Empire | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy for San Bernardino households. Prepared at 2068 Orange Tree Lane, Redlands; filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (909) 915-0181.',
    lead: [
      'There is no Lombera suite on Hospitality Lane, 255 N D Street, or 247 W. 3rd Street. San Bernardino wage garnishments and foreclosure notices are state-court collection until a federal petition is filed. Meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — about 8 miles and 14 minutes southeast via the I-10 from downtown San Bernardino. He prepares Chapter 7 and Chapter 13 here. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. Every consumer case files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — there is no bankruptcy court in San Bernardino. Call (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 clears most unsecured debt when the household passes the means test — credit cards, medical bills from San Bernardino providers, and deficiency balances after a vehicle repo. This is an Inland Empire household review at Orange Tree Lane, not a volume mill. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 folds mortgage arrears into a three-to-five-year court plan and can cram down certain secured balances where the Bankruptcy Code allows — useful when a San Bernardino household is behind on the house but still has income to fund a plan. It is not a side product next to foreclosure defense; the plan is the relief.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay begins the day the petition is filed — wage garnishments tied to San Bernardino employers, scheduled foreclosure sales, and repossession timelines pause for most creditors. Filing before the next paycheck or sale date protects lead time that waiting burns.',
        ],
      },
      {
        h2: 'Where San Bernardino files — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Every San Bernardino County consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — about 12 miles and 17 minutes west-southwest from the desk at Orange Tree Lane via California Street, the I-10, the I-215, and Mission Inn Avenue. That is not 247 W. 3rd St. civil court, not Hospitality Lane, not 255 N D Street, not 4050 Main Street, not Tahquitz Canyon Way, and not the Indio Division. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
        ],
      },
      {
        h2: 'Tax debt vs injury settlement',
        paragraphs: [
          'Older income-tax debt may discharge in Chapter 7 when timing and notice rules are met — we confirm in the consult. A personal injury settlement from the same household is a separate question under the two-practice model. California homestead exemptions are confirmed with your documents — we do not print dollar caps here.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. From San Bernardino, the consultation is about 8 miles and 14 minutes southeast on the I-10 — not a downtown storefront. Palm Springs is the other office — 1276 N Palm Canyon Dr #107, (760) 835-9353. ' +
            DEBT_RELIEF,
        ],
      },
    ],
  },
  riverside: {
    h1: 'Riverside bankruptcy lawyer at 3420 Twelfth Street',
    title: 'Riverside Bankruptcy Lawyer | Chapter 7 & 13 | Lombera',
    description:
      'Bankruptcy lawyer in Riverside. Chapter 7, Chapter 13, garnishment relief. File at 3420 Twelfth St. (909) 915-0181.',
    lead: [
      'Riverside residents can meet Edgar P. Lombera in Redlands and file at the U.S. Bankruptcy Court just blocks from county civil court — 3420 Twelfth Street for bankruptcy, 4050 Main St. for injury lawsuits. Two different courts, one firm.',
    ],
    sections: [
      {
        h2: 'Chapter 7 and Chapter 13',
        paragraphs: [
          'Chapter 7 for qualifying unsecured debt. Chapter 13 when you need to catch up the mortgage or income exceeds Chapter 7 limits.',
        ],
      },
      {
        h2: 'Automatic stay',
        paragraphs: [
          'The stay starts on filing day — garnishments, collection suits, and most foreclosure steps pause.',
        ],
      },
      {
        h2: 'Federal courthouse',
        paragraphs: [
          'U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside. Court fees $338/$313. Free consult. (909) 915-0181.',
        ],
      },
    ],
  },
  'moreno-valley': {
    h1: 'Moreno Valley bankruptcy lawyer — file in Riverside',
    title: 'Moreno Valley Bankruptcy Lawyer | Chapter 7 & 13',
    description:
      'Moreno Valley bankruptcy — garnishment, foreclosure, Chapter 7 and 13. Riverside court. (909) 915-0181.',
    lead: [
      'Moreno Valley families facing SR-60 commute costs, medical debt, and creditor harassment can file Chapter 7 or Chapter 13. Edgar P. Lombera prepares the case from Redlands; filing is at 3420 Twelfth Street, Riverside.',
    ],
    sections: [
      {
        h2: 'Debt relief paths',
        paragraphs: [
          'Chapter 7 discharges qualifying unsecured debt. Chapter 13 is the plan to keep the house and catch up the mortgage over three to five years.',
        ],
      },
      {
        h2: 'Stop garnishment',
        paragraphs: [
          'The automatic stay blocks most wage levies the day the case is filed — before the next pay period.',
        ],
      },
      {
        h2: 'Riverside bankruptcy court only',
        paragraphs: [
          '3420 Twelfth Street, Riverside. Not Indio. Debt relief agency under 11 U.S.C. §528. (909) 915-0181.',
        ],
      },
    ],
  },
  highland: {
    h1: 'Highland bankruptcy lawyer — file in Riverside',
    title: 'Highland Bankruptcy Lawyer | Chapter 7 & 13 | Lombera',
    description:
      'Bankruptcy in Highland. Foreclosure defense, wage garnishment, Chapter 7 and 13. Riverside. (909) 915-0181.',
    lead: [
      'Highland homeowners and renters with credit card debt, medical bills, or a foreclosure letter can file bankruptcy from the Redlands office. Consumer petitions go to the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside.',
    ],
    sections: [
      {
        h2: 'Chapter 7 vs Chapter 13',
        paragraphs: [
          'Chapter 7 is the faster discharge path. Chapter 13 protects property and catches up secured debt when income supports a plan.',
        ],
      },
      {
        h2: 'California exemptions',
        paragraphs: [
          'Homestead and other California exemptions are reviewed with documents in the free consult — not estimated from a website.',
        ],
      },
      {
        h2: 'File in Riverside',
        paragraphs: [
          'U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside. (909) 915-0181.',
        ],
      },
    ],
  },
  hemet: {
    h1: 'Hemet bankruptcy lawyer — file in Riverside',
    title: 'Hemet Bankruptcy Lawyer | Chapter 7 & 13 | Lombera',
    description:
      'Hemet bankruptcy lawyer. Chapter 7, Chapter 13, garnishment relief. Filed Riverside. (909) 915-0181.',
    lead: [
      'Hemet residents on the SR-74 corridor facing medical debt, credit cards, or wage garnishment can file Chapter 7 or Chapter 13. Edgar P. Lombera consults from Redlands; all consumer cases file at 3420 Twelfth Street, Riverside.',
    ],
    sections: [
      {
        h2: 'Medical and credit card debt',
        paragraphs: [
          'Chapter 7 can discharge many hospital bills and unsecured balances. Chapter 13 structures repayment when you need to keep the home.',
        ],
      },
      {
        h2: 'Automatic stay',
        paragraphs: [
          'Filing stops most collection activity the day the petition is accepted — including garnishments.',
        ],
      },
      {
        h2: 'Riverside federal court',
        paragraphs: [
          '3420 Twelfth Street, Riverside. No bankruptcy court in Hemet or Indio. Free consult. (909) 915-0181.',
        ],
      },
    ],
  },
  'desert-hot-springs': {
    h1: 'Desert Hot Springs bankruptcy lawyer — file in Riverside, not Indio',
    title: 'Desert Hot Springs Bankruptcy Lawyer | Chapter 7 & 13',
    description:
      'Bankruptcy in Desert Hot Springs. Chapter 7 and 13 filed at Riverside. Palm Springs office (760) 835-9353.',
    lead: [
      'Desert Hot Springs families can consult at the Palm Springs office and file bankruptcy at the U.S. Bankruptcy Court in Riverside — 3420 Twelfth Street. Chapter 7 and Chapter 13, foreclosure defense, and wage garnishment relief.',
    ],
    sections: [
      {
        h2: 'Valley consult, federal filing',
        paragraphs: [
          'Meet at 1276 N Palm Canyon Dr #107 in Palm Springs. The petition files in Riverside — not at the Indio civil courthouse.',
        ],
      },
      {
        h2: 'Chapter 7 and Chapter 13',
        paragraphs: [
          'Chapter 7 for qualifying unsecured debt. Chapter 13 to catch up the mortgage and stop foreclosure over three to five years.',
        ],
      },
      {
        h2: '3420 Twelfth Street, Riverside',
        paragraphs: [
          'Debt relief agency. Court fees $338 Ch.7 / $313 Ch.13. (760) 835-9353.',
        ],
      },
    ],
  },
}

const PI_ES: Record<CitySlug, CityPageCopy> = {
  fontana: {
    h1: 'Abogado de lesiones personales en Fontana',
    title: 'Abogado de Lesiones Fontana | Camiones I-10, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / I-15 / SR-210 en Fontana. Oficina en Orange Tree Lane #220, Redlands — unos 20 minutos al este por la I-10. (909) 915-0181.',
    lead: [
      'No hay suite de Lombera en Sierra Avenue. Después de un choque en Fontana, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — unos 20 minutos al este por la I-10. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, la I-15 y la SR-210',
        paragraphs: [
          'Sierra Avenue, la red de almacenes Slover / Cherry y Foothill Boulevard (Ruta 66) están bajo el tráfico de camiones de paso que produce las colisiones comerciales que lideran este expediente. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Esto es carga del Inland Empire — no una página de puerto de Los Ángeles. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Sierra Avenue',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Fontana permanecen en /es/lesiones-personales/fontana/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles del condado se presentan en el Tribunal Superior del Condado de San Bernardino, 247 W. 3rd St., San Bernardino — no un tribunal del Distrito de Fontana. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, 20 minutos al este',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Esta es la oficina de Redlands, no un local en Sierra Avenue. Palm Springs es la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353. La bancarrota por deuda médica se presenta en 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  colton: {
    h1: 'Abogado de lesiones personales en Colton',
    title: 'Abogado de Lesiones Colton | Camiones I-10/I-215, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / I-215 / Colton Crossing. Oficina en Orange Tree Lane #220, Redlands — unos 10 minutos al este por la I-10. (909) 915-0181.',
    lead: [
      'No hay oficina de Lombera en Cooley Street, Brier Avenue ni Inland Empire Boulevard. Después de un choque en Colton, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde City Hall de Colton en 650 N. La Cadena, tome la rampa de la 9th Street a la I-10 al este — unos 6.47 millas y 10.2 minutos. El trayecto es al este. La I-215 es un corredor de choques en esta página, no la ruta a la oficina. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, la I-215, Mt Vernon y Colton Crossing',
        paragraphs: [
          'Colton Crossing — donde la I-10 se encuentra con la I-215 — más Mt Vernon Avenue y el tráfico de camiones de paso producen las colisiones de carga que lideran este expediente. El vacío de camiones en Colton en búsqueda en vivo es real, y estos choques pertenecen aquí. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Este es el cruce I-10 / I-215 de Colton — no la página de carga de Fontana en la I-10 / I-15 / Sierra, no la I-210 / SR-210 / Base Line de Highland, no la SR-60 / I-215 de Moreno Valley, ni el conjunto 60 / 91 / 215 de Riverside. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Valley, La Cadena y Rancho',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Colton permanecen en /es/lesiones-personales/colton/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 247 W. 3rd Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles del condado se presentan en el Tribunal Superior del Condado de San Bernardino, 247 W. 3rd St., San Bernardino — no en 400 N. Pepper, no en Arrow Boulevard, y no en 4050 Main Street en Riverside. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, al este',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside. Palm Springs es la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'rancho-cucamonga': {
    h1: 'Abogado de lesiones personales en Rancho Cucamonga',
    title: 'Abogado de Lesiones Rancho Cucamonga | Camiones I-15/I-210, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-15 / I-210 / I-10 en Rancho Cucamonga. Oficina en Orange Tree Lane #220, Redlands — unos 31 minutos al este por la I-10. (909) 915-0181.',
    lead: [
      'No hay oficina de Lombera en Utica Avenue, Laurel Avenue ni Arrow Route. Después de un choque en Rancho Cucamonga, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde City Hall de Rancho Cucamonga en 10500 Civic Center Drive, tome la rampa de Haven a la I-10 al este — unos 23.68 millas y 31.5 minutos. El trayecto es al este. La I-15 y la I-210 son corredores de choques en esta página, no la ruta a la oficina. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-15, la I-210 y la I-10',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-15, la I-210 y los accesos a la I-10 produce las colisiones de carga que lideran este expediente. El vacío de camiones en Rancho Cucamonga en búsqueda en vivo es real, y estos choques pertenecen aquí. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Este es el conjunto I-15 / I-210 / I-10 de Rancho — no la página de carga de Fontana en la I-10 / I-15 / Sierra, no Colton Crossing / Mt Vernon, no la I-210 / SR-210 / Base Line de Highland, no la SR-60 / I-215 de Moreno Valley, ni el conjunto 60 / 91 / 215 de Riverside. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Haven, Foothill y Baseline',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Rancho Cucamonga permanecen en /es/lesiones-personales/rancho-cucamonga/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 8303 Haven Avenue',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles de Rancho Cucamonga se presentan en el Tribunal Superior del Condado de San Bernardino, 8303 Haven Avenue — no en 247 W. 3rd St. en San Bernardino, no en Arrow Boulevard, y no en 4050 Main Street en Riverside. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, al este',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside. Palm Springs es la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  beaumont: {
    h1: 'Abogado de lesiones personales en Beaumont',
    title: 'Abogado de Lesiones Beaumont | Camiones Paso I-10, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques del Paso I-10 / San Gorgonio en Beaumont, California. Oficina en Orange Tree Lane #220, Redlands — unos 23 minutos al oeste. (909) 915-0181.',
    lead: [
      'No hay oficina de Lombera en 6th Street, Beaumont Avenue ni Highland Springs Avenue en Beaumont, California — no Beaumont, Texas. Después de un choque en Beaumont, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — unos 19 millas y 23 minutos al oeste por Beaumont Avenue y la I-10. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, el Paso de San Gorgonio y Beaumont Avenue',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10 a través del Paso de San Gorgonio y a lo largo de Beaumont Avenue produce las colisiones de carga que lideran este expediente. Lombera ya aparece en resúmenes de IA para trabajo de camiones en Beaumont — esta URL es donde pertenecen esos choques del Paso y de Beaumont Avenue. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Esta es la carga del Paso / Beaumont Avenue de Beaumont — no la página I-10 / I-15 / Sierra de Fontana, no la SR-60 / I-215 de Moreno Valley, no el clon desértico de San Gorgonio de Palm Springs, ni Colton Crossing. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Beaumont Avenue, Highland Springs, Pennsylvania Avenue y 6th Street',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Beaumont, California permanecen en /es/lesiones-personales/beaumont/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 4050 Main Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles de Beaumont se presentan en el Tribunal Superior del Condado de Riverside, 4050 Main Street, Riverside — no en Tahquitz Canyon Way, no en 13800 Heacock, no en 247 W. 3rd St., no en 8303 Haven Avenue, y no en Oasis Street ni la División Indio. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, al oeste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside. Palm Springs es la otra oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'palm-springs': {
    h1: 'Abogado de lesiones personales en Palm Springs',
    title: 'Abogado de Lesiones Palm Springs | Camiones I-10, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / Paso de San Gorgonio en Palm Springs. Oficina en 1276 N Palm Canyon Dr #107. (760) 835-9353.',
    lead: [
      'Esta es la oficina del Valle de Coachella — 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. Después de un choque en Palm Springs, reúnase con Edgar P. Lombera aquí — unos 3.17 millas y 6.3 minutos del tribunal por Palm Canyon y Tahquitz. Llame al (760) 835-9353. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10 y el Paso de San Gorgonio',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10 a través del Paso de San Gorgonio produce las colisiones de carga que lideran este expediente. El vacío de camiones en Palm Springs en búsqueda en vivo es real, y estos choques pertenecen aquí. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Esto es la I-10 del desierto / Paso de San Gorgonio — no la página de carga de Fontana en la I-10 / I-15 / Sierra, no Colton Crossing, no la I-15 / I-210 de Rancho, no la I-210 / SR-210 / Base Line de Highland, no la SR-60 / I-215 de Moreno Valley, ni el conjunto 60 / 91 / 215 de Riverside. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en la Carretera 111, Palm Canyon e Indian Canyon',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Palm Springs permanecen en /es/lesiones-personales/palm-springs/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles de Palm Springs se presentan en el Tribunal Superior del Condado de Riverside, 3255 E. Tahquitz Canyon Way, Palm Springs — no en Oasis Street, no en la División Indio, no en 247 W. 3rd St., no en 4050 Main Street, y no en 8303 Haven Avenue. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Si el mismo choque hunde el hogar, la misma llamada al (760) 835-9353 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside. Redlands es la segunda oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  'palm-desert': {
    h1: 'Abogado de lesiones personales en Palm Desert',
    title: 'Abogado de Lesiones Palm Desert | Camiones I-10/111, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / Carretera 111 en Palm Desert. Oficina en 1276 N Palm Canyon Dr #107, Palm Springs — unos 26 minutos al oeste. (760) 835-9353.',
    lead: [
      'No hay suite de Lombera en El Paseo ni en Monterey Avenue — El Paseo es un corredor, no una dirección de oficina. Después de un choque en Palm Desert, reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — unos 17 millas y 26 minutos al oeste por Monterey Avenue y la I-10. Llame al (760) 835-9353. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10 y la Carretera 111',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10 y la Carretera 111 a través de Palm Desert produce las colisiones de carga que lideran este expediente. Lombera no aparece en búsqueda orgánica de camiones en vivo para esta ciudad — el vacío del índice es real, y estos choques pertenecen aquí. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Este es el corredor I-10 / 111 de Palm Desert — no la página del Paso de San Gorgonio reescrita para Palm Springs, ni copia de carga de Fontana, Colton o Rancho con el nombre de la ciudad cambiado. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber, Lyft y rideshare en la Carretera 111, Cook Street, Monterey Avenue y Fred Waring Drive',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Palm Desert permanecen en /es/lesiones-personales/palm-desert/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles de Palm Desert se presentan en el Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — no en Oasis Street, no en la División Indio, no en 4050 Main Street, no en 247 W. 3rd St., y no en 8303 Haven Avenue. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, al oeste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Si el mismo choque hunde el hogar, la misma llamada al (760) 835-9353 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside. Redlands es la otra oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  'cathedral-city': {
    h1: 'Abogado de lesiones personales en Cathedral City',
    title: 'Abogado de Lesiones Cathedral City | Camiones I-10/111, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / Carretera 111 en Cathedral City. Oficina en 1276 N Palm Canyon Dr #107, Palm Springs — unos 15 minutos al oeste. (760) 835-9353.',
    lead: [
      'No hay oficina de Lombera en Cathedral City — ninguna suite en Date Palm Drive, Ramon Road ni la Carretera 111. Después de un choque en Cathedral City, reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — unos 9 millas y 15 minutos al oeste por Cathedral Canyon Drive y la Carretera 111. Llame al (760) 835-9353. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, Date Palm Drive y Ramon Road',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10, las rampas de Date Palm y Cathedral City Boulevard, Date Palm Drive y Ramon Road produce las colisiones de carga que lideran este expediente. Lombera no aparece en búsqueda orgánica de camiones en vivo para esta ciudad — el vacío del índice es real, y estos choques pertenecen aquí. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las rampas de Date Palm y Cathedral City Boulevard en la I-10 son un corredor de choques en esta página — no la ruta a la oficina de Palm Canyon. Este es el conjunto I-10 / Date Palm / Ramon de Cathedral City — no la página I-10 / 111 de Palm Desert, no la del Paso de San Gorgonio para Palm Springs, ni copia de carga de Fontana, Colton o Rancho. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber, Lyft y rideshare en la Carretera 111, Date Palm Drive, Ramon Road y Cathedral Canyon Drive',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Cathedral City permanecen en /es/lesiones-personales/cathedral-city/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles de Cathedral City se presentan en el Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — no en Oasis Street, no en la División Indio, no en 4050 Main Street, no en 247 W. 3rd St., y no en 8303 Haven Avenue. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, al oeste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Si el mismo choque hunde el hogar, la misma llamada al (760) 835-9353 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside. Redlands es la otra oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  indio: {
    h1: 'Abogado de lesiones personales en Indio',
    title: 'Abogado de Lesiones Indio | Camiones I-10/111, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / Carretera 111 en Indio. Oficina en 1276 N Palm Canyon Dr #107, Palm Springs — unos 31 minutos al oeste. (760) 835-9353.',
    lead: [
      'No hay oficina de Lombera en Indio — ninguna suite en Jackson Street, Monroe Street ni la Carretera 111. Después de un choque en Indio, reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — unos 24 millas y 31 minutos al oeste por Jackson Street y la I-10. Llame al (760) 835-9353. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10 y la Carretera 111',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10 y la Carretera 111 a través de Indio produce las colisiones de carga que lideran este expediente. Lombera no aparece en búsqueda orgánica de camiones en vivo para esta ciudad — el vacío del índice es real, y estos choques pertenecen aquí. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Este es el corredor I-10 / 111 de Indio — no la página de Date Palm / Ramon de Cathedral City, no la de Cook / Monterey de Palm Desert, no la del Paso de San Gorgonio para Palm Springs, ni copia de carga de Fontana, Colton o Rancho. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber, Lyft y rideshare en la Carretera 111, Monroe Street, Jackson y Avenue 42–44',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Indio permanecen en /es/lesiones-personales/indio/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles de Indio se presentan en el Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — no en Oasis Street, no en la División Indio, no en 4050 Main Street, no en 247 W. 3rd St., no en 8303 Haven Avenue, y no “ubicado aquí mismo en Indio.” El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, al oeste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Si el mismo choque hunde el hogar, la misma llamada al (760) 835-9353 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside. Redlands es la otra oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  redlands: {
    h1: 'Abogado de lesiones en Redlands en 2068 Orange Tree Lane',
    title: 'Abogado de Lesiones Redlands | Camiones I-10, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas desde Orange Tree Lane #220. (909) 915-0181. Consulta gratis.',
    lead: [
      'Esta es la oficina — 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Llame al (909) 915-0181. Edgar P. Lombera, Abogado del Estado de California No. 259393, abre expedientes de lesiones de Redlands aquí en inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10 y la I-210',
        paragraphs: [
          'Los choques con tractocamiones se concentran en la I-10 y Alabama Street, en el conector de la I-210 y donde el tráfico de camiones de paso se cruza con conductores locales. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Este es un corredor de carga del Inland Empire — no una página de puerto de Los Ángeles. Las demandas por muerte injusta y lesión cerebral traumática de estos choques se manejan en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft — la capa depende del estado de la app',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. La autopista 111 es el corredor de rideshare del Valle de Coachella; los viajes de Redlands recorren la I-10, Redlands Blvd, Orange Street y Citrus Avenue y State Street. Los reclamos de lesiones en rideshare por estas arterias permanecen aquí.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. El mismo plazo de dos años del CCP §335.1 aplica a la mayoría de los reclamos por lesiones; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2. Las demandas se presentan normalmente en el Tribunal Superior del Condado de San Bernardino, 247 W. 3rd St., San Bernardino.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños — no una página separada de lesiones catastróficas. Las familias a menudo reciben tratamiento inicial en Redlands Community Hospital o Loma Linda University Medical Center. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Palm Springs es la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353 — no la línea de Redlands. La bancarrota por deuda médica de un choque se presenta en 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  'san-bernardino': {
    h1: 'Abogado de lesiones en San Bernardino — reúnase en Orange Tree Lane',
    title: 'Abogado de Lesiones San Bernardino | Camiones I-215, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en la I-10 / I-215 / I-210. Oficina en Orange Tree Lane #220, Redlands. (909) 915-0181.',
    lead: [
      'No hay oficina de Lombera en el centro. Las demandas por lesiones de San Bernardino se presentan en el Tribunal Superior del Condado de San Bernardino, 247 W. 3rd St. Reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — unos 15 minutos al este por la I-10. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, la I-215 y la I-210',
        paragraphs: [
          'El tráfico de carga y de camiones de paso en la I-10, la I-215 y el conector de la I-210, más Waterman Avenue y Hospitality Lane, producen las colisiones comerciales que lideran este expediente. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Este es un corredor del Inland Empire — no una página de puerto de Los Ángeles. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft — la capa depende del estado de la app',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los viajes de rideshare en Hospitality Lane y el centro de San Bernardino permanecen en esta URL de la ciudad — no una puerta de entrada de 50 estados.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 247 W. 3rd Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Las demandas se presentan normalmente en el Tribunal Superior del Condado de San Bernardino, 247 W. 3rd St., San Bernardino. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños — no una página separada de lesiones catastróficas. Las familias a menudo reciben tratamiento inicial en Community Hospital of San Bernardino, St. Bernardine Medical Center o Loma Linda University Medical Center. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, no el centro',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Esta es la oficina de Redlands, no una suite ficticia en San Bernardino. Palm Springs es la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353. La bancarrota por deuda médica se presenta en 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  riverside: {
    h1: 'Abogado de lesiones personales en Riverside',
    title: 'Abogado de Lesiones Riverside | Camiones 60/91/215, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la SR-60 / SR-91 / I-215 en Riverside. Oficina en Orange Tree Lane #220, Redlands — unos 20 minutos al este por la I-215 norte a la I-10 este. (909) 915-0181.',
    lead: [
      'No hay oficina de Lombera en Main Street, Pierce, Vine ni 11th. Después de un choque en Riverside, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — unos 20 minutos al este por la I-215 norte a la I-10 este, aproximadamente 17 millas. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la SR-60, la SR-91 y la I-215',
        paragraphs: [
          'El tráfico de camiones de paso en la 60, la 91 y la I-215 produce las colisiones comerciales que lideran este expediente. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Estas son las autopistas de Riverside — no la página de carga de Fontana en la I-10 / I-15 / Sierra. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Mission Inn, UCR y el intercambio 91/60/215',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Riverside permanecen en /es/lesiones-personales/riverside/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles del condado se presentan en el Historic Courthouse, 4050 Main Street, Riverside — no en el Hall of Justice en 4100 Main. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, 20 minutos al este',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside — el tribunal de bancarrota ya está en esta ciudad. Palm Springs es la segunda oficina si ese trayecto es más fácil — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'moreno-valley': {
    h1: 'Abogado de lesiones personales en Moreno Valley',
    title: 'Abogado de Lesiones Moreno Valley | Camiones 60/215, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la SR-60 / I-215 en Moreno Valley. Oficina en Orange Tree Lane #220, Redlands — I-215 al norte y luego I-10 al este. (909) 915-0181.',
    lead: [
      'No hay oficina de Lombera en Heacock, Vine ni East Avenue. Después de un choque en Moreno Valley, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde City Hall / Frederick tome la I-215 al norte y luego la I-10 al este, unos 19.5 millas y 26 minutos. Desde Perris Boulevard / Alessandro, Reche Canyon al norte y luego la I-10 al este son unos 15 a 17 millas. El trayecto es al norte y luego al este. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la SR-60 y la I-215',
        paragraphs: [
          'Perris Boulevard, Alessandro, Sunnymead y los accesos a March ARB están bajo el tráfico de camiones de paso en la SR-60 y la I-215. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Este es el corredor 60/215 de Moreno Valley — no la página de carga de Fontana en la I-10 / I-15 / Sierra. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en la SR-60, Frederick, Ironwood, Perris y Alessandro',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Moreno Valley permanecen en /es/lesiones-personales/moreno-valley/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 4050 Main Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles del condado se presentan en el Historic Courthouse, 4050 Main Street, Riverside — no en 13800 Heacock, que es solo civil limitado. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, al norte y luego al este',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside. Palm Springs es la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  highland: {
    h1: 'Abogado de lesiones personales en Highland',
    title: 'Abogado de Lesiones Highland | Camiones 210/Base Line, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-210 / SR-210 / Base Line en Highland. Oficina en Orange Tree Lane #220, Redlands — unos 10 minutos al sur. (909) 915-0181.',
    lead: [
      'No hay oficina de Lombera en 26940 Base Line ni en el centro de Highland. Después de un choque en Highland, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde City Hall de Highland / 27215 Base Line, tome Palm Avenue y Alabama Street al sur, luego un tramo corto en la I-10 — unos 5 millas y 10 minutos. El trayecto es al sur. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-210, la SR-210 y Base Line',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-210, la SR-210 y Base Line produce las colisiones de carga que lideran este expediente — el vacío de camiones en Highland en búsqueda es real, y estos choques pertenecen aquí. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Este es el corredor 210 / Base Line de Highland — no la página de carga de Fontana en la I-10 / I-15 / Sierra, no la SR-60 / I-215 de Moreno Valley, ni el conjunto 60 / 91 / 215 de Riverside. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Base Line, Highland Avenue y Palm Avenue',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Highland permanecen en /es/lesiones-personales/highland/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 247 W. 3rd Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. No hay tribunal en Highland. Los expedientes civiles del condado se presentan en el Tribunal Superior del Condado de San Bernardino, 247 W. 3rd St., San Bernardino — no en Arrow Boulevard, y no en 4050 Main Street en Riverside. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, al sur',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside. Palm Springs es la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  hemet: {
    h1: 'Abogado de lesiones personales en Hemet',
    title: 'Abogado de Lesiones Hemet | Camiones SR-74, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la SR-74 / Florida Avenue en Hemet. Oficina en Orange Tree Lane #220, Redlands — unos 43 minutos al noroeste. (909) 915-0181.',
    lead: [
      'No hay oficina de Lombera en 145 S Carmalita Street, 1314 W Florida Avenue, 151 S State Street ni 445 E Florida Avenue junto al ayuntamiento de Hemet. Después de un choque en Hemet, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — unas 33 millas y 43 minutos al noroeste por Sanderson Avenue, Ramona Expressway, Lamb Canyon Road y la I-10 al oeste. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la SR-74, Florida Avenue y la SR-79',
        paragraphs: [
          'El tráfico de camiones comerciales en el corredor montañoso de la SR-74, Florida Avenue por el centro de Hemet y la SR-79 hacia Winchester produce las colisiones de carga que lideran este expediente. Lombera ya aparece en resultados para trabajo de camiones en Hemet con un título genérico — esta URL es la versión única para SR-74 / Florida Avenue / SR-79. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Esta es la carga del Valle de San Jacinto — no la página I-10 / Paso de San Gorgonio de Beaumont, no la SR-60 / I-215 de Moreno Valley, ni la cuadrícula I-10 / I-15 / Sierra de Fontana. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Florida Avenue, Sanderson Avenue, Stetson Avenue y State Street',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Hemet permanecen en /es/lesiones-personales/hemet/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 4050 Main Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Hemet tiene una División Hemet del Tribunal Superior del Condado de Riverside, pero los casos civiles ilimitados para códigos postales 92543–92546 se presentan en 4050 Main Street, Riverside — no en el tribunal de la División Hemet, no en Menifee Center Drive de jurisdicción limitada, no en Tahquitz Canyon Way, no en 247 W. 3rd St., no en 13800 Heacock, y no en 8303 Haven Avenue. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, al noroeste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside. Palm Springs es la otra oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'desert-hot-springs': {
    h1: 'Abogado de lesiones personales en Desert Hot Springs',
    title: 'Abogado de Lesiones Desert Hot Springs | Camiones I-10, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / Whitewater / Pierson en Desert Hot Springs. Oficina en 1276 N Palm Canyon Dr #107, Palm Springs — unos 18 minutos al suroeste. (760) 835-9353.',
    lead: [
      'No hay oficina de Lombera en 69262 Crestwood Road ni 11999 Palm Drive junto al ayuntamiento de Desert Hot Springs. Después de un choque en Desert Hot Springs, reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — unas 11 millas y 18 minutos al suroeste por Palm Drive, Gene Autry Trail y Vista Chino. Llame al (760) 835-9353. Esta es una práctica de lesiones personales — camiones, Uber, muerte injusta y lesiones catastróficas lideran el expediente; la bancarrota es la segunda práctica cuando el hogar se hunde. Inglés o español. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, Whitewater, Cabazon y Pierson Boulevard',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10 a través de Whitewater y Cabazon, y a lo largo de Pierson Boulevard por Desert Hot Springs, produce las colisiones de carga que lideran este expediente. Lombera ya aparece en resultados para trabajo de camiones en Desert Hot Springs — esta URL es la versión única para I-10 / Whitewater / Cabazon / Pierson. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Esta es la carga I-10 del valle norte — no la página del Paso de San Gorgonio de Palm Springs, no la pila Date Palm / Ramon de Cathedral City, no el clon I-10 / Highway 111 de Indio, ni la página Paso / Beaumont Avenue de Beaumont. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Indian Canyon Drive, Pierson Boulevard y Palm Drive',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Los reclamos de rideshare de Desert Hot Springs permanecen en /es/lesiones-personales/desert-hot-springs/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Desert Hot Springs tiene una División Indio del Tribunal Superior del Condado de Riverside, pero los casos civiles ilimitados para códigos postales 92240 y 92241 se presentan en 3255 E. Tahquitz Canyon Way, Palm Springs — no en el tribunal de la División Indio, no en Oasis Street, no en 4050 Main Street, no en 247 W. 3rd St., y no en 8303 Haven Avenue. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención médica futura y la capacidad de ingreso perdida impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, al suroeste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Si el mismo choque hunde el hogar, la misma llamada al (760) 835-9353 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside. Redlands es la otra oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
}

const BK_ES: Record<CitySlug, CityPageCopy> = {
  fontana: {
    h1: "Abogado de bancarrota en Fontana — tribunal en Riverside",
    title: "Abogado de Bancarrota Fontana | Capítulo 7 y 13 | Lombera",
    description: "Capítulo 7 y Capítulo 13 en Fontana. Detenga embargos y ejecuciones. Presentado en el tribunal de bancarrota de Riverside. (909) 915-0181.",
    lead: [
      "Las familias de Fontana con tarjetas de crédito, facturas médicas o un embargo de salario necesitan alivio federal — no otra llamada de cobranza. Edgar P. Lombera presenta el Capítulo 7 y el Capítulo 13 desde la oficina de Redlands. Todo caso de consumidor va al Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside.",
    ],
    sections: [
          {
            h2: "Capítulo 7 frente al Capítulo 13",
            paragraphs: [
            "El Capítulo 7 elimina la mayor parte de la deuda no garantizada en pocos meses si pasa la prueba de medios. El Capítulo 13 es el plan de tres a cinco años para ponerse al día con la hipoteca o detener la ejecución hipotecaria cuando tiene ingresos regulares.",
            ],
          },
          {
            h2: "Suspensión automática del embargo",
            paragraphs: [
            "La suspensión automática comienza el día que se presenta la petición — los embargos y la mayoría de las demandas de cobro deben pausar. Esperar otro mes deja que desaparezca otro cheque de pago.",
            ],
          },
          {
            h2: "Presentación en Riverside — no en Indio",
            paragraphs: [
            "Los casos de Fontana se presentan en 3420 Twelfth Street, Riverside. Las tarifas judiciales son $338 para el Capítulo 7 y $313 para el Capítulo 13. Somos una agencia de alivio de deudas bajo 11 U.S.C. §528. Llame al (909) 915-0181.",
            ],
          },
    ],
  },
  colton: {
    h1: "Abogado de bancarrota en Colton — se presenta en Riverside",
    title: "Abogado de Bancarrota Colton | Detener Embargo | Lombera",
    description: "Bancarrota Capítulo 7 y 13 en Colton. Embargo de salario y defensa de ejecución hipotecaria. Tribunal Riverside. (909) 915-0181.",
    lead: [
      "Un embargo de salario o aviso de ejecución hipotecaria en Colton significa que el proceso del tribunal estatal ya está en marcha. La bancarrota detiene la mayor parte de la cobranza el día que se presenta un caso en el tribunal federal de Riverside. Edgar P. Lombera explica el Capítulo 7 y el Capítulo 13 en una consulta gratuita desde Redlands.",
    ],
    sections: [
          {
            h2: "Detenga el embargo antes del próximo cheque",
            paragraphs: [
            "El Capítulo 7 puede eliminar la deuda no garantizada; el Capítulo 13 pone al día la hipoteca en tres a cinco años. La defensa de ejecución hipotecaria y el alivio del embargo de salario van en la misma petición.",
            ],
          },
          {
            h2: "Exención de vivienda y prueba de medios",
            paragraphs: [
            "La mayoría de los propietarios del Inland Empire conservan la casa — confirmamos el número de exención de vivienda actual en la consulta. La prueba de medios usa el tamaño del hogar y los ingresos recientes; traiga talones de pago y declaraciones de impuestos.",
            ],
          },
          {
            h2: "3420 Twelfth Street, Riverside",
            paragraphs: [
            "No hay tribunal de bancarrota en Colton ni en la ciudad de San Bernardino. Los casos de consumidor se presentan en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, Riverside. (909) 915-0181.",
            ],
          },
    ],
  },
  'rancho-cucamonga': {
    h1: "Abogado de bancarrota en Rancho Cucamonga — tribunal en Riverside",
    title: "Abogado de Bancarrota Rancho Cucamonga | Lombera",
    description: "Abogado de bancarrota en Rancho Cucamonga. Capítulo 7, Capítulo 13, alivio de embargo. Presentado en Riverside. (909) 915-0181.",
    lead: [
      "Propietarios y inquilinos de Rancho Cucamonga con deuda médica, tarjetas de crédito o una demanda de acreedor pueden presentar el Capítulo 7 o el Capítulo 13. Edgar P. Lombera prepara la petición desde Redlands; la presentación es en 3420 Twelfth Street, Riverside.",
    ],
    sections: [
          {
            h2: "Descarga del Capítulo 7",
            paragraphs: [
            "Si califica mediante la prueba de medios, el Capítulo 7 puede eliminar la mayor parte de la deuda no garantizada en meses — tarjetas, facturas médicas, préstamos personales.",
            ],
          },
          {
            h2: "Capítulo 13 para salvar la casa",
            paragraphs: [
            "Cuando los ingresos son demasiado altos para el Capítulo 7 o está atrasado en la hipoteca, el Capítulo 13 distribuye los pagos de puesta al día en tres a cinco años mientras la suspensión automática bloquea la ejecución hipotecaria.",
            ],
          },
          {
            h2: "Solo tribunal federal en Riverside",
            paragraphs: [
            "Toda bancarrota de consumidor de Rancho Cucamonga se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside. Agencia de alivio de deudas. Consulta gratis: (909) 915-0181.",
            ],
          },
    ],
  },
  beaumont: {
    h1: "Abogado de bancarrota en Beaumont — se presenta en Riverside",
    title: "Abogado de Bancarrota Beaumont | Capítulo 7 y 13",
    description: "Bancarrota en Beaumont — Capítulo 7 y 13, defensa de ejecución hipotecaria, embargo de salario. Tribunal Riverside. (909) 915-0181.",
    lead: [
      "Los residentes de Beaumont que enfrentan ejecución hipotecaria en el corredor de la I-10 o una factura hospitalaria de un ER del paso pueden presentar bancarrota en Riverside. Edgar P. Lombera maneja el Capítulo 7 y el Capítulo 13 desde la oficina de Redlands — consulta gratis, en inglés o español.",
    ],
    sections: [
          {
            h2: "Deuda médica después de un choque en el paso",
            paragraphs: [
            "Un choque en la I-10 puede dejar deuda médica que supera el seguro. El Capítulo 7 elimina muchas de esas facturas; el Capítulo 13 estructura el pago cuando necesita conservar la casa.",
            ],
          },
          {
            h2: "Suspensión automática",
            paragraphs: [
            "La presentación activa la suspensión automática — los embargos y las ventas de ejecución hipotecaria se pausan mientras el caso está activo.",
            ],
          },
          {
            h2: "Tribunal de bancarrota de Riverside",
            paragraphs: [
            "Presente en 3420 Twelfth Street, Riverside. Tarifas judiciales $338 Cap.7 / $313 Cap.13. Nunca presente en Indio — no hay tribunal de bancarrota allí. (909) 915-0181.",
            ],
          },
    ],
  },
  'palm-springs': {
    h1: "Abogado de bancarrota en Palm Springs — se presenta en Riverside",
    title: "Abogado de Bancarrota Palm Springs | Consulta Gratis",
    description: "Bancarrota en Palm Springs. Detenga el embargo, salve su casa. Presentado en Riverside. Oficina Palm Springs (760) 835-9353.",
    lead: [
      "El costo de vida de Palm Springs y las fluctuaciones de ingresos estacionales empujan a las familias del valle hacia el Capítulo 7 o el Capítulo 13. Edgar P. Lombera recibe clientes en 1276 N Palm Canyon Dr #107; toda petición de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside.",
    ],
    sections: [
          {
            h2: "Capítulo 7 para deuda no garantizada",
            paragraphs: [
            "Tarjetas de crédito, facturas médicas y préstamos personales pueden eliminarse en el Capítulo 7 si pasa la prueba de medios.",
            ],
          },
          {
            h2: "Capítulo 13 para propietarios",
            paragraphs: [
            "¿Atrasado en la hipoteca? El Capítulo 13 pone al día los pagos en tres a cinco años mientras la suspensión automática bloquea la ejecución hipotecaria.",
            ],
          },
          {
            h2: "Consulta en el valle, presentación en Riverside",
            paragraphs: [
            "Reúnase en Palm Springs; presente en Riverside en 3420 Twelfth Street. No existe tribunal de bancarrota en Indio. Somos una agencia de alivio de deudas. (760) 835-9353.",
            ],
          },
    ],
  },
  'palm-desert': {
    h1: "Abogado de bancarrota en Palm Desert — tribunal en Riverside",
    title: "Abogado de Bancarrota Palm Desert | Lombera",
    description: "Capítulo 7 y Capítulo 13 en Palm Desert. Alivio de ejecución hipotecaria y embargo. Tribunal Riverside. (760) 835-9353.",
    lead: [
      "Propietarios y jubilados de Palm Desert que enfrentan demandas de acreedores o embargo de salario pueden presentar el Capítulo 7 o el Capítulo 13. Consulta en la oficina de Palm Springs; presentación en el tribunal federal de Riverside en 3420 Twelfth Street.",
    ],
    sections: [
          {
            h2: "Opciones de alivio de deudas",
            paragraphs: [
            "El Capítulo 7 es la descarga más rápida para quienes califican. El Capítulo 13 es el plan de pago cuando necesita conservar la propiedad o los ingresos superan los límites del Capítulo 7.",
            ],
          },
          {
            h2: "Exención de vivienda",
            paragraphs: [
            "La exención de vivienda de California protege la mayoría de las casas del valle — verificamos el capital en la reunión gratuita con documentos, no suposiciones.",
            ],
          },
          {
            h2: "3420 Twelfth Street, Riverside",
            paragraphs: [
            "Todas las bancarrotas de consumidor del Valle de Coachella se presentan en Riverside, no en Indio. Tarifas judiciales $338/$313. Agencia de alivio de deudas bajo el Código de Bancarrota. (760) 835-9353.",
            ],
          },
    ],
  },
  'cathedral-city': {
    h1: "Abogado de bancarrota en Cathedral City — se presenta en Riverside",
    title: "Abogado de Bancarrota Cathedral City | Lombera",
    description: "Abogado de bancarrota en Cathedral City. Detenga el embargo y la ejecución hipotecaria. Presentación en Riverside. (760) 835-9353.",
    lead: [
      "Las familias de Cathedral City con deuda creciente de tarjetas de crédito, facturas médicas o un aviso de ejecución hipotecaria pueden detener las cobranzas presentando bancarrota. Edgar P. Lombera prepara el caso desde Palm Springs; el Tribunal de Bancarrota de EE. UU. está en 3420 Twelfth Street, Riverside.",
    ],
    sections: [
          {
            h2: "Capítulo 7 y Capítulo 13 explicados",
            paragraphs: [
            "El Capítulo 7 elimina la deuda no garantizada que califica. El Capítulo 13 es el plan supervisado por el tribunal para ponerse al día con la hipoteca o manejar la deuda cuando el Capítulo 7 no está disponible.",
            ],
          },
          {
            h2: "Alivio del embargo de salario",
            paragraphs: [
            "La suspensión automática detiene la mayoría de los embargos el día que se presenta la petición — antes de que tomen otro cheque de pago.",
            ],
          },
          {
            h2: "Dirección del tribunal federal",
            paragraphs: [
            "Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside. Consulta gratis en inglés o español. (760) 835-9353.",
            ],
          },
    ],
  },
  indio: {
    h1: "Abogado de bancarrota en Indio — el tribunal federal está en Riverside",
    title: "Abogado de Bancarrota Indio | Tribunal Riverside",
    description: "Bancarrota en Indio — Capítulo 7 y 13 presentados en Riverside, no en Larson Justice Center. Alivio de embargo. (760) 835-9353.",
    lead: [
      "El Larson Justice Center en 46-200 Oasis St., Indio, maneja casos del Tribunal Superior civil — no bancarrota de consumidor. Reúnase con Edgar en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — (760) 835-9353; todo Capítulo 7 y Capítulo 13 se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside. Edgar P. Lombera, Colegio de Abogados de California No. 259393.",
    ],
    sections: [
          {
            h2: "Oasis Street es solo tribunal civil",
            paragraphs: [
            "Las demandas por lesiones de Indio pueden presentarse en el Larson Justice Center. La bancarrota es federal y se presenta solo en 3420 Twelfth Street, Riverside — nunca en la sucursal del Tribunal Superior de Indio.",
            ],
          },
          {
            h2: "Capítulo 7 y Capítulo 13",
            paragraphs: [
            "El Capítulo 7 dura unos 90 a 120 días si pasa la prueba de medios. El Capítulo 13 es un plan de tres a cinco años. La defensa de ejecución hipotecaria y la detención del embargo de salario van en la petición — no son complementos separados. La suspensión automática comienza el día de la presentación.",
            ],
          },
          {
            h2: "Exención de vivienda, 341 y tarifas judiciales",
            paragraphs: [
            "La exención de vivienda se confirma en la consulta con sus documentos. La reunión 341 suele ser remota. Tarifas judiciales 2026: $338 Capítulo 7, $313 Capítulo 13. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).",
            ],
          },
    ],
  },
  redlands: {
    h1: 'Abogado de Bancarrota en Redlands',
    title: 'Abogado de Bancarrota Redlands | Capítulo 7 y 13 | Inland Empire | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 en 2068 Orange Tree Lane, Suite 220, Redlands. Presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (909) 915-0181.',
    lead: [
      'Esta es la oficina del Inland Empire — 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Edgar P. Lombera prepara las peticiones del Capítulo 7 y el Capítulo 13 aquí. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Todo caso de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — no hay tribunal de bancarrota en Redlands, San Bernardino ni Indio. Llame al (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar pasa la prueba de medios — tarjetas de crédito, facturas médicas y saldos de deficiencia tras la recuperación del vehículo. Esta es una revisión de hogar del Inland Empire en Orange Tree Lane, no una línea de ensamblaje de un molino nacional. Un caso típico sin activos se elimina en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y cramdown',
        paragraphs: [
          'El Capítulo 13 pone al día los atrasos de la hipoteca en tres a cinco años y puede hacer cramdown de ciertas deudas garantizadas cuando el código lo permite. Los propietarios de Redlands atrasados en la hipoteca o con fecha de venta usan el plan para forzar una pausa y una recuperación estructurada — no un producto separado de defensa de ejecución hipotecaria.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario, las ventas de ejecución hipotecaria y los esfuerzos de recuperación de vehículos deben pausar para la mayoría de los acreedores. Esperar hasta el próximo cheque o fecha de venta del síndico quema tiempo que la suspensión habría protegido.',
        ],
      },
      {
        h2: 'Dónde presenta Redlands — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Toda bancarrota de consumidor de Redlands se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — unas 12 millas y 17 minutos al oeste-suroeste por California Street, la I-10, la I-215 y Mission Inn Avenue. Eso no es el tribunal civil de 4050 Main Street, no es 247 W. 3rd St., no es Tahquitz Canyon Way, ni la División Indio. Las tarifas oficiales de presentación judicial son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 suele ser remota.',
        ],
      },
      {
        h2: 'Deuda fiscal frente a acuerdo por lesiones',
        paragraphs: [
          'La deuda fiscal antigua por ingresos puede eliminarse en el Capítulo 7 cuando se cumplen las reglas de plazo y aviso — lo confirmamos en la consulta, no en una página web. Un acuerdo por lesiones personales del mismo hogar es una pregunta separada; la bancarrota y el trabajo de lesiones permanecen en dos prácticas bajo un mismo techo. Las exenciones de vivienda de California se confirman con sus documentos — no imprimimos montos en dólares aquí.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Palm Springs es la otra oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
        ],
      },
    ],
  },
  'san-bernardino': {
    h1: 'Abogado de Bancarrota en San Bernardino',
    title: 'Abogado de Bancarrota San Bernardino | Capítulo 7 y 13 | Inland Empire | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 para hogares de San Bernardino. Preparado en 2068 Orange Tree Lane, Redlands; presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (909) 915-0181.',
    lead: [
      'No hay suite de Lombera en Hospitality Lane, 255 N D Street ni 247 W. 3rd Street. Los embargos de salario y avisos de ejecución hipotecaria en San Bernardino son cobranza del tribunal estatal hasta que se presenta una petición federal. Reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — unas 8 millas y 14 minutos al sureste por la I-10 desde el centro de San Bernardino. Él prepara el Capítulo 7 y el Capítulo 13 aquí. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Todo caso de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — no hay tribunal de bancarrota en San Bernardino. Llame al (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar pasa la prueba de medios — tarjetas de crédito, facturas médicas de proveedores de San Bernardino y saldos de deficiencia tras la recuperación de un vehículo. Esta es una revisión de hogar del Inland Empire en Orange Tree Lane, no un molino de volumen. Un caso típico sin activos se elimina en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y reducción forzada del saldo garantizado',
        paragraphs: [
          'El Capítulo 13 incorpora los atrasos de la hipoteca en un plan judicial de tres a cinco años y puede reducir de forma forzada ciertos saldos garantizados donde el Código de Bancarrota lo permite — útil cuando un hogar de San Bernardino está atrasado en la casa pero aún tiene ingresos para financiar un plan. No es un producto aparte junto a la defensa de ejecución hipotecaria; el plan es el alivio.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario vinculados a empleadores de San Bernardino, las ventas de ejecución hipotecaria programadas y los plazos de recuperación de vehículos se pausan para la mayoría de los acreedores. Presentar antes del próximo cheque o fecha de venta protege el tiempo que esperar consumiría.',
        ],
      },
      {
        h2: 'Dónde presenta San Bernardino — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Toda bancarrota de consumidor del condado de San Bernardino se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — unas 12 millas y 17 minutos al oeste-suroeste desde el escritorio en Orange Tree Lane por California Street, la I-10, la I-215 y Mission Inn Avenue. Eso no es el tribunal civil de 247 W. 3rd St., no es Hospitality Lane, no es 255 N D Street, no es 4050 Main Street, no es Tahquitz Canyon Way ni la División Indio. Las tarifas oficiales de presentación judicial son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 suele ser remota.',
        ],
      },
      {
        h2: 'Deuda fiscal frente a acuerdo por lesiones',
        paragraphs: [
          'La deuda fiscal antigua por ingresos puede eliminarse en el Capítulo 7 cuando se cumplen las reglas de plazo y aviso — lo confirmamos en la consulta. Un acuerdo por lesiones personales del mismo hogar es una pregunta separada bajo el modelo de dos prácticas. Las exenciones de vivienda de California se confirman con sus documentos — no imprimimos montos en dólares aquí.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Desde San Bernardino, la consulta es unas 8 millas y 14 minutos al sureste por la I-10 — no un local en el centro. Palm Springs es la otra oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
        ],
      },
    ],
  },
  riverside: {
    h1: "Abogado de bancarrota en Riverside — 3420 Twelfth Street",
    title: "Abogado de Bancarrota Riverside | Lombera",
    description: "Abogado de bancarrota en Riverside. Capítulo 7, Capítulo 13, alivio de embargo. Presente en 3420 Twelfth St. (909) 915-0181.",
    lead: [
      "Los residentes de Riverside pueden reunirse con Edgar P. Lombera en Redlands y presentar en el Tribunal de Bancarrota de EE. UU. a pocas cuadras del tribunal civil del condado — 3420 Twelfth Street para bancarrota, 4050 Main St. para demandas por lesiones. Dos tribunales diferentes, un bufete.",
    ],
    sections: [
          {
            h2: "Capítulo 7 y Capítulo 13",
            paragraphs: [
            "Capítulo 7 para deuda no garantizada que califica. Capítulo 13 cuando necesita ponerse al día con la hipoteca o los ingresos superan los límites del Capítulo 7.",
            ],
          },
          {
            h2: "Suspensión automática",
            paragraphs: [
            "La suspensión comienza el día de la presentación — embargos, demandas de cobro y la mayoría de los pasos de ejecución hipotecaria se pausan.",
            ],
          },
          {
            h2: "Tribunal federal",
            paragraphs: [
            "Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside. Tarifas judiciales $338/$313. Consulta gratis. (909) 915-0181.",
            ],
          },
    ],
  },
  'moreno-valley': {
    h1: "Abogado de bancarrota en Moreno Valley — se presenta en Riverside",
    title: "Abogado de Bancarrota Moreno Valley | Lombera",
    description: "Bancarrota en Moreno Valley — embargo, ejecución hipotecaria, Capítulo 7 y 13. Tribunal Riverside. (909) 915-0181.",
    lead: [
      "Las familias de Moreno Valley que enfrentan costos del viaje en la SR-60, deuda médica y acoso de acreedores pueden presentar el Capítulo 7 o el Capítulo 13. Edgar P. Lombera prepara el caso desde Redlands; la presentación es en 3420 Twelfth Street, Riverside.",
    ],
    sections: [
          {
            h2: "Rutas de alivio de deudas",
            paragraphs: [
            "El Capítulo 7 elimina la deuda no garantizada que califica. El Capítulo 13 es el plan para conservar la casa y ponerse al día con la hipoteca en tres a cinco años.",
            ],
          },
          {
            h2: "Detener el embargo",
            paragraphs: [
            "La suspensión automática bloquea la mayoría de los embargos de salario el día que se presenta el caso — antes del próximo período de pago.",
            ],
          },
          {
            h2: "Solo tribunal de bancarrota de Riverside",
            paragraphs: [
            "3420 Twelfth Street, Riverside. No en Indio. Agencia de alivio de deudas bajo 11 U.S.C. §528. (909) 915-0181.",
            ],
          },
    ],
  },
  highland: {
    h1: "Abogado de bancarrota en Highland — se presenta en Riverside",
    title: "Abogado de Bancarrota Highland | Lombera",
    description: "Bancarrota en Highland. Defensa de ejecución hipotecaria, embargo de salario, Capítulo 7 y 13. Riverside. (909) 915-0181.",
    lead: [
      "Propietarios e inquilinos de Highland con deuda de tarjetas de crédito, facturas médicas o una carta de ejecución hipotecaria pueden presentar bancarrota desde la oficina de Redlands. Las peticiones de consumidor van al Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside.",
    ],
    sections: [
          {
            h2: "Capítulo 7 frente al Capítulo 13",
            paragraphs: [
            "El Capítulo 7 es la vía de descarga más rápida. El Capítulo 13 protege la propiedad y pone al día la deuda garantizada cuando los ingresos respaldan un plan.",
            ],
          },
          {
            h2: "Exenciones de California",
            paragraphs: [
            "La exención de vivienda y otras exenciones de California se revisan con documentos en la consulta gratuita — no se estiman desde un sitio web.",
            ],
          },
          {
            h2: "Presentar en Riverside",
            paragraphs: [
            "Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside. (909) 915-0181.",
            ],
          },
    ],
  },
  hemet: {
    h1: "Abogado de bancarrota en Hemet — se presenta en Riverside",
    title: "Abogado de Bancarrota Hemet | Lombera",
    description: "Abogado de bancarrota en Hemet. Capítulo 7, Capítulo 13, alivio de embargo. Presentado en Riverside. (909) 915-0181.",
    lead: [
      "Los residentes del corredor de la SR-74 en Hemet que enfrentan deuda médica, tarjetas de crédito o embargo de salario pueden presentar el Capítulo 7 o el Capítulo 13. Edgar P. Lombera consulta desde Redlands; todos los casos de consumidor se presentan en 3420 Twelfth Street, Riverside.",
    ],
    sections: [
          {
            h2: "Deuda médica y de tarjetas",
            paragraphs: [
            "El Capítulo 7 puede eliminar muchas facturas hospitalarias y saldos no garantizados. El Capítulo 13 estructura el pago cuando necesita conservar la casa.",
            ],
          },
          {
            h2: "Suspensión automática",
            paragraphs: [
            "La presentación detiene la mayor parte de la actividad de cobro el día que se acepta la petición — incluidos los embargos.",
            ],
          },
          {
            h2: "Tribunal federal de Riverside",
            paragraphs: [
            "3420 Twelfth Street, Riverside. No hay tribunal de bancarrota en Hemet ni Indio. Consulta gratis. (909) 915-0181.",
            ],
          },
    ],
  },
  'desert-hot-springs': {
    h1: "Abogado de bancarrota en Desert Hot Springs — se presenta en Riverside",
    title: "Abogado de Bancarrota Desert Hot Springs | Lombera",
    description: "Bancarrota en Desert Hot Springs. Capítulo 7 y 13 presentados en Riverside. Oficina Palm Springs (760) 835-9353.",
    lead: [
      "Las familias de Desert Hot Springs pueden consultar en la oficina de Palm Springs y presentar bancarrota en el Tribunal de Bancarrota de EE. UU. en Riverside — 3420 Twelfth Street. Capítulo 7 y Capítulo 13, defensa de ejecución hipotecaria y alivio del embargo de salario.",
    ],
    sections: [
          {
            h2: "Consulta en el valle, presentación federal",
            paragraphs: [
            "Reúnase en 1276 N Palm Canyon Dr #107 en Palm Springs. La petición se presenta en Riverside — no en el tribunal civil de Indio.",
            ],
          },
          {
            h2: "Capítulo 7 y Capítulo 13",
            paragraphs: [
            "Capítulo 7 para deuda no garantizada que califica. Capítulo 13 para ponerse al día con la hipoteca y detener la ejecución hipotecaria en tres a cinco años.",
            ],
          },
          {
            h2: "3420 Twelfth Street, Riverside",
            paragraphs: [
            "Agencia de alivio de deudas. Tarifas judiciales $338 Cap.7 / $313 Cap.13. (760) 835-9353.",
            ],
          },
    ],
  },
}

export function cityCopy(
  practice: Practice,
  citySlug: string,
  locale: Locale,
): CityPageCopy | null {
  if (!(citySlug in PI_EN)) return null
  const city = citySlug as CitySlug
  if (practice === 'personal-injury') {
    return locale === 'es' ? PI_ES[city] : PI_EN[city]
  }
  return locale === 'es' ? BK_ES[city] : BK_EN[city]
}

export function cityDisplayName(citySlug: string, locale: Locale): string {
  const city = citySlug as CitySlug
  return CITY_NAMES[city]?.[locale] ?? citySlug
}
