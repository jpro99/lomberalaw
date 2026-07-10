// Location-aware signature motifs -- the firm's actual geography,
// not generic mountains. Three variants:
//
//   "citrus"  -- an orange-branch line motif for the Redlands /
//                Inland Empire cluster (the citrus belt heritage)
//   "desert"  -- palm silhouettes against the San Jacinto ridge for
//                the Palm Springs / Coachella Valley cluster
//   "blend"   -- homepage version: citrus branch on one side, palms
//                on the other, joined by the horizon line. The firm's
//                identity is exactly this pairing -- two offices, two
//                landscapes, one practice.
//
// All pure inline SVG (no image downloads, no perf cost), tinted via
// currentColor so pages control the color with a text utility.

type Variant = 'citrus' | 'desert' | 'blend'

function CitrusBranch({ x = 0, y = 0, flip = false }: { x?: number; y?: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})${flip ? ' scale(-1,1)' : ''}`}>
      {/* branch */}
      <path d="M0 60 Q40 40 90 34 Q130 30 170 36" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.35" />
      {/* leaves */}
      <path d="M48 44 q10 -16 24 -12 q-6 16 -24 12 Z" fill="currentColor" opacity="0.22" />
      <path d="M96 32 q12 -14 26 -9 q-8 15 -26 9 Z" fill="currentColor" opacity="0.22" />
      <path d="M134 34 q4 -18 18 -20 q0 17 -18 20 Z" fill="currentColor" opacity="0.18" />
      {/* oranges */}
      <circle cx="72" cy="48" r="9" fill="currentColor" opacity="0.30" />
      <circle cx="118" cy="42" r="7" fill="currentColor" opacity="0.26" />
      <circle cx="152" cy="46" r="8" fill="currentColor" opacity="0.28" />
    </g>
  )
}

function PalmCluster({ x = 0, y = 0, scale = 1 }: { x?: number; y?: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* trunk */}
      <path d="M40 96 Q42 60 38 34" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.32" />
      {/* fronds */}
      <path d="M38 34 Q18 26 4 34 Q22 36 38 40 Z" fill="currentColor" opacity="0.26" />
      <path d="M38 34 Q58 24 74 30 Q56 36 38 40 Z" fill="currentColor" opacity="0.26" />
      <path d="M38 34 Q28 16 12 12 Q26 26 36 38 Z" fill="currentColor" opacity="0.22" />
      <path d="M38 34 Q50 14 66 12 Q52 26 40 38 Z" fill="currentColor" opacity="0.22" />
      <path d="M38 34 Q36 14 38 4 Q42 18 40 36 Z" fill="currentColor" opacity="0.18" />
    </g>
  )
}

function RidgeLine() {
  return (
    <>
      {/* distant San Jacinto ridge -- kept, but as one quiet layer, not the whole idea */}
      <path
        d="M0 150 L90 122 L180 142 L280 108 L380 138 L470 118 L560 140 L650 116 L740 138 L800 128 L800 200 L0 200 Z"
        fill="currentColor"
        opacity="0.10"
      />
      <line x1="0" y1="164" x2="800" y2="164" stroke="currentColor" strokeWidth="1" opacity="0.30" />
    </>
  )
}

export function HorizonMotif({ className = '', variant = 'blend' }: { className?: string; variant?: Variant }) {
  return (
    <svg viewBox="0 0 800 200" className={className} fill="none" preserveAspectRatio="none" aria-hidden="true">
      <RidgeLine />
      {variant !== 'desert' && <CitrusBranch x={variant === 'blend' ? 20 : 60} y={90} />}
      {variant === 'citrus' && <CitrusBranch x={560} y={100} flip />}
      {variant !== 'citrus' && (
        <>
          <PalmCluster x={variant === 'blend' ? 640 : 200} y={64} />
          <PalmCluster x={variant === 'blend' ? 710 : 520} y={84} scale={0.7} />
        </>
      )}
    </svg>
  )
}
