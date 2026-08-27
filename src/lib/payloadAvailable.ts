/** True when Postgres + Payload secret are configured (Vercel preview/prod). */
export function isPayloadAvailable(): boolean {
  return Boolean(process.env.DATABASE_URI?.trim() && process.env.PAYLOAD_SECRET?.trim())
}
