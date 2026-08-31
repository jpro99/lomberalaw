import Image from 'next/image'
import { EDGAR_HERO_CUTOUT, EDGAR_PHOTO_FALLBACK } from '@/lib/mediaUrl'

export function EdgarHeadshot({
  priority = false,
  theme = 'light',
  feathered = false,
  className,
}: {
  priority?: boolean
  theme?: 'light' | 'dark'
  feathered?: boolean
  className?: string
}) {
  const imageClass =
    className ??
    (feathered
      ? 'h-auto w-full max-w-[260px]'
      : theme === 'dark'
        ? 'h-auto w-full max-w-[220px] border border-white/15'
        : 'h-auto w-full max-w-[240px] rounded-sm border border-line shadow-card')

  return (
    <figure className="text-center">
      <Image
        src={feathered ? EDGAR_HERO_CUTOUT : EDGAR_PHOTO_FALLBACK}
        alt="Edgar P. Lombera, Founding Attorney"
        width={288}
        height={288}
        priority={priority}
        sizes={feathered ? '(min-width: 768px) 260px, 62vw' : '(min-width: 768px) 240px, 60vw'}
        className={imageClass}
      />
      <figcaption
        className={`mt-3 font-body text-xs ${
          feathered ? 'text-navy' : theme === 'dark' ? 'text-white/70' : 'text-ink-muted'
        }`}
      >
        Edgar P. Lombera, Founding Attorney
      </figcaption>
    </figure>
  )
}
