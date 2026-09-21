# 002 — Vercel for hosting, with no Astro adapter

**Date:** 2026-09-22
**Status:** accepted

## Context

The site needs somewhere to live. It must cost nothing, publish itself when we push to
GitHub, and later sit behind a LUMS domain. Whoever inherits the project should be able to
work out how a change reaches the internet within five minutes.

## Decision

Host on **Vercel**, on the free Hobby plan, connected to the GitHub repository.

Pushing to `main` publishes to production. Every pull request gets its own preview URL,
which makes "a screenshot in the pull request" easy and lets people review a real page
rather than a diff.

**Do not install `@astrojs/vercel`.** The site is configured with `output: 'static'`, so
`npm run build` produces a folder of plain HTML, CSS, JavaScript and images. Vercel detects
Astro, runs that build, and serves the folder. An adapter exists to run Astro _on_ Vercel's
servers — for server-side rendering, API endpoints, or on-demand image work. We do none of
that. Adding the adapter would introduce a dependency to maintain and a running function to
reason about, in exchange for nothing.

Install it only when something concrete needs it: a route switched to server rendering, a
form posting to an endpoint, or Vercel's image optimisation. Until then, its absence is the
point.

## Alternatives considered

**GitHub Pages.** Free, and already where the code is. Rejected for weaker preview builds
(no per-pull-request URL without extra workflow code) and clumsier custom-domain and
redirect handling.

**Netlify.** Close to equivalent, and would have worked. Vercel was chosen for its Astro
detection and because more people around us have used it, which matters at handover. This
decision is cheap to reverse: a static folder deploys anywhere.

**Cloudflare Pages.** Excellent free tier and fast in this region. Kept in mind as the
first alternative if Vercel's free plan changes.

## Consequences

- No server to maintain, and no hosting bill.
- The site is only as available as Vercel's free plan. Since the output is a plain folder of
  files, moving elsewhere means pointing another host at the same repository.
- Vercel's free plan cannot deploy private repositories owned by a GitHub organisation,
  which is why the repository is public — see [003](003-public-repo.md).
- A build only runs when something is pushed. Content that must refresh on a schedule needs
  a scheduled rebuild, set up when we get there.
