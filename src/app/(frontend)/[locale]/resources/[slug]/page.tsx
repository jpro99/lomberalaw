import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/payload'
import { getPostBySlug } from '@/lib/getPosts'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params
  const post = await getPostBySlug(slug, locale)
  if (!post) return {}
  return {
    title: post.seo?.metaTitle || `${post.title} | Lombera Law`,
    description: post.seo?.metaDescription || post.excerpt,
  }
}

export default async function ResourcePostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}) {
  const { locale, slug } = await params
  const prefix = locale === 'en' ? '' : '/es'
  const post = await getPostBySlug(slug, locale)
  if (!post) notFound()

  const relatedServices = (post.relatedServices as any[]) || []

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://lomberalaw.com' + (locale === 'es' ? '/es' : '') },
          { name: 'Resources', url: `https://lomberalaw.com${prefix}/resources` },
          { name: post.title as string, url: `https://lomberalaw.com${prefix}/resources/${slug}` },
        ])}
      />

      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container className="max-w-2xl">
          <Breadcrumbs
            items={[
              { name: 'Home', href: locale === 'en' ? '/' : '/es' },
              { name: 'Resources', href: `${prefix}/resources` },
              { name: post.title as string, href: `${prefix}/resources/${slug}` },
            ]}
          />
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink">{post.title as string}</h1>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container className="prose prose-headings:font-display prose-headings:text-ink prose-p:font-body prose-p:text-ink-soft prose-a:text-clay max-w-2xl">
          {post.body && <RichText data={post.body as any} />}
        </Container>
      </section>

      {/* Every resource post links down to the money pages it supports -- no dead-end content. */}
      {relatedServices.length > 0 && (
        <section className="border-t border-line bg-stone py-14 md:py-20">
          <Container className="max-w-2xl">
            <h2 className="font-display text-lg font-semibold text-ink">
              {locale === 'es' ? 'Servicios relacionados' : 'Related services'}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {relatedServices.map((s: any) => {
                const practiceSlug = s.practiceArea?.slug === 'bankruptcy' ? 'bankruptcy' : 'personal-injury'
                return (
                  <li key={s.id}>
                    <Link
                      href={`${prefix}/${practiceSlug}/${s.slug}`}
                      className="rounded-full border border-line bg-panel px-4 py-2 font-body text-sm text-ink transition-colors hover:border-clay"
                    >
                      {s.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Container>
        </section>
      )}
    </main>
  )
}
