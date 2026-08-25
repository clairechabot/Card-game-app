/**
 * Data integrity check for the game catalogue.
 *
 * There is no test framework here — for a static reference app a full harness
 * would be out of proportion — but the catalogue is the product, and it has
 * drifted before: 31 patience games once shared three setup diagrams between
 * them, so FreeCell was pictured as Klondike. These assertions catch that
 * class of drift. Run with `npm run validate`.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const { games } = await import(resolve(root, 'src/data/games/index.js'));
const { parsePlayerRange } = await import(resolve(root, 'src/lib/players.js'));

// categories.js imports lucide-react icons, which need a bundler. Read the
// category ids straight out of the source instead.
const categoriesSource = readFileSync(resolve(root, 'src/data/categories.js'), 'utf8');
const CATEGORY_IDS = [...categoriesSource.matchAll(/^\s{4}id: '(.+?)',$/gm)].map((m) => m[1]);

// The same for the visualizer's bespoke layout cases.
const visualizerSource = readFileSync(
  resolve(root, 'src/components/visualizers/GameVisualizer.jsx'),
  'utf8'
);
const LAYOUT_CASES = [...visualizerSource.matchAll(/case '(\w+)':/g)].map((m) => m[1]);

const REQUIRED = ['title', 'category', 'players', 'blurb', 'instructions', 'slug'];
const HEADINGS = ['Preliminaries:', 'Object:', 'The Play:', 'Scoring:', 'Setup:', 'Goal:'];

const errors = [];
const fail = (game, message) => errors.push(`${game.title ?? '(untitled)'}: ${message}`);

if (!CATEGORY_IDS.length) errors.push('parsed no category ids out of src/data/categories.js');
if (!LAYOUT_CASES.length) errors.push('parsed no layout cases out of GameVisualizer.jsx');

const seenSlugs = new Map();

for (const game of games) {
  for (const field of REQUIRED) {
    if (!game[field]) fail(game, `missing required field "${field}"`);
  }

  if (seenSlugs.has(game.slug)) {
    fail(game, `slug "${game.slug}" collides with ${seenSlugs.get(game.slug)}`);
  } else {
    seenSlugs.set(game.slug, game.title);
  }

  if (!CATEGORY_IDS.includes(game.category)) {
    fail(game, `category "${game.category}" is not one of ${CATEGORY_IDS.join(', ')}`);
  }

  // Every game must be able to draw itself: either a bespoke case or a spec.
  if (game.layoutSpec) {
    const spec = game.layoutSpec;
    const drawsSomething = spec.tableau || spec.grid || spec.pyramid;
    if (!drawsSomething) fail(game, 'layoutSpec draws no tableau, grid or pyramid');
    if (Array.isArray(spec.faceDown) && Array.isArray(spec.tableau)) {
      if (spec.faceDown.length !== spec.tableau.length) {
        fail(game, 'layoutSpec.faceDown length does not match layoutSpec.tableau');
      }
    }
  } else if (game.tableSpec) {
    // Drawn by TrickTable rather than by a switch case.
  } else if (!game.layout) {
    fail(game, 'has neither a layout nor a layoutSpec — it would render no diagram');
  } else if (!LAYOUT_CASES.includes(game.layout)) {
    fail(game, `layout "${game.layout}" has no matching case in GameVisualizer`);
  }

  // Patience games are the ones that drifted before — hold them to the spec.
  if (game.category === 'Ordering' && !game.layoutSpec) {
    fail(game, 'is a patience game but has no layoutSpec, so it would reuse another game’s diagram');
  }

  if (game.tableSpec) {
    const { trump, trumpSuit, hand, seats } = game.tableSpec;
    const TRUMPS = ['none', 'fixed', 'turned', 'bid', 'varies'];
    if (!TRUMPS.includes(trump)) fail(game, `tableSpec.trump "${trump}" is not one of ${TRUMPS.join(', ')}`);
    if (trump === 'fixed' && !trumpSuit) fail(game, 'tableSpec has a fixed trump but names no suit');
    if (!hand) fail(game, 'tableSpec names no hand size');
    if (!seats) fail(game, 'tableSpec names no seat count');

    // The diagram must not contradict the players string beside it.
    const [min, max] = parsePlayerRange(game.players);
    const [specMin, specMax] = Array.isArray(seats) ? seats : [seats, seats];
    if (specMin !== min || specMax !== max) {
      fail(
        game,
        `tableSpec.seats (${specMin}–${specMax}) contradicts players "${game.players}" (${min}–${max})`
      );
    }
  }

  if (game.instructions && !HEADINGS.some((h) => game.instructions.includes(h))) {
    fail(game, 'instructions contain none of the recognised section headings');
  }

  // Mirrors parsePlayerRange in src/lib/players.js — a string it cannot read
  // silently falls back to "any number of players" in the filter.
  if (game.players && !/^\d+[+–-]?\d*\s*(Player|Players)/.test(game.players)) {
    fail(game, `players string "${game.players}" will not parse`);
  }
}

/**
 * The drift this file exists to catch, stated generally.
 *
 * A bespoke diagram may be shared by several games only if all but one of them
 * carry a `handSpec` telling the diagram how they differ. The exception is the
 * canonical game the diagram was drawn for. Without this, Brag borrowed the
 * Draw Poker diagram whole — a five-card hand and a draw pile, on a page whose
 * rules say three cards and no draw.
 */
const sharing = new Map();
for (const game of games) {
  if (game.layoutSpec || game.tableSpec || !game.layout) continue;
  if (!sharing.has(game.layout)) sharing.set(game.layout, []);
  sharing.get(game.layout).push(game);
}

for (const [layout, sharers] of sharing) {
  if (sharers.length < 2) continue;
  const undifferentiated = sharers.filter((g) => !g.handSpec);
  if (undifferentiated.length > 1) {
    errors.push(
      `layout "${layout}" is shared by ${sharers.length} games but ` +
        `${undifferentiated.map((g) => g.title).join(', ')} carry no handSpec — ` +
        `all but the canonical game must say how they differ`
    );
  }
}

const byCategory = Object.fromEntries(
  CATEGORY_IDS.map((id) => [id, games.filter((g) => g.category === id).length])
);

for (const [id, count] of Object.entries(byCategory)) {
  if (count === 0) errors.push(`category "${id}" has no games and would render an empty page`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s) in the catalogue:\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`✓ ${games.length} games valid across ${CATEGORY_IDS.length} categories`);
console.log(
  Object.entries(byCategory)
    .map(([id, count]) => `    ${id.padEnd(14)} ${count}`)
    .join('\n')
);
