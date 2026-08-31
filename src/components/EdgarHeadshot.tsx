import Image from 'next/image'
import type { Locale } from '@/lib/payload'
import { EDGAR_HERO_CUTOUT, EDGAR_PHOTO_FALLBACK } from '@/lib/mediaUrl'

/** Padded transparent cutout v3 — do not run through next/image optimizer (flattens alpha). */
const EDGAR_CUTOUT_WIDTH = 351
const EDGAR_CUTOUT_HEIGHT = 387

const EDGAR_CAPTION: Record<Locale, string> = {
  en: 'Edgar P. Lombera, Founding Attorney',
  es: 'Edgar P. Lombera, Abogado fundador',
}

function resolveCaption(locale: Locale, caption?: string) {
  return caption ?? EDGAR_CAPTION[locale]
}

export function EdgarHeadshot({
  priority = false,
  theme = 'light',
  feathered = false,
  showCaption = true,
  locale = 'en',
  caption,
  className,
}: {
  priority?: boolean
  theme?: 'light' | 'dark'
  feathered?: boolean
  showCaption?: boolean
  locale?: Locale
  caption?: string
  className?: string
}) {
  const captionText = resolveCaption(locale, caption)

  if (feathered) {
    return (
      <figure className="bg-transparent text-center">
        <img
          src={EDGAR_HERO_CUTOUT}
          alt={captionText}
          width={EDGAR_CUTOUT_WIDTH}
          height={EDGAR_CUTOUT_HEIGHT}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          className={
            className ??
            'edgar-hero-cutout h-auto w-full max-w-[220px] bg-transparent md:max-w-[240px]'
          }
        />
        {showCaption && (
          <figcaption className="relative mt-3 max-w-[240px] px-2 py-1.5 text-center font-body text-xs font-bold leading-relaxed text-navy">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-[-4px] inset-y-[-2px] -z-10 bg-gradient-to-b from-white/95 via-white/88 to-white/55"
            />
            {captionText}
          </figcaption>
        )}
      </figure>
    )
  }

  const imageClass =
    className ??
    (theme === 'dark'
      ? 'h-auto w-full max-w-[220px] border border-white/15'
      : 'h-auto w-full max-w-[240px] rounded-sm border border-line shadow-card')

  return (
    <figure className="text-center">
      <Image
        src={EDGAR_PHOTO_FALLBACK}
        alt={captionText}
        width={288}
        height={288}
        priority={priority}
        sizes="(min-width: 768px) 240px, 60vw"
        className={imageClass}
      />
      {showCaption && (
        <figcaption
          className={`mt-3 font-body text-xs ${
            theme === 'dark' ? 'text-white/70' : 'text-ink-muted'
          }`}
        >
          {captionText}
        </figcaption>
      )}
    </figure>
  )
}
