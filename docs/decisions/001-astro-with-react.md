# 001 — Astro, with React for interactive parts

**Date:** 2026-09-22
**Status:** accepted

## Context

The SPADES website is mostly text and photographs: teams, people, flagship events,
initiatives, partners. Almost none of it changes while a visitor is looking at it. A few
pieces do need to react — an Instagram carousel, a filter on a roster, a menu on mobile.

Two further constraints shaped the choice. The site must stay fast on Pakistani mobile
networks, which are often slow. And it gets handed to a new student roughly every year, so
the next person must be able to read the code and change it without a long ramp-up.

## Decision

Build the site with **Astro**, and use **React** only for the components that genuinely run
in the browser.

Astro renders every page to HTML at build time and ships no JavaScript by default. Where a
component needs to be interactive, we write it as a React component in
`src/components/islands/` and mark it with a `client:*` directive. Astro then sends the
JavaScript for that component alone — an "island" in an otherwise static page.

## Alternatives considered

**A React single-page app with Vite.** Familiar to most students, and one language
throughout. Rejected because it ships the whole application as JavaScript before showing
anything, which is slow on a weak connection, and because search engines and link previews
handle pre-rendered HTML more reliably. A content site does not need a client-side router.

**Next.js.** Powerful and widely used. Rejected as too much machinery for this site: the
App Router, server components, caching and rendering modes are a lot to learn, and a
handover every year makes that cost recur. Next.js earns its complexity when you have a
database and authenticated users. We have neither.

**A static site generator with no React at all** (Eleventy, Hugo). Genuinely simpler, and
tempting. Rejected because the few interactive pieces would then be hand-written plain
JavaScript, which is harder to hand over than a small React component.

## Consequences

- Pages arrive as HTML and render immediately, even on a slow connection.
- Most contributors only ever touch Markdown, CSS, and `.astro` files. React knowledge is
  needed for a small, clearly fenced-off folder.
- Astro's own component syntax is one more thing to learn, but it is close to HTML and the
  documentation is good.
- Anything needing a server at request time — form handling, a database, a login — does not
  fit this setup and would need a rethink. Nothing planned requires one.
