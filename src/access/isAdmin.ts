import type { Access } from 'payload'

// Every memory/PII collection uses this for read/update/delete. Only
// authenticated Payload users (staff) can see or change contact data,
// events, or episodes -- never the public API, regardless of what
// creates the record.
export const isAdmin: Access = ({ req }) => Boolean(req.user)
