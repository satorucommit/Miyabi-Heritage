# Miyabi Heritage 雅

A visually immersive web experience exploring the timeless elegance of traditional Japanese culture — its arts, architecture, and philosophy.

## Overview

Miyabi (雅) translates to *elegance, refinement, and courtliness*. This project brings that concept to life through a modern, animated web interface covering:

- **Arts** — Tea ceremony, calligraphy, and the mastery of traditional disciplines
- **Architecture** — Shrines, temples, and pagodas in harmony with nature
- **Philosophy** — Zen, Wabi-Sabi, Kintsugi, and the Japanese worldview

## Tech Stack

- [Next.js 16](https://nextjs.org/) — App Router
- [React 19](https://react.dev/)
- Custom components: magnetic buttons, scroll reveal animations, loading screen, page transitions, and a custom cursor

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.js           # Home — hero, intro grid, historical eras
│   ├── arts/             # Japanese arts section
│   ├── architecture/     # Architecture section
│   ├── philosophy/       # Philosophy section
│   └── layout.js         # Root layout with navigation & footer
└── components/
    ├── CustomCursor.js
    ├── MagneticButton.js
    ├── MagneticLink.js
    ├── ScrollReveal.js
    ├── TransitionWrapper.js
    ├── LoadingScreen.js
    ├── Navigation.js
    └── Footer.js
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

Deploy instantly on [Vercel](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
