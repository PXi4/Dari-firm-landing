import { site } from '@/site.config'
import { cn } from '@/lib/utils'

const delay = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties

/** Headline, intro, call to action and services — shared by both hero looks. */
export function HeroCopy({
  tone,
  start,
}: {
  tone: 'dark' | 'light'
  /** Seconds to wait before the text starts appearing. */
  start: number
}) {
  const onDark = tone === 'dark'
  return (
    <div className="flex flex-col gap-10">
      <p
        className={cn(
          'rise text-xs font-medium tracking-[0.24em] uppercase',
          onDark ? 'text-sand' : 'text-clay',
        )}
        style={delay(start)}
      >
        Architecture Studio — Est. {site.founded}
      </p>

      <h1 className="font-display text-[clamp(3.4rem,10vw,9rem)] leading-[0.9] tracking-[-0.02em]">
        <span className="rise block" style={delay(start + 0.15)}>
          {site.headline[0]}
        </span>
        <span className="rise block italic" style={delay(start + 0.32)}>
          {site.headline[1]}
        </span>
      </h1>

      <div
        className="rise flex max-w-xl flex-col gap-8"
        style={delay(start + 0.55)}
      >
        <p
          className={cn(
            'text-base leading-relaxed sm:text-lg',
            onDark ? 'text-paper/75' : 'text-ink/70',
          )}
        >
          {site.intro}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href="#contact"
            className={cn(
              'inline-flex h-12 items-center gap-3 rounded-full px-6 text-sm font-medium transition-[background-color,transform] duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none active:translate-y-0 motion-reduce:transition-none',
              onDark
                ? 'bg-paper text-ink hover:bg-sand focus-visible:ring-offset-ink'
                : 'bg-ink text-paper hover:bg-ink-soft focus-visible:ring-offset-paper',
            )}
          >
            Start a conversation
            <span aria-hidden>→</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className={cn(
              'rounded-sm text-sm underline decoration-1 underline-offset-[6px] transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
              onDark
                ? 'text-paper/70 decoration-paper/30 hover:text-paper hover:decoration-sand'
                : 'text-ink/65 decoration-ink/25 hover:text-ink hover:decoration-clay',
            )}
          >
            {site.email}
          </a>
        </div>
      </div>

      <ul
        className={cn(
          'fade mt-2 flex flex-wrap gap-x-8 gap-y-2 border-t pt-5 text-xs tracking-[0.08em] uppercase',
          onDark ? 'border-paper/15 text-paper/55' : 'border-ink/15 text-ink/55',
        )}
        style={delay(start + 0.9)}
      >
        {site.services.map((service, i) => (
          <li key={service} className="flex items-baseline gap-2">
            <span className={onDark ? 'text-sand/80' : 'text-clay'}>
              {String(i + 1).padStart(2, '0')}
            </span>
            {service}
          </li>
        ))}
      </ul>
    </div>
  )
}
