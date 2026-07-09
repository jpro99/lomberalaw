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
      className="group block rounded-lg border border-line bg-panel p-8 shadow-card transition-colors duration-fast ease-out hover:border-clay"
    >
      <p className="font-body text-xs font-semibold uppercase tracking-wide text-clay">{eyebrow}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{name}</h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1 font-body text-sm font-semibold text-ink group-hover:text-clay">
        {learnMore} →
      </span>
    </Link>
  )
}
