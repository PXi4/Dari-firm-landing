# Moraine Studio — landing page

A one-page website for a small, new architecture practice: a full-screen animated hero and a "Reach us" section with the studio's email address.

When the page loads, the hero opens with a light effect and then keeps a slow, floating gradient moving in the background. There are two hero looks to choose from:

- **Aperture** — a thin slit of light draws down a dark page, then swings open like a pivot door to reveal warm clay, sand and rose colour fields that drift indefinitely.
- **Window** — on warm paper, the outline of an arched window draws itself, a blind rises to reveal moving daylight inside the glass, and a soft patch of light sways across the floor.

Visitors who prefer reduced motion see the opened, finished state straight away.

## Editing the content

Everything you are likely to change is in **`src/site.config.ts`**:

| Setting          | What it does                                                     |
| ---------------- | ---------------------------------------------------------------- |
| `name`           | Firm name in the header, footer and browser tab                  |
| `email`          | Contact address used in the hero and the "Reach us" section      |
| `phone`          | Optional phone number (leave `''` to hide)                       |
| `location`       | Optional studio/location line (leave `''` to hide)               |
| `headline`       | The two hero lines; the second one is set in italics             |
| `intro`          | The sentence under the headline                                  |
| `services`       | The short numbered list at the bottom of the hero                |
| `heroLook`       | Which look visitors see: `'aperture'` or `'window'`              |
| `showHeroToggle` | Shows the corner toggle for comparing looks — set `false` when done |

## Tech

- [TanStack Start](https://tanstack.com/start) (React 19) with Vite
- Tailwind CSS 4; animations are plain CSS keyframes (no animation library)
- Fonts: Instrument Serif (headings) and Schibsted Grotesk (body) from Google Fonts
- Deployed on Netlify

## Running locally

```bash
pnpm install
netlify dev      # or: pnpm dev
```

Then open the URL printed in the terminal.
