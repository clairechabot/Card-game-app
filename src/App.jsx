import { useEffect, useMemo, useState } from 'react';
import { categories, getCategory } from './data/categories';
import { games, getGameBySlug } from './data/games';
import { matchesPlayerFilter } from './lib/players';
import { useHashRoute, navigate } from './hooks/useHashRoute';
import { useFavorites } from './hooks/useFavorites';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { GameGrid } from './components/GameGrid';
import { GameModal } from './components/GameModal';

const CATEGORY_IDS = categories.map((c) => c.id);

export default function App() {
  const route = useHashRoute();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');
  const [playerFilter, setPlayerFilter] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // `#/game/<slug>` layers a dialog over whichever list the reader came from,
  // so the list view is derived from the route minus any game segment.
  const selectedGame = route.view === 'game' ? getGameBySlug(route.slug) : undefined;
  const [listView, setListView] = useState(route.view === 'game' ? 'all' : route.view);

  useEffect(() => {
    if (route.view !== 'game') setListView(route.view);
  }, [route.view]);

  // Filters are scoped to the list being browsed, so reset them on arrival.
  useEffect(() => {
    setSearchQuery('');
    setPlayerFilter('All');
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [listView]);

  const isHome = listView === 'Home' && !searchQuery;
  const isFavoritesView = listView === 'favorites';
  const activeCategory = CATEGORY_IDS.includes(listView) ? listView : null;

  const visibleGames = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return games.filter((game) => {
      if (activeCategory && game.category !== activeCategory) return false;
      if (isFavoritesView && !favorites.includes(game.slug)) return false;
      if (!matchesPlayerFilter(game.players, playerFilter)) return false;
      if (!query) return true;
      return (
        game.title.toLowerCase().includes(query) ||
        game.blurb.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, isFavoritesView, favorites, playerFilter, searchQuery]);

  const title = isHome
    ? 'Lobby'
    : isFavoritesView
      ? 'Favorites'
      : (getCategory(listView)?.label ?? 'All Games');

  const subtitle = isHome
    ? null
    : `${visibleGames.length} ${visibleGames.length === 1 ? 'entry' : 'entries'} found`;

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    // Searching from the lobby has nothing to filter, so drop into the full list.
    if (value && listView === 'Home') setListView('all');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-fuchsia-500/30">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <Sidebar
        activeView={listView}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        favoriteCount={favorites.length}
      />

      <main className="lg:ml-64 min-h-screen relative">
        <Header
          title={title}
          subtitle={subtitle}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />

        <div className="p-4 md:p-8 max-w-5xl mx-auto">
          {isHome ? (
            <HomeView />
          ) : (
            <GameGrid
              games={visibleGames}
              playerFilter={playerFilter}
              onPlayerFilterChange={setPlayerFilter}
              onOpenGame={(game) => navigate('game', game.slug)}
              isFavorite={isFavorite}
              onToggleFavorite={toggleFavorite}
              emptyState={
                isFavoritesView && !favorites.length
                  ? {
                      icon: 'star',
                      title: 'No favorites yet',
                      body: 'Star a game to keep it here.',
                    }
                  : undefined
              }
            />
          )}
        </div>
      </main>

      {selectedGame && (
        <GameModal
          key={selectedGame.slug}
          game={selectedGame}
          onClose={() => navigate(listView)}
          isFavorite={isFavorite(selectedGame.slug)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}
