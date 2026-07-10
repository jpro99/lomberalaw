/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'var(--color-ink)',
          soft: 'var(--color-ink-soft)',
          muted: 'var(--color-ink-muted)',
        },
        stone: 'var(--color-stone)',
        panel: 'var(--color-panel)',
        line: 'var(--color-line)',
        clay: {
          DEFAULT: 'var(--color-clay)',
          soft: 'var(--color-clay-soft)',
        },
        brass: {
          DEFAULT: 'var(--color-brass)',
          dark: 'var(--color-brass-dark)',
          soft: 'var(--color-brass-soft)',
        },
        sage: {
          DEFAULT: 'var(--color-sage)',
          soft: 'var(--color-sage-soft)',
        },
        night: {
          DEFAULT: 'var(--color-night)',
          ink: 'var(--color-night-ink)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        data: ['var(--font-data)'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
