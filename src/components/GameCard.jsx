import { ChevronRight, Star } from 'lucide-react';
import { getCategoryBadgeClass } from '../data/categories';

export function GameCard({ game, onOpen, isFavorite, onToggleFavorite }) {
  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 rounded-xl hover:border-fuchsia-500/40 hover:shadow-lg hover:shadow-fuchsia-900/20 focus-within:border-fuchsia-500/40 transition-all duration-300 overflow-hidden">
      {/* Fuchsia glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 pointer-events-none" />

      <button
        type="button"
        onClick={() => onOpen(game)}
        className="w-full text-left p-5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60"
      >
        <div className="flex flex-wrap gap-2 items-start mb-3 relative z-10 pr-8">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full border ${getCategoryBadgeClass(
              game.category
            )}`}
          >
            {game.players}
          </span>
          {game.subType && (
            <span className="text-xs font-medium px-2 py-1 rounded-full border border-indigo-500/30 text-indigo-300 bg-indigo-500/10">
              {game.subType}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors relative z-10">
          {game.title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3 relative z-10">
          {game.blurb}
        </p>

        <span className="flex items-center text-fuchsia-400 text-sm font-medium relative z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all">
          Read Rules <ChevronRight size={16} className="ml-1" />
        </span>
      </button>

      <button
        type="button"
        onClick={() => onToggleFavorite(game.slug)}
        aria-pressed={isFavorite}
        aria-label={isFavorite ? `Remove ${game.title} from favorites` : `Add ${game.title} to favorites`}
        className={`absolute top-4 right-4 z-20 p-1.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60 ${
          isFavorite
            ? 'text-amber-400 hover:text-amber-300'
            : 'text-zinc-600 hover:text-zinc-300'
        }`}
      >
        <Star size={16} fill={isFavorite ? 'currentColor' : 'none'} />
      </button>
    </div>
  );
}
