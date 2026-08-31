/** Static mountain still — hero background only (EN + ES home). */
export function HomeHeroBackdrop() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/home-hero-mountain.avif"
        type="image/avif"
        fetchPriority="high"
      />
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <picture className="block h-full w-full">
          <source srcSet="/images/home-hero-mountain.avif" type="image/avif" />
          <source srcSet="/images/home-hero-mountain.webp" type="image/webp" />
          <img
            src="/images/home-hero-mountain.webp"
            alt=""
            width={1920}
            height={1071}
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover object-[center_42%]"
          />
        </picture>
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/[0.95] via-white/[0.88] to-white/[0.74]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-navy/[0.07] via-transparent to-white/20"
        aria-hidden="true"
      />
    </>
  )
}
