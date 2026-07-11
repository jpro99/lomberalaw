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
    <figure className="border-t border-gold/40 pt-6">
      <div className="font-data text-xs tracking-widest text-gold" aria-hidden>
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>
      <blockquote className="mt-4 font-display text-xl leading-snug text-ink">
        “{quote}”
      </blockquote>
      <figcaption className="mt-5 font-body text-sm font-medium text-ink-muted">{author}</figcaption>
    </figure>
  )
}
