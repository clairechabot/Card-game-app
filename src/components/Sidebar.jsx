import { ChevronRight, Home, Grid, Star } from 'lucide-react';
import { categories } from '../data/categories';
import { navigate } from '../hooks/useHashRoute';

function SidebarItem({ id, label, Icon, activeView, onNavigate, badge }) {
  const isActive = activeView === id;
  return (
    <button
      type="button"
      onClick={() => onNavigate(id)}
      aria-current={isActive ? 'page' : undefined}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60 ${
        isActive
          ? 'bg-zinc-800 text-fuchsia-400 border border-zinc-700 shadow-sm'
          : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
      }`}
    >
      <Icon size={18} />
      <span className="font-medium">{label}</span>
      {badge ? <span className="ml-auto text-xs text-zinc-500">{badge}</span> : null}
      {isActive && !badge && <ChevronRight size={16} className="ml-auto" />}
    </button>
  );
}

export function Sidebar({ activeView, isOpen, onClose, favoriteCount }) {
  const go = (id) => {
    navigate(id);
    onClose();
    window.scrollTo(0, 0);
  };

  return (
    <aside
      // Off-screen on mobile, but still in the DOM — hide it from the
      // accessibility tree and from Tab order so focus cannot land inside it.
      aria-hidden={!isOpen ? 'true' : undefined}
      inert={!isOpen ? '' : undefined}
      className={`fixed top-0 left-0 h-full w-64 bg-zinc-950 border-r border-zinc-800 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:!visible ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-6">
        <button
          type="button"
          onClick={() => go('Home')}
          className="flex items-center gap-3 mb-8 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-fuchsia-900/30">
            <span className="text-xl font-bold text-white">♠</span>
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-indigo-300">
            Card Codex
          </h1>
        </button>

        <nav className="space-y-2">
          <SidebarItem id="Home" label="Home" Icon={Home} activeView={activeView} onNavigate={go} />
          <SidebarItem
            id="favorites"
            label="Favorites"
            Icon={Star}
            activeView={activeView}
            onNavigate={go}
            badge={favoriteCount || undefined}
          />
          <SidebarItem id="all" label="Browse All" Icon={Grid} activeView={activeView} onNavigate={go} />

          <div className="pt-4 pb-2">
            <p className="px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wider">
              Mechanisms
            </p>
          </div>

          {categories.map((cat) => (
            <SidebarItem
              key={cat.id}
              id={cat.id}
              label={cat.label}
              Icon={cat.icon}
              activeView={activeView}
              onNavigate={go}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}
