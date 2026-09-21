// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Astro configuration. Docs: https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // PLACEHOLDER. Replace with the real LUMS domain once LUMS IT issues it
  // (something like https://spades.lums.edu.pk). Until then this can be the
  // Vercel production URL.
  //
  // `site` is not decoration: the sitemap integration and any absolute URLs in
  // the built HTML are generated from it. A wrong value ships a wrong sitemap.
  site: 'https://spades-website.vercel.app',

  // Build plain HTML/CSS/JS files with no server at runtime. This is why the
  // site needs no Vercel adapter — see docs/decisions/002-vercel-hosting.md.
  output: 'static',

  integrations: [
    // Lets us use React components, but only where we explicitly opt in with a
    // `client:*` directive. Everything else stays zero-JavaScript.
    react(),
    // Generates /sitemap-index.xml at build time, using `site` above.
    sitemap(),
  ],
});
