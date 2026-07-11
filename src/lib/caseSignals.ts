// Rough, honest keyword heuristics -- not a substitute for a human
// (or, later, the phone system's structured intake questions)
// actually reading what someone wrote. These exist so a new lead
// can be scanned quickly in the admin, not to make decisions
// automatically. Staff should always read the raw message before
// treating a flag as reliable.

const CASE_MATCH_KEYWORDS: Record<string, string[]> = {
  commercial_vehicle: ['commercial truck', 'semi', 'semi-truck', '18-wheeler', 'big rig', 'delivery truck', 'company vehicle', 'freight', 'fedex', 'ups truck', 'amazon van', 'work truck', 'work van'],
  rideshare: ['uber', 'lyft', 'rideshare', 'ride share'],
  catastrophic: ['paralyzed', 'paralysis', 'coma', 'brain injury', 'traumatic brain', 'spinal', 'spine injury', 'amputat', 'disfigure', 'permanent disability', 'permanently disabled', 'wheelchair', 'ventilator'],
  wrongful_death: ['died', 'death', 'passed away', 'killed', 'fatal', 'fatality'],
  medical_malpractice: ['malpractice', 'misdiagnos', 'surgical error', 'surgery went wrong', 'doctor made a mistake', 'hospital error', 'wrong medication', 'wrong medicine'],
}

const URGENT_KEYWORDS = [
  'hospital', 'hospitalized', 'ambulance', 'er ', 'emergency room', 'icu', 'intensive care',
  'surgery', 'critical condition', 'today', 'this morning', 'just happened', 'right now',
  'died', 'passed away', 'killed', 'fatal',
]

export function computeCaseMatch(text: string): string[] {
  const lower = text.toLowerCase()
  const matches: string[] = []
  for (const [tag, keywords] of Object.entries(CASE_MATCH_KEYWORDS)) {
    if (keywords.some((kw) => lower.includes(kw))) matches.push(tag)
  }
  return matches
}

export function computeUrgencyTier(text: string): 'urgent' | 'standard' | 'administrative' {
  const lower = text.toLowerCase()
  const hasUrgentSignal = URGENT_KEYWORDS.some((kw) => lower.includes(kw))
  const hasInjurySignal = /\b(hurt|injur|accident|crash|collision|hit by)\b/.test(lower)
  if (hasUrgentSignal && hasInjurySignal) return 'urgent'
  return 'standard'
}
