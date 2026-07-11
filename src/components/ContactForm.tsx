'use client'

import { useActionState } from 'react'
import { submitContactForm, type ContactFormState } from '@/app/(frontend)/[locale]/contact/actions'

type Copy = {
  heading: string
  subheading: string
  fullName: string
  email: string
  phone: string
  practiceArea: string
  practiceAreaOptions: Record<string, string>
  message: string
  referralSource: string
  referralOptions: Record<string, string>
  referralDetail: string
  smsConsent: string
  submit: string
  submitting: string
}

const initialState: ContactFormState = { status: 'idle' }

const inputClass =
  'w-full rounded-sm border border-line bg-panel px-4 py-2.5 font-body text-sm text-ink placeholder:text-ink-muted focus:border-ink focus:outline-none'
const labelClass = 'mb-1.5 block font-body text-xs font-semibold uppercase tracking-wide text-ink-muted'

export function ContactForm({ copy, locale }: { copy: Copy; locale: 'en' | 'es' }) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  if (state.status === 'success') {
    return (
      <div className="rounded-sm border border-line bg-panel p-8 text-center">
        <p className="font-display text-lg text-ink">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5 border border-line bg-panel p-6 md:p-8">
      <div>
        <h2 className="font-display text-xl font-semibold text-ink">{copy.heading}</h2>
        <p className="mt-1 font-body text-sm text-ink-soft">{copy.subheading}</p>
      </div>

      <input type="hidden" name="locale" value={locale} />

      {state.status === 'error' && state.message && (
        <p className="rounded-sm border border-ink/20 bg-stone px-4 py-2.5 font-body text-sm text-ink">
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="fullName">
            {copy.fullName}
          </label>
          <input id="fullName" name="fullName" type="text" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            {copy.phone}
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          {copy.email}
        </label>
        <input id="email" name="email" type="email" className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="practiceArea">
          {copy.practiceArea}
        </label>
        <select id="practiceArea" name="practiceArea" className={inputClass} defaultValue="">
          {Object.entries(copy.practiceAreaOptions).map(([value, label]) => (
            <option key={value || 'blank'} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          {copy.message}
        </label>
        <textarea id="message" name="message" required rows={4} className={inputClass} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="referralSource">
            {copy.referralSource}
          </label>
          <select id="referralSource" name="referralSource" className={inputClass} defaultValue="">
            {Object.entries(copy.referralOptions).map(([value, label]) => (
              <option key={value || 'blank'} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="referralSourceDetail">
            {copy.referralDetail}
          </label>
          <input id="referralSourceDetail" name="referralSourceDetail" type="text" className={inputClass} />
        </div>
      </div>

      <label className="flex items-start gap-2.5 font-body text-xs text-ink-soft">
        <input type="checkbox" name="smsConsent" className="mt-0.5 h-4 w-4 flex-none rounded border-line" />
        {copy.smsConsent}
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-7 py-3.5 font-body text-base font-semibold text-white transition-colors duration-fast ease-out hover:bg-brass-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? copy.submitting : copy.submit}
      </button>
    </form>
  )
}
