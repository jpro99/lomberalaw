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

function revalidateSite() {
  revalidatePath('/', 'layout')
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
