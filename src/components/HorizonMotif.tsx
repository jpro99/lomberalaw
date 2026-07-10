// The one recurring illustrative idea for this brand: a restrained
// line-art horizon where the valley floor meets the San Jacinto /
// San Bernardino mountains. Used sparingly -- hero backgrounds and
// section accents, never more than once per view. Not a stock photo,
// not a gimmick -- a single considered motif, per the design law.
export function HorizonMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 200"
      className={className}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Distant range -- faint, far layer */}
      <path
        d="M0 140 L60 110 L120 130 L180 90 L240 125 L300 100 L360 135 L420 105 L480 132 L540 95 L600 128 L660 108 L720 138 L800 118 L800 200 L0 200 Z"
        fill="currentColor"
        opacity="0.12"
      />
      {/* Near range -- slightly bolder, closer layer */}
      <path
        d="M0 165 L80 145 L150 170 L220 138 L300 168 L380 150 L460 175 L540 145 L620 172 L700 152 L800 170 L800 200 L0 200 Z"
        fill="currentColor"
        opacity="0.22"
      />
      {/* Horizon line itself -- the signature hairline */}
      <line x1="0" y1="170" x2="800" y2="170" stroke="currentColor" strokeWidth="1" opacity="0.35" />
    </svg>
  )
}
