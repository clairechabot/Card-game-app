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
      instructions: "Remove Jokers and advertisement cards. Deal cards one by one; place any 6 in the center and any 7 in the corners. Build the center piles downwards (6, 5, 4...) and the corner piles upwards (7, 8, 9...) by suit. Use a discard pile for unplayable cards and try to clear the deck.",
      videoUrl: "https://youtu.be/0jcmCQDrc4c",
      layout: "napoleon"
    },
    {
      id: 2,
      title: "Clear the Dungeon",
      category: "Solo",
      players: "1 Player",
      blurb: "A dungeon-crawler style game where numbered cards 'attack' and remove face card 'monsters.'",
      instructions: "Separate face cards (monsters) from number cards/aces/jokers (attack cards). Deal monsters into rows, then draw three attack cards. Combine attack cards to equal or exceed the value of a monster (J=11, Q=12, K=13) and play a 'trigger' card of the same suit to remove the monster.",
      videoUrl: "https://youtu.be/GbEkAfCqfTM",
      layout: "monster"
    },
    {
      id: 3,
      title: "Freecell",
      category: "Solo",
      players: "1 Player",
      blurb: "A strategic solitaire game utilizing four temporary holding cells to organize cards into foundation piles.",
      instructions: "Deal cards into eight columns. Build tableau columns downward in alternating colors. Move single cards to the four 'free cells' to open up moves. The goal is to move all cards to the four foundation piles in ascending order by suit.",
      videoUrl: "https://youtu.be/Ny-WfBjaiSo",
      layout: "freecell"
    },
    {
      id: 4,
      title: "Solitaire (Klondike)",
      category: "Solo",
      players: "1 Player",
      blurb: "The classic patience game of building four suited piles from Ace to King.",
      instructions: "Deal seven piles with the top card face up. Build tableau columns downward using alternating colors (e.g., black 8 on red 9). Draw from the remaining deck to find cards. Move cards to the top foundation piles starting with Aces, continuing sequentially to Kings.",
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
      instructions: "Use a shortened deck (7s through Aces plus Jokers). Players have a hand and a 'display row' of cards. Play tricks by leading a card; the opponent must follow suit. Win the majority of tricks to score points equal to the current value of the 'Pop' die, which players can increase during the game.",
      videoUrl: "https://youtu.be/ywlcN8DxBkE",
      layout: "duel"
    },
    {
      id: 6,
      title: "Gin Rummy",
      category: "Two-Player",
      players: "2 Players",
      blurb: "A classic rummy variation where players form sets and runs to minimize 'deadwood' points.",
      instructions: "Deal 10 cards to each player. Draw from the stock or discard pile and discard a card each turn. Form melds (three of a kind or suited runs). End the round by 'knocking' when your unmatched cards (deadwood) total 10 points or less, or go 'Gin' by matching every card.",
      videoUrl: "https://youtu.be/b1_HRYFyMvU",
      layout: "rummy"
    },
    {
      id: 7,
      title: "Speed",
      category: "Two-Player",
      players: "2 Players",
      blurb: "A fast-paced reflex game where players race to shed their cards simultaneously without taking turns.",
      instructions: "Each player gets a hand of five and a draw pile. Two center piles are flipped face up. Simultaneously play cards from your hand that are one value higher or lower than the center cards (e.g., play a 5 or 3 on a 4). Refill your hand to five cards constantly until you run out.",
      videoUrl: "https://youtu.be/HgmnrYt-Xf4",
      layout: "duel"
    },
    {
      id: 8,
      title: "War",
      category: "Two-Player",
      players: "2 Players",
      blurb: "A simple luck-based game where higher cards capture lower cards until one player holds the entire deck.",
      instructions: "Split the deck evenly. Both players flip their top card simultaneously. The higher card wins both. If cards tie, initiate a 'War': place three cards face down and one face up; the higher face-up card wins the entire pot.",
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
      instructions: "Deal the entire deck (13 cards each). The player with the 3 of Diamonds starts. Play singles, pairs, or 5-card poker hands (straights, flushes). The next player must play the same type of combination but with a higher rank (2 is usually the highest card). First to empty their hand wins.",
      videoQuery: "How To Play Big Two: my FAVORITE hand shedding card game!",
      layout: "fourplayer"
    },
    {
      id: 10,
      title: "Whist",
      category: "Group",
      players: "4 Players",
      blurb: "A partnership trick-taking game that is the ancestor of modern Bridge.",
      instructions: "4 players split into two teams. Deal 13 cards to each. The last card dealt determines the Trump suit. Players must follow the suit led if possible. The highest card (or highest Trump) wins the trick. Teams score points for every trick won over six tricks.",
      videoUrl: "https://youtu.be/9v5UxlUg55Y",
      layout: "fourplayer"
    },
    {
      id: 11,
      title: "Spoons",
      category: "Group",
      players: "3+ Players",
      blurb: "A chaotic reaction game where players race to grab a spoon once someone collects four of a kind.",
      instructions: "Place one fewer spoon than players in the center. Pass cards quickly to the left. Once a player gets four of a kind, they grab a spoon. Everyone else must immediately grab a spoon; the person left without one gets a letter (S-P-O-O-N).",
      videoUrl: "https://youtu.be/DyCFkI-feL4",
      layout: "circle"
    },
    {
      id: 12,
      title: "President",
      category: "Group",
      players: "3+ Players",
      blurb: "A ladder-climbing game where the winner becomes 'President' and the loser becomes the 'Beggar' for the next round.",
      instructions: "Deal all cards. Lead a single or set of cards (e.g., two 4s). Next players must match the quantity but play a higher rank. 2s are high. If you win the round, you become President and swap your worst card for the Beggar's best card in the next deal.",
      videoUrl: "https://youtu.be/n6UFbZ0jGWw",
      layout: "fourplayer"
    },
    {
      id: 13,
      title: "Crazy Eights",
      category: "Group",
      players: "2-5 Players",
      blurb: "A shedding game similar to Uno where you match rank or suit and use Eights as wild cards.",
      instructions: "Deal 5 cards to each player. A discard pile is started. Players must play a card matching the rank or suit of the top card. Eights are wild and can be played on anything to change the suit. First to empty their hand wins.",
      videoUrl: "https://youtu.be/pkKzzaR4Yb4",
      layout: "rummy"
    },
    {
      id: 14,
      title: "Egyptian Ratscrew",
      category: "Group",
      players: "2+ Players",
      blurb: "A fast slap-based game where players try to win the pile by slapping specific combinations.",
      instructions: "Deal the whole deck evenly. Players flip one card onto a central pile. If a face card is played, the next person must play a face card or lose the pile. Anyone can 'slap' the pile to win it if they see a pair (e.g., 5 on 5) or a sandwich (e.g., 5, 7, 5).",
      videoUrl: "https://youtu.be/1c4YPQTS35I",
      layout: "circle"
    },
    {
      id: 15,
      title: "Spades",
      category: "Group",
      players: "4 Players",
      blurb: "A partnership game where Spades are always the trump suit and players bid on how many tricks they will take.",
      instructions: "Deal 13 cards. Partners bid the number of tricks they think they can win. Play tricks (must follow suit). Spades trump other suits. Teams score points if they meet their combined bid; missing the bid results in zero points.",
      videoUrl: "https://youtu.be/0aX1JfkAuQA",
      layout: "fourplayer"
    },
    {
      id: 16,
      title: "Rummy",
      category: "Group",
      players: "2-6 Players",
      blurb: "The standard game of drawing and discarding to form matched sets and runs.",
      instructions: "Draw a card each turn and discard one. Place 'melds' (three or more of a kind, or suited runs like 4-5-6) face up on the table. You can also add to existing melds. The round ends when a player empties their hand.",
      videoUrl: "https://youtu.be/Wpo6z-qZ7Ko",
      layout: "rummy"
    },
    {
      id: 17,
      title: "Snap",
      category: "Group",
      players: "2+ Players",
      blurb: "A noisy reaction game for kids and families where matching cards triggers a race to yell 'Snap!'",
      instructions: "Deal the whole deck. Players flip their top card into a personal pile. If two top cards on the table match, the first person to yell 'Snap!' wins both piles. The goal is to win all the cards.",
      videoUrl: "https://youtu.be/exUjTmnaWvs",
      layout: "duel"
    },
    {
      id: 18,
      title: "Up and Down the Creek",
      category: "Group",
      players: "3+ Players",
      blurb: "A trick-taking game where the hand size grows and shrinks each round.",
      instructions: "Start with 1 card, go up to 7 (or 13), then back down to 1. Reveal a trump card each hand. Players bid tricks with fingers simultaneously. Score points for making your bid plus the tricks taken. Highest score at the end wins.",
      videoUrl: "https://youtu.be/KDsd6MG3t4w",
      layout: "fourplayer"
    },
    {
      id: 19,
      title: "Old Maid",
      category: "Group",
      players: "2+ Players",
      blurb: "A pairing game where players blindly draw from neighbors hoping to avoid the lone Joker.",
      instructions: "Remove one Queen or add a Joker (the Old Maid). Deal all cards. Discard any pairs immediately. Take turns drawing one card from the player to your left. If it makes a pair, discard it. The loser is the person holding the Old Maid at the end.",
      videoUrl: "https://youtu.be/2ygJGDp-eIo",
      layout: "circle"
    },
    {
      id: 20,
      title: "Concentration",
      category: "Group",
      players: "1+ Players",
      blurb: "A memory game where players flip face-down cards to find matching pairs.",
      instructions: "Lay all cards face down in a grid. Flip two cards; if they match (pair), keep them and go again. If not, flip them back over. The player with the most pairs wins.",
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
      instructions: "Spread cards in a circle. Players draw a card and do the action (e.g., Ace = Everyone drinks, 5 = Guys drink, 8 = Pick a mate). Drawing a King lets you make a new rule for the game.",
      videoUrl: "https://youtu.be/Uy063oI9Gkk",
      layout: "circle"
    },
    {
      id: 22,
      title: "Across the Bridge",
      category: "Drinking",
      players: "Group",
      blurb: "A game of chance where players flip cards in a line hoping to avoid face cards.",
      instructions: "Line up 10 cards face down. Flip one at a time. Number cards are safe. If you flip a face card, you drink and add more cards to the bridge (J=1, Q=2, K=3, A=4). You must cross the entire bridge to win.",
      videoUrl: "https://youtu.be/StHP7NFOSxw",
      layout: "bridge"
    },
    {
      id: 23,
      title: "Pyramid (Ride the Bus)",
      category: "Drinking",
      players: "Group",
      blurb: "A bluffing game using a pyramid layout where players assign drinks based on matching cards.",
      instructions: "Deal a pyramid of face-down cards. Players have a hand of 4 cards. Flip pyramid cards row by row. If you have a match, assign drinks to opponents (amount increases by row). You can bluff if you don't have a match, but if caught, you drink double.",
      videoUrl: "https://youtu.be/XGYv8UN_r1A",
      layout: "pyramid"
    },
    {
      id: 24,
      title: "Screw the Dealer",
      category: "Drinking",
      players: "Group",
      blurb: "A guessing game where players try to predict the dealer’s card rank to avoid drinking.",
      instructions: "A player tries to guess the rank of the top card. If wrong, the dealer says 'higher' or 'lower.' If the second guess is wrong, the player drinks. If the player guesses correctly, the dealer drinks. After 3 wrong turns, the dealer role passes.",
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
      instructions: "Split the deck, riffle the corners together while face down, 'box' the deck (cut it onto itself), riffle again, and cut using a cut card to ensure the bottom card isn't seen.",
      videoUrl: "https://youtu.be/bkDC3JoRjSk"
    },
    {
      id: 26,
      title: "Riffle Shuffle with Bridge",
      category: "Skills",
      players: "Skill",
      blurb: "The flashy 'waterfall' finish to a standard shuffle performed in the hands.",
      instructions: "Riffle two halves of the deck together. Place thumbs on top and fingers below, bending the cards into an arch. Release pressure from the bottom fingers to let the cards cascade (bridge) together.",
      videoUrl: "https://youtu.be/J5vT33Vo04s"
    },
    {
      id: 27,
      title: "Mind Reading Prediction",
      category: "Skills",
      players: "Magic",
      blurb: "A simple trick where you 'read minds' by secretly glimpsing the bottom card.",
      instructions: "Secretly look at the bottom card. Deal cards or have the spectator shuffle. Force the bottom card (or simply guide them to it) and reveal it with a dramatic mind-reading presentation.",
      videoUrl: "https://youtu.be/9Y33eeJhyRM"
    },
    {
      id: 28,
      title: "The Rising Card",
      category: "Skills",
      players: "Magic",
      blurb: "A selected card magically rises to the top of the deck after being placed in the middle.",
      instructions: "Riffle up the back of the deck and pick up two cards as one (Double Lift). Show the 'top' card (actually the second one). Place the top card (the indifferent one) into the middle. Reveal that the selection is still on top.",
      videoUrl: "https://youtu.be/9Y33eeJhyRM"
    },
    {
      id: 29,
      title: "The Indicator Card",
      category: "Skills",
      players: "Magic",
      blurb: "A self-working trick where a reversed card finds the spectator's selection and the four Aces.",
      instructions: "Pre-set the four Aces and a 5 of Hearts (face up) at the bottom. Have the spectator pick a card and place it on top. Cut the deck. Spread to find the face-up 5; count 5 cards down to find their selection, and reveal the surrounding cards are the Aces.",
      videoUrl: "https://youtu.be/9Y33eeJhyRM"
    },
    {
      id: 30,
      title: "Stop Trick Prediction",
      category: "Skills",
      players: "Magic",
      blurb: "The spectator says 'stop' while you riffle, landing exactly on their chosen card.",
      instructions: "Use a Double Lift to show a card, then place the 'dummy' card into the middle. Riffle down the side of the deck. When they say stop, use a 'Slip Force' (holding the top card with fingers while pulling the rest) to make them stop on the original top card.",
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
            
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur border-b border-slate-800 p-6 flex justify-between items-start">
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

              {/* Instructions Section */}
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                  <BookOpen size={20} />
                  How to Play
                </h3>
                <div className="text-slate-300 leading-7 space-y-4">
                  {selectedGame.instructions.split('. ').map((sentence, index) => (
                    sentence && (
                    <p key={index} className="flex gap-3">
                      <span className="text-slate-600 font-bold select-none">•</span>
                      <span>{sentence.trim()}{sentence.endsWith('.') ? '' : '.'}</span>
                    </p>
                    )
                  ))}
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