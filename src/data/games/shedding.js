export const shedding = [
  {
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
  {
    title: "Spite and Malice",
    category: "Shedding",
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
    layout: "comppatience",
    handSpec: { caption: 'Spite & Malice' }
  },
  {
    title: "Spit",
    category: "Shedding",
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
    title: "Racing Demon",
    category: "Shedding",
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
    layout: "comppatience",
    handSpec: { leftLabel: 'Your pile', rightLabel: 'Others', caption: 'Racing Demon' }
  },
];
