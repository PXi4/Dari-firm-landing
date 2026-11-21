/**
 * Everything a studio owner is likely to change lives here.
 * Edit the values below, save, and redeploy — no other file needs touching.
 */

export type HeroLook = 'aperture' | 'window'

export const site = {
  /** Firm name, shown in the header, page title and footer. */
  name: 'Dari Studios',

  /** Short line used in the browser tab and link previews. */
  description:
    'Dari Studios is an architecture practice in Cologne designing homes, studios and quiet public rooms around daylight and honest materials.',

  /** Email visitors use to reach you. Shown in the hero and the contact section. */
  email: 'hello@dari-arch.studio',

  /** Optional phone number. Leave as '' to hide it. */
  phone: '',

  /** Optional location line. Leave as '' to hide it. */
  location: 'Cologne, Germany',

  /** Hero headline. The second line is set in italics. */
  headline: ['Rooms shaped', 'by daylight.'],

  /** One or two sentences under the headline. */
  intro:
    'An independent practice designing residential and commercial projects — drawn by hand, built with honest materials, and tuned to the light of each site.',

  /** Year the practice started, used in the small hero label. */
  founded: '2026',

  /** What you design — shown as a short list under the headline. */
  services: ['Residential', 'Commercial', 'Renovation & reuse'],

  /** Which hero animation visitors see first: 'aperture' or 'window'. */
  heroLook: 'aperture' as HeroLook,

  /**
   * Shows a small toggle in the corner so you can compare both hero looks.
   * Set to false once you have picked your favourite.
   */
  showHeroToggle: false,
}
