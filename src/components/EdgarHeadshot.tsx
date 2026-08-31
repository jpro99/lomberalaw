import Image from 'next/image'
import { EDGAR_HERO_CUTOUT, EDGAR_PHOTO_FALLBACK } from '@/lib/mediaUrl'

/** Padded transparent cutout — do not run through next/image optimizer (flattens alpha). */
const EDGAR_CUTOUT_WIDTH = 258
const EDGAR_CUTOUT_HEIGHT = 350

export function EdgarHeadshot({
  priority = false,
  theme = 'light',
  feathered = false,
  showCaption = true,
  className,
}: {
  priority?: boolean
  theme?: 'light' | 'dark'
  feathered?: boolean
  showCaption?: boolean
  className?: string
}) {
  if (feathered) {
    return (
      <div className="bg-transparent">
        <img
          src={EDGAR_HERO_CUTOUT}
          alt="Edgar P. Lombera, Founding Attorney"
          width={EDGAR_CUTOUT_WIDTH}
          height={EDGAR_CUTOUT_HEIGHT}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          className={className ?? 'h-auto w-full max-w-[220px] bg-transparent md:max-w-[240px]'}
        />
      </div>
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
