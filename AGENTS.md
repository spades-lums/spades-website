# Rules for AI coding assistants

`CLAUDE.md` is a symlink to this file, so Claude Code, Cursor, Copilot and the rest all read
the same rules.

Read [README.md](README.md) and [CONTRIBUTING.md](CONTRIBUTING.md) too. This file lists what
you must not get wrong.

## What this is

The website of SPADES, a student society at LUMS in Lahore. It is handed to a new student
roughly every year, so **prefer boring and well-documented over clever**. If a newcomer
would have to look something up to understand your change, choose the other approach.

## Stack

- **Astro**, TypeScript in strict mode, `output: 'static'`. Everything is built to HTML
  ahead of time.
- **React** through `@astrojs/react`, used only for components that must run in the browser.
- **Plain CSS**: custom properties for tokens, and Astro's scoped `<style>` blocks in
  components. No Tailwind. No CSS-in-JS. Do not add either.
- **Content** as Markdown and YAML in `src/content/`, validated by Zod schemas in
  `src/content.config.ts`.
- **Hosting** on Vercel, static, with no Astro adapter. Do not add `@astrojs/vercel` — see
  [docs/decisions/002-vercel-hosting.md](docs/decisions/002-vercel-hosting.md).
- **npm**, and Node 24 as pinned in `.nvmrc`.

The reasoning behind each choice is in [docs/decisions/](docs/decisions/). Do not revisit
these without being asked to.

## Where code goes

| Folder                     | Rule                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `src/content/`             | All content. The only place words and content data live                                                                          |
| `src/assets/images/`       | All images used in pages. Mirrors the content structure                                                                          |
| `public/files/`            | Files served as-is, such as PDFs                                                                                                 |
| `src/components/islands/`  | React `.tsx`. **The only place browser JavaScript lives**                                                                        |
| `src/components/ui/`       | Small generic `.astro` pieces. **Must know nothing about SPADES** — no imports from `src/content/`, no mention of PsiFi or teams |
| `src/components/sections/` | Page blocks, grouped by page type. May read content                                                                              |
| `src/components/layout/`   | Page shells                                                                                                                      |
| `src/lib/`                 | Plain TypeScript helpers. No React, no rendering                                                                                 |
| `src/hooks/`               | React hooks shared by more than one island                                                                                       |
| `scripts/`                 | Hand-run maintenance scripts. Nothing in `src/` may import from here                                                             |

Every folder has a `README.md` — or `_README.md` inside `src/content/`, because Astro's
loaders ignore files starting with `_`. Keep them accurate.

## Naming

- Folders and files: `kebab-case`
- Components: `PascalCase.astro`, `PascalCase.tsx`
- Content slugs match URLs: `teams/3d-printers.md` → `/teams/3d-printers`
- CSS variables are named by role, not by colour: `--color-accent-on-dark`, never
  `--color-light-blue`

## Styling

**Use tokens. Never write a raw hex value, `font-family`, or magic number in a component.**
All tokens live in `src/styles/tokens.css`. If a value you need does not exist, add a token
there — do not inline it.

Spacing is in multiples of 8: `8px`, `16px`, `24px`, `32px`, `40px`, `48px`.

### Design rules — do not violate these

- No pill shapes. Slight rounding only (`--radius-sm`, `--radius-md`)
- No glowing dots, and no glow effects
- No glassmorphism — nothing frosted, blurred or translucent
- No gradient buttons. Buttons are a flat token colour
- No grid-line backgrounds, grid textures, dot grids or blueprint patterns
- No tiny uppercase eyebrow labels above headings
- No text below about 13px, anywhere
- Equal-weight tiles in mosaics. No team gets a bigger tile than another
- Motion stays subtle and honours `prefers-reduced-motion`
- The custom cursor is off on touch screens

Full context: [docs/design-system.md](docs/design-system.md).

## Security

**This repository is public.** See
[docs/decisions/003-public-repo.md](docs/decisions/003-public-repo.md).

- Never commit a token, key, password or `.env` file. Secrets belong in Vercel's environment
  variables
- **Never commit roll numbers.** The members roster spreadsheet stays in `private/`, which
  Git ignores. Nothing in `src/` may contain a roll number, phone number, personal email
  address or CNIC
- Only publish personal information the person has agreed to publish

## Before you finish

1. Run **`npm run verify`** and make sure it passes. It runs `astro check`, ESLint,
   Prettier's check, and the build — the same four things CI runs
2. **Update the docs in the same change.** If you change how something works, fix the
   `README.md`, the folder README, or the page in `docs/` that describes it, now — not later
3. Add a [CHANGELOG.md](CHANGELOG.md) entry for anything worth remembering in a year
4. Work on a branch and open a pull request. Never push to `main`

## Scope

Do what was asked. Do not add dependencies, build real pages, restructure folders or
"improve" unrelated code unless you were asked to. If a decision seems wrong, say so in a
sentence and then do what was asked.
