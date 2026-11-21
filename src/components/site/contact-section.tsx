import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { toast } from 'sonner'

import { site } from '@/site.config'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      toast.success('Email address copied')
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      toast.error('Couldn’t copy — select the address to copy it instead')
    }
  }

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent('A project enquiry')}`

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-8 bg-paper text-ink"
    >
      <div className="mx-auto grid max-w-content gap-12 px-6 py-24 sm:px-10 md:grid-cols-12 md:py-32">
        <div className="flex flex-col gap-5 md:col-span-4">
          <p className="text-xs font-medium tracking-[0.24em] text-clay uppercase">
            Reach us
          </p>
          <h2
            id="contact-heading"
            className="font-display text-4xl leading-[1.05] sm:text-5xl"
          >
            Tell us about <span className="italic">your site.</span>
          </h2>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            A plot, a tired house, a room you can’t stop thinking about — send
            a few lines and a photo or two. We reply to every message within two
            working days.
          </p>
        </div>

        <div className="flex flex-col justify-end gap-8 md:col-span-8">
          <a
            href={mailto}
            className="group relative w-fit max-w-full rounded-sm font-display text-[clamp(2rem,6.4vw,5.5rem)] leading-none break-words focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {site.email}
            <span
              aria-hidden
              className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-[0.18] bg-clay transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
            />
          </a>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={mailto}
              className="inline-flex h-12 items-center gap-2.5 rounded-full bg-ink px-6 text-sm font-medium text-paper transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-ink-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-paper focus-visible:outline-none active:translate-y-0 motion-reduce:transition-none"
            >
              <Mail className="size-4" aria-hidden />
              Write to us
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex h-12 items-center gap-2.5 rounded-full border border-ink/20 px-6 text-sm font-medium transition-colors duration-300 hover:border-ink hover:bg-ink/5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:bg-ink/10 motion-reduce:transition-none"
            >
              {copied ? (
                <Check className="size-4 text-clay" aria-hidden />
              ) : (
                <Copy className="size-4" aria-hidden />
              )}
              {copied ? 'Copied' : 'Copy address'}
            </button>
          </div>

          {(site.phone || site.location) && (
            <dl className="grid gap-6 border-t border-ink/15 pt-6 text-sm sm:grid-cols-2">
              {site.phone && (
                <div className="flex flex-col gap-1">
                  <dt className="text-xs tracking-[0.12em] text-muted-foreground uppercase">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={`tel:${site.phone.replace(/\s+/g, '')}`}
                      className="rounded-sm hover:text-clay focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
              )}
              {site.location && (
                <div className="flex flex-col gap-1">
                  <dt className="text-xs tracking-[0.12em] text-muted-foreground uppercase">
                    Studio
                  </dt>
                  <dd>{site.location}</dd>
                </div>
              )}
            </dl>
          )}
        </div>
      </div>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Architecture &amp; Interiors</p>
        </div>
      </footer>
    </section>
  )
}
