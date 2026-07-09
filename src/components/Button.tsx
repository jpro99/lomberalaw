'use client'

import Link from 'next/link'
import { logEventClient } from '@/lib/memory/logClient'

type ButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'lg'
  className?: string
  /** Set for CTAs that should fire a cta_click event, e.g. "call", "book_consult" */
  trackAs?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-body font-semibold transition-colors duration-fast ease-out'

const variants = {
  primary: 'bg-brass text-white hover:bg-brass-dark',
  secondary: 'border border-ink text-ink hover:bg-ink hover:text-white',
  ghost: 'text-ink underline decoration-line underline-offset-4 hover:decoration-ink',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function Button({ href, children, variant = 'primary', size = 'md', className = '', trackAs }: ButtonProps) {
  const isExternal = href.startsWith('tel:') || href.startsWith('mailto:')
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  const handleClick = trackAs
    ? () => logEventClient({ type: 'cta_click', metadata: { action: trackAs, href } })
    : undefined

  if (isExternal) {
    return (
      <a href={href} className={classes} onClick={handleClick}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} onClick={handleClick}>
      {children}
    </Link>
  )
}
