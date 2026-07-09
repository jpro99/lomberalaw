import Link from 'next/link'
import type { Locale } from '@/lib/payload'
import { getAllPosts } from '@/lib/getPosts'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return {
    title: locale === 'es' ? 'Recursos | Lombera Law' : 'Resources | Lombera Law',
  }
}

export default async function ResourcesHub({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const prefix = locale === 'en' ? '' : '/es'
  const posts = await getAllPosts(locale)

  return (
    <main>
      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container>
          <Breadcrumbs items={[{ name: 'Home', href: locale === 'en' ? '/' : '/es' }, { name: 'Resources', href: `${prefix}/resources` }]} />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {locale === 'es' ? 'Recursos' : 'Resources'}
          </h1>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          {posts.length === 0 ? (
            <p className="font-body text-sm text-ink-muted">
              {locale === 'es' ? 'Próximamente.' : 'Coming soon.'}
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`${prefix}/resources/${post.slug}`}
                  className="block rounded-lg border border-line bg-panel p-6 transition-colors hover:border-clay"
                >
                  <h2 className="font-display text-lg font-semibold text-ink">{post.title as string}</h2>
                  {post.excerpt && (
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">{post.excerpt as string}</p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  )
}
