import { Button } from './Button'

export function OfficeCard({
  name,
  phone,
  address,
  hours,
  mapEmbedUrl,
  callLabel,
  directionsLabel,
  hoursLabel,
}: {
  name: string
  phone: string
  address: string
  hours?: string
  mapEmbedUrl?: string
  callLabel: string
  directionsLabel: string
  hoursLabel: string
}) {
  return (
    <div className="overflow-hidden border border-line bg-panel">
      {mapEmbedUrl ? (
        <iframe
          src={mapEmbedUrl}
          className="h-48 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map to ${name}`}
        />
      ) : (
        <div className="h-48 w-full bg-stone" aria-hidden />
      )}

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-ink">{name}</h3>
        <p className="mt-2 font-body text-sm text-ink-soft">{address}</p>

        {hours && (
          <div className="mt-4">
            <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">{hoursLabel}</p>
            <p className="mt-1 whitespace-pre-line font-body text-sm text-ink-soft">{hours}</p>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          <Button href={`tel:${phone}`} size="md" trackAs="call">
            {callLabel}
          </Button>
          <Button
            href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
            variant="secondary"
            size="md"
          >
            {directionsLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
