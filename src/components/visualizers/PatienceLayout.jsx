import { Card, Container, Caption } from './Card';

/**
 * Draws a patience setup from the game's own `layoutSpec`.
 *
 * The 31 patience games used to share three hand-drawn diagrams between them,
 * so FreeCell was pictured as Klondike and Pyramid as Aces Up — the diagram
 * contradicted the rules printed directly beneath it. Each game now carries a
 * spec describing its actual deal, and this renders it.
 *
 * Spec shape (every field optional):
 *   tableau      number of piles, or an array of per-pile depths
 *   depth        cards per pile when `tableau` is a number (0 draws empty slots)
 *   faceDown     cards face down at the bottom of each pile — a number, a
 *                per-pile array, or 'allButTop'
 *   fan          'column' (default) | 'row' | 'flat'
 *   foundations  count of foundation piles
 *   freeCells    count of free cells / reserve slots drawn beside them
 *   reserve      count of cards in a single reserve pile
 *   stock        boolean
 *   waste        number of waste piles
 *   grid         { rows, cols } for square layouts
 *   pyramid      number of pyramid rows
 *   note         short line naming the game's distinguishing move
 *   caption      layout name, bottom right
 */

// Tailwind must see every class in full, so overlap and gap steps are looked
// up rather than interpolated.
const COLUMN_OVERLAP = { md: '-space-y-8', sm: '-space-y-5', xs: '-space-y-4', '2xs': '-space-y-3' };
const ROW_OVERLAP = { md: '-space-x-6', sm: '-space-x-4', xs: '-space-x-3', '2xs': '-space-x-2' };
const GAP = { md: 'gap-1.5', sm: 'gap-1', xs: 'gap-1', '2xs': 'gap-0.5' };

const FACE_DOWN = 'bg-blue-900/40';
const FACE_UP = 'bg-white/10';
const TOP_CARD = 'bg-white/20';

/** Cards drawn per pile before the count takes over — deep piles overlap into mush. */
const MAX_VISIBLE_DEPTH = 4;

function pileDepths(spec) {
  if (Array.isArray(spec.tableau)) return spec.tableau;
  if (!spec.tableau) return [];
  return Array.from({ length: spec.tableau }, () => spec.depth ?? 1);
}

function sizeFor(columns) {
  if (columns <= 7) return 'sm';
  if (columns <= 12) return 'xs';
  return '2xs';
}

function Labelled({ label, children, className = '' }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      {children}
      <span className="text-[7px] md:text-[8px] text-zinc-500 uppercase tracking-wide whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

function Pile({ depth, faceDown, size, fan }) {
  const horizontal = fan === 'row' || fan === 'flat';
  const direction = horizontal ? 'flex-row' : 'flex-col';
  const spacing = fan === 'flat' ? GAP[size] : horizontal ? ROW_OVERLAP[size] : COLUMN_OVERLAP[size];

  // An empty column is still part of the layout — Calculation and Strategy
  // both start with nothing dealt to the tableau.
  if (depth === 0) return <Card size={size} empty />;

  const visible = Math.min(depth, MAX_VISIBLE_DEPTH);
  const hidden = depth - visible;

  return (
    <div className={`flex ${direction} ${spacing} items-center`}>
      {Array.from({ length: visible }).map((_, i) => {
        const isTop = i === visible - 1;
        const position = hidden + i;
        const stillFaceDown =
          faceDown === 'allButTop' ? !isTop : position < faceDown;
        return (
          <Card
            key={i}
            size={size}
            color={stillFaceDown ? FACE_DOWN : isTop ? TOP_CARD : FACE_UP}
          />
        );
      })}
    </div>
  );
}

function Tableau({ spec }) {
  const depths = pileDepths(spec);
  if (!depths.length) return null;

  const size = sizeFor(depths.length);
  const fan = spec.fan ?? 'column';
  const deepest = Math.max(...depths);
  const shallowest = Math.min(...depths);
  const range = deepest === shallowest ? `${deepest}` : `${shallowest}–${deepest}`;
  const label = deepest === 0
    ? `${depths.length} empty columns`
    : `${depths.length} columns × ${range}`;

  const faceDownFor = (i) =>
    Array.isArray(spec.faceDown) ? spec.faceDown[i] ?? 0 : spec.faceDown ?? 0;

  return (
    <Labelled label={label}>
      <div className={`flex ${fan === 'row' ? 'flex-col' : 'items-start'} justify-center ${GAP[size]}`}>
        {depths.map((depth, i) => (
          <Pile key={i} depth={depth} faceDown={faceDownFor(i)} size={size} fan={fan} />
        ))}
      </div>
    </Labelled>
  );
}

function Pyramid({ rows, empty, label }) {
  const cards = (rows * (rows + 1)) / 2;
  return (
    <Labelled label={label ?? `${rows}-row pyramid · ${cards} cards`}>
      <div className={`flex flex-col ${empty ? 'gap-0.5' : '-space-y-1.5'}`}>
        {Array.from({ length: rows }).map((_, row) => (
          <div key={row} className={`flex justify-center ${empty ? 'gap-0.5' : '-space-x-1'}`}>
            {Array.from({ length: row + 1 }).map((_, col) => (
              <Card
                key={col}
                size="2xs"
                empty={empty}
                color={row === rows - 1 ? TOP_CARD : FACE_UP}
              />
            ))}
          </div>
        ))}
      </div>
    </Labelled>
  );
}

function Grid({ rows, cols }) {
  return (
    <Labelled label={`${cols}×${rows} grid`}>
      <div className="flex flex-col gap-1">
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} className="flex gap-1">
            {Array.from({ length: cols }).map((_, c) => (
              <Card key={c} size="xs" empty />
            ))}
          </div>
        ))}
      </div>
    </Labelled>
  );
}

function SlotRow({ count, label, empty = true, color, size = 'xs' }) {
  return (
    <Labelled label={label}>
      <div className="flex gap-1">
        {Array.from({ length: count }).map((_, i) => (
          <Card key={i} size={size} empty={empty} color={color} />
        ))}
      </div>
    </Labelled>
  );
}

export function PatienceLayout({ spec, title }) {
  const hasTopRow = spec.freeCells || spec.foundations;
  const hasBottomRow = spec.stock || spec.waste || spec.reserve;

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        {hasTopRow && (
          <div className="flex items-start justify-center gap-6 md:gap-10">
            {spec.freeCells ? (
              <SlotRow count={spec.freeCells} label={spec.freeCellLabel ?? 'Free cells'} />
            ) : null}
            {spec.foundations ? (
              <SlotRow count={spec.foundations} label="Foundations" />
            ) : null}
          </div>
        )}

        {spec.pyramid ? (
          <Pyramid
            rows={spec.pyramid}
            empty={spec.pyramidEmpty}
            label={spec.pyramidLabel}
          />
        ) : null}
        {spec.grid ? <Grid rows={spec.grid.rows} cols={spec.grid.cols} /> : null}
        <Tableau spec={spec} />

        {hasBottomRow && (
          <div className="flex items-start justify-center gap-4 md:gap-6">
            {spec.stock ? (
              <SlotRow count={1} label="Stock" empty={false} color={FACE_DOWN} />
            ) : null}
            {spec.waste ? (
              <SlotRow
                count={spec.waste}
                label={spec.waste === 1 ? 'Waste' : `${spec.waste} waste piles`}
                empty={false}
                color={FACE_UP}
              />
            ) : null}
            {spec.reserve ? (
              <Labelled label={`${spec.reserveLabel ?? 'Reserve'} × ${spec.reserve}`}>
                <div className="flex -space-x-3">
                  {Array.from({ length: Math.min(spec.reserve, 4) }).map((_, i, all) => (
                    <Card key={i} size="xs" color={i === all.length - 1 ? TOP_CARD : FACE_UP} />
                  ))}
                </div>
              </Labelled>
            ) : null}
          </div>
        )}
      </div>

      {spec.note && (
        <div className="absolute top-2 left-3 text-[8px] md:text-[9px] text-zinc-500 leading-snug max-w-[45%]">
          {spec.note}
        </div>
      )}
      <Caption>{spec.caption ?? title}</Caption>
    </Container>
  );
}
