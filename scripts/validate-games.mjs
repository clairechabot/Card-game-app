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
  } else if (!game.layout) {
    fail(game, 'has neither a layout nor a layoutSpec — it would render no diagram');
  } else if (!LAYOUT_CASES.includes(game.layout)) {
    fail(game, `layout "${game.layout}" has no matching case in GameVisualizer`);
  }

  // Patience games are the ones that drifted before — hold them to the spec.
  if (game.category === 'Ordering' && !game.layoutSpec) {
    fail(game, 'is a patience game but has no layoutSpec, so it would reuse another game’s diagram');
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
