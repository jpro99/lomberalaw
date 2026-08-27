import { Container } from '@/components/Container'
import { pageMetadata } from '@/lib/seo'

export function getThankYouMetadata(path: '/thank-you' | '/gracias', title: string) {
  return pageMetadata({
    title: `${title} | Lombera Law`,
    path,
    locale: path === '/gracias' ? 'es' : 'en',
    noindex: true,
    nofollow: true,
  })
}

export function ThankYouView({
  headline,
  subtext,
}: {
  headline: string
  subtext?: string
}) {
  return (
    <main>
      <section className="py-16 md:py-24">
        <Container className="max-w-2xl text-center">
          <h1 className="font-display text-3xl text-ink md:text-4xl">{headline}</h1>
          {subtext && (
            <p className="mt-4 font-body text-sm leading-relaxed text-ink-soft">{subtext}</p>
          )}
        </Container>
      </section>
    </main>
  )
}
