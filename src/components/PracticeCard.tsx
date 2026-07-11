import Link from 'next/link'

export function PracticeCard({
  href,
  eyebrow,
  name,
  description,
  learnMore,
}: {
  href: string
  eyebrow: string
  name: string
  description: string
  learnMore: string
}) {
  return (
    <Link
      href={href}
      className="group block border-b border-line px-0 py-8 transition-colors hover:bg-panel md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
    >
      <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-gold">{eyebrow}</p>
      <h3 className="mt-3 font-display text-3xl text-ink">{name}</h3>
      <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-ink-soft">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-ink underline decoration-gold underline-offset-4 group-hover:decoration-ink">
        {learnMore} →
      </span>
    </Link>
  )
}
