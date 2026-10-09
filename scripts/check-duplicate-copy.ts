/**
 * CI guard for duplicate city-page copy.
 *
 * Scans live city copy (PI/BK × EN/ES) and reports sentences of 12+ words that
 * appear on 2+ city pages in the same language and practice. Shared legal text
 * is excluded via scripts/duplicate-copy-allowlist.ts.
 *
 * Mode (exit behavior):
 *   DUPLICATE_COPY_MODE=warn  — print report, emit GitHub warnings, exit 0 (default)
 *   DUPLICATE_COPY_MODE=fail  — same output, exit 1 when any non-exempt duplicates remain
 *
 * After the copy rewrite merges, flip CI to `fail` (one env change in .github/workflows/ci.yml).
 *
 * Optional: pass `--write-report` to refresh docs/duplicate-copy-report.md.
 */
import { appendFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { cityCopy, type CityPageCopy } from '../src/lib/cityBodyCopy'
import { LIVE_CITY_SLUGS } from '../src/lib/routing'
import { DUPLICATE_COPY_ALLOWLIST } from './duplicate-copy-allowlist'

const MIN_WORDS = 12
const REPORT_PATH = resolve(process.cwd(), 'docs/duplicate-copy-report.md')

export type DuplicateCopyMode = 'warn' | 'fail'

export function resolveDuplicateCopyMode(): DuplicateCopyMode {
  const raw = (process.env.DUPLICATE_COPY_MODE ?? 'warn').trim().toLowerCase()
  if (raw === 'warn' || raw === 'fail') return raw
  console.warn(
    `Unknown DUPLICATE_COPY_MODE="${process.env.DUPLICATE_COPY_MODE ?? ''}" — defaulting to warn.`,
  )
  return 'warn'
}

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

export function countByBucket(groups: DuplicateGroup[]): Record<Bucket, number> {
  const counts: Record<Bucket, number> = {
    'personal-injury/en': 0,
    'personal-injury/es': 0,
    'bankruptcy/en': 0,
    'bankruptcy/es': 0,
  }
  for (const g of groups) {
    counts[g.bucket] += 1
  }
  return counts
}

function formatReport(groups: DuplicateGroup[]): string {
  if (groups.length === 0) {
    return 'No duplicate sentences (12+ words) across live city pages in the same language and practice.'
  }

  const counts = countByBucket(groups)
  const lines: string[] = [
    `Found ${groups.length} non-exempt duplicate sentence group(s) (≥${MIN_WORDS} words, same practice + language):`,
    '',
    `By bucket: personal-injury/en ${counts['personal-injury/en']}, personal-injury/es ${counts['personal-injury/es']}, bankruptcy/en ${counts['bankruptcy/en']}, bankruptcy/es ${counts['bankruptcy/es']}.`,
    '',
  ]

  for (const group of groups) {
    lines.push(`[${group.bucket}] cities (${group.cities.length}): ${group.cities.join(', ')}`)
    lines.push(`  "${group.sentence}"`)
    lines.push('')
  }

  return lines.join('\n')
}

function formatMarkdownReport(groups: DuplicateGroup[], mode: DuplicateCopyMode): string {
  const counts = countByBucket(groups)
  const generated = new Date().toISOString().slice(0, 10)
  const lines: string[] = [
    '# Duplicate city copy report (non-exempt)',
    '',
    `Generated by \`npm run check:duplicate-copy -- --write-report\` on ${generated}.`,
    `CI mode: \`DUPLICATE_COPY_MODE=${mode}\` (default \`warn\`; set \`fail\` after copy rewrite).`,
    '',
    'Legal/statute sentences on the allowlist are omitted here. Marketing and boilerplate duplicates are listed for the rewrite PR.',
    '',
    '## Counts by practice / locale',
    '',
    '| Bucket | Groups |',
    '|--------|--------|',
    `| personal-injury/en | ${counts['personal-injury/en']} |`,
    `| personal-injury/es | ${counts['personal-injury/es']} |`,
    `| bankruptcy/en | ${counts['bankruptcy/en']} |`,
    `| bankruptcy/es | ${counts['bankruptcy/es']} |`,
    `| **Total** | **${groups.length}** |`,
    '',
    '## Duplicate groups',
    '',
  ]

  if (groups.length === 0) {
    lines.push('_No non-exempt duplicate groups._')
  } else {
    lines.push('```text')
    lines.push(formatReport(groups).trimEnd())
    lines.push('```')
  }

  lines.push('')
  return lines.join('\n')
}

function emitGitHubActionsOutput(groups: DuplicateGroup[], report: string): void {
  if (process.env.GITHUB_ACTIONS !== 'true') return

  const summaryPath = process.env.GITHUB_STEP_SUMMARY
  if (summaryPath) {
    appendFileSync(
      summaryPath,
      `## Duplicate copy check (non-exempt)\n\n\`\`\`text\n${report.trimEnd()}\n\`\`\`\n`,
    )
  }

  if (groups.length === 0) return

  const counts = countByBucket(groups)
  console.log(
    `::warning title=Duplicate city copy::${groups.length} non-exempt duplicate sentence group(s) — see job log and docs/duplicate-copy-report.md (PI/en ${counts['personal-injury/en']}, PI/es ${counts['personal-injury/es']}, BK/en ${counts['bankruptcy/en']}, BK/es ${counts['bankruptcy/es']})`,
  )

  for (const group of groups) {
    const cities = group.cities.join(', ')
    const msg = `[${group.bucket}] (${group.cities.length} cities: ${cities}) ${group.sentence}`
    const safe = msg.replace(/%/g, '%25').replace(/\r/g, '').replace(/\n/g, ' ')
    console.log(`::warning title=Duplicate sentence::${safe}`)
  }
}

export function runDuplicateCopyCheck(options: {
  writeReport?: boolean
  mode?: DuplicateCopyMode
}): { groups: DuplicateGroup[]; exitCode: number } {
  const mode = options.mode ?? resolveDuplicateCopyMode()
  const groups = findDuplicateSentences()
  const report = formatReport(groups)

  console.log(report)

  emitGitHubActionsOutput(groups, report)

  if (options.writeReport) {
    const md = formatMarkdownReport(groups, mode)
    mkdirSync(resolve(process.cwd(), 'docs'), { recursive: true })
    writeFileSync(REPORT_PATH, md, 'utf8')
    console.log(`Wrote ${REPORT_PATH}`)
  }

  const exitCode = groups.length > 0 && mode === 'fail' ? 1 : 0
  return { groups, exitCode }
}

function main(): void {
  const writeReport = process.argv.includes('--write-report')
  const { exitCode } = runDuplicateCopyCheck({ writeReport })
  process.exit(exitCode)
}

const isMain = import.meta.url === new URL(process.argv[1] ?? '', 'file:').href

if (isMain) {
  main()
}
