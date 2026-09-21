# content/instagram

`posts.yaml` is a hand-picked list of @spadeslums posts shown in the homepage feed.

It is used during development, and stays as the fallback once the Behold Instagram
integration is added, in case Behold is unavailable. Newest first.

Instagram's own image URLs expire after a while, so each post's image is saved locally in
`src/assets/images/instagram/` and referenced by path rather than hotlinked.
