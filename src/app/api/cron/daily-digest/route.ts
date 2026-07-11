import { NextResponse } from 'next/server'
import { buildAndSendDailyDigest } from '@/lib/digest'

// Vercel Cron calls this on the schedule defined in vercel.json.
// Protected by CRON_SECRET (set in Vercel env vars) checked against
// the Authorization header Vercel Cron sends automatically -- see
// https://vercel.com/docs/cron-jobs/manage-cron-jobs#securing-cron-jobs
export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const result = await buildAndSendDailyDigest()
  return NextResponse.json(result)
}
