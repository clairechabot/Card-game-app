import { Card, Container } from './Card';
import { PatienceLayout } from './PatienceLayout';

/**
 * Setup diagram for a game.
 *
 * Patience games are drawn by PatienceLayout from their own `layoutSpec`.
 * Everything else has a bespoke case below, keyed off `game.layout`.
 */
export function GameVisualizer({ game }) {
  if (game.layoutSpec) return <PatienceLayout spec={game.layoutSpec} title={game.title} />;

  switch (game.layout) {
    // ── 4-player trick table (Spades, Hearts, Euchre, Barbu) ─────────────
    case 'tricktaking':
      return (
        <Container>
          <div className="relative w-48 h-48">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-1">
              <Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1">
              <Card color="bg-cyan-500/20" /><Card color="bg-cyan-500/20" /><Card color="bg-cyan-500/20" />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2"><Card color="bg-zinc-700/50" /></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2"><Card color="bg-zinc-700/50" /></div>
            {/* Current trick */}
            <div className="absolute inset-0 m-auto w-20 h-20 border border-zinc-700 rounded-lg bg-zinc-800/60">
              <div className="relative w-full h-full">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-7 rounded-sm border border-zinc-500 bg-white/10 flex items-center justify-center text-[7px] font-bold text-zinc-300">N</div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-7 rounded-sm border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-[7px] font-bold text-cyan-300">S</div>
                <div className="absolute top-1/2 left-1 -translate-y-1/2 w-5 h-7 rounded-sm border border-zinc-500 bg-white/10 flex items-center justify-center text-[7px] font-bold text-zinc-300">W</div>
                <div className="absolute top-1/2 right-1 -translate-y-1/2 w-5 h-7 rounded-sm border border-zinc-500 bg-white/10 flex items-center justify-center text-[7px] font-bold text-zinc-300">E</div>
              </div>
            </div>
          </div>
          <div className="absolute top-3 right-3 flex flex-col items-center gap-0.5">
            <Card label="♠" color="bg-indigo-500/30" />
            <span className="text-[8px] text-indigo-400 uppercase">Trump</span>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Trick Table</div>
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
              <Card color="bg-cyan-500/20" /><Card color="bg-cyan-500/20" />
            </div>
            <div className="absolute bottom-0 left-4 flex gap-1">
              <Card color="bg-zinc-700/50" /><Card color="bg-zinc-700/50" />
            </div>
            <div className="absolute inset-0 m-auto w-20 h-16 border border-zinc-700 rounded-lg bg-zinc-800/60 flex items-center justify-center gap-2">
              <div className="w-5 h-7 rounded-sm border border-zinc-500 bg-white/10 flex items-center justify-center text-[7px] font-bold text-zinc-300">N</div>
              <div className="w-5 h-7 rounded-sm border border-zinc-500 bg-white/10 flex items-center justify-center text-[7px] font-bold text-zinc-300">W</div>
              <div className="w-5 h-7 rounded-sm border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-[7px] font-bold text-cyan-300">E</div>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">3-Player Table</div>
        </Container>
      );

    // ── Cassino ───────────────────────────────────────────────────────────
    case 'cassino':
      return (
        <Container>
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[8px] text-zinc-500 uppercase tracking-wider">Table cards</span>
              <div className="flex gap-2">
                <Card label="4♥" color="bg-rose-800/30" />
                <Card label="5♣" color="bg-white/10" />
                <Card label="9♦" color="bg-amber-800/30" />
                <Card label="K♠" color="bg-zinc-600/30" />
              </div>
            </div>
            <div className="flex gap-6 items-end">
              <div className="flex flex-col items-center gap-1">
                <div className="flex flex-col -space-y-9 opacity-50">
                  <Card color="bg-white/5" /><Card color="bg-white/5" />
                </div>
                <span className="text-[8px] text-zinc-500 mt-1">Captures</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-1">
                  <Card label="9♥" color="bg-cyan-500/20" />
                  <Card label="4♠" color="bg-cyan-500/20" />
                </div>
                <span className="text-[8px] text-zinc-500">Your hand</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Cassino Layout</div>
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
              <span className="text-[8px] text-zinc-500 mt-2">P1 Deck</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-3 items-center">
                <Card label="K♣" color="bg-blue-500/20" />
                <span className="text-zinc-500 text-xs font-bold">VS</span>
                <Card label="9♥" color="bg-rose-500/20" />
              </div>
              <div className="flex gap-1 opacity-30">
                <Card color="bg-white/5" /><Card color="bg-white/5" /><Card color="bg-white/5" />
              </div>
              <span className="text-[8px] text-zinc-600">War stake</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-col -space-y-9">
                <Card color="bg-rose-900/40" /><Card color="bg-rose-900/40" /><Card color="bg-rose-900/40" />
              </div>
              <span className="text-[8px] text-zinc-500 mt-2">P2 Deck</span>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Battle Setup</div>
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
                <span className="text-[8px] text-zinc-500">Stock</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Card label="Q♣" color="bg-white/10" />
                <span className="text-[8px] text-zinc-500">Discard</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-cyan-500/40 flex items-center justify-center">
                <span className="text-lg text-cyan-400">♣</span>
              </div>
              <span className="text-[8px] text-cyan-500">Suit</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-1">
                <Card label="Q♠" color="bg-white/10" />
                <Card label="8♦" color="bg-amber-500/30" className="border-amber-400/40" />
                <Card label="3♣" color="bg-white/10" />
              </div>
              <span className="text-[8px] text-zinc-500">Hand <span className="text-amber-400">(8=Wild)</span></span>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Crazy Eights</div>
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
                  i === 3 ? 'border-zinc-700/30 bg-zinc-800/20' :
                  'border-zinc-600 bg-blue-900/30'
                } flex items-center justify-center`}>
                  <span
                    className={`text-[8px] font-bold ${i === 0 ? 'text-amber-400' : i === 3 ? 'text-zinc-600' : 'text-zinc-400'}`}
                    style={{ transform: `rotate(${-deg}deg)` }}
                  >
                    {i === 0 ? '★' : i === 3 ? '✕' : ''}
                  </span>
                </div>
              </div>
            ))}
            <div className="absolute inset-0 m-auto w-14 h-14 rounded-full border-2 border-dashed border-zinc-600 bg-zinc-950/60 flex flex-col items-center justify-center gap-0.5">
              <div className="flex -space-x-2">
                <div className="w-4 h-6 rounded-sm border border-zinc-600 bg-white/10 flex items-center justify-center text-[6px] font-bold text-zinc-300">K</div>
                <div className="w-4 h-6 rounded-sm border border-zinc-600 bg-white/10 flex items-center justify-center text-[6px] font-bold text-zinc-300">K</div>
              </div>
              <span className="text-[6px] text-zinc-500">Pile</span>
            </div>
          </div>
          <div className="absolute top-2 left-2 text-[8px] text-amber-400/70">★ President  ✕ Scum</div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Climbing Game</div>
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
              <span className="text-[8px] text-zinc-500">P1</span>
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
                <Card color="bg-cyan-500/20" /><Card color="bg-cyan-500/20" />
              </div>
              <span className="text-[8px] text-zinc-500">You</span>
            </div>
          </div>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] text-zinc-500 italic whitespace-nowrap">"Three Tens" (face down)</div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Cheat Layout</div>
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
              <span className="text-[8px] text-zinc-500">Defender</span>
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
                  <Card color="bg-cyan-500/20" /><Card color="bg-cyan-500/20" />
                </div>
                <span className="text-[8px] text-zinc-500">Attacker</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Card color="bg-blue-900/40" />
                <Card label="♠" color="bg-indigo-500/20" className="-mt-3" />
                <span className="text-[8px] text-indigo-400">Trump</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Durak Setup</div>
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
                <span className="text-[8px] text-zinc-500 uppercase">Run</span>
                <div className="flex gap-1">
                  <Card label="7♥" color="bg-white/10" />
                  <Card label="8♥" color="bg-white/10" />
                  <Card label="9♥" color="bg-white/10" />
                  <Card empty label="?" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Card color="bg-zinc-700/40" />
                <span className="text-[8px] text-zinc-500">Kitty</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Boodle Layout</div>
        </Container>
      );

    // ── Piquet ────────────────────────────────────────────────────────────
    case 'piquet':
      return (
        <Container>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[8px] text-zinc-500">Younger</span>
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
              <span className="text-[8px] text-zinc-500">Elder (you)</span>
              <div className="flex gap-0.5">
                {[1,2,3,4].map(i => <Card key={i} color="bg-cyan-500/20" />)}
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Piquet Setup</div>
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
              <span className="text-[8px] text-zinc-500 uppercase tracking-wider">Shared</span>
              <div className="flex gap-1">
                {[1,2,3].map(i => (
                  <div key={i} className="flex flex-col -space-y-8">
                    <Card color="bg-white/5" /><Card color="bg-white/5" /><Card label="A" color="bg-cyan-600/30" />
                  </div>
                ))}
              </div>
              <span className="text-[7px] text-cyan-500/70">Build A → K</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-col -space-y-9">
                <Card color="bg-purple-900/40" /><Card color="bg-purple-900/40" /><Card color="bg-white/15" />
              </div>
              <span className="text-[8px] text-purple-400/70 mt-1">P2 Pile</span>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Racing Layout</div>
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
                <span className="text-[7px] text-zinc-500">Spit</span>
              </div>
              <span className="text-zinc-600 text-sm">⟵ ⟶</span>
              <div className="flex flex-col items-center gap-0.5">
                <Card label="8" color="bg-white/10" />
                <span className="text-[7px] text-zinc-500">Spit</span>
              </div>
            </div>
            <div className="flex gap-1">
              {[1,3,2,1,3].map((depth, i) => (
                <div key={i} className="flex flex-col -space-y-8">
                  {Array.from({length: Math.min(depth, 2)}).map((_, j) => (
                    <Card key={j} color={j === Math.min(depth,2)-1 ? 'bg-cyan-500/20' : 'bg-blue-900/30'} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Spit Layout</div>
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
                <span className="text-[8px] text-zinc-500">P2</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-0.5">
                  <Card color="bg-blue-900/40" /><Card color="bg-blue-900/40" />
                </div>
                <span className="text-[8px] text-zinc-500">P3</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-900/20">
                {[1,2,3].map(i => <div key={i} className="w-3 h-3 rounded-full bg-amber-400/60" />)}
                <span className="text-[8px] text-amber-400 ml-1">Pot</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <Card color="bg-blue-900/40" />
                <span className="text-[7px] text-zinc-500">Draw</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-0.5">
                {['A♠','K♠','Q♠','J♠','T♠'].map((c,i) => <Card key={i} label={c} color="bg-cyan-500/20" />)}
              </div>
              <span className="text-[8px] text-zinc-500">Your hand</span>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Draw Poker</div>
        </Container>
      );

    // ── Pontoon ───────────────────────────────────────────────────────────
    case 'pontoon':
      return (
        <Container>
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-1">
                <Card label="?" color="bg-zinc-700/60" />
                <Card label="K♠" color="bg-white/10" />
              </div>
              <span className="text-[8px] text-zinc-500">Banker</span>
            </div>
            <div className="flex items-center gap-1.5">
              {[1,2,3].map(i => <div key={i} className="w-4 h-4 rounded-full bg-amber-400/60 border border-amber-500/50" />)}
              <span className="text-[8px] text-amber-500 ml-1">Stakes</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-1">
                <Card label="A♥" color="bg-cyan-500/20" />
                <Card label="K♣" color="bg-cyan-500/20" />
              </div>
              <div className="px-2 py-0.5 rounded-full bg-cyan-900/30 border border-cyan-500/30">
                <span className="text-[8px] text-cyan-400 font-bold">Pontoon! (21)</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-cyan-500/50 uppercase tracking-widest">Banking Layout</div>
        </Container>
      );
    default:
      return null;
  }
}
