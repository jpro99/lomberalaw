// Vintage regional signage -- not generic "Welcome to" placards, but
// two real, historic California design traditions rooted in these
// exact towns:
//
//   RedlandsSign     -- vintage citrus-crate label art. Bold color
//                        blocks, ornamental border, sunburst -- the
//                        actual historic graphic tradition of the
//                        Redlands/Inland Empire citrus industry.
//   PalmSpringsSign   -- mid-century Palm Springs travel-poster
//                        style. Sun, mountains, palms, flat bold
//                        color fields -- the region's real
//                        1950s-60s design identity.
//
// Real SVG <text> (not outlined/path-only), so it's crawlable, not
// just decorative pixels. Deliberately keeps practice-area keywords
// OUT of the graphic -- that copy belongs in the real H1, where it
// actually carries SEO weight. These are place-identity, not ad
// copy: colorful and authentic, not billboard-lawyer.

export function RedlandsSign({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" className={className} role="img" aria-label="Redlands, California">
      <rect x="4" y="4" width="272" height="272" rx="10" fill="#E8A23A" stroke="#8B3A1A" strokeWidth="6" />
      <rect x="16" y="16" width="248" height="248" rx="6" fill="none" stroke="#8B3A1A" strokeWidth="2" strokeDasharray="2 4" />

      {/* sunburst */}
      <g transform="translate(140 108)">
        {Array.from({ length: 16 }).map((_, i) => (
          <rect
            key={i}
            x="-3"
            y="-92"
            width="6"
            height="40"
            fill="#F6D77A"
            transform={`rotate(${i * 22.5})`}
          />
        ))}
        <circle r="54" fill="#F2C14E" stroke="#8B3A1A" strokeWidth="3" />
      </g>

      {/* orange grove silhouette along the bottom */}
      <g transform="translate(0 176)">
        <rect x="0" y="60" width="280" height="44" fill="#5B8A3A" />
        {[20, 70, 120, 170, 220, 260].map((cx, i) => (
          <g key={i} transform={`translate(${cx} 48)`}>
            <circle r="26" fill={i % 2 === 0 ? '#3F7A4E' : '#4A8A58'} />
            <circle cx="-8" cy="-4" r="6" fill="#E8A23A" stroke="#8B3A1A" strokeWidth="1.5" />
            <circle cx="9" cy="6" r="5.5" fill="#EB9A2E" stroke="#8B3A1A" strokeWidth="1.5" />
          </g>
        ))}
      </g>

      {/* ribbon + lettering */}
      <rect x="30" y="150" width="220" height="40" fill="#B0301A" stroke="#7A2010" strokeWidth="2" />
      <text
        x="140"
        y="177"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="26"
        fontWeight="700"
        fill="#FBEADB"
        letterSpacing="2"
      >
        REDLANDS
      </text>
      <text
        x="140"
        y="250"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="13"
        fontWeight="600"
        fill="#7A2010"
        letterSpacing="4"
      >
        CALIFORNIA
      </text>
    </svg>
  )
}

export function PalmSpringsSign({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" className={className} role="img" aria-label="Palm Springs, California">
      <rect x="4" y="4" width="272" height="272" rx="10" fill="#E0663D" stroke="#0A6664" strokeWidth="6" />
      <rect x="16" y="16" width="248" height="248" rx="6" fill="none" stroke="#0A6664" strokeWidth="2" strokeDasharray="2 4" />

      {/* sky gradient block */}
      <defs>
        <linearGradient id="psSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2B15C" />
          <stop offset="100%" stopColor="#E0663D" />
        </linearGradient>
      </defs>
      <rect x="16" y="16" width="248" height="160" fill="url(#psSky)" />

      {/* sun */}
      <circle cx="140" cy="86" r="34" fill="#FCE7DD" opacity="0.9" />

      {/* mountain ridge */}
      <path d="M16 176 L70 120 L110 150 L150 96 L200 150 L240 118 L264 150 L264 176 Z" fill="#0E8A88" opacity="0.85" />
      <path d="M16 176 L60 148 L100 168 L150 130 L190 168 L230 142 L264 168 L264 176 Z" fill="#0A6664" />

      {/* ground */}
      <rect x="16" y="176" width="248" height="88" fill="#DFF3F2" />

      {/* palms */}
      {[
        { x: 60, s: 0.55 }, { x: 140, s: 0.7 }, { x: 218, s: 0.5 },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x} 264) scale(${p.s})`}>
          <path d="M0 0 Q-3 -40 2 -74" stroke="#0A6664" strokeWidth="6" strokeLinecap="round" fill="none" />
          {[-70, -35, 0, 35, 70].map((r, j) => (
            <g key={j} transform={`translate(2 -74) rotate(${r})`}>
              <path d="M0 0 Q14 -6 34 0 Q16 4 0 0 Z" fill={j % 2 === 0 ? '#0E8A88' : '#0A6664'} />
            </g>
          ))}
        </g>
      ))}

      {/* ribbon + lettering */}
      <rect x="20" y="196" width="240" height="42" fill="#FCE7DD" stroke="#0A6664" strokeWidth="2" />
      <text
        x="140"
        y="224"
        textAnchor="middle"
        fontFamily="Futura, 'Century Gothic', 'Trebuchet MS', sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#0A6664"
        letterSpacing="3"
      >
        PALM SPRINGS
      </text>
      <text
        x="140"
        y="255"
        textAnchor="middle"
        fontFamily="Futura, 'Century Gothic', sans-serif"
        fontSize="12"
        fontWeight="600"
        fill="#FCE7DD"
        letterSpacing="4"
      >
        CALIFORNIA
      </text>
    </svg>
  )
}
