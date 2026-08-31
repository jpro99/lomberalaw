import Image from 'next/image'
import { EDGAR_HERO_CUTOUT, EDGAR_PHOTO_FALLBACK } from '@/lib/mediaUrl'

/** Padded transparent cutout v3 — do not run through next/image optimizer (flattens alpha). */
const EDGAR_CUTOUT_WIDTH = 351
const EDGAR_CUTOUT_HEIGHT = 387

export function EdgarHeadshot({
  priority = false,
  theme = 'light',
  feathered = false,
  showCaption = true,
  caption,
  className,
}: {
  priority?: boolean
  theme?: 'light' | 'dark'
  feathered?: boolean
  showCaption?: boolean
  caption?: string
  className?: string
}) {
  if (feathered) {
    const captionText = caption ?? 'Edgar P. Lombera, Founding Attorney'
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
          <figcaption className="mt-3 max-w-[240px] font-body text-xs leading-relaxed text-navy">
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
        alt="Edgar P. Lombera, Founding Attorney"
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
          Edgar P. Lombera, Founding Attorney
        </figcaption>
      )}
    </figure>
  )
}
