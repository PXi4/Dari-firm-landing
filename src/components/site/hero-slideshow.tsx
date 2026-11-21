const slides = [
  '/hero/hero-slide-1.jpg',
  '/hero/hero-slide-2.jpg',
  '/hero/hero-slide-3.jpg',
  '/hero/hero-slide-4.jpg',
  '/hero/hero-slide-5.jpg',
]

/**
 * A slow, very low-opacity photo slideshow that sits behind the aperture
 * hero's color wash and blobs. It's deliberately muted — a hint of texture
 * and movement, not a photo gallery. Placeholder mood imagery, not real
 * project photography; swap these files once real project photos exist.
 */
export function HeroSlideshow() {
  return (
    <div aria-hidden className="hero-slideshow -z-10">
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="hero-slideshow-slide"
          style={{ '--i': i, '--count': slides.length } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
