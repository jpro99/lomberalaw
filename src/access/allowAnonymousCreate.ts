import type { Access } from 'payload'

// Anyone can log an event (that's the point -- a visitor isn't
// authenticated yet when they load a page or click a CTA). But
// nobody can read, edit, or delete events except staff -- see
// isAdmin.ts, used on the read/update/delete access keys instead.
export const allowAnonymousCreate: Access = () => true
