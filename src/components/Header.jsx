import { Search, Menu } from 'lucide-react';

export function Header({ title, subtitle, searchQuery, onSearchChange, onOpenSidebar }) {
  return (
    <header className="sticky top-0 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-20 px-4 py-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenSidebar}
            aria-label="Open navigation menu"
            className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60 rounded"
          >
            <Menu size={24} />
          </button>
          <div>
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            {subtitle && <p className="text-sm text-zinc-400 hidden md:block">{subtitle}</p>}
          </div>
        </div>

        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-zinc-500" aria-hidden="true" />
          </div>
          <input
            type="search"
            aria-label="Search the codex"
            placeholder="Search Codex..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 transition-all"
          />
        </div>
      </div>
    </header>
  );
}
