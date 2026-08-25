export const PLAYER_FILTERS = ['All', '1', '2', '3', '4+'];

/**
 * Parse a human player-count string ("2–4 Players", "3+ Players", "4 Players")
 * into a [min, max] range. Note the en dash — the data uses it, not a hyphen.
 */
export function parsePlayerRange(str) {
  const plus = str.match(/^(\d+)\+/);
  if (plus) return [parseInt(plus[1], 10), Infinity];
  const range = str.match(/^(\d+)[–-](\d+)/);
  if (range) return [parseInt(range[1], 10), parseInt(range[2], 10)];
  const single = str.match(/^(\d+)/);
  if (single) return [parseInt(single[1], 10), parseInt(single[1], 10)];
  return [1, Infinity];
}

export function matchesPlayerFilter(players, filter) {
  if (filter === 'All') return true;
  const [min, max] = parsePlayerRange(players);
  if (filter === '4+') return max >= 4;
  const n = parseInt(filter, 10);
  return min <= n && max >= n;
}
