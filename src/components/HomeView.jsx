import { Grid } from 'lucide-react';
import { categories } from '../data/categories';
import { games, countByCategory } from '../data/games';
import { navigate } from '../hooks/useHashRoute';

export function HomeView() {
  const go = (view) => {
    navigate(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8 md:mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Master the Deck</h1>
        <p className="text-zinc-400 text-lg">
          Games classified by primary mechanism, following David Parlett&apos;s{' '}
          <em>Penguin Book of Card Games</em>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const count = countByCategory(cat.id);
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => go(cat.id)}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-6 text-left hover:border-zinc-600 hover:shadow-xl hover:shadow-zinc-900/20 transition-all duration-300 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 transition-colors">{cat.label}</h3>
                <p
                  className={`text-sm font-medium ${cat.textColor} mb-3 opacity-80 uppercase tracking-wide`}
                >
                  {count} {count === 1 ? 'Game' : 'Games'}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">{cat.desc}</p>
              </div>

              <div className="absolute -bottom-6 -right-6 text-white/5 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                <Icon size={120} />
              </div>
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => go('all')}
          className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/50 border-dashed p-6 text-left hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-center items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/60"
        >
          <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors">
            <Grid className="text-zinc-300" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-zinc-300 group-hover:text-white mb-1">
            Browse Full Collection
          </h3>
          <p className="text-zinc-500 text-sm">View all {games.length} entries at once</p>
        </button>
      </div>
    </div>
  );
}
