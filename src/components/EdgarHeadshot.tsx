import Image from 'next/image'
import { EDGAR_PHOTO_FALLBACK } from '@/lib/mediaUrl'

export function EdgarHeadshot({
  priority = false,
  className = 'h-auto w-full max-w-[220px] border border-white/15',
}: {
  priority?: boolean
  className?: string
}) {
  return (
    <figure className="text-center">
      <Image
        src={EDGAR_PHOTO_FALLBACK}
        alt="Edgar P. Lombera, Founding Attorney"
        width={288}
        height={288}
        priority={priority}
        sizes="(min-width: 768px) 220px, 60vw"
        className={className}
      />
      <figcaption className="mt-2 font-body text-xs text-white/70">
        Edgar P. Lombera, Founding Attorney
      </figcaption>
    </figure>
  )
}
