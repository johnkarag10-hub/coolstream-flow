# Polarfreeze — HydroCore Immersion Cooling Fluids

Marketing site for **Polarfreeze**, a supplier of **HydroCore** dielectric immersion
cooling fluids for AI, hyperscale, colocation, edge and crypto data centers.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS v3 + shadcn/ui
- React Router

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:8080`.

## Build

```bash
npm run build
npm run preview
```

The production bundle is emitted to `dist/`.

## Deployment

The site is a static SPA and can be deployed to any static host:

- **Netlify** — drop the repo into Netlify, build command `npm run build`, publish
  directory `dist`. The included `public/_redirects` file handles SPA routing,
  and the contact form is wired to **Netlify Forms** (no backend required).
- **Vercel / Cloudflare Pages** — same build command and output directory.
  Add an SPA fallback rewrite of `/*` → `/index.html`.
- **Lovable hosting** — click **Publish** in the Lovable editor.

### Custom domain

Point an `A` record (or `CNAME` for `www`) at your hosting provider per
their instructions, then add the domain in the host's dashboard.

## Project structure

```
src/
  components/site/   Marketing sections (Hero, Products, FAQ, ...)
  components/ui/     shadcn/ui primitives
  pages/             Route components
  assets/            Images
  index.css          Design tokens (HSL) + utilities
```

## Design system

All colors are HSL tokens defined in `src/index.css` and surfaced through
`tailwind.config.ts`. Components must use semantic tokens
(`bg-background`, `text-primary`, etc.) — never hard-coded colors.
