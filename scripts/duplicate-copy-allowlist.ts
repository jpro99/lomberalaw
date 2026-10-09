/**
 * Normalized sentences (see check-duplicate-copy.ts) that may legitimately repeat
 * across city pages in the same language + practice.
 *
 * Do not add marketing boilerplate. Do not add the pending “90–120 day” discharge
 * line until Edgar confirms / shared-facts module lands.
 *
 * Each entry is lowercased and whitespace-collapsed before comparison.
 */

// ---------------------------------------------------------------------------
// Required legal text (statute notices & court-mandated disclosures)
// ---------------------------------------------------------------------------

/** CCP §377.60 — wrongful-death standing (English), identical on all PI city pages. */
export const PI_WRONGFUL_DEATH_STANDING_EN =
  'who may bring the suit is confirmed in the consult under california code of civil procedure §377.60 — we do not invent verdicts or settlement stories.'

/** CCP §377.60 — wrongful-death standing (Spanish). */
export const PI_WRONGFUL_DEATH_STANDING_ES =
  'quién puede presentar la demanda se confirma en la consulta bajo el código de procedimiento civil de california §377.60 — no inventamos veredictos ni historias de acuerdos.'

/** Civ. Code §3342 — dog-bite statute framing (English). */
export const PI_CIV_CODE_3342_DOCKET_EN =
  'after the four primary claim types, car collisions, motorcycle crashes, and dog bites under california civil code §3342 round out the docket.'

/** Civ. Code §3342 — dog-bite statute framing (Spanish). */
export const PI_CIV_CODE_3342_DOCKET_ES =
  'después de los cuatro tipos principales de reclamo, choques de auto, accidentes de motocicleta y mordeduras de perro bajo el código civil de california §3342 completan el expediente.'

/** CCP §335.1 + Gov. Code §911.6 — short combined notice (English, Fontana/Riverside/Hemet WD blocks). */
export const PI_CCP_3351_GOV_9112_SHORT_EN =
  'ccp §335.1 gives most victims two years; a public entity may require six-month written notice under government code §911.2.'

/** CCP §335.1 + Gov. Code §911.2 — long notice (Spanish, 14 cities). */
export const PI_CCP_3351_GOV_9112_LONG_ES =
  'el plazo general de dos años del ccp §335.1 rige la mayoría de las demandas por lesiones; contra una entidad pública puede hacer falta aviso escrito de seis meses conforme al código de gobierno §911.2 antes de demandar.'

/** CCP §335.1 + Gov. Code §911.2 — short notice (Spanish, Fontana/Riverside/San Bernardino). */
export const PI_CCP_3351_GOV_9112_SHORT_ES =
  'el ccp §335.1 da dos años a la mayoría de las víctimas; una entidad pública puede exigir aviso escrito de seis meses bajo el código de gobierno §911.2.'

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

/** Central District consumer bankruptcy filing fees (English). */
export const BK_COURT_FEES_EN =
  'official court filing fees are $338 for chapter 7 and $313 for chapter 13.'

/** Central District consumer bankruptcy filing fees (Spanish, “presentación judicial”). */
export const BK_COURT_FEES_ES =
  'las tarifas oficiales de presentación judicial son $338 para el capítulo 7 y $313 para el capítulo 13.'

/** Alternate Spanish filing-fee wording (Hemet / Rancho Cucamonga BK blocks). */
export const BK_COURT_FEES_ES_JUDICIAL =
  'las tarifas judiciales oficiales son $338 para el capítulo 7 y $313 para el capítulo 13.'

export const DUPLICATE_COPY_ALLOWLIST: ReadonlySet<string> = new Set([
  // Required legal text
  PI_WRONGFUL_DEATH_STANDING_EN,
  PI_WRONGFUL_DEATH_STANDING_ES,
  PI_CIV_CODE_3342_DOCKET_EN,
  PI_CIV_CODE_3342_DOCKET_ES,
  PI_CCP_3351_GOV_9112_SHORT_EN,
  PI_CCP_3351_GOV_9112_LONG_ES,
  PI_CCP_3351_GOV_9112_SHORT_ES,
  DEBT_RELIEF_EN,
  DEBT_RELIEF_ES,
  DEBT_RELIEF_AGENCY_EN,
  DEBT_RELIEF_AGENCY_ES,
  BK_COURT_FEES_EN,
  BK_COURT_FEES_ES,
  BK_COURT_FEES_ES_JUDICIAL,
])
