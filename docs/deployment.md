# Deployment

How a change on someone's laptop becomes a page on the internet.

## The short version

```
push a branch  →  Vercel builds it  →  preview URL on the pull request
merge to main  →  Vercel builds it  →  live site
```

Nobody uploads anything by hand. There is no "deploy" button to press.

## How it works

The Vercel project is connected to `spades-lums/spades-website` on GitHub. Vercel watches
the repository and reacts to every push.

**Pull requests get a preview.** Push a branch, open a pull request, and Vercel posts a URL
to it within a minute or two. That URL is the real site, built from your branch. Use it to
check your work and to grab the screenshot the pull request needs. Preview URLs are public
links — anyone with the link can open one.

**`main` is production.** Merging a pull request into `main` triggers a production build.
When it finishes, the live site is updated. It takes roughly a minute.

**A failed build changes nothing.** If the build errors, Vercel keeps serving the previous
version. The site cannot be broken by a build that does not compile — which is the main
reason `npm run verify` runs in CI as well.

## Settings

Vercel detects Astro and needs no configuration. For reference:

| Setting          | Value                        |
| ---------------- | ---------------------------- |
| Framework preset | Astro                        |
| Build command    | `npm run build`              |
| Output directory | `dist`                       |
| Install command  | `npm ci`                     |
| Node version     | Set to 24, to match `.nvmrc` |

There is no Astro Vercel adapter, and there should not be one — see
[decision 002](decisions/002-vercel-hosting.md).

## Environment variables

Secrets go in **Vercel → the project → Settings → Environment Variables**. Never in the
repository: it is public. See [decision 003](decisions/003-public-repo.md).

Some notes for when the first one is added:

- Vercel keeps separate values for Production, Preview and Development. Set the ones you
  need.
- A variable is read at **build** time, because the site is static. Changing a variable does
  not change the live site until the next build — use **Deployments → ⋯ → Redeploy**.
- Astro exposes a variable to browser code only if its name starts with `PUBLIC_`.
  Everything else stays server-side, which for a static site means build-time only. A key
  that must stay secret must never be named `PUBLIC_…`.
- Record the _name_ and purpose of each variable in `.env.example` and in
  [handover.md](handover.md). Never the value.

## The LUMS domain

The site currently runs on a `*.vercel.app` URL. When LUMS IT issues the real domain:

1. In Vercel, open the project → **Settings → Domains** → **Add**, and enter the domain.
2. Vercel shows the DNS records it needs — usually an `A` record for the bare domain and a
   `CNAME` for `www`. Send those to LUMS IT, since they control the DNS.
3. Wait for DNS to propagate. Vercel issues the HTTPS certificate automatically once it
   sees the records; this can take up to a few hours.
4. Update `site` in `astro.config.mjs` to the new domain and merge that change. The sitemap
   and canonical URLs are generated from it, so a stale value ships wrong metadata.
5. Check that the old Vercel URL redirects to the new domain, and that
   `https://<domain>/sitemap-index.xml` loads.

Record the domain and the LUMS IT contact in [handover.md](handover.md).

## Rebuilding without a code change

**Deployments → ⋯ → Redeploy** on the latest production deployment. Needed after changing an
environment variable, and later when an external data source has changed but the repository
has not.

## When a deployment fails

1. Open the failed deployment in Vercel and read the build log. The error is usually the
   last few lines.
2. Run `npm run verify` locally. It runs the same checks and almost always reproduces it.
3. Mismatched Node versions are a common cause. Vercel's Node setting must match `.nvmrc`.
4. The live site is untouched meanwhile. There is no rush.
