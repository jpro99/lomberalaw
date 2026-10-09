import Link from 'next/link'

/**
 * tone="dark" is for breadcrumbs placed on a navy/night band. The default
 * muted ink is only ~2:1 there, below the WCAG AA 4.5:1 minimum.
 */
export function Breadcrumbs({
  items,
  tone = 'light',
}: {
  items: { name: string; href: string }[]
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <nav aria-label="Breadcrumb" className={`font-body text-xs ${dark ? 'text-night-ink' : 'text-ink-muted'}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>/</span>}
            {i === items.length - 1 ? (
              <span className={dark ? 'text-white' : 'text-ink-soft'}>{item.name}</span>
            ) : (
              <Link href={item.href} className={dark ? 'hover:text-white' : 'hover:text-ink'}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
