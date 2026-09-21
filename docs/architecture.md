# Architecture

How a file in `src/content/` becomes a page on the internet.

> **Status:** outline only. To be written in full in Phase 2, once the first real page
> templates exist and there is something concrete to describe.

## The one-paragraph version

Content is text files. Astro reads them at build time, checks each one against a schema,
hands the data to a page template, and writes finished HTML into `dist/`. Vercel serves
that folder. Nothing runs on a server while a visitor is on the site.

## Content → templates → pages

_To be written in Phase 2._

Will cover: how a collection is defined in `src/content.config.ts`, how a page template
queries it with `getCollection()`, and how `getStaticPaths()` turns one template into many
pages.

## Collections and schemas

_To be written in Phase 2._

Will cover: each collection and its fields, why a schema failure stops the build, and how
to add a new collection.

## Routing

_To be written in Phase 2._

Will cover: how `src/pages/` maps to URLs, dynamic routes like `[slug].astro`, and how
content slugs line up with URLs.

## Components

_To be written in Phase 2._

Will cover: the split between `layout/`, `ui/`, `sections/` and `islands/`, and the rule
that `ui/` knows nothing about SPADES content.

## Islands: where JavaScript runs

_To be written in Phase 2._

Will cover: `client:load`, `client:visible` and `client:idle`, and how to decide whether a
piece needs to be interactive at all.

## Images and files

_To be written in Phase 2._

Will cover: why images go in `src/assets/` and PDFs go in `public/files/`, and what Astro
does to each.

## The build

_To be written in Phase 2._

Will cover: what `npm run build` produces, and what each step of `npm run verify` checks.
