/**
 * Card face dimensions. Diagrams with many columns need smaller cards, and
 * Tailwind can only see class names written out in full — so each size is a
 * literal here rather than assembled from the column count at runtime.
 */
const SIZES = {
  md: 'w-8 h-11 md:w-10 md:h-14 text-[8px] md:text-[10px]',
  sm: 'w-6 h-8 md:w-7 md:h-10 text-[7px]',
  xs: 'w-4 h-6 md:w-5 md:h-7 text-[6px]',
  '2xs': 'w-3 h-4 md:w-3.5 md:h-5 text-[5px]',
};

/** A single card face used across every setup diagram. */
export function Card({ label, color = 'bg-zinc-700', className = '', empty = false, size = 'md' }) {
  return (
    <div
      className={`${SIZES[size]} rounded border ${
        empty ? 'border-dashed border-zinc-600 bg-transparent' : 'border-zinc-600 shadow-sm'
      } shrink-0 flex items-center justify-center font-bold text-zinc-300 ${
        !empty ? color : ''
      } ${className}`}
    >
      {label}
    </div>
  );
}

/** The dotted-grid felt every diagram is drawn on. */
export function Container({ children }) {
  return (
    <div className="w-full h-48 md:h-56 bg-zinc-900/60 rounded-xl border border-zinc-700/50 relative overflow-hidden flex items-center justify-center p-4 mb-6">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      {children}
    </div>
  );
}

/** Bottom-right caption naming the layout. */
export function Caption({ children }) {
  return (
    <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">
      {children}
    </div>
  );
}
