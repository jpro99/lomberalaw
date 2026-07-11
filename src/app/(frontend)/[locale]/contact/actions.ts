'use server'

import { getPayload } from '@/lib/payload'
import type { Locale } from '@/lib/payload'

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

async function notifyStaffOfContact(args: {
  fullName: string
  email: string
  phone: string
  message: string
  practiceArea: string
  referralSource: string
  referralSourceDetail: string
  smsConsent: boolean
  locale: Locale
  contactId: string | number
}) {
  const notifyTo = process.env.CONTACT_NOTIFY_TO?.trim()
  if (!notifyTo) {
    console.warn('CONTACT_NOTIFY_TO is not set — skipping staff email notification.')
    return
  }
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY is not set — skipping staff email notification.')
    return
  }

  const payload = await getPayload()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lomberalaw.com'
  const subject = `New website inquiry — ${args.fullName}`
  const lines = [
    `New contact form submission`,
    ``,
    `Name: ${args.fullName}`,
    `Phone: ${args.phone || '(none)'}`,
    `Email: ${args.email || '(none)'}`,
    `Practice area: ${args.practiceArea || '(not selected)'}`,
    `How they found us: ${args.referralSource || '(not selected)'}`,
    args.referralSourceDetail ? `Referral detail: ${args.referralSourceDetail}` : null,
    `Language: ${args.locale}`,
    `SMS consent: ${args.smsConsent ? 'yes' : 'no'}`,
    ``,
    `Message:`,
    args.message,
    ``,
    `Contact record: ${siteUrl}/admin/collections/contacts/${args.contactId}`,
  ].filter((line) => line !== null)

  await payload.sendEmail({
    to: notifyTo,
    subject,
    text: lines.join('\n'),
  })
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

    // Staff email is best-effort: never fail the visitor's submission
    // if Resend/env is misconfigured. Lead is already in Contacts.
    try {
      await notifyStaffOfContact({
        fullName,
        email,
        phone,
        message,
        practiceArea,
        referralSource,
        referralSourceDetail,
        smsConsent,
        locale,
        contactId: contact.id,
      })
    } catch (notifyErr) {
      console.error('Contact form staff notification failed:', notifyErr)
    }

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
