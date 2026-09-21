# SPADES website

The website of SPADES — the Society for the Promotion and Development of Engineering and
Sciences at LUMS, Lahore.

It is a static site: every page is built into plain HTML ahead of time, so there is no
server to run, nothing to log into, and nothing that can go down at 3am. Content lives in
Markdown and YAML files under `src/content/`, which means editing the website is editing
text files.

**Stack:** [Astro](https://astro.build) with React for the few pieces that need to run in
the browser, plain CSS, hosted on Vercel.

## Run it on your machine

You need [Node.js](https://nodejs.org) 24 and [Git](https://git-scm.com). If you use
`nvm`, run `nvm use` in this folder and it will pick the right version from `.nvmrc`.

```bash
git clone https://github.com/spades-lums/spades-website.git
cd spades-website
npm install
npm run dev
```

Open <http://localhost:4321>. Edit a file, save, and the page updates immediately.

## Commands

| Command           | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Start the local site with live reload                     |
| `npm run build`   | Build the finished site into `dist/`                      |
| `npm run preview` | Serve the built site, to check it before pushing          |
| `npm run verify`  | Everything CI runs: type-check, lint, format check, build |
| `npm run format`  | Reformat all files with Prettier                          |

**Run `npm run verify` before you push.** It runs exactly what GitHub Actions runs, so a
green result locally means a green tick on your pull request.

## Where things live

| Path                       | What's in it                                                                      |
| -------------------------- | --------------------------------------------------------------------------------- |
| `src/content/`             | All the site's words, as Markdown and YAML. Edit these to change the site         |
| `src/content.config.ts`    | The rules each content file must follow. A file that breaks them fails the build  |
| `src/pages/`               | One file per URL. `src/pages/about.astro` becomes `/about`                        |
| `src/components/layout/`   | Page shells, starting with `BaseLayout.astro`                                     |
| `src/components/ui/`       | Small reusable pieces: buttons, headings, photo tiles                             |
| `src/components/sections/` | Large page blocks, grouped by page type                                           |
| `src/components/islands/`  | React components that run in the browser. The only place browser JavaScript lives |
| `src/styles/`              | Design tokens, fonts, motion, and the global stylesheet                           |
| `src/assets/`              | Images, partner logos, and the hand-drawn SVG marks                               |
| `src/lib/`, `src/hooks/`   | Shared helpers — plain TypeScript, and React hooks                                |
| `public/`                  | Files served exactly as they are: the favicon, and PDFs under `public/files/`     |
| `scripts/`                 | Maintenance scripts run by hand, not part of the build                            |
| `docs/`                    | How everything works, and why                                                     |

Every folder has a short `README.md` (or `_README.md` inside `src/content/`) explaining what
belongs in it.

## Docs

- [CONTRIBUTING.md](CONTRIBUTING.md) — branches, pull requests, naming
- [docs/architecture.md](docs/architecture.md) — how content becomes pages
- [docs/content-guide.md](docs/content-guide.md) — how to edit the site without being a developer
- [docs/design-system.md](docs/design-system.md) — colours, type, components, and the design rules
- [docs/deployment.md](docs/deployment.md) — how the site gets published
- [docs/handover.md](docs/handover.md) — accounts, owners, and the yearly checklist
- [docs/decisions/](docs/decisions/) — why the project is built this way
- [CHANGELOG.md](CHANGELOG.md) — what changed, and when

## One rule above all

**This repository is public. Never commit anything secret.** API tokens go in Vercel's
environment variables. The members roster spreadsheet contains roll numbers and belongs in
the `private/` folder, which Git ignores. See
[docs/decisions/003-public-repo.md](docs/decisions/003-public-repo.md).
