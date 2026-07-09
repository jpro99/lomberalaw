export type EventType =
  | 'page_visit'
  | 'cta_click'
  | 'form_start'
  | 'form_abandon'
  | 'call'
  | 'sms'
  | 'chat_session'
  | 'booking_attempt'
  | 'booked_consult'
  | 'intake_milestone'

export type LogEventInput = {
  type: EventType
  path?: string
  sessionId?: string
  contactId?: string | number
  metadata?: Record<string, unknown>
}

// What retrieval hands back to a consumer (chat, Twilio voice, CRM
// view). Deliberately small and flat -- never a raw history dump.
export type ContactMemorySnapshot = {
  contactId: string | number
  profile: {
    fullName?: string
    languagePreference?: string
    preferredContactMethod?: string
    intakeStatus?: string
    practiceAreaInterest?: string[]
    explicitPreferences?: string
  }
  relevantEpisodes: {
    summary: string
    tag: string
  }[]
}
