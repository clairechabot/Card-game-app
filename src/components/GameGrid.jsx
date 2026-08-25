import { Search, Star } from 'lucide-react';
import { PLAYER_FILTERS } from '../lib/players';
import { GameCard } from './GameCard';

export function GameGrid({
  games,
  playerFilter,
  onPlayerFilterChange,
  onOpenGame,
  isFavorite,
  onToggleFavorite,
  emptyState,
}) {
  return (
    <>
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-1">
          Players:
        </span>
        {PLAYER_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => onPlayerFilterChange(f)}
            aria-pressed={playerFilter === f}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60 ${
              playerFilter === f
                ? 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200'
            }`}
          >
            {f === 'All' ? 'Any' : f === '4+' ? '4+' : `${f}P`}
          </button>
        ))}
      </div>

      {games.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-300">
          {games.map((game) => (
            <GameCard
              key={game.slug}
              game={game}
              onOpen={onOpenGame}
              isFavorite={isFavorite(game.slug)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
            {emptyState?.icon === 'star' ? (
              <Star size={32} className="text-zinc-600" />
            ) : (
              <Search size={32} className="text-zinc-600" />
            )}
          </div>
          <h3 className="text-lg font-medium text-zinc-300">
            {emptyState?.title ?? 'No games found'}
          </h3>
          <p className="text-zinc-500">
            {emptyState?.body ?? 'Try adjusting your search terms.'}
          </p>
        </div>
      )}
    </>
  );
}
