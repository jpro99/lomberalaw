import type { Locale } from './payload'
import type { CopySection } from './hubBodyCopy'
import { cityPhone } from './routing'

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

const PI_EN: Record<CitySlug, Omit<CityPageCopy, 'h1'>> = {
  fontana: {
    title: 'Fontana Personal Injury Lawyer | Truck & Freeway Crashes | Lombera',
    description:
      'Semi-truck and I-10/I-15 crash claims in Fontana. Wrongful death and TBI on contingency. Redlands office (909) 915-0181. Free consult.',
    lead: [
      'Fontana sits where the I-10 and I-15 freight corridors meet — one of the heaviest truck volumes in the Inland Empire. When an 18-wheeler or box truck changes lanes without room, the injuries are rarely minor. Edgar P. Lombera takes Fontana injury files on contingency from the Redlands office at 2068 Orange Tree Lane. You talk to him, not a call center.',
    ],
    sections: [
      {
        h2: 'Truck wrecks and catastrophic outcomes',
        paragraphs: [
          'Commercial truck cases need logbooks, black-box data, and corporate defendants — not a quick insurance letter. We handle truck collisions that produce traumatic brain injury, spinal cord injury, amputation-level trauma, and wrongful death claims. Uber and Lyft crashes on the I-10 approach are taken as well. Car, motorcycle, and dog-bite matters are part of the docket but are not what defines this corridor.',
        ],
      },
      {
        h2: 'San Bernardino County court and I-10 deadlines',
        paragraphs: [
          'Lawsuits for Fontana crashes are typically filed in San Bernardino County Superior Court, 247 W. 3rd St., San Bernardino. California Code of Civil Procedure §335.1 gives most injury victims two years from the crash date. Evidence from the I-10/I-15 interchange fades fast — call while the CHP report and dashcam footage still exist.',
        ],
      },
      {
        h2: 'Contingency and the Redlands office',
        paragraphs: [
          'No fee unless we win. The Fontana-area line is (909) 915-0181. Bankruptcy for medical debt from a crash files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — the same firm can handle both tracks when bills arrive before the injury case settles.',
        ],
      },
    ],
  },
  colton: {
    title: 'Colton Personal Injury Lawyer | I-10 Truck Crashes | Lombera',
    description:
      'I-10 and I-215 truck and freeway injury claims in Colton. TBI, SCI, wrongful death on contingency. (909) 915-0181. Free consult.',
    lead: [
      'Colton drivers know the I-10 stack near the I-215 — tight merges, port traffic from San Bernardino, and trucks that do not always brake in time. Edgar P. Lombera represents Colton injury clients on contingency from the Redlands office. The first meeting is free, in English or Spanish.',
    ],
    sections: [
      {
        h2: 'Freight corridor injuries',
        paragraphs: [
          'We lead with truck accidents, rideshare collisions on the freeway approaches, wrongful death claims, and brain or spinal cord injuries that outlast the ER visit. Motorcycle and car crashes are handled; dog bites are accepted when liability is clear. Slip-and-fall and product cases are referred out.',
        ],
      },
      {
        h2: 'Local court and the six-month government clock',
        paragraphs: [
          'Colton claims usually land in San Bernardino County Superior Court at 247 W. 3rd St., San Bernardino. If Caltrans or a city vehicle was involved on the I-10 or I-215, Government Code §911.2 may require a written government claim within six months — shorter than the usual two-year limit under CCP §335.1.',
        ],
      },
      {
        h2: 'Call Edgar in Redlands',
        paragraphs: [
          'Contingency means no attorney fee unless money is recovered. Reach the Colton-area line at (909) 915-0181. Chapter 7 and Chapter 13 for post-crash medical debt are filed in Riverside at 3420 Twelfth Street, not in Indio.',
        ],
      },
    ],
  },
  'rancho-cucamonga': {
    title: 'Rancho Cucamonga Injury Lawyer | I-15 Truck Crashes | Lombera',
    description:
      'I-15 and SR-60 truck and freeway injury lawyer in Rancho Cucamonga. Wrongful death and TBI. No fee unless we win. (909) 915-0181.',
    lead: [
      'Rancho Cucamonga warehouses feed the I-15 and SR-60 — day cab tractors, doubles, and delivery vans mixing with commuter traffic daily. When that mix turns into a hospital admission, Edgar P. Lombera opens the file from Redlands on contingency.',
    ],
    sections: [
      {
        h2: 'Truck and delivery corridor claims',
        paragraphs: [
          'Commercial truck crashes, Uber and Lyft trips on the 15, wrongful death on the freeway, and traumatic brain or spinal cord injuries are the lead cases here. Car and motorcycle wrecks are part of the practice; dog bites are handled when the facts support liability.',
        ],
      },
      {
        h2: 'San Bernardino County filing',
        paragraphs: [
          'Most Rancho Cucamonga lawsuits are filed at San Bernardino County Superior Court, 247 W. 3rd St., San Bernardino. Photographs of the I-15 merge and witness names matter — gather them early while CCP §335.1’s two-year window is still open.',
        ],
      },
      {
        h2: 'Redlands office — (909) 915-0181',
        paragraphs: [
          'Injury cases: no fee unless we win. Bankruptcy for garnished wages after a crash: U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  beaumont: {
    title: 'Beaumont Personal Injury Lawyer | I-10 Pass Truck Crashes | Lombera',
    description:
      'I-10 Banning Pass truck and freeway injuries in Beaumont. TBI, SCI, wrongful death on contingency. Redlands (909) 915-0181.',
    lead: [
      'Beaumont is the last Inland Empire stop before the I-10 climbs toward Banning Pass — brake failures, runaway trucks, and tired drivers show up in the ER at Loma Linda and Riverside. Edgar P. Lombera handles Beaumont injury claims on contingency from the Redlands office.',
    ],
    sections: [
      {
        h2: 'Pass-grade truck collisions',
        paragraphs: [
          'Downgrade truck wrecks, multi-vehicle pileups, wrongful death on the I-10, and brain or spinal cord injuries from high-speed impacts are the focus. Rideshare pickups on the pass route are included. Car and motorcycle cases are accepted; we do not handle slip-and-fall.',
        ],
      },
      {
        h2: 'Riverside or San Bernardino court',
        paragraphs: [
          'Depending on where the crash occurred, suit may be filed in Riverside County Superior Court, 4050 Main St., Riverside, or San Bernardino County Superior Court, 247 W. 3rd St., San Bernardino. Either way, the two-year statute under CCP §335.1 starts at the crash date.',
        ],
      },
      {
        h2: 'Free consult — (909) 915-0181',
        paragraphs: [
          'Contingency fee — no recovery, no attorney fee. Medical debt from a pass wreck can also be addressed through Chapter 7 or Chapter 13 filed at 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  'palm-springs': {
    title: 'Palm Springs Injury Lawyer | Rideshare & Hwy 111 Crashes | Lombera',
    description:
      'Uber, Lyft, and Highway 111 injury claims in Palm Springs. Truck crashes on I-10. TBI and wrongful death. Palm Springs office (760) 835-9353.',
    lead: [
      'Palm Springs runs on tourism traffic — Uber and Lyft on Highway 111, visitors on the I-10, and seasonal congestion that turns a left turn into a T-bone. Edgar P. Lombera works from the Palm Springs office at 1276 N Palm Canyon Dr #107. Injury cases are contingency; the consult is free.',
    ],
    sections: [
      {
        h2: 'Rideshare and 111 corridor wrecks',
        paragraphs: [
          'We lead with Uber and Lyft crashes, commercial truck collisions on the I-10 approach, wrongful death claims, and traumatic brain or spinal cord injuries. Car and motorcycle accidents happen here too; dog bites are handled when appropriate. No slip-and-fall practice.',
        ],
      },
      {
        h2: 'Coachella Valley courts',
        paragraphs: [
          'Many valley injury cases are filed in Riverside County Superior Court, Indio Division, 46-200 Oasis St., Indio, or at 4050 Main St., Riverside. CCP §335.1 sets a two-year limit; rideshare app data and 111 intersection cameras disappear if you wait.',
        ],
      },
      {
        h2: 'Palm Springs — (760) 835-9353',
        paragraphs: [
          'No fee unless we win. Bankruptcy cases from the valley file at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside — there is no bankruptcy court in Indio.',
        ],
      },
    ],
  },
  'palm-desert': {
    title: 'Palm Desert Injury Lawyer | Hwy 111 & Rideshare | Lombera',
    description:
      'Highway 111 and rideshare injury lawyer in Palm Desert. I-10 truck crashes, TBI, wrongful death. Palm Springs office (760) 835-9353.',
    lead: [
      'Palm Desert’s Highway 111 corridor carries El Paseo shoppers, snowbirds, and rideshare drivers in the same lanes. When a Lyft pickup on 111 ends in a brain injury, you need a lawyer who understands layered insurance — not a generic auto form. Edgar P. Lombera takes Palm Desert files from the Palm Springs office on contingency.',
    ],
    sections: [
      {
        h2: '111 rideshare and serious injury outcomes',
        paragraphs: [
          'Rideshare accidents, I-10 truck collisions, wrongful death, traumatic brain injury, and spinal cord injury lead the docket. Car and motorcycle wrecks are handled; dog bites when liability is clear. Catastrophic outcomes from any crash type are pursued without a separate “catastrophic injury” page — the medical records define the damages.',
        ],
      },
      {
        h2: 'Indio Division and Riverside courts',
        paragraphs: [
          'Suit may be filed at Riverside County Superior Court, Indio Division, 46-200 Oasis St., Indio, or 4050 Main St., Riverside. Government claims against a public entity on 111 can trigger the six-month notice under Gov. Code §911.2.',
        ],
      },
      {
        h2: 'Call the valley line — (760) 835-9353',
        paragraphs: [
          'Contingency — no fee unless we win. Chapter 7 and Chapter 13 for medical debt file at 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  'cathedral-city': {
    title: 'Cathedral City Injury Lawyer | Hwy 111 Rideshare | Lombera',
    description:
      'Highway 111 and Uber/Lyft injury claims in Cathedral City. Truck and TBI cases. No fee unless we win. (760) 835-9353.',
    lead: [
      'Date Palm Drive feeds into Highway 111 through Cathedral City — rideshare runs, tourist rentals, and I-10 commuters in one stretch. Edgar P. Lombera represents injured Cathedral City residents on contingency from the Palm Springs office.',
    ],
    sections: [
      {
        h2: 'Rideshare, trucks, and life-changing injuries',
        paragraphs: [
          'Uber and Lyft crashes on 111, commercial truck collisions on the I-10, wrongful death, brain injury, and spinal cord injury are the lead matters. Car and motorcycle cases are part of the practice; dog bites when supported by facts. Slip-and-fall is referred elsewhere.',
        ],
      },
      {
        h2: 'Valley court filing',
        paragraphs: [
          'Claims are typically filed at Riverside County Superior Court, Indio Division, 46-200 Oasis St., Indio. Preserve app screenshots, 111 dashcam video, and witness contacts while the two-year clock under CCP §335.1 still runs.',
        ],
      },
      {
        h2: 'Palm Springs office — (760) 835-9353',
        paragraphs: [
          'Free consult in English or Spanish. No attorney fee on injury cases unless money is recovered. Bankruptcy petitions go to Riverside at 3420 Twelfth Street.',
        ],
      },
    ],
  },
  indio: {
    title: 'Indio Personal Injury Lawyer | Hwy 111 & Festival Traffic | Lombera',
    description:
      'Highway 111, rideshare, and I-10 truck injury lawyer in Indio. Wrongful death and TBI. Indio court. (760) 835-9353.',
    lead: [
      'Indio’s Highway 111 carries festival traffic, farm trucks, and rideshare surges that do not always mix safely. When a crash sends someone to JFK Memorial or Eisenhower, Edgar P. Lombera opens the file from Palm Springs on contingency — you speak with him directly.',
    ],
    sections: [
      {
        h2: 'Festival corridor rideshare and truck cases',
        paragraphs: [
          'We lead with Uber and Lyft collisions, I-10 commercial truck wrecks, wrongful death, traumatic brain injury, and spinal cord injury. Car and motorcycle accidents are handled; dog bites when appropriate. No slip-and-fall or product liability.',
        ],
      },
      {
        h2: 'Indio Division courthouse',
        paragraphs: [
          'Many Indio-area lawsuits are filed at Riverside County Superior Court, Indio Division, 46-200 Oasis St., Indio. That courthouse is for civil injury claims — not bankruptcy. Consumer bankruptcy always files at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside.',
        ],
      },
      {
        h2: 'Coachella Valley — (760) 835-9353',
        paragraphs: [
          'Contingency fee. No recovery, no attorney fee. Serious injuries can reach the office after hours for an emergency consult.',
        ],
      },
    ],
  },
  redlands: {
    title: 'Redlands Personal Injury Lawyer | Lombera Law Office',
    description:
      'Personal injury lawyer at 2068 Orange Tree Lane, Redlands. Truck, rideshare, TBI, wrongful death on contingency. (909) 915-0181.',
    lead: [
      'Redlands is home base — Edgar P. Lombera’s staffed office sits at 2068 Orange Tree Lane, Suite 220. Injury cases across San Bernardino County run on contingency from here. You meet the lawyer who signs the pleadings, in English or Spanish.',
    ],
    sections: [
      {
        h2: 'Full injury docket, weighted toward serious crashes',
        paragraphs: [
          'Truck accidents on the I-10 and I-215, rideshare collisions, wrongful death, traumatic brain injury, and spinal cord injury lead the work. Car, motorcycle, pedestrian, bicycle, and dog-bite claims are handled as well. Slip-and-fall is not a practice here.',
        ],
      },
      {
        h2: 'San Bernardino County Superior Court',
        paragraphs: [
          'Redlands cases are typically filed at San Bernardino County Superior Court, 247 W. 3rd St., San Bernardino. CCP §335.1 sets a two-year limit from the injury date; government claims may require six-month notice under Gov. Code §911.2.',
        ],
      },
      {
        h2: 'Walk-in office — (909) 915-0181',
        paragraphs: [
          'Hours Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Bankruptcy for medical debt files at 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  'san-bernardino': {
    title: 'San Bernardino Personal Injury Lawyer | Downtown Court | Lombera',
    description:
      'Injury lawyer near San Bernardino County Superior Court. Truck, rideshare, TBI, wrongful death. Redlands (909) 915-0181.',
    lead: [
      'San Bernardino County Superior Court at 247 W. 3rd St. is where many Inland Empire injury lawsuits are filed — including crashes from the I-215, I-10, and surface streets through San Bernardino. Edgar P. Lombera prepares those files from the Redlands office on contingency.',
    ],
    sections: [
      {
        h2: 'Serious crash claims',
        paragraphs: [
          'Truck and rideshare collisions, wrongful death, brain and spinal cord injury, and high-speed freeway wrecks are the lead cases. Car, motorcycle, and dog-bite matters are accepted. We do not handle slip-and-fall.',
        ],
      },
      {
        h2: 'Downtown courthouse and deadlines',
        paragraphs: [
          'Suit is filed at 247 W. 3rd St., San Bernardino. City or county vehicle involvement can shorten the claim window to six months under Gov. Code §911.2. Most private defendants fall under the two-year rule in CCP §335.1.',
        ],
      },
      {
        h2: 'Redlands line — (909) 915-0181',
        paragraphs: [
          'No fee unless we win. Free first consult. Chapter 7 and Chapter 13 file at the Riverside bankruptcy court, 3420 Twelfth Street.',
        ],
      },
    ],
  },
  riverside: {
    title: 'Riverside Personal Injury Lawyer | County Court | Lombera',
    description:
      'Personal injury lawyer near Riverside County Superior Court. Truck, rideshare, TBI, wrongful death. Redlands (909) 915-0181.',
    lead: [
      'Riverside County Superior Court at 4050 Main St. handles injury lawsuits from the SR-91, I-215, and city arterials. Edgar P. Lombera represents Riverside clients on contingency from the Redlands office — same firm that files bankruptcy at 3420 Twelfth Street when medical bills outpace a settlement.',
    ],
    sections: [
      {
        h2: 'Freeway and arterial crash injuries',
        paragraphs: [
          'Commercial truck cases, Uber and Lyft collisions, wrongful death, traumatic brain injury, and spinal cord injury lead the Riverside docket. Car, motorcycle, and dog-bite claims are part of the practice.',
        ],
      },
      {
        h2: '4050 Main St. filing',
        paragraphs: [
          'Most Riverside city and county crashes are filed at Riverside County Superior Court, 4050 Main St., Riverside. Evidence from the SR-91 or Mission Inn Avenue intersection should be preserved immediately.',
        ],
      },
      {
        h2: 'Contingency — (909) 915-0181',
        paragraphs: [
          'No attorney fee unless money is recovered. Bankruptcy court for consumer cases is at 3420 Twelfth Street — the same building complex area, different federal entrance.',
        ],
      },
    ],
  },
  'moreno-valley': {
    title: 'Moreno Valley Injury Lawyer | SR-60 Crashes | Lombera',
    description:
      'SR-60 and freeway injury lawyer in Moreno Valley. Truck, rideshare, TBI, wrongful death. No fee unless we win. (909) 915-0181.',
    lead: [
      'The SR-60 through Moreno Valley carries port trucks from Riverside and commuter traffic to March ARB. When that combination produces a spinal cord injury or a wrongful death, Edgar P. Lombera opens the file from Redlands on contingency.',
    ],
    sections: [
      {
        h2: 'SR-60 truck and rideshare collisions',
        paragraphs: [
          'We lead with truck accidents, rideshare crashes, wrongful death, brain injury, and spinal cord injury. Car and motorcycle wrecks are handled; dog bites when facts support the claim. No slip-and-fall.',
        ],
      },
      {
        h2: 'Riverside County court',
        paragraphs: [
          'Moreno Valley lawsuits are typically filed at Riverside County Superior Court, 4050 Main St., Riverside. The two-year limit under CCP §335.1 applies to most defendants.',
        ],
      },
      {
        h2: 'Call Redlands — (909) 915-0181',
        paragraphs: [
          'Free consult. Contingency fee on injury cases. Medical debt bankruptcy: 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  highland: {
    title: 'Highland Personal Injury Lawyer | Base Line Corridor | Lombera',
    description:
      'Injury lawyer for Highland and Base Line corridor crashes. Truck, rideshare, TBI. Redlands office (909) 915-0181.',
    lead: [
      'Highland’s Base Line corridor feeds the I-210 connector and San Bernardino arterials — commuter speed, school traffic, and delivery trucks sharing lanes. Edgar P. Lombera handles Highland injury claims on contingency from the Redlands office.',
    ],
    sections: [
      {
        h2: 'Corridor crashes and serious injuries',
        paragraphs: [
          'Truck collisions, rideshare accidents, wrongful death, traumatic brain injury, and spinal cord injury are the priority. Car, motorcycle, and dog-bite cases are accepted. Slip-and-fall is referred out.',
        ],
      },
      {
        h2: 'San Bernardino County filing',
        paragraphs: [
          'Highland cases are filed at San Bernardino County Superior Court, 247 W. 3rd St., San Bernardino. Photographs of the Base Line scene and witness statements should be gathered while memories are fresh.',
        ],
      },
      {
        h2: '(909) 915-0181 — Redlands',
        paragraphs: [
          'No fee unless we win. Chapter 7 and Chapter 13 for post-crash debt file at the Riverside bankruptcy court.',
        ],
      },
    ],
  },
  hemet: {
    title: 'Hemet Personal Injury Lawyer | SR-74 Corridor | Lombera',
    description:
      'SR-74 and western Riverside County injury lawyer in Hemet. Truck, TBI, wrongful death on contingency. (909) 915-0181.',
    lead: [
      'Hemet sits at the western edge of Riverside County on the SR-74 — mountain commuters, agricultural trucks, and retirement-community traffic on the same two lanes. Edgar P. Lombera represents Hemet injury clients on contingency from Redlands.',
    ],
    sections: [
      {
        h2: 'SR-74 and valley-floor crashes',
        paragraphs: [
          'Truck accidents, wrongful death on the 74 or Florida Avenue, traumatic brain injury, and spinal cord injury lead the work. Rideshare trips to and from the valley are included. Car, motorcycle, and dog-bite cases are handled.',
        ],
      },
      {
        h2: 'Riverside County Superior Court',
        paragraphs: [
          'Hemet lawsuits are filed at Riverside County Superior Court, 4050 Main St., Riverside. CCP §335.1’s two-year window starts at the injury date.',
        ],
      },
      {
        h2: 'Free consult — (909) 915-0181',
        paragraphs: [
          'Contingency — no recovery, no fee. Bankruptcy for medical bills: U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside.',
        ],
      },
    ],
  },
  'desert-hot-springs': {
    title: 'Desert Hot Springs Injury Lawyer | Hwy 111 North | Lombera',
    description:
      'Highway 111 and I-10 injury lawyer in Desert Hot Springs. Rideshare, truck, TBI. Palm Springs office (760) 835-9353.',
    lead: [
      'Desert Hot Springs drivers use Highway 111 and the I-10 to reach Palm Springs jobs and medical appointments — long desert distances, fatigue, and rideshare pickups at odd hours. Edgar P. Lombera takes Desert Hot Springs injury files from the Palm Springs office on contingency.',
    ],
    sections: [
      {
        h2: 'North valley rideshare and truck wrecks',
        paragraphs: [
          'Uber and Lyft collisions, I-10 truck accidents, wrongful death, brain injury, and spinal cord injury are the lead cases. Car and motorcycle wrecks are part of the docket; dog bites when appropriate.',
        ],
      },
      {
        h2: 'Indio or Riverside court',
        paragraphs: [
          'Suit may be filed at Riverside County Superior Court, Indio Division, 46-200 Oasis St., Indio, or 4050 Main St., Riverside. Preserve 111 intersection evidence early.',
        ],
      },
      {
        h2: 'Palm Springs — (760) 835-9353',
        paragraphs: [
          'No fee unless we win. Consumer bankruptcy always files at 3420 Twelfth Street, Riverside — not Indio.',
        ],
      },
    ],
  },
}

const BK_EN: Record<CitySlug, Omit<CityPageCopy, 'h1'>> = {
  fontana: {
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
    title: 'Indio Bankruptcy Lawyer | Riverside Court Filing | Lombera',
    description:
      'Indio bankruptcy — Chapter 7 and 13 filed at Riverside, not Indio court. Garnishment relief. (760) 835-9353.',
    lead: [
      'Indio has a Riverside County Superior Court branch for civil cases — but consumer bankruptcy does not file there. Every Chapter 7 and Chapter 13 from the Coachella Valley goes to the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside. Edgar P. Lombera explains the process from the Palm Springs office.',
    ],
    sections: [
      {
        h2: 'Indio civil court ≠ bankruptcy court',
        paragraphs: [
          'Injury lawsuits may be filed at 46-200 Oasis St., Indio. Bankruptcy is federal and files only at 3420 Twelfth Street, Riverside. Do not confuse the two buildings.',
        ],
      },
      {
        h2: 'Chapter 7 vs Chapter 13',
        paragraphs: [
          'Chapter 7 discharges unsecured debt for qualifying filers. Chapter 13 protects the home with a three-to-five-year repayment plan.',
        ],
      },
      {
        h2: 'Automatic stay and consult',
        paragraphs: [
          'Filing stops most collection immediately. Free consult — debt relief agency. (760) 835-9353.',
        ],
      },
    ],
  },
  redlands: {
    title: 'Redlands Bankruptcy Lawyer | Lombera Law Office',
    description:
      'Chapter 7 and Chapter 13 at 2068 Orange Tree Lane, Redlands. Filed Riverside. Foreclosure and garnishment. (909) 915-0181.',
    lead: [
      'The Redlands office at 2068 Orange Tree Lane is where Edgar P. Lombera reviews bankruptcy petitions before they are filed at the U.S. Bankruptcy Court, 3420 Twelfth Street, Riverside. Chapter 7 and Chapter 13 — free consult in English or Spanish.',
    ],
    sections: [
      {
        h2: 'Chapter 7 discharge',
        paragraphs: [
          'Qualifying filers can eliminate most unsecured debt in a few months. The means test and document review happen in the Redlands office.',
        ],
      },
      {
        h2: 'Chapter 13 mortgage catch-up',
        paragraphs: [
          'Behind on the house payment? Chapter 13 spreads arrears over three to five years while the automatic stay blocks foreclosure.',
        ],
      },
      {
        h2: 'Riverside filing address',
        paragraphs: [
          'Consumer cases file at 3420 Twelfth Street, Riverside — not San Bernardino, not Indio. Court fees $338 Ch.7 / $313 Ch.13. Debt relief agency. (909) 915-0181.',
        ],
      },
    ],
  },
  'san-bernardino': {
    title: 'San Bernardino Bankruptcy Lawyer | Chapter 7 & 13',
    description:
      'Bankruptcy in San Bernardino. Stop garnishment and foreclosure. Filed at Riverside. Redlands (909) 915-0181.',
    lead: [
      'San Bernardino wage garnishments and foreclosure notices are state-court problems until a bankruptcy petition is filed in Riverside. Edgar P. Lombera handles Chapter 7 and Chapter 13 from the Redlands office — the federal courthouse is at 3420 Twelfth Street, not downtown San Bernardino.',
    ],
    sections: [
      {
        h2: 'Federal relief from state collection',
        paragraphs: [
          'Chapter 7 discharges unsecured debt; Chapter 13 structures repayment and can save a home. Foreclosure defense and garnishment stops ride on the petition.',
        ],
      },
      {
        h2: 'Means test and homestead',
        paragraphs: [
          'We review household income and home equity with real numbers in the free consult — California’s homestead exemption protects most local homes.',
        ],
      },
      {
        h2: '3420 Twelfth Street, Riverside',
        paragraphs: [
          'All San Bernardino County consumer bankruptcies file in Riverside. We are a debt relief agency. (909) 915-0181.',
        ],
      },
    ],
  },
  riverside: {
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

function h1For(practice: Practice, city: CitySlug, locale: Locale): string {
  const name = CITY_NAMES[city][locale]
  if (locale === 'es') {
    return practice === 'personal-injury'
      ? `Abogado de lesiones personales en ${name}`
      : `Abogado de bancarrota en ${name}`
  }
  return practice === 'personal-injury' ? `${name} personal injury lawyer` : `${name} bankruptcy lawyer`
}

function buildEsPi(slug: CitySlug): Omit<CityPageCopy, 'h1'> {
  const en = PI_EN[slug]
  const phone = cityPhone(slug)
  const name = CITY_NAMES[slug].es
  const esTitles: Record<CitySlug, string> = {
    fontana: `Abogado de Lesiones Fontana | Camiones I-10/I-15 | Lombera`,
    colton: `Abogado de Lesiones Colton | Choques I-10 | Lombera`,
    'rancho-cucamonga': `Abogado de Lesiones Rancho Cucamonga | Camiones I-15 | Lombera`,
    beaumont: `Abogado de Lesiones Beaumont | Camiones I-10 | Lombera`,
    'palm-springs': `Abogado de Lesiones Palm Springs | Rideshare y 111 | Lombera`,
    'palm-desert': `Abogado de Lesiones Palm Desert | Hwy 111 | Lombera`,
    'cathedral-city': `Abogado de Lesiones Cathedral City | Rideshare 111 | Lombera`,
    indio: `Abogado de Lesiones Indio | Hwy 111 | Lombera`,
    redlands: `Abogado de Lesiones Redlands | Oficina Lombera`,
    'san-bernardino': `Abogado de Lesiones San Bernardino | Lombera`,
    riverside: `Abogado de Lesiones Riverside | Lombera`,
    'moreno-valley': `Abogado de Lesiones Moreno Valley | SR-60 | Lombera`,
    highland: `Abogado de Lesiones Highland | Lombera`,
    hemet: `Abogado de Lesiones Hemet | SR-74 | Lombera`,
    'desert-hot-springs': `Abogado de Lesiones Desert Hot Springs | Lombera`,
  }
  const esDesc: Record<CitySlug, string> = {
    fontana: `Choques con camiones en la I-10/I-15 en Fontana. Muerte injusta y lesión cerebral a contingencia. Redlands ${phone}. Consulta gratis.`,
    colton: `Lesiones por camiones en la I-10 e I-215 en Colton. Lesión cerebral y médula espinal. ${phone}. Consulta gratis.`,
    'rancho-cucamonga': `Accidentes de camión en la I-15 en Rancho Cucamonga. Sin honorarios a menos que ganemos. ${phone}.`,
    beaumont: `Choques de camiones en el paso I-10 en Beaumont. Lesiones graves a contingencia. ${phone}.`,
    'palm-springs': `Uber, Lyft y choques en la Carretera 111 en Palm Springs. ${phone}. Consulta gratis.`,
    'palm-desert': `Rideshare y lesiones en la 111 en Palm Desert. ${phone}. Sin honorarios a menos que ganemos.`,
    'cathedral-city': `Accidentes de rideshare en la 111 en Cathedral City. ${phone}. Consulta gratis.`,
    indio: `Rideshare y camiones en la 111 en Indio. Tribunal Indio para demandas civiles. ${phone}.`,
    redlands: `Lesiones personales en 2068 Orange Tree Lane, Redlands. ${phone}. Consulta gratis.`,
    'san-bernardino': `Lesiones cerca del tribunal del condado de San Bernardino. ${phone}. A contingencia.`,
    riverside: `Lesiones cerca del tribunal del condado de Riverside. ${phone}. Consulta gratis.`,
    'moreno-valley': `Choques en la SR-60 en Moreno Valley. Camiones y rideshare. ${phone}.`,
    highland: `Lesiones en el corredor Base Line en Highland. ${phone}. Consulta gratis.`,
    hemet: `Lesiones en la SR-74 en Hemet. ${phone}. A contingencia.`,
    'desert-hot-springs': `Rideshare y choques en la 111 en Desert Hot Springs. ${phone}.`,
  }
  const esSections: Record<CitySlug, CopySection[]> = {
    fontana: [
      { h2: 'Choques con camiones y lesiones catastróficas', paragraphs: ['Los casos de camiones comerciales requieren registros de horas, caja negra y demandados corporativos. Manejamos colisiones que producen lesión cerebral traumática, lesión de médula espinal, amputación y muerte injusta. Choques de Uber y Lyft en la I-10 también. Accidentes de auto, motocicleta y mordeduras de perro forman parte del expediente.'] },
      { h2: 'Tribunal del condado de San Bernardino', paragraphs: ['Las demandas por choques en Fontana suelen presentarse en el Tribunal Superior del Condado de San Bernardino, 247 W. 3rd St., San Bernardino. El CCP §335.1 da dos años desde la fecha del choque.'] },
      { h2: 'Contingencia — oficina Redlands', paragraphs: [`Sin honorarios a menos que ganemos. Llame al ${phone}. La bancarrota por deuda médica se presenta en 3420 Twelfth Street, Riverside.`] },
    ],
    colton: [
      { h2: 'Corredor de carga I-10/I-215', paragraphs: ['Lideramos con camiones, rideshare, muerte injusta y lesiones cerebrales o de médula espinal. Accidentes de auto y motocicleta se aceptan. No manejamos resbalones y caídas.'] },
      { h2: 'Tribunal y plazos gubernamentales', paragraphs: ['Reclamos en el Tribunal Superior, 247 W. 3rd St., San Bernardino. Entidades públicas pueden exigir aviso en seis meses bajo el Código de Gobierno §911.2.'] },
      { h2: `Llame a Edgar — ${phone}`, paragraphs: ['A contingencia. Capítulo 7 y 13 en 3420 Twelfth Street, Riverside — no en Indio.'] },
    ],
    'rancho-cucamonga': [
      { h2: 'Camiones y entregas en la I-15', paragraphs: ['Choques con camiones comerciales, Uber/Lyft, muerte injusta y lesión cerebral o de médula espinal. Auto y motocicleta también.'] },
      { h2: 'Presentación en San Bernardino', paragraphs: ['Demandas en 247 W. 3rd St., San Bernardino. Preserve fotos de la I-15 mientras corre el plazo del CCP §335.1.'] },
      { h2: `Redlands — ${phone}`, paragraphs: ['Sin honorarios a menos que ganemos. Bancarrota en Riverside, 3420 Twelfth Street.'] },
    ],
    beaumont: [
      { h2: 'Camiones en el paso I-10', paragraphs: ['Choques en bajada, muerte injusta y lesiones cerebrales o de médula espinal. Rideshare en la ruta del paso. Auto y motocicleta aceptados.'] },
      { h2: 'Tribunal Riverside o San Bernardino', paragraphs: ['Según el lugar del choque: 4050 Main St., Riverside, o 247 W. 3rd St., San Bernardino. Dos años bajo CCP §335.1.'] },
      { h2: `Consulta gratis — ${phone}`, paragraphs: ['A contingencia. Deuda médica: Capítulo 7 o 13 en Riverside.'] },
    ],
    'palm-springs': [
      { h2: 'Rideshare y corredor 111', paragraphs: ['Uber y Lyft, camiones en la I-10, muerte injusta y lesión cerebral o de médula espinal. Auto y motocicleta. Sin resbalones y caídas.'] },
      { h2: 'Tribunales del valle', paragraphs: ['Demandas en la División Indio, 46-200 Oasis St., Indio, o 4050 Main St., Riverside. CCP §335.1: dos años.'] },
      { h2: `Palm Springs — ${phone}`, paragraphs: ['Sin honorarios a menos que ganemos. Bancarrota solo en 3420 Twelfth Street, Riverside.'] },
    ],
    'palm-desert': [
      { h2: 'Rideshare en la 111 y lesiones graves', paragraphs: ['Accidentes de rideshare, camiones I-10, muerte injusta, lesión cerebral y de médula espinal. Auto y motocicleta.'] },
      { h2: 'División Indio y Riverside', paragraphs: ['46-200 Oasis St., Indio, o 4050 Main St., Riverside. Reclamos gubernamentales: seis meses bajo §911.2.'] },
      { h2: `Valle — ${phone}`, paragraphs: ['A contingencia. Bancarrota en Riverside.'] },
    ],
    'cathedral-city': [
      { h2: 'Rideshare, camiones y lesiones de por vida', paragraphs: ['Uber/Lyft en la 111, camiones I-10, muerte injusta, lesión cerebral y de médula espinal. Auto y motocicleta.'] },
      { h2: 'Tribunal del valle', paragraphs: ['División Indio, 46-200 Oasis St., Indio. Preserve video y testigos pronto.'] },
      { h2: `Palm Springs — ${phone}`, paragraphs: ['Consulta gratis. Sin honorarios a menos que ganemos.'] },
    ],
    indio: [
      { h2: 'Tráfico del festival y rideshare en la 111', paragraphs: ['Uber/Lyft, camiones I-10, muerte injusta, lesión cerebral y de médula espinal. Auto y motocicleta.'] },
      { h2: 'División Indio — demandas civiles', paragraphs: ['Lesiones en 46-200 Oasis St., Indio. La bancarrota NO se presenta aquí — solo en 3420 Twelfth Street, Riverside.'] },
      { h2: `Valle de Coachella — ${phone}`, paragraphs: ['A contingencia. Consulta de emergencia para lesiones graves.'] },
    ],
    redlands: [
      { h2: 'Expediente completo de lesiones', paragraphs: ['Camiones, rideshare, muerte injusta, lesión cerebral y de médula espinal lideran. Auto, motocicleta, peatón, bicicleta y mordeduras de perro.'] },
      { h2: 'Tribunal Superior de San Bernardino', paragraphs: ['247 W. 3rd St., San Bernardino. CCP §335.1 y §911.2 según el demandado.'] },
      { h2: `Oficina — ${phone}`, paragraphs: ['Lun–vie 9–6, sáb 10–4, domingo con cita. Bancarrota en Riverside.'] },
    ],
    'san-bernardino': [
      { h2: 'Reclamos por choques graves', paragraphs: ['Camiones, rideshare, muerte injusta, lesión cerebral y de médula espinal. Auto, motocicleta y mordeduras de perro.'] },
      { h2: 'Tribunal del centro', paragraphs: ['247 W. 3rd St., San Bernardino. Vehículos municipales: seis meses bajo §911.2.'] },
      { h2: `Redlands — ${phone}`, paragraphs: ['Sin honorarios a menos que ganemos. Bancarrota en Riverside.'] },
    ],
    riverside: [
      { h2: 'Choques en autopista y arteriales', paragraphs: ['Camiones, Uber/Lyft, muerte injusta, lesión cerebral y de médula espinal. Auto, motocicleta y mordeduras de perro.'] },
      { h2: '4050 Main St.', paragraphs: ['Tribunal Superior del Condado de Riverside. Preserve evidencia de la SR-91 de inmediato.'] },
      { h2: `A contingencia — ${phone}`, paragraphs: ['Sin honorarios a menos que ganemos. Bancarrota federal en 3420 Twelfth Street.'] },
    ],
    'moreno-valley': [
      { h2: 'Choques en la SR-60', paragraphs: ['Camiones, rideshare, muerte injusta, lesión cerebral y de médula espinal. Auto y motocicleta.'] },
      { h2: 'Tribunal del condado de Riverside', paragraphs: ['4050 Main St., Riverside. Plazo de dos años bajo CCP §335.1.'] },
      { h2: `Redlands — ${phone}`, paragraphs: ['Consulta gratis. Bancarrota en Riverside.'] },
    ],
    highland: [
      { h2: 'Choques en el corredor Base Line', paragraphs: ['Camiones, rideshare, muerte injusta, lesión cerebral y de médula espinal. Auto, motocicleta y mordeduras de perro.'] },
      { h2: 'San Bernardino County', paragraphs: ['247 W. 3rd St., San Bernardino. Preserve fotos del escena.'] },
      { h2: `${phone} — Redlands`, paragraphs: ['Sin honorarios a menos que ganemos. Bancarrota en Riverside.'] },
    ],
    hemet: [
      { h2: 'SR-74 y choques en el valle', paragraphs: ['Camiones, muerte injusta, lesión cerebral y de médula espinal. Rideshare incluido. Auto y motocicleta.'] },
      { h2: 'Tribunal de Riverside', paragraphs: ['4050 Main St., Riverside. CCP §335.1: dos años.'] },
      { h2: `Consulta gratis — ${phone}`, paragraphs: ['A contingencia. Deuda médica: Riverside, 3420 Twelfth Street.'] },
    ],
    'desert-hot-springs': [
      { h2: 'Rideshare y camiones al norte del valle', paragraphs: ['Uber/Lyft, camiones I-10, muerte injusta, lesión cerebral y de médula espinal. Auto y motocicleta.'] },
      { h2: 'Indio o Riverside', paragraphs: ['46-200 Oasis St., Indio, o 4050 Main St., Riverside.'] },
      { h2: `Palm Springs — ${phone}`, paragraphs: ['Sin honorarios a menos que ganemos. Bancarrota en Riverside, no Indio.'] },
    ],
  }
  return {
    title: esTitles[slug],
    description: esDesc[slug],
    lead: [
      `Edgar P. Lombera representa a personas lesionadas en ${name} y alrededores a contingencia. La primera consulta es gratuita, en inglés o español. Usted habla con él.`,
    ],
    sections: esSections[slug],
  }
}

function buildEsBk(slug: CitySlug): Omit<CityPageCopy, 'h1'> {
  const phone = cityPhone(slug)
  const name = CITY_NAMES[slug].es
  const esTitles: Record<CitySlug, string> = {
    fontana: `Abogado de Bancarrota Fontana | Capítulo 7 y 13 | Lombera`,
    colton: `Abogado de Bancarrota Colton | Detener Embargo | Lombera`,
    'rancho-cucamonga': `Abogado de Bancarrota Rancho Cucamonga | Lombera`,
    beaumont: `Abogado de Bancarrota Beaumont | Capítulo 7 y 13`,
    'palm-springs': `Abogado de Bancarrota Palm Springs | Consulta Gratis`,
    'palm-desert': `Abogado de Bancarrota Palm Desert | Lombera`,
    'cathedral-city': `Abogado de Bancarrota Cathedral City | Lombera`,
    indio: `Abogado de Bancarrota Indio | Tribunal Riverside`,
    redlands: `Abogado de Bancarrota Redlands | Oficina Lombera`,
    'san-bernardino': `Abogado de Bancarrota San Bernardino | Lombera`,
    riverside: `Abogado de Bancarrota Riverside | Lombera`,
    'moreno-valley': `Abogado de Bancarrota Moreno Valley | Lombera`,
    highland: `Abogado de Bancarrota Highland | Lombera`,
    hemet: `Abogado de Bancarrota Hemet | Lombera`,
    'desert-hot-springs': `Abogado de Bancarrota Desert Hot Springs | Lombera`,
  }
  return {
    title: esTitles[slug],
    description: `Capítulo 7 y Capítulo 13 en ${name}. Detenga embargos y ejecuciones. Presentado en Riverside, 3420 Twelfth Street. ${phone}. Consulta gratis.`,
    lead: [
      `Familias en ${name} con tarjetas de crédito, facturas médicas o un embargo de salario pueden presentar Capítulo 7 o Capítulo 13. Edgar P. Lombera explica las opciones en consulta gratuita. Todo caso de consumidor se presenta en el Tribunal de Bancarrota de EE. UU., 3420 Twelfth Street, Riverside — no en Indio.`,
    ],
    sections: [
      {
        h2: 'Capítulo 7 y Capítulo 13',
        paragraphs: [
          'El Capítulo 7 elimina mucha deuda no garantizada si pasa la prueba de medios. El Capítulo 13 es el plan de tres a cinco años para ponerse al día con la hipoteca y detener la ejecución hipotecaria.',
        ],
      },
      {
        h2: 'La suspensión automática',
        paragraphs: [
          'El día que se presenta la petición, la mayoría de embargos, demandas de cobro y subastas de ejecución deben pausar.',
        ],
      },
      {
        h2: '3420 Twelfth Street, Riverside',
        paragraphs: [
          `No hay tribunal de bancarrota en ${name}. Tarifas judiciales $338 Cap.7 / $313 Cap.13. Agencia de alivio de deudas. ${phone}.`,
        ],
      },
    ],
  }
}

const PI_ES: Record<CitySlug, Omit<CityPageCopy, 'h1'>> = Object.fromEntries(
  (Object.keys(PI_EN) as CitySlug[]).map((slug) => [slug, buildEsPi(slug)]),
) as Record<CitySlug, Omit<CityPageCopy, 'h1'>>

const BK_ES: Record<CitySlug, Omit<CityPageCopy, 'h1'>> = Object.fromEntries(
  (Object.keys(BK_EN) as CitySlug[]).map((slug) => [slug, buildEsBk(slug)]),
) as Record<CitySlug, Omit<CityPageCopy, 'h1'>>

export function cityCopy(
  practice: Practice,
  citySlug: string,
  locale: Locale,
): CityPageCopy | null {
  if (!(citySlug in PI_EN)) return null
  const city = citySlug as CitySlug
  const source =
    practice === 'personal-injury'
      ? locale === 'es'
        ? PI_ES[city]
        : PI_EN[city]
      : locale === 'es'
        ? BK_ES[city]
        : BK_EN[city]
  return {
    ...source,
    h1: h1For(practice, city, locale),
  }
}

export function cityDisplayName(citySlug: string, locale: Locale): string {
  const city = citySlug as CitySlug
  return CITY_NAMES[city]?.[locale] ?? citySlug
}
