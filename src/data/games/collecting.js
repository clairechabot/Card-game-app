export const collecting = [
  {
    title: "Rummy",
    category: "Collecting",
    players: "2–6 Players",
    blurb: "The root of a whole family — draw, meld sets and runs onto the table, and go out before anyone else can unload their hand.",
    instructions: `Preliminaries: Two to six players. 52-card pack. Ten cards each for two players, seven for three or four, six for five or more. The rest forms the stock; the top card is turned to start the discard pile.
Object: Form your whole hand into sets of equal rank and sequences in suit, then go out.
The Play:
• On your turn draw either the top card of the stock or the top of the discard pile, then discard one card to finish the turn.
• Meld face up: sets of three or four cards of equal rank, or runs of three or more in the same suit.
• Lay off single cards onto any meld already on the table, your own or an opponent's.
• Melding your entire hand in a single turn, having melded nothing before, is "going rummy".
Scoring:
• The player who goes out collects the value of every card left in opponents' hands.
• Courts count 10, Aces 1, all others face value.
• Going rummy doubles the amount collected.
• Game: 100 points, or a fixed number of deals.`,
    videoQuery: "Rummy card game rules how to play melds",
    layout: "rummy"
  },
  {
    title: "Gin Rummy",
    category: "Collecting",
    players: "2 Players",
    blurb: "A tight two-hander of concealed melds — knock as soon as your unmatched cards are low enough, and hope your opponent cannot undercut you.",
    instructions: `Preliminaries: Two players. 52-card pack, Aces low. Ten cards each; the next card is turned up to start the discard pile.
Object: Reduce your unmatched cards — the "deadwood" — to ten points or fewer, then knock to end the hand.
The Play:
• Draw from the stock or take the upcard, then discard. Melds are held concealed, not laid down as you go.
• Melds are sets of three or four of a rank, and runs of three or more in suit. Courts count 10, Aces 1, others face value.
• Knock by discarding face down once your deadwood totals 10 or less. Going out with no deadwood at all is "gin".
• After a knock the opponent lays off their own deadwood onto the knocker's melds, reducing their count.
Scoring:
• The knocker scores the difference between the two deadwood counts.
• Gin scores a 20-point bonus plus the opponent's entire deadwood.
• Undercut — the opponent's deadwood equal to or lower than the knocker's — scores them the difference plus 10.
• Game: 100 points.`,
    videoQuery: "Gin Rummy rules how to play knocking gin",
    layout: "rummy",
    handSpec: { concealed: true }
  },
  {
    title: "Canasta",
    category: "Collecting",
    players: "4 Players",
    blurb: "Partnership melding on a grand scale — two packs, wild deuces and jokers, and a frozen discard pile worth capturing whole.",
    instructions: `Preliminaries: Four players in two partnerships. Two 52-card packs plus four Jokers. Eleven cards each. Jokers and 2s are wild; red 3s are bonus cards set aside on sight.
Object: Build melds of seven or more cards — canastas — and be the first side to go out.
The Play:
• Draw from the stock, or take the entire discard pile if you can meld its top card immediately.
• Melds are three or more cards of a rank, with at most three wild cards among them. Sequences do not count in Canasta.
• The discard pile is frozen against a side until it can be taken using a natural pair from the hand.
• A side must complete at least one canasta before it is allowed to go out.
Scoring:
• Natural canasta: 500. Mixed canasta (containing wild cards): 300. Going out: 100.
• Red 3s: 100 each, or 800 for all four.
• Card values: Jokers 50, Aces and 2s 20, Kings down to 8s 10, 7s down to 4s and black 3s 5.
• Game: 5,000 points.`,
    videoQuery: "Canasta card game rules how to play partnership",
    layout: "rummy",
    handSpec: { noRuns: true }
  },
  {
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
];
