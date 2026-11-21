import { site } from '@/site.config'
import { cn } from '@/lib/utils'

export function SiteHeader({ tone }: { tone: 'dark' | 'light' }) {
  const onDark = tone === 'dark'
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-6 sm:px-10">
        <a
          href="/"
          className={cn(
            'fade flex items-baseline gap-2 rounded-sm text-sm font-semibold tracking-[0.18em] uppercase focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
            onDark ? 'text-paper' : 'text-ink',
          )}
          style={{ '--d': '0.4s' } as React.CSSProperties}
        >
          <LogoMark />
          {site.name}
        </a>
        <a
          href="#contact"
          className={cn(
            'fade group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none motion-reduce:transition-none',
            onDark
              ? 'border-paper/25 text-paper hover:bg-paper hover:text-ink'
              : 'border-ink/20 text-ink hover:bg-ink hover:text-paper',
          )}
          style={{ '--d': '0.6s' } as React.CSSProperties}
        >
          Reach us
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none"
          >
            ↓
          </span>
        </a>
      </div>
    </header>
  )
}

/** A small abstract mark: three stacked lines stepping down. */
function LogoMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 14"
      className="h-3 w-[1.15rem] self-center"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M1 13 L7 3 L11 8 L14 5 L19 13" />
    </svg>
  )
}
