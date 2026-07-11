'use server'

import { getPayload } from '@/lib/payload'
import type { Locale } from '@/lib/payload'

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const fullName = String(formData.get('fullName') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const phone = String(formData.get('phone') || '').trim()
  const message = String(formData.get('message') || '').trim()
  const practiceArea = String(formData.get('practiceArea') || '')
  const referralSource = String(formData.get('referralSource') || '')
  const referralSourceDetail = String(formData.get('referralSourceDetail') || '').trim()
  const smsConsent = formData.get('smsConsent') === 'on'
  const locale = (String(formData.get('locale') || 'en') as Locale) || 'en'

  if (!fullName || !message || (!email && !phone)) {
    return {
      status: 'error',
      message:
        locale === 'es'
          ? 'Por favor complete su nombre, un mensaje, y al menos un teléfono o correo electrónico.'
          : 'Please fill in your name, a message, and at least a phone number or email.',
    }
  }

  try {
    const payload = await getPayload()

    // Find-or-update by phone or email, matching the pattern used
    // throughout the seed script -- avoid creating duplicate Contact
    // records for the same person submitting more than once.
    let existing = null
    if (phone) {
      const res = await payload.find({ collection: 'contacts', where: { phone: { equals: phone } }, limit: 1 })
      existing = res.docs[0] || null
    }
    if (!existing && email) {
      const res = await payload.find({ collection: 'contacts', where: { email: { equals: email } }, limit: 1 })
      existing = res.docs[0] || null
    }

    const practiceAreaRes = practiceArea
      ? await payload.find({ collection: 'practice-areas', where: { slug: { equals: practiceArea } }, limit: 1 })
      : null

    const contactData: Record<string, unknown> = {
      fullName,
      email: email || undefined,
      phone: phone || undefined,
      languagePreference: locale,
      source: 'website_form',
      explicitPreferences: message,
      ...(referralSource ? { referralSource } : {}),
      ...(referralSourceDetail ? { referralSourceDetail } : {}),
      ...(smsConsent ? { smsConsent: true, smsConsentTimestamp: new Date().toISOString() } : {}),
      ...(practiceAreaRes?.docs[0] ? { practiceAreaInterest: [practiceAreaRes.docs[0].id] } : {}),
    }

    const contact = existing
      ? await payload.update({ collection: 'contacts', id: existing.id, data: contactData })
      : await payload.create({ collection: 'contacts', data: { ...contactData, intakeStatus: 'new' } })

    await payload.create({
      collection: 'events',
      data: {
        type: 'intake_milestone',
        path: '/contact',
        contact: contact.id,
        metadata: { practiceArea, referralSource, hasMessage: true },
        occurredAt: new Date().toISOString(),
      },
    })

    return {
      status: 'success',
      message:
        locale === 'es'
          ? 'Gracias. Hemos recibido su mensaje y nos pondremos en contacto pronto.'
          : "Thank you. We've received your message and will be in touch soon.",
    }
  } catch (err) {
    console.error('Contact form submission failed:', err)
    return {
      status: 'error',
      message:
        locale === 'es'
          ? 'Algo salió mal. Por favor llámenos directamente.'
          : 'Something went wrong. Please call us directly instead.',
    }
  }
}
