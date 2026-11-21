import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { site, type HeroLook } from '@/site.config'
import { ApertureHero } from '@/components/site/hero-aperture'
import { WindowHero } from '@/components/site/hero-window'
import { HeroToggle } from '@/components/site/hero-toggle'
import { ContactSection } from '@/components/site/contact-section'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [look, setLook] = useState<HeroLook>(site.heroLook)

  function changeLook(next: HeroLook) {
    setLook(next)
    window.scrollTo({ top: 0 })
  }

  return (
    <main>
      {/* `key` remounts the hero so its opening animation replays on switch */}
      {look === 'aperture' ? (
        <ApertureHero key="aperture" />
      ) : (
        <WindowHero key="window" />
      )}
      <ContactSection />
      {site.showHeroToggle && <HeroToggle value={look} onChange={changeLook} />}
      <div aria-hidden className="grain" />
    </main>
  )
}
