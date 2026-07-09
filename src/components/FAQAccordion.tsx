import { RichText } from '@payloadcms/richtext-lexical/react'

export function FAQAccordion({ faqs }: { faqs: { id: string; question: string; answer: any }[] }) {
  if (faqs.length === 0) return null

  return (
    <div className="divide-y divide-line rounded-lg border border-line bg-panel">
      {faqs.map((faq) => (
        <details key={faq.id} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-body text-sm font-semibold text-ink">
            {faq.question}
            <span className="flex-none text-ink-muted transition-transform duration-fast group-open:rotate-45">+</span>
          </summary>
          <div className="prose prose-sm prose-p:font-body prose-p:text-ink-soft mt-3 max-w-none">
            <RichText data={faq.answer} />
          </div>
        </details>
      ))}
    </div>
  )
}
