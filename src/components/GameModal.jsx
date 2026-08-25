import { useEffect, useRef } from 'react';
import { X, Play, BookOpen, ExternalLink, LayoutTemplate, Star } from 'lucide-react';
import { getCategoryBadgeClass } from '../data/categories';
import { GameVisualizer } from './visualizers/GameVisualizer';
import { RulesText } from './RulesText';

const FOCUSABLE = 'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

function openVideo(game) {
  if (game.videoUrl) {
    window.open(game.videoUrl, '_blank', 'noopener,noreferrer');
    return;
  }
  if (game.videoQuery) {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(game.videoQuery)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

export function GameModal({ game, onClose, isFavorite, onToggleFavorite }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Move focus in on open and hand it back to whatever opened the dialog on
  // close, so keyboard users do not get dropped at the top of the document.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();
    return () => {
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, []);

  // Escape to close, and keep Tab inside the dialog while it is open.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll(FOCUSABLE);
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  // Stop the page behind the dialog from scrolling.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const headingId = `game-title-${game.slug}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        className="bg-zinc-900 border border-zinc-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative z-50 animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="sticky top-0 bg-zinc-900/95 backdrop-blur border-b border-zinc-800 p-6 flex justify-between items-start gap-4 z-10">
          <div>
            <span
              className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-2 inline-block border ${getCategoryBadgeClass(
                game.category
              )}`}
            >
              {game.category}
              {game.subType ? ` · ${game.subType}` : ''} • {game.players}
            </span>
            <h2 id={headingId} className="text-2xl md:text-3xl font-bold text-white mt-1">
              {game.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onToggleFavorite(game.slug)}
              aria-pressed={isFavorite}
              aria-label={
                isFavorite
                  ? `Remove ${game.title} from favorites`
                  : `Add ${game.title} to favorites`
              }
              className={`p-2 bg-zinc-800 rounded-full transition-colors hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60 ${
                isFavorite ? 'text-amber-400' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Star size={20} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="p-2 bg-zinc-800 rounded-full text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-800">
            <p className="text-lg text-zinc-300 font-light italic leading-relaxed">
              &ldquo;{game.blurb}&rdquo;
            </p>
          </div>

          {(game.layout || game.layoutSpec) && (
            <div>
              <h3 className="text-lg font-semibold text-fuchsia-400 mb-3 flex items-center gap-2">
                <LayoutTemplate size={20} />
                Setup Diagram
              </h3>
              <GameVisualizer game={game} />
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold text-fuchsia-400 mb-3 flex items-center gap-2">
              <BookOpen size={20} />
              How to Play
            </h3>
            <RulesText instructions={game.instructions} />
          </div>

          <div className="pt-4 border-t border-zinc-800">
            <button
              type="button"
              onClick={() => openVideo(game)}
              className={`w-full flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-xl transition-all shadow-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60 ${
                game.videoUrl
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-900/20'
                  : 'bg-zinc-700 hover:bg-zinc-600 text-zinc-200 shadow-zinc-900/20'
              }`}
            >
              <Play size={20} fill={game.videoUrl ? 'currentColor' : 'none'} />
              {game.videoUrl ? 'Watch Tutorial' : 'Find Tutorial on YouTube'}
              {game.videoUrl && <ExternalLink size={16} className="ml-1 opacity-70" />}
            </button>
            <p className="text-center text-zinc-500 text-xs mt-3">
              {game.videoUrl ? 'Opens direct video link' : 'Opens a YouTube search'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
