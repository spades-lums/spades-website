# components/ui

Small, generic `.astro` building blocks used across the whole site: Button, Heading, Tag,
PhotoTile. They take props and know nothing about SPADES specifically — a `Button` must not
mention PsiFi, and nothing here may import from `src/content/`.

Anything that is a named page block belongs in `../sections/`.

Example: `Button.astro` (built in Phase 2)
