# Contributing

## `main` is the live website

Whatever sits on the `main` branch is what the public sees. Every change reaches `main`
through a pull request, and never by pushing straight to it.

## The loop

```bash
git switch main
git pull                      # start from what is live
git switch -c content/add-robotics-team
# ...make your change...
npm run verify                # must pass before you push
git add -A
git commit -m "content: add the robotics team page"
git push -u origin content/add-robotics-team
```

Then open a pull request on GitHub. GitHub Actions runs `npm run verify` again and shows a
green tick or a red cross. Merge once it is green and someone has looked at it.

## Branch names

`type/short-description`, in `kebab-case`:

| Prefix     | Use it for                            |
| ---------- | ------------------------------------- |
| `feat/`    | A new feature or page                 |
| `fix/`     | Repairing something broken            |
| `content/` | Words and images only, no code        |
| `docs/`    | Changes under `docs/`, or to a README |
| `chore/`   | Tooling, dependencies, configuration  |

Examples: `feat/team-page-template`, `fix/nav-overlap-on-mobile`, `content/psifi-2026-dates`.

## Commit messages

Same prefixes, then a short line in the present tense saying what the commit does:

```
feat: add the photo tile component
fix: stop the nav overlapping the hero on narrow screens
content: add the 2026 PsiFi categories
```

## One idea per pull request

A pull request should do one thing. "Add the teams page" is one pull request. "Add the teams
page and redesign the footer and bump dependencies" is three. Small pull requests get read
properly; large ones get skimmed and waved through.

## What a pull request must say

- What changed, in a sentence or two.
- Why, if it is not obvious.
- **A screenshot, for anything that changes what the site looks like.** Drag the image
  straight into the description box. The reviewer should not have to run the branch to see
  your change.

## Naming rules

| Thing             | Rule                                   | Example                                            |
| ----------------- | -------------------------------------- | -------------------------------------------------- |
| Folders and files | `kebab-case`                           | `src/components/sections/home/`                    |
| Components        | `PascalCase.astro` or `PascalCase.tsx` | `PhotoTile.astro`, `InstagramCarousel.tsx`         |
| Content files     | The slug matches the URL               | `teams/3d-printers.md` → `/teams/3d-printers`      |
| CSS variables     | Named by role, not by colour           | `--color-accent-on-dark`, not `--color-light-blue` |

## Docs change in the same pull request as the code

If your change makes something in `docs/` or a folder `README.md` wrong, fix it in the same
pull request. Documentation updated "later" is documentation that stays wrong, and this
project gets handed to someone new every year.

## Before you finish

- [ ] `npm run verify` passes
- [ ] No secrets, tokens, roll numbers or personal contact details are in the diff
- [ ] Docs match the change
- [ ] There is a screenshot, if the change is visual
