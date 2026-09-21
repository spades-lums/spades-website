# Changelog

What changed on this website, newest first. Add an entry whenever you merge something worth
remembering in a year's time. Dates are the date of merge, `YYYY-MM-DD`.

## 2026-09-22 — Project set up

First commit of real work. No public pages yet beyond a placeholder.

- Astro with TypeScript in strict mode, building a fully static site
- React added through `@astrojs/react`, for future browser-side components only
- Sitemap generated at build time
- Prettier, ESLint (flat config), and EditorConfig
- `npm run verify` — type-check, lint, format check, and build in one command
- GitHub Actions runs `npm run verify` on every pull request and on pushes to `main`
- Node 24 pinned in `.nvmrc` and `package.json`
- Folder skeleton for content, components, styles, assets and docs, each folder documented
- Design tokens for colour, radius and type; fonts self-hosted through Fontsource
- `instagram` content collection, validated against a schema
- Placeholder homepage and 404 page
- README, CONTRIBUTING, CLAUDE.md, three decision records, and the docs skeleton
