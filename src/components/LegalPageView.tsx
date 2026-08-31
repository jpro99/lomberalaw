import Link from 'next/link'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { pageMetadata } from '@/lib/seo'

type LegalDoc = {
  title: string
  intro: string
  sections: readonly { heading: string; body: readonly string[] }[]
}

export function getLegalPageMetadata(doc: LegalDoc, path: string) {
  return pageMetadata({
    title: `${doc.title} | Lombera Law`,
    description: doc.intro.slice(0, 160),
    path,
    locale: 'en',
  })
}

export function LegalPageView({ doc, path }: { doc: LegalDoc; path: string }) {
  return (
    <main>
      <section className="border-b border-line bg-panel py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: doc.title, href: `${path}/` },
            ]}
          />
          <h1 className="mt-4 font-display text-3xl text-ink md:text-4xl">{doc.title}</h1>
          <p className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-ink-soft">{doc.intro}</p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl space-y-8">
          {doc.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl text-ink">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="font-body text-sm leading-relaxed text-ink-soft">
                    {paragraph.includes('www.lomberalaw.com/privacy-policy') ? (
                      <>
                        {paragraph.split('www.lomberalaw.com/privacy-policy')[0]}
                        <Link href="/privacy-policy/" className="text-gold hover:text-ink">
                          www.lomberalaw.com/privacy-policy
                        </Link>
                        {paragraph.split('www.lomberalaw.com/privacy-policy')[1]}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </main>
  )
}
