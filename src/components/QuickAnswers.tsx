export function QuickAnswers({
  items,
  kicker,
}: {
  items: { q: string; a: string }[]
  kicker: string
}) {
  if (items.length === 0) return null
  return (
    <div className="rounded-xl border border-line bg-panel p-6 md:p-8">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">{kicker}</p>
      <dl className="mt-4 space-y-5">
        {items.map((item) => (
          <div key={item.q}>
            <dt className="font-body text-sm font-bold text-ink">{item.q}</dt>
            <dd className="mt-1 font-body text-sm leading-relaxed text-ink-soft">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
