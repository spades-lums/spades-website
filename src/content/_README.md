# src/content

All of the website's words live here, as Markdown and YAML files. No HTML, no code.

Each subfolder is a "collection" with a schema in `../content.config.ts`. The schema lists
which fields a file must have; if a file is missing one, `npm run build` fails with a
message naming the file. That is deliberate — a broken page is caught before it is published.

Files whose name starts with `_` (like this one) are ignored by Astro, which is why the
folder notes are called `_README.md` here and plain `README.md` everywhere else.

File names become URLs: `teams/3d-printers.md` is published at `/teams/3d-printers`.
Use `kebab-case`, lowercase, no spaces.
