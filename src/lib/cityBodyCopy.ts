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
  | 'yucaipa'
  | 'la-quinta'
  | 'ontario'

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
  yucaipa: { en: 'Yucaipa', es: 'Yucaipa' },
  'la-quinta': { en: 'La Quinta', es: 'La Quinta' },
  ontario: { en: 'Ontario', es: 'Ontario' },
}

const PI_EN: Record<CitySlug, CityPageCopy> = {
  fontana: {
    h1: 'Fontana personal injury lawyer',
    title: 'Fontana Personal Injury Lawyer | I-10 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / I-15 / SR-210 crashes in Fontana. Meet at 2068 Orange Tree Lane #220, Redlands — about 15 miles and 21 minutes east. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront in Fontana and no suite on Sierra Avenue. After a Fontana wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From Fontana City Hall, take Sierra Avenue to the I-10 east, then California Street — about 15 miles and 21 minutes east. The drive is east. I-10, I-15, and SR-210 are crash corridors on this page, not the route to a Fontana storefront. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, I-15, and SR-210',
        paragraphs: [
          'Sierra Avenue, the Slover / Cherry warehouse grid, and Foothill Boulevard (Historic Route 66) sit under through-truck traffic on the I-10, I-15, and SR-210 that produces the commercial collisions leading this docket. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Civil lawsuits from these freight corridors file at San Bernardino County Superior Court / Justice Center, 247 W. 3rd Street, San Bernardino — often after a hop east on Foothill Boulevard toward the I-10. This is Inland Empire freight — not an LA harbor page. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Sierra Avenue',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Sierra Avenue, Foothill Boulevard, and the I-10 / I-15 connectors carry heavy rideshare volume between warehouse shifts and commuter runs. Fontana rideshare claims stay on /personal-injury/fontana/. We do not invent a /uber/ or /rideshare/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 247 W. 3rd Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files are filed at San Bernardino County Superior Court / Justice Center, 247 W. 3rd Street, San Bernardino — not Fontana District on Arrow, not Haven Avenue, and not Tahquitz Canyon Way or Oasis in the desert divisions. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. A warehouse or logistics injury on Sierra Avenue or the Slover / Cherry grid can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Future medical care and vocational loss drive the damages case. This is not medical advice.',
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
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Fontana, the consultation is about 15 miles and 21 minutes east via Sierra Avenue, the I-10, and California Street — not a Sierra Avenue storefront. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside — about 11 miles and 20 minutes south-southeast. Palm Springs is the second office — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  colton: {
    h1: 'Colton personal injury lawyer',
    title: 'Colton Personal Injury Lawyer | I-10/I-215 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / I-215 / Colton Crossing crashes. Meet at 2068 Orange Tree Lane #220, Redlands — about 6.5 miles and 10 minutes east. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront in Colton. After a Colton wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From Colton City Hall at 650 N. La Cadena, take the 9th Street on-ramp to the I-10 east, then California Street — about 6.5 miles and 10 minutes east. The drive is east. I-10, I-215, and Colton Crossing are crash corridors on this page, not the route to the office. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, I-215, Mt Vernon, and Colton Crossing',
        paragraphs: [
          'Colton Crossing — where the I-10 meets the I-215 — plus Mt Vernon Avenue, La Cadena Drive, and through-truck traffic from the warehouse grid produce the freight collisions that lead this docket. Merge pressure at the I-10 / I-215 stack and yard traffic on Mt Vernon push rear-end and override events before loads clear valley corridors. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from Colton file at San Bernardino County Superior Court / Justice Center, 247 W. 3rd Street, San Bernardino — about 3.5 miles and 8 minutes northeast from Colton City Hall at 650 N. La Cadena. This is Colton’s I-10 / I-215 junction — not Fontana’s I-10 / I-15 / Sierra freight page, not Highland’s I-210 / SR-210 / Base Line, not Moreno Valley’s SR-60 / I-215, and not Riverside’s 60 / 91 / 215 stack. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Valley Boulevard, La Cadena, Mt Vernon, and Rancho',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Valley Boulevard, La Cadena Drive, Mt Vernon Avenue, and the Rancho corridor stack rideshare pickups between warehouse shifts, CSUSB commuter runs, and I-215 interchange traffic at Colton Crossing. Colton rideshare claims stay on /personal-injury/colton/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 247 W. 3rd Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files are filed at San Bernardino County Superior Court / Justice Center, 247 W. 3rd Street, San Bernardino — not 4050 Main Street in Riverside, not Tahquitz Canyon Way, not 400 N. Pepper, and not Arrow Boulevard. The courthouse sits about 3.5 miles and 8 minutes northeast from Colton City Hall at 650 N. La Cadena.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. A Colton Crossing or Mt Vernon corridor collision can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Initial trauma care often starts at Arrowhead Regional Medical Center or St. Bernardine Medical Center before the long-term damages picture is clear. Future medical care, life-care planning, and vocational loss drive the case insurers try to close early. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most Colton injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, east',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Colton, the consultation is about 6.5 miles and 10 minutes east via the 9th Street on-ramp, the I-10, and California Street — not a Colton storefront. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 9 miles and 14 minutes south. Palm Springs is the second office only — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'rancho-cucamonga': {
    h1: 'Rancho Cucamonga personal injury lawyer',
    title: 'Rancho Cucamonga Personal Injury Lawyer | I-15/I-210 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-15 / I-210 / I-10 crashes in Rancho Cucamonga. Meet at 2068 Orange Tree Lane #220, Redlands — about 24 miles and 31 minutes east. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront in Rancho Cucamonga. After a Rancho Cucamonga wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From Rancho Cucamonga City Hall at 10500 Civic Center Drive, take Haven Avenue to the I-10 east, then California Street — about 24 miles and 31 minutes east. The drive is east. I-15 and I-210 are crash corridors on this page, not the route to the office. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-15, I-210, and I-10',
        paragraphs: [
          'Commercial truck traffic on I-15, I-210, and the I-10 approaches through Haven Avenue, Foothill Boulevard, and the Ontario / Rancho warehouse corridors produces the freight collisions that lead this docket. Merge pressure at the I-15 / I-210 / I-10 stack and distribution traffic on Haven push rear-end and override events before loads clear valley corridors. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from Rancho Cucamonga file at San Bernardino County Superior Court, 8303 Haven Avenue — about 0.2 miles and 1 minute northeast from Rancho Cucamonga City Hall at 10500 Civic Center Drive, adjacent on Haven. This is Rancho’s I-15 / I-210 / I-10 stack — not Fontana’s I-10 / I-15 / Sierra freight page, not Colton Crossing / Mt Vernon, not Highland’s I-210 / SR-210 / Base Line, not Moreno Valley’s SR-60 / I-215, and not Riverside’s 60 / 91 / 215. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
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
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files from Rancho Cucamonga are filed at San Bernardino County Superior Court, 8303 Haven Avenue — not 247 W. 3rd St. in San Bernardino, not 4050 Main Street in Riverside, not Tahquitz Canyon Way, not Oasis Street, not Arrow Boulevard, and not 400 N. Pepper. The courthouse sits about 0.2 miles and 1 minute northeast from Rancho Cucamonga City Hall at 10500 Civic Center Drive — adjacent on Haven Avenue.',
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
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most Rancho Cucamonga injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, east',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Rancho Cucamonga, the consultation is about 24 miles and 31 minutes east via Haven Avenue to the I-10 east and California Street — not a Rancho Cucamonga storefront. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 20 miles and 29 minutes southeast. Palm Springs is the second office only — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  beaumont: {
    h1: 'Beaumont personal injury lawyer',
    title: 'Beaumont Personal Injury Lawyer | I-10 Pass Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / San Gorgonio Pass crashes in Beaumont, California. Meet at 2068 Orange Tree Lane #220, Redlands — about 19 miles and 23 minutes northwest. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront in Beaumont, California — not Beaumont, Texas. After a Beaumont wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From downtown Beaumont, take Orange Avenue to 6th Street, Beaumont Avenue, the I-10 west, then California Street — about 19 miles and 23 minutes northwest. The drive is northwest. I-10, the San Gorgonio Pass, and Beaumont Avenue are crash corridors on this page, not the route to a Beaumont storefront. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, the San Gorgonio Pass, and Beaumont Avenue',
        paragraphs: [
          'Commercial truck traffic on I-10 through the San Gorgonio Pass, along Beaumont Avenue, and on the 6th Street / Pennsylvania Avenue connectors produces the freight collisions that lead this docket. Wind shear, descending grades, and desert heat push brake failures and jackknife events across the pass before loads reach valley corridors. These Pass and Beaumont Avenue wrecks belong here. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from ZIP 92223 file at Riverside County Superior Court, Historic Courthouse, 4050 Main Street, Riverside — about 25.5 miles and 35 minutes west from Beaumont City Hall. This is Beaumont\u2019s I-10 / San Gorgonio Pass / Beaumont Avenue freight — not Fontana\u2019s I-10 / I-15 / Sierra page, not Moreno Valley\u2019s SR-60 / I-215, not Palm Springs\u2019 desert Hwy 111 clone, and not Colton Crossing. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Beaumont Avenue, Highland Springs, Pennsylvania Avenue, and 6th Street',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Beaumont Avenue, Highland Springs Avenue, 6th Street, and Pennsylvania Avenue stack rideshare pickups between Cherry Valley commuter runs, retail shifts at the Beaumont Marketplace corridor, and warehouse-gap drivers heading toward the Pass. Beaumont, California rideshare claims stay on /personal-injury/beaumont/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 4050 Main Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files for Beaumont ZIP 92223 are filed at Riverside County Superior Court, Historic Courthouse, 4050 Main Street, Riverside — not Tahquitz Canyon Way, not 13800 Heacock, not 247 W. 3rd St., not 8303 Haven Avenue, not Oasis Street, and not the Indio Division.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. A San Gorgonio Pass or Beaumont Avenue corridor collision can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Initial trauma care often starts at San Gorgonio Memorial Hospital or the Banning Pass corridor before the long-term damages picture is clear. Future medical care, life-care planning, and vocational loss drive the case insurers try to close early. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most Beaumont, California injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, northwest',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Beaumont, the consultation is about 19 miles and 23 minutes northwest via Orange Avenue, 6th Street, Beaumont Avenue, the I-10 west, and California Street — not a Beaumont storefront. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 12 miles and 17 minutes southwest. Palm Springs is the second office only — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'palm-springs': {
    h1: 'Palm Springs personal injury lawyer',
    title: 'Palm Springs Personal Injury Lawyer | I-10/San Gorgonio Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / San Gorgonio / Hwy 111 crashes in Palm Springs. Sit-down office at 1276 N Palm Canyon Dr #107 — about 3.2 miles and 7 minutes west-northwest from City Hall. (760) 835-9353.',
    lead: [
      'This is the Coachella Valley sit-down office — 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. From Palm Springs City Hall at 3200 East Tahquitz Canyon Way — civic reference only, not our address — the consultation room is about 3.2 miles and 7 minutes west-northwest via Civic Center Drive, Tahquitz Canyon Way, Sunrise Way, Tachevah Road, and N Palm Canyon Drive. I-10, the San Gorgonio Pass, Highway 111, Palm Canyon Drive, and Indian Canyon Drive are crash corridors on this page, not the route from City Hall to the storefront. Call (760) 835-9353. Edgar P. Lombera takes injury files here in English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, the San Gorgonio Pass, and Highway 111',
        paragraphs: [
          'Commercial truck traffic on I-10 through the San Gorgonio Pass and along Highway 111 produces the freight collisions that lead this docket. Wind shear, descending grades, and desert heat push brake failures and jackknife events across the pass before loads reach valley retail corridors. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from these freight corridors file at Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — about 0.1 miles and under 1 minute east along the Tahquitz Canyon corridor from City Hall at 3200 East Tahquitz Canyon Way. This is desert I-10 / San Gorgonio / Hwy 111 freight — not Fontana\u2019s I-10 / I-15 / Sierra page, not Colton Crossing, not Rancho\u2019s I-15 / I-210, not Highland\u2019s I-210 / SR-210 / Base Line, not Moreno Valley\u2019s SR-60 / I-215, and not Riverside\u2019s 60 / 91 / 215 grid. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Palm Canyon Drive, Indian Canyon Drive, and Highway 111',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Downtown Palm Canyon, the Uptown Design District, Indian Canyon resort runs, and Highway 111 valley connectors stack rideshare pickups between seasonal tourism surges, airport shuttles, and weekend event traffic. Palm Springs rideshare claims stay on /personal-injury/palm-springs/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files for Palm Springs are filed at Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — not Oasis Street, not 4050 Main Street, not 247 W. 3rd Street, and not any Indio Division leftover routing. The courthouse sits about 0.1 miles and under 1 minute east along the Tahquitz Canyon corridor from City Hall at 3200 East Tahquitz Canyon Way — adjacent civic filing, not the Palm Canyon office hop.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. A San Gorgonio Pass or Palm Canyon corridor collision can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Initial trauma care often starts at Desert Regional Medical Center before the long-term damages picture is clear. Future medical care, life-care planning, and vocational loss drive the case insurers try to close early. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most Palm Springs injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, local sit-down',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. The storefront sits on N Palm Canyon Drive — about 3.2 miles and 7 minutes west-northwest from City Hall at 3200 East Tahquitz Canyon Way when you route Civic \u2192 Tahquitz \u2192 Sunrise \u2192 Tachevah \u2192 N Palm Canyon. If the same wreck sinks the household, the same (760) 835-9353 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 55 miles and 71 minutes west-northwest. Redlands is the second office only — 2068 Orange Tree Lane, Suite 220, (909) 915-0181 — about 49 miles and 60 minutes west-northwest, not the Palm Springs lead line.',
        ],
      },
    ],
  },
  'palm-desert': {
    h1: 'Palm Desert personal injury lawyer',
    title: 'Palm Desert Personal Injury Lawyer | I-10/111 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / Highway 111 crashes in Palm Desert. Meet at 1276 N Palm Canyon Dr #107, Palm Springs — about 17 miles and 26 minutes northwest. (760) 835-9353.',
    lead: [
      'There is no Lombera storefront in Palm Desert, California. After a Palm Desert wreck, meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. From Palm Desert City Hall at 73510 Fred Waring Drive — civic reference only, not our address — take Civic Center Drive to San Pablo, Fred Waring Drive, Monterey Avenue, the I-10 west, Date Palm Drive, Vista Chino / CA-111, and N Palm Canyon Drive — about 17 miles and 26 minutes northwest. The drive is northwest. I-10, Highway 111, El Paseo, and the Monterey / Fred Waring retail corridors are crash corridors on this page, not the route to the Palm Canyon office. Call (760) 835-9353. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10 and Highway 111',
        paragraphs: [
          'Commercial truck traffic on I-10 and Highway 111 through Palm Desert produces the freight collisions that lead this docket. Desert heat, valley retail delivery cycles, and I-10 merge pressure at Date Palm and Monterey produce rear-end and override events before freight clears El Paseo retail loops. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from Palm Desert file at Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — about 12 miles and 22 minutes northwest from Palm Desert City Hall at 73510 Fred Waring Drive. This is Palm Desert\u2019s I-10 / 111 corridor — not the San Gorgonio Pass page for Palm Springs, not Cathedral City\u2019s Date Palm / Ramon stack, not Indio\u2019s Jackson corridor, and not Fontana, Colton, or Rancho freight copy. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on El Paseo, Monterey Avenue, and Highway 111',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. El Paseo retail, Monterey Avenue outlet traffic, and Highway 111 valley connectors stack rideshare pickups between seasonal tourism, golf-resort drop-offs, and weekend event surges. Palm Desert rideshare claims stay on /personal-injury/palm-desert/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files for Palm Desert are filed at Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — not Oasis Street, not 4050 Main Street, not 247 W. 3rd St., not 8303 Haven Avenue, and not the Indio Division.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. An I-10 or El Paseo corridor collision can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Initial trauma care often starts at Eisenhower Health before the long-term damages picture is clear. Future medical care, life-care planning, and vocational loss drive the case insurers try to close early. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most Palm Desert injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, northwest',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Palm Desert, the consultation is about 17 miles and 26 minutes northwest via Civic Center Drive, San Pablo, Fred Waring Drive, Monterey Avenue, the I-10 west, Date Palm Drive, Vista Chino / CA-111, and N Palm Canyon Drive — not a Palm Desert storefront. If the same wreck sinks the household, the same (760) 835-9353 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside. Redlands is the second office only — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  'cathedral-city': {
    h1: 'Cathedral City personal injury lawyer',
    title: 'Cathedral City Personal Injury Lawyer | I-10/111 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / Highway 111 crashes in Cathedral City. Meet at 1276 N Palm Canyon Dr #107, Palm Springs — about 9 miles and 15 minutes northwest. (760) 835-9353.',
    lead: [
      'There is no Lombera storefront in Cathedral City. After a Cathedral City wreck, meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. From Cathedral City City Hall at 68700 Avenida Lalo Guerrero — civic reference only, not our address — take Cathedral Canyon Drive, East Palm Canyon Drive, Gene Autry Trail, Vista Chino / CA-111, and N Palm Canyon Drive — about 9 miles and 15 minutes northwest. The drive is northwest. I-10, Highway 111, Date Palm Drive, Ramon Road, and Cathedral Canyon Drive are crash corridors on this page, not the route to the Palm Canyon office. Call (760) 835-9353. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, Date Palm Drive, and Ramon Road',
        paragraphs: [
          'Commercial truck traffic on I-10, the Date Palm and Cathedral City Boulevard on-ramps, Date Palm Drive, and Ramon Road produces the freight collisions that lead this docket. Valley retail delivery cycles and I-10 merge pressure at Date Palm and Ramon produce rear-end and override events before freight clears valley retail corridors. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from Cathedral City ZIP codes 92234 and 92235 file at Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — about 5 miles and 11 minutes northwest from Cathedral City City Hall at 68700 Avenida Lalo Guerrero. This is Cathedral City\u2019s I-10 / Date Palm / Ramon stack — not Palm Desert\u2019s I-10 / 111 page, not the San Gorgonio Pass page for Palm Springs, not Indio\u2019s Jackson corridor, and not Fontana, Colton, or Rancho freight copy. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber, Lyft, and rideshare on Highway 111, Date Palm Drive, Ramon Road, and Cathedral Canyon Drive',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Highway 111, Date Palm Drive, Ramon Road, and Cathedral Canyon Drive stack rideshare pickups between valley commuter runs, casino and retail shifts, and weekend event traffic. Cathedral City rideshare claims stay on /personal-injury/cathedral-city/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files for Cathedral City ZIP codes 92234 and 92235 are filed at Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — not Oasis Street, not Larson Justice Center limited civil, not 4050 Main Street, not 247 W. 3rd St., not 8303 Haven Avenue, and not the Indio Division. The courthouse sits about 5 miles and 11 minutes northwest from Cathedral City City Hall at 68700 Avenida Lalo Guerrero.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. An I-10 or Highway 111 corridor collision can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Initial trauma care often starts at Desert Regional Medical Center before the long-term damages picture is clear. Future medical care, life-care planning, and vocational loss drive the case insurers try to close early. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most Cathedral City injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, northwest',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Cathedral City, the consultation is about 9 miles and 15 minutes northwest via Cathedral Canyon Drive, East Palm Canyon Drive, Gene Autry Trail, Vista Chino / CA-111, and N Palm Canyon Drive — not a Cathedral City storefront. If the same wreck sinks the household, the same (760) 835-9353 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside. Redlands is the second office only — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  indio: {
    h1: 'Indio personal injury lawyer',
    title: 'Indio Personal Injury Lawyer | I-10/111 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / Highway 111 crashes in Indio. Meet at 1276 N Palm Canyon Dr #107, Palm Springs — about 24 miles and 31 minutes west-northwest. (760) 835-9353.',
    lead: [
      'There is no Lombera storefront in Indio. After an Indio wreck, meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. From Indio City Hall at 100 Civic Center Mall — civic reference only, not our address — take Civic Center Drive, Jackson Street, the I-10 west, Date Palm Drive, Vista Chino / CA-111, and N Palm Canyon Drive — about 24 miles and 31 minutes west-northwest. The drive is west-northwest. I-10, Highway 111, Jackson Street, Monroe Street, and Avenue 42–44 are crash corridors on this page, not the route to the Palm Canyon office. Call (760) 835-9353. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10 and Highway 111',
        paragraphs: [
          'Commercial truck traffic on I-10 and Highway 111 through Indio produces the freight collisions that lead this docket. Festival-season freight surges, agricultural haulers on Jackson Street, and I-10 merge pressure at Date Palm produce rear-end and override events before loads clear valley retail corridors. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from Indio file at Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — about 21 miles and 30 minutes west-northwest from Indio City Hall at 100 Civic Center Mall. This is Indio\u2019s I-10 / 111 corridor — not Cathedral City\u2019s Date Palm / Ramon stack, not Palm Desert\u2019s Cook / Monterey page, not the San Gorgonio Pass page for Palm Springs, and not Fontana, Colton, or Rancho freight copy. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Highway 111, Monroe Street, Jackson, and Avenue 42–44',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Highway 111, Monroe Street, Jackson Street, and the Avenue 42–44 festival corridors stack rideshare pickups between Coachella Valley Music Festival surges, valley commute runs, and weekend event traffic. Indio rideshare claims stay on /personal-injury/indio/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files for Indio are filed at Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — not Oasis Street, not Larson Justice Center limited civil, not 4050 Main Street, not 247 W. 3rd St., not 8303 Haven Avenue, and not the Indio Division. The courthouse sits about 21 miles and 30 minutes west-northwest from Indio City Hall at 100 Civic Center Mall.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. An I-10 or Highway 111 corridor collision can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Initial trauma care often starts at JFK Memorial Hospital before the long-term damages picture is clear. Future medical care, life-care planning, and vocational loss drive the case insurers try to close early. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most Indio injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, west-northwest',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Indio, the consultation is about 24 miles and 31 minutes west-northwest via Civic Center Drive, Jackson Street, the I-10 west, Date Palm Drive, Vista Chino / CA-111, and N Palm Canyon Drive — not an Indio storefront. If the same wreck sinks the household, the same (760) 835-9353 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside. Redlands is the second office only — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  'la-quinta': {
    h1: 'La Quinta personal injury lawyer',
    title: 'La Quinta Personal Injury Lawyer | Free Case Call | Lombera Law',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / Highway 111 crashes in La Quinta. Meet at 1276 N Palm Canyon Dr #107, Palm Springs — about 23 miles and 34 minutes northwest. (760) 835-9353.',
    lead: [
      'There is no Lombera storefront in La Quinta. After a La Quinta wreck, meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. From La Quinta City Hall at 78495 Calle Tampico — civic reference only, not our address — take Washington Street, Varner Road, the I-10 west, Date Palm Drive, Vista Chino / CA-111, and N Palm Canyon Drive — about 23 miles and 34 minutes northwest. The drive is northwest. I-10, Highway 111, Washington Street, Fred Waring Drive, and Eisenhower Drive are crash corridors on this page, not the route to the Palm Canyon office. Call (760) 835-9353. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10 and Highway 111',
        paragraphs: [
          'Washington Street, Fred Waring Drive, Eisenhower Drive, and through-truck traffic on I-10 and Highway 111 through La Quinta produce the commercial collisions that lead this docket. Resort-season freight, golf-corridor haulers on Eisenhower, and I-10 merge pressure at Date Palm produce rear-end and override events before loads clear valley retail corridors. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from La Quinta file at Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — about 20 miles and 33 minutes northwest from La Quinta City Hall at 78495 Calle Tampico. This is La Quinta\u2019s I-10 / 111 corridor — not Cathedral City\u2019s Date Palm / Ramon stack, not Palm Desert\u2019s Cook / Monterey page, not Indio\u2019s Jackson / Monroe festival grid, and not the San Gorgonio Pass page for Palm Springs. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Highway 111, Washington Street, and Eisenhower Drive',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Highway 111, Washington Street, Fred Waring Drive, and the Eisenhower resort corridor stack rideshare pickups between PGA West event traffic, Old Town weekend runs, and valley commute trips. La Quinta rideshare claims stay on /personal-injury/la-quinta/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files for La Quinta are filed at Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — not 4050 Main Street, not 247 W. 3rd St., not 8303 Haven Avenue, and not Oasis Street. The courthouse sits about 20 miles and 33 minutes northwest from La Quinta City Hall at 78495 Calle Tampico.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. An I-10 or Highway 111 corridor collision can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Future medical care, life-care planning, and vocational loss drive the case insurers try to close early. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most La Quinta injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, northwest',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From La Quinta, the consultation is about 23 miles and 34 minutes northwest via Washington Street, Varner Road, the I-10 west, Date Palm Drive, Vista Chino / CA-111, and N Palm Canyon Drive — not a La Quinta storefront. If the same wreck sinks the household, the same (760) 835-9353 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 73.5 miles and 91 minutes northwest. Redlands is the second office only — 2068 Orange Tree Lane, Suite 220, (909) 915-0181 — about 67.5 miles and 80 minutes west-northwest.',
        ],
      },
    ],
  },
  redlands: {
    h1: 'Redlands personal injury lawyer',
    title: 'Redlands Personal Injury Lawyer | I-10/I-210 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury at 2068 Orange Tree Lane #220, Redlands — local sit-down office. About 3.5 miles west-northwest from City Hall. (909) 915-0181.',
    lead: [
      'This is the Redlands sit-down office — 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From Redlands City Hall at 35 Cajon Street — civic reference only, not our address — the consultation room is about 3.5 miles and 6 minutes west-northwest via Cajon Street, Orange Street, the I-10, and California Street to Orange Tree Lane. Call (909) 915-0181. Edgar P. Lombera takes injury files here in English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10 and I-210',
        paragraphs: [
          'Through-truck traffic on the I-10 and the I-210 connector meets Redlands commuters at Alabama Street, Orange Street, and the Redlands Boulevard arterials — the same freight lanes that feed San Bernardino County logistics without a separate harbor page. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from these corridors file at San Bernardino County Superior Court / Justice Center, 247 W. 3rd Street, San Bernardino — not Haven Avenue, not Tahquitz Canyon Way, and not Oasis in the desert divisions. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Redlands Boulevard, Orange Street, and the I-10 corridor',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. University of Redlands traffic, downtown Orange Street runs, and I-10 connector trips produce steady rideshare volume alongside commuter lanes. Redlands rideshare injury claims stay on /personal-injury/redlands/. We do not invent a /uber/ or /rideshare/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 247 W. 3rd Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files are filed at San Bernardino County Superior Court / Justice Center, 247 W. 3rd Street, San Bernardino. CCP §335.1 gives most victims two years to file; a public entity may require six-month written notice under Government Code §911.2 before suit.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. Initial trauma care often starts at Redlands Community Hospital or Loma Linda University Medical Center before the long-term damages picture is clear. Future medical care, life-care planning, and lost earning capacity drive the case insurers try to close early. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, local sit-down',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. The office sits on Orange Tree Lane — about 3.5 miles and 6 minutes west-northwest from City Hall at 35 Cajon Street when you route Cajon → Orange → I-10 → California Street. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at 3420 Twelfth Street, Riverside — about 15 miles and 21 minutes west-southwest. Palm Springs is the second office only — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'san-bernardino': {
    h1: 'San Bernardino personal injury lawyer',
    title: 'San Bernardino Personal Injury Lawyer | I-10/I-215/I-210 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / I-215 / I-210 crashes in San Bernardino. Meet at 2068 Orange Tree Lane #220, Redlands — about 8 miles and 14 minutes east-southeast via 2nd, I-215, and I-10. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront in San Bernardino. After a San Bernardino wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From San Bernardino City Hall at 290 N D Street (civic reference only), take 2nd Street to the I-215 south to the I-10 east, then California Street — about 8 miles and 14 minutes east-southeast. The drive is east-southeast. I-10, I-215, and I-210 are crash corridors on this page, not a downtown San Bernardino storefront. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, I-215, and I-210',
        paragraphs: [
          'Baseline Street, Hospitality Lane, and the I-215 / I-10 stack carry through-truck freight that produces the commercial collisions leading this docket. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from these freeway corridors file at San Bernardino County Superior Court / Justice Center, 247 W. 3rd Street — about 0.6 miles and 3 minutes east from downtown civic landmarks. This is San Bernardino’s I-10 / I-215 / I-210 junction — not Fontana’s I-10 / I-15 / Sierra freight page, not Riverside’s 60 / 91 / 215 grid, and not Redlands’ I-10 / Alabama corridor. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber, Lyft, and rideshare on Hospitality Lane and the I-215 corridor',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Hospitality Lane, E Street, Rialto Avenue, and the I-215 / I-10 interchange stack rideshare pickups between hospital shifts, CSUSB commuter traffic, and county-employee runs. San Bernardino rideshare claims stay on /personal-injury/san-bernardino/. We do not invent a /uber/ or /rideshare/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 247 W. 3rd Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files are filed at San Bernardino County Superior Court / Justice Center, 247 W. 3rd Street, San Bernardino — not Riverside’s 4050 Main Street, not Fontana District on Arrow, and not a Palm Springs division filing. The courthouse sits about 0.6 miles and 3 minutes east of downtown civic reference points.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. A freeway or interchange collision on the I-10, I-215, or I-210 can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Families often receive initial treatment at Community Hospital of San Bernardino, St. Bernardine Medical Center, Arrowhead Regional Medical Center, or Loma Linda University Medical Center. Future medical care and vocational loss drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most San Bernardino injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, east-southeast',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From San Bernardino, the consultation is about 8 miles and 14 minutes east-southeast via 2nd Street, the I-215, the I-10, and California Street — not a downtown San Bernardino storefront. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 11 miles and 16 minutes south-southwest. Palm Springs is the second office — 1276 N Palm Canyon Dr #107, (760) 835-9353 — about 54 miles and 64 minutes east-southeast, not the San Bernardino lead line.',
        ],
      },
    ],
  },
  riverside: {
    h1: 'Riverside personal injury lawyer',
    title: 'Riverside Personal Injury Lawyer | 60/91/215 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from SR-60 / SR-91 / I-215 crashes in Riverside. Meet at 2068 Orange Tree Lane #220, Redlands — about 12 miles and 17 minutes northeast via Mission Inn, CA-91, and I-10. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront in Riverside. After a Riverside wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From Mission Inn Avenue downtown, take the CA-91 east to the I-10 east, then California Street — about 12 miles and 17 minutes northeast. The drive is northeast. SR-60, SR-91, and I-215 are crash corridors on this page, not the route to a Riverside storefront. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on SR-60, SR-91, and I-215',
        paragraphs: [
          'Tyler Street, Central Avenue, Magnolia Avenue, and the Box Springs / Arlington corridor sit under through-truck traffic on SR-60, SR-91, and I-215 that produces the commercial collisions leading this docket. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from these freeway corridors file at Riverside County Superior Court, Historic Courthouse, 4050 Main Street — often after a hop through Mission Inn or University Avenue. This is Riverside’s 60/91/215 grid — not Fontana’s I-10 / I-15 / Sierra freight page, not San Bernardino’s 247 W. 3rd belt. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Mission Inn, UCR, and the 91/60/215 interchange',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Mission Inn Avenue, the University of California Riverside campus, and the SR-91 / SR-60 / I-215 interchange stack rideshare pickups between student traffic, hospitality shifts, and county-commuter runs. Riverside rideshare claims stay on /personal-injury/riverside/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 4050 Main Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files are filed at Riverside County Superior Court, Historic Courthouse, 4050 Main Street, Riverside — not the Hall of Justice at 4100 Main, not 247 W. 3rd Street in San Bernardino, and not 13800 Heacock limited civil. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. A freeway or interchange collision on the 60, 91, or 215 can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Future medical care and vocational loss drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most Riverside injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, northeast',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Riverside, the consultation is about 12 miles and 17 minutes northeast via Mission Inn Avenue, the CA-91, the I-10, and California Street — not a downtown Riverside storefront. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 0.5 miles and 2 minutes south-southeast from downtown. Palm Springs is the second office if that drive is easier — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'moreno-valley': {
    h1: 'Moreno Valley personal injury lawyer',
    title: 'Moreno Valley Personal Injury Lawyer | 60/215 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from SR-60 / I-215 crashes in Moreno Valley. Meet at 2068 Orange Tree Lane #220, Redlands — about 19.5 miles and 26 minutes north then east. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront in Moreno Valley. After a Moreno Valley wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From City Hall at 14177 Frederick Street — civic reference only — take Frederick Street to Cactus Avenue, the I-215 north, the I-10 east, then California Street — about 19.5 miles and 26 minutes north then east. SR-60 and I-215 are crash corridors on this page, not the route to a Moreno Valley storefront. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on SR-60 and I-215',
        paragraphs: [
          'Frederick Street, Ironwood Avenue, Perris Boulevard, Alessandro Boulevard, Sunnymead Boulevard, and the March ARB / Moreno Valley Mall approaches sit under through-truck traffic on SR-60 and I-215 that produces the commercial collisions leading this docket. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from these freight corridors file at Riverside County Superior Court, Historic Courthouse, 4050 Main Street, Riverside — about 10 miles and 16 minutes northwest from Moreno Valley civic reference points, often after Frederick to Cactus to the I-215. This is Moreno Valley’s SR-60 / I-215 junction — not Fontana’s I-10 / I-15 / Sierra freight page, not Riverside’s 60 / 91 / 215 grid, and not San Bernardino’s 247 W. 3rd belt. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Frederick, Ironwood, Perris Boulevard, and Alessandro',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Frederick Street, Ironwood Avenue, Perris Boulevard, Alessandro Boulevard, and the SR-60 / I-215 interchange stack rideshare pickups between March ARB commuter runs, Sunnymead retail traffic, and warehouse-shift gaps. Moreno Valley rideshare claims stay on /personal-injury/moreno-valley/. We do not invent a /uber/ or /rideshare/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 4050 Main Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files for Moreno Valley ZIP codes are filed at Riverside County Superior Court, Historic Courthouse, 4050 Main Street, Riverside — not 247 W. 3rd Street in San Bernardino, not the Hall of Justice at 4100 Main, and not the limited civil courthouse in Moreno Valley.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. A freeway or interchange collision on SR-60 or I-215 near March ARB or the Sunnymead corridor can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Future medical care and vocational loss drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most Moreno Valley injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, north then east',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Moreno Valley, the consultation is about 19.5 miles and 26 minutes north then east via Frederick Street, Cactus Avenue, the I-215, the I-10, and California Street — not a Moreno Valley storefront. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 10 miles and 16 minutes west-northwest. Palm Springs is the second office only — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  highland: {
    h1: 'Highland personal injury lawyer',
    title: 'Highland Personal Injury Lawyer | 210/Base Line Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-210 / SR-210 / Base Line crashes in Highland. Meet at 2068 Orange Tree Lane #220, Redlands — about 5 miles and 10 minutes south. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront in Highland. After a Highland wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From Highland City Hall at 27215 Base Line — civic reference only — take Base Line to Palm Avenue, Alabama Street south, a short hop on the I-10, then California Street — about 5 miles and 10 minutes south. I-210, SR-210, and Base Line are crash corridors on this page, not the route to a Highland storefront. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-210, SR-210, and Base Line',
        paragraphs: [
          'East Highland, Greenspot Road, Victoria Avenue, and the I-210 / SR-210 / Base Line interchange carry through-truck freight that produces the commercial collisions leading this docket. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from these freight corridors file at San Bernardino County Superior Court, San Bernardino Justice Center, 247 W. 3rd Street — about 5.5 miles and 11 minutes west-southwest from Highland civic reference points, often after Base Line to Palm Avenue. This is Highland\u2019s I-210 / SR-210 / Base Line junction — not Fontana\u2019s I-10 / I-15 / Sierra freight page, not San Bernardino\u2019s I-10 / I-215 / I-210 belt, not Moreno Valley\u2019s SR-60 / I-215, and not Riverside\u2019s 60 / 91 / 215 grid. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Base Line, Highland Avenue, and Palm Avenue',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Base Line, Highland Avenue, Palm Avenue, Greenspot Road, and the I-210 / Base Line interchange stack rideshare pickups between commuter runs to Loma Linda, retail shifts at East Highland shopping corridors, and warehouse-gap drivers. Highland rideshare claims stay on /personal-injury/highland/. We do not invent a /uber/ or /rideshare/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 247 W. 3rd Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files for Highland ZIP codes are filed at San Bernardino County Superior Court, San Bernardino Justice Center, 247 W. 3rd Street, San Bernardino — not Arrow Boulevard, not 4050 Main Street in Riverside, and not a Highland courthouse because none exists.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. A freeway or interchange collision on I-210, SR-210, or Base Line near East Highland or the Greenspot corridor can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Future medical care and vocational loss drive the damages case. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most Highland injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, south',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Highland, the consultation is about 5 miles and 10 minutes south via Base Line, Palm Avenue, Alabama Street, a short hop on the I-10, and California Street — not a Highland storefront. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 17 miles and 25 minutes southwest. Palm Springs is the second office only — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  hemet: {
    h1: 'Hemet personal injury lawyer',
    title: 'Hemet Personal Injury Lawyer | SR-74/I-215 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from SR-74 / I-215 / Lamb Canyon crashes in Hemet. Meet at 2068 Orange Tree Lane #220, Redlands — about 33 miles and 43 minutes northwest. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront in Hemet. After a Hemet wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From Hemet City Hall at 445 E. Florida Avenue — civic reference only, not our address — take Florida Avenue, State Street, Ramona Expressway, Sanderson Avenue, Lamb Canyon Road, Beaumont Avenue, the I-10 west, and California Street — about 33 miles and 43 minutes northwest. The drive is northwest. SR-74, SR-79, I-215, Lamb Canyon Road, Florida Avenue, and Sanderson Avenue are crash corridors on this page, not the route to the office. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on SR-74, SR-79, I-215, and Lamb Canyon',
        paragraphs: [
          'Commercial truck traffic on the SR-74 mountain corridor, SR-79 toward Winchester, the I-215 connector, and Lamb Canyon Road produces the freight collisions that lead this docket. Florida Avenue through downtown Hemet and Sanderson Avenue stack merge pressure before loads reach valley corridors. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from Hemet ZIP codes 92543–92546 file at Riverside County Superior Court, Historic Courthouse, 4050 Main Street, Riverside — about 34 miles and 49 minutes northwest from Hemet City Hall at 445 E. Florida Avenue. This is Hemet’s SR-74 / SR-79 / I-215 / Lamb Canyon freight — not Beaumont’s I-10 / San Gorgonio Pass page, not Moreno Valley’s SR-60 / I-215, not Fontana’s I-10 / I-15 / Sierra grid, and not Rancho Cucamonga or Colton Crossing copy. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Florida Avenue, Sanderson Avenue, Stetson Avenue, and State Street',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Florida Avenue, Sanderson Avenue, Stetson Avenue, and State Street stack rideshare pickups between San Jacinto Valley commuter runs and retail shifts along the SR-74 corridor. Hemet rideshare claims stay on /personal-injury/hemet/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 4050 Main Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files for Hemet ZIP codes 92543–92546 are filed at Riverside County Superior Court, Historic Courthouse, 4050 Main Street, Riverside — not at the Hemet Division courthouse, not at Menifee Center Drive limited jurisdiction, not at Tahquitz Canyon Way, not at 247 W. 3rd St., not at 8303 Haven Avenue, not at Oasis Street, and not at 400 N. Pepper. The courthouse sits about 34 miles and 49 minutes northwest from Hemet City Hall at 445 E. Florida Avenue. CCP §335.1 gives most victims two years; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. An SR-74 or Lamb Canyon corridor collision can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Future medical care and vocational loss drive the damages case. This is not medical advice.',
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
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Hemet, the consultation is about 33 miles and 43 minutes northwest via Florida Avenue, State Street, Ramona Expressway, Sanderson Avenue, Lamb Canyon Road, Beaumont Avenue, the I-10 west, and California Street — not a Hemet storefront. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 34 miles and 49 minutes northwest. Palm Springs is the second office only — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'desert-hot-springs': {
    h1: 'Desert Hot Springs personal injury lawyer',
    title: 'Desert Hot Springs Personal Injury Lawyer | I-10 Truck, Uber, Wrongful Death | Lombera',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / Whitewater / Pierson crashes in Desert Hot Springs. Meet at 1276 N Palm Canyon Dr #107, Palm Springs — about 11 miles and 18 minutes south. (760) 835-9353.',
    lead: [
      'There is no Lombera storefront in Desert Hot Springs. After a Desert Hot Springs wreck, meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. From Desert Hot Springs City Hall at 11999 Palm Drive — civic reference only, not our address — take Pierson Boulevard, Palm Drive, Gene Autry Trail, Vista Chino / CA-111, and N Palm Canyon Drive — about 11 miles and 18 minutes south. The drive is south. I-10, Whitewater, Cabazon, Pierson Boulevard, Indian Canyon Drive, and Palm Drive are crash corridors on this page, not the route to the Palm Canyon office. Call (760) 835-9353. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, Whitewater, Cabazon, and Pierson Boulevard',
        paragraphs: [
          'Commercial truck traffic on I-10 through Whitewater and Cabazon, and along Pierson Boulevard through Desert Hot Springs, produces the freight collisions that lead this docket. North-valley freight surges on Pierson and the Whitewater grade push brake failures and override events before loads clear valley corridors. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from Desert Hot Springs ZIP codes 92240 and 92241 file at Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — about 11 miles and 19 minutes south from Desert Hot Springs City Hall at 11999 Palm Drive. This is north-valley I-10 / Whitewater / Cabazon / Pierson freight — not Palm Springs’ San Gorgonio Pass page, not Cathedral City’s Date Palm / Ramon stack, not Indio’s I-10 / Highway 111 clone, and not Beaumont’s Pass / Beaumont Avenue page. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Indian Canyon Drive, Pierson Boulevard, and Palm Drive',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Indian Canyon Drive, Pierson Boulevard, and Palm Drive stack rideshare pickups between north-valley commuter runs, spa-tourism shuttles from Desert Hot Springs resort corridors, and weekend event traffic on the I-10 connector. Desert Hot Springs rideshare claims stay on /personal-injury/desert-hot-springs/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files for Desert Hot Springs ZIP codes 92240 and 92241 are filed at Riverside County Superior Court — Palm Springs Courthouse, 3255 E. Tahquitz Canyon Way — not Oasis Street, not Larson Justice Center limited civil, not 4050 Main Street, not 247 W. 3rd St., not 8303 Haven Avenue, and not the Indio Division. The courthouse sits about 11 miles and 19 minutes south from Desert Hot Springs City Hall at 11999 Palm Drive.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. An I-10 or Pierson Boulevard corridor collision can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Initial trauma care often starts at Desert Regional Medical Center before the long-term damages picture is clear. Future medical care, life-care planning, and vocational loss drive the case insurers try to close early. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most Desert Hot Springs injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month written notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, south',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Desert Hot Springs, the consultation is about 11 miles and 18 minutes south via Pierson Boulevard, Palm Drive, Gene Autry Trail, Vista Chino / CA-111, and N Palm Canyon Drive — not a Desert Hot Springs storefront. If the same wreck sinks the household, the same (760) 835-9353 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside. Redlands is the second office only — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  yucaipa: {
    h1: 'Yucaipa personal injury lawyer',
    title: 'Yucaipa Personal Injury Lawyer | Free Case Call | Lombera Law',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / Wildwood Canyon corridor crashes in Yucaipa. Meet at 2068 Orange Tree Lane #220, Redlands — about 11.5 miles and 17 minutes west-northwest. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront in Yucaipa. After a Yucaipa wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From Yucaipa City Hall at 34272 Yucaipa Boulevard — civic reference only — take Yucaipa Boulevard through Oak Glen to the I-10 west, then California Street — about 11.5 miles and 17 minutes west-northwest. The drive is west-northwest. The I-10 and Wildwood Canyon corridor are crash corridors on this page, not the route to an office in Yucaipa. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10 and the Wildwood Canyon corridor',
        paragraphs: [
          'Yucaipa Boulevard, Oak Glen Road, the Wildwood Canyon corridor, and through-truck traffic on the I-10 produce the commercial collisions that lead this docket. Eastbound freight climbing the pass and weekend canyon traffic on Wildwood Canyon Road push override and loss-of-control events before loads clear valley corridors. After a serious wreck, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from Yucaipa file at San Bernardino County Superior Court / Justice Center, 247 W. 3rd Street, San Bernardino — about 18 miles and 26 minutes west-northwest from Yucaipa City Hall at 34272 Yucaipa Boulevard — not 4050 Main Street in Riverside, not Tahquitz Canyon Way, not 8303 Haven Avenue, not Arrow Boulevard, and not 400 N. Pepper. This is Yucaipa\u2019s I-10 / Wildwood Canyon freight page — not Fontana\u2019s I-10 / I-15 / Sierra freight page, not Colton Crossing / Mt Vernon, not Highland\u2019s I-210 / Base Line junction, and not Riverside\u2019s 60 / 91 / 215 grid. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Yucaipa Boulevard and Oak Glen Road',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Yucaipa Boulevard, Oak Glen Road, and the I-10 connector stack rideshare pickups between canyon weekend traffic, retail shifts along the 10, and commuter runs toward Redlands and San Bernardino. Yucaipa rideshare claims stay on /personal-injury/yucaipa/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 247 W. 3rd Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files are filed at San Bernardino County Superior Court / Justice Center, 247 W. 3rd Street, San Bernardino — not 4050 Main Street in Riverside, not Tahquitz Canyon Way, not 8303 Haven Avenue, not Arrow Boulevard, and not 400 N. Pepper. The courthouse sits about 18 miles and 26 minutes west-northwest from Yucaipa City Hall at 34272 Yucaipa Boulevard.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. An I-10 or Wildwood Canyon corridor collision can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Future medical care, life-care planning, and vocational loss drive the case insurers try to close early. This is not medical advice.',
        ],
      },
      {
        h2: 'Car, motorcycle, and Civil Code §3342 dog bites',
        paragraphs: [
          'After the four primary claim types, car collisions, motorcycle crashes, and dog bites under California Civil Code §3342 round out the docket. Lane-splitting on a motorcycle is legal when done safely; wearing a helmet does not flip fault. We do not handle slip-and-fall claims. CCP §335.1 gives most Yucaipa injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month notice under Government Code §911.2.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, west-northwest',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Yucaipa, the consultation is about 11.5 miles and 17 minutes west-northwest via Yucaipa Boulevard through Oak Glen, the I-10 west, and California Street — not a Yucaipa storefront. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 23 miles and 31 minutes west-southwest. Palm Springs is the second office only — 1276 N Palm Canyon Dr #107, (760) 835-9353 — about 38 miles and 47 minutes east-southeast.',
        ],
      },
    ],
  },
  ontario: {
    h1: 'Ontario, California personal injury lawyer',
    title: 'Ontario CA Personal Injury Lawyer | Free Case Call | Lombera Law',
    description:
      'Truck, Uber, wrongful death, and catastrophic injury from I-10 / I-15 / ONT corridor crashes in Ontario, California. Meet at 2068 Orange Tree Lane #220, Redlands — about 25 miles and 33 minutes east. (909) 915-0181.',
    lead: [
      'There is no Lombera storefront in Ontario, California. After an Ontario wreck, meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. From Ontario City Hall at 303 E. B Street — civic reference only — take E. B Street to Plum Avenue, Holt Boulevard, the I-10 east, then California Street — about 25 miles and 33 minutes east. The drive is east. I-10, I-15, and the ONT corridor are crash corridors on this page, not the route to an office in Ontario. Call (909) 915-0181. English or Spanish. Two practices only: personal injury and bankruptcy. You speak with him. Injury cases run on contingency: no fee unless we win.',
    ],
    sections: [
      {
        h2: 'Truck wrecks on I-10, I-15, and the ONT corridor',
        paragraphs: [
          'Commercial truck traffic on the I-10, I-15, and the Ontario International Airport corridor through the Inland Empire warehouse grid produces the freight collisions that lead this docket. Merge pressure at the I-10 / I-15 stack and distribution traffic around the ONT air-cargo lanes push rear-end and override events before loads clear valley corridors. After a serious collision, preserve the ECM download, dashcam footage, and the driver qualification file before insurers scatter the evidence. Unlimited civil lawsuits from Ontario file at San Bernardino County Superior Court / Justice Center, 247 W. 3rd Street, San Bernardino — about 24 miles and 33 minutes east from Ontario City Hall at 303 E. B Street. Ontario sits on the court\u2019s Areas Served list at that address — not 4050 Main Street in Riverside, not Tahquitz Canyon Way, not 8303 Haven Avenue, not Arrow Boulevard, and not 400 N. Pepper. This is Ontario\u2019s I-10 / I-15 / ONT corridor page — not Fontana\u2019s I-10 / I-15 / Sierra freight page, not Rancho Cucamonga\u2019s Haven stack, not Colton Crossing / Mt Vernon, and not Riverside\u2019s 60 / 91 / 215 grid. Wrongful death and traumatic brain injury claims from these wrecks stay on this URL.',
        ],
      },
      {
        h2: 'Uber and Lyft on Fourth Street, Mountain Avenue, and the Ontario Mills corridor',
        paragraphs: [
          'Whether the driver had the app on changes which insurer must respond — we confirm coverage in the consult, not in marketing copy with dollar figures. Fourth Street, Mountain Avenue, and the Ontario Mills corridor stack rideshare pickups between warehouse shifts, airport runs toward ONT, and commuter trips toward Rancho Cucamonga and Fontana. Ontario rideshare claims stay on /personal-injury/ontario/. We do not invent a /uber/ page.',
        ],
      },
      {
        h2: 'Wrongful death — standing under CCP §377.60 at 247 W. 3rd Street',
        paragraphs: [
          'Who may bring the suit is confirmed in the consult under California Code of Civil Procedure §377.60 — we do not invent verdicts or settlement stories. Unlimited civil files from Ontario are filed at San Bernardino County Superior Court / Justice Center, 247 W. 3rd Street, San Bernardino — not 4050 Main Street in Riverside, not Tahquitz Canyon Way, not 8303 Haven Avenue, not Arrow Boulevard, and not 400 N. Pepper. The courthouse sits about 24 miles and 33 minutes east from Ontario City Hall at 303 E. B Street. CCP §335.1 gives most Ontario injury victims two years from the date of harm — confirm your deadline in the consult before evidence goes stale; a public entity may require six-month notice under Government Code §911.2.',
        ],
      },
      {
        h2: 'Catastrophic injury — TBI, spinal cord, lost limb',
        paragraphs: [
          'Traumatic brain injury, spinal cord injury, and amputation are damages outcomes handled on this URL only — not a separate /catastrophic-injury/ landing page. An I-10 / I-15 / ONT corridor collision can leave lifetime medical needs and lost earning capacity that insurers undervalue early. Future medical care, life-care planning, and vocational loss drive the case insurers try to close early. This is not medical advice.',
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
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Serious injuries can reach the office 24/7 for an emergency consult. From Ontario, the consultation is about 25 miles and 33 minutes east via E. B Street, Plum Avenue, Holt Boulevard, the I-10 east, and California Street — not an Ontario storefront. If the same wreck sinks the household, the same (909) 915-0181 call files Chapter 7 or Chapter 13 at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 20.5 miles and 28 minutes east-southeast; bankruptcy filing can be closer than the Orange Tree Lane sit-down, but the personal injury consult stays at Orange Tree. Palm Springs is the second office only — 1276 N Palm Canyon Dr #107, (760) 835-9353 — about 70.5 miles and 83 minutes east-southeast.',
        ],
      },
    ],
  },
}

const BK_EN: Record<CitySlug, CityPageCopy> = {
  fontana: {
    h1: 'Fontana Bankruptcy Lawyer',
    title: 'Fontana Bankruptcy Lawyer | Chapter 7 & 13 | Inland Empire | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy for Fontana households. Prepared at 2068 Orange Tree Lane, Redlands; filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (909) 915-0181.',
    lead: [
      'There is no Lombera suite at 7426 Cherry Ave #210-312, 11326 Winery Dr, Sierra Avenue, or Hospitality Lane — and 247 W. 3rd Street is civil court, not a bankruptcy office. Fontana wage garnishments and foreclosure notices are state-court collection until a federal petition is filed. Meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — about 15 miles and 21 minutes east via the I-10 from Fontana. He prepares Chapter 7 and Chapter 13 here. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. Every consumer case files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — there is no bankruptcy court in Fontana. Call (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 clears most unsecured debt when the household passes the means test — credit cards, Kaiser and other Fontana medical bills, and deficiency balances after a commuter vehicle repo. This is an I-10 corridor household review at Orange Tree Lane, not a volume mill and not a San Gorgonio Pass rewrite. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 rolls mortgage arrears into a three-to-five-year court plan and can cram down certain secured balances where the Bankruptcy Code allows — common when a Fontana household has warehouse or logistics income but fell behind on the house during a layoff cycle. The plan is the relief, not a foreclosure-defense add-on sold separately.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay begins the day the petition is filed — wage garnishments from Fontana employers, scheduled foreclosure sales, and repossession timelines pause for most creditors. Filing before the next paycheck or sale date protects lead time that waiting burns.',
        ],
      },
      {
        h2: 'Where Fontana files — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Every Fontana consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — about 12 miles and 17 minutes west-southwest from the desk at Orange Tree Lane via California Street, the I-10, the I-215, and Mission Inn Avenue. That is not 247 W. 3rd St. civil court, not Sierra Avenue, not Cherry Avenue, not Hospitality Lane, not 4050 Main Street, not Tahquitz Canyon Way, and not the Indio Division. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
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
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. From Fontana, the consultation is about 15 miles and 21 minutes east on the I-10 — not a Cherry Avenue or Winery Drive storefront. Palm Springs is the other office — 1276 N Palm Canyon Dr #107, (760) 835-9353. ' +
            DEBT_RELIEF,
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
    h1: 'Rancho Cucamonga Bankruptcy Lawyer',
    title: 'Rancho Cucamonga Bankruptcy Lawyer | Chapter 7 & Chapter 13 | Inland Empire | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy for Rancho Cucamonga households. Prepared at 2068 Orange Tree Lane, Redlands; filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (909) 915-0181.',
    lead: [
      'Rancho Cucamonga wage garnishments and creditor lawsuits are state-court collection until a federal petition is filed. Meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — about 24 miles and 32 minutes east from downtown Rancho Cucamonga via Haven Avenue, the I-10 east, and California Street. He prepares Chapter 7 and Chapter 13 at that Orange Tree desk. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. There is no Lombera storefront in Rancho Cucamonga. Every consumer case files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside. Call (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 clears most unsecured debt when the household passes the means test — credit cards, Foothill corridor medical bills, and deficiency balances after a commuter vehicle repo. This is a Rancho Cucamonga household review at the Orange Tree Lane desk, not a volume mill. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 folds mortgage arrears into a three-to-five-year court plan and can cram down certain secured balances where the Bankruptcy Code allows — common when a Rancho Cucamonga household still draws wages from logistics parks along Milliken or the I-15 / I-210 stack but fell behind during a layoff or medical event. The plan is the relief, not a foreclosure-defense add-on sold separately.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay begins the day the petition is filed — wage garnishments tied to Rancho Cucamonga employers, scheduled foreclosure sales, and repossession timelines pause for most creditors. Filing before the next paycheck or sale date protects lead time that waiting burns.',
        ],
      },
      {
        h2: 'Where Rancho Cucamonga files — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Every Rancho Cucamonga consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — about 12 miles and 17 minutes southwest from the desk at 2068 Orange Tree Lane via California Street, the I-10, and the I-215. That building is the federal courthouse, not a Lombera suite. There is no bankruptcy court in Rancho Cucamonga. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. From Rancho Cucamonga, the consultation is about 24 miles and 32 minutes east on Haven Avenue, the I-10 east, and California Street — sit-down at Orange Tree Lane, not a federal courthouse address. Palm Springs is the other office — 1276 N Palm Canyon Dr #107, (760) 835-9353. ' +
            DEBT_RELIEF,
        ],
      },
    ],
  },
  beaumont: {
    h1: 'Beaumont Bankruptcy Lawyer',
    title: 'Beaumont Bankruptcy Lawyer | Chapter 7 & Chapter 13 | Inland Empire | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy for Beaumont households. Prepared at 2068 Orange Tree Lane, Suite 220, Redlands; filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (909) 915-0181.',
    lead: [
      'Beaumont wage garnishments and foreclosure notices are state-court collection until a federal petition is filed. Meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — about 19 miles and 23 minutes northwest from downtown Beaumont via Beaumont Avenue, the I-10 west, and California Street. He prepares Chapter 7 and Chapter 13 at that Orange Tree desk. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. There is no Lombera storefront in Beaumont. Every consumer case files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 12 miles and 17 minutes southwest from the Redlands office via California Street, the I-10, and the I-215. Call (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 clears most unsecured debt when the household passes the means test — credit cards, pass-area medical bills, and deficiency balances after a vehicle repo. This is a Beaumont household review at the Orange Tree Lane desk. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 folds mortgage arrears into a three-to-five-year court plan and can cram down certain secured balances where the Bankruptcy Code allows — common when a Beaumont household on the I-10 pass corridor still has wages but fell behind during a medical event or commuter-cost pressure cycle. The plan is the relief, not a foreclosure-defense add-on sold separately.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay begins the day the petition is filed — wage garnishments tied to Beaumont employers, scheduled foreclosure sales, and repossession timelines pause for most creditors. Filing before the next paycheck or sale date protects lead time that waiting burns.',
        ],
      },
      {
        h2: 'Where Beaumont files — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Every Beaumont consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — about 12 miles and 17 minutes southwest via California Street, the I-10, and the I-215 from the desk at 2068 Orange Tree Lane in Redlands. That building is the courthouse, not a Lombera suite. There is no bankruptcy court in Beaumont. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
        ],
      },
      {
        h2: '(909) 915-0181 — 2068 Orange Tree Lane, Suite 220',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. From Beaumont, the consultation is about 19 miles and 23 minutes northwest on Beaumont Avenue, the I-10 west, and California Street — sit-down at the Orange Tree Lane office, not a federal courthouse address. Palm Springs is the other office — 1276 N Palm Canyon Dr #107, (760) 835-9353. ' +
            DEBT_RELIEF,
        ],
      },
    ],
  },
  'palm-springs': {
    h1: 'Palm Springs Bankruptcy Lawyer',
    title: 'Palm Springs Bankruptcy Lawyer | Chapter 7 & Chapter 13 | Inland Empire | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy for Palm Springs households. Prepared at 1276 N Palm Canyon Dr #107; filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (760) 835-9353.',
    lead: [
      'This is the Coachella Valley office — 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. There is no Lombera suite at a county civil courthouse in Palm Springs or at 3420 Twelfth Street — that last address is the federal courthouse in Riverside, not a Palm Canyon storefront. Edgar P. Lombera prepares Chapter 7 and Chapter 13 here in Palm Springs. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. Every consumer case files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 52 miles and 64 minutes west via Highway 111 and the I-10. Call (760) 835-9353.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 clears most unsecured debt when the household passes the means test — credit cards, valley medical bills, and deficiency balances after a vehicle repo. This is a Coachella Valley household review at Palm Canyon Drive, not a volume mill shipped from the Inland Empire. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 folds mortgage arrears into a three-to-five-year court plan and can cram down certain secured balances where the Bankruptcy Code allows — useful when seasonal hospitality income dipped but the household still has wages to fund a catch-up plan. The plan is the relief, not a foreclosure-defense product sold on the side.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay begins the day the petition is filed — wage garnishments tied to valley employers, scheduled foreclosure sales, and repossession timelines pause for most creditors. Filing before the next paycheck or sale date protects lead time that waiting burns.',
        ],
      },
      {
        h2: 'Where Palm Springs files — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Every Palm Springs consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — about 52 miles and 64 minutes west via Highway 111 and the I-10 from the desk at Palm Canyon Drive. That building is the courthouse, not a Lombera suite. That is not the county civil courthouse in Palm Springs, not 4050 Main Street, not 247 W. 3rd St., and not the Indio Division. There is no bankruptcy court in Palm Springs. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
        ],
      },
      {
        h2: 'Tax debt vs injury settlement',
        paragraphs: [
          'Older income-tax debt may discharge in Chapter 7 when timing and notice rules are met — we confirm in the consult. A personal injury settlement from the same household is a separate question under the two-practice model. California homestead exemptions are confirmed with your documents — we do not print dollar caps here.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. The consultation is a sit-down in Palm Springs — not a federal courthouse address. Redlands is the other office — 2068 Orange Tree Lane, Suite 220, (909) 915-0181. ' +
            DEBT_RELIEF,
        ],
      },
    ],
  },
  'palm-desert': {
    h1: 'Palm Desert Bankruptcy Lawyer',
    title: 'Palm Desert Bankruptcy Lawyer | Chapter 7 & Chapter 13 | Inland Empire | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy for Palm Desert households. Prepared at 1276 N Palm Canyon Dr #107, Palm Springs; filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (760) 835-9353.',
    lead: [
      'Palm Desert wage garnishments and foreclosure notices are state-court collection until a federal petition is filed. Meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — about 17 miles and 26 minutes northwest via Fred Waring Drive, Monterey Avenue, the I-10 west, and Date Palm Drive from downtown Palm Desert. He prepares Chapter 7 and Chapter 13 at that desk. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. Every consumer case files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 52 miles and 64 minutes west via Highway 111 and the I-10 from the Palm Canyon office. Call (760) 835-9353.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 clears most unsecured debt when the household passes the means test — credit cards, desert medical bills, and deficiency balances after a vehicle repo. This is a Palm Desert valley household review at the Palm Canyon desk, not a volume mill and not a Palm Springs page with the city name swapped. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 folds mortgage arrears into a three-to-five-year court plan and can cram down certain secured balances where the Bankruptcy Code allows — common when a Palm Desert household still has wages or retirement income but fell behind during a medical event or HOA pressure cycle. The plan is the relief, not a foreclosure-defense add-on sold separately.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay begins the day the petition is filed — wage garnishments tied to Palm Desert employers, scheduled foreclosure sales, and repossession timelines pause for most creditors. Filing before the next paycheck or sale date protects lead time that waiting burns.',
        ],
      },
      {
        h2: 'Where Palm Desert files — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Every Palm Desert consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — about 52 miles and 64 minutes west via Highway 111 and the I-10 from the desk at 1276 N Palm Canyon Dr in Palm Springs. That building is the courthouse, not a Lombera suite. That is not the county civil courthouse in the valley, not 4050 Main Street, not 247 W. 3rd St., and not the Indio Division. There is no bankruptcy court in Palm Desert. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
        ],
      },
      {
        h2: 'Tax debt vs injury settlement',
        paragraphs: [
          'Older income-tax debt may discharge in Chapter 7 when timing and notice rules are met — we confirm in the consult. A personal injury settlement from the same household is a separate question under the two-practice model. California homestead exemptions are confirmed with your documents — we do not print dollar caps here.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. From Palm Desert, the consultation is about 17 miles and 26 minutes northwest on Fred Waring, Monterey, the I-10 west, and Date Palm — sit-down at the Palm Canyon office, not a federal courthouse address. Redlands is the other office — 2068 Orange Tree Lane, Suite 220, (909) 915-0181. ' +
            DEBT_RELIEF,
        ],
      },
    ],
  },
  'cathedral-city': {
    h1: 'Cathedral City Bankruptcy Lawyer',
    title: 'Cathedral City Bankruptcy Lawyer | Chapter 7 & Chapter 13 | Inland Empire | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy for Cathedral City households. Prepared at 1276 N Palm Canyon Dr #107, Palm Springs; filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (760) 835-9353.',
    lead: [
      'Cathedral City wage garnishments and foreclosure notices are state-court collection until a federal petition is filed. Meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — about 9 miles and 15 minutes northwest from Cathedral City via Cathedral Canyon Drive, East Palm Canyon Drive, Gene Autry Trail, and Vista Chino. He prepares Chapter 7 and Chapter 13 at that Palm Springs desk. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. There is no Lombera storefront in Cathedral City. Every consumer case files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 52 miles and 64 minutes west from the Palm Canyon office. Call (760) 835-9353.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 clears most unsecured debt when the household passes the means test — credit cards, valley medical bills, and deficiency balances after a vehicle repo. This is a Cathedral City household review at the Palm Canyon desk. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 folds mortgage arrears into a three-to-five-year court plan and can cram down certain secured balances where the Bankruptcy Code allows — common when a Cathedral City household still has wages but fell behind during a medical event or credit-card pressure cycle. The plan is the relief, not a foreclosure-defense add-on sold separately.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay begins the day the petition is filed — wage garnishments tied to Cathedral City employers, scheduled foreclosure sales, and repossession timelines pause for most creditors. Filing before the next paycheck or sale date protects lead time that waiting burns.',
        ],
      },
      {
        h2: 'Where Cathedral City files — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Every Cathedral City consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — about 52 miles and 64 minutes west via Highway 111 and the I-10 from the desk at 1276 N Palm Canyon Dr in Palm Springs. That building is the courthouse, not a Lombera suite. There is no bankruptcy court in Cathedral City. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. From Cathedral City, the consultation is about 9 miles and 15 minutes northwest on Cathedral Canyon, East Palm Canyon, Gene Autry, and Vista Chino — sit-down at the Palm Canyon office, not a federal courthouse address. Redlands is the other office — 2068 Orange Tree Lane, Suite 220, (909) 915-0181. ' +
            DEBT_RELIEF,
        ],
      },
    ],
  },
  indio: {
    h1: 'Indio Bankruptcy Lawyer',
    title: 'Indio Bankruptcy Lawyer | Chapter 7 & Chapter 13 | Inland Empire | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy for Indio households. Prepared at 1276 N Palm Canyon Dr #107, Palm Springs; filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (760) 835-9353.',
    lead: [
      'Indio wage garnishments and foreclosure notices are state-court collection until a federal petition is filed. Meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — about 24 miles and 31 minutes west-northwest from downtown Indio via Jackson Street, the I-10 west, Vista Chino, and Palm Canyon. He prepares Chapter 7 and Chapter 13 at that Palm Springs desk. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. There is no Lombera storefront in Indio. Every consumer case files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 52 miles and 64 minutes west from the Palm Canyon office. Call (760) 835-9353.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 clears most unsecured debt when the household passes the means test — credit cards, valley medical bills, and deficiency balances after a vehicle repo. This is an Indio household review at the Palm Canyon desk. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 folds mortgage arrears into a three-to-five-year court plan and can cram down certain secured balances where the Bankruptcy Code allows — common when an Indio household still has wages from hospitality, logistics, or seasonal valley work but fell behind during a medical event or HOA pressure cycle. The plan is the relief, not a foreclosure-defense add-on sold separately.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay begins the day the petition is filed — wage garnishments tied to Indio employers, scheduled foreclosure sales, and repossession timelines pause for most creditors. Filing before the next paycheck or sale date protects lead time that waiting burns.',
        ],
      },
      {
        h2: 'Where Indio files — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Every Indio consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — about 52 miles and 64 minutes west via Highway 111 and the I-10 from the desk at 1276 N Palm Canyon Dr in Palm Springs. That building is the courthouse, not a Lombera suite. There is no bankruptcy court in Indio. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. From Indio, the consultation is about 24 miles and 31 minutes west-northwest on Jackson Street, the I-10 west, Vista Chino, and Palm Canyon — sit-down at the Palm Canyon office, not a federal courthouse address. Redlands is the other office — 2068 Orange Tree Lane, Suite 220, (909) 915-0181. ' +
            DEBT_RELIEF,
        ],
      },
    ],
  },
  'la-quinta': {
    h1: 'La Quinta Bankruptcy Lawyer',
    title: 'La Quinta Bankruptcy Lawyer | Chapter 7 & Chapter 13 | Coachella Valley | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy for La Quinta households. Prepared at 1276 N Palm Canyon Dr #107, Palm Springs; filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (760) 835-9353.',
    lead: [
      'La Quinta wage garnishments and foreclosure notices are state-court collection until a federal petition is filed. Meet Edgar P. Lombera at 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — about 23 miles and 34 minutes northwest from La Quinta via Washington Street, Varner Road, the I-10 west, Vista Chino, and Palm Canyon. He prepares Chapter 7 and Chapter 13 at that Palm Springs desk. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. There is no Lombera storefront in La Quinta. Every consumer case files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — about 73.5 miles and 91 minutes northwest from the Palm Canyon office. Call (760) 835-9353.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 clears most unsecured debt when the household passes the means test — credit cards, valley medical bills, and deficiency balances after a vehicle repo. This is a La Quinta household review at the Palm Canyon desk. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 folds mortgage arrears into a three-to-five-year court plan and can cram down certain secured balances where the Bankruptcy Code allows — common when a La Quinta household still has wages from hospitality, golf-resort, or seasonal valley work but fell behind during a medical event or HOA pressure cycle. The plan is the relief, not a foreclosure-defense add-on sold separately.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay begins the day the petition is filed — wage garnishments tied to La Quinta employers, scheduled foreclosure sales, and repossession timelines pause for most creditors. Filing before the next paycheck or sale date protects lead time that waiting burns.',
        ],
      },
      {
        h2: 'Where La Quinta files — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Every La Quinta consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — about 73.5 miles and 91 minutes northwest via Highway 111 and the I-10 from the desk at 1276 N Palm Canyon Dr in Palm Springs. That building is the courthouse, not a Lombera suite. There is no bankruptcy court in La Quinta. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. From La Quinta, the consultation is about 23 miles and 34 minutes northwest on Washington Street, Varner Road, the I-10 west, Vista Chino, and Palm Canyon — sit-down at the Palm Canyon office, not a federal courthouse address. Redlands is the other office — 2068 Orange Tree Lane, Suite 220, (909) 915-0181. ' +
            DEBT_RELIEF,
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
    h1: 'Riverside Bankruptcy Lawyer',
    title: 'Riverside Bankruptcy Lawyer | Chapter 7 & Chapter 13 | Inland Empire | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy for Riverside households. Prepared at 2068 Orange Tree Lane, Redlands; filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (909) 915-0181.',
    lead: [
      'There is no Lombera suite at 10580 Magnolia Avenue, 6840 Indiana Avenue, 3610 Central Avenue, 3880 Lemon Street, or Van Buren and Magnolia — and 3420 Twelfth Street is the federal courthouse, not a law-office storefront. Riverside wage garnishments and foreclosure notices are state-court collection until a federal petition is filed. Meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — about 12 miles and 17 minutes east via Mission Inn Avenue, the CA-91, and the I-10 east. He prepares Chapter 7 and Chapter 13 here. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. Consumer cases file at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — in this city, not at 4050 Main Street civil court. Call (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 clears most unsecured debt when the household passes the means test — credit cards, Riverside hospital and clinic bills, and deficiency balances after a vehicle repo. This is a county-seat household review at Orange Tree Lane, not a volume mill. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 folds mortgage arrears into a three-to-five-year court plan and can cram down certain secured balances where the Bankruptcy Code allows — useful when a Riverside household still earns county or university-corridor wages but fell behind during a layoff or medical leave. The plan is the relief, not a foreclosure-defense product sold on the side.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay begins the day the petition is filed — wage garnishments tied to Riverside employers, scheduled foreclosure sales, and repossession timelines pause for most creditors. Filing before the next paycheck or sale date protects lead time that waiting burns.',
        ],
      },
      {
        h2: 'Where Riverside files — 3420 Twelfth Street, in this city',
        paragraphs: [
          'Riverside consumer bankruptcies file in this city at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street — about 0.5 miles and 2 minutes south of City Hall at 3900 Main Street. That building is the courthouse, not a Lombera suite. Petitions are prepared at 2068 Orange Tree Lane in Redlands — about 12 miles and 17 minutes east via Mission Inn Avenue, the CA-91, and the I-10 east. That is not 4050 Main Street civil court, not 247 W. 3rd St., not Tahquitz Canyon Way, and not the Indio Division. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
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
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. From Riverside, the consultation is about 12 miles and 17 minutes east on Mission Inn, the CA-91, and the I-10 — not a Magnolia or Indiana Avenue storefront. Palm Springs is the other office — 1276 N Palm Canyon Dr #107, (760) 835-9353. ' +
            DEBT_RELIEF,
        ],
      },
    ],
  },
  'moreno-valley': {
    h1: 'Moreno Valley Bankruptcy Lawyer',
    title: 'Moreno Valley Bankruptcy Lawyer | Chapter 7 & Chapter 13 | Inland Empire | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy for Moreno Valley households. Prepared at 2068 Orange Tree Lane, Redlands; filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (909) 915-0181.',
    lead: [
      'There is no Lombera suite at 24384 Sunnymead Boulevard, 24490 Sunnymead Boulevard, 12981 Perris Boulevard, 23962 Alessandro Boulevard, or 14177 Frederick Street — and 3420 Twelfth Street is the federal courthouse, not a law-office storefront. Moreno Valley wage garnishments and foreclosure notices are state-court collection until a federal petition is filed. Meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — about 20 miles and 26 minutes north via Frederick Street, Cactus Avenue, the I-215 north, and the I-10 east from City Hall. He prepares Chapter 7 and Chapter 13 here. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. Consumer cases file at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — not at 13800 Heacock civil court. Call (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 clears most unsecured debt when the household passes the means test — credit cards, Moreno Valley medical bills, and deficiency balances after a commuter vehicle repo. This is a March ARB and warehouse-corridor household review at Orange Tree Lane, not a volume mill. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 folds mortgage arrears into a three-to-five-year court plan and can cram down certain secured balances where the Bankruptcy Code allows — common when a Moreno Valley household still earns logistics or distribution wages but fell behind during a layoff or medical leave. The plan is the relief, not a foreclosure-defense add-on sold separately.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay begins the day the petition is filed — wage garnishments tied to Moreno Valley employers, scheduled foreclosure sales, and repossession timelines pause for most creditors. Filing before the next paycheck or sale date protects lead time that waiting burns.',
        ],
      },
      {
        h2: 'Where Moreno Valley files — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Every Moreno Valley consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — about 10 miles and 16 minutes northwest from City Hall at 14177 Frederick Street, or about 12 miles and 17 minutes southwest from the desk at Orange Tree Lane. That building is the courthouse, not a Lombera suite. That is not 13800 Heacock limited civil court, not 4050 Main Street, not Sunnymead Boulevard, not 247 W. 3rd St., not Tahquitz Canyon Way, and not the Indio Division. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
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
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. From Moreno Valley, the consultation is about 20 miles and 26 minutes north on Frederick, Cactus, the I-215 north, and the I-10 east — not a Sunnymead or Perris Boulevard storefront. Palm Springs is the other office — 1276 N Palm Canyon Dr #107, (760) 835-9353. ' +
            DEBT_RELIEF,
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
    h1: 'Hemet Bankruptcy Lawyer',
    title: 'Hemet Bankruptcy Lawyer | Chapter 7 & Chapter 13 | Inland Empire | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy for Hemet households. Prepared at 2068 Orange Tree Lane, Redlands; filed at 3420 Twelfth Street, Riverside. Garnishment and foreclosure relief. (909) 915-0181.',
    lead: [
      'Hemet wage garnishments and foreclosure notices are state-court collection until a federal petition is filed. Meet Edgar P. Lombera at 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — about 33 miles and 43 minutes north-northwest from downtown Hemet via Florida Avenue, State Street, Ramona Expressway, CA 79 (Sanderson / Lamb Canyon / Beaumont Avenue), the I-10 west, and California Street. He prepares Chapter 7 and Chapter 13 here. You speak with him. English or Spanish. Two practices only: personal injury and bankruptcy. There is no Lombera storefront in Hemet. Every consumer case files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside. Call (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Chapter 7 — means test and no-asset discharge',
        paragraphs: [
          'Chapter 7 clears most unsecured debt when the household passes the means test — credit cards, San Jacinto Valley medical bills, and deficiency balances after a vehicle repo. This is a Hemet household review at Orange Tree Lane, not a volume mill. A typical no-asset case discharges in about 90 to 120 days when the trustee accepts the petition.',
        ],
      },
      {
        h2: 'Chapter 13 — plan, arrears, and cramdown',
        paragraphs: [
          'Chapter 13 folds mortgage arrears into a three-to-five-year court plan and can cram down certain secured balances where the Bankruptcy Code allows — common when a Hemet household still has wages from valley employers or retirement income but fell behind during a medical event or fixed-income squeeze. The plan is the relief, not a foreclosure-defense add-on sold separately.',
        ],
      },
      {
        h2: 'Automatic stay — garnishment, foreclosure, repossession',
        paragraphs: [
          'The automatic stay begins the day the petition is filed — wage garnishments tied to Hemet employers, scheduled foreclosure sales, and repossession timelines pause for most creditors. Filing before the next paycheck or sale date protects lead time that waiting burns.',
        ],
      },
      {
        h2: 'Where Hemet files — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Every Hemet consumer bankruptcy files at the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside — about 12 miles and 17 minutes southwest from the desk at Orange Tree Lane via California Street, the I-10, and the I-215. That building is the federal courthouse, not a Lombera suite. There is no bankruptcy court in Hemet. Official court filing fees are $338 for Chapter 7 and $313 for Chapter 13. The Section 341 meeting of creditors is often held remotely.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane',
        paragraphs: [
          'Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. From Hemet, the consultation is about 33 miles and 43 minutes north-northwest on Florida Avenue, State Street, Ramona Expressway, CA 79 (Sanderson / Lamb Canyon / Beaumont Avenue), the I-10 west, and California Street — sit-down at Orange Tree Lane, not a federal courthouse address. Palm Springs is the other office — 1276 N Palm Canyon Dr #107, (760) 835-9353. ' +
            DEBT_RELIEF,
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
  yucaipa: {
    h1: 'Yucaipa bankruptcy lawyer — stop garnishment, file in Riverside',
    title: 'Yucaipa Bankruptcy Lawyer | Stop Garnishment | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy in Yucaipa. Wage garnishment and foreclosure defense. Riverside court. (909) 915-0181.',
    lead: [
      'A Yucaipa wage garnishment or foreclosure notice means the state court process is already moving. Bankruptcy stops most collection the day a case is filed at the federal courthouse in Riverside. Edgar P. Lombera explains Chapter 7 and Chapter 13 in a free consult from Redlands.',
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
          'There is no bankruptcy court in Yucaipa or San Bernardino city. Consumer cases file at the U.S. Bankruptcy Court, Central District of California, Riverside. (909) 915-0181.',
        ],
      },
    ],
  },
  ontario: {
    h1: 'Ontario bankruptcy lawyer — stop garnishment, file in Riverside',
    title: 'Ontario Bankruptcy Lawyer | Stop Garnishment | Lombera',
    description:
      'Chapter 7 and Chapter 13 bankruptcy in Ontario, California. Wage garnishment and foreclosure defense. Riverside court. (909) 915-0181.',
    lead: [
      'An Ontario wage garnishment or foreclosure notice means the state court process is already moving. Bankruptcy stops most collection the day a case is filed at the federal courthouse in Riverside. Edgar P. Lombera explains Chapter 7 and Chapter 13 in a free consult from Redlands.',
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
          'There is no bankruptcy court in Ontario or San Bernardino city. Consumer cases file at the U.S. Bankruptcy Court, Central District of California, Riverside — about 20.5 miles and 28 minutes east-southeast from Ontario. (909) 915-0181.',
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
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / I-15 / SR-210 en Fontana. Oficina en Orange Tree Lane #220, Redlands — unas 15 millas y 21 minutos al este. (909) 915-0181.',
    lead: [
      'No hay local de Lombera en Fontana ni suite en Sierra Avenue. Después de un choque en Fontana, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde el City Hall de Fontana, tome Sierra Avenue a la I-10 al este, luego California Street — unas 15 millas y 21 minutos al este. El trayecto es al este. La I-10, la I-15 y la SR-210 son corredores de choques en esta página, no la ruta a un local en Fontana. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, la I-15 y la SR-210',
        paragraphs: [
          'Sierra Avenue, la red de almacenes Slover / Cherry y Foothill Boulevard (Ruta Histórica 66) están bajo el tráfico de camiones de paso en la I-10, la I-15 y la SR-210 que produce las colisiones comerciales que lideran este expediente. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles de estos corredores de carga se presentan en el Tribunal Superior del Condado de San Bernardino / Justice Center, 247 W. 3rd Street, San Bernardino — a menudo después de un trayecto al este por Foothill Boulevard hacia la I-10. Esto es carga del Inland Empire — no una página de puerto de Los Ángeles. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Sierra Avenue',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Sierra Avenue, Foothill Boulevard y los conectores de la I-10 / I-15 concentran volumen de rideshare entre turnos de almacén y trayectos de pasajeros. Los reclamos de rideshare de Fontana permanecen en /es/lesiones-personales/fontana/. No inventamos una página /uber/ ni /rideshare/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 247 W. 3rd Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados se presentan en el Tribunal Superior del Condado de San Bernardino / Justice Center, 247 W. 3rd Street, San Bernardino — no el Distrito de Fontana en Arrow, no Haven Avenue, ni Tahquitz Canyon Way u Oasis en las divisiones del desierto. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Una lesión en almacén o logística en Sierra Avenue o la red Slover / Cherry puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al inicio. La atención médica futura y la pérdida vocacional impulsan el caso de daños. Esto no es consejo médico.',
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
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Fontana, la consulta es unas 15 millas y 21 minutos al este por Sierra Avenue, la I-10 y California Street — no un local en Sierra Avenue. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside — unas 11 millas y 20 minutos al sureste. Palm Springs es la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  colton: {
    h1: 'Abogado de lesiones personales en Colton',
    title: 'Abogado de Lesiones Colton | Camiones I-10/I-215, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / I-215 / Colton Crossing. Oficina en Orange Tree Lane #220, Redlands — unas 6.5 millas y unos 10 minutos al este. (909) 915-0181.',
    lead: [
      'No hay local de Lombera en Colton. Después de un choque en Colton, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde el Ayuntamiento de Colton en 650 N. La Cadena, tome la rampa de la 9th Street a la I-10 al este, luego California Street — unas 6.5 millas y unos 10 minutos al este. El trayecto es al este. La I-10, la I-215 y Colton Crossing son corredores de choques en esta página, no la ruta a la oficina. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, la I-215, Mt Vernon y Colton Crossing',
        paragraphs: [
          'Colton Crossing — donde la I-10 se encuentra con la I-215 — más Mt Vernon Avenue, La Cadena Drive y el tráfico de camiones de paso desde la cuadrícula de almacenes producen las colisiones de carga que lideran este expediente. La presión de incorporación en el conjunto I-10 / I-215 y el tráfico de patios en Mt Vernon empujan choques por alcance y arrastre antes de que la carga despeje los corredores del valle. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de Colton se presentan en el Tribunal Superior del Condado de San Bernardino / Justice Center, 247 W. 3rd Street, San Bernardino — unas 3.5 millas y unos 8 minutos al noreste desde el Ayuntamiento de Colton en 650 N. La Cadena. Este es el cruce I-10 / I-215 de Colton — no la página de carga de Fontana en la I-10 / I-15 / Sierra, no la I-210 / SR-210 / Base Line de Highland, no la SR-60 / I-215 de Moreno Valley, ni el conjunto 60 / 91 / 215 de Riverside. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Valley Boulevard, La Cadena, Mt Vernon y Rancho',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Valley Boulevard, La Cadena Drive, Mt Vernon Avenue y el corredor Rancho concentran recogidas de rideshare entre turnos de almacén, trayectos de pasajeros de CSUSB y tráfico del intercambio I-215 en Colton Crossing. Los reclamos de rideshare de Colton permanecen en /es/lesiones-personales/colton/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 247 W. 3rd Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados se presentan en el Tribunal Superior del Condado de San Bernardino / Justice Center, 247 W. 3rd Street, San Bernardino — no en 4050 Main Street en Riverside, no en Tahquitz Canyon Way, no en 400 N. Pepper, y no en Arrow Boulevard. El tribunal está unas 3.5 millas y unos 8 minutos al noreste del Ayuntamiento de Colton en 650 N. La Cadena. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Una colisión en Colton Crossing o en el corredor de Mt Vernon puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al inicio. La atención inicial de trauma suele comenzar en Arrowhead Regional Medical Center o St. Bernardine Medical Center antes de que el panorama de daños a largo plazo quede claro. La atención médica futura, la planificación de cuidados y la pérdida vocacional impulsan el caso que las aseguradoras intentan cerrar pronto. Esto no es consejo médico.',
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
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Colton, la consulta es unas 6.5 millas y unos 10 minutos al este por la rampa de la 9th Street, la I-10 y California Street — no un local en Colton. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 9 millas y unos 14 minutos al sur. Palm Springs es solo la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'rancho-cucamonga': {
    h1: 'Abogado de lesiones personales en Rancho Cucamonga',
    title: 'Abogado de Lesiones Rancho Cucamonga | Camiones I-15/I-210, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-15 / I-210 / I-10 en Rancho Cucamonga. Oficina en Orange Tree Lane #220, Redlands — unas 24 millas y unos 31 minutos al este. (909) 915-0181.',
    lead: [
      'No hay local de Lombera en Rancho Cucamonga. Después de un choque en Rancho Cucamonga, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde City Hall de Rancho Cucamonga en 10500 Civic Center Drive, tome Haven Avenue a la I-10 al este, luego California Street — unas 24 millas y unos 31 minutos al este. El trayecto es al este. La I-15 y la I-210 son corredores de choques en esta página, no la ruta a la oficina. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-15, la I-210 y la I-10',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-15, la I-210 y los accesos a la I-10 a través de Haven Avenue, Foothill Boulevard y los corredores de almacenes de Ontario / Rancho produce las colisiones de carga que lideran este expediente. La presión de incorporación en el conjunto I-15 / I-210 / I-10 y el tráfico de distribución en Haven empujan choques por alcance y arrastre antes de que la carga despeje los corredores del valle. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de Rancho Cucamonga se presentan en el Tribunal Superior del Condado de San Bernardino, 8303 Haven Avenue — unas 0.2 millas y un minuto al noreste desde City Hall de Rancho Cucamonga en 10500 Civic Center Drive, adyacente en Haven. Este es el conjunto I-15 / I-210 / I-10 de Rancho — no la página de carga de Fontana en la I-10 / I-15 / Sierra, no Colton Crossing / Mt Vernon, no la I-210 / SR-210 / Base Line de Highland, no la SR-60 / I-215 de Moreno Valley, ni el conjunto 60 / 91 / 215 de Riverside. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
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
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados de Rancho Cucamonga se presentan en el Tribunal Superior del Condado de San Bernardino, 8303 Haven Avenue — no en 247 W. 3rd St. en San Bernardino, no en 4050 Main Street en Riverside, no en Tahquitz Canyon Way, no en Oasis Street, no en Arrow Boulevard, y no en 400 N. Pepper. El tribunal está unas 0.2 millas y un minuto al noreste de City Hall de Rancho Cucamonga en 10500 Civic Center Drive — adyacente en Haven Avenue. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
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
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Rancho Cucamonga, la consulta es unas 24 millas y unos 31 minutos al este por Haven Avenue, la I-10 al este y California Street — no un local en Rancho Cucamonga. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 20 millas y unos 29 minutos al sureste. Palm Springs es solo la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  beaumont: {
    h1: 'Abogado de lesiones personales en Beaumont',
    title: 'Abogado de Lesiones Beaumont | Camiones Paso I-10, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques del Paso I-10 / San Gorgonio en Beaumont, California. Oficina en Orange Tree Lane #220, Redlands — unas 19 millas y unos 23 minutos al noroeste. (909) 915-0181.',
    lead: [
      'No hay local de Lombera en Beaumont, California — no Beaumont, Texas. Después de un choque en Beaumont, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde el centro de Beaumont, tome Orange Avenue a 6th Street, Beaumont Avenue, la I-10 al oeste, luego California Street — unas 19 millas y unos 23 minutos al noroeste. El trayecto es al noroeste. La I-10, el Paso de San Gorgonio y Beaumont Avenue son corredores de choques en esta página, no la ruta a un local en Beaumont. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, el Paso de San Gorgonio y Beaumont Avenue',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10 a través del Paso de San Gorgonio, a lo largo de Beaumont Avenue y en los conectores de 6th Street / Pennsylvania Avenue produce las colisiones de carga que lideran este expediente. Las ráfagas de viento, los descensos pronunciados y el calor del desierto empujan fallas de frenos y vuelcos en el paso antes de que la carga llegue a los corredores del valle. Estos choques del Paso y de Beaumont Avenue pertenecen aquí. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas del código postal 92223 se presentan en el Tribunal Superior del Condado de Riverside, Historic Courthouse, 4050 Main Street, Riverside — unas 25.5 millas y unos 35 minutos al oeste desde el Ayuntamiento de Beaumont. Esta es la carga I-10 / Paso de San Gorgonio / Beaumont Avenue de Beaumont — no la página I-10 / I-15 / Sierra de Fontana, no la SR-60 / I-215 de Moreno Valley, no el clon desértico de Hwy 111 de Palm Springs, ni Colton Crossing. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Beaumont Avenue, Highland Springs, Pennsylvania Avenue y 6th Street',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Beaumont Avenue, Highland Springs Avenue, 6th Street y Pennsylvania Avenue concentran recogidas de rideshare entre trayectos de pasajeros de Cherry Valley, turnos comerciales en el corredor Beaumont Marketplace y huecos entre turnos de almacén hacia el Paso. Los reclamos de rideshare de Beaumont, California permanecen en /es/lesiones-personales/beaumont/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 4050 Main Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados del código postal 92223 se presentan en el Tribunal Superior del Condado de Riverside, Historic Courthouse, 4050 Main Street, Riverside — no en Tahquitz Canyon Way, no en 13800 Heacock, no en 247 W. 3rd St., no en 8303 Haven Avenue, no en Oasis Street, y no en la División Indio. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Una colisión en el Paso de San Gorgonio o en el corredor de Beaumont Avenue puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al inicio. La atención inicial de trauma suele comenzar en San Gorgonio Memorial Hospital o el corredor del Paso de Banning antes de que el panorama de daños a largo plazo quede claro. La atención médica futura, la planificación de cuidados y la pérdida vocacional impulsan el caso que las aseguradoras intentan cerrar pronto. Esto no es consejo médico.',
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
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Beaumont, la consulta es unas 19 millas y unos 23 minutos al noroeste por Orange Avenue, 6th Street, Beaumont Avenue, la I-10 al oeste y California Street — no un local en Beaumont. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 12 millas y 17 minutos al suroeste. Palm Springs es solo la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'palm-springs': {
    h1: 'Abogado de lesiones personales en Palm Springs',
    title: 'Abogado de Lesiones Palm Springs | Camiones I-10/San Gorgonio, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / San Gorgonio / Carretera 111 en Palm Springs. Oficina en 1276 N Palm Canyon Dr #107 — unas 3.2 millas y unos 7 minutos al noroeste del Ayuntamiento. (760) 835-9353.',
    lead: [
      'Esta es la oficina presencial del Valle de Coachella — 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. Desde el Ayuntamiento de Palm Springs en 3200 East Tahquitz Canyon Way — referencia cívica solamente, no nuestra dirección — la sala de consulta queda unas 3.2 millas y unos 7 minutos al noroeste por Civic Center Drive, Tahquitz Canyon Way, Sunrise Way, Tachevah Road y N Palm Canyon Drive. La I-10, el Paso de San Gorgonio, la Carretera 111, Palm Canyon Drive e Indian Canyon Drive son corredores de choques en esta página, no la ruta del Ayuntamiento al local. Llame al (760) 835-9353. Edgar P. Lombera recibe expedientes de lesiones aquí en inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, el Paso de San Gorgonio y la Carretera 111',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10 a través del Paso de San Gorgonio y a lo largo de la Carretera 111 produce las colisiones de carga que lideran este expediente. Las ráfagas de viento, los descensos pronunciados y el calor del desierto empujan fallas de frenos y vuelcos en el paso antes de que la carga llegue a los corredores comerciales del valle. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de estos corredores de carga se presentan en el Tribunal Superior del Condado de Riverside — Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — unas 0.1 millas y menos de un minuto al este por el corredor de Tahquitz Canyon desde el Ayuntamiento en 3200 East Tahquitz Canyon Way. Este es el corredor de carga I-10 / San Gorgonio / Carretera 111 del desierto — no la página de Fontana en la I-10 / I-15 / Sierra, no Colton Crossing, no la I-15 / I-210 de Rancho, no la I-210 / SR-210 / Base Line de Highland, no la SR-60 / I-215 de Moreno Valley, ni la cuadrícula 60 / 91 / 215 de Riverside. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Palm Canyon Drive, Indian Canyon Drive y la Carretera 111',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. El Palm Canyon del centro, el Distrito de Diseño Uptown, las rutas de resorts en Indian Canyon y los conectores de la Carretera 111 concentran recogidas de rideshare entre oleadas turísticas estacionales, traslados al aeropuerto y tráfico de eventos de fin de semana. Los reclamos de rideshare de Palm Springs permanecen en /es/lesiones-personales/palm-springs/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados de Palm Springs se presentan en el Tribunal Superior del Condado de Riverside — Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — no en Oasis Street, no en 4050 Main Street, no en 247 W. 3rd Street, y no en ningún enrutamiento residual de la División Indio. El tribunal queda unas 0.1 millas y menos de un minuto al este por el corredor de Tahquitz Canyon desde el Ayuntamiento en 3200 East Tahquitz Canyon Way — presentación cívica adyacente, no el trayecto a la oficina de Palm Canyon.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Una colisión en el Paso de San Gorgonio o en el corredor de Palm Canyon puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al principio. La atención inicial de trauma suele comenzar en Desert Regional Medical Center antes de que el panorama de daños a largo plazo quede claro. La atención médica futura, la planificación de cuidados y la pérdida vocacional impulsan el caso que las aseguradoras intentan cerrar pronto. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas. La mayoría de las víctimas de lesiones en Palm Springs tienen dos años bajo el CCP §335.1 contados desde la fecha del daño — confirme su plazo en la consulta antes de que la evidencia se deteriore; una entidad pública puede exigir aviso escrito de seis meses conforme al Código de Gobierno §911.2.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, consulta local',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. El local está en N Palm Canyon Drive — unas 3.2 millas y unos 7 minutos al noroeste del Ayuntamiento en 3200 East Tahquitz Canyon Way cuando se recorre Civic \u2192 Tahquitz \u2192 Sunrise \u2192 Tachevah \u2192 N Palm Canyon. Si el mismo choque hunde el hogar, la misma llamada al (760) 835-9353 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 55 millas y unos 71 minutos al noroeste. Redlands es la segunda oficina solamente — 2068 Orange Tree Lane, Suite 220, (909) 915-0181 — unas 49 millas y unos 60 minutos al noroeste, no la línea principal de Palm Springs.',
        ],
      },
    ],
  },
  'palm-desert': {
    h1: 'Abogado de lesiones personales en Palm Desert',
    title: 'Abogado de Lesiones Palm Desert | Camiones I-10/111, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / Carretera 111 en Palm Desert. Oficina en 1276 N Palm Canyon Dr #107, Palm Springs — unas 17 millas y unos 26 minutos al noroeste. (760) 835-9353.',
    lead: [
      'No hay local de Lombera en Palm Desert, California. Después de un choque en Palm Desert, reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. Desde el Ayuntamiento de Palm Desert en 73510 Fred Waring Drive — referencia cívica solamente, no nuestra dirección — tome Civic Center Drive a San Pablo, Fred Waring Drive, Monterey Avenue, la I-10 al oeste, Date Palm Drive, Vista Chino / CA-111 y N Palm Canyon Drive — unas 17 millas y unos 26 minutos al noroeste. El trayecto es al noroeste. La I-10, la Carretera 111, El Paseo y los corredores comerciales de Monterey / Fred Waring son corredores de choques en esta página, no la ruta a la oficina de Palm Canyon. Llame al (760) 835-9353. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10 y la Carretera 111',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10 y la Carretera 111 a través de Palm Desert produce las colisiones de carga que lideran este expediente. El calor del desierto, los ciclos de entrega comercial del valle y la presión de incorporación en la I-10 en Date Palm y Monterey producen choques por alcance y arrastre antes de que la carga despeje los bucles comerciales de El Paseo. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de Palm Desert se presentan en el Tribunal Superior del Condado de Riverside — Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — unas 12 millas y unos 22 minutos al noroeste desde el Ayuntamiento de Palm Desert en 73510 Fred Waring Drive. Este es el corredor I-10 / 111 de Palm Desert — no la página del Paso de San Gorgonio para Palm Springs, no el conjunto Date Palm / Ramon de Cathedral City, no el corredor Jackson de Indio, ni copia de carga de Fontana, Colton o Rancho. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en El Paseo, Monterey Avenue y la Carretera 111',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. El comercio de El Paseo, el tráfico de outlets en Monterey Avenue y los conectores de la Carretera 111 concentran recogidas de rideshare entre turismo estacional, entregas en resorts de golf y oleadas de eventos de fin de semana. Los reclamos de rideshare de Palm Desert permanecen en /es/lesiones-personales/palm-desert/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados de Palm Desert se presentan en el Tribunal Superior del Condado de Riverside — Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — no en Oasis Street, no en 4050 Main Street, no en 247 W. 3rd St., no en 8303 Haven Avenue, y no en la División Indio. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Una colisión en la I-10 o en el corredor de El Paseo puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al principio. La atención inicial de trauma suele comenzar en Eisenhower Health antes de que el panorama de daños a largo plazo quede claro. La atención médica futura, la planificación de cuidados y la pérdida vocacional impulsan el caso que las aseguradoras intentan cerrar pronto. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, al noroeste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Palm Desert, la consulta es unas 17 millas y unos 26 minutos al noroeste por Civic Center Drive, San Pablo, Fred Waring Drive, Monterey Avenue, la I-10 al oeste, Date Palm Drive, Vista Chino / CA-111 y N Palm Canyon Drive — no un local en Palm Desert. Si el mismo choque hunde el hogar, la misma llamada al (760) 835-9353 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside. Redlands es solo la segunda oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  'cathedral-city': {
    h1: 'Abogado de lesiones personales en Cathedral City',
    title: 'Abogado de Lesiones Cathedral City | Camiones I-10/111, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / Carretera 111 en Cathedral City. Oficina en 1276 N Palm Canyon Dr #107, Palm Springs — unas 9 millas y 15 minutos al noroeste. (760) 835-9353.',
    lead: [
      'No hay local de Lombera en Cathedral City. Después de un choque en Cathedral City, reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. Desde el Ayuntamiento de Cathedral City en 68700 Avenida Lalo Guerrero — referencia cívica solamente, no nuestra dirección — tome Cathedral Canyon Drive, East Palm Canyon Drive, Gene Autry Trail, Vista Chino / CA-111 y N Palm Canyon Drive — unas 9 millas y 15 minutos al noroeste. El trayecto es al noroeste. La I-10, la Carretera 111, Date Palm Drive, Ramon Road y Cathedral Canyon Drive son corredores de choques en esta página, no la ruta a la oficina de Palm Canyon. Llame al (760) 835-9353. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, Date Palm Drive y Ramon Road',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10, las rampas de Date Palm y Cathedral City Boulevard, Date Palm Drive y Ramon Road produce las colisiones de carga que lideran este expediente. Los ciclos de entrega comercial del valle y la presión de incorporación en la I-10 en Date Palm y Ramon producen choques por alcance y arrastre antes de que la carga despeje los corredores comerciales del valle. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de los códigos postales 92234 y 92235 de Cathedral City se presentan en el Tribunal Superior del Condado de Riverside — Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — unas 5 millas y unos 11 minutos al noroeste desde el Ayuntamiento de Cathedral City en 68700 Avenida Lalo Guerrero. Este es el conjunto I-10 / Date Palm / Ramon de Cathedral City — no la página I-10 / 111 de Palm Desert, no la del Paso de San Gorgonio para Palm Springs, no el corredor Jackson de Indio, ni copia de carga de Fontana, Colton o Rancho. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber, Lyft y rideshare en la Carretera 111, Date Palm Drive, Ramon Road y Cathedral Canyon Drive',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. La Carretera 111, Date Palm Drive, Ramon Road y Cathedral Canyon Drive concentran recogidas de rideshare entre trayectos de pasajeros del valle, turnos en casinos y comercios, y tráfico de eventos de fin de semana. Los reclamos de rideshare de Cathedral City permanecen en /es/lesiones-personales/cathedral-city/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados de los códigos postales 92234 y 92235 de Cathedral City se presentan en el Tribunal Superior del Condado de Riverside — Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — no en Oasis Street, no en Larson Justice Center de jurisdicción limitada, no en 4050 Main Street, no en 247 W. 3rd St., no en 8303 Haven Avenue, y no en la División Indio. El tribunal está unas 5 millas y unos 11 minutos al noroeste del Ayuntamiento de Cathedral City en 68700 Avenida Lalo Guerrero. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Una colisión en la I-10 o en el corredor de la Carretera 111 puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al principio. La atención inicial de trauma suele comenzar en Desert Regional Medical Center antes de que el panorama de daños a largo plazo quede claro. La atención médica futura, la planificación de cuidados y la pérdida vocacional impulsan el caso que las aseguradoras intentan cerrar pronto. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, al noroeste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Cathedral City, la consulta es unas 9 millas y 15 minutos al noroeste por Cathedral Canyon Drive, East Palm Canyon Drive, Gene Autry Trail, Vista Chino / CA-111 y N Palm Canyon Drive — no un local en Cathedral City. Si el mismo choque hunde el hogar, la misma llamada al (760) 835-9353 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside. Redlands es solo la segunda oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  indio: {
    h1: 'Abogado de lesiones personales en Indio',
    title: 'Abogado de Lesiones Indio | Camiones I-10/111, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / Carretera 111 en Indio. Oficina en 1276 N Palm Canyon Dr #107, Palm Springs — unas 24 millas y unos 31 minutos al oeste-noroeste. (760) 835-9353.',
    lead: [
      'No hay local de Lombera en Indio. Después de un choque en Indio, reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. Desde el Ayuntamiento de Indio en 100 Civic Center Mall — referencia cívica solamente, no nuestra dirección — tome Civic Center Drive, Jackson Street, la I-10 al oeste, Date Palm Drive, Vista Chino / CA-111 y N Palm Canyon Drive — unas 24 millas y unos 31 minutos al oeste-noroeste. El trayecto es al oeste-noroeste. La I-10, la Carretera 111, Jackson Street, Monroe Street y Avenue 42–44 son corredores de choques en esta página, no la ruta a la oficina de Palm Canyon. Llame al (760) 835-9353. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10 y la Carretera 111',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10 y la Carretera 111 a través de Indio produce las colisiones de carga que lideran este expediente. Las oleadas de carga en temporada de festivales, los transportistas agrícolas en Jackson Street y la presión de incorporación en la I-10 en Date Palm producen choques por alcance y arrastre antes de que la carga despeje los corredores comerciales del valle. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de Indio se presentan en el Tribunal Superior del Condado de Riverside — Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — unas 21 millas y unos 30 minutos al oeste-noroeste desde el Ayuntamiento de Indio en 100 Civic Center Mall. Este es el corredor I-10 / 111 de Indio — no el conjunto Date Palm / Ramon de Cathedral City, no la página Cook / Monterey de Palm Desert, no la del Paso de San Gorgonio para Palm Springs, ni copia de carga de Fontana, Colton o Rancho. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en la Carretera 111, Monroe Street, Jackson y Avenue 42–44',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. La Carretera 111, Monroe Street, Jackson Street y los corredores de festivales en Avenue 42–44 concentran recogidas de rideshare entre oleadas del Festival de Música del Valle de Coachella, trayectos de pasajeros del valle y tráfico de eventos de fin de semana. Los reclamos de rideshare de Indio permanecen en /es/lesiones-personales/indio/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados de Indio se presentan en el Tribunal Superior del Condado de Riverside — Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — no en Oasis Street, no en Larson Justice Center de jurisdicción limitada, no en 4050 Main Street, no en 247 W. 3rd St., no en 8303 Haven Avenue, y no en la División Indio. El tribunal está unas 21 millas y unos 30 minutos al oeste-noroeste del Ayuntamiento de Indio en 100 Civic Center Mall. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Una colisión en la I-10 o en el corredor de la Carretera 111 puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al principio. La atención inicial de trauma suele comenzar en JFK Memorial Hospital antes de que el panorama de daños a largo plazo quede claro. La atención médica futura, la planificación de cuidados y la pérdida vocacional impulsan el caso que las aseguradoras intentan cerrar pronto. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, al oeste-noroeste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Indio, la consulta es unas 24 millas y unos 31 minutos al oeste-noroeste por Civic Center Drive, Jackson Street, la I-10 al oeste, Date Palm Drive, Vista Chino / CA-111 y N Palm Canyon Drive — no un local en Indio. Si el mismo choque hunde el hogar, la misma llamada al (760) 835-9353 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside. Redlands es solo la segunda oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  'la-quinta': {
    h1: 'Abogado de lesiones personales en La Quinta',
    title: 'Abogado de Lesiones Personales en La Quinta | Lombera Law',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / Carretera 111 en La Quinta. Oficina en 1276 N Palm Canyon Dr #107, Palm Springs — unas 23 millas y unos 34 minutos al noroeste. (760) 835-9353.',
    lead: [
      'No hay local de Lombera en La Quinta. Después de un choque en La Quinta, reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. Desde el Ayuntamiento de La Quinta en 78495 Calle Tampico — referencia cívica solamente, no nuestra dirección — tome Washington Street, Varner Road, la I-10 al oeste, Date Palm Drive, Vista Chino / CA-111 y N Palm Canyon Drive — unas 23 millas y unos 34 minutos al noroeste. El trayecto es al noroeste. La I-10, la Carretera 111, Washington Street, Fred Waring Drive y Eisenhower Drive son corredores de choques en esta página, no la ruta a la oficina de Palm Canyon. Llame al (760) 835-9353. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10 y la Carretera 111',
        paragraphs: [
          'Washington Street, Fred Waring Drive, Eisenhower Drive y el tráfico de camiones comerciales en la I-10 y la Carretera 111 a través de La Quinta producen las colisiones de carga que lideran este expediente. Las oleadas de carga en temporada de resort, los transportistas del corredor de golf en Eisenhower y la presión de incorporación en la I-10 en Date Palm producen choques por alcance y arrastre antes de que la carga despeje los corredores comerciales del valle. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de La Quinta se presentan en el Tribunal Superior del Condado de Riverside — Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — unas 20 millas y unos 33 minutos al noroeste desde el Ayuntamiento de La Quinta en 78495 Calle Tampico. Este es el corredor I-10 / 111 de La Quinta — no el conjunto Date Palm / Ramon de Cathedral City, no la página Cook / Monterey de Palm Desert, no la cuadrícula de festivales Jackson / Monroe de Indio, ni la del Paso de San Gorgonio para Palm Springs. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en la Carretera 111, Washington Street y Eisenhower Drive',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. La Carretera 111, Washington Street, Fred Waring Drive y el corredor de resort en Eisenhower concentran recogidas de rideshare entre tráfico de eventos en PGA West, recorridos de fin de semana en Old Town y trayectos de pasajeros del valle. Los reclamos de rideshare de La Quinta permanecen en /es/lesiones-personales/la-quinta/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados de La Quinta se presentan en el Tribunal Superior del Condado de Riverside — Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — no en 4050 Main Street, no en 247 W. 3rd St., no en 8303 Haven Avenue, y no en Oasis Street. El tribunal está unas 20 millas y unos 33 minutos al noroeste del Ayuntamiento de La Quinta en 78495 Calle Tampico. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Una colisión en la I-10 o en el corredor de la Carretera 111 puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al principio. La atención médica futura, la planificación de cuidados y la pérdida vocacional impulsan el caso que las aseguradoras intentan cerrar pronto. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, al noroeste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde La Quinta, la consulta es unas 23 millas y unos 34 minutos al noroeste por Washington Street, Varner Road, la I-10 al oeste, Date Palm Drive, Vista Chino / CA-111 y N Palm Canyon Drive — no un local en La Quinta. Si el mismo choque hunde el hogar, la misma llamada al (760) 835-9353 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 73.5 millas y unos 91 minutos al noroeste. Redlands es solo la segunda oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181 — unas 67.5 millas y unos 80 minutos al oeste-noroeste.',
        ],
      },
    ],
  },
  redlands: {
    h1: 'Abogado de lesiones personales en Redlands',
    title: 'Abogado de Lesiones Redlands | Camiones I-10/I-210, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en 2068 Orange Tree Lane #220, Redlands — oficina local con atención presencial. Unas 3.5 millas al noroeste del City Hall. (909) 915-0181.',
    lead: [
      'Esta es la oficina con atención presencial de Redlands — 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde el City Hall de Redlands en 35 Cajon Street — solo referencia cívica, no nuestra dirección — la sala de consulta queda a unas 3.5 millas y 6 minutos al noroeste por Cajon Street, Orange Street, la I-10 y California Street hasta Orange Tree Lane. Llame al (909) 915-0181. Edgar P. Lombera abre expedientes de lesiones aquí en inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10 y la I-210',
        paragraphs: [
          'El tráfico de camiones de paso en la I-10 y el conector de la I-210 se cruza con conductores de Redlands en Alabama Street, Orange Street y las arterias de Redlands Boulevard — los mismos corredores de carga que alimentan la logística del condado de San Bernardino sin ser una página de puerto de Los Ángeles. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de estos corredores se presentan en el Tribunal Superior del Condado de San Bernardino / Justice Center, 247 W. 3rd Street, San Bernardino — no Haven Avenue, no Tahquitz Canyon Way ni Oasis en las divisiones del desierto. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Redlands Boulevard, Orange Street y el corredor de la I-10',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. El tráfico de la Universidad de Redlands, los recorridos por Orange Street en el centro y los viajes por el conector de la I-10 generan volumen constante de rideshare junto a las vías de pasajeros. Los reclamos de lesiones en rideshare de Redlands permanecen en /es/lesiones-personales/redlands/. No inventamos una página /uber/ ni /rideshare/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 247 W. 3rd Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados se presentan en el Tribunal Superior del Condado de San Bernardino / Justice Center, 247 W. 3rd Street, San Bernardino. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. La atención inicial de trauma suele comenzar en Redlands Community Hospital o Loma Linda University Medical Center antes de que el panorama de daños a largo plazo quede claro. La atención médica futura, la planificación de cuidados y la capacidad de ingreso perdida impulsan el caso que las aseguradoras intentan cerrar pronto. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, oficina local',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. La oficina está en Orange Tree Lane — unas 3.5 millas y 6 minutos al noroeste del City Hall en 35 Cajon Street si toma Cajon → Orange → I-10 → California Street. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en 3420 Twelfth Street, Riverside — unas 15 millas y 21 minutos al suroeste. Palm Springs es solo la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'san-bernardino': {
    h1: 'Abogado de lesiones personales en San Bernardino',
    title: 'Abogado de Lesiones San Bernardino | Camiones I-10/I-215/I-210, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / I-215 / I-210 en San Bernardino. Oficina en Orange Tree Lane #220, Redlands — unas 8 millas y 14 minutos al sureste por 2nd, la I-215 y la I-10. (909) 915-0181.',
    lead: [
      'No hay local de Lombera en San Bernardino. Después de un choque en San Bernardino, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde el Ayuntamiento de San Bernardino en 290 N D Street (referencia cívica solamente), tome 2nd Street a la I-215 al sur a la I-10 al este, luego California Street — unas 8 millas y 14 minutos al sureste. El trayecto es al sureste. La I-10, la I-215 y la I-210 son corredores de choques en esta página, no un local en el centro de San Bernardino. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, la I-215 y la I-210',
        paragraphs: [
          'Baseline Street, Hospitality Lane y el empalme I-215 / I-10 soportan carga de camiones de paso que produce las colisiones comerciales que lideran este expediente. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de estos corredores de autopista se presentan en el Tribunal Superior del Condado de San Bernardino / Justice Center, 247 W. 3rd Street — unas 0.6 millas y 3 minutos al este desde puntos cívicos del centro. Este es el empalme I-10 / I-215 / I-210 de San Bernardino — no la página de carga de Fontana en la I-10 / I-15 / Sierra, no la red 60 / 91 / 215 de Riverside, ni el corredor I-10 / Alabama de Redlands. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber, Lyft y rideshare en Hospitality Lane y el corredor I-215',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Hospitality Lane, E Street, Rialto Avenue y el intercambio I-215 / I-10 concentran recogidas de rideshare entre turnos hospitalarios, tráfico de CSUSB y trayectos de empleados del condado. Los reclamos de rideshare de San Bernardino permanecen en /es/lesiones-personales/san-bernardino/. No inventamos una página /uber/ ni /rideshare/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 247 W. 3rd Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados se presentan en el Tribunal Superior del Condado de San Bernardino / Justice Center, 247 W. 3rd Street, San Bernardino — no en 4050 Main Street de Riverside, no en el distrito de Fontana en Arrow, y no en una división de Palm Springs. El tribunal está unas 0.6 millas y 3 minutos al este de puntos cívicos del centro. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Un choque en autopista o intercambio en la I-10, la I-215 o la I-210 puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al inicio. Las familias a menudo reciben tratamiento inicial en Community Hospital of San Bernardino, St. Bernardine Medical Center, Arrowhead Regional Medical Center o Loma Linda University Medical Center. La atención médica futura y la pérdida vocacional impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, al sureste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde San Bernardino, la consulta es unas 8 millas y 14 minutos al sureste por 2nd Street, la I-215, la I-10 y California Street — no un local en el centro de San Bernardino. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 11 millas y 16 minutos al sur-suroeste. Palm Springs es la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353 — unas 54 millas y 64 minutos al sureste, no la línea principal de San Bernardino.',
        ],
      },
    ],
  },
  riverside: {
    h1: 'Abogado de lesiones personales en Riverside',
    title: 'Abogado de Lesiones Riverside | Camiones 60/91/215, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la SR-60 / SR-91 / I-215 en Riverside. Oficina en Orange Tree Lane #220, Redlands — unas 12 millas y 17 minutos al noreste por Mission Inn, la CA-91 y la I-10. (909) 915-0181.',
    lead: [
      'No hay local de Lombera en Riverside. Después de un choque en Riverside, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde Mission Inn Avenue en el centro, tome la CA-91 al este a la I-10 al este, luego California Street — unas 12 millas y 17 minutos al noreste. El trayecto es al noreste. La SR-60, la SR-91 y la I-215 son corredores de choques en esta página, no la ruta a un local en Riverside. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la SR-60, la SR-91 y la I-215',
        paragraphs: [
          'Tyler Street, Central Avenue, Magnolia Avenue y el corredor Box Springs / Arlington están bajo el tráfico de camiones de paso en la SR-60, la SR-91 y la I-215 que produce las colisiones comerciales que lideran este expediente. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de estos corredores de autopista se presentan en el Tribunal Superior del Condado de Riverside, Historic Courthouse, 4050 Main Street — a menudo después de un trayecto por Mission Inn o University Avenue. Esta es la red 60/91/215 de Riverside — no la página de carga de Fontana en la I-10 / I-15 / Sierra, ni la franja de 247 W. 3rd en San Bernardino. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Mission Inn, UCR y el intercambio 91/60/215',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Mission Inn Avenue, el campus de la Universidad de California Riverside y el intercambio SR-91 / SR-60 / I-215 concentran recogidas de rideshare entre tráfico estudiantil, turnos de hospitalidad y trayectos de pasajeros del condado. Los reclamos de rideshare de Riverside permanecen en /es/lesiones-personales/riverside/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 4050 Main Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados se presentan en el Tribunal Superior del Condado de Riverside, Historic Courthouse, 4050 Main Street, Riverside — no en el Hall of Justice en 4100 Main, no en 247 W. 3rd Street en San Bernardino, y no en 13800 Heacock civil limitado. El CCP §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Un choque en autopista o intercambio en la 60, la 91 o la 215 puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al inicio. La atención médica futura y la pérdida vocacional impulsan el caso de daños. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas. La mayoría de las víctimas en Riverside tienen dos años desde la lesión bajo el CCP §335.1; una entidad pública puede exigir aviso escrito de seis meses bajo el Código de Gobierno §911.2 — revisamos su plazo en la consulta antes de que corra.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, al noreste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Riverside, la consulta es unas 12 millas y 17 minutos al noreste por Mission Inn Avenue, la CA-91, la I-10 y California Street — no un local en el centro de Riverside. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 0.5 millas y 2 minutos al sureste desde el centro. Palm Springs es la segunda oficina si ese trayecto es más fácil — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'moreno-valley': {
    h1: 'Abogado de lesiones personales en Moreno Valley',
    title: 'Abogado de Lesiones Moreno Valley | Camiones 60/215, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la SR-60 / I-215 en Moreno Valley. Oficina en Orange Tree Lane #220, Redlands — unos 19.5 millas y 26 minutos al norte y luego al este. (909) 915-0181.',
    lead: [
      'No hay local de Lombera en Moreno Valley. Después de un choque en Moreno Valley, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde el City Hall en 14177 Frederick Street — solo referencia cívica — tome Frederick Street a Cactus Avenue, la I-215 al norte, la I-10 al este, luego California Street — unos 19.5 millas y 26 minutos al norte y luego al este. La SR-60 y la I-215 son corredores de choques en esta página, no la ruta a un local en Moreno Valley. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la SR-60 y la I-215',
        paragraphs: [
          'Frederick Street, Ironwood Avenue, Perris Boulevard, Alessandro Boulevard, Sunnymead Boulevard y los accesos a March ARB / Moreno Valley Mall están bajo el tráfico de camiones de paso en la SR-60 y la I-215 que produce las colisiones comerciales que lideran este expediente. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de estos corredores de carga se presentan en el Tribunal Superior del Condado de Riverside, Historic Courthouse, 4050 Main Street, Riverside — unas 10 millas y 16 minutos al noroeste desde puntos de referencia cívicos de Moreno Valley, a menudo después de Frederick a Cactus hacia la I-215. Este es el cruce SR-60 / I-215 de Moreno Valley — no la página de carga de Fontana en la I-10 / I-15 / Sierra, ni la red 60 / 91 / 215 de Riverside, ni la franja de 247 W. 3rd en San Bernardino. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Frederick, Ironwood, Perris Boulevard y Alessandro',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Frederick Street, Ironwood Avenue, Perris Boulevard, Alessandro Boulevard y el intercambio SR-60 / I-215 concentran recogidas de rideshare entre trayectos de March ARB, tráfico comercial de Sunnymead y huecos entre turnos de almacén. Los reclamos de rideshare de Moreno Valley permanecen en /es/lesiones-personales/moreno-valley/. No inventamos una página /uber/ ni /rideshare/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 4050 Main Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados para códigos postales de Moreno Valley se presentan en el Tribunal Superior del Condado de Riverside, Historic Courthouse, 4050 Main Street, Riverside — no en 247 W. 3rd Street en San Bernardino, no en el Hall of Justice en 4100 Main, y no en el tribunal civil limitado de Moreno Valley. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Un choque en autopista o intercambio en la SR-60 o la I-215 cerca de March ARB o el corredor Sunnymead puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al inicio. La atención médica futura y la pérdida vocacional impulsan el caso de daños. Esto no es consejo médico.',
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
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Moreno Valley, la consulta es unos 19.5 millas y 26 minutos al norte y luego al este por Frederick Street, Cactus Avenue, la I-215, la I-10 y California Street — no un local en Moreno Valley. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 10 millas y 16 minutos al oeste-noroeste. Palm Springs es solo la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  highland: {
    h1: 'Abogado de lesiones personales en Highland',
    title: 'Abogado de Lesiones Highland | Camiones 210/Base Line, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-210 / SR-210 / Base Line en Highland. Oficina en Orange Tree Lane #220, Redlands — unos 5 millas y 10 minutos al sur. (909) 915-0181.',
    lead: [
      'No hay local de Lombera en Highland. Después de un choque en Highland, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde el City Hall en 27215 Base Line — solo referencia cívica — tome Base Line a Palm Avenue, Alabama Street al sur, un tramo corto en la I-10, luego California Street — unos 5 millas y 10 minutos al sur. La I-210, la SR-210 y Base Line son corredores de choques en esta página, no la ruta a un local en Highland. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-210, la SR-210 y Base Line',
        paragraphs: [
          'East Highland, Greenspot Road, Victoria Avenue y el intercambio I-210 / SR-210 / Base Line soportan el tráfico de camiones de paso que produce las colisiones comerciales que lideran este expediente. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de estos corredores de carga se presentan en el Tribunal Superior del Condado de San Bernardino, San Bernardino Justice Center, 247 W. 3rd Street — unas 5.5 millas y 11 minutos al oeste-suroeste desde puntos de referencia cívicos de Highland, a menudo después de Base Line a Palm Avenue. Este es el cruce I-210 / SR-210 / Base Line de Highland — no la página de carga de Fontana en la I-10 / I-15 / Sierra, ni la franja I-10 / I-215 / I-210 de San Bernardino, ni la SR-60 / I-215 de Moreno Valley, ni el conjunto 60 / 91 / 215 de Riverside. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Base Line, Highland Avenue y Palm Avenue',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Base Line, Highland Avenue, Palm Avenue, Greenspot Road y el intercambio I-210 / Base Line concentran recogidas de rideshare entre trayectos a Loma Linda, turnos comerciales en East Highland y huecos entre turnos de almacén. Los reclamos de rideshare de Highland permanecen en /es/lesiones-personales/highland/. No inventamos una página /uber/ ni /rideshare/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 247 W. 3rd Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados para códigos postales de Highland se presentan en el Tribunal Superior del Condado de San Bernardino, San Bernardino Justice Center, 247 W. 3rd Street, San Bernardino — no en Arrow Boulevard, no en 4050 Main Street en Riverside, y no en un tribunal de Highland porque no existe. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Un choque en autopista o intercambio en la I-210, la SR-210 o Base Line cerca de East Highland o el corredor Greenspot puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al inicio. La atención médica futura y la pérdida vocacional impulsan el caso de daños. Esto no es consejo médico.',
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
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Highland, la consulta es unos 5 millas y 10 minutos al sur por Base Line, Palm Avenue, Alabama Street, un tramo corto en la I-10 y California Street — no un local en Highland. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 17 millas y 25 minutos al suroeste. Palm Springs es solo la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  hemet: {
    h1: 'Abogado de lesiones personales en Hemet',
    title: 'Abogado de Lesiones Hemet | Camiones SR-74/I-215, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la SR-74 / I-215 / Lamb Canyon en Hemet. Oficina en Orange Tree Lane #220, Redlands — unas 33 millas y unos 43 minutos al noroeste. (909) 915-0181.',
    lead: [
      'No hay local de Lombera en Hemet. Después de un choque en Hemet, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde el Ayuntamiento de Hemet en 445 E. Florida Avenue — referencia cívica solamente, no nuestra dirección — tome Florida Avenue, State Street, Ramona Expressway, Sanderson Avenue, Lamb Canyon Road, Beaumont Avenue, la I-10 al oeste y California Street — unas 33 millas y unos 43 minutos al noroeste. El trayecto es al noroeste. La SR-74, la SR-79, la I-215, Lamb Canyon Road, Florida Avenue y Sanderson Avenue son corredores de choques en esta página, no la ruta a la oficina. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la SR-74, SR-79, I-215 y Lamb Canyon',
        paragraphs: [
          'El tráfico de camiones comerciales en el corredor montañoso de la SR-74, la SR-79 hacia Winchester, el conector I-215 y Lamb Canyon Road produce las colisiones de carga que lideran este expediente. Florida Avenue por el centro de Hemet y Sanderson Avenue concentran presión de incorporación antes de que la carga llegue a los corredores del valle. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de los códigos postales 92543–92546 se presentan en el Tribunal Superior del Condado de Riverside, Historic Courthouse, 4050 Main Street, Riverside — unas 34 millas y unos 49 minutos al noroeste desde el Ayuntamiento de Hemet en 445 E. Florida Avenue. Esta es la carga SR-74 / SR-79 / I-215 / Lamb Canyon de Hemet — no la página I-10 / Paso de San Gorgonio de Beaumont, no la SR-60 / I-215 de Moreno Valley, no la cuadrícula I-10 / I-15 / Sierra de Fontana, ni copia de carga de Rancho Cucamonga o Colton Crossing. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Florida Avenue, Sanderson Avenue, Stetson Avenue y State Street',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Florida Avenue, Sanderson Avenue, Stetson Avenue y State Street concentran recogidas de rideshare entre trayectos de pasajeros del Valle de San Jacinto y turnos comerciales a lo largo del corredor SR-74. Los reclamos de rideshare de Hemet permanecen en /es/lesiones-personales/hemet/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 4050 Main Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados de los códigos postales 92543–92546 se presentan en el Tribunal Superior del Condado de Riverside, Historic Courthouse, 4050 Main Street, Riverside — no en el tribunal de la División Hemet, no en Menifee Center Drive de jurisdicción limitada, no en Tahquitz Canyon Way, no en 247 W. 3rd St., no en 8303 Haven Avenue, no en Oasis Street, y no en 400 N. Pepper. El tribunal está unas 34 millas y unos 49 minutos al noroeste del Ayuntamiento de Hemet en 445 E. Florida Avenue.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Una colisión en el corredor SR-74 o Lamb Canyon puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al principio. La atención médica futura y la pérdida vocacional impulsan el caso que las aseguradoras intentan cerrar pronto. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones de Hemet — confirme su fecha límite en la consulta antes de que la evidencia caduque; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, al noroeste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Hemet, la consulta es unas 33 millas y unos 43 minutos al noroeste por Florida Avenue, State Street, Ramona Expressway, Sanderson Avenue, Lamb Canyon Road, Beaumont Avenue, la I-10 al oeste y California Street — no un local en Hemet. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 34 millas y unos 49 minutos al noroeste. Palm Springs es solo la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353.',
        ],
      },
    ],
  },
  'desert-hot-springs': {
    h1: 'Abogado de lesiones personales en Desert Hot Springs',
    title: 'Abogado de Lesiones Desert Hot Springs | Camiones I-10, Uber, Muerte Injusta | Lombera',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / Whitewater / Pierson en Desert Hot Springs. Oficina en 1276 N Palm Canyon Dr #107, Palm Springs — unas 11 millas y 18 minutos al sur. (760) 835-9353.',
    lead: [
      'No hay local de Lombera en Desert Hot Springs. Después de un choque en Desert Hot Springs, reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. Desde el Ayuntamiento de Desert Hot Springs en 11999 Palm Drive — referencia cívica solamente, no nuestra dirección — tome Pierson Boulevard, Palm Drive, Gene Autry Trail, Vista Chino / CA-111 y N Palm Canyon Drive — unas 11 millas y 18 minutos al sur. El trayecto es al sur. La I-10, Whitewater, Cabazon, Pierson Boulevard, Indian Canyon Drive y Palm Drive son corredores de choques en esta página, no la ruta a la oficina de Palm Canyon. Llame al (760) 835-9353. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, Whitewater, Cabazon y Pierson Boulevard',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10 a través de Whitewater y Cabazon, y a lo largo de Pierson Boulevard por Desert Hot Springs, produce las colisiones de carga que lideran este expediente. Los picos de carga del valle norte en Pierson y el gradiente de Whitewater provocan fallas de frenos y choques por alcance antes de que la carga despeje los corredores del valle. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de los códigos postales 92240 y 92241 de Desert Hot Springs se presentan en el Tribunal Superior del Condado de Riverside — Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — unas 11 millas y unos 19 minutos al sur desde el Ayuntamiento de Desert Hot Springs en 11999 Palm Drive. Esta es la carga I-10 / Whitewater / Cabazon / Pierson del valle norte — no la página del Paso de San Gorgonio de Palm Springs, no la pila Date Palm / Ramon de Cathedral City, no el clon I-10 / Highway 111 de Indio, ni la página Paso / Beaumont Avenue de Beaumont. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Indian Canyon Drive, Pierson Boulevard y Palm Drive',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Indian Canyon Drive, Pierson Boulevard y Palm Drive concentran recogidas de rideshare entre trayectos de pasajeros del valle norte, traslados de turismo de spa desde los corredores de resorts de Desert Hot Springs y tráfico de eventos de fin de semana en el conector de la I-10. Los reclamos de rideshare de Desert Hot Springs permanecen en /es/lesiones-personales/desert-hot-springs/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 3255 E. Tahquitz Canyon Way',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados de los códigos postales 92240 y 92241 de Desert Hot Springs se presentan en el Tribunal Superior del Condado de Riverside — Tribunal de Palm Springs, 3255 E. Tahquitz Canyon Way — no en Oasis Street, no en Larson Justice Center de jurisdicción limitada, no en 4050 Main Street, no en 247 W. 3rd St., no en 8303 Haven Avenue, y no en la División Indio. El tribunal está unas 11 millas y unos 19 minutos al sur del Ayuntamiento de Desert Hot Springs en 11999 Palm Drive. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Una colisión en la I-10 o en el corredor de Pierson Boulevard puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al principio. La atención inicial de trauma suele comenzar en Desert Regional Medical Center antes de que el panorama de daños a largo plazo quede claro. La atención médica futura, la planificación de cuidados y la pérdida vocacional impulsan el caso que las aseguradoras intentan cerrar pronto. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas. La mayoría de las víctimas de lesiones en Desert Hot Springs tienen dos años bajo el CCP §335.1 contados desde la fecha del daño — confirme su plazo en la consulta antes de que la evidencia se deteriore; una entidad pública puede exigir aviso escrito de seis meses conforme al Código de Gobierno §911.2.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107, al sur',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Desert Hot Springs, la consulta es unas 11 millas y 18 minutos al sur por Pierson Boulevard, Palm Drive, Gene Autry Trail, Vista Chino / CA-111 y N Palm Canyon Drive — no un local en Desert Hot Springs. Si el mismo choque hunde el hogar, la misma llamada al (760) 835-9353 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside. Redlands es solo la segunda oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181.',
        ],
      },
    ],
  },
  yucaipa: {
    h1: 'Abogado de lesiones personales en Yucaipa',
    title: 'Abogado de Lesiones Personales en Yucaipa | Lombera Law',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques de la I-10 / corredor Wildwood Canyon en Yucaipa. Oficina en Orange Tree Lane #220, Redlands — unas 11.5 millas y unos 17 minutos al oeste-noroeste. (909) 915-0181.',
    lead: [
      'No hay local de Lombera en Yucaipa. Después de un choque en Yucaipa, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde el Ayuntamiento de Yucaipa en 34272 Yucaipa Boulevard — referencia cívica solamente — tome Yucaipa Boulevard por Oak Glen a la I-10 al oeste, luego California Street — unas 11.5 millas y unos 17 minutos al oeste-noroeste. El trayecto es al oeste-noroeste. La I-10 y el corredor Wildwood Canyon son corredores de choques en esta página, no la ruta a una oficina en Yucaipa. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10 y el corredor Wildwood Canyon',
        paragraphs: [
          'Yucaipa Boulevard, Oak Glen Road, el corredor Wildwood Canyon y el tráfico de camiones de paso en la I-10 producen las colisiones comerciales que lideran este expediente. La carga con destino al este subiendo el paso y el tráfico de fin de semana en Wildwood Canyon Road provocan choques por alcance y pérdida de control antes de que la carga despeje los corredores del valle. Después de un choque grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de Yucaipa se presentan en el Tribunal Superior del Condado de San Bernardino / Justice Center, 247 W. 3rd Street, San Bernardino — unas 18 millas y unos 26 minutos al oeste-noroeste desde el Ayuntamiento de Yucaipa en 34272 Yucaipa Boulevard — no en 4050 Main Street en Riverside, no en Tahquitz Canyon Way, no en 8303 Haven Avenue, no en Arrow Boulevard, y no en 400 N. Pepper. Esta es la página de carga I-10 / Wildwood Canyon de Yucaipa — no la página de carga de Fontana en la I-10 / I-15 / Sierra, no Colton Crossing / Mt Vernon, no el cruce I-210 / Base Line de Highland, ni el conjunto 60 / 91 / 215 de Riverside. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Yucaipa Boulevard y Oak Glen Road',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Yucaipa Boulevard, Oak Glen Road y el conector de la I-10 concentran recogidas de rideshare entre tráfico de fin de semana en el cañón, turnos comerciales a lo largo de la 10 y trayectos de pasajeros hacia Redlands y San Bernardino. Los reclamos de rideshare de Yucaipa permanecen en /es/lesiones-personales/yucaipa/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 247 W. 3rd Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados se presentan en el Tribunal Superior del Condado de San Bernardino / Justice Center, 247 W. 3rd Street, San Bernardino — no en 4050 Main Street en Riverside, no en Tahquitz Canyon Way, no en 8303 Haven Avenue, no en Arrow Boulevard, y no en 400 N. Pepper. El tribunal está unas 18 millas y unos 26 minutos al oeste-noroeste del Ayuntamiento de Yucaipa en 34272 Yucaipa Boulevard. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Una colisión en la I-10 o en el corredor Wildwood Canyon puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al principio. La atención médica futura, la planificación de cuidados y la pérdida vocacional impulsan el caso que las aseguradoras intentan cerrar pronto. Esto no es consejo médico.',
        ],
      },
      {
        h2: 'Auto, motocicleta y mordeduras — Código Civil §3342',
        paragraphs: [
          'Después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el Código Civil de California §3342 completan el expediente. Circular entre carriles en motocicleta es legal cuando se hace con seguridad; usar casco no invierte la culpa. No manejamos reclamos por resbalones y caídas.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane, al oeste-noroeste',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Yucaipa, la consulta es unas 11.5 millas y unos 17 minutos al oeste-noroeste por Yucaipa Boulevard por Oak Glen, la I-10 al oeste y California Street — no un local en Yucaipa. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 23 millas y unos 31 minutos al oeste-suroeste. Palm Springs es solo la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353 — unas 38 millas y unos 47 minutos al este-sureste.',
        ],
      },
    ],
  },
  ontario: {
    h1: 'Abogado de lesiones personales en Ontario, California',
    title: 'Abogado de Lesiones Personales en Ontario CA | Lombera Law',
    description:
      'Camiones, Uber, muerte injusta y lesiones catastróficas en choques del corredor I-10 / I-15 / ONT en Ontario, California. Oficina en Orange Tree Lane #220, Redlands — unas 25 millas y unos 33 minutos al este. (909) 915-0181.',
    lead: [
      'No hay local de Lombera en Ontario, California. Después de un choque en Ontario, reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. Desde el Ayuntamiento de Ontario en 303 E. B Street — referencia cívica solamente — tome E. B Street a Plum Avenue, Holt Boulevard, la I-10 al este, luego California Street — unas 25 millas y unos 33 minutos al este. El trayecto es al este. La I-10, la I-15 y el corredor ONT son corredores de choques en esta página, no la ruta a una oficina en Ontario. Llame al (909) 915-0181. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Usted habla con él. Los casos de lesiones son a contingencia: sin honorarios a menos que ganemos.',
    ],
    sections: [
      {
        h2: 'Choques de camiones en la I-10, la I-15 y el corredor ONT',
        paragraphs: [
          'El tráfico de camiones comerciales en la I-10, la I-15 y el corredor del Aeropuerto Internacional de Ontario a través de la red de almacenes del Inland Empire produce las colisiones de carga que lideran este expediente. La presión de incorporación en el conjunto I-10 / I-15 y el tráfico de distribución alrededor de las pistas de carga aérea de ONT provocan choques por alcance y arrastre antes de que la carga despeje los corredores del valle. Después de una colisión grave, preserve la descarga del ECM, las grabaciones de dashcam y el expediente de calificación del conductor antes de que las aseguradoras dispersen la evidencia. Las demandas civiles ilimitadas de Ontario se presentan en el Tribunal Superior del Condado de San Bernardino / Justice Center, 247 W. 3rd Street, San Bernardino — unas 24 millas y unos 33 minutos al este desde el Ayuntamiento de Ontario en 303 E. B Street. Ontario figura en la lista de Áreas Atendidas del tribunal en esa dirección — no en 4050 Main Street en Riverside, no en Tahquitz Canyon Way, no en 8303 Haven Avenue, no en Arrow Boulevard, y no en 400 N. Pepper. Esta es la página del corredor I-10 / I-15 / ONT de Ontario — no la página de carga de Fontana en la I-10 / I-15 / Sierra, no el conjunto Haven de Rancho Cucamonga, no Colton Crossing / Mt Vernon, ni el conjunto 60 / 91 / 215 de Riverside. Las demandas por muerte injusta y lesión cerebral traumática de estos choques permanecen en esta URL.',
        ],
      },
      {
        h2: 'Uber y Lyft en Fourth Street, Mountain Avenue y el corredor Ontario Mills',
        paragraphs: [
          'Si el conductor tenía la aplicación activada cambia qué aseguradora debe responder — confirmamos la cobertura en la consulta, no con cifras de marketing. Fourth Street, Mountain Avenue y el corredor Ontario Mills concentran recogidas de rideshare entre turnos de almacén, trayectos al aeropuerto hacia ONT y viajes de pasajeros hacia Rancho Cucamonga y Fontana. Los reclamos de rideshare de Ontario permanecen en /es/lesiones-personales/ontario/. No inventamos una página /uber/.',
        ],
      },
      {
        h2: 'Muerte injusta — legitimación bajo el CCP §377.60 en 247 W. 3rd Street',
        paragraphs: [
          'Quién puede presentar la demanda se confirma en la consulta bajo el Código de Procedimiento Civil de California §377.60 — no inventamos veredictos ni historias de acuerdos. Los expedientes civiles ilimitados de Ontario se presentan en el Tribunal Superior del Condado de San Bernardino / Justice Center, 247 W. 3rd Street, San Bernardino — no en 4050 Main Street en Riverside, no en Tahquitz Canyon Way, no en 8303 Haven Avenue, no en Arrow Boulevard, y no en 400 N. Pepper. El tribunal está unas 24 millas y unos 33 minutos al este del Ayuntamiento de Ontario en 303 E. B Street. El plazo general de dos años del CCP §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al Código de Gobierno §911.2 antes de demandar.',
        ],
      },
      {
        h2: 'Lesiones catastróficas — cerebral, médula, pérdida de miembro',
        paragraphs: [
          'La lesión cerebral traumática, la lesión de médula espinal y la amputación son resultados de daños manejados solo en esta URL — no una página separada de /lesiones-catastroficas/. Una colisión en el corredor I-10 / I-15 / ONT puede dejar necesidades médicas de por vida y capacidad de ingreso perdida que las aseguradoras subvaloran al principio. La atención médica futura, la planificación de cuidados y la pérdida vocacional impulsan el caso que las aseguradoras intentan cerrar pronto. Esto no es consejo médico.',
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
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Lesiones graves pueden contactar la oficina las 24 horas para consulta de emergencia. Desde Ontario, la consulta es unas 25 millas y unos 33 minutos al este por E. B Street, Plum Avenue, Holt Boulevard, la I-10 al este y California Street — no un local en Ontario. Si el mismo choque hunde el hogar, la misma llamada al (909) 915-0181 presenta el Capítulo 7 o 13 en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 20.5 millas y unos 28 minutos al este-sureste; la presentación de bancarrota puede estar más cerca que la consulta en Orange Tree Lane, pero la consulta de lesiones personales permanece en Orange Tree. Palm Springs es solo la segunda oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353 — unas 70.5 millas y unos 83 minutos al este-sureste.',
        ],
      },
    ],
  },
}

const BK_ES: Record<CitySlug, CityPageCopy> = {
  fontana: {
    h1: 'Abogado de Bancarrota en Fontana',
    title: 'Abogado de Bancarrota Fontana | Capítulo 7 y 13 | Inland Empire | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 para hogares de Fontana. Preparado en 2068 Orange Tree Lane, Redlands; presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (909) 915-0181.',
    lead: [
      'No hay suite de Lombera en 7426 Cherry Ave #210-312, 11326 Winery Dr, Sierra Avenue ni Hospitality Lane — y 247 W. 3rd Street es tribunal civil, no una oficina de bancarrota. Los embargos de salario y avisos de ejecución hipotecaria en Fontana son cobranza del tribunal estatal hasta que se presenta una petición federal. Reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — unas 15 millas y 21 minutos al este por la I-10 desde Fontana. Él prepara el Capítulo 7 y el Capítulo 13 aquí. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Todo caso de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — no hay tribunal de bancarrota en Fontana. Llame al (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar pasa la prueba de medios — tarjetas de crédito, facturas médicas de Kaiser y otros proveedores de Fontana, y saldos de deficiencia tras la recuperación de un vehículo de trayecto diario. Esta es una revisión de hogar del corredor de la I-10 en Orange Tree Lane, no un molino de volumen ni una reescritura del Paso de San Gorgonio. Un caso típico sin activos se elimina en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y reducción forzada del saldo garantizado',
        paragraphs: [
          'El Capítulo 13 incorpora los atrasos de la hipoteca en un plan judicial de tres a cinco años y puede reducir de forma forzada ciertos saldos garantizados donde el Código de Bancarrota lo permite — frecuente cuando un hogar de Fontana tiene ingresos de almacén o logística pero se atrasó en la casa durante un ciclo de despido. El plan es el alivio, no un complemento de defensa de ejecución hipotecaria vendido por separado.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario de empleadores de Fontana, las ventas de ejecución hipotecaria programadas y los plazos de recuperación de vehículos se pausan para la mayoría de los acreedores. Presentar antes del próximo cheque o fecha de venta protege el tiempo que esperar consumiría.',
        ],
      },
      {
        h2: 'Dónde presenta Fontana — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Toda bancarrota de consumidor de Fontana se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — unas 12 millas y 17 minutos al oeste-suroeste desde el escritorio en Orange Tree Lane por California Street, la I-10, la I-215 y Mission Inn Avenue. Eso no es el tribunal civil de 247 W. 3rd St., no es Sierra Avenue, no es Cherry Avenue, no es Hospitality Lane, no es 4050 Main Street, no es Tahquitz Canyon Way ni la División Indio. Las tarifas oficiales de presentación judicial son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 suele ser remota.',
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
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Desde Fontana, la consulta es unas 15 millas y 21 minutos al este por la I-10 — no un local en Cherry Avenue ni Winery Drive. Palm Springs es la otra oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
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
    h1: 'Abogado de Bancarrota en Rancho Cucamonga',
    title: 'Abogado de Bancarrota en Rancho Cucamonga | Capítulo 7 y Capítulo 13 | Inland Empire | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 para hogares de Rancho Cucamonga. Preparado en 2068 Orange Tree Lane, Redlands; presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (909) 915-0181.',
    lead: [
      'Los embargos de salario y las demandas de acreedores en Rancho Cucamonga son cobranza del tribunal estatal hasta que se presenta una petición federal. Reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — unas 24 millas y 32 minutos al este desde el centro de Rancho Cucamonga por Haven Avenue, la I-10 al este y California Street. Prepara el Capítulo 7 y el Capítulo 13 en ese escritorio de Orange Tree. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. No hay local de Lombera en Rancho Cucamonga. Todo caso de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside. Llame al (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar supera la prueba de medios — tarjetas de crédito, facturas médicas del corredor de Foothill y saldos por deficiencia después de un retiro de vehículo de traslado. Esta es una revisión del hogar de Rancho Cucamonga en el escritorio de Orange Tree Lane, no un molino de volumen. Un caso típico sin activos se libera en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y reducción forzada del saldo garantizado',
        paragraphs: [
          'El Capítulo 13 integra los atrasos hipotecarios en un plan judicial de tres a cinco años y puede aplicar reducción forzada del saldo garantizado en ciertos saldos garantizados cuando el Código de Bancarrota lo permite — frecuente cuando un hogar de Rancho Cucamonga aún recibe salarios de parques logísticos en Milliken o del conjunto I-15 / I-210 pero se quedó atrás durante un despido o un evento médico. El plan es el alivio, no un complemento de defensa de ejecución hipotecaria vendido por separado.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario ligados a empleadores de Rancho Cucamonga, las ventas de ejecución hipotecaria programadas y los plazos de recuperación de vehículos se detienen para la mayoría de los acreedores. Presentar antes del próximo cheque de pago o fecha de venta protege el tiempo que esperar quema.',
        ],
      },
      {
        h2: 'Dónde presenta Rancho Cucamonga — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Toda bancarrota de consumidor de Rancho Cucamonga se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — unas 12 millas y 17 minutos al suroeste desde el escritorio en 2068 Orange Tree Lane por California Street, la I-10 y la I-215. Ese edificio es el tribunal federal, no una suite de Lombera. No hay tribunal de bancarrota en Rancho Cucamonga. Las tarifas judiciales oficiales son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 a menudo se celebra de forma remota.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Desde Rancho Cucamonga, la consulta es unas 24 millas y 32 minutos al este por Haven Avenue, la I-10 al este y California Street — cita presencial en Orange Tree Lane, no en un tribunal federal. Palm Springs es la otra oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
        ],
      },
    ],
  },
  beaumont: {
    h1: 'Abogado de Bancarrota en Beaumont',
    title: 'Abogado de Bancarrota Beaumont | Capítulo 7 y Capítulo 13 | Inland Empire | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 para hogares de Beaumont. Preparado en 2068 Orange Tree Lane, Suite 220, Redlands; presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (909) 915-0181.',
    lead: [
      'Los embargos de salario y avisos de ejecución hipotecaria en Beaumont son cobranza del tribunal estatal hasta que se presenta una petición federal. Reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — unas 19 millas y 23 minutos al noroeste desde el centro de Beaumont por Beaumont Avenue, la I-10 al oeste y California Street. Él prepara el Capítulo 7 y el Capítulo 13 en ese escritorio de Orange Tree. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. No hay local de Lombera en Beaumont. Todo caso de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 12 millas y 17 minutos al suroeste desde la oficina de Redlands por California Street, la I-10 y la I-215. Llame al (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar pasa la prueba de medios — tarjetas de crédito, facturas médicas del área del paso y saldos de deficiencia tras la recuperación de un vehículo. Esta es una revisión de hogar de Beaumont en el escritorio de Orange Tree Lane. Un caso típico sin activos se elimina en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y reducción forzada del saldo garantizado',
        paragraphs: [
          'El Capítulo 13 incorpora los atrasos de la hipoteca en un plan judicial de tres a cinco años y puede reducir de forma forzada ciertos saldos garantizados donde el Código de Bancarrota lo permite — frecuente cuando un hogar de Beaumont en el corredor del paso de la I-10 aún tiene salarios pero se atrasó durante un evento médico o un ciclo de presión de costos de traslado. El plan es el alivio, no un complemento de defensa de ejecución hipotecaria vendido por separado.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario vinculados a empleadores de Beaumont, las ventas de ejecución hipotecaria programadas y los plazos de recuperación de vehículos se pausan para la mayoría de los acreedores. Presentar antes del próximo cheque o fecha de venta protege el tiempo que esperar consumiría.',
        ],
      },
      {
        h2: 'Dónde presenta Beaumont — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Toda bancarrota de consumidor de Beaumont se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — unas 12 millas y 17 minutos al suroeste por California Street, la I-10 y la I-215 desde el escritorio en 2068 Orange Tree Lane en Redlands. Ese edificio es el tribunal, no una suite de Lombera. No hay tribunal de bancarrota en Beaumont. Las tarifas oficiales de presentación judicial son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 suele ser remota.',
        ],
      },
      {
        h2: '(909) 915-0181 — 2068 Orange Tree Lane, Suite 220',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Desde Beaumont, la consulta es unas 19 millas y 23 minutos al noroeste por Beaumont Avenue, la I-10 al oeste y California Street — en el escritorio de Orange Tree Lane, no una dirección de tribunal federal. Palm Springs es la otra oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
        ],
      },
    ],
  },
  'palm-springs': {
    h1: 'Abogado de Bancarrota en Palm Springs',
    title: 'Abogado de Bancarrota Palm Springs | Capítulo 7 y Capítulo 13 | Inland Empire | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 para hogares de Palm Springs. Preparado en 1276 N Palm Canyon Dr #107; presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (760) 835-9353.',
    lead: [
      'Esta es la oficina del Valle de Coachella — 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. No hay suite de Lombera en un tribunal civil del condado en Palm Springs ni en 3420 Twelfth Street — esa última dirección es el tribunal federal en Riverside, no un local en Palm Canyon. Edgar P. Lombera prepara el Capítulo 7 y el Capítulo 13 aquí en Palm Springs. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Todo caso de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 52 millas y 64 minutos al oeste por la Carretera 111 y la I-10. Llame al (760) 835-9353.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar pasa la prueba de medios — tarjetas de crédito, facturas médicas del valle y saldos de deficiencia tras la recuperación de un vehículo. Esta es una revisión de hogar del Valle de Coachella en Palm Canyon Drive, no un molino de volumen enviado desde el Inland Empire. Un caso típico sin activos se elimina en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y reducción forzada del saldo garantizado',
        paragraphs: [
          'El Capítulo 13 incorpora los atrasos de la hipoteca en un plan judicial de tres a cinco años y puede reducir de forma forzada ciertos saldos garantizados donde el Código de Bancarrota lo permite — útil cuando los ingresos estacionales de hospitalidad cayeron pero el hogar aún tiene salarios para financiar un plan de recuperación. El plan es el alivio, no un producto de defensa de ejecución hipotecaria vendido aparte.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario vinculados a empleadores del valle, las ventas de ejecución hipotecaria programadas y los plazos de recuperación de vehículos se pausan para la mayoría de los acreedores. Presentar antes del próximo cheque o fecha de venta protege el tiempo que esperar consumiría.',
        ],
      },
      {
        h2: 'Dónde presenta Palm Springs — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Toda bancarrota de consumidor de Palm Springs se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — unas 52 millas y 64 minutos al oeste por la Carretera 111 y la I-10 desde el escritorio en Palm Canyon Drive. Ese edificio es el tribunal, no una suite de Lombera. Eso no es el tribunal civil del condado en Palm Springs, no es 4050 Main Street, no es 247 W. 3rd St. ni la División Indio. No hay tribunal de bancarrota en Palm Springs. Las tarifas oficiales de presentación judicial son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 suele ser remota.',
        ],
      },
      {
        h2: 'Deuda fiscal frente a acuerdo por lesiones',
        paragraphs: [
          'La deuda fiscal antigua por ingresos puede eliminarse en el Capítulo 7 cuando se cumplen las reglas de plazo y aviso — lo confirmamos en la consulta. Un acuerdo por lesiones personales del mismo hogar es una pregunta separada bajo el modelo de dos prácticas. Las exenciones de vivienda de California se confirman con sus documentos — no imprimimos montos en dólares aquí.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. La consulta es en persona en Palm Springs — no una dirección de tribunal federal. Redlands es la otra oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
        ],
      },
    ],
  },
  'palm-desert': {
    h1: 'Abogado de Bancarrota en Palm Desert',
    title: 'Abogado de Bancarrota Palm Desert | Capítulo 7 y Capítulo 13 | Inland Empire | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 para hogares de Palm Desert. Preparado en 1276 N Palm Canyon Dr #107, Palm Springs; presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (760) 835-9353.',
    lead: [
      'Los embargos de salario y avisos de ejecución hipotecaria en Palm Desert son cobranza del tribunal estatal hasta que se presenta una petición federal. Reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — unas 17 millas y 26 minutos al noroeste por Fred Waring Drive, Monterey Avenue, la I-10 al oeste y Date Palm Drive desde el centro de Palm Desert. Él prepara el Capítulo 7 y el Capítulo 13 en ese escritorio. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Todo caso de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 52 millas y 64 minutos al oeste por la Carretera 111 y la I-10 desde la oficina de Palm Canyon. Llame al (760) 835-9353.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar pasa la prueba de medios — tarjetas de crédito, facturas médicas del desierto y saldos de deficiencia tras la recuperación de un vehículo. Esta es una revisión de hogar del valle de Palm Desert en el escritorio de Palm Canyon, no un molino de volumen ni una página de Palm Springs con el nombre de la ciudad cambiado. Un caso típico sin activos se elimina en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y reducción forzada del saldo garantizado',
        paragraphs: [
          'El Capítulo 13 incorpora los atrasos de la hipoteca en un plan judicial de tres a cinco años y puede reducir de forma forzada ciertos saldos garantizados donde el Código de Bancarrota lo permite — frecuente cuando un hogar de Palm Desert aún tiene salarios o ingresos de jubilación pero se atrasó durante un evento médico o un ciclo de presión de la HOA. El plan es el alivio, no un complemento de defensa de ejecución hipotecaria vendido por separado.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario vinculados a empleadores de Palm Desert, las ventas de ejecución hipotecaria programadas y los plazos de recuperación de vehículos se pausan para la mayoría de los acreedores. Presentar antes del próximo cheque o fecha de venta protege el tiempo que esperar consumiría.',
        ],
      },
      {
        h2: 'Dónde presenta Palm Desert — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Toda bancarrota de consumidor de Palm Desert se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — unas 52 millas y 64 minutos al oeste por la Carretera 111 y la I-10 desde el escritorio en 1276 N Palm Canyon Dr en Palm Springs. Ese edificio es el tribunal, no una suite de Lombera. Eso no es el tribunal civil del condado en el valle, no es 4050 Main Street, no es 247 W. 3rd St. ni la División Indio. No hay tribunal de bancarrota en Palm Desert. Las tarifas oficiales de presentación judicial son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 suele ser remota.',
        ],
      },
      {
        h2: 'Deuda fiscal frente a acuerdo por lesiones',
        paragraphs: [
          'La deuda fiscal antigua por ingresos puede eliminarse en el Capítulo 7 cuando se cumplen las reglas de plazo y aviso — lo confirmamos en la consulta. Un acuerdo por lesiones personales del mismo hogar es una pregunta separada bajo el modelo de dos prácticas. Las exenciones de vivienda de California se confirman con sus documentos — no imprimimos montos en dólares aquí.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Desde Palm Desert, la consulta es unas 17 millas y 26 minutos al noroeste por Fred Waring, Monterey, la I-10 al oeste y Date Palm — en el escritorio de Palm Canyon, no una dirección de tribunal federal. Redlands es la otra oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
        ],
      },
    ],
  },
  'cathedral-city': {
    h1: 'Abogado de Bancarrota en Cathedral City',
    title: 'Abogado de Bancarrota Cathedral City | Capítulo 7 y Capítulo 13 | Inland Empire | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 para hogares de Cathedral City. Preparado en 1276 N Palm Canyon Dr #107, Palm Springs; presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (760) 835-9353.',
    lead: [
      'Los embargos de salario y avisos de ejecución hipotecaria en Cathedral City son cobranza del tribunal estatal hasta que se presenta una petición federal. Reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — unas 9 millas y 15 minutos al noroeste desde Cathedral City por Cathedral Canyon Drive, East Palm Canyon Drive, Gene Autry Trail y Vista Chino. Él prepara el Capítulo 7 y el Capítulo 13 en ese escritorio de Palm Springs. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. No hay local de Lombera en Cathedral City. Todo caso de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 52 millas y 64 minutos al oeste desde la oficina de Palm Canyon. Llame al (760) 835-9353.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar pasa la prueba de medios — tarjetas de crédito, facturas médicas del valle y saldos de deficiencia tras la recuperación de un vehículo. Esta es una revisión de hogar de Cathedral City en el escritorio de Palm Canyon. Un caso típico sin activos se elimina en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y reducción forzada del saldo garantizado',
        paragraphs: [
          'El Capítulo 13 incorpora los atrasos de la hipoteca en un plan judicial de tres a cinco años y puede reducir de forma forzada ciertos saldos garantizados donde el Código de Bancarrota lo permite — frecuente cuando un hogar de Cathedral City aún tiene salarios pero se atrasó durante un evento médico o un ciclo de presión de tarjetas de crédito. El plan es el alivio, no un complemento de defensa de ejecución hipotecaria vendido por separado.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario vinculados a empleadores de Cathedral City, las ventas de ejecución hipotecaria programadas y los plazos de recuperación de vehículos se pausan para la mayoría de los acreedores. Presentar antes del próximo cheque o fecha de venta protege el tiempo que esperar consumiría.',
        ],
      },
      {
        h2: 'Dónde presenta Cathedral City — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Toda bancarrota de consumidor de Cathedral City se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — unas 52 millas y 64 minutos al oeste por la Carretera 111 y la I-10 desde el escritorio en 1276 N Palm Canyon Dr en Palm Springs. Ese edificio es el tribunal, no una suite de Lombera. No hay tribunal de bancarrota en Cathedral City. Las tarifas oficiales de presentación judicial son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 suele ser remota.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Desde Cathedral City, la consulta es unas 9 millas y 15 minutos al noroeste por Cathedral Canyon, East Palm Canyon, Gene Autry y Vista Chino — en el escritorio de Palm Canyon, no una dirección de tribunal federal. Redlands es la otra oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
        ],
      },
    ],
  },
  indio: {
    h1: 'Abogado de Bancarrota en Indio',
    title: 'Abogado de Bancarrota Indio | Capítulo 7 y Capítulo 13 | Inland Empire | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 para hogares de Indio. Preparado en 1276 N Palm Canyon Dr #107, Palm Springs; presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (760) 835-9353.',
    lead: [
      'Los embargos de salario y avisos de ejecución hipotecaria en Indio son cobranza del tribunal estatal hasta que se presenta una petición federal. Reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — unas 24 millas y 31 minutos al oeste-noroeste desde el centro de Indio por Jackson Street, la I-10 al oeste, Vista Chino y Palm Canyon. Él prepara el Capítulo 7 y el Capítulo 13 en ese escritorio de Palm Springs. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. No hay local de Lombera en Indio. Todo caso de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 52 millas y 64 minutos al oeste desde la oficina de Palm Canyon. Llame al (760) 835-9353.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar pasa la prueba de medios — tarjetas de crédito, facturas médicas del valle y saldos de deficiencia tras la recuperación de un vehículo. Esta es una revisión de hogar de Indio en el escritorio de Palm Canyon. Un caso típico sin activos se elimina en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y reducción forzada del saldo garantizado',
        paragraphs: [
          'El Capítulo 13 incorpora los atrasos de la hipoteca en un plan judicial de tres a cinco años y puede reducir de forma forzada ciertos saldos garantizados donde el Código de Bancarrota lo permite — frecuente cuando un hogar de Indio aún tiene salarios de hospitalidad, logística o trabajo estacional del valle pero se atrasó durante un evento médico o un ciclo de presión de la HOA. El plan es el alivio, no un complemento de defensa de ejecución hipotecaria vendido por separado.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario vinculados a empleadores de Indio, las ventas de ejecución hipotecaria programadas y los plazos de recuperación de vehículos se pausan para la mayoría de los acreedores. Presentar antes del próximo cheque o fecha de venta protege el tiempo que esperar consumiría.',
        ],
      },
      {
        h2: 'Dónde presenta Indio — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Toda bancarrota de consumidor de Indio se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — unas 52 millas y 64 minutos al oeste por la Carretera 111 y la I-10 desde el escritorio en 1276 N Palm Canyon Dr en Palm Springs. Ese edificio es el tribunal, no una suite de Lombera. No hay tribunal de bancarrota en Indio. Las tarifas oficiales de presentación judicial son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 suele ser remota.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Desde Indio, la consulta es unas 24 millas y 31 minutos al oeste-noroeste por Jackson Street, la I-10 al oeste, Vista Chino y Palm Canyon — en el escritorio de Palm Canyon, no una dirección de tribunal federal. Redlands es la otra oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
        ],
      },
    ],
  },
  'la-quinta': {
    h1: 'Abogado de Bancarrota en La Quinta',
    title: 'Abogado de Bancarrota La Quinta | Capítulo 7 y Capítulo 13 | Valle de Coachella | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 para hogares de La Quinta. Preparado en 1276 N Palm Canyon Dr #107, Palm Springs; presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (760) 835-9353.',
    lead: [
      'Los embargos de salario y avisos de ejecución hipotecaria en La Quinta son cobranza del tribunal estatal hasta que se presenta una petición federal. Reúnase con Edgar P. Lombera en 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — unas 23 millas y unos 34 minutos al noroeste desde La Quinta por Washington Street, Varner Road, la I-10 al oeste, Vista Chino y Palm Canyon. Él prepara el Capítulo 7 y el Capítulo 13 en ese escritorio de Palm Springs. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. No hay local de Lombera en La Quinta. Todo caso de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — unas 73.5 millas y unos 91 minutos al noroeste desde la oficina de Palm Canyon. Llame al (760) 835-9353.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar pasa la prueba de medios — tarjetas de crédito, facturas médicas del valle y saldos de deficiencia tras la recuperación de un vehículo. Esta es una revisión de hogar de La Quinta en el escritorio de Palm Canyon. Un caso típico sin activos se elimina en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y reducción forzada del saldo garantizado',
        paragraphs: [
          'El Capítulo 13 incorpora los atrasos de la hipoteca en un plan judicial de tres a cinco años y puede reducir de forma forzada ciertos saldos garantizados donde el Código de Bancarrota lo permite — frecuente cuando un hogar de La Quinta aún tiene salarios de hospitalidad, resort de golf o trabajo estacional del valle pero se atrasó durante un evento médico o un ciclo de presión de la HOA. El plan es el alivio, no un complemento de defensa de ejecución hipotecaria vendido por separado.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario vinculados a empleadores de La Quinta, las ventas de ejecución hipotecaria programadas y los plazos de recuperación de vehículos se pausan para la mayoría de los acreedores. Presentar antes del próximo cheque o fecha de venta protege el tiempo que esperar consumiría.',
        ],
      },
      {
        h2: 'Dónde presenta La Quinta — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Toda bancarrota de consumidor de La Quinta se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — unas 73.5 millas y unos 91 minutos al noroeste por la Carretera 111 y la I-10 desde el escritorio en 1276 N Palm Canyon Dr en Palm Springs. Ese edificio es el tribunal, no una suite de Lombera. No hay tribunal de bancarrota en La Quinta. Las tarifas oficiales de presentación judicial son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 suele ser remota.',
        ],
      },
      {
        h2: '(760) 835-9353 — 1276 N Palm Canyon Dr #107',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Desde La Quinta, la consulta es unas 23 millas y unos 34 minutos al noroeste por Washington Street, Varner Road, la I-10 al oeste, Vista Chino y Palm Canyon — en el escritorio de Palm Canyon, no una dirección de tribunal federal. Redlands es la otra oficina — 2068 Orange Tree Lane, Suite 220, (909) 915-0181. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
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
    h1: 'Abogado de Bancarrota en Riverside',
    title: 'Abogado de Bancarrota Riverside | Capítulo 7 y Capítulo 13 | Inland Empire | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 para hogares de Riverside. Preparado en 2068 Orange Tree Lane, Redlands; presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (909) 915-0181.',
    lead: [
      'No hay suite de Lombera en 10580 Magnolia Avenue, 6840 Indiana Avenue, 3610 Central Avenue, 3880 Lemon Street, ni Van Buren y Magnolia — y 3420 Twelfth Street es el tribunal federal, no un local de despacho. Los embargos de salario y avisos de ejecución hipotecaria en Riverside son cobranza del tribunal estatal hasta que se presenta una petición federal. Reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — unas 12 millas y 17 minutos al este por Mission Inn Avenue, la CA-91 y la I-10 al este. Él prepara el Capítulo 7 y el Capítulo 13 aquí. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Los casos de consumidor se presentan en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — en esta ciudad, no en el tribunal civil de 4050 Main Street. Llame al (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar pasa la prueba de medios — tarjetas de crédito, facturas de hospitales y clínicas de Riverside, y saldos de deficiencia tras la recuperación de un vehículo. Esta es una revisión de hogar de la sede del condado en Orange Tree Lane, no un molino de volumen. Un caso típico sin activos se elimina en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y reducción forzada del saldo garantizado',
        paragraphs: [
          'El Capítulo 13 incorpora los atrasos de la hipoteca en un plan judicial de tres a cinco años y puede reducir de forma forzada ciertos saldos garantizados donde el Código de Bancarrota lo permite — útil cuando un hogar de Riverside aún gana salarios del condado o del corredor universitario pero se atrasó durante un despido o una licencia médica. El plan es el alivio, no un producto de defensa de ejecución hipotecaria vendido aparte.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario vinculados a empleadores de Riverside, las ventas de ejecución hipotecaria programadas y los plazos de recuperación de vehículos se pausan para la mayoría de los acreedores. Presentar antes del próximo cheque o fecha de venta protege el tiempo que esperar consumiría.',
        ],
      },
      {
        h2: 'Dónde presenta Riverside — 3420 Twelfth Street, en esta ciudad',
        paragraphs: [
          'Las bancarrotas de consumidor de Riverside se presentan en esta ciudad en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street — unas 0.5 millas y 2 minutos al sur del ayuntamiento en 3900 Main Street. Ese edificio es el tribunal, no una suite de Lombera. Las peticiones se preparan en 2068 Orange Tree Lane en Redlands — unas 12 millas y 17 minutos al este por Mission Inn Avenue, la CA-91 y la I-10 al este. Eso no es el tribunal civil de 4050 Main Street, no es 247 W. 3rd St., no es Tahquitz Canyon Way ni la División Indio. Las tarifas oficiales de presentación judicial son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 suele ser remota.',
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
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Desde Riverside, la consulta es unas 12 millas y 17 minutos al este por Mission Inn, la CA-91 y la I-10 — no un local en Magnolia o Indiana Avenue. Palm Springs es la otra oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
        ],
      },
    ],
  },
  'moreno-valley': {
    h1: 'Abogado de Bancarrota en Moreno Valley',
    title: 'Abogado de Bancarrota Moreno Valley | Capítulo 7 y Capítulo 13 | Inland Empire | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 para hogares de Moreno Valley. Preparado en 2068 Orange Tree Lane, Redlands; presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (909) 915-0181.',
    lead: [
      'No hay suite de Lombera en 24384 Sunnymead Boulevard, 24490 Sunnymead Boulevard, 12981 Perris Boulevard, 23962 Alessandro Boulevard ni 14177 Frederick Street — y 3420 Twelfth Street es el tribunal federal, no un local de despacho. Los embargos de salario y avisos de ejecución hipotecaria en Moreno Valley son cobranza del tribunal estatal hasta que se presenta una petición federal. Reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — unas 20 millas y 26 minutos al norte por Frederick Street, Cactus Avenue, la I-215 al norte y la I-10 al este desde el ayuntamiento. Él prepara el Capítulo 7 y el Capítulo 13 aquí. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. Los casos de consumidor se presentan en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — no en el tribunal civil de 13800 Heacock. Llame al (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar pasa la prueba de medios — tarjetas de crédito, facturas médicas de Moreno Valley y saldos de deficiencia tras la recuperación de un vehículo de trayecto diario. Esta es una revisión de hogar del corredor de March ARB y almacenes en Orange Tree Lane, no un molino de volumen. Un caso típico sin activos se elimina en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y reducción forzada del saldo garantizado',
        paragraphs: [
          'El Capítulo 13 incorpora los atrasos de la hipoteca en un plan judicial de tres a cinco años y puede reducir de forma forzada ciertos saldos garantizados donde el Código de Bancarrota lo permite — frecuente cuando un hogar de Moreno Valley aún gana salarios de logística o distribución pero se atrasó durante un despido o una licencia médica. El plan es el alivio, no un complemento de defensa de ejecución hipotecaria vendido por separado.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario vinculados a empleadores de Moreno Valley, las ventas de ejecución hipotecaria programadas y los plazos de recuperación de vehículos se pausan para la mayoría de los acreedores. Presentar antes del próximo cheque o fecha de venta protege el tiempo que esperar consumiría.',
        ],
      },
      {
        h2: 'Dónde presenta Moreno Valley — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Toda bancarrota de consumidor de Moreno Valley se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — unas 10 millas y 16 minutos al noroeste desde el ayuntamiento en 14177 Frederick Street, o unas 12 millas y 17 minutos al suroeste desde el escritorio en Orange Tree Lane. Ese edificio es el tribunal, no una suite de Lombera. Eso no es el tribunal civil limitado de 13800 Heacock, no es 4050 Main Street, no es Sunnymead Boulevard, no es 247 W. 3rd St., no es Tahquitz Canyon Way ni la División Indio. Las tarifas oficiales de presentación judicial son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 suele ser remota.',
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
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Desde Moreno Valley, la consulta es unas 20 millas y 26 minutos al norte por Frederick, Cactus, la I-215 al norte y la I-10 al este — no un local en Sunnymead ni Perris Boulevard. Palm Springs es la otra oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
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
    h1: 'Abogado de Bancarrota en Hemet',
    title: 'Abogado de Bancarrota en Hemet | Capítulo 7 y Capítulo 13 | Inland Empire | Lombera',
    description:
      'Capítulo 7 y Capítulo 13 para hogares de Hemet. Preparado en 2068 Orange Tree Lane, Redlands; presentado en 3420 Twelfth Street, Riverside. Alivio de embargo y ejecución hipotecaria. (909) 915-0181.',
    lead: [
      'Los embargos de salario y avisos de ejecución hipotecaria en Hemet son cobranza del tribunal estatal hasta que se presenta una petición federal. Reúnase con Edgar P. Lombera en 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374 — unas 33 millas y 43 minutos al norte-noroeste desde el centro de Hemet por Florida Avenue, State Street, Ramona Expressway, CA 79 (Sanderson / Lamb Canyon / Beaumont Avenue), la I-10 al oeste y California Street. Prepara el Capítulo 7 y el Capítulo 13 en este escritorio. Usted habla con él. Inglés o español. Solo dos prácticas: lesiones personales y bancarrota. No hay oficina de Lombera en Hemet. Todo caso de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside. Llame al (909) 915-0181.',
    ],
    sections: [
      {
        h2: 'Capítulo 7 — prueba de medios y eliminación sin activos',
        paragraphs: [
          'El Capítulo 7 elimina la mayor parte de la deuda no garantizada cuando el hogar supera la prueba de medios — tarjetas de crédito, facturas médicas del Valle de San Jacinto y saldos por deficiencia después de un retiro de vehículo. Esta es una revisión del hogar de Hemet en Orange Tree Lane, no un molino de volumen. Un caso típico sin activos se libera en unos 90 a 120 días cuando el síndico acepta la petición.',
        ],
      },
      {
        h2: 'Capítulo 13 — plan, atrasos y reducción forzada del saldo garantizado',
        paragraphs: [
          'El Capítulo 13 integra los atrasos hipotecarios en un plan judicial de tres a cinco años y puede aplicar reducción forzada del saldo garantizado en ciertos saldos garantizados cuando el Código de Bancarrota lo permite — frecuente cuando un hogar de Hemet aún tiene salarios de empleadores del valle o ingresos de jubilación pero se quedó atrás durante un evento médico o presión de ingresos fijos. El plan es el alivio, no un complemento de defensa de ejecución hipotecaria vendido por separado.',
        ],
      },
      {
        h2: 'Suspensión automática — embargo, ejecución hipotecaria, recuperación de vehículo',
        paragraphs: [
          'La suspensión automática comienza el día que se presenta la petición — los embargos de salario ligados a empleadores de Hemet, las ventas de ejecución hipotecaria programadas y los plazos de recuperación de vehículos se detienen para la mayoría de los acreedores. Presentar antes del próximo cheque de pago o fecha de venta protege el tiempo que esperar quema.',
        ],
      },
      {
        h2: 'Dónde presenta Hemet — 3420 Twelfth Street, Riverside',
        paragraphs: [
          'Toda bancarrota de consumidor de Hemet se presenta en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, 3420 Twelfth Street, Riverside — unas 12 millas y 17 minutos al suroeste desde el escritorio en Orange Tree Lane por California Street, la I-10 y la I-215. Ese edificio es el tribunal federal, no una suite de Lombera. No hay tribunal de bancarrota en Hemet. Las tarifas judiciales oficiales son $338 para el Capítulo 7 y $313 para el Capítulo 13. La reunión de acreedores de la Sección 341 a menudo se celebra de forma remota.',
        ],
      },
      {
        h2: '(909) 915-0181 — Orange Tree Lane',
        paragraphs: [
          'Horario: lunes a viernes 9am–6pm, sábado 10am–4pm, domingo con cita. Desde Hemet, la consulta es unas 33 millas y 43 minutos al norte-noroeste por Florida Avenue, State Street, Ramona Expressway, CA 79 (Sanderson / Lamb Canyon / Beaumont Avenue), la I-10 al oeste y California Street — cita presencial en Orange Tree Lane, no en un tribunal federal. Palm Springs es la otra oficina — 1276 N Palm Canyon Dr #107, (760) 835-9353. Somos una agencia de alivio de deudas. Ayudamos a las personas a solicitar alivio de bancarrota bajo el Código de Bancarrota (11 U.S.C. §528).',
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
  yucaipa: {
    h1: "Abogado de bancarrota en Yucaipa — se presenta en Riverside",
    title: "Abogado de Bancarrota Yucaipa | Lombera",
    description: "Bancarrota en Yucaipa. Defensa de ejecución hipotecaria, embargo de salario, Capítulo 7 y 13. Riverside. (909) 915-0181.",
    lead: [
      "Un embargo de salario o aviso de ejecución hipotecaria en Yucaipa significa que el proceso en tribunal estatal ya avanza. La bancarrota detiene la mayoría de las cobranzas el día que se presenta la petición en el tribunal federal de Riverside. Edgar P. Lombera explica el Capítulo 7 y el Capítulo 13 en una consulta gratuita desde Redlands.",
    ],
    sections: [
          {
            h2: "Detener el embargo antes del próximo cheque",
            paragraphs: [
            "El Capítulo 7 puede eliminar la deuda no garantizada; el Capítulo 13 pone al día la hipoteca en tres a cinco años. La defensa de ejecución hipotecaria y el alivio del embargo de salario van en la misma petición.",
            ],
          },
          {
            h2: "Exención de vivienda y prueba de medios",
            paragraphs: [
            "La mayoría de los propietarios del Inland Empire conservan la casa — confirmamos el número de exención vigente en la consulta. La prueba de medios usa el tamaño del hogar y los ingresos recientes; traiga talones de pago y declaraciones de impuestos.",
            ],
          },
          {
            h2: "3420 Twelfth Street, Riverside",
            paragraphs: [
            "No hay tribunal de bancarrota en Yucaipa ni en la ciudad de San Bernardino. Los casos de consumidor se presentan en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, Riverside. (909) 915-0181.",
            ],
          },
    ],
  },
  ontario: {
    h1: "Abogado de bancarrota en Ontario — se presenta en Riverside",
    title: "Abogado de Bancarrota Ontario | Lombera",
    description: "Bancarrota en Ontario, California. Defensa de ejecución hipotecaria, embargo de salario, Capítulo 7 y 13. Riverside. (909) 915-0181.",
    lead: [
      "Un embargo de salario o aviso de ejecución hipotecaria en Ontario significa que el proceso en tribunal estatal ya avanza. La bancarrota detiene la mayoría de las cobranzas el día que se presenta la petición en el tribunal federal de Riverside. Edgar P. Lombera explica el Capítulo 7 y el Capítulo 13 en una consulta gratuita desde Redlands.",
    ],
    sections: [
          {
            h2: "Detener el embargo antes del próximo cheque",
            paragraphs: [
            "El Capítulo 7 puede eliminar la deuda no garantizada; el Capítulo 13 pone al día la hipoteca en tres a cinco años. La defensa de ejecución hipotecaria y el alivio del embargo de salario van en la misma petición.",
            ],
          },
          {
            h2: "Exención de vivienda y prueba de medios",
            paragraphs: [
            "La mayoría de los propietarios del Inland Empire conservan la casa — confirmamos el número de exención vigente en la consulta. La prueba de medios usa el tamaño del hogar y los ingresos recientes; traiga talones de pago y declaraciones de impuestos.",
            ],
          },
          {
            h2: "3420 Twelfth Street, Riverside",
            paragraphs: [
            "No hay tribunal de bancarrota en Ontario ni en la ciudad de San Bernardino. Los casos de consumidor se presentan en el Tribunal de Bancarrota de EE. UU., Distrito Central de California, Riverside — unas 20.5 millas y unos 28 minutos al este-sureste desde Ontario. (909) 915-0181.",
            ],
          },
    ],
  },
}

export const PI_CITY_SLUGS = new Set(Object.keys(PI_EN) as CitySlug[])
export const BK_CITY_SLUGS = new Set(Object.keys(BK_EN) as CitySlug[])

export function normalizeCitySlug(slug: string): string {
  return slug.trim().toLowerCase()
}

export function isPiCitySlug(slug: string): boolean {
  return PI_CITY_SLUGS.has(normalizeCitySlug(slug) as CitySlug)
}

export function isBkCitySlug(slug: string): boolean {
  return BK_CITY_SLUGS.has(normalizeCitySlug(slug) as CitySlug)
}

export function cityCopy(
  practice: Practice,
  citySlug: string,
  locale: Locale,
): CityPageCopy | null {
  const city = normalizeCitySlug(citySlug) as CitySlug
  if (practice === 'personal-injury') {
    if (!PI_CITY_SLUGS.has(city)) return null
    return locale === 'es' ? PI_ES[city] : PI_EN[city]
  }
  if (!BK_CITY_SLUGS.has(city)) return null
  return locale === 'es' ? BK_ES[city] : BK_EN[city]
}

export function cityDisplayName(citySlug: string, locale: Locale): string {
  const city = normalizeCitySlug(citySlug) as CitySlug
  return CITY_NAMES[city]?.[locale] ?? citySlug
}
