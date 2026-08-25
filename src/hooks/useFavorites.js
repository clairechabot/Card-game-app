import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'card-codex:favorites';

/**
 * Favorites, keyed by slug and persisted to localStorage.
 *
 * Every access is guarded: localStorage throws outright in some privacy modes
 * rather than merely returning null, and a codex that refuses to render
 * because it could not read a bookmark list would be a poor trade.
 */
function load() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((s) => typeof s === 'string') : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(load);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // Storage unavailable or full — favorites stay for this session only.
    }
  }, [favorites]);

  const toggleFavorite = useCallback((slug) => {
    setFavorites((current) =>
      current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug]
    );
  }, []);

  const isFavorite = useCallback((slug) => favorites.includes(slug), [favorites]);

  return { favorites, toggleFavorite, isFavorite };
}
