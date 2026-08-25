import { useEffect, useState } from 'react';

/**
 * Hash-based routing: `#/`, `#/favorites`, `#/all`, `#/<category>`, `#/game/<slug>`.
 *
 * Hash routing rather than the History API so that deep links survive on any
 * static host — Vercel, GitHub Pages — with no rewrite rules to configure.
 */
function parse(hash) {
  const path = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (path[0] === 'game' && path[1]) return { view: 'game', slug: path[1] };
  if (!path.length) return { view: 'Home' };
  return { view: decodeURIComponent(path[0]) };
}

function read() {
  return parse(typeof window === 'undefined' ? '' : window.location.hash);
}

export function useHashRoute() {
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onChange = () => setRoute(read());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export function toHash(view, slug) {
  if (view === 'game') return `#/game/${slug}`;
  if (view === 'Home') return '#/';
  return `#/${encodeURIComponent(view)}`;
}

/** Push a route, so the browser's back button steps back through it. */
export function navigate(view, slug) {
  window.location.hash = toHash(view, slug);
}
