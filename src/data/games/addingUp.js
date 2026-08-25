export const addingUp = [
  {
    title: "Cribbage",
    category: "Adding-up",
    players: "2 Players",
    blurb: "Peg your way to 121 on a wooden board, scoring for fifteens, pairs and runs both during the play and from the hand you kept back.",
    instructions: `Preliminaries: Two players. 52-card pack. Six cards dealt each; each player discards two to the dealer's crib. Court cards count 10, Aces count 1. A pegging board tracks the score to 121.
Object: Be first to peg 121 points, scored both during the play and from the hands afterwards.
The Play:
• Non-dealer cuts a starter card; the dealer pegs 2 if a Jack is turned up ("his heels").
• Players alternately lay cards face up, each calling the new running total. The total may never exceed 31.
• Score as you go: 2 for bringing the total to 15, 2 for a pair, 6 for a third of a rank, 2 for hitting 31 exactly, 1 for the last card playable, and 1 per card for a run.
• When neither player can add a card without passing 31, the count resets to zero and play continues with the remaining cards.
Scoring:
• Each hand is then scored with the starter as a fifth card — non-dealer's hand first, which decides many close games — and the dealer scores the crib last.
• Fifteens: 2 for every combination totalling 15. Pairs: 2 each. Runs: 1 per card. Flush: 4 in hand, 5 with the starter. His nob (the Jack matching the starter's suit): 1.
• Game: 121 points, twice round the board.`,
    videoUrl: "https://youtu.be/kHHgH-Bif-M",
    layout: "cribbage"
  },
  {
    title: "Blackjack",
    category: "Adding-up",
    players: "2+ Players",
    blurb: "Draw towards 21 without busting, against a dealer bound by fixed rules — the casino game where the player's only edge is knowing when to stop.",
    instructions: `Preliminaries: Any number of players against a dealer, using one or more 52-card packs. Two cards to each player; the dealer takes one face up and one face down. Court cards count 10, Aces count 1 or 11 at the holder's choice.
Object: Finish with a total closer to 21 than the dealer, without exceeding it.
The Play:
• A natural blackjack — an Ace with any ten-count card — pays 3-to-2 unless the dealer holds one too.
• On your turn choose to hit (take a card), stand, double down (double the stake for exactly one more card), or split a pair into two separate hands.
• Exceeding 21 busts your hand and loses the stake at once, whatever the dealer goes on to do.
• The dealer then reveals the hole card and is bound by the house rule: draw on 16 or less, stand on 17 or more.
Scoring:
• A winning hand pays even money; a natural pays 3-to-2.
• A tie is a push — the stake is returned.
• Insurance, offered when the dealer shows an Ace, pays 2-to-1 if the dealer has blackjack.`,
    videoUrl: "https://youtu.be/xjqTIzYkGdI",
    layout: "pontoon",
    handSpec: { badge: 'Blackjack! (21)', caption: 'Blackjack' }
  },
  {
    title: "Pontoon",
    category: "Adding-up",
    players: "2+ Players",
    blurb: "The British cousin of Blackjack — twist, stick or buy your way to twenty-one, with a rotating banker and a five-card trick that beats almost everything.",
    instructions: `Preliminaries: Any number of players and a banker. 52-card pack. Two cards each. Court cards count 10, Aces 1 or 11.
Object: Hold a hand totalling 21, or as near below it as possible, and beat the banker.
The Play:
• Players stake before receiving cards, then in turn may "stick" (stand), "twist" (a free card face up), or "buy" (a face-down card for an added stake).
• A hand exceeding 21 is bust and the stake is lost immediately.
• The banker plays last and pays or collects against each hand in turn.
Scoring:
• Pontoon (an Ace with a ten-count card): pays 2-to-1.
• Five-card trick (five cards totalling 21 or under): pays 2-to-1.
• Banker wins all ties.`,
    videoUrl: "https://youtu.be/b149_Mjq2ow",
    layout: "pontoon",
    handSpec: { caption: 'Pontoon' }
  },
];
