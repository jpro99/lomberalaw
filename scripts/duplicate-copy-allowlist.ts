/**
 * Normalized sentences (see check-duplicate-copy.ts) that may legitimately repeat
 * across city pages in the same language + practice. Do not add marketing boilerplate.
 *
 * Each entry is lowercased and whitespace-collapsed before comparison.
 */

/** 11 U.S.C. §528 debt-relief agency disclosure (English). */
export const DEBT_RELIEF_EN =
  'we help people file for bankruptcy relief under the bankruptcy code (11 u.s.c. §528).'

/** 11 U.S.C. §528 debt-relief agency disclosure (Spanish). */
export const DEBT_RELIEF_ES =
  'ayudamos a las personas a solicitar alivio de bancarrota bajo el código de bancarrota (11 u.s.c. §528).'

/** Shorter §528 lead-in (English) when split as its own sentence. */
export const DEBT_RELIEF_AGENCY_EN = 'we are a debt relief agency.'

/** Shorter §528 lead-in (Spanish) when split as its own sentence. */
export const DEBT_RELIEF_AGENCY_ES = 'somos una agencia de alivio de deudas.'

/**
 * Central District consumer bankruptcy filing fees — same court for all IE/CV cities.
 * Required accurate statement; not city-specific marketing copy.
 */
export const BK_COURT_FEES_EN =
  'official court filing fees are $338 for chapter 7 and $313 for chapter 13.'

export const BK_COURT_FEES_ES =
  'las tarifas oficiales de presentación judicial son $338 para el capítulo 7 y $313 para el capítulo 13.'

export const DUPLICATE_COPY_ALLOWLIST: ReadonlySet<string> = new Set([
  DEBT_RELIEF_EN,
  DEBT_RELIEF_ES,
  DEBT_RELIEF_AGENCY_EN,
  DEBT_RELIEF_AGENCY_ES,
  BK_COURT_FEES_EN,
  BK_COURT_FEES_ES,
])
