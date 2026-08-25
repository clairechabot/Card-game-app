const HEADINGS = [
  'Preliminaries:',
  'Object:',
  'The Play:',
  'Scoring:',
  'Setup:',
  'Gameplay:',
  'Goal:',
  'Technique:',
  'Method:',
];

/**
 * Renders a game's `instructions` string.
 *
 * The rules are stored as plain text whose structure is carried by the
 * `Preliminaries: / Object: / The Play: / Scoring:` prefixes and by bullet
 * characters, so this restores that structure as markup.
 */
export function RulesText({ instructions }) {
  return (
    <div className="text-zinc-300 leading-7 space-y-3">
      {instructions.split('\n').map((line, index) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        const isHeading =
          trimmed.endsWith(':') || HEADINGS.some((h) => trimmed.startsWith(h));

        if (isHeading) {
          return (
            <p
              key={index}
              className="font-bold text-white mt-4 mb-1 border-b border-zinc-700/50 pb-1"
            >
              {trimmed}
            </p>
          );
        }

        const isSubBullet =
          trimmed.startsWith('◦') ||
          trimmed.startsWith('▪') ||
          (/^\d+\./.test(trimmed) && !trimmed.includes('•'));
        const isBullet = trimmed.startsWith('•') || /^\d+\./.test(trimmed);

        return (
          <p key={index} className={`flex gap-3 ${isSubBullet ? 'pl-6 text-zinc-400 text-sm' : ''}`}>
            {isBullet && !isSubBullet && (
              <span className="text-fuchsia-400 font-bold select-none min-w-[10px]">•</span>
            )}
            {isSubBullet && (
              <span className="text-zinc-500 font-bold select-none min-w-[10px]">-</span>
            )}
            <span>{trimmed.replace(/^[•◦▪]\s*/, '')}</span>
          </p>
        );
      })}
    </div>
  );
}
