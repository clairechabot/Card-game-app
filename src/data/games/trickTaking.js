export const trickTaking = [
  {
    title: "Whist",
    category: "Trick-Taking",
    subType: "Plain-trick",
    players: "4 Players",
    blurb: "The ancestor of Bridge, stripped to its essentials — no bidding at all, just partnership play for every trick above six.",
    instructions: `Preliminaries: Four players in fixed partnerships sitting crosswise. 52-card pack ranked A K Q J T 9 8 7 6 5 4 3 2. Thirteen cards each; the dealer's last card is turned face up to fix the trump suit, then taken into hand.
Object: Win more than six tricks — only the tricks above six, the "odd tricks", score.
The Play:
• Eldest hand leads to the first trick. There is no bidding and no contract.
• Players must follow suit if able; otherwise they may play any card, including a trump.
• The highest card of the suit led wins the trick, unless trumped, in which case the highest trump wins.
• The winner of each trick leads to the next.
Scoring:
• 1 point for each trick above six taken by a partnership.
• Honours — the Ace, King, Queen and Jack of trumps — score 4 points to a side holding all four, or 2 for holding three.
• Game: 5 points. A rubber is the best of three games.`,
    videoUrl: "https://youtu.be/9v5UxlUg55Y",
    layout: "tricktable",
    tableSpec: { seats: 4, partnership: true, hand: 13, trump: 'turned', note: "Dealer's last card fixes trumps", caption: 'Whist' }
  },
  {
    title: "Contract Bridge",
    category: "Trick-Taking",
    subType: "Plain-trick",
    players: "4 Players",
    blurb: "The great partnership game — an auction fixes the contract and the trumps, then declarer plays both their own hand and the exposed dummy.",
    instructions: `Preliminaries: Four players in fixed partnerships. 52-card pack. Thirteen cards each. An auction precedes play and fixes both the contract and the trump suit.
Object: Bid a contract and then take at least the number of tricks it commits you to.
The Play:
• Bidding: each bid names a level from 1 to 7 and a denomination — clubs, diamonds, hearts, spades or no-trump. The level plus six is the number of tricks contracted for. The auction ends after three consecutive passes.
• The player who first named the winning denomination for their side becomes declarer; their partner becomes dummy.
• The player to declarer's left leads. Dummy's hand is then laid face up and played from by declarer.
• Follow suit if possible. The highest trump wins the trick, otherwise the highest card of the suit led.
Scoring:
• Odd tricks — those above six — score 20 each in clubs or diamonds, 30 each in hearts or spades, and 40 for the first plus 30 for each further trick in no-trump.
• 100 or more trick points makes a game; two games win the rubber.
• Bonuses for a small slam (twelve tricks) and grand slam (all thirteen). Undertricks are penalised, and more heavily when doubled or vulnerable.`,
    videoUrl: "https://youtu.be/2IomnCvxWzM",
    layout: "bridge"
  },
  {
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
    videoUrl: "https://youtu.be/tZkOB2kABZU",
    layout: "tricktable",
    tableSpec: { seats: 4, partnership: true, hand: 13, trump: 'fixed', trumpSuit: '♠', note: 'Spades are always trump', caption: 'Spades' }
  },
  {
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
    layout: "tricktable",
    tableSpec: { seats: 3, hand: 12, trump: 'varies', note: 'Trump set by the previous deal', caption: 'Ninety-Nine' }
  },
  {
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
    videoUrl: "https://youtu.be/u1Pxo_OqTUc",
    layout: "tricktable",
    tableSpec: { seats: [3, 6], hand: 13, trump: 'none', note: 'Avoidance — hearts and ♠Q are penalties', caption: 'Hearts' }
  },
  {
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
    layout: "tricktable",
    tableSpec: { seats: [3, 7], hand: 5, trump: 'bid', note: "Declarer's bid suit becomes trump", caption: 'Napoleon' }
  },
  {
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
    videoUrl: "https://youtu.be/XBC_lNo-CsE",
    layout: "tricktable",
    tableSpec: { seats: 4, partnership: true, hand: 5, trump: 'turned', note: '25-card pack; turn-up proposes trump', caption: 'Euchre' }
  },
  {
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
    layout: "tricktable",
    tableSpec: { seats: 4, hand: 13, trump: 'none', note: 'Declarer picks a contract each deal', caption: 'Barbu' }
  },
  {
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
    videoUrl: "https://youtu.be/RyiDypsr_cI",
    layout: "tricktable",
    tableSpec: { seats: 3, hand: 10, widow: 2, trump: 'bid', note: 'Two cards go face down to the skat', caption: 'Skat' }
  },
];
