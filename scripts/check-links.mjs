/**
 * Verify every `videoUrl` in the catalogue actually resolves to a video about
 * that game.
 *
 * This exists because all six video links the app originally shipped were
 * wrong: Spades opened a Klondike tutorial, Crazy Eights opened Concentration,
 * President opened Old Maid, Klondike opened Snap, and FreeCell's link was
 * dead. A wrong link is worse than no link — the search fallback at least
 * searches the right words.
 *
 * Uses YouTube's oEmbed endpoint, which needs no API key: it 404s for dead
 * videos and returns the real title for live ones, so we can check the title
 * names the game.
 *
 * Network-dependent, so this is a separate script from `validate-games.mjs`
 * and is not part of the default CI gate. Run with `npm run check-links`.
 */
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { games } = await import(resolve(root, 'src/data/games/index.js'));

/** Titles whose game name will not appear verbatim in a sensible video title. */
const ALIASES = {
  'Solitaire (Klondike)': ['klondike', 'solitaire'],
  'Contract Bridge': ['bridge'],
  Cassino: ['cassino', 'casino'],
  'Racing Demon': ['racing demon', 'nerts', 'nertz', 'peanuts', 'pounce'],
  'Napoleon at St Helena': ['napoleon', 'st helena', 'forty thieves'],
  Pontoon: ['pontoon'],
  Newmarket: ['newmarket', 'michigan'],
};

const withUrls = games.filter((g) => g.videoUrl);
console.log(`Checking ${withUrls.length} video links…\n`);

const failures = [];

for (const game of withUrls) {
  const api = `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(game.videoUrl)}`;
  let title;
  try {
    const res = await fetch(api);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    ({ title } = await res.json());
  } catch {
    failures.push(`${game.title}: ${game.videoUrl} is dead or unreachable`);
    console.log(`  DEAD  ${game.title}`);
    continue;
  }

  const keys = ALIASES[game.title] ?? [game.title.toLowerCase()];
  const lower = title.toLowerCase();
  if (keys.some((k) => lower.includes(k))) {
    console.log(`  ok    ${game.title.padEnd(22)} ${title.slice(0, 60)}`);
  } else {
    failures.push(`${game.title}: link opens "${title}", which does not name the game`);
    console.log(`  WRONG ${game.title.padEnd(22)} ${title.slice(0, 60)}`);
  }
}

const fallback = games.length - withUrls.length;
console.log(
  `\n${withUrls.length} linked, ${fallback} on YouTube-search fallback, ${games.length} total`
);

if (failures.length) {
  console.error(`\n✗ ${failures.length} bad link(s):\n`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log('✓ every video link resolves and names its game');
