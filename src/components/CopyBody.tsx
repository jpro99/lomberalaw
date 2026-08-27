import type { CopySection } from '@/lib/hubBodyCopy'

export function CopyBody({
  lead,
  sections,
}: {
  lead?: string[]
  sections: CopySection[]
}) {
  if (!lead?.length && !sections.length) return null
  return (
    <div className="max-w-2xl space-y-8">
      {lead?.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="font-body text-sm leading-relaxed text-ink-soft md:text-base">
          {paragraph}
        </p>
      ))}
      {sections.map((section) => (
        <div key={section.h2}>
          <h2 className="font-display text-xl text-ink md:text-2xl">{section.h2}</h2>
          <div className="mt-4 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="font-body text-sm leading-relaxed text-ink-soft md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
