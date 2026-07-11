// Location-aware signature illustrations -- the firm's actual
// geography, rendered as real, recognizable, full-color trees
// rather than abstract monotone line art. Two subjects:
//
//   OrangeTree -- Redlands' actual citrus-belt heritage
//   PalmTree   -- Palm Springs' iconic desert fan palms
//
// Both are detailed enough to read as "an orange tree" / "a palm
// tree" at a glance, in real color (not currentColor silhouettes),
// while staying pure inline SVG -- zero image downloads, zero
// performance cost, no licensing risk (nothing borrowed from stock
// photography).
//
// "citrus" / "desert" / "blend" variants are kept for smaller
// secondary placements (city hub heroes etc); the homepage uses the
// two illustrations directly in a split layout via <SplitHero>.

function OrangeTree({ x = 0, y = 0, scale = 1 }: { x?: number; y?: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* trunk */}
      <path d="M60 190 Q58 150 62 120" stroke="#7A5230" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M62 120 Q40 108 26 96" stroke="#7A5230" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M62 120 Q84 106 100 92" stroke="#7A5230" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* canopy -- layered rounded clusters for real foliage volume */}
      <circle cx="60" cy="86" r="52" fill="#3F7A4E" />
      <circle cx="24" cy="98" r="34" fill="#4A8A58" />
      <circle cx="98" cy="96" r="36" fill="#4A8A58" />
      <circle cx="60" cy="52" r="38" fill="#5B9B67" />
      <circle cx="30" cy="60" r="26" fill="#6BAA75" />
      <circle cx="92" cy="58" r="24" fill="#6BAA75" />
      {/* oranges -- distinct, solid, the actual accent */}
      <circle cx="38" cy="78" r="10" fill="#E08A2B" stroke="#C16E15" strokeWidth="1.5" />
      <circle cx="76" cy="68" r="9" fill="#E89540" stroke="#C16E15" strokeWidth="1.5" />
      <circle cx="94" cy="92" r="10" fill="#E08A2B" stroke="#C16E15" strokeWidth="1.5" />
      <circle cx="52" cy="104" r="9" fill="#E89540" stroke="#C16E15" strokeWidth="1.5" />
      <circle cx="26" cy="112" r="8" fill="#E08A2B" stroke="#C16E15" strokeWidth="1.5" />
      <circle cx="80" cy="112" r="8.5" fill="#E89540" stroke="#C16E15" strokeWidth="1.5" />
      {/* highlight dots for a touch of dimension */}
      <circle cx="35" cy="75" r="2.5" fill="#F5C98A" opacity="0.8" />
      <circle cx="73" cy="65" r="2.2" fill="#F5C98A" opacity="0.8" />
      <circle cx="91" cy="89" r="2.5" fill="#F5C98A" opacity="0.8" />
    </g>
  )
}

function PalmTree({ x = 0, y = 0, scale = 1, lean = 0 }: { x?: number; y?: number; scale?: number; lean?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale}) rotate(${lean})`}>
      {/* trunk -- tall, curved, segmented like a real fan palm */}
      <path
        d="M50 260 Q46 200 52 150 Q56 110 48 70"
        stroke="#8B6B47"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      {[190, 165, 140, 115, 90].map((yy, i) => (
        <path key={i} d={`M${40 + i} ${yy} Q50 ${yy - 4} ${62 - i} ${yy}`} stroke="#6E4F30" strokeWidth="2" fill="none" opacity="0.6" />
      ))}
      {/* fronds -- fan palm silhouette, radiating from the crown */}
      {[
        { r: -75, l: 62 }, { r: -50, l: 70 }, { r: -25, l: 76 },
        { r: 0, l: 80 }, { r: 25, l: 76 }, { r: 50, l: 70 }, { r: 75, l: 62 },
      ].map((f, i) => (
        <g key={i} transform={`translate(48 68) rotate(${f.r})`}>
          <path
            d={`M0 0 Q${f.l * 0.3} -8 ${f.l} -2 Q${f.l * 0.55} 6 0 0 Z`}
            fill={i % 2 === 0 ? '#3F7A4E' : '#4A8A58'}
          />
        </g>
      ))}
      {/* crown center */}
      <circle cx="48" cy="68" r="7" fill="#6E4F30" />
    </g>
  )
}

function RidgeLine() {
  return (
    <>
      <path
        d="M0 150 L90 122 L180 142 L280 108 L380 138 L470 118 L560 140 L650 116 L740 138 L800 128 L800 200 L0 200 Z"
        fill="currentColor"
        opacity="0.08"
      />
      <line x1="0" y1="164" x2="800" y2="164" stroke="currentColor" strokeWidth="1" opacity="0.25" />
    </>
  )
}

type Variant = 'citrus' | 'desert' | 'blend'

export function HorizonMotif({ className = '', variant = 'blend' }: { className?: string; variant?: Variant }) {
  return (
    <svg viewBox="0 0 800 200" className={className} fill="none" preserveAspectRatio="none" aria-hidden="true">
      <RidgeLine />
      {variant !== 'desert' && <OrangeTree x={10} y={30} scale={0.62} />}
      {variant === 'citrus' && <OrangeTree x={620} y={30} scale={0.5} />}
      {variant !== 'citrus' && (
        <>
          <PalmTree x={660} y={-40} scale={0.62} />
          <PalmTree x={730} y={0} scale={0.42} lean={4} />
        </>
      )}
    </svg>
  )
}
