# 003 — The repository is public

**Date:** 2026-09-22
**Status:** accepted

## Context

The code lives in the `spades-lums` GitHub organisation. Two things about free plans decided
the visibility for us.

Vercel's free Hobby plan will not deploy a **private** repository owned by a GitHub
organisation. Making the repository private would mean paying for a Vercel team plan, or
moving the repository out of the society's organisation and onto one student's personal
account — where it would leave with them.

GitHub Free offers branch protection rules only on **public** repositories. A private
repository on the free plan cannot require a pull request or a passing CI check before a
merge to `main`, which are the two rules that keep the live site from breaking.

## Decision

Keep `spades-lums/spades-website` **public**, and treat the repository as published
material.

**Nothing secret goes in the repository. Ever.**

- API keys and tokens live in Vercel's Environment Variables, and nowhere else. A committed
  `.env.example` may list variable _names_ with empty values, as documentation.
- The members roster spreadsheet contains student roll numbers. It stays in the `private/`
  folder, which `.gitignore` excludes, and is shared through Google Drive instead.
- Content under `src/content/people/` holds names, roles and photos only. No roll numbers,
  no phone numbers, no personal email addresses, no CNICs.
- Personal information belongs on the site only when the person has agreed to it being
  public.

If a secret is ever committed, rotate it immediately. Assume anything pushed to a public
repository has already been copied, because bots scrape GitHub for keys within minutes.
Deleting the commit is not enough on its own.

## Alternatives considered

**Private repository, paid Vercel plan.** Costs money the society would have to keep paying
every year, and someone would have to remember to renew it. Rejected.

**Private repository under a personal GitHub account.** Free, and Vercel allows it.
Rejected because the society would not own its own website, and the account leaves when the
student graduates. This is exactly the failure a yearly handover must avoid.

**Private repository with no branch protection.** Rejected: anyone could push directly to
`main` and take the live site down with a typo.

## Consequences

- Anyone can read the code, which is fine and occasionally useful — it is a portfolio piece
  for whoever works on it, and other societies can borrow from it.
- Anyone can read the commit history, including mistakes. Review diffs for personal data
  before merging.
- Branch protection on `main` is available, and is switched on.
- Deployments and preview URLs cost nothing.
