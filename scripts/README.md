# scripts

One-off and maintenance Node scripts, run by hand with `node scripts/<name>.mjs`. Things
like turning the members roster spreadsheet into content files.

Not part of the website build — nothing in `src/` may import from here. Scripts that read
the roster must read it from `private/` (gitignored) and must never write roll numbers
into `src/`.

Example: `import-roster.mjs`
