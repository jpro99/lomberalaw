/**
 * CI guard: fail when the same sentence (12+ words) appears on 2+ live city pages
 * within the same practice and language (PI/BK × EN/ES).
 */
import { cityCopy, type CityPageCopy } from '../src/lib/cityBodyCopy'
import { LIVE_CITY_SLUGS } from '../src/lib/routing'
import { DUPLICATE_COPY_ALLOWLIST } from './duplicate-copy-allowlist'

const MIN_WORDS = 12

type Practice = 'personal-injury' | 'bankruptcy'
type Locale = 'en' | 'es'

type Bucket = `${Practice}/${Locale}`

const BUCKETS: { practice: Practice; locale: Locale; label: Bucket }[] = [
  { practice: 'personal-injury', locale: 'en', label: 'personal-injury/en' },
  { practice: 'personal-injury', locale: 'es', label: 'personal-injury/es' },
  { practice: 'bankruptcy', locale: 'en', label: 'bankruptcy/en' },
  { practice: 'bankruptcy', locale: 'es', label: 'bankruptcy/es' },
]

export function normalizeCopyText(text: string): string {
  return text
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

/** Protect common abbreviations before sentence splitting on periods. */
function shieldAbbreviations(text: string): string {
  return text
    .replace(/\b([A-Za-z])\./g, '$1\u0000')
    .replace(/\bEE\.\s*UU\./gi, 'EE\u0000UU\u0000')
    .replace(/\bU\.S\.C\./gi, 'U\u0000S\u0000C\u0000')
    .replace(/\bU\.S\./gi, 'U\u0000S\u0000')
    .replace(/\bEE\.\s*UU\b/gi, 'EE\u0000UU')
    .replace(/\bDr\./gi, 'Dr\u0000')
    .replace(/\bSt\./gi, 'St\u0000')
    .replace(/\bNo\./gi, 'No\u0000')
    .replace(/\bInc\./gi, 'Inc\u0000')
    .replace(/\bvs\./gi, 'vs\u0000')
    .replace(/\betc\./gi, 'etc\u0000')
    .replace(/\bMr\./gi, 'Mr\u0000')
    .replace(/\bMrs\./gi, 'Mrs\u0000')
    .replace(/\bMs\./gi, 'Ms\u0000')
    .replace(/\bSr\./gi, 'Sr\u0000')
    .replace(/\bCA\./gi, 'CA\u0000')
}

function unshieldAbbreviations(text: string): string {
  return text.replace(/\u0000/g, '.')
}

export function splitSentences(text: string): string[] {
  const collapsed = text.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim()
  const shielded = shieldAbbreviations(collapsed)
  const raw = shielded
    .split(/(?<=[.!?…])\s+/)
    .map((s) => unshieldAbbreviations(s).trim())
    .filter((s) => s.length > 0)
  return raw
}

export function wordCount(sentence: string): number {
  const normalized = normalizeCopyText(sentence)
  if (!normalized) return 0
  return normalized.split(' ').filter(Boolean).length
}

function collectPageText(copy: CityPageCopy): string[] {
  const chunks: string[] = [copy.description, ...copy.lead]
  for (const section of copy.sections) {
    chunks.push(...section.paragraphs)
  }
  return chunks
}

export type DuplicateGroup = {
  bucket: Bucket
  sentence: string
  normalized: string
  cities: string[]
}

export function findDuplicateSentences(): DuplicateGroup[] {
  const duplicates: DuplicateGroup[] = []

  for (const { practice, locale, label } of BUCKETS) {
    /** normalized sentence -> { display, cities } */
    const index = new Map<string, { display: string; cities: Set<string> }>()

    for (const city of LIVE_CITY_SLUGS) {
      const copy = cityCopy(practice, city, locale)
      if (!copy) continue

      const seenOnCity = new Set<string>()
      for (const chunk of collectPageText(copy)) {
        for (const sentence of splitSentences(chunk)) {
          if (wordCount(sentence) < MIN_WORDS) continue
          const normalized = normalizeCopyText(sentence)
          if (DUPLICATE_COPY_ALLOWLIST.has(normalized)) continue
          if (seenOnCity.has(normalized)) continue
          seenOnCity.add(normalized)

          const entry = index.get(normalized)
          if (!entry) {
            index.set(normalized, { display: sentence.trim(), cities: new Set([city]) })
          } else {
            entry.cities.add(city)
          }
        }
      }
    }

    for (const { display, cities } of index.values()) {
      if (cities.size < 2) continue
      const normalized = normalizeCopyText(display)
      duplicates.push({
        bucket: label,
        sentence: display,
        normalized,
        cities: [...cities].sort(),
      })
    }
  }

  duplicates.sort((a, b) => {
    const bucket = a.bucket.localeCompare(b.bucket)
    if (bucket !== 0) return bucket
    return b.cities.length - a.cities.length
  })

  return duplicates
}

function formatReport(groups: DuplicateGroup[]): string {
  if (groups.length === 0) {
    return 'No duplicate sentences (12+ words) across live city pages in the same language and practice.'
  }

  const lines: string[] = [
    `Found ${groups.length} duplicate sentence group(s) (≥${MIN_WORDS} words, same practice + language):`,
    '',
  ]

  for (const group of groups) {
    lines.push(`[${group.bucket}] cities (${group.cities.length}): ${group.cities.join(', ')}`)
    lines.push(`  "${group.sentence}"`)
    lines.push('')
  }

  return lines.join('\n')
}

function main(): void {
  const groups = findDuplicateSentences()
  const report = formatReport(groups)
  console.log(report)

  if (groups.length > 0) {
    process.exit(1)
  }
}

const isMain = import.meta.url === new URL(process.argv[1] ?? '', 'file:').href

if (isMain) {
  main()
}
