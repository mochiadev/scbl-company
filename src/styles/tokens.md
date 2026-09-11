# SCBL Design System — Token Reference

Three layers. Every value resolves, transitively, to one of the seven brand primitives. **No new colors.**

- **L1 Primitives** — the seven brand colors + two font families, in `@theme` in `global.css`.
- **L2 Semantic** — intent tokens (surface, text, border, accent, overlay), defined in `:root`.
- **L3 Component** — component recipes (button, input, card), defined in `:root`, each pointing at a semantic token.
- **Utilities** — short Tailwind-style aliases in `@layer utilities` so component markup stays readable.

Documented exceptions to the palette rule:
- `GridlineFrame.astro` uses `border-neutral-800/10` and `border-neutral-200/50` — the one structural break, kept as-is.
- `MeshGlow.astro` reads `--color-sc-gold` directly with a `intensity` prop — a deliberate primitive-level effect.

---

## L1 — Primitives

| Token | Value | Role |
|---|---|---|
| `--color-sc-navy` | `#050C16` | Canvas surface, deep ground |
| `--color-sc-gold` | `#CBA66C` | Primary accent |
| `--color-sc-gold-hi` | `#E6C882` | Accent hover / highlight |
| `--color-sc-gold-deep` | `#A0783C` | Subdued accent, chrome |
| `--color-sc-ivory` | `#F8F5F0` | Primary text on dark, ivory surface |
| `--color-sc-stone` | `#8C857A` | Muted text |
| `--color-sc-ink` | `#0E1116` | Primary text on light |
| `--font-display` | Playfair Display | Serif headings, editorial |
| `--font-body` | Inter Variable | Body, UI, tabular data |

---

## L2 — Semantic tokens

### Surface (navy scale)

| Token | Resolves to | Used by |
|---|---|---|
| `--sc-surface-canvas` | `sc-navy` | Page / dark card bg |
| `--sc-surface-veil-40` | `sc-navy` @ 40% | Hero gradient top |
| `--sc-surface-veil-50` | `sc-navy` @ 50% | ProjectCard image overlay |
| `--sc-surface-veil-60` | `sc-navy` @ 60% | SpecBlock bg, Hero gradient mid |
| `--sc-surface-elevated` | `sc-navy` @ 70% | Header (backdrop-blur) |
| `--sc-surface-elevated-strong` | `sc-navy` @ 95% | Header mega-menu bg |
| `--sc-surface-ivory` | `sc-ivory` | Ivory card, ivory section |
| `--sc-surface-ink` | `sc-ink` | Reserved deep-ink surface |

### Text

| Token | Resolves to | Used by |
|---|---|---|
| `--sc-text-primary-on-dark` | `sc-ivory` | Primary text on dark surfaces |
| `--sc-text-secondary-on-dark` | `sc-ivory` @ 85% | Secondary text on dark |
| `--sc-text-muted` | `sc-stone` | Muted metadata, lede, body-secondary |
| `--sc-text-muted-strong` | `sc-stone` @ 85% | Footer body text |
| `--sc-text-primary-on-light` | `sc-ink` | Primary text on ivory |
| `--sc-text-accent` | `sc-gold` | Primary accent color |
| `--sc-text-accent-hover` | `sc-gold-hi` | Accent hover state |
| `--sc-text-accent-subdued` | `sc-gold-deep` | Tabular labels, dates, eyebrow on ivory |
| `--sc-text-placeholder` | `sc-stone` @ 50% | Input placeholders |

### Border — dark surfaces

| Token | Resolves to | Used by |
|---|---|---|
| `--sc-border-chrome-dark` | `sc-gold-deep` @ 15% | Header top / mobile-menu dividers |
| `--sc-border-hairline-dark` | `sc-gold` @ 15% | PillarCard dark |
| `--sc-border-hairline-hi-dark` | `sc-gold` @ 20% | Mega-menu wrapper |
| `--sc-border-soft-dark` | `sc-gold-deep` @ 30% | InsightCard, ContactForm footer, SpecBlock divider |
| `--sc-border-firm-dark` | `sc-gold-deep` @ 40% | SpecBlock, ContactForm inputs, Footer top |

### Border — light surfaces

| Token | Resolves to | Used by |
|---|---|---|
| `--sc-border-hairline-light` | `sc-ink` @ 10% | PillarCard ivory |

### Border — accent

| Token | Resolves to | Used by |
|---|---|---|
| `--sc-border-accent` | `sc-gold` | CTA outline, hover / focus state |
| `--sc-border-accent-hi` | `sc-gold-hi` | CTA hover outline |
| `--sc-border-accent-soft` | `sc-gold` @ 40% | Hero secondary CTA |
| `--sc-border-accent-firm` | `sc-gold` @ 60% | SC monogram box |

### Accent scales

| Token | Resolves to | Used by |
|---|---|---|
| `--sc-accent-selection` | `sc-gold` @ 40% | `::selection` |
| `--sc-accent-divider` | `sc-gold-deep` @ 60% | `.hairline` utility |

### Overlays

| Token | Resolves to | Used by |
|---|---|---|
| `--sc-overlay-image-bottom` | `sc-navy` @ 50% | ProjectCard image gradient |

---

## L3 — Component tokens

### Button — primary (filled gold)

| Token | → | Semantic |
|---|---|---|
| `--sc-btn-primary-bg` | → | `--sc-text-accent` |
| `--sc-btn-primary-fg` | → | `--sc-surface-canvas` |
| `--sc-btn-primary-border` | → | `--sc-border-accent` |
| `--sc-btn-primary-bg-hover` | → | `--sc-text-accent-hover` |
| `--sc-btn-primary-border-hover` | → | `--sc-border-accent-hi` |

### Button — secondary (outlined)

| Token | → | Semantic |
|---|---|---|
| `--sc-btn-secondary-fg` | → | `--sc-text-primary-on-dark` |
| `--sc-btn-secondary-border` | → | `--sc-border-accent-soft` |
| `--sc-btn-secondary-border-hover` | → | `--sc-border-accent` |
| `--sc-btn-secondary-fg-hover` | → | `--sc-text-accent-hover` |

### Input (bottom-border textfield + textarea)

| Token | → | Semantic |
|---|---|---|
| `--sc-input-fg` | → | `--sc-text-primary-on-dark` |
| `--sc-input-border` | → | `--sc-border-firm-dark` |
| `--sc-input-border-focus` | → | `--sc-border-accent` |
| `--sc-input-placeholder` | → | `--sc-text-placeholder` |

### Card

| Token | → | Semantic |
|---|---|---|
| `--sc-card-surface-dark` | → | `--sc-surface-canvas` |
| `--sc-card-border-dark` | → | `--sc-border-hairline-dark` |
| `--sc-card-border-dark-hover` | → | `--sc-border-accent` |
| `--sc-card-surface-light` | → | `--sc-surface-ivory` |
| `--sc-card-border-light` | → | `--sc-border-hairline-light` |
| `--sc-card-border-light-hover` | → | `--sc-border-accent` |

---

## Utilities (Tailwind-style aliases)

### Surface

`sc-bg-canvas`, `sc-bg-veil-50`, `sc-bg-veil-60`, `sc-bg-elevated`, `sc-bg-elevated-strong`, `sc-bg-ivory`

### Text

`sc-text-primary`, `sc-text-primary-light`, `sc-text-secondary`, `sc-text-muted`, `sc-text-muted-strong`, `sc-text-accent`, `sc-text-accent-hover`, `sc-text-accent-subdued`

### Border

`sc-border-chrome`, `sc-border-hairline`, `sc-border-hairline-hi`, `sc-border-soft`, `sc-border-firm`, `sc-border-hairline-light`, `sc-border-accent`, `sc-border-accent-soft`, `sc-border-accent-firm`

### Component recipes

`sc-btn-primary` · `sc-btn-secondary` · `sc-input` · `sc-textarea` · `sc-card-dark` · `sc-card-ivory` · `sc-overlay-hero` · `sc-overlay-scrim` · `sc-overlay-image-bottom-to-top` · `sc-link-accent` · `sc-chip-active` · `sc-chip-inactive` · `sc-bg-line` · `sc-bg-line-light`

- `sc-overlay-scrim` — heavier gradient variant (`veil-60 → elevated → canvas`), used behind pillar heroes where hero image contrast needs more suppression than the standard `sc-overlay-hero`.
- `sc-link-accent` — gold link with hover to gold-hi; use on wayfinding links (next-pillar / next-project / next-essay).
- `sc-chip-active` / `sc-chip-inactive` — the two states of a filter pill (portfolio filter). JS toggles between the two class names.
- `sc-bg-line` / `sc-bg-line-light` — the "gap-px grid" divider trick: sets the container background to a divider color so the `gap-px` between cells reads as thin hairlines. Dark variant uses `--sc-border-soft-dark`; light variant uses `--sc-border-hairline-light`.

### Typographic recipes (existing)

`eyebrow` — uppercase, 0.18em tracking, gold, 0.72rem
`tabular` — tabular-nums, uppercase, 0.08em tracking
`hairline` — 1px full-width gold-deep divider
`gold-underline` — animated underline that expands on hover
`font-display`, `font-body`

### Motion

`sc-reveal` — opacity/translate transition wrapper (see `Reveal.astro`)

---

## When you need a color that isn't in this list

**Don't invent one.** The palette is locked at seven primitives. Options in order of preference:

1. Use an existing semantic token that carries the same *intent* (e.g. don't add a new "muted-2" — use `sc-text-muted` or `sc-text-muted-strong`).
2. Compose from an existing primitive via `color-mix(in oklab, var(--color-sc-*) N%, transparent)` at the L2 layer, and add a named token so the intent is documented.
3. If nothing fits, the design almost certainly needs a rethink, not a new hex value.

## Hover / focus in markup

Utility classes cover default states. For hover/focus, use Tailwind's arbitrary-value syntax pointing at a semantic token so intent stays visible:

```html
<a class="sc-text-primary hover:text-[color:var(--sc-text-accent-hover)]">…</a>
<div class="sc-border-soft hover:border-[color:var(--sc-border-accent)]">…</div>
```

Do not write `hover:text-sc-gold-hi` in component markup — that reintroduces a raw-primitive dependency.

## Palette-audit rule

Grep for `sc-navy`, `sc-gold`, `sc-ivory`, `sc-ink`, `sc-stone`, `sc-gold-hi`, `sc-gold-deep` across `src/components/`. Expected hits: `GridlineFrame.astro` (documented exception) and `MeshGlow.astro` (parameterised primitive). Anything else is a token miss — replace with a semantic token or utility alias.
