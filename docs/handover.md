# Handover

This website changes hands roughly once a year. This page exists so that the handover takes
an afternoon instead of a semester.

## Accounts

Fill in the owner column, and keep it filled in. An account whose owner has graduated is an
account nobody can get into.

| Account             | What it is for                   | URL                                           | Owner | Notes                                                      |
| ------------------- | -------------------------------- | --------------------------------------------- | ----- | ---------------------------------------------------------- |
| GitHub organisation | The code, and CI                 | https://github.com/spades-lums                |       | At least two people must be owners                         |
| GitHub repository   | This website                     | https://github.com/spades-lums/spades-website |       | Public — see decision 003                                  |
| Vercel              | Hosting and deployments          | https://vercel.com                            |       | Connected to the GitHub repo                               |
| Domain / DNS        | The LUMS address                 | —                                             |       | LUMS IT controls DNS. Record the contact's name and email  |
| Google Drive        | Roster spreadsheet, photos, PDFs | —                                             |       | Owned by a society account, not a personal one             |
| Instagram           | @spadeslums                      | https://instagram.com/spadeslums              |       | Source of the homepage feed                                |
| Behold              | Instagram feed service           | https://behold.so                             |       | Not set up yet. Add its token to Vercel, never to the repo |

**Two people should hold every account.** One graduating student with the only password is
how societies lose their websites.

## Environment variables

Record the _name_ and purpose of everything set in Vercel. Never the value.

| Name         | Used for | Set in |
| ------------ | -------- | ------ |
| _(none yet)_ |          |        |

## The yearly checklist

Work through this when the new team takes over.

### Accounts and access

- [ ] Add the incoming team to the GitHub organisation, and make at least two of them owners
- [ ] Add the incoming team to the Vercel project
- [ ] Transfer ownership of the Google Drive folder to the society account
- [ ] Remove people who have left from all of the above
- [ ] Rotate every password and every API token, and update the tokens in Vercel
- [ ] Update the owner column in the table above

### Content

- [ ] Put the new members roster in `private/` and run `node scripts/import-roster.mjs`.
      The spreadsheet has roll numbers — it must never be committed
- [ ] Update `src/content/people/` with the new exec council and team leads
- [ ] Update `src/content/teams/` if teams have been added, merged or retired
- [ ] Move last year's flagship editions into the archive and add this year's files in
      `src/content/editions/`
- [ ] Roll the flagship pages forward to point at the new editions
- [ ] Update `src/content/partners/` — remove partners who have left, add the new ones,
      replace their logos in `src/assets/logos/partners/`
- [ ] Search the repository for `[TBC]` and fill in or remove every one:
      `grep -rn "\[TBC\]" src/ docs/`

### Housekeeping

- [ ] Run `npm outdated`, update dependencies, and check the site still builds
- [ ] Confirm the domain and its HTTPS certificate have not expired
- [ ] Read this file end to end and fix anything that has become untrue
- [ ] Add a CHANGELOG entry for the handover

## Handing over to a person, not a repository

Walk the next maintainer through, in this order: [README](../README.md),
[CONTRIBUTING](../CONTRIBUTING.md), [architecture](architecture.md),
[content-guide](content-guide.md), then the [decision records](decisions/). Watch them make
one real change, from branch to merged pull request, while you are still around to answer
questions.
