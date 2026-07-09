export function CityFactsCard({
  courthouse,
  hospitals,
  highways,
  locale,
}: {
  courthouse?: string
  hospitals?: { name: string }[]
  highways?: { name: string }[]
  locale: 'en' | 'es'
}) {
  if (!courthouse && !hospitals?.length && !highways?.length) return null

  return (
    <div className="rounded-lg border border-line bg-panel p-6">
      <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
        {locale === 'es' ? 'Información local' : 'Local information'}
      </p>
      <dl className="mt-3 space-y-3">
        {courthouse && (
          <div>
            <dt className="font-body text-xs font-medium text-ink-muted">
              {locale === 'es' ? 'Corte' : 'Courthouse'}
            </dt>
            <dd className="mt-0.5 font-body text-sm text-ink-soft">{courthouse}</dd>
          </div>
        )}
        {Boolean(hospitals?.length) && (
          <div>
            <dt className="font-body text-xs font-medium text-ink-muted">
              {locale === 'es' ? 'Hospitales cercanos' : 'Nearby hospitals'}
            </dt>
            <dd className="mt-0.5 font-body text-sm text-ink-soft">
              {hospitals!.map((h) => h.name).join(' · ')}
            </dd>
          </div>
        )}
        {Boolean(highways?.length) && (
          <div>
            <dt className="font-body text-xs font-medium text-ink-muted">
              {locale === 'es' ? 'Carreteras principales' : 'Major highways'}
            </dt>
            <dd className="mt-0.5 font-body text-sm text-ink-soft">
              {highways!.map((h) => h.name).join(' · ')}
            </dd>
          </div>
        )}
      </dl>
    </div>
  )
}
