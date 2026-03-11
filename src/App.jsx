import { useState } from 'react';
import { Search, X, Play, BookOpen, ChevronRight, Menu, Home, Grid, ExternalLink, LayoutTemplate, Sword, Grab, Layers, Package, ListOrdered, Eye, Landmark } from 'lucide-react';

const CardCodex = () => {
  const [activeCategory, setActiveCategory] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [playerFilter, setPlayerFilter] = useState('All');

  // --- Visualizer Components ---
  const Card = ({ label, color = "bg-slate-700", className = "", empty = false }) => (
    <div className={`w-8 h-11 md:w-10 md:h-14 rounded border ${empty ? 'border-dashed border-slate-600 bg-transparent' : 'border-slate-600 shadow-sm'} flex items-center justify-center text-[8px] md:text-[10px] font-bold text-slate-300 ${!empty ? color : ''} ${className}`}>
      {label}
    </div>
  );

  const GameVisualizer = ({ type }) => {
    const Container = ({ children }) => (
      <div className="w-full h-48 md:h-56 bg-emerald-950/30 rounded-xl border border-emerald-900/50 relative overflow-hidden flex items-center justify-center p-4 mb-6">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #34d399 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        {children}
      </div>
    );

    switch (type) {

      // ── 4-player trick table (Spades, Hearts, Euchre, Barbu) ─────────────
      case 'tricktaking':
        return (
          <Container>
            <div className="relative w-48 h-48">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-1">
                <Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1">
                <Card color="bg-emerald-600/20" /><Card color="bg-emerald-600/20" /><Card color="bg-emerald-600/20" />
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2"><Card color="bg-slate-700/50" /></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2"><Card color="bg-slate-700/50" /></div>
              {/* Current trick */}
              <div className="absolute inset-0 m-auto w-20 h-20 border border-slate-700 rounded-lg bg-slate-800/60">
                <div className="relative w-full h-full">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-7 rounded-sm border border-slate-500 bg-white/10 flex items-center justify-center text-[7px] font-bold text-slate-300">N</div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-7 rounded-sm border border-emerald-600/40 bg-emerald-500/10 flex items-center justify-center text-[7px] font-bold text-emerald-300">S</div>
                  <div className="absolute top-1/2 left-1 -translate-y-1/2 w-5 h-7 rounded-sm border border-slate-500 bg-white/10 flex items-center justify-center text-[7px] font-bold text-slate-300">W</div>
                  <div className="absolute top-1/2 right-1 -translate-y-1/2 w-5 h-7 rounded-sm border border-slate-500 bg-white/10 flex items-center justify-center text-[7px] font-bold text-slate-300">E</div>
                </div>
              </div>
            </div>
            <div className="absolute top-3 right-3 flex flex-col items-center gap-0.5">
              <Card label="♠" color="bg-indigo-500/30" />
              <span className="text-[8px] text-indigo-400 uppercase">Trump</span>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Trick Table</div>
          </Container>
        );

      // ── 3-player trick table (Ninety-Nine, Nap, Skat) ────────────────────
      case 'tricktaking3':
        return (
          <Container>
            <div className="relative w-48 h-48">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-1">
                <Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" />
              </div>
              <div className="absolute bottom-0 right-4 flex gap-1">
                <Card color="bg-emerald-600/20" /><Card color="bg-emerald-600/20" />
              </div>
              <div className="absolute bottom-0 left-4 flex gap-1">
                <Card color="bg-slate-700/50" /><Card color="bg-slate-700/50" />
              </div>
              <div className="absolute inset-0 m-auto w-20 h-16 border border-slate-700 rounded-lg bg-slate-800/60 flex items-center justify-center gap-2">
                <div className="w-5 h-7 rounded-sm border border-slate-500 bg-white/10 flex items-center justify-center text-[7px] font-bold text-slate-300">N</div>
                <div className="w-5 h-7 rounded-sm border border-slate-500 bg-white/10 flex items-center justify-center text-[7px] font-bold text-slate-300">W</div>
                <div className="w-5 h-7 rounded-sm border border-emerald-600/40 bg-emerald-500/10 flex items-center justify-center text-[7px] font-bold text-emerald-300">E</div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">3-Player Table</div>
          </Container>
        );

      // ── Cassino ───────────────────────────────────────────────────────────
      case 'cassino':
        return (
          <Container>
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] text-slate-500 uppercase tracking-wider">Table cards</span>
                <div className="flex gap-2">
                  <Card label="4♥" color="bg-rose-800/30" />
                  <Card label="5♣" color="bg-white/10" />
                  <Card label="9♦" color="bg-amber-800/30" />
                  <Card label="K♠" color="bg-slate-600/30" />
                </div>
              </div>
              <div className="flex gap-6 items-end">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex flex-col -space-y-9 opacity-50">
                    <Card color="bg-white/5" /><Card color="bg-white/5" />
                  </div>
                  <span className="text-[8px] text-slate-500 mt-1">Captures</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex gap-1">
                    <Card label="9♥" color="bg-emerald-600/20" />
                    <Card label="4♠" color="bg-emerald-600/20" />
                  </div>
                  <span className="text-[8px] text-slate-500">Your hand</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Cassino Layout</div>
          </Container>
        );

      // ── War ───────────────────────────────────────────────────────────────
      case 'war':
        return (
          <Container>
            <div className="flex items-center gap-6 md:gap-10">
              <div className="flex flex-col items-center gap-1">
                <div className="flex flex-col -space-y-9">
                  <Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" />
                </div>
                <span className="text-[8px] text-slate-500 mt-2">P1 Deck</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-3 items-center">
                  <Card label="K♣" color="bg-blue-500/20" />
                  <span className="text-slate-500 text-xs font-bold">VS</span>
                  <Card label="9♥" color="bg-rose-500/20" />
                </div>
                <div className="flex gap-1 opacity-30">
                  <Card color="bg-white/5" /><Card color="bg-white/5" /><Card color="bg-white/5" />
                </div>
                <span className="text-[8px] text-slate-600">War stake</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex flex-col -space-y-9">
                  <Card color="bg-rose-900/40" /><Card color="bg-rose-900/40" /><Card color="bg-rose-900/40" />
                </div>
                <span className="text-[8px] text-slate-500 mt-2">P2 Deck</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Battle Setup</div>
          </Container>
        );

      // ── Crazy Eights ──────────────────────────────────────────────────────
      case 'crazyeights':
        return (
          <Container>
            <div className="flex items-end gap-4 md:gap-8">
              <div className="flex gap-2 items-end">
                <div className="flex flex-col items-center gap-1">
                  <Card color="bg-blue-900/40" />
                  <span className="text-[8px] text-slate-500">Stock</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Card label="Q♣" color="bg-white/10" />
                  <span className="text-[8px] text-slate-500">Discard</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-emerald-500/40 flex items-center justify-center">
                  <span className="text-lg text-emerald-400">♣</span>
                </div>
                <span className="text-[8px] text-emerald-500">Suit</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-1">
                  <Card label="Q♠" color="bg-white/10" />
                  <Card label="8♦" color="bg-amber-500/30" className="border-amber-400/40" />
                  <Card label="3♣" color="bg-white/10" />
                </div>
                <span className="text-[8px] text-slate-500">Hand <span className="text-amber-400">(8=Wild)</span></span>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Crazy Eights</div>
          </Container>
        );

      // ── President ─────────────────────────────────────────────────────────
      case 'president':
        return (
          <Container>
            <div className="relative w-44 h-44">
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 origin-center"
                  style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-52px)` }}
                >
                  <div className={`w-8 h-11 rounded border ${
                    i === 0 ? 'border-amber-500/60 bg-amber-700/30' :
                    i === 3 ? 'border-slate-700/30 bg-slate-800/20' :
                    'border-slate-600 bg-blue-900/30'
                  } flex items-center justify-center`}>
                    <span
                      className={`text-[8px] font-bold ${i === 0 ? 'text-amber-400' : i === 3 ? 'text-slate-600' : 'text-slate-400'}`}
                      style={{ transform: `rotate(${-deg}deg)` }}
                    >
                      {i === 0 ? '★' : i === 3 ? '✕' : ''}
                    </span>
                  </div>
                </div>
              ))}
              <div className="absolute inset-0 m-auto w-14 h-14 rounded-full border-2 border-dashed border-slate-600 bg-slate-900/60 flex flex-col items-center justify-center gap-0.5">
                <div className="flex -space-x-2">
                  <div className="w-4 h-6 rounded-sm border border-slate-600 bg-white/10 flex items-center justify-center text-[6px] font-bold text-slate-300">K</div>
                  <div className="w-4 h-6 rounded-sm border border-slate-600 bg-white/10 flex items-center justify-center text-[6px] font-bold text-slate-300">K</div>
                </div>
                <span className="text-[6px] text-slate-500">Pile</span>
              </div>
            </div>
            <div className="absolute top-2 left-2 text-[8px] text-amber-400/70">★ President  ✕ Scum</div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Climbing Game</div>
          </Container>
        );

      // ── Cheat ─────────────────────────────────────────────────────────────
      case 'cheat':
        return (
          <Container>
            <div className="flex items-end gap-5 md:gap-8">
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-0.5">
                  <Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" />
                </div>
                <span className="text-[8px] text-slate-500">P1</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex flex-col -space-y-9">
                  <Card color="bg-white/5" /><Card color="bg-white/5" /><Card color="bg-rose-900/30" />
                </div>
                <div className="mt-2 px-2 py-0.5 rounded border border-rose-500/30 bg-rose-900/20">
                  <span className="text-[8px] text-rose-400 font-bold">Cheat?</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-0.5">
                  <Card color="bg-emerald-600/20" /><Card color="bg-emerald-600/20" />
                </div>
                <span className="text-[8px] text-slate-500">You</span>
              </div>
            </div>
            <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] text-slate-500 italic whitespace-nowrap">"Three Tens" (face down)</div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Cheat Layout</div>
          </Container>
        );

      // ── Durak ─────────────────────────────────────────────────────────────
      case 'durak':
        return (
          <Container>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-1">
                  <Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" />
                </div>
                <span className="text-[8px] text-slate-500">Defender</span>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center">
                  <Card label="K♠" color="bg-rose-700/20" />
                  <Card label="A♠" color="bg-blue-600/20" className="-mt-6" />
                </div>
                <div className="flex flex-col items-center">
                  <Card label="7♥" color="bg-rose-700/20" />
                  <Card empty className="-mt-6" />
                </div>
              </div>
              <div className="flex items-end gap-5">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex gap-1">
                    <Card color="bg-emerald-600/20" /><Card color="bg-emerald-600/20" />
                  </div>
                  <span className="text-[8px] text-slate-500">Attacker</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <Card color="bg-blue-900/40" />
                  <Card label="♠" color="bg-indigo-500/20" className="-mt-3" />
                  <span className="text-[8px] text-indigo-400">Trump</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Durak Setup</div>
          </Container>
        );

      // ── Stops / Newmarket ──────────────────────────────────────────────────
      case 'stops':
        return (
          <Container>
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] text-amber-400/70 uppercase tracking-wider">Boodle cards</span>
                <div className="flex gap-2">
                  {['K♠','K♥','K♦','K♣'].map((k, i) => (
                    <div key={i} className="relative">
                      <Card label={k} color="bg-amber-700/30" />
                      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-amber-400/60 border border-amber-500/50" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 items-end">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[8px] text-slate-500 uppercase">Run</span>
                  <div className="flex gap-1">
                    <Card label="7♥" color="bg-white/10" />
                    <Card label="8♥" color="bg-white/10" />
                    <Card label="9♥" color="bg-white/10" />
                    <Card empty label="?" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Card color="bg-slate-700/40" />
                  <span className="text-[8px] text-slate-500">Kitty</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Boodle Layout</div>
          </Container>
        );

      // ── Piquet ────────────────────────────────────────────────────────────
      case 'piquet':
        return (
          <Container>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] text-slate-500">Younger</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4].map(i => <Card key={i} color="bg-blue-900/40" />)}
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] text-amber-400/70">Talon (8)</span>
                <div className="flex flex-col -space-y-8">
                  {[1,2,3,4].map(i => <Card key={i} color="bg-amber-700/30" />)}
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] text-slate-500">Elder (you)</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4].map(i => <Card key={i} color="bg-emerald-600/20" />)}
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Piquet Setup</div>
          </Container>
        );

      // ── Competitive patience (Spite & Malice, Racing Demon) ───────────────
      case 'comppatience':
        return (
          <Container>
            <div className="flex items-center gap-3 md:gap-5">
              <div className="flex flex-col items-center gap-1">
                <div className="flex flex-col -space-y-9">
                  <Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" /><Card color="bg-white/15" />
                </div>
                <span className="text-[8px] text-blue-400/70 mt-1">P1 Pile</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-[8px] text-slate-500 uppercase tracking-wider">Shared</span>
                <div className="flex gap-1">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex flex-col -space-y-8">
                      <Card color="bg-white/5" /><Card color="bg-white/5" /><Card label="A" color="bg-emerald-700/30" />
                    </div>
                  ))}
                </div>
                <span className="text-[7px] text-emerald-600/70">Build A → K</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex flex-col -space-y-9">
                  <Card color="bg-purple-900/40" /><Card color="bg-purple-900/40" /><Card color="bg-white/15" />
                </div>
                <span className="text-[8px] text-purple-400/70 mt-1">P2 Pile</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Racing Layout</div>
          </Container>
        );

      // ── Spit ──────────────────────────────────────────────────────────────
      case 'spit':
        return (
          <Container>
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1 opacity-60">
                {[2,3,1,2,3].map((depth, i) => (
                  <div key={i} className="flex flex-col -space-y-8">
                    {Array.from({length: Math.min(depth, 2)}).map((_, j) => (
                      <Card key={j} color={j === Math.min(depth,2)-1 ? 'bg-white/15' : 'bg-blue-900/30'} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex gap-8 items-center">
                <div className="flex flex-col items-center gap-0.5">
                  <Card label="7" color="bg-white/10" />
                  <span className="text-[7px] text-slate-500">Spit</span>
                </div>
                <span className="text-slate-600 text-sm">⟵ ⟶</span>
                <div className="flex flex-col items-center gap-0.5">
                  <Card label="8" color="bg-white/10" />
                  <span className="text-[7px] text-slate-500">Spit</span>
                </div>
              </div>
              <div className="flex gap-1">
                {[1,3,2,1,3].map((depth, i) => (
                  <div key={i} className="flex flex-col -space-y-8">
                    {Array.from({length: Math.min(depth, 2)}).map((_, j) => (
                      <Card key={j} color={j === Math.min(depth,2)-1 ? 'bg-emerald-600/20' : 'bg-blue-900/30'} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Spit Layout</div>
          </Container>
        );

      // ── Napoleon at St Helena ─────────────────────────────────────────────
      case 'napoleon':
        return (
          <Container>
            <div className="flex items-start gap-1.5">
              {[3,2,4,2,3].map((depth, i) => (
                <div key={i} className="flex flex-col -space-y-8">
                  {Array.from({length: depth}).map((_, j) => (
                    <Card key={j} color={j === depth-1 ? 'bg-white/15' : 'bg-blue-900/30'} />
                  ))}
                </div>
              ))}
              <div className="flex flex-col gap-2 ml-2">
                <div className="flex flex-col items-center gap-0.5">
                  <Card label="A" color="bg-emerald-700/30" />
                  <span className="text-[7px] text-emerald-600">↑ K</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <Card label="K" color="bg-rose-700/30" />
                  <span className="text-[7px] text-rose-600">↓ A</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">St Helena</div>
          </Container>
        );

      // ── Aces Up ───────────────────────────────────────────────────────────
      case 'acesup':
        return (
          <Container>
            <div className="flex items-start gap-4">
              <div className="flex gap-2">
                <div className="flex flex-col -space-y-8">
                  <Card color="bg-white/5" /><Card color="bg-white/5" /><Card label="A♠" color="bg-emerald-700/30" />
                </div>
                <div className="flex flex-col -space-y-8">
                  <Card color="bg-white/5" /><Card label="Q♥" color="bg-rose-700/20" />
                </div>
                <div className="flex flex-col -space-y-8">
                  <Card color="bg-white/5" /><Card color="bg-white/5" /><Card label="J♥" color="bg-rose-700/20" />
                </div>
                <Card empty label="A♦" />
              </div>
              <div className="flex flex-col items-center gap-1 mt-auto">
                <Card color="bg-blue-900/40" />
                <span className="text-[8px] text-slate-500">Stock</span>
              </div>
            </div>
            <div className="absolute top-3 left-3 text-[8px] text-slate-500 leading-4">Discard lower<br/>same-suit cards</div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Aces Up</div>
          </Container>
        );

      // ── Draw Poker ────────────────────────────────────────────────────────
      case 'poker':
        return (
          <Container>
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-8">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex gap-0.5">
                    <Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" />
                  </div>
                  <span className="text-[8px] text-slate-500">P2</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex gap-0.5">
                    <Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" />
                  </div>
                  <span className="text-[8px] text-slate-500">P3</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-900/20">
                  {[1,2,3].map(i => <div key={i} className="w-3 h-3 rounded-full bg-amber-400/60" />)}
                  <span className="text-[8px] text-amber-400 ml-1">Pot</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <Card color="bg-blue-900/40" />
                  <span className="text-[7px] text-slate-500">Draw</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-0.5">
                  {['A♠','K♠','Q♠','J♠','T♠'].map((c,i) => <Card key={i} label={c} color="bg-emerald-600/20" />)}
                </div>
                <span className="text-[8px] text-slate-500">Your hand</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Draw Poker</div>
          </Container>
        );

      // ── Pontoon ───────────────────────────────────────────────────────────
      case 'pontoon':
        return (
          <Container>
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-1">
                  <Card label="?" color="bg-slate-700/60" />
                  <Card label="K♠" color="bg-white/10" />
                </div>
                <span className="text-[8px] text-slate-500">Banker</span>
              </div>
              <div className="flex items-center gap-1.5">
                {[1,2,3].map(i => <div key={i} className="w-4 h-4 rounded-full bg-amber-400/60 border border-amber-500/50" />)}
                <span className="text-[8px] text-amber-500 ml-1">Stakes</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-1">
                  <Card label="A♥" color="bg-emerald-600/20" />
                  <Card label="K♣" color="bg-emerald-600/20" />
                </div>
                <div className="px-2 py-0.5 rounded-full bg-emerald-900/30 border border-emerald-500/30">
                  <span className="text-[8px] text-emerald-400 font-bold">Pontoon! (21)</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Banking Layout</div>
          </Container>
        );

      // ── Klondike Solitaire ────────────────────────────────────────────────
      case 'klondike':
        return (
          <Container>
            <div className="w-full max-w-sm flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Card label="Draw" color="bg-blue-900/40" />
                  <Card label="Face" color="bg-white/10" />
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(i => <Card key={i} label="A" empty />)}
                </div>
              </div>
              <div className="flex justify-between mt-2">
                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                  <div key={i} className="flex flex-col -space-y-8">
                    {Array.from({ length: Math.min(i, 3) }).map((_, idx) => (
                      <Card key={idx} className={idx === Math.min(i, 3) - 1 ? 'bg-white/10' : 'bg-blue-900/40'} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Klondike Setup</div>
          </Container>
        );

      default:
        return null;
    }
  };


  // --- Category Configuration (Parlett's Primary Mechanisms) ---
  const categories = [
    {
      id: 'Trick-Taking',
      label: 'Trick-Taking',
      icon: Sword,
      desc: 'Win tricks to fulfil contracts or accumulate card-points.',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-200'
    },
    {
      id: 'Card-Taking',
      label: 'Card-Taking',
      icon: Grab,
      desc: 'Capture cards from a central layout by matching or summing.',
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-200'
    },
    {
      id: 'Shedding',
      label: 'Shedding',
      icon: Layers,
      desc: 'Race to be the first to empty your hand of all cards.',
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-200'
    },
    {
      id: 'Collecting',
      label: 'Collecting',
      icon: Package,
      desc: 'Form matched sets and sequences in your hand.',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-200'
    },
    {
      id: 'Ordering',
      label: 'Ordering / Patience',
      icon: ListOrdered,
      desc: 'Arrange a shuffled pack into a specific sequence or order.',
      color: 'from-slate-400 to-slate-600',
      textColor: 'text-slate-200'
    },
    {
      id: 'Vying',
      label: 'Vying',
      icon: Eye,
      desc: 'Bet on your hand strength or bluff opponents into folding.',
      color: 'from-rose-500 to-red-600',
      textColor: 'text-rose-200'
    },
    {
      id: 'Banking',
      label: 'Banking',
      icon: Landmark,
      desc: 'Bet against a central bank or house dealer.',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-200'
    },
  ];

  const gamesData = [
    // --- TRICK-TAKING ---
    {
      id: 1,
      title: "Spades",
      category: "Trick-Taking",
      subType: "Plain-trick",
      players: "4 Players",
      blurb: "A partnership game where Spades are permanently trump and each side bids how many tricks they will win.",
      instructions: `Preliminaries: Four players in fixed partnerships. 52-card pack ranked A K Q J T 9 8 7 6 5 4 3 2. Thirteen cards dealt each. Spades are always trump.
Object: Each partnership bids a minimum number of tricks to win, or a player may bid Nil to lose every trick.
The Play:
• Eldest must lead their lowest Club; the highest Club wins the first trick and leads next.
• Players must follow suit if possible; otherwise they may play any card.
• Spades may not be led until the suit is "broken" by a spade played on a void.
Scoring:
• Make bid: 10 × bid + 1 per overtrick. Ten overtricks deduct 100 (sandbagging).
• Miss bid: −10 per trick bid.
• Nil: +50 if successful, −50 if failed.
• Game: 500 points.`,
      videoUrl: "https://youtu.be/0aX1JfkAuQA",
      layout: "tricktaking"
    },
    {
      id: 2,
      title: "Ninety-Nine",
      category: "Trick-Taking",
      subType: "Plain-trick",
      players: "3 Players",
      blurb: "Players secretly bid by discarding three cards — the suit of each card represents a number — then race to win exactly that many tricks.",
      instructions: `Preliminaries: Three players. 36-card pack ranked A K Q J T 9 8 7 6. Twelve cards dealt each.
Object: Bid and win an exact number of tricks. Bid by discarding three cards face down: Clubs=3, Hearts=2, Spades=1, Diamonds=0.
The Play:
• First deal is played at no trump; subsequent trumps depend on how many players succeeded in the previous deal.
• Eldest leads; players follow suit if possible.
• Highest card of the suit led wins, or highest trump if any are played.
Scoring:
• Every player scores 1 point per trick won.
• Successful bidders score a bonus: 10 if all three succeeded, 20 if two, 30 if one.
• Premium bonuses for declaring or revealing bids face up before play.
• Game: 100 points.`,
      videoQuery: "Ninety-Nine card game David Parlett rules how to play",
      layout: "tricktaking3"
    },
    {
      id: 3,
      title: "Hearts",
      category: "Trick-Taking",
      subType: "Plain-trick",
      players: "3–6 Players",
      blurb: "An avoidance game where hearts and the Queen of Spades score penalty points — unless you dare to shoot the moon.",
      instructions: `Preliminaries: Three to six players. 52-card pack. Thirteen cards dealt each. Players pass three cards to a neighbour before play.
Object: Avoid winning tricks containing hearts or the Queen of Spades.
The Play:
• Holder of the 2♣ leads first.
• Players must follow suit if possible.
• Hearts may not be led until the suit is "broken" by a heart discarded on a void.
Scoring:
• 1 penalty point per Heart won; 13 points for the Queen of Spades.
• Shooting the Moon: taking all 14 penalty cards deducts 26 from your score (or adds 26 to all others).
• Game ends when any player reaches 100; lowest score wins.`,
      videoQuery: "Hearts card game how to play rules",
      layout: "tricktaking"
    },
    {
      id: 4,
      title: "Nap",
      category: "Trick-Taking",
      subType: "Plain-trick",
      players: "3–7 Players",
      blurb: "Name your trump by promising to win a set number of tricks — bid Nap to claim all five and earn the highest reward.",
      instructions: `Preliminaries: Three to seven players using a stripped pack. Five cards dealt each.
Object: Bid and win your contracted number of tricks; the highest bidder establishes the trump suit.
The Play:
• Bids run from two up to Nap (all five tricks), Wellington, and Blucher.
• Highest bidder leads their first card, fixing the trump suit by its suit.
• Players follow suit if possible; a trump beats all non-trumps.
Scoring:
• Successful bidder wins one unit per trick bid from each opponent.
• Failed bidder pays the same to each opponent.
• Nap: wins 10 if successful, loses 5 if not. Wellington and Blucher carry higher stakes.`,
      videoQuery: "Nap Napoleon card game how to play",
      layout: "tricktaking3"
    },
    {
      id: 5,
      title: "Euchre",
      category: "Trick-Taking",
      subType: "Plain-trick",
      players: "4 Players",
      blurb: "A fast partnership game with a 25-card pack where the Joker and both Jacks of the trump colour hold the highest trumps.",
      instructions: `Preliminaries: Four players in two partnerships. 25-card pack including Joker. Five cards dealt each; one card turned up to propose trump.
Object: The making partnership (Makers) must win at least three of the five tricks.
The Play:
• Trump hierarchy: Joker, Right Bower (trump Jack), Left Bower (same-colour Jack), A K Q T 9.
• Maker leads; players follow suit if possible. Highest trump wins; otherwise highest card of the suit led wins.
Scoring:
• Makers win 3–4 tricks: 1 point.
• Makers win all 5 (march): 2 points.
• Lone hand march: 4 points.
• Euchre (Makers fail to reach 3 tricks): opponents score 2 points.
• Game: first to 10 points.`,
      videoQuery: "Euchre card game how to play rules",
      layout: "tricktaking"
    },
    {
      id: 6,
      title: "Barbu",
      category: "Trick-Taking",
      subType: "Plain-trick",
      players: "4 Players",
      blurb: "A demanding contract game spanning 28 deals where each dealer in turn chooses one of seven different scoring contracts.",
      instructions: `Preliminaries: Four players. 52-card pack. Thirteen cards each. Each player deals seven times for 28 deals total.
Object: Score positive points and avoid negative penalties based on the dealer's chosen contract for each deal.
The Play:
• Dealer chooses one of seven contracts: No Hearts, No Queens, No Tricks, No Last Two Tricks, Trump, Domino, or Nullo.
• Each contract has its own play method and scoring structure.
• All seven contracts must be completed once per player before a new rotation.
Scoring:
• Negative points for penalties taken (hearts, queens, tricks, etc.) depending on the contract.
• Positive points for finish order in Domino or tricks won in Trump.
• Highest cumulative score after 28 deals wins.`,
      videoQuery: "Barbu card game how to play rules",
      layout: "tricktaking"
    },
    {
      id: 7,
      title: "Skat",
      category: "Trick-Taking",
      subType: "Point-trick",
      players: "3 Players",
      blurb: "Germany's national card game — the soloist bids for the right to name the contract and must capture at least 61 card-points in tricks.",
      instructions: `Preliminaries: Three active players. 32-card pack. Ten cards each; two cards dealt face down to the skat (widow).
Object: The soloist (highest bidder) must win at least 61 of the 120 available card-points in tricks; the other two combine to stop them.
The Play:
• Contract may be Suit (a named trump suit), Grand (Jacks only as trumps), or Null (take no tricks at all).
• Soloist may pick up and exchange the two skat cards, or play from hand for a bonus.
• Jacks are always the four highest trumps in Suit and Grand contracts.
Scoring:
• Base value of the contract multiplied by matador multipliers (tops held or missing in sequence).
• Soloist wins or loses the calculated value; Null contracts have fixed values (23, 35, 46, or 59).`,
      videoQuery: "Skat card game how to play rules Germany",
      layout: "tricktaking3"
    },
    // --- CARD-TAKING ---
    {
      id: 8,
      title: "Cassino",
      category: "Card-Taking",
      players: "2–4 Players",
      blurb: "Capture table cards by pairing them with matching ranks or building arithmetic sums — most cards and the special Cassinos score bonus points.",
      instructions: `Preliminaries: Up to four players. Four cards each; four cards dealt face up to the table.
Object: Capture table cards by pairing or summing them with cards from your hand.
The Play:
• On your turn play one card to: capture all matching-rank cards, capture a summed combination (e.g., 9 takes a 4+5), trail a card to the table, or announce a build.
• Captured cards go face down in your scoring pile.
• Deal continues until the pack is exhausted; dealer warns "last cards" on the final deal.
Scoring:
• Most cards: 3 points.
• Most spades: 1 point.
• Big Cassino (10♦): 2 points.
• Little Cassino (2♠): 1 point.
• Each Ace: 1 point.
• Total available: 11 points per deal.`,
      videoQuery: "Cassino card game how to play rules",
      layout: "cassino"
    },
    {
      id: 9,
      title: "War",
      category: "Card-Taking",
      players: "2 Players",
      blurb: "A pure luck battle — both players reveal their top card simultaneously and the highest card captures both.",
      instructions: `Preliminaries: Deal all 52 cards face down evenly to two players.
Object: Capture all 52 cards.
The Play:
• Players simultaneously flip their top card face up.
• Highest card wins both cards regardless of suit.
• War (tie): each player places three cards face down, then flips one face up. The highest face-up card wins all cards in play. Ties during a War repeat the process.
Scoring: The player who captures all 52 cards wins.`,
      videoUrl: "https://youtu.be/XO-wxomkv0c",
      layout: "war"
    },
    // --- SHEDDING ---
    {
      id: 10,
      title: "Crazy Eights",
      category: "Shedding",
      players: "2–7 Players",
      blurb: "Match rank or suit to shed cards, using Eights as wild cards to switch the nominated suit at will.",
      instructions: `Preliminaries: Two to seven players. 52-card pack. Deal five cards each (seven if two players). Stack the rest face down; turn the top card to start the discard pile.
Object: Be the first to shed all cards from your hand.
The Play:
• Play a card matching the previous discard by rank or suit.
• Eights are wild: play one at any time and nominate a new suit to follow.
• If unable to play, draw from stock until able.
Scoring: Winner collects card values from all opponents' hands: Eights = 50, court cards = 10, number cards at face value.`,
      videoUrl: "https://youtu.be/pkKzzaR4Yb4",
      layout: "crazyeights"
    },
    {
      id: 11,
      title: "President",
      category: "Shedding",
      players: "4–7 Players",
      blurb: "A climbing game — shed cards by beating the previous combination with a higher rank; finish first to become President, last to become Scum.",
      instructions: `Preliminaries: Four to seven players. 52-card pack; 2 is the highest rank. Deal all cards.
Object: Play out all cards as quickly as possible.
The Play:
• Lead any single card or a set of equal-rank cards (e.g., a pair of 6s).
• Each subsequent player must match the quantity played with a strictly higher rank, or pass.
• When all players pass, the last player to play leads the next round fresh.
Scoring:
• First player out becomes President; last becomes Scum (Beggar/Arsehole).
• Social rule: Scum gives their two best cards to President; President gives back any two cards.
• Roles carry over to determine seating and card-exchange order in the next deal.`,
      videoUrl: "https://youtu.be/n6UFbZ0jGWw",
      layout: "president"
    },
    {
      id: 12,
      title: "Cheat",
      category: "Shedding",
      players: "3+ Players",
      blurb: "Bluff your way out of cards by declaring ranks in sequence — but get caught lying and you take the whole discard pile.",
      instructions: `Preliminaries: Deal all cards evenly among three or more players.
Object: Be the first to shed your entire hand.
The Play:
• In turn, each player discards one to four cards face down, declaring a rank in ascending sequence (Aces, then 2s, 3s, and so on, cycling back to Aces).
• Any other player may challenge by calling "Cheat!" before the next player discards.
• Challenged and caught lying: the liar takes the entire discard pile into their hand.
• Challenged and truthful: the challenger takes the entire discard pile.
Scoring: The first player to successfully shed all their cards wins.`,
      videoQuery: "Cheat Bullshit card game how to play rules",
      layout: "cheat"
    },
    {
      id: 13,
      title: "Durak",
      category: "Shedding",
      players: "2–6 Players",
      blurb: "Russia's classic — attack your neighbour with a card they must beat, or force them to pick up the table; the last player holding cards is the Fool.",
      instructions: `Preliminaries: Two to six players. 36-card pack. Six cards dealt each. Bottom card of remaining stock turned face up to fix the trump suit; stock placed on top at an angle.
Object: Avoid being the last player left holding cards — the Durak (fool).
The Play:
• The attacker plays a card face up; the defender must beat it with a higher card of the same suit or any trump.
• Other players may add attack cards provided they match the rank of any card already on the table.
• Defender beaten: picks up all table cards and skips their next turn.
• Defender successful: all cards discarded; defender becomes the next attacker.
Scoring: Last player holding cards is the Durak and loses.`,
      videoQuery: "Durak Russian card game how to play rules",
      layout: "durak"
    },
    {
      id: 14,
      title: "Newmarket",
      category: "Shedding",
      players: "4–8 Players",
      blurb: "Play ascending sequences suit-by-suit — stop only when blocked by a card lurking in the dead hand — and claim tokens from the layout Kings.",
      instructions: `Preliminaries: Four to eight players. 52-card pack plus a layout of four Kings from a second pack (the boodle cards). Cards dealt evenly with one dead hand set aside face down.
Object: Be the first to empty your hand and win tokens from the boodle layout.
The Play:
• Before each deal, players place tokens on one or more of the four Kings.
• Eldest starts with any card; the holder of the next-higher card of the same suit plays it, and so on.
• A sequence stops when the next card is in the dead hand (a natural stop) or a King is reached.
• The player who plays a boodle card (same rank and suit as a layout King) collects its tokens.
Scoring: First player out wins one chip per remaining card from each opponent plus the kitty.`,
      videoQuery: "Newmarket card game how to play rules",
      layout: "stops"
    },
    // --- COLLECTING ---
    {
      id: 15,
      title: "Piquet",
      category: "Collecting",
      players: "2 Players",
      blurb: "A sophisticated two-player classic — score for point, sequences, and sets before play, then contest twelve tricks at no trump.",
      instructions: `Preliminaries: Two players. 32-card pack (2–6 stripped out), ranked A K Q J T 9 8 7. Twelve cards each; eight cards remain as the talon (stock).
Object: Outscore your opponent over six deals (a partie) through declared combinations and tricks won.
The Play:
• Elder draws up to five cards from the talon; Younger draws the rest.
• Declarations in order: Point (longest suit), Sequences (longest run), Sets (three or four of a kind). Highest or longest wins each category and scores.
• Play twelve tricks at no trump; leader to a trick names the suit.
Scoring:
• Point: 1 per card in the winning suit. Sequences: length of the run. Sets: 3=3, 4=14.
• Each trick led scores 1; winning more than six tricks scores 10 (the cards).
• Pique (reaching 30 before opponent scores): bonus 30. Repique (in declarations alone): bonus 60.
• Game: first to 100 points over a partie of six deals.`,
      videoQuery: "Piquet card game how to play rules Parlett",
      layout: "piquet"
    },
    // --- ORDERING ---
    {
      id: 16,
      title: "Solitaire (Klondike)",
      category: "Ordering",
      players: "1 Player",
      blurb: "The definitive patience — build four suited foundations from Ace to King by reorganising a seven-column tableau.",
      instructions: `Preliminaries: Single player. Shuffled 52-card pack. Deal seven tableau columns (1 to 7 cards deep); only the top card of each column is face up.
Object: Move all 52 cards onto the four foundation piles, one per suit, built up from Ace to King.
The Play:
• Tableau: build downward in alternating colours (e.g., black 8 on red 9).
• Foundations: build upward by suit from Ace.
• Stockpile: draw one or three cards at a time; only the top card is playable.
• Empty columns: only a King (or a sequence headed by a King) may fill them.
Scoring: Won when all four foundations are complete.`,
      videoUrl: "https://youtu.be/9cFOr2T2eb8",
      layout: "klondike"
    },
    {
      id: 17,
      title: "Napoleon at St Helena",
      category: "Ordering",
      players: "1 Player",
      blurb: "A challenging patience — deal forty cards into ten columns and untangle them onto eight foundations running both up and down.",
      instructions: `Preliminaries: Single player. 52-card pack. Deal forty cards face up into ten columns of four; twelve cards remain as stock.
Object: Build eight foundation piles — four Aces built up to King and four Kings built down to Ace — to complete the game.
The Play:
• Tableau: build downward regardless of suit.
• Only the bottom card (outermost) of each column is available for play.
• Draw one card at a time from stock when no move is available.
• Empty spaces may be filled only by a King or by a card drawn from stock.
Scoring: Won if all eight foundations are completed before the stock is exhausted.`,
      videoQuery: "Napoleon St Helena patience solitaire how to play",
      layout: "napoleon"
    },
    {
      id: 18,
      title: "Spite and Malice",
      category: "Ordering",
      players: "2 Players",
      blurb: "A competitive patience — both players race to empty their personal riddance pile by building shared centre stacks from Ace to King.",
      instructions: `Preliminaries: Two players. Two distinguishable packs. Twenty-six cards each form a face-down riddance pile with the top card face up. Five cards dealt to each hand.
Object: Be the first to play out all 26 cards from your riddance pile.
The Play:
• Cards are played to up to eight shared centre piles, built from Ace up to King in any suit.
• On your turn, play from your riddance upcard, your hand, or your personal discard piles.
• A completed King-high pile is shuffled back into the central stock.
• End your turn by discarding one card face up to one of your four personal discard piles.
Scoring: Winner scores 5 points plus 1 per card remaining in the loser's riddance pile.`,
      videoQuery: "Spite and Malice card game how to play rules",
      layout: "comppatience"
    },
    {
      id: 19,
      title: "Spit",
      category: "Ordering",
      players: "2 Players",
      blurb: "A simultaneous speed patience — both players race to shift cards onto two central piles with no turns, no waiting.",
      instructions: `Preliminaries: Two players. 52-card pack. Each player arranges their 26 cards into five face-down stock piles with only the top card of each pile face up.
Object: Be the first to empty all your stock piles.
The Play:
• Both players play simultaneously — there are no turns.
• Move a face-up top card to either central spit pile if it is one rank higher or lower than the current top (Ace wraps around King).
• Reveal the next card in a stock pile as soon as the top is moved.
• If both players stall, simultaneously slap a new spit card onto each centre pile to restart play.
Scoring: First to empty their stock piles slaps the smaller central pile; the opponent takes the larger.`,
      videoQuery: "Spit card game how to play rules speed",
      layout: "spit"
    },
    {
      id: 20,
      title: "Racing Demon",
      category: "Ordering",
      players: "2+ Players",
      blurb: "Frantic multiplayer patience — each player races their own full deck simultaneously to shed their off-pile onto shared central foundations.",
      instructions: `Preliminaries: Two or more players, each with a distinguishable 52-card pack. Deal 13 cards face down to a personal off-pile (top card face up); deal four cards face up as personal work-piles.
Object: Be the first to play off all 13 cards from your off-pile onto the shared central foundations.
The Play:
• Play is entirely simultaneous — no turns.
• Move Aces to the shared centre; build foundations upward in suit to King.
• Personal work-piles are built downward in alternating colours.
• Draw cards one at a time from your personal stock when stuck.
Scoring:
• +1 point per card on shared central foundations.
• −2 points per card remaining in your off-pile at the end.`,
      videoQuery: "Racing Demon Nerts card game how to play rules",
      layout: "comppatience"
    },
    {
      id: 21,
      title: "Aces Up",
      category: "Ordering",
      players: "1 Player",
      blurb: "A deceptively simple patience — deal four cards at a time and discard lower same-suit cards until only the four Aces remain.",
      instructions: `Preliminaries: Single player. 52-card pack. Deal four cards face up in a row.
Object: Discard all 48 non-Ace cards, leaving only the four Aces.
The Play:
• If two or more face-up cards share a suit, discard all but the highest-ranked of that suit (Ace is highest).
• Any face-up card may be moved into an empty column.
• Deal the next four cards from stock (one onto each column) when no discard is possible, and repeat.
Scoring: Won if only the four Aces remain after the stock is exhausted. No redeals.`,
      videoQuery: "Aces Up solitaire patience how to play",
      layout: "acesup"
    },
    // --- VYING ---
    {
      id: 22,
      title: "Poker",
      category: "Vying",
      players: "2–8 Players",
      blurb: "The world's premier vying game — bet on your five-card hand, draw replacements, and either hold the best hand or bluff everyone else out of the pot.",
      instructions: `Preliminaries: Two to eight players. 52-card pack. Each player antes one chip. Five cards dealt each face down.
Object: Win the pot by holding the best five-card hand at showdown, or by bluffing all opponents into folding.
The Play:
• Betting round 1: players open (if no bet yet), check, call, raise, or fold.
• Draw: active players discard and draw up to three replacement cards (or four if holding an Ace).
• Betting round 2: final bets made before showdown.
• Showdown: remaining players reveal hands; best hand wins the pot.
Scoring: Standard hand rankings from highest to lowest — Royal Flush, Straight Flush, Four of a Kind, Full House, Flush, Straight, Three of a Kind, Two Pair, One Pair, High Card.`,
      videoQuery: "Draw Poker five card how to play rules",
      layout: "poker"
    },
    // --- BANKING ---
    {
      id: 23,
      title: "Pontoon",
      category: "Banking",
      players: "2+ Players",
      blurb: "Beat the banker's hand by accumulating cards totalling closer to 21 without busting — hit Pontoon (Ace + ten-value) for the highest payout.",
      instructions: `Preliminaries: Any number of players using one or more 52-card packs. Banker deals one card face down to each player including themselves.
Object: End up with a card total higher than the banker's without exceeding 21. Ace counts 1 or 11; face cards count 10.
The Play:
• Players stake chips on their first card; banker deals a second card.
• Options on your turn — Buy: stake more chips (up to double), receive a card face down. Twist: receive a card face up, free. Stick: play with current total (must be 15 or higher to stick).
• Bust (exceed 21): immediately pay the banker and turn cards face up.
• Banker reveals hand last and must draw to beat or match players.
Scoring:
• Pontoon (Ace + any 10-value card on first two cards): pays 2-to-1.
• Five-card trick (five cards totalling 21 or under): pays 2-to-1.
• Banker wins all ties.`,
      videoQuery: "Pontoon Blackjack British card game how to play rules",
      layout: "pontoon"
    },
  ];

  const parsePlayerRange = (str) => {
    const plus = str.match(/^(\d+)\+/);
    if (plus) return [parseInt(plus[1]), Infinity];
    const range = str.match(/^(\d+)[–\-](\d+)/);
    if (range) return [parseInt(range[1]), parseInt(range[2])];
    const single = str.match(/^(\d+)/);
    if (single) return [parseInt(single[1]), parseInt(single[1])];
    return [1, Infinity];
  };

  const PLAYER_FILTERS = ['All', '1', '2', '3', '4+'];

  const filteredGames = gamesData.filter(game => {
    const matchesCategory = activeCategory === 'All' || activeCategory === 'Home' || game.category === activeCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.blurb.toLowerCase().includes(searchQuery.toLowerCase());
    let matchesPlayers = true;
    if (playerFilter !== 'All') {
      const [min, max] = parsePlayerRange(game.players);
      const n = parseInt(playerFilter);
      matchesPlayers = playerFilter === '4+'
        ? max >= 4
        : min <= n && max >= n;
    }
    return matchesCategory && matchesSearch && matchesPlayers;
  });

  const getCategoryColor = (catId) => {
    const cat = categories.find(c => c.id === catId);
    if (!cat) return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    return `${cat.textColor.replace('200', '400')} bg-${cat.textColor.split('-')[1]}-400/10 border-${cat.textColor.split('-')[1]}-400/20`;
  };

  const handleVideoClick = (game) => {
    if (game.videoUrl) {
      window.open(game.videoUrl, '_blank');
    } else if (game.videoQuery) {
      const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(game.videoQuery)}`;
      window.open(url, '_blank');
    }
  };

  const SidebarItem = ({ id, label, Icon }) => (
    <button
      onClick={() => {
        setActiveCategory(id);
        setIsSidebarOpen(false);
        window.scrollTo(0,0);
        setSearchQuery('');
        setPlayerFilter('All');
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
        activeCategory === id
          ? 'bg-slate-800 text-emerald-400 border border-slate-700 shadow-sm'
          : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
      }`}
    >
      <Icon size={18} />
      <span className="font-medium">{label}</span>
      {activeCategory === id && <ChevronRight size={16} className="ml-auto" />}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500/30">

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-slate-800 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => setActiveCategory('Home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-900/20">
              <span className="text-xl font-bold text-white">♠</span>
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
              Card Codex
            </h1>
          </div>

          <nav className="space-y-2">
            <SidebarItem id="Home" label="Home" Icon={Home} />
            <SidebarItem id="All" label="Browse All" Icon={Grid} />

            <div className="pt-4 pb-2">
              <p className="px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Mechanisms</p>
            </div>

            {categories.map((cat) => (
              <SidebarItem key={cat.id} id={cat.id} label={cat.label} Icon={cat.icon} />
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="lg:ml-64 min-h-screen relative">

        {/* Top Header - Context Aware */}
        <header className="sticky top-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-20 px-4 py-4 md:px-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 text-slate-400 hover:text-white"
              >
                <Menu size={24} />
              </button>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {activeCategory === 'Home' ? 'Lobby' : (activeCategory === 'All' ? 'All Games' : categories.find(c => c.id === activeCategory)?.label)}
                </h2>
                {activeCategory !== 'Home' && (
                  <p className="text-sm text-slate-400 hidden md:block">
                    {filteredGames.length} {filteredGames.length === 1 ? 'entry' : 'entries'} found
                  </p>
                )}
              </div>
            </div>

            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-500" />
              </div>
              <input
                type="text"
                placeholder="Search Codex..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeCategory === 'Home') setActiveCategory('All');
                }}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
              />
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="p-4 md:p-8 max-w-5xl mx-auto">

          {/* LANDING PAGE VIEW */}
          {activeCategory === 'Home' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8 md:mb-12 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Master the Deck
                </h1>
                <p className="text-slate-400 text-lg">
                  Games classified by primary mechanism, following David Parlett's <em>Penguin Book of Card Games</em>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        window.scrollTo(0,0);
                      }}
                      className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 p-6 text-left hover:border-slate-500 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-300 active:scale-[0.98]"
                    >
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                      <div className="relative z-10">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300`}>
                          <Icon className="text-white" size={28} />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-50 transition-colors">
                          {cat.label}
                        </h3>
                        <p className={`text-sm font-medium ${cat.textColor} mb-3 opacity-80 uppercase tracking-wide`}>
                          {gamesData.filter(g => g.category === cat.id).length} Games
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {cat.desc}
                        </p>
                      </div>

                      {/* Decorative Pattern */}
                      <div className="absolute -bottom-6 -right-6 text-white/5 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                         <Icon size={120} />
                      </div>
                    </button>
                  );
                })}

                {/* Browse All Card */}
                <button
                  onClick={() => setActiveCategory('All')}
                  className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 border-dashed p-6 text-left hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex flex-col justify-center items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center mb-4 group-hover:bg-slate-600 transition-colors">
                    <Grid className="text-slate-300" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-300 group-hover:text-white mb-1">
                    Browse Full Collection
                  </h3>
                  <p className="text-slate-500 text-sm">
                    View all {gamesData.length} entries at once
                  </p>
                </button>
              </div>
            </div>
          ) : (
            /* GAME GRID VIEW */
            <>
              {/* Player Count Filter */}
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">Players:</span>
                {PLAYER_FILTERS.map(f => (
                  <button
                    key={f}
                    onClick={() => setPlayerFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      playerFilter === f
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-slate-200'
                    }`}
                  >
                    {f === 'All' ? 'Any' : f === '4+' ? '4+' : `${f}P`}
                  </button>
                ))}
              </div>

              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-300">
                  {filteredGames.map((game) => (
                    <div
                      key={game.id}
                      onClick={() => setSelectedGame(game)}
                      className="group bg-slate-800 border border-slate-700 rounded-xl p-5 cursor-pointer hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/10 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

                      <div className="flex flex-wrap gap-2 items-start mb-3 relative z-10">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${getCategoryColor(game.category)}`}>
                          {game.players}
                        </span>
                        {game.subType && (
                          <span className="text-xs font-medium px-2 py-1 rounded-full border border-indigo-500/30 text-indigo-300 bg-indigo-500/10">
                            {game.subType}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors relative z-10">
                        {game.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 relative z-10">
                        {game.blurb}
                      </p>

                      <div className="flex items-center text-emerald-400 text-sm font-medium relative z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                        Read Rules <ChevronRight size={16} className="ml-1" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search size={32} className="text-slate-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-300">No games found</h3>
                  <p className="text-slate-500">Try adjusting your search terms.</p>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Game Detail Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedGame(null)}
          />

          <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative z-50 animate-in fade-in zoom-in-95 duration-200">

            <div className="sticky top-0 bg-slate-900/95 backdrop-blur border-b border-slate-800 p-6 flex justify-between items-start z-10">
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-2 inline-block ${getCategoryColor(selectedGame.category)}`}>
                  {selectedGame.category}{selectedGame.subType ? ` · ${selectedGame.subType}` : ''} • {selectedGame.players}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                  {selectedGame.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedGame(null)}
                className="p-2 bg-slate-800 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Blurb Section */}
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800">
                <p className="text-lg text-slate-300 font-light italic leading-relaxed">
                  "{selectedGame.blurb}"
                </p>
              </div>

              {/* Visualizer Section */}
              {selectedGame.layout && (
                <div>
                   <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                    <LayoutTemplate size={20} />
                    Setup Diagram
                  </h3>
                  <GameVisualizer type={selectedGame.layout} />
                </div>
              )}

              {/* Instructions Section */}
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                  <BookOpen size={20} />
                  How to Play
                </h3>
                <div className="text-slate-300 leading-7 space-y-3">
                  {selectedGame.instructions.split('\n').map((line, index) => {
                    const trimmed = line.trim();
                    if (!trimmed) return null;

                    const isHeader = trimmed.endsWith(':') ||
                                   trimmed.startsWith('Preliminaries:') ||
                                   trimmed.startsWith('Object:') ||
                                   trimmed.startsWith('The Play:') ||
                                   trimmed.startsWith('Scoring:') ||
                                   trimmed.startsWith('Setup:') ||
                                   trimmed.startsWith('Gameplay:') ||
                                   trimmed.startsWith('Goal:') ||
                                   trimmed.startsWith('Technique:') ||
                                   trimmed.startsWith('Method:');

                    if (isHeader) {
                      return (
                        <p key={index} className="font-bold text-white mt-4 mb-1 border-b border-slate-700/50 pb-1">
                          {trimmed}
                        </p>
                      );
                    }

                    const isSubBullet = trimmed.startsWith('◦') || trimmed.startsWith('▪') || (/^\d+\./.test(trimmed) && !trimmed.includes('•'));
                    const isBullet = trimmed.startsWith('•') || /^\d+\./.test(trimmed);

                    return (
                      <p key={index} className={`flex gap-3 ${isSubBullet ? 'pl-6 text-slate-400 text-sm' : ''}`}>
                        {isBullet && !isSubBullet && <span className="text-emerald-500 font-bold select-none min-w-[10px]">•</span>}
                        {isSubBullet && <span className="text-slate-500 font-bold select-none min-w-[10px]">-</span>}
                        <span>{trimmed.replace(/^[•◦▪]\s*/, '')}</span>
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Video Action */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => handleVideoClick(selectedGame)}
                  className={`w-full flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-xl transition-all shadow-lg active:scale-95 ${
                    selectedGame.videoUrl
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-900/20'
                      : 'bg-slate-700 hover:bg-slate-600 text-slate-200 shadow-slate-900/20'
                  }`}
                >
                  <Play size={20} fill={selectedGame.videoUrl ? "currentColor" : "none"} />
                  {selectedGame.videoUrl ? "Watch Tutorial" : "Find Tutorial on YouTube"}
                  {selectedGame.videoUrl && <ExternalLink size={16} className="ml-1 opacity-70"/>}
                </button>
                <p className="text-center text-slate-500 text-xs mt-3">
                  {selectedGame.videoUrl ? "Opens direct video link" : "Opens a YouTube search"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardCodex;
