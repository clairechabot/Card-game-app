import { Card, Container, Caption } from './Card';

/**
 * Draws a trick-taking table from the game's own `tableSpec`.
 *
 * Eight trick-taking games previously shared two hand-drawn tables between
 * them, and those tables asserted things the rules beneath them denied: both
 * showed a fixed ♠ trump, so Hearts — an avoidance game with no trump at all —
 * was pictured with one, and Nap was captioned "3-Player Table" despite being
 * a three-to-seven player game.
 *
 * Spec shape:
 *   seats        number of players at the table, or [min, max] for a range
 *   partnership  true to mark partners as a team
 *   hand         cards dealt to each player
 *   trump        'none' | 'fixed' | 'turned' | 'bid' | 'varies'
 *   trumpSuit    the suit symbol, when trump is 'fixed'
 *   widow        cards set aside face down (Skat's skat, for instance)
 *   note         short line naming what makes this game's table different
 *   caption      table name, bottom right
 */

const TRUMP_LABEL = {
  none: 'No trump',
  turned: 'Trump turned up',
  bid: 'Trump by bid',
  varies: 'Trump varies',
};

/** Seat markers, clockwise from the top. The reader always sits south. */
const SEAT_ORDER = ['N', 'E', 'S', 'W', 'NE', 'SE', 'SW'];

function seatCount(seats) {
  return Array.isArray(seats) ? seats[0] : seats;
}

function seatLabel(seats) {
  if (!Array.isArray(seats)) return `${seats} players`;
  const [min, max] = seats;
  return max === Infinity ? `${min}+ players` : `${min}–${max} players`;
}

function TrumpBadge({ spec }) {
  if (spec.trump === 'fixed') {
    return (
      <div className="flex flex-col items-center gap-0.5">
        <Card label={spec.trumpSuit} size="sm" color="bg-indigo-500/30" />
        <span className="text-[8px] text-indigo-400 uppercase">Trump</span>
      </div>
    );
  }

  const label = TRUMP_LABEL[spec.trump] ?? 'Trump varies';
  const isNone = spec.trump === 'none';

  return (
    <div className="flex flex-col items-center gap-0.5">
      <Card
        label={spec.trump === 'turned' ? '?' : isNone ? '—' : '?'}
        size="sm"
        empty={isNone}
        color="bg-indigo-500/20"
      />
      <span
        className={`text-[8px] uppercase text-center leading-tight max-w-[52px] ${
          isNone ? 'text-zinc-500' : 'text-indigo-400'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export function TrickTable({ spec, title }) {
  const count = seatCount(spec.seats);
  const seats = SEAT_ORDER.slice(0, count);
  const handSize = Math.min(spec.hand ?? 3, 4);

  return (
    <Container>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="relative w-40 h-40 md:w-44 md:h-44 shrink-0">
          {/* Opponents around the table; the reader's own hand sits south. */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-0.5">
            {Array.from({ length: handSize }).map((_, i) => (
              <Card key={i} size="xs" color="bg-blue-900/40" />
            ))}
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-0.5">
            {Array.from({ length: handSize }).map((_, i) => (
              <Card key={i} size="xs" color="bg-cyan-500/20" />
            ))}
          </div>
          {count > 2 && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Card size="xs" color="bg-zinc-700/50" />
            </div>
          )}
          {count > 3 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Card size="xs" color="bg-zinc-700/50" />
            </div>
          )}

          {/* The trick in progress. */}
          <div className="absolute inset-0 m-auto w-20 h-20 border border-zinc-700 rounded-lg bg-zinc-800/60">
            <div className="relative w-full h-full">
              {seats.map((seat) => {
                const isReader = seat === 'S';
                const position =
                  seat === 'N'
                    ? 'top-1 left-1/2 -translate-x-1/2'
                    : seat === 'S'
                      ? 'bottom-1 left-1/2 -translate-x-1/2'
                      : seat === 'W'
                        ? 'top-1/2 left-1 -translate-y-1/2'
                        : seat === 'E'
                          ? 'top-1/2 right-1 -translate-y-1/2'
                          : 'bottom-1 right-1';
                return (
                  <div
                    key={seat}
                    className={`absolute ${position} w-5 h-7 rounded-sm border flex items-center justify-center text-[7px] font-bold ${
                      isReader
                        ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300'
                        : 'border-zinc-500 bg-white/10 text-zinc-300'
                    }`}
                  >
                    {seat}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <TrumpBadge spec={spec} />
          {spec.widow ? (
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex -space-x-2">
                {Array.from({ length: Math.min(spec.widow, 3) }).map((_, i) => (
                  <Card key={i} size="xs" color="bg-blue-900/40" />
                ))}
              </div>
              <span className="text-[8px] text-zinc-500 uppercase">Widow × {spec.widow}</span>
            </div>
          ) : null}
        </div>
      </div>

      <div className="absolute top-2 left-3 text-[8px] md:text-[9px] text-zinc-500 leading-snug max-w-[45%]">
        {seatLabel(spec.seats)}
        {spec.partnership ? ' · partnerships' : ''} · {spec.hand} cards each
        {spec.note ? <><br />{spec.note}</> : null}
      </div>

      <Caption>{spec.caption ?? title}</Caption>
    </Container>
  );
}
