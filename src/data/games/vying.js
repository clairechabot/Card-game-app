export const vying = [
  {
    title: "Brag",
    category: "Vying",
    players: "3–8 Players",
    blurb: "Britain's older answer to Poker — three cards each, and the nerve to keep raising on a hand you have never even looked at.",
    instructions: `Preliminaries: Three to eight players. 52-card pack. Three cards each, dealt face down. All players ante before the deal. Cards rank A K Q J T 9 8 7 6 5 4 3 2, but three 3s beats everything.
Object: Hold — or convincingly represent — the best three-card hand and take the pot.
The Play:
• Betting passes clockwise. On your turn either stake at least as much as the previous player or fold and drop out.
• A player may bet "blind", without ever looking at their cards, and stakes only half as much as a player who has seen theirs.
• A player who has seen their cards may not see a blind player; betting continues until two remain, and one pays double to see the other.
• Hand ranking, high to low: prial (three of a kind), running flush, run, flush, pair, high card.
Scoring:
• The last player left in, or the winner of a showdown, takes the whole pot.
• Three 3s is the highest prial of all, outranking three Aces.`,
    videoUrl: "https://youtu.be/L8CxIt9urFY",
    layout: "poker",
    handSpec: { cards: ['A♠', 'A♥', 'A♦'], draw: false, caption: 'Three-Card Brag' }
  },
  {
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
    videoUrl: "https://youtu.be/-OcfEkOeC-w",
    layout: "poker"
  },
];
