import React, { useState } from 'react';
import { Search, Users, User, Wine, Sparkles, X, Play, BookOpen, ChevronRight, Menu, Home, Grid, ExternalLink, LayoutTemplate } from 'lucide-react';

const CardCodex = () => {
  const [activeCategory, setActiveCategory] = useState('Home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

      case 'freecell':
        return (
          <Container>
            <div className="w-full max-w-sm flex flex-col gap-6">
              <div className="flex justify-between px-2">
                <div className="flex gap-1">
                   {[1, 2, 3, 4].map(i => <Card key={i} empty className="border-emerald-500/30" label="Free" />)}
                </div>
                <div className="flex gap-1">
                   {[1, 2, 3, 4].map(i => <Card key={i} empty label="Fnd" />)}
                </div>
              </div>
              <div className="flex justify-between px-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                  <div key={i} className="flex flex-col -space-y-8">
                     <Card color="bg-white/10" />
                     <Card color="bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Freecell Setup</div>
          </Container>
        );

      case 'napoleon':
        return (
          <Container>
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <Card label="7" color="bg-indigo-500/20" />
              <div className="w-8 h-11 md:w-10 md:h-14"></div>
              <Card label="7" color="bg-indigo-500/20" />
              
              <div className="w-8 h-11 md:w-10 md:h-14 flex items-center justify-center">
                 <div className="text-xs text-slate-500">Left</div>
              </div>
              <Card label="6" color="bg-emerald-500/20" className="border-emerald-500" />
              <div className="w-8 h-11 md:w-10 md:h-14 flex items-center justify-center">
                 <div className="text-xs text-slate-500">Right</div>
              </div>

              <Card label="7" color="bg-indigo-500/20" />
              <div className="w-8 h-11 md:w-10 md:h-14 flex items-center justify-center">
                 <div className="text-xs text-slate-500">Stock</div>
              </div>
              <Card label="7" color="bg-indigo-500/20" />
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Tomb Layout</div>
          </Container>
        );

      case 'pyramid':
        return (
          <Container>
            <div className="flex flex-col items-center -space-y-6 md:-space-y-8 scale-90">
              <Card color="bg-white/5" />
              <div className="flex gap-2"><Card color="bg-white/5" /><Card color="bg-white/5" /></div>
              <div className="flex gap-2"><Card color="bg-white/5" /><Card color="bg-white/5" /><Card color="bg-white/5" /></div>
              <div className="flex gap-2"><Card color="bg-white/5" /><Card color="bg-white/5" /><Card color="bg-white/5" /><Card color="bg-white/5" /></div>
              <div className="flex gap-2"><Card color="bg-white/5" /><Card color="bg-white/5" /><Card color="bg-white/5" /><Card color="bg-white/5" /><Card color="bg-white/5" /></div>
            </div>
             <div className="absolute bottom-4 left-4 flex gap-1">
                 <Card label="Hand" color="bg-indigo-500/40" />
                 <Card label="Hand" color="bg-indigo-500/40" />
                 <Card label="Hand" color="bg-indigo-500/40" />
             </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Pyramid Setup</div>
          </Container>
        );

      case 'bridge':
        return (
          <Container>
            <div className="flex gap-1 overflow-hidden px-4">
              {[1,2,3,4,5,6,7,8,9,10].map(i => (
                <Card key={i} color="bg-blue-900/40" label={i} />
              ))}
            </div>
            <div className="absolute top-4 text-xs text-slate-400 font-medium">Flip cards one by one to cross</div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Bridge Layout</div>
          </Container>
        );

      case 'circle':
        return (
          <Container>
            <div className="relative w-40 h-40">
               {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                 <div key={i} className="absolute top-1/2 left-1/2 w-8 h-12 bg-blue-900/40 border border-slate-600 rounded-sm origin-center" 
                      style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-55px)` }} />
               ))}
               <div className="absolute inset-0 m-auto w-12 h-12 rounded-full border-2 border-dashed border-slate-600 flex items-center justify-center">
                 <span className="text-[8px] text-center text-slate-400">Pot /<br/>King</span>
               </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Circle Layout</div>
          </Container>
        );

      case 'duel': // War, Speed, Pop
        return (
           <Container>
             <div className="flex flex-col items-center gap-6">
                <div className="flex gap-2 opacity-50"><Card label="P2" /><Card label="P2" /></div>
                <div className="flex gap-8 items-center">
                  <div className="flex gap-2">
                    <Card empty label="Play" />
                    <Card empty label="Play" />
                  </div>
                  <div className="h-px w-20 bg-slate-700"></div>
                  <div className="flex gap-2">
                    <Card color="bg-indigo-500/20" label="Deck" />
                  </div>
                </div>
                <div className="flex gap-2"><Card label="You" color="bg-emerald-600/20" /><Card label="You" color="bg-emerald-600/20" /></div>
             </div>
             <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Duel Setup</div>
           </Container>
        );

      case 'fourplayer': // Whist, Spades
        return (
          <Container>
            <div className="relative w-48 h-48">
              <div className="absolute top-0 left-1/2 -translate-x-1/2"><Card label="N" /></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2"><Card label="S" color="bg-emerald-600/20" /></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-90"><Card label="W" /></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 -rotate-90"><Card label="E" /></div>
              
              <div className="absolute inset-0 m-auto w-16 h-16 border border-slate-700 rounded bg-slate-800/50 flex items-center justify-center">
                <span className="text-[10px] text-slate-400">Trick</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">4-Player Table</div>
          </Container>
        );
        
      case 'grid': // Concentration
        return (
          <Container>
            <div className="grid grid-cols-5 gap-2">
               {Array.from({length: 10}).map((_, i) => <Card key={i} color="bg-blue-900/40" />)}
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Grid Layout</div>
          </Container>
        );
      
      case 'rummy': // Draw and Discard
        return (
           <Container>
             <div className="flex items-center gap-12">
                <div className="flex gap-4">
                  <div className="relative">
                    <Card color="bg-blue-900/40" label="Draw" />
                  </div>
                  <div className="relative">
                    <Card color="bg-white/10" label="Discard" />
                  </div>
                </div>
                
                <div className="p-4 border border-dashed border-slate-700 rounded-lg">
                   <div className="flex gap-2">
                     <Card color="bg-emerald-500/20" label="Set" />
                     <Card color="bg-emerald-500/20" label="Set" />
                     <Card color="bg-emerald-500/20" label="Set" />
                   </div>
                   <div className="text-[10px] text-center mt-2 text-slate-500">Melds Area</div>
                </div>
             </div>
             <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Standard Layout</div>
           </Container>
        );
        
        case 'monster': // Clear Dungeon
        return (
          <Container>
             <div className="flex gap-4">
               <div className="grid grid-cols-3 gap-2">
                  {[1,2,3,4,5,6].map(i => <Card key={i} color="bg-rose-900/40" label="Mob" />)}
               </div>
               <div className="flex flex-col justify-end gap-2">
                  <div className="text-[10px] text-slate-400">Attack Hand</div>
                  <div className="flex gap-1">
                    <Card color="bg-blue-500/20" />
                    <Card color="bg-blue-500/20" />
                    <Card color="bg-blue-500/20" />
                  </div>
               </div>
             </div>
             <div className="absolute bottom-2 right-2 text-[10px] text-emerald-500/50 uppercase tracking-widest">Dungeon Setup</div>
          </Container>
        );

      default:
        return null;
    }
  };


  // Category Configuration
  const categories = [
    { 
      id: 'Solo', 
      label: 'Solo Games', 
      icon: User, 
      desc: 'Patience & Strategy for one.',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-200'
    },
    { 
      id: 'Two-Player', 
      label: 'Two-Player', 
      icon: Users, 
      desc: 'Head-to-head duels & rivalries.',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-200'
    },
    { 
      id: 'Group', 
      label: 'Group Games', 
      icon: Users, 
      desc: 'Party classics for 3+ players.',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-200'
    },
    { 
      id: 'Drinking', 
      label: 'Drinking Games', 
      icon: Wine, 
      desc: 'Social rules & fun penalties.',
      color: 'from-rose-500 to-red-600',
      textColor: 'text-rose-200'
    },
    { 
      id: 'Skills', 
      label: 'Skills & Magic', 
      icon: Sparkles, 
      desc: 'Sleights, shuffles & illusions.',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-200'
    },
  ];

  const gamesData = [
    // Solo Games
    {
      id: 1,
      title: "Napoleon’s Tomb",
      category: "Solo",
      players: "1 Player",
      blurb: "A French solitaire game where you build card sequences around a central 'tomb' of sixes.",
      instructions: `Setup: Remove all Jokers and advertisement cards. Shuffle the deck.
The Layout: Deal cards one by one. If you draw a 6, place it in the center. If you draw a 7, place it in the corners.
Gameplay:
• You are building a "tomb" in the center and "guards" in the corners.
• Center Piles (The Tomb): Build downwards from 6 (6, 5, 4, 3, 2, Ace).
• Corner Piles (The Guards): Build upwards from 7 (7, 8, 9, 10, J, Q, K).
• Discard Pile: Cards that cannot be played immediately go into a discard pile. You can play the top card of the discard pile onto the layout whenever possible.
Goal: Successfully play all cards into the sequences to complete the tomb and guards.`,
      videoUrl: "https://youtu.be/0jcmCQDrc4c",
      layout: "napoleon"
    },
    {
      id: 2,
      title: "Clear the Dungeon",
      category: "Solo",
      players: "1 Player",
      blurb: "A dungeon-crawler style game where numbered cards 'attack' and remove face card 'monsters.'",
      instructions: `Card Values: Aces = 1. Number cards = Face Value. Jack = 11. Queen = 12. King = 13. Jokers = Wild (value up to 10).
Setup: Split the deck into two piles:
1. Monsters: All face cards (J, Q, K).
2. Attack Cards: All numbers, Aces, and Jokers.
• Deal the Monsters into three rows (first two rows face down, third row face up) to create four columns.
• Draw three Attack Cards to form your hand.
Gameplay:
• Combine two Attack Cards from your hand to equal or exceed the value of a Monster (e.g., a 6 and 7 = 13, which kills a King).
• The Trigger: To finish the attack, you must play a third card (the "trigger") that matches the suit of the Monster.
• Discard used cards. You cannot draw new Attack Cards until you use or discard your current three.
Goal: Eliminate all Monster cards from the board.`,
      videoUrl: "https://youtu.be/GbEkAfCqfTM",
      layout: "monster"
    },
    {
      id: 3,
      title: "Freecell",
      category: "Solo",
      players: "1 Player",
      blurb: "A strategic solitaire game utilizing four temporary holding cells to organize cards into foundation piles.",
      instructions: `Setup: Deal all cards face up into 8 columns. Cards should overlap so you can see values.
Gameplay:
• Tableau Building: Build columns downward in alternating colors (e.g., Red 6 on Black 7).
• Free Cells: Use the four spaces in the top left to store one single card each temporarily.
• Foundation Piles: Move Aces to the top right and build up by suit to King.
• Moving Stacks: You can move stacks of sequenced cards, but the number of cards you can move at once equals the number of empty Free Cells plus one.
Goal: Move all 52 cards to the foundation piles.`,
      videoUrl: "https://youtu.be/Ny-WfBjaiSo",
      layout: "freecell"
    },
    {
      id: 4,
      title: "Solitaire (Klondike)",
      category: "Solo",
      players: "1 Player",
      blurb: "The classic patience game of building four suited piles from Ace to King.",
      instructions: `Setup: Deal 7 piles. Pile 1 has 1 card, Pile 2 has 2, etc. The top card of each pile is face up; cards underneath are face down.
Gameplay:
• Tableau: Build downward in alternating colors (e.g., Black 8 on Red 9).
• Foundations: Move Aces to the top and build up by suit sequentially.
• Stockpile: Draw from the remaining deck (usually 3 cards at a time). Only the top card of the draw can be played.
• Empty Spaces: Only Kings can fill an empty tableau space.
Goal: Move all cards to the suited foundation piles.`,
      videoUrl: "https://youtu.be/9cFOr2T2eb8",
      layout: "klondike"
    },
    // Two Player
    {
      id: 5,
      title: "Pop!",
      category: "Two-Player",
      players: "2 Players",
      blurb: "A trick-taking game involving a special die used to raise the stakes and bluff your opponent.",
      instructions: `Setup:
• Cut the deck to 34 cards (use only 7s through Aces, plus 2 Jokers).
• Trump Hierarchy: Big Joker (High), Little Joker, Big Jack (Jack of Trump suit), Little Jack (Jack of same color), Ace, King, Queen, 10...
• Deal 7 cards to a "Display Pile" (face down) and 7 cards to a hand. Flip the top two cards of the Display Pile face up.
• Place a die (Pop Cube) set to "1" on the Trump indicator card.
Gameplay:
• Lead a card from your hand or Display Row. Opponent must follow suit if possible.
• The second player must play from the same area the leader played from (Hand or Display).
• Winner of the trick leads the next. Refill Display Row spots immediately from the Display Pile.
• Popping: A player can announce "Pop" to raise the point value of the round by 1. The opponent can "Fold" (lose immediately) or "Accept" (play on for higher stakes).
Scoring: Win 4+ tricks to win the round points. If the loser won 3 tricks, they get 1 "consolation point".
Goal: First to 7 (or 11) points.`,
      videoUrl: "https://youtu.be/ywlcN8DxBkE",
      layout: "duel"
    },
    {
      id: 6,
      title: "Gin Rummy",
      category: "Two-Player",
      players: "2 Players",
      blurb: "A classic rummy variation where players form sets and runs to minimize 'deadwood' points.",
      instructions: `Setup: Deal 10 cards to each player. Place the rest face down (Stock) and flip one up (Discard).
Gameplay:
• Draw a card from Stock or Discard, then discard one card.
• Form Melds:
  • Sets: 3 or 4 cards of the same rank (e.g., three Kings).
  • Runs: 3 or more consecutive cards of the same suit (e.g., 4-5-6 of Hearts).
• Knocking: You can end the round if your unmatched cards ("Deadwood") total 10 points or less.
• Gin: If you have zero deadwood, you go "Gin" for a 20-point bonus.
Scoring: Points are awarded based on the difference in deadwood values. If the knocker loses the count, it is an "Undercut".
Goal: Reach 100 points.`,
      videoUrl: "https://youtu.be/b1_HRYFyMvU",
      layout: "rummy"
    },
    {
      id: 7,
      title: "Speed",
      category: "Two-Player",
      players: "2 Players",
      blurb: "A fast-paced reflex game where players race to shed their cards simultaneously without taking turns.",
      instructions: `Setup: Deal 5 cards to each hand. Place two draw piles of 15 cards each on the sides. Place two single cards face down in the center with two small piles of 5 cards next to them.
Gameplay:
• Flip the center cards simultaneously. There are no turns.
• Play cards from your hand that are one value higher or lower than the center cards (looping King-Ace-2 is allowed).
• Refill your hand from your draw pile to keep 5 cards at all times.
• If stuck, both players flip a new card from the side piles simultaneously.
Goal: Be the first to empty your hand and draw pile and yell "Speed!".`,
      videoUrl: "https://youtu.be/HgmnrYt-Xf4",
      layout: "duel"
    },
    {
      id: 8,
      title: "War",
      category: "Two-Player",
      players: "2 Players",
      blurb: "A simple luck-based game where higher cards capture lower cards until one player holds the entire deck.",
      instructions: `Setup: Split the deck evenly between two players.
Gameplay:
• Both players flip their top card simultaneously.
• High Card Wins: The winner collects both cards.
• War: If cards tie, place three cards face down, then flip one face up. The higher face-up card wins all cards involved.
Goal: Collect all 52 cards.`,
      videoUrl: "https://youtu.be/XO-wxomkv0c",
      layout: "duel"
    },
    // Group Games
    {
      id: 9,
      title: "Big Two",
      category: "Group",
      players: "3-4 Players",
      blurb: "A popular climbing game where players shed cards by beating the previous combination with a higher rank.",
      instructions: `Card Rankings: 3 is Lowest < 4 < ... < A < 2 is Highest. Suit order: Diamonds (Low) < Clubs < Hearts < Spades (High).
Setup: Deal 13 cards to each player (entire deck).
Gameplay:
• Player with 3 of Diamonds starts.
• Play a combination: Single, Pair, Triple, or 5-Card Group (Straight, Flush, Full House, Four of a Kind, Straight Flush).
• Next player must play the same number of cards with a higher rank/value (e.g., a higher pair beats a lower pair).
• 5-Card Hierarchy: Straight < Flush < Full House < Four of a Kind < Straight Flush.
• If you pass, you can play again when the lead returns to you on a fresh pile.
Goal: Be the first to empty your hand. Remaining players take penalty points based on card count (double penalty for 10+ cards).`,
      videoQuery: "How To Play Big Two: my FAVORITE hand shedding card game!",
      layout: "fourplayer"
    },
    {
      id: 10,
      title: "Whist",
      category: "Group",
      players: "4 Players",
      blurb: "A partnership trick-taking game that is the ancestor of modern Bridge.",
      instructions: `Setup: 4 players (2 teams). Deal 13 cards each. The final card dealt determines the Trump suit.
Gameplay:
• Player left of dealer leads. Players must follow suit if possible.
• Highest card of the lead suit wins, unless a Trump card is played (Trump beats all non-trumps).
• Winner of the trick leads the next.
Scoring: Teams count tricks won. Each trick over 6 scores 1 point (e.g., 8 tricks = 2 points).
Goal: First team to 5 points.`,
      videoUrl: "https://youtu.be/9v5UxlUg55Y",
      layout: "fourplayer"
    },
    {
      id: 11,
      title: "Spoons",
      category: "Group",
      players: "3+ Players",
      blurb: "A chaotic reaction game where players race to grab a spoon once someone collects four of a kind.",
      instructions: `Setup: Place spoons in the center (one fewer than the number of players). Deal 4 cards to each player.
Gameplay:
• Dealer draws from deck, discards to left. Players pass cards quickly to the left in a circle.
• The Grab: As soon as you get four of a kind, grab a spoon.
• Once a spoon is touched, everyone must grab one immediately.
Goal: Do not be the player left without a spoon. Losers gain a letter (S-P-O-O-N) and are eliminated when they spell the word.`,
      videoUrl: "https://youtu.be/DyCFkI-feL4",
      layout: "circle"
    },
    {
      id: 12,
      title: "President",
      category: "Group",
      players: "3+ Players",
      blurb: "A ladder-climbing game where the winner becomes 'President' and the loser becomes the 'Beggar' for the next round.",
      instructions: `Setup: Deal all cards. Rank: 3 is Low, 2 is High.
Gameplay:
• Lead a single card or a set (e.g., pair of 4s).
• Next player must match the quantity but play a higher rank (e.g., pair of 6s). You can pass if you cannot or choose not to play.
• Clearing: If everyone passes, the last player to play clears the board and leads a new round.
The Swap:
• President (Winner): Gets the best seat and trades their worst card to the Scum/Beggar.
• Beggar (Loser): Trades their best card to the President.
Goal: Get rid of all cards first to become President.`,
      videoUrl: "https://youtu.be/n6UFbZ0jGWw",
      layout: "fourplayer"
    },
    {
      id: 13,
      title: "Crazy Eights",
      category: "Group",
      players: "2-5 Players",
      blurb: "A shedding game similar to Uno where you match rank or suit and use Eights as wild cards.",
      instructions: `Setup: Deal 5 cards. Flip top card of deck to start discard pile. (If 8, re-deal).
Gameplay:
• Play a card that matches the Rank or Suit of the top card.
• Eights: 8s are wild. Play one at any time and declare a new suit.
• If you cannot play, draw from the deck until you can play or you have drawn 5 cards.
Goal: First to empty hand wins. Opponents score penalty points (8=50, Face=10, Number=Value).`,
      videoUrl: "https://youtu.be/pkKzzaR4Yb4",
      layout: "rummy"
    },
    {
      id: 14,
      title: "Egyptian Ratscrew",
      category: "Group",
      players: "2+ Players",
      blurb: "A fast slap-based game where players try to win the pile by slapping specific combinations.",
      instructions: `Setup: Deal all cards evenly. Players hold stacks face down.
Gameplay:
• Players flip one card face up into the center.
• Face Card Rule: If a J, Q, K, or A is played, the next player must play a face card/Ace within a specific number of chances (J=1, Q=2, K=3, A=4). If they fail, the person who played the face card wins the pile.
• Slap Rule: Anyone can slap the pile to win it if:
  • Double: Two identical cards (5, 5).
  • Sandwich: Two matching cards with one between (5, 7, 5).
Goal: Win all the cards in the deck.`,
      videoUrl: "https://youtu.be/1c4YPQTS35I",
      layout: "circle"
    },
    {
      id: 15,
      title: "Spades",
      category: "Group",
      players: "4 Players",
      blurb: "A partnership game where Spades are always the trump suit and players bid on how many tricks they will take.",
      instructions: `Setup: 4 players (teams). Deal 13 cards.
Bidding: Players look at hands and bid how many tricks they expect to take. Spades is always Trump.
Gameplay:
• Lead a suit (must follow suit). Spades beat all other suits. Highest card wins.
Scoring:
• Make bid: 10 points per trick bid + 1 point for extras (sandbags).
• Miss bid: 0 points.
Goal: First team to 500 points.`,
      videoUrl: "https://youtu.be/0aX1JfkAuQA",
      layout: "fourplayer"
    },
    {
      id: 16,
      title: "Rummy",
      category: "Group",
      players: "2-6 Players",
      blurb: "The standard game of drawing and discarding to form matched sets and runs.",
      instructions: `Setup: Deal 7-10 cards (depending on players). Flip one for discard.
Gameplay:
• Draw, Meld (optional), Discard.
• Melds: 3+ of a kind or Suited Runs.
• Lay Off: Add cards to existing melds on the table.
Goal: Go out by melding/discarding all cards. "Go Rummy" (out in one turn) doubles points.`,
      videoUrl: "https://youtu.be/Wpo6z-qZ7Ko",
      layout: "rummy"
    },
    {
      id: 17,
      title: "Snap",
      category: "Group",
      players: "2+ Players",
      blurb: "A noisy reaction game for kids and families where matching cards triggers a race to yell 'Snap!'",
      instructions: `Setup: Deal all cards. Players keep stacks face down.
Gameplay:
• Players flip cards into personal face-up piles.
• Snap: If the top cards of any two piles match, the first to yell "Snap!" wins both piles.
• Snap Pot: If players tie yelling, cards go to a center pot. Win the pot by matching it later and yelling "Snap Pot!".
Goal: Win all 52 cards.`,
      videoUrl: "https://youtu.be/exUjTmnaWvs",
      layout: "duel"
    },
    {
      id: 18,
      title: "Up and Down the Creek",
      category: "Group",
      players: "3+ Players",
      blurb: "A trick-taking game where the hand size grows and shrinks each round.",
      instructions: `Setup: 4 players. Hand sizes change: 1 card, then 2, up to 7 (or 13), then back down to 1.
Gameplay:
• Flip a card to set Trump each hand.
• Bidding: All players simultaneously hold up fingers to bid tricks.
• Play tricks (follow suit, Trump wins).
Scoring: 10 points for hitting exact bid + 1 point per trick taken.`,
      videoUrl: "https://youtu.be/KDsd6MG3t4w",
      layout: "fourplayer"
    },
    {
      id: 19,
      title: "Old Maid",
      category: "Group",
      players: "2+ Players",
      blurb: "A pairing game where players blindly draw from neighbors hoping to avoid the lone Joker.",
      instructions: `Setup: Remove one Queen (or add a Joker). Deal all cards.
Gameplay:
• Discard all pairs from your hand immediately.
• Offer your hand face down to the left. They draw one card. If it makes a pair, they discard it.
Goal: Do not be holding the odd card (Queen/Joker) when all pairs are found.`,
      videoUrl: "https://youtu.be/2ygJGDp-eIo",
      layout: "circle"
    },
    {
      id: 20,
      title: "Concentration",
      category: "Group",
      players: "1+ Players",
      blurb: "A memory game where players flip face-down cards to find matching pairs.",
      instructions: `Setup: Lay all cards face down in a grid.
Gameplay:
• Flip two cards.
• Match: Keep the pair and go again.
• No Match: Flip them back over; turn passes.
Goal: Collect the most pairs.`,
      videoUrl: "https://youtu.be/s3Sz_QuCLoE",
      layout: "grid"
    },
    // Drinking Games
    {
      id: 21,
      title: "Kings",
      category: "Drinking",
      players: "Group",
      blurb: "A social game where every card rank is assigned a specific rule or mini-game.",
      instructions: `Setup: Spread cards face down in a circle around a cup (King's Cup).
Gameplay: Draw a card and perform the action:
• Ace: Waterfall (Everyone drinks until player stops).
• 2: You (Choose someone to drink).
• 3: Me (You drink).
• 4: Floor (Last to touch floor drinks).
• 5: Guys drink.
• 6: Chicks drink.
• 7: Heaven (Hands up, last one drinks).
• 8: Mate (Pick a partner to drink with you).
• 9: Rhyme (Say a word, go around rhyming).
• 10: Categories (e.g., Types of cereal).
• Jack: Never Have I Ever.
• Queen: Question Master (Answer with a question).
• King: Make a rule.`,
      videoUrl: "https://youtu.be/Uy063oI9Gkk",
      layout: "circle"
    },
    {
      id: 22,
      title: "Across the Bridge",
      category: "Drinking",
      players: "Group",
      blurb: "A game of chance where players flip cards in a line hoping to avoid face cards.",
      instructions: `Setup: Line up 10 cards face down.
Gameplay:
• Flip cards one by one.
• Number Card: Safe. Move to next.
• Face Card: Drink! Remove the card and add more cards to the bridge (J=1, Q=2, K=3, A=4).
Goal: Flip the final card to finish the bridge.`,
      videoUrl: "https://youtu.be/StHP7NFOSxw",
      layout: "bridge"
    },
    {
      id: 23,
      title: "Pyramid (Ride the Bus)",
      category: "Drinking",
      players: "Group",
      blurb: "A bluffing game using a pyramid layout where players assign drinks based on matching cards.",
      instructions: `Setup: Deal a pyramid (rows of 1, 2, 3, 4, 5, 6 cards) face down. Deal 4 cards to each player.
Gameplay:
• Flip pyramid rows from bottom up.
• Match: If you have a matching card, place it and assign drinks equal to the row number.
• Bluffing: You can pretend to have a card. If challenged and caught, you drink double. If challenged and honest, challenger drinks double.`,
      videoUrl: "https://youtu.be/XGYv8UN_r1A",
      layout: "pyramid"
    },
    {
      id: 24,
      title: "Screw the Dealer",
      category: "Drinking",
      players: "Group",
      blurb: "A guessing game where players try to predict the dealer’s card rank to avoid drinking.",
      instructions: `Setup: Deck held by Dealer.
Gameplay:
• Guess the rank (e.g., "7").
• Dealer says "Higher" or "Lower."
• Guess again.
• Wrong: Drink (amount based on house rules, usually diff on 1st vs 2nd guess).
• Right: Dealer drinks.
• 3 Wrong Guesses: Pass the deck to the next dealer.`,
      videoUrl: "https://youtu.be/M_9aW1ZGgS4",
      layout: "rummy"
    },
    // Skills & Magic
    {
      id: 25,
      title: "The Poker Shuffle",
      category: "Skills",
      players: "Skill",
      blurb: "The professional method for randomizing a deck at a table.",
      instructions: `Technique:
1. Split deck flat on table.
2. Riffle corners together.
3. Box: Strip 1/3 of deck and place on top (cut).
4. Riffle again.
5. Cut using a "Cut Card" on bottom to hide the bottom card.`,
      videoUrl: "https://youtu.be/bkDC3JoRjSk"
    },
    {
      id: 26,
      title: "Riffle Shuffle with Bridge",
      category: "Skills",
      players: "Skill",
      blurb: "The flashy 'waterfall' finish to a standard shuffle performed in the hands.",
      instructions: `Technique:
1. Split deck. Riffle corners together.
2. Grip: Thumbs on top, fingers underneath.
3. Bend: Push thumbs down and fingers up to create an arch (L-shape/90 degrees).
4. Release: Slowly release finger pressure from the bottom to let cards cascade.`,
      videoUrl: "https://youtu.be/J5vT33Vo04s"
    },
    {
      id: 27,
      title: "Mind Reading Prediction",
      category: "Skills",
      players: "Magic",
      blurb: "A simple trick where you 'read minds' by secretly glimpsing the bottom card.",
      instructions: `Method:
1. Secretly glimpse the bottom card of the deck (e.g., turn deck around to show spectator "messy" shuffle).
2. The Force: Deal cards or shuffle, but keep that known card at the bottom.
3. Guide the spectator to pick that specific card or force it using a cut.
4. Reveal by "reading their mind" (e.g., "I see a cherry color...").`,
      videoUrl: "https://youtu.be/9Y33eeJhyRM"
    },
    {
      id: 28,
      title: "The Rising Card",
      category: "Skills",
      players: "Magic",
      blurb: "A selected card magically rises to the top of the deck after being placed in the middle.",
      instructions: `Method:
1. Double Lift: Riffle up the back and pick up two cards as one. Show the face (spectator thinks it is the top card).
2. Place the actual top card (which is indifferent) into the middle of the deck.
3. The chosen card is still on top. Snap fingers and reveal it "rose" to the top.`,
      videoUrl: "https://youtu.be/9Y33eeJhyRM"
    },
    {
      id: 29,
      title: "The Indicator Card",
      category: "Skills",
      players: "Magic",
      blurb: "A self-working trick where a reversed card finds the spectator's selection and the four Aces.",
      instructions: `Setup: Place 4 Aces and a face-up 5 of Hearts at the bottom of the deck.
Method:
1. Spectator picks a card (don't show bottom). They put it on top.
2. Cut the deck (sending the setup block on top of their card).
3. Spread deck. The 5 is face up.
4. Count 5 cards down. The 5th card is their selection. The 4 cards in between are the Aces.`,
      videoUrl: "https://youtu.be/9Y33eeJhyRM"
    },
    {
      id: 30,
      title: "Stop Trick Prediction",
      category: "Skills",
      players: "Magic",
      blurb: "The spectator says 'stop' while you riffle, landing exactly on their chosen card.",
      instructions: `Method:
1. Double Lift: Show the "top" card (actually 2 held as 1).
2. Put the top card (dummy) in the middle. Spectator thinks their card is lost.
3. Riffle Force/Slip Force: Riffle down the side. When they say "Stop," pull the top card (their actual card) onto the packet where they stopped using your fingers.
4. Reveal they stopped exactly on their card.`,
      videoUrl: "https://youtu.be/NdCia_d1u5c"
    }
  ];

  const filteredGames = gamesData.filter(game => {
    const matchesCategory = activeCategory === 'All' || activeCategory === 'Home' || game.category === activeCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         game.blurb.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
              <p className="px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider">Categories</p>
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
                  Select a category below to find rules, strategies, and tricks.
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
              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-300">
                  {filteredGames.map((game) => (
                    <div 
                      key={game.id}
                      onClick={() => setSelectedGame(game)}
                      className="group bg-slate-800 border border-slate-700 rounded-xl p-5 cursor-pointer hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/10 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                      
                      <div className="flex justify-between items-start mb-3 relative z-10">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${getCategoryColor(game.category)}`}>
                          {game.players}
                        </span>
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
                  {selectedGame.category} • {selectedGame.players}
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

              {/* Instructions Section - Updated for Bullet Points */}
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                  <BookOpen size={20} />
                  How to Play
                </h3>
                <div className="text-slate-300 leading-7 space-y-3">
                  {selectedGame.instructions.split('\n').map((line, index) => {
                    const trimmed = line.trim();
                    if (!trimmed) return null;
                    
                    // Check for Headers (Ends with :)
                    const isHeader = trimmed.endsWith(':') || 
                                   trimmed.startsWith('Setup:') || 
                                   trimmed.startsWith('Gameplay:') || 
                                   trimmed.startsWith('Goal:') ||
                                   trimmed.startsWith('Scoring:') ||
                                   trimmed.startsWith('Technique:') ||
                                   trimmed.startsWith('Method:');
                                   
                    if (isHeader) {
                      return (
                        <p key={index} className="font-bold text-white mt-4 mb-1 border-b border-slate-700/50 pb-1">
                          {trimmed}
                        </p>
                      );
                    }

                    // Check for Sub-bullets
                    const isSubBullet = trimmed.startsWith('◦') || trimmed.startsWith('▪') || /^\d+\./.test(trimmed) && trimmed.includes('•') === false;
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