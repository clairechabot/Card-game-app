import { Sword, Grab, Calculator, Layers, Package, ListOrdered, Eye, Landmark } from 'lucide-react';

/**
 * The eight primary mechanisms from David Parlett's
 * *The Penguin Book of Card Games*, in the book's own order.
 *
 * `badgeClass` is a literal string on purpose. It used to be assembled at
 * runtime from `textColor` (`bg-${colour}-400/10`), which Tailwind's scanner
 * cannot see — so the badges shipped with no colour at all. Class names must
 * appear verbatim in source to survive the build.
 */
export const categories = [
  {
    id: 'Trick-Taking',
    label: 'Trick-Taking',
    icon: Sword,
    desc: 'Win tricks to fulfil contracts or accumulate card-points.',
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-200',
    badgeClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  },
  {
    id: 'Card-Taking',
    label: 'Card-Taking',
    icon: Grab,
    desc: 'Capture cards from a central layout by matching or summing.',
    color: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-200',
    badgeClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  },
  {
    id: 'Adding-up',
    label: 'Adding-up',
    icon: Calculator,
    desc: 'Play cards to a running total without overshooting a limit.',
    color: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-200',
    badgeClass: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  },
  {
    id: 'Shedding',
    label: 'Shedding',
    icon: Layers,
    desc: 'Race to be the first to empty your hand of all cards.',
    color: 'from-cyan-400 to-sky-600',
    textColor: 'text-cyan-200',
    badgeClass: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  },
  {
    id: 'Collecting',
    label: 'Collecting',
    icon: Package,
    desc: 'Form matched sets and sequences in your hand.',
    color: 'from-teal-500 to-cyan-600',
    textColor: 'text-teal-200',
    badgeClass: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
  },
  {
    id: 'Ordering',
    label: 'Ordering / Patience',
    icon: ListOrdered,
    desc: 'Arrange a shuffled pack into a specific sequence or order.',
    color: 'from-sky-500 to-blue-600',
    textColor: 'text-sky-200',
    badgeClass: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
  },
  {
    id: 'Vying',
    label: 'Vying',
    icon: Eye,
    desc: 'Bet on your hand strength or bluff opponents into folding.',
    color: 'from-fuchsia-500 to-purple-600',
    textColor: 'text-fuchsia-200',
    badgeClass: 'text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/20',
  },
  {
    id: 'Banking',
    label: 'Banking',
    icon: Landmark,
    desc: 'Bet against a central bank or house dealer.',
    color: 'from-violet-600 to-indigo-600',
    textColor: 'text-violet-200',
    badgeClass: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  },
];

const NEUTRAL_BADGE = 'text-zinc-400 bg-zinc-400/10 border-zinc-400/20';

export function getCategoryBadgeClass(categoryId) {
  return categories.find((c) => c.id === categoryId)?.badgeClass ?? NEUTRAL_BADGE;
}

export function getCategory(categoryId) {
  return categories.find((c) => c.id === categoryId);
}
