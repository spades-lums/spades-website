// ESLint "flat config" — the modern format (one array of config objects, applied in order).
// Each object says: which files it applies to, and which rules to turn on.
// Run it with `npm run lint`.
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';

export default [
  // Files ESLint should never look at.
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', '.vercel/**', 'private/**'],
  },

  // Core JavaScript rules recommended by ESLint itself.
  js.configs.recommended,

  // TypeScript rules (no type-checking pass — fast, and enough for this project).
  ...tseslint.configs.recommended,

  // Astro component rules (.astro files get their own parser).
  ...astro.configs.recommended,

  // Tell ESLint which global variables exist, so it doesn't flag them as undefined.
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // Turn OFF every rule that only argues about formatting — Prettier owns that.
  // This must stay LAST so it overrides the configs above.
  prettier,
];
