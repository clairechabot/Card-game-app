export const cardTaking = [
  {
    title: "Cassino",
    category: "Card-Taking",
    subType: "Fishing",
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
    videoUrl: "https://youtu.be/6rftQLsv6Uk",
    layout: "cassino"
  },
  {
    title: "Scopa",
    category: "Card-Taking",
    subType: "Fishing",
    players: "2–4 Players",
    blurb: "Italy's national fishing game — sweep the table clean for a scopa, and fight over the seven of coins that decides most games.",
    instructions: `Preliminaries: Two or four players. A 40-card Italian pack, or a 52-card pack with the 8s, 9s and 10s removed. Cards count Ace 1 up to 7, then Jack 8, Queen 9, King 10. Three cards each; four cards face up on the table.
Object: Capture table cards by matching a single card's value, or the sum of several.
The Play:
• Play one card per turn. It captures a table card of equal value, or any set of table cards adding up to its value.
• If the card could take either a single card or a combination, the single card must be taken.
• A card that captures nothing is simply left on the table.
• Clearing the table completely is a "scopa" and scores a point at once.
• Hands are replenished three at a time until the pack runs out. The last player to capture takes whatever remains on the table.
Scoring:
• Most cards: 1 point. Most coins (diamonds): 1 point.
• The seven of coins, the settebello: 1 point.
• Primiera — the best four-card set with one card of each suit, counting 7 as 21, 6 as 18, Ace as 16, 5 as 15, 4 as 14, 3 as 13, 2 as 12 and courts as 10: 1 point.
• Each scopa: 1 point.
• Game: 11 or 21 points.`,
    videoQuery: "Scopa Italian card game rules how to play",
    layout: "cassino",
    handSpec: {
      caption: 'Scopa',
      tableLabel: 'Table (4 cards)',
      note: 'Capture by value or by sum; clearing the table is a scopa',
    }
  },
  {
    title: "Scopone",
    category: "Card-Taking",
    subType: "Fishing",
    players: "4 Players",
    blurb: "Scopa for partnerships, with the whole pack dealt at once — no stock to draw from, so a sharp player can count every card that remains.",
    instructions: `Preliminaries: Four players in two partnerships. A 40-card Italian pack. The entire pack is dealt at the start — nine or ten cards each — with four cards face up on the table. There is no stock.
Object: Capture table cards as in Scopa, but playing as partners.
The Play:
• Capture rules are Scopa's: a card takes a table card of equal value, or any combination summing to its value, and an available single card must be taken in preference to a combination.
• Because all forty cards are in play from the first trick, a careful partnership can deduce exactly which cards remain.
• Clearing the table is a scopa and scores immediately, as in Scopa.
• The last side to make a capture takes any cards left on the table when hands run out.
Scoring:
• Most cards, most coins, the settebello and primiera: 1 point each, exactly as in Scopa.
• Each scopa: 1 point.
• Game: 11, 16 or 21 points by agreement.`,
    videoQuery: "Scopone Scientifico Italian card game rules how to play",
    layout: "cassino",
    handSpec: {
      caption: 'Scopone',
      tableLabel: 'Table (4 cards)',
      note: 'Whole pack dealt at once — no stock, so every card is countable',
    }
  },
  {
    title: "War",
    category: "Card-Taking",
    subType: "Capture",
    players: "2 Players",
    blurb: "The purest game of chance — both players flip, the higher card takes both, and tied ranks trigger a war for a face-down stake.",
    instructions: `Preliminaries: Deal all 52 cards face down evenly to two players.
Object: Capture the entire pack.
The Play:
• Both players simultaneously turn their top card face up.
• The higher card captures both; Aces rank highest.
• On a tie, each player deals three cards face down and a fourth face up — the winner of that comparison takes the whole stake.
Scoring: The player who captures all 52 cards wins.`,
    videoUrl: "https://youtu.be/yX-jOVer758",
    layout: "war"
  },
  {
    title: "Beggar-My-Neighbour",
    category: "Card-Taking",
    subType: "Capture",
    players: "2 Players",
    blurb: "A game with no decisions at all — court cards demand tribute from your opponent, and a single lucky Jack can reverse the whole exchange.",
    instructions: `Preliminaries: Two players. 52-card pack dealt evenly and face down as personal stacks. Aces and court cards are payment cards: Ace demands four, King three, Queen two, Jack one.
Object: Win the entire pack.
The Play:
• Players alternately turn their top card face up onto a central pile.
• An ordinary card simply passes play to the opponent.
• Turning a payment card obliges the opponent to pay the stated number of cards, one at a time, onto the pile.
• If every card paid is an ordinary one, the player who demanded payment takes the whole central pile and leads again.
• If any paid card is itself a payment card, the demand reverses at once and the other player must now pay.
Scoring: The player who ends up holding all 52 cards wins. No decisions are made at any point — the deal alone decides it.`,
    videoQuery: "Beggar My Neighbour card game rules how to play",
    layout: "war",
    handSpec: {
      caption: 'Beggar-My-Neighbour',
      centre: 'PAY',
      stakeLabel: 'Tribute',
      note: 'Court cards demand 1–4 cards; a court card in payment reverses it',
    }
  },
  {
    title: "Slapjack",
    category: "Card-Taking",
    subType: "Capture",
    players: "2–8 Players",
    blurb: "Watch the pile and trust your reflexes — the first hand down on a Jack takes everything, and a wrong slap costs you a card.",
    instructions: `Preliminaries: Two to eight players. 52-card pack dealt as evenly as possible, face down, as personal stacks that are never looked at.
Object: Win the whole pack by slapping the Jacks.
The Play:
• In turn, each player turns their top card face up onto a single central pile.
• The instant a Jack appears, every player tries to slap the pile. The first hand down takes it and shuffles it into the bottom of their stack.
• Slapping a card that is not a Jack forfeits one card, face down, to the player who turned it.
• A player who runs out of cards stays in for one more Jack — slapping back in returns them to the game, and failing to do so puts them out.
Scoring: Play continues until one player holds all 52 cards.`,
    videoQuery: "Slapjack card game rules how to play",
    layout: "war",
    handSpec: {
      caption: 'Slapjack',
      centre: 'J',
      stakeLabel: 'Central pile',
      note: 'One shared pile — first hand down on a Jack takes it',
    }
  },
  {
    title: "Snap",
    category: "Card-Taking",
    subType: "Capture",
    players: "2+ Players",
    blurb: "Two face-up piles show the same rank and the room erupts — call it first and both piles are yours, call it wrongly and you pay.",
    instructions: `Preliminaries: Two or more players. 52-card pack dealt evenly, face down, as personal stacks. Each player also builds a face-up pile in front of them.
Object: Win all the cards.
The Play:
• In turn, each player turns their top card face up onto their own face-up pile.
• Whenever any two face-up piles show cards of the same rank, the first player to call "Snap!" takes both piles and adds them to the bottom of their stack.
• A wrong call forfeits a card to every other player, or by common agreement sends the caller's face-up pile to the middle as a "snap pot".
• When a turned card matches the top of the snap pot, the first to call "Snap pot!" wins the pot.
Scoring: A player with no cards left drops out; the last player holding cards wins.`,
    videoQuery: "Snap card game rules how to play children",
    layout: "war",
    handSpec: {
      caption: 'Snap',
      centre: '=',
      stakeLabel: 'Snap pot',
      leftLabel: 'Face-up pile',
      rightLabel: 'Face-up pile',
      note: 'Each player builds their own face-up pile; match any two ranks',
    }
  },
];
