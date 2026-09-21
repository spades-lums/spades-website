# components/islands

React `.tsx` components that actually run in the visitor's browser — carousels, filters,
menus that need state. Each one is loaded from an `.astro` file with a `client:*` directive,
which is what makes it an "island" of JavaScript in an otherwise static page.

This is the ONLY place browser JavaScript components live. If a thing does not need to react
to the user, build it as `.astro` in `../ui/` instead and ship no JavaScript.

Example: `InstagramCarousel.tsx`
