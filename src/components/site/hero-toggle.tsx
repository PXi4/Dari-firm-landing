import type { HeroLook } from '@/site.config'
import { cn } from '@/lib/utils'

const looks: { id: HeroLook; label: string }[] = [
  { id: 'aperture', label: 'Aperture' },
  { id: 'window', label: 'Window' },
]

/** Small corner control for comparing the two hero looks. */
export function HeroToggle({
  value,
  onChange,
}: {
  value: HeroLook
  onChange: (look: HeroLook) => void
}) {
  return (
    <div
      role="group"
      aria-label="Hero look"
      className="fade fixed right-4 bottom-4 z-40 flex items-center gap-1 rounded-full border border-ink/10 bg-paper/85 p-1 text-xs text-ink shadow-[0_8px_30px_-12px_oklch(0.2_0.01_60/0.45)] backdrop-blur-md sm:right-6 sm:bottom-6"
      style={{ '--d': '2.4s' } as React.CSSProperties}
    >
      <span className="hidden pr-1 pl-3 text-ink/50 sm:inline">Look</span>
      {looks.map((look) => (
        <button
          key={look.id}
          type="button"
          aria-pressed={value === look.id}
          onClick={() => onChange(look.id)}
          className={cn(
            'rounded-full px-3.5 py-2 font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none motion-reduce:transition-none',
            value === look.id
              ? 'bg-ink text-paper'
              : 'text-ink/60 hover:bg-ink/5 hover:text-ink',
          )}
        >
          {look.label}
        </button>
      ))}
    </div>
  )
}
