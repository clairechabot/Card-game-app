/**
 * Derive a stable URL slug from a game title.
 *
 * The slug — not an array index or a hand-maintained id — is a game's
 * identifier: it drives the `#/game/:slug` route, the React key, and the
 * favorites stored in localStorage. Deriving it keeps it from drifting out of
 * sync with the title. `validate-games.mjs` asserts slugs stay unique.
 */
export function slugify(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
