import { HeroCopy } from './hero-copy'
import { SiteHeader } from './site-header'

/**
 * Look 2 — Window.
 * The frame of an arched window draws itself, then a blind rises to reveal
 * drifting daylight. A soft patch of light falls across the floor and sways.
 */
export function WindowHero() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-paper text-ink">
      {/* Patch of light the window casts across the floor */}
      <div
        aria-hidden
        className="fade pointer-events-none absolute -bottom-[10%] left-[8%] -z-10 h-[55%] w-[70%]"
        style={{ '--d': '2.2s' } as React.CSSProperties}
      >
        <div
          className="window-shadow h-full w-full"
          style={{
            background:
              'radial-gradient(60% 70% at 70% 30%, oklch(0.86 0.07 78 / 0.55), transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </div>

      <SiteHeader tone="light" />

      <div className="mx-auto grid min-h-svh max-w-content items-end gap-12 px-6 pt-28 pb-24 sm:px-10 sm:pb-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7 md:pb-4">
          <HeroCopy tone="light" start={1.4} />
        </div>

        <div className="order-first flex justify-end md:order-none md:col-span-5 md:self-center md:pt-10">
          <ArchedWindow />
        </div>
      </div>
    </section>
  )
}

function ArchedWindow() {
  return (
    <div
      aria-hidden
      className="relative aspect-[300/440] w-[min(58vw,15rem)] md:w-full md:max-w-[26rem]"
    >
      {/* Glass with drifting daylight */}
      <div className="window-glass absolute inset-0 overflow-hidden rounded-t-full">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(185deg, oklch(0.9 0.05 75) 0%, oklch(0.8 0.08 55) 45%, oklch(0.62 0.1 38) 100%)',
          }}
        />
        <div
          className="blob"
          style={{
            width: '120%',
            height: '80%',
            left: '-30%',
            top: '-10%',
            background:
              'radial-gradient(closest-side, oklch(0.97 0.03 85 / 0.95), oklch(0.97 0.03 85 / 0))',
            animationName: 'drift-a',
            animationDuration: '18s',
          }}
        />
        <div
          className="blob"
          style={{
            width: '110%',
            height: '70%',
            right: '-40%',
            bottom: '-15%',
            background:
              'radial-gradient(closest-side, oklch(0.66 0.12 42 / 0.9), oklch(0.66 0.12 42 / 0))',
            animationName: 'drift-b',
            animationDuration: '22s',
          }}
        />
        <div
          className="blob"
          style={{
            width: '80%',
            height: '50%',
            left: '-20%',
            bottom: '5%',
            background:
              'radial-gradient(closest-side, oklch(0.72 0.08 25 / 0.6), oklch(0.72 0.08 25 / 0))',
            animationName: 'drift-c',
            animationDuration: '26s',
          }}
        />
      </div>

      {/* Frame and glazing bars */}
      <svg
        viewBox="0 0 300 440"
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
      >
        <g stroke="var(--paper)" strokeWidth="6">
          <path
            className="window-line"
            pathLength={1}
            d="M150 0 L150 440"
            style={{ '--d': '1.2s' } as React.CSSProperties}
          />
          <path
            className="window-line"
            pathLength={1}
            d="M0 150 L300 150"
            style={{ '--d': '1.35s' } as React.CSSProperties}
          />
          <path
            className="window-line"
            pathLength={1}
            d="M0 300 L300 300"
            style={{ '--d': '1.5s' } as React.CSSProperties}
          />
        </g>
        <path
          className="window-line"
          pathLength={1}
          d="M0 440 L0 150 A150 150 0 0 1 300 150 L300 440 Z"
          stroke="var(--ink)"
          strokeWidth="1.25"
          style={{ '--d': '0s' } as React.CSSProperties}
        />
        <path
          className="window-line"
          pathLength={1}
          d="M-14 454 L-14 150 A164 164 0 0 1 314 150 L314 454"
          stroke="var(--ink)"
          strokeOpacity="0.35"
          strokeWidth="1"
          style={{ '--d': '0.25s' } as React.CSSProperties}
        />
        {/* Sill */}
        <path
          className="window-line"
          pathLength={1}
          d="M-30 454 L330 454"
          stroke="var(--ink)"
          strokeWidth="1.25"
          style={{ '--d': '0.5s' } as React.CSSProperties}
        />
      </svg>
    </div>
  )
}
