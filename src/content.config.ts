// Content collections: the schemas that validate everything in `src/content/`.
//
// A schema is a list of the fields a content file must (or may) have. Astro checks
// every file against its schema during `npm run dev` and `npm run build`, so a typo
// or a missing field is reported by name instead of producing a broken page.
//
// Docs: https://docs.astro.build/en/guides/content-collections/
import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// Hand-picked Instagram posts for the homepage feed.
// One YAML file holds the whole collection, so we use the `file()` loader rather
// than `glob()`. See src/content/instagram/_README.md.
const instagram = defineCollection({
  loader: file('src/content/instagram/posts.yaml'),
  schema: ({ image }) =>
    z.object({
      // Must be a real URL, not just any string.
      url: z.string().url(),
      // Only these two values are allowed; anything else fails the build.
      type: z.enum(['post', 'reel']),
      // A locally saved copy of the post image. Optional for now because the
      // images have not been downloaded yet. Astro optimises images declared
      // this way and errors if the file is missing.
      image: image().optional(),
      caption: z.string(),
    }),
});

// Every collection the site knows about must be listed here.
// The other folders in src/content/ get their schemas in Phase 2.
export const collections = { instagram };
