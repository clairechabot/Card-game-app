import { slugify } from '../../lib/slug.js';
import { trickTaking } from './trickTaking.js';
import { cardTaking } from './cardTaking.js';
import { addingUp } from './addingUp.js';
import { shedding } from './shedding.js';
import { collecting } from './collecting.js';
import { patience } from './patience.js';
import { vying } from './vying.js';
import { banking } from './banking.js';

/**
 * Every game, in mechanism order, each stamped with its derived slug.
 *
 * Built once at module scope. This array used to be declared inside the
 * component body, so all 50-odd records were rebuilt on every keystroke in
 * the search box.
 */
export const games = [
  ...trickTaking,
  ...cardTaking,
  ...addingUp,
  ...shedding,
  ...collecting,
  ...patience,
  ...vying,
  ...banking,
].map((game) => ({ ...game, slug: slugify(game.title) }));

const bySlug = new Map(games.map((game) => [game.slug, game]));

export function getGameBySlug(slug) {
  return bySlug.get(slug);
}

export function countByCategory(categoryId) {
  return games.filter((game) => game.category === categoryId).length;
}
