export function TestimonialCard({
  quote,
  author,
  rating,
}: {
  quote: string
  author: string
  rating: number
}) {
  return (
    <figure className="interactive-card rounded-lg border border-line bg-panel p-7">
      <div className="font-data text-sm text-brass" aria-hidden>
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>
      <blockquote className="mt-4 font-body text-sm leading-relaxed text-ink-soft">
        "{quote}"
      </blockquote>
      <figcaption className="mt-4 font-body text-sm font-semibold text-ink">{author}</figcaption>
    </figure>
  )
}
