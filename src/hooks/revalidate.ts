import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload'

// Payload is embedded in this same Next.js process, so these hooks
// can call Next's cache APIs directly -- no separate revalidation
// API route or shared secret needed. Every statically-generated page
// (practice hubs, service pages, money pages, city hubs, attorney
// bio, etc.) gets invalidated the moment any content changes, so
// editors see their changes live within seconds, not on the next
// deploy.
//
// This revalidates broadly (the whole site under the root layout)
// rather than precisely tracking which pages depend on which piece
// of content -- a Service edit could affect its hub page, its own
// page, and any money pages built from it, which isn't worth
// hand-mapping at this scale. Revalidation itself is cheap; it
// invalidates a cache, it does not trigger a rebuild.
//
// IMPORTANT: revalidatePath only works inside an active Next.js
// request context (someone saving a change in /admin from a real
// browser request). Writes that happen outside that -- the seed
// script, the summarize script, any future CLI/cron job -- have no
// request context, and revalidatePath throws
// "Invariant: static generation store missing" if called there.
// These hooks fire on every collection write regardless of how that
// write happened, so this must fail silently outside a real
// request rather than crash the caller (a seed run has no live
// traffic to serve yet anyway -- there's nothing to revalidate).

function revalidateSite() {
  try {
    revalidatePath('/', 'layout')
  } catch {
    // No active request context (script/CLI write) -- nothing to
    // revalidate yet, safe to ignore.
  }
}

export const revalidateAfterChange: CollectionAfterChangeHook = ({ doc }) => {
  revalidateSite()
  return doc
}

export const revalidateAfterDelete: CollectionAfterDeleteHook = ({ doc }) => {
  revalidateSite()
  return doc
}

export const revalidateGlobalAfterChange: GlobalAfterChangeHook = ({ doc }) => {
  revalidateSite()
  return doc
}
