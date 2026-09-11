# Signature Crest Builders — Website

Premium marketing site for Signature Crest Builders Limited (SCBL). Built with Astro 7, Tailwind v4, and vanilla-JS islands. Zero React. Static output — host-agnostic (deploys unchanged to Cloudflare Pages, Vercel, Netlify, or any static CDN).

## Development

All commands run from `website/`.

| Command         | Action                                          |
| :-------------- | :---------------------------------------------- |
| `pnpm install`  | Install dependencies                            |
| `pnpm dev`      | Start local dev server at `localhost:4321`      |
| `pnpm build`    | Build the production site to `./dist/`          |
| `pnpm preview`  | Preview the built site locally                  |
| `pnpm astro …`  | Run Astro CLI commands (e.g. `astro check`)     |

## Stack

- **Astro 7** (static output, no adapter)
- **TypeScript strict** (`astro/tsconfigs/strict`)
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **astro-icon** with `@iconify-json/lucide` and `@iconify-json/ph` (Phosphor)
- **Motion** + **Lenis** for animation and smooth scroll
- **Fontsource** self-hosted Playfair Display + Inter Variable
- **Sharp** for `<Image />` / `<Picture />`

## Structure

```
src/
├── components/     Header, Footer (stubs — full components added post-scaffold)
├── content/        Content collections (services, portfolio, insights)
├── layouts/        BaseLayout.astro
├── pages/          Route files
└── styles/         global.css (Tailwind v4 + @theme brand tokens)
```

## Brand tokens

Defined in `src/styles/global.css` under `@theme`:

```
--color-sc-navy      #050C16
--color-sc-gold      #CBA66C
--color-sc-gold-hi   #E6C882
--color-sc-gold-deep #A0783C
--color-sc-ivory     #F8F5F0
--color-sc-stone     #8C857A
--color-sc-ink       #0E1116
```

Use as Tailwind utilities: `bg-sc-navy`, `text-sc-gold`, etc.
