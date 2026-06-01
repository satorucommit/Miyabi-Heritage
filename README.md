# Miyabi Heritage 雅

> *Miyabi (雅) — elegance, refinement, and courtliness*

A visually immersive, multi-page web experience exploring the timeless beauty of traditional Japanese culture. Built with Next.js 16 and React 19, the project features a fully custom animation system — from a hand-drawn Ensō loading screen to magnetic buttons and shoji-door page transitions — all without any third-party animation libraries.

---

## Live Preview

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, intro grid, historical eras |
| Traditional Arts | `/arts` | Chadō, Ikebana, Shodō, Bonsai, Origami, Noh |
| Architecture | `/architecture` | Pagodas, Shrines, Castles, Machiya, Zen Gardens, Teahouses |
| Philosophy | `/philosophy` | Wabi-Sabi, Kintsugi, Zen, Mono no Aware, Ikigai, Kaizen |

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.6 | Framework — App Router, file-based routing, SSR metadata |
| [React](https://react.dev/) | 19.2.4 | UI rendering |
| [ESLint](https://eslint.org/) | ^9 | Linting via `eslint-config-next` |

**Fonts (Google Fonts via `next/font`)**
- `Inter` — body text (`--font-primary`)
- `Outfit` — display headings (`--font-display`)
- `Noto Serif JP` — Japanese kanji characters (`--font-kanji`)

**No external animation libraries.** All motion is implemented with native CSS transitions, `IntersectionObserver`, and the Web Animations API.

---

## Features

### Custom Cursor
A two-layer cursor replaces the system default. A small crimson dot tracks the mouse precisely, while a larger outlined ring follows with a slight lag. On hover over interactive elements (links, buttons, cards), the dot collapses and the ring expands with a blur backdrop effect.

### Loading Screen (Ensō)
On first visit, an animated SVG Ensō circle is drawn using `strokeDashoffset` animation. After 2.5 seconds, the path dissolves into 100 DOM particles that burst outward using the Web Animations API. The screen fades out at 4.5 seconds, revealing the site.

### Shoji Door Page Transitions
Route changes trigger two full-height panels that slide in from the left and right (mimicking traditional Japanese sliding shoji screens), briefly revealing the 雅 kanji at center, then slide back out to reveal the new page. Implemented in `TransitionWrapper` using `usePathname`.

### Magnetic Buttons & Links
`MagneticButton` and `MagneticLink` track the cursor position relative to the element's bounding box and apply a `translate` transform at 30% of the offset — creating a subtle gravitational pull effect. On mouse leave, the element snaps back with a `cubic-bezier(0.23, 1, 0.32, 1)` spring.

### Scroll Reveal Animations
`ScrollReveal` wraps any content and uses `IntersectionObserver` (threshold: 10%) to trigger a fade-up animation when the element enters the viewport. Supports a configurable `delay` prop (in ms) for staggered reveals.

### Glassmorphism Design System
A consistent design language built on CSS custom properties:
- Deep dark backgrounds (`#0a0a0f`, `#12121a`, `#1a1a26`)
- Crimson accent (`#dc143c`) with glow effects
- Gold accent (`#d4af37`) for labels and highlights
- Glass panels with `backdrop-filter: blur(20px)` and subtle borders
- Film grain overlay via SVG `feTurbulence` filter at 3% opacity

### Responsive Layout
- 12-column bento grid for arts and eras sections
- 3-column grid for architecture and philosophy cards
- Full single-column stacking on tablet (`≤1024px`) and mobile (`≤768px`)
- Navbar links hidden on mobile

---

## Project Structure

```
Miyabi Heritage/
├── public/
│   └── assets/
│       ├── hero.png
│       └── tea.png               # Used in Chadō featured card
├── src/
│   ├── app/
│   │   ├── layout.js             # Root layout — fonts, metadata, CustomCursor, TransitionWrapper
│   │   ├── globals.css           # Full design system — tokens, components, animations, responsive
│   │   ├── page.js               # Home — hero, intro grid (3 cards), historical eras (bento)
│   │   ├── arts/
│   │   │   └── page.js           # 6 art forms in a 12-col bento grid with kanji watermarks
│   │   ├── architecture/
│   │   │   └── page.js           # 6 structures in a 3-col card grid with gradient backgrounds
│   │   └── philosophy/
│   │       └── page.js           # 6 philosophies in a 3-col capabilities grid
│   └── components/
│       ├── CustomCursor.js       # Two-layer cursor with hover state detection
│       ├── LoadingScreen.js      # SVG Ensō draw animation + particle burst
│       ├── TransitionWrapper.js  # Shoji door transitions + Navbar + Footer wrapper
│       ├── Navigation.js         # Fixed navbar with scroll-aware glass effect
│       ├── Footer.js             # Brand, newsletter input, nav columns, legal links
│       ├── MagneticButton.js     # <button> with magnetic cursor pull
│       ├── MagneticLink.js       # Next.js <Link> with magnetic cursor pull
│       └── ScrollReveal.js       # IntersectionObserver fade-up wrapper
├── next.config.mjs
├── eslint.config.mjs
├── jsconfig.json                 # Path alias: @/ → src/
└── package.json
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Design Tokens

All design values are defined as CSS custom properties in `globals.css`:

```css
--miyabi-bg-deep: #0a0a0f;
--miyabi-bg-charcoal: #12121a;
--miyabi-crimson: #dc143c;
--miyabi-gold: #d4af37;
--miyabi-text-primary: #e8e6e3;
--miyabi-text-secondary: #9a9a9a;
--glass-bg: rgba(255, 255, 255, 0.03);
--glass-border: rgba(255, 255, 255, 0.08);
--glass-blur: 20px;
```

---

## Page Metadata

Each route exports its own `metadata` object for SEO:

| Route | Title | Description |
|---|---|---|
| `/` | Miyabi Heritage | Preserving the elegance of traditional Japan |
| `/arts` | Traditional Arts - Miyabi Heritage | The Disciplines of Harmony |
| `/architecture` | Architecture - Miyabi Heritage | Monuments of Wood and Spirit |
| `/philosophy` | Philosophy - Miyabi Heritage | Philosophies of the East |

---

## Deployment

Deploy instantly on [Vercel](https://vercel.com/new) — zero configuration required for Next.js App Router projects.

```bash
npm run build   # Verify production build locally first
```

For other platforms, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Content Reference

### Traditional Arts (`/arts`)
| Kanji | Name | Theme |
|---|---|---|
| 茶 | Chadō | The Way of Tea — Wa, Kei, Sei, Jaku |
| 花 | Ikebana | Flower arrangement, negative space |
| 書 | Shodō | Calligraphy as active meditation |
| 盆 | Bonsai | Miniature trees, decades of patience |
| 折 | Origami | Single-sheet paper sculpture |
| 能 | Noh Theater | Oldest major theater art still performed |

### Architecture (`/architecture`)
| Name | Kanji | Highlight |
|---|---|---|
| Pagodas | 塔 | Shinbashira central pillar absorbs earthquakes |
| Shinto Shrines | 神社 | Rebuilt identically every 20 years |
| Castles | 城 | Curving stone foundations, defensive design |
| Machiya | 町屋 | Kyoto townhouses with tsuboniwa gardens |
| Zen Gardens | 枯山水 | Raked sand as water, rocks as islands |
| Teahouses | 茶室 | Nijiriguchi entrance forces all guests to bow |

### Philosophy (`/philosophy`)
| Name | Kanji | Core Idea |
|---|---|---|
| Wabi-Sabi | 侘 | Beauty in imperfection and impermanence |
| Kintsugi | 金 | Repair with gold — breakage as history |
| Zen | 禅 | Zazen meditation, minimalist influence |
| Mono no Aware | 哀 | Wistful appreciation of transience |
| Ikigai | 甲 | Reason for being — purpose at the intersection |
| Kaizen | 改 | Continuous improvement, shokunin dedication |
