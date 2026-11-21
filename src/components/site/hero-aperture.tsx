import { HeroCopy } from './hero-copy'
import { SiteHeader } from './site-header'
import { HeroSlideshow } from './hero-slideshow'

/**
 * Look 1 — Aperture.
 * A thin slit of light draws down the middle of a dark page, then opens
 * sideways like a pivot door to reveal warm colour fields that keep drifting.
 */
export function ApertureHero() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-ink text-paper">
      <HeroSlideshow />
      <div
        aria-hidden
        className="aperture-light -z-10"
        style={{
          background:
            'linear-gradient(160deg, oklch(0.32 0.04 48 / 0.9) 0%, oklch(0.2 0.01 60 / 0.86) 65%)',
        }}
      >
        <div
          className="blob"
          style={{
            width: '78vmax',
            height: '78vmax',
            right: '-22vmax',
            top: '-30vmax',
            background:
              'radial-gradient(closest-side, oklch(0.66 0.12 42 / 0.95), oklch(0.66 0.12 42 / 0) 100%)',
            animationName: 'drift-a',
            animationDuration: '26s',
          }}
        />
        <div
          className="blob"
          style={{
            width: '60vmax',
            height: '60vmax',
            right: '8vmax',
            bottom: '-32vmax',
            background:
              'radial-gradient(closest-side, oklch(0.86 0.07 78 / 0.75), oklch(0.86 0.07 78 / 0) 100%)',
            animationName: 'drift-b',
            animationDuration: '32s',
          }}
        />
        <div
          className="blob"
          style={{
            width: '46vmax',
            height: '36vmax',
            left: '-12vmax',
            top: '18vh',
            background:
              'radial-gradient(closest-side, oklch(0.72 0.08 25 / 0.55), oklch(0.72 0.08 25 / 0) 100%)',
            animationName: 'drift-c',
            animationDuration: '38s',
          }}
        />
        <div
          className="blob"
          style={{
            width: '34vmax',
            height: '34vmax',
            right: '30vw',
            top: '8vh',
            background:
              'radial-gradient(closest-side, oklch(0.62 0.05 115 / 0.4), oklch(0.62 0.05 115 / 0) 100%)',
            animationName: 'drift-b',
            animationDuration: '44s',
            animationDelay: '-12s',
          }}
        />
      </div>

      {/* Keeps the text side legible over the light */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(to right, oklch(0.2 0.01 60 / 0.82) 0%, oklch(0.2 0.01 60 / 0.35) 55%, transparent 100%), linear-gradient(to top, oklch(0.2 0.01 60 / 0.7), transparent 40%)',
        }}
      />

      <div aria-hidden className="aperture-slit -z-10" />

      {/* Column rules, like lines on a drawing sheet */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mx-auto hidden max-w-content grid-cols-4 px-10 md:grid"
      >
        {[0.2, 0.35, 0.5, 0.65].map((d, i) => (
          <span
            key={d}
            className="aperture-rule border-l border-paper/[0.07] last:border-r"
            style={{ '--d': `${d + i * 0.05}s` } as React.CSSProperties}
          />
        ))}
      </div>

      <SiteHeader tone="dark" />

      <div className="mx-auto flex min-h-svh max-w-content flex-col justify-end px-6 pt-32 pb-24 sm:px-10 sm:pb-16">
        <HeroCopy tone="dark" start={1.6} />
      </div>
    </section>
  )
}
