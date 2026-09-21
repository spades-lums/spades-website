# Design system

The design is finished in Figma:
<https://www.figma.com/design/okIDwRWlLTGl10VbBji7D0> (Page 1).

> **Status:** partial. The colour, radius and font tokens below are real and in use. Type
> scale, spacing, and the component catalogue are to be written in Phase 2, alongside the
> `/styleguide` page.

## The one rule

**Every colour, radius and font in a component comes from a token.** No raw hex values, no
`font-family` declarations, no magic numbers, anywhere outside `src/styles/`. If you need a
value that does not exist, add a token — do not inline it.

This is what keeps the site coherent as five different people edit it over three years, and
it is what makes a retune a one-file change instead of a search-and-replace.

## Colour tokens

Defined in [`src/styles/tokens.css`](../src/styles/tokens.css). Named by **role**, not by
appearance, so the name stays true if the value is retuned.

| Token                     | Value     | Use                                              |
| ------------------------- | --------- | ------------------------------------------------ |
| `--color-bg-deep`         | `#07142F` | Heroes, nav, footer                              |
| `--color-ink`             | `#0B1D45` | Main dark; headings and body text on light       |
| `--color-bg`              | `#F2F5FA` | Main light background                            |
| `--color-bg-alt`          | `#E7EEF8` | Alternate light sections, to separate neighbours |
| `--color-accent-on-dark`  | `#7FD6FF` | Primary buttons, accent words on dark            |
| `--color-accent-on-light` | `#1B5FD1` | Accents on light, hand-drawn marks, links        |
| `--color-muted-on-light`  | `#4E5E7E` | Secondary text on light                          |
| `--color-muted-on-dark`   | `#AFC0DD` | Secondary text on dark                           |
| `--color-text-on-deep`    | `#FFFFFF` | Headings and primary text on deep navy           |

Pair each accent with its own background. `--color-accent-on-dark` on a light background
fails contrast, and so does the reverse.

## Radius

| Token         | Value  | Use                    |
| ------------- | ------ | ---------------------- |
| `--radius-sm` | `6px`  | Buttons, chips, inputs |
| `--radius-md` | `10px` | Cards, photos, panels  |

## Type

| Token           | Font                     | Use               |
| --------------- | ------------------------ | ----------------- |
| `--font-sans`   | Manrope (variable)       | Everything        |
| `--font-accent` | Instrument Serif, italic | Accent words only |

Both are self-hosted through Fontsource, so nothing is fetched from Google at runtime. See
[`src/styles/fonts.css`](../src/styles/fonts.css).

Instrument Serif is a highlight, not a second body font. Use it on a word or a short phrase
inside a heading, never on a paragraph, and always in italic.

## Spacing

_To be written in Phase 2._ Until then, use multiples of 8: `8px`, `16px`, `24px`, `32px`,
`40px`, `48px`.

## Design rules

These are the decisions that keep the site looking like itself. They are also repeated in
`AGENTS.md`, so that AI assistants follow them.

**Don't:**

- **No pill shapes.** Nothing gets a fully rounded `border-radius`. Slight rounding only —
  `--radius-sm` or `--radius-md`.
- **No glowing dots** or glow effects of any kind.
- **No glassmorphism.** No frosted, blurred or translucent panels.
- **No gradient buttons.** Buttons are a flat token colour.
- **No grid-line backgrounds** and no grid textures, dot grids or blueprint patterns.
- **No tiny uppercase eyebrow labels** above headings.
- **No text below about 13px**, anywhere, including captions and footnotes.

**Do:**

- **Equal-weight tiles in mosaics.** Every team gets the same size tile. No team is featured
  over another — that is a political decision, not a design one.
- **Keep motion subtle,** and always honour `prefers-reduced-motion`. The global rule in
  [`src/styles/motion.css`](../src/styles/motion.css) handles the second part; the first
  is your judgement.
- **Turn the custom cursor off on touch screens.** There is no cursor to replace on a phone,
  and the effect costs performance for nothing.

## Component catalogue

_To be written in Phase 2,_ alongside a `/styleguide` page rendering every component with
its variants. Planned first set: Nav, Footer, Button, Heading, PhotoTile, Mosaic.

## Accessibility

_To be written in Phase 2._ The non-negotiables already in place:

- Text and background must meet WCAG AA contrast (4.5:1 for body text).
- Every interactive element keeps a visible focus outline — see `:focus-visible` in
  [`src/styles/global.css`](../src/styles/global.css).
- Every image carries meaningful alt text, or `alt=""` if it is purely decorative.
- Everything usable with a mouse must be usable with a keyboard.
