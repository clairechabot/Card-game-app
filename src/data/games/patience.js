export const patience = [
  {
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
    videoUrl: "https://youtu.be/6dMzrcqCwaQ",
    layout: "patience",
    layoutSpec: {
      tableau: [1, 2, 3, 4, 5, 6, 7],
      faceDown: [0, 1, 2, 3, 4, 5, 6],
      foundations: 4,
      stock: true,
      waste: 1,
      note: "Build down in alternating colours",
      caption: "Klondike",
    }
  },
  {
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
    layout: "patience",
    layoutSpec: {
      tableau: 10,
      depth: 4,
      foundations: 8,
      stock: true,
      waste: 1,
      note: "Four Aces built up, four Kings built down",
      caption: "St Helena",
    }
  },
  {
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
    layout: "patience",
    layoutSpec: {
      tableau: 4,
      depth: 1,
      foundations: 1,
      stock: true,
      waste: 1,
      note: "Discard the lower card of any two in the same suit",
    }
  },
  {
    title: "Baker's Dozen",
    category: "Ordering",
    players: "1 Player",
    blurb: "Deal all 52 cards into 13 columns of four, with Kings auto-shuffled to the bottom, then build four suited foundations from Ace to King.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal all cards to 13 columns of four (three face up, one face down). Kings are automatically moved to the bottom of their columns on the deal.
Object: Build the four foundations up, in suit, from Ace to King.
The Play:
• Build columns downward, regardless of suit.
• Maximum 11 cards per column.
• Only the topmost card of a column may move to another column or to a foundation.
• Empty columns cannot be filled.
• No redeal.
Scoring: Traditional scoring — one point per card correctly placed on the foundations.`,
    videoQuery: "Baker's Dozen solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 13,
      depth: 4,
      faceDown: 1,
      foundations: 4,
      note: "Kings sink to the bottom of their column on the deal",
    }
  },
  {
    title: "Beleaguered Castle",
    category: "Ordering",
    players: "1 Player",
    blurb: "The four Aces start on the foundations and are besieged by six-card columns — free them by building all suits up to King.",
    instructions: `Preliminaries: Single player. 52-card pack. All four Aces are placed on foundations in the centre. Remaining 48 cards are dealt face up into eight columns of six.
Object: Build the four foundations up from Ace to King, regardless of suit.
The Play:
• Build columns downward, regardless of suit.
• Only the topmost card of a column may be moved to a foundation or to another column.
• Maximum 13 cards per column.
• Empty columns may only be filled with Kings.
• No redeal.
Scoring: Traditional scoring.`,
    videoQuery: "Beleaguered Castle solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 8,
      depth: 6,
      foundations: 4,
      note: "The four Aces start on the foundations",
    }
  },
  {
    title: "Bowling",
    category: "Ordering",
    players: "1–4 Players",
    blurb: "A patience that mimics bowling — deal cards to fill ten numbered pins across ten frames, aiming to score strikes, spares, and 230 or more.",
    instructions: `Preliminaries: Up to four players, each with a 52-card pack. Ten empty spaces represent bowling pins numbered 1 to 10. Two waste piles represent the two balls thrown per frame.
Object: Score the highest possible bowling score by filling as many pins as possible each frame, targeting 230 or greater.
The Play:
• Cards are dealt one at a time from stock.
• A card placed on a pin must be lower in rank than cards already on higher-numbered pins. Aces rank lowest.
• Cards of identical rank may share a pin slot.
• Unplayable cards go to a waste pile; three cards in a waste pile use up one ball.
• Standard bowling frames and scoring: strike if all 10 pins filled before three waste cards, spare if filled between three and five waste cards.
Scoring: Standard bowling rules — strikes, spares, and open frames totalled across ten frames.`,
    videoQuery: "Bowling solitaire patience card game how to play",
    layout: "patience",
    layoutSpec: {
      pyramid: 4,
      pyramidEmpty: true,
      pyramidLabel: "10 pins",
      stock: true,
      waste: 2,
      note: "Two waste piles are the two balls of each frame",
    }
  },
  {
    title: "Bristol",
    category: "Ordering",
    players: "1 Player",
    blurb: "Eight columns of three cards each, with three waste piles fed from stock in batches — build four foundations up regardless of suit.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal 24 cards to eight columns of three. Remaining cards form the stock.
Object: Build the four foundations up, regardless of suit, from Ace to King.
The Play:
• Build columns downward, regardless of suit.
• Cards are flipped from stock three at a time — one card to each of three waste piles.
• Only the topmost card of a waste pile or column may be moved to a foundation or column.
• Empty columns cannot be filled, but empty waste pile slots refill from stock.
• No redeal.
Scoring: Traditional scoring.`,
    videoQuery: "Bristol solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 8,
      depth: 3,
      foundations: 4,
      stock: true,
      waste: 3,
      note: "Stock deals three at a time, one to each waste pile",
    }
  },
  {
    title: "Calculation",
    category: "Ordering",
    players: "1 Player",
    blurb: "Four foundations each follow a different mathematical sequence — plan carefully as you play stock cards one at a time to columns or foundations.",
    instructions: `Preliminaries: Single player. 52-card pack. Remove the Ace, 2, 3, and 4 and place them as guides next to four empty foundations. Five blank columns form the tableau.
Object: Build the four foundations up, regardless of suit, following a set mathematical sequence for each:
• Foundation 1 (Ace guide): A 2 3 4 5 6 7 8 9 T J Q K
• Foundation 2 (2 guide): 2 4 6 8 T Q A 3 5 7 9 J K
• Foundation 3 (3 guide): 3 6 9 Q 2 5 8 J A 4 7 T K
• Foundation 4 (4 guide): 4 8 Q 3 7 J 2 6 T A 5 9 K
The Play:
• Flip stock cards one at a time; play each to a foundation or to any column.
• Once placed in a column, a card can only move to a foundation.
• Only the topmost card of a column may move to a foundation.
• No redeal.
Scoring: Traditional scoring.`,
    videoQuery: "Calculation solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 5,
      depth: 0,
      foundations: 4,
      stock: true,
      note: "Foundations climb in steps of 1, 2, 3 and 4",
    }
  },
  {
    title: "Canfield",
    category: "Ordering",
    players: "1 Player",
    blurb: "A classic casino patience with a reserve pile — build four foundations from a random starting rank as you flip stock cards three at a time.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal four columns of one card each. Deal 13 cards to a reserve pile. Turn up one card to set the starting rank for all four foundations.
Object: Build the four foundations up, in suit, from the randomly selected starting rank, wrapping from King to Ace as needed.
The Play:
• Build columns downward in alternating colours.
• Any number of packed cards may be moved as a unit between columns.
• Flip stock cards three at a time to a single waste pile; only the topmost waste card is playable.
• Empty columns are automatically filled from the reserve pile.
• Unlimited redeals.
Scoring: Traditional scoring.`,
    videoQuery: "Canfield solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 4,
      depth: 1,
      reserve: 10,
      foundations: 4,
      stock: true,
      waste: 1,
      note: "Empty columns refill from the reserve",
    }
  },
  {
    title: "Cribbage Square",
    category: "Ordering",
    players: "1 Player",
    blurb: "Place 16 cards one at a time into a 4×4 grid to maximise your Cribbage score across every row and column — aim for 61 points or more.",
    instructions: `Preliminaries: Single player. 52-card pack. An empty 4×4 grid forms the tableau. The 17th card dealt becomes the starter.
Object: Score the highest possible Cribbage total across all four rows and columns, aiming for at least 61–75 points.
The Play:
• Flip cards one at a time from stock and place each in the most advantageous grid position.
• Once placed, a card cannot be moved.
• The final card dealt is the starter used for every line's scoring calculation.
Scoring: Normal Cribbage scoring for each line of four cards plus the starter: pairs, runs, flushes, and fifteens.`,
    videoQuery: "Cribbage Square Patience solitaire how to play",
    layout: "patience",
    layoutSpec: {
      grid: { rows: 4, cols: 4 },
      stock: true,
      note: "Score all four rows and columns as cribbage hands",
    }
  },
  {
    title: "Eagle Wing",
    category: "Ordering",
    players: "1 Player",
    blurb: "Eight single-card columns flanked by a reserve pile — build four suited foundations from a random rank, wrapping from King to Ace.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal eight columns of one card each. Deal 14 cards to a reserve pile. Turn up one card to set the starting rank for all foundations.
Object: Build the four foundations up, in suit, from the randomly selected starting rank, wrapping from King to Ace as needed.
The Play:
• Build columns downward, in suit, wrapping as needed; maximum three cards per column.
• The topmost column card or a set of packed cards may be moved.
• Flip stock one at a time to a waste pile; topmost waste card is playable.
• Empty columns are automatically filled from the reserve pile.
• One redeal allowed.
Scoring: Traditional scoring.`,
    videoQuery: "Eagle Wing solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 8,
      depth: 1,
      reserve: 14,
      foundations: 4,
      stock: true,
      waste: 1,
      note: "Columns hold at most three cards",
    }
  },
  {
    title: "Eight Off",
    category: "Ordering",
    players: "1 Player",
    blurb: "A FreeCell cousin with eight reserve cells — build four suited foundations from Ace to King by carefully juggling eight tableau columns.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal all cards to eight columns (four columns of seven, four of six). Eight reserve piles at the bottom of the tableau.
Object: Build the four foundations up, in suit, from Ace to King.
The Play:
• Build columns downward, in suit.
• The topmost card of any column may be played to a foundation, another column, or any reserve pile (max one card each).
• Any reserve card may be played to a foundation or column.
• Empty columns may be filled with any single card.
• No redeal.
Scoring: Traditional scoring.`,
    videoQuery: "Eight Off solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: [7, 7, 7, 7, 6, 6, 6, 6],
      foundations: 4,
      freeCells: 8,
      freeCellLabel: "Reserve cells",
    }
  },
  {
    title: "Eliminator",
    category: "Ordering",
    players: "1 Player",
    blurb: "Four columns of 13 cards each — clear them all by building eight shared foundations up or down, regardless of suit, using as few foundations as possible.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal all cards face up into four columns of 13. Eight foundations on the right start empty.
Object: Remove all cards from the four columns, using as few of the eight foundations as possible.
The Play:
• The topmost card of any column may be moved to any foundation.
• Build foundations upward or downward, regardless of suit, wrapping from King to Ace or Ace to King as needed.
• Cards cannot be moved between columns, and empty columns cannot be filled.
• No redeal.
Scoring: Score by minimising the number of foundations used.`,
    videoQuery: "Eliminator solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 4,
      depth: 13,
      foundations: 8,
      note: "Win using as few of the eight foundations as possible",
    }
  },
  {
    title: "Flower Garden",
    category: "Ordering",
    players: "1 Player",
    blurb: "Six columns of five cards with a 22-card reserve spread face-up — every reserve card is always available, making this a strategic open patience.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal 30 cards to six columns of five. Remaining 22 cards form a face-up reserve.
Object: Build the four foundations up, in suit, from Ace to King.
The Play:
• Build columns downward, regardless of suit.
• Only the topmost card of a column may be played to a foundation or another column.
• Any reserve card may be played to a foundation or column at any time.
• Empty columns may be filled with any available card.
• No redeal.
Scoring: Traditional scoring.`,
    videoQuery: "Flower Garden solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 6,
      depth: 5,
      reserve: 22,
      reserveLabel: "Bouquet",
      foundations: 4,
      note: "Any bouquet card is always available",
    }
  },
  {
    title: "Fortress",
    category: "Ordering",
    players: "1 Player",
    blurb: "All 52 cards are dealt face-up into ten columns — choose a starting card to anchor the foundations, then build up in suit across all four piles.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal all cards face up into ten columns.
Object: Build the four foundations up, in suit, from the rank of the player's chosen starting card, wrapping from King to Ace as needed.
The Play:
• Build foundations upward, in suit, wrapping King to Ace as needed.
• Build columns upward or downward, regardless of suit; only the topmost card may move.
• Empty columns may be filled with any available card.
• No redeal.
Scoring: Traditional scoring.`,
    videoQuery: "Fortress solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: [6, 6, 5, 5, 5, 5, 5, 5, 5, 5],
      foundations: 4,
      note: "Columns build up or down, regardless of suit",
    }
  },
  {
    title: "FreeCell",
    category: "Ordering",
    players: "1 Player",
    blurb: "Nearly every deal is winnable — use four free cells as temporary holding spots to untangle eight columns and build all four suits from Ace to King.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal all cards face up into eight columns. Four home foundations and four free cells (reserve spaces) are available.
Object: Move all cards to the four home foundations, stacking one per suit in ascending order from Ace to King.
The Play:
• Build columns downward in alternating colours.
• Any single card may be moved to a free cell as a temporary placeholder.
• Only the topmost card of a column or a free cell card may be moved to a foundation or column.
• Empty columns may be filled with any card.
Scoring: Traditional scoring — won when all four foundations are complete.`,
    videoUrl: "https://youtu.be/LNpX8B3cKC0",
    layout: "patience",
    layoutSpec: {
      tableau: [7, 7, 7, 7, 6, 6, 6, 6],
      freeCells: 4,
      foundations: 4,
      note: "Whole deck face up — no hidden cards",
    }
  },
  {
    title: "Gaps",
    category: "Ordering",
    players: "1 Player",
    blurb: "Aces removed, 2s anchored left — slide cards into four gaps to build four rows of the same suit running from 2 to King.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal all cards face up in four rows. All 2s move automatically to the left end of each row; all four Aces are removed, creating four gaps.
Object: Arrange four rows of cards — one per suit — running sequentially from 2 to King.
The Play:
• Fill a gap with the next higher card of the same suit as the card immediately to the left of the gap.
• Alternatively, fill a gap with the next lower card of the same suit as the card to the right of the gap.
• Gaps to the right of a King cannot be filled.
• Wrapping from King to Ace is not allowed.
Scoring: One point per card in its correct sequential position.`,
    videoQuery: "Gaps solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 4,
      depth: 13,
      fan: "row",
      note: "Aces are removed, leaving four gaps to fill",
    }
  },
  {
    title: "Golf",
    category: "Ordering",
    players: "1 Player",
    blurb: "Clear seven columns of five cards onto a single foundation by chaining cards one rank up or down — lowest cards remaining is your score.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal seven columns of five cards each. One card from stock starts the single foundation.
Object: Clear all cards from the tableau columns onto the foundation. Lowest number of remaining cards wins.
The Play:
• Build the foundation upward or downward, regardless of suit. Ace is low; King is high; no wrapping.
• Only the topmost card of any column may be played.
• When stuck, flip one card from stock onto the foundation.
• Cards cannot be moved between columns.
• No redeal.
Scoring: Count cards remaining in columns — the lower the better (par is typically 0).`,
    videoUrl: "https://youtu.be/fWtegs8y5cw",
    layout: "patience",
    layoutSpec: {
      tableau: 7,
      depth: 5,
      foundations: 1,
      stock: true,
      note: "One foundation, built up or down without wrapping",
    }
  },
  {
    title: "La Belle Lucie",
    category: "Ordering",
    players: "1 Player",
    blurb: "A fan patience — 17 fans of three cards plus one spare, built down in suit, with up to three redeals by reshuffling remaining cards.",
    instructions: `Preliminaries: Single player. 52-card pack. All four Aces are placed on foundations. Remaining 48 cards are dealt face up into 16 fans of three; one card is left alone.
Object: Build the four foundations up, in suit, from Ace to King.
The Play:
• Build fans downward, in suit; maximum seven cards per fan.
• Only the topmost card of a fan may be moved to a foundation or another fan.
• Empty fan spaces cannot be filled.
• When stuck, gather all cards remaining in fans, reshuffle them, and redeal (allowed up to three times total).
Scoring: Traditional scoring.`,
    videoQuery: "La Belle Lucie solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 16,
      depth: 3,
      foundations: 4,
      note: "Gather and redeal up to three times",
    }
  },
  {
    title: "Nestor",
    category: "Ordering",
    players: "1 Player",
    blurb: "Pair up same-rank cards from six columns and a face-up reserve to clear the whole deck — no column can contain two cards of the same rank on the deal.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal six columns of seven cards, ensuring no column contains two cards of the same rank. Remaining 10 cards form a face-up reserve.
Object: Remove all cards from the columns by playing pairs of the same rank to the single foundation.
The Play:
• Play pairs of same-rank cards from any available positions to the foundation.
• Only the topmost card of any column, or any reserve card, may be played.
• Cards cannot be moved between columns.
• No redeal.
Scoring: Traditional scoring — won when all cards have been paired and removed.`,
    videoQuery: "Nestor solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 6,
      depth: 7,
      reserve: 10,
      foundations: 1,
      note: "Discard cards in pairs of equal rank",
    }
  },
  {
    title: "Penguin",
    category: "Ordering",
    players: "1 Player",
    blurb: "Seven columns of seven with seven reserve cells — build four suited foundations from a randomly dealt starting rank, wrapping King to Ace.",
    instructions: `Preliminaries: Single player. 52-card pack. All cards are dealt face up into seven columns of seven. The starting rank is chosen randomly; three cards of that rank go directly to foundations, the fourth is placed randomly among columns. Seven reserve cells are available.
Object: Build the four foundations up, in suit, from the random starting rank, wrapping from King to Ace as needed.
The Play:
• Build columns downward, in suit, wrapping as needed.
• The topmost column card may move to a foundation, another column, or a reserve cell.
• Packed cards may be moved as a unit.
• Reserve cards may be played to a column or foundation.
• Empty columns may be filled with any available card.
• No redeal.
Scoring: Traditional scoring.`,
    videoQuery: "Penguin solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 7,
      depth: 7,
      freeCells: 7,
      freeCellLabel: "Reserve cells",
      foundations: 4,
      note: "Foundations start at a random rank and wrap",
    }
  },
  {
    title: "Poker Square",
    category: "Ordering",
    players: "1 Player",
    blurb: "Fill a 5×5 grid one card at a time to build the strongest possible Poker hand in every row and column — score at least 100 points to win.",
    instructions: `Preliminaries: Single player. 52-card pack. An empty 5×5 grid forms the tableau.
Object: Build the highest possible Poker hands across all five rows and five columns, scoring at least 100 points (75 or 200 in variant rule sets).
The Play:
• Flip cards one at a time from stock and place each in any empty grid space.
• Once placed, a card cannot be moved.
Scoring: Treat each of the five rows and five columns as a five-card Poker hand and score using standard hand rankings: Royal Flush, Straight Flush, Four of a Kind, Full House, Flush, Straight, Three of a Kind, Two Pair, One Pair, High Card.`,
    videoQuery: "Poker Square Patience solitaire how to play",
    layout: "patience",
    layoutSpec: {
      grid: { rows: 5, cols: 5 },
      stock: true,
      note: "Score all five rows and columns as poker hands",
    }
  },
  {
    title: "Pyramid",
    category: "Ordering",
    players: "1 Player",
    blurb: "Remove cards in pairs totalling 13 from a 28-card pyramid and a seven-card reserve — Kings go alone; clear the whole pyramid to win.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal 28 cards face up in a pyramid shape (rows of 1 through 7). Deal seven cards face up as a reserve at the bottom.
Object: Remove all pyramid and reserve cards to the foundation by playing pairs totalling 13.
The Play:
• Only fully exposed pyramid cards (both cards beneath them removed) may be played.
• Pair any exposed pyramid card with a reserve card, another exposed pyramid card, or the topmost stock/waste card, as long as their ranks sum to 13.
• Kings (rank 13) are removed singly.
• Flip stock one card at a time to a waste pile when no pair is available.
• No redeal.
Scoring: Traditional scoring — won when the entire pyramid is cleared.`,
    videoUrl: "https://youtu.be/dnRlETGqHec",
    layout: "patience",
    layoutSpec: {
      pyramid: 7,
      reserve: 7,
      foundations: 1,
      stock: true,
      waste: 1,
      note: "Remove exposed pairs totalling 13",
    }
  },
  {
    title: "Scorpion",
    category: "Ordering",
    players: "1 Player",
    blurb: "Build four complete King-to-Ace suited sequences on the tableau itself — any face-up card can be moved along with all the cards piled on top of it.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal seven columns: first four columns have seven cards with two face down at the top; last three columns have seven cards all face up. Three remaining cards form the stock.
Object: Build four complete sequences from King down to Ace, in suit, on the tableau.
The Play:
• Build columns downward, in suit.
• Any face-up card may be played to a fully exposed card one rank higher and of the same suit; all cards on top of it move with it.
• Face-down cards are flipped when uncovered.
• When stuck, click stock to deal the final three cards to the first three columns.
• Completed King-to-Ace suited sequences are removed from the tableau.
• Empty columns may be filled with any card or group.
• No redeal.
Scoring: One point per card in a correctly positioned sequence.`,
    videoQuery: "Scorpion solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 7,
      depth: 7,
      faceDown: [2, 2, 2, 2, 0, 0, 0],
      stock: true,
      note: "Three stock cards finish the first three columns",
    }
  },
  {
    title: "Seahaven Towers",
    category: "Ordering",
    players: "1 Player",
    blurb: "Ten columns of five plus two reserve spaces — build all four suited foundations from Ace to King, moving only the bottom card of each column.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal 50 cards face up into ten columns of five. The two remaining cards go to reserve spaces.
Object: Build all four foundations up, in suit, from Ace to King.
The Play:
• Only the bottom card of a column or a card in a reserve space may be moved.
• Build columns downward, in suit.
• Any card may be moved to a free reserve space.
• Empty columns may only be filled with Kings.
Scoring: Traditional scoring — won when all four foundations are complete.`,
    videoQuery: "Seahaven Towers solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 10,
      depth: 5,
      freeCells: 4,
      freeCellLabel: "Reserve",
      foundations: 4,
      note: "Two of the four reserves start filled",
    }
  },
  {
    title: "Shamrocks",
    category: "Ordering",
    players: "1 Player",
    blurb: "Eighteen short fans of three cards — build foundations up from a chosen starting rank, but columns can hold at most three cards at a time.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal all cards face up into 18 columns — 17 with three cards and one with one card.
Object: Build the four foundations up, in suit, from a player-selected starting rank, wrapping from King to Ace as needed.
The Play:
• Build columns upward or downward, regardless of suit; maximum three cards per column.
• Only the topmost card of a column may be played to a foundation.
• Empty columns are not refilled.
• No redeal.
Scoring: Traditional scoring.`,
    videoQuery: "Shamrocks solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
      foundations: 4,
      note: "Never more than three cards to a column",
    }
  },
  {
    title: "Slide",
    category: "Ordering",
    players: "1 Player",
    blurb: "Slide cards left or right in a 6×4 grid to align three of the same rank vertically — remove matched sets and score big for high-ranked triples.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal 24 cards face up in a 6×4 grid. Remaining cards form the stock.
Object: Arrange three cards of the same rank vertically in each column and remove them, aiming for 300 or more points.
The Play:
• Move cards left or right by sliding via directional arrows.
• When three cards of the same rank align vertically, they are removed.
• Empty spaces are filled from stock by sliding or directly.
• Cards sliding off the grid's edge go to a waste pile, or back to stock if they match another card in the row.
Scoring: First set of three-of-a-kind scores 1× rank value; second scores 2× rank value; continuing up to 13× rank value.`,
    videoQuery: "Slide solitaire patience card game how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 4,
      depth: 6,
      fan: "flat",
      stock: true,
      waste: 1,
      note: "Slide rows sideways to align three of a rank",
    }
  },
  {
    title: "Spiderette",
    category: "Ordering",
    players: "1 Player",
    blurb: "A compact Spider variant with seven columns — build four complete King-to-Ace sequences regardless of suit, dealing from stock when stuck.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal seven columns — each with two face-down cards and one face-up card on top. Remaining cards form the stock.
Object: Build four complete sequences from King down to Ace on the tableau, regardless of suit, and remove them.
The Play:
• Build columns downward, regardless of suit.
• Completed King-to-Ace sequences are removed from the tableau.
• The topmost card or a set of packed cards may be moved together.
• Empty columns may be filled with any card or packed set.
• When stuck, deal one card from stock to each column.
• No redeal.
Scoring: One point per card in a correctly positioned sequence.`,
    videoQuery: "Spiderette solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 7,
      depth: 3,
      faceDown: 2,
      stock: true,
      note: "No foundations — build King to Ace in the tableau",
    }
  },
  {
    title: "Strategy",
    category: "Ordering",
    players: "1 Player",
    blurb: "All Aces start on the foundations and every stock card goes to one of eight columns — plan your placement carefully before any column card can move.",
    instructions: `Preliminaries: Single player. 52-card pack. All four Aces are placed on the foundations at the start. Eight columns are empty.
Object: Build the four foundations up, in suit, from Ace to King.
The Play:
• Flip stock cards one at a time; play each to any of the eight columns, regardless of suit or rank.
• Once placed in a column, a card cannot be moved until all stock cards have been dealt.
• After the stock is exhausted, play topmost column cards to the foundations, building upward by suit from Ace.
• Maximum 13 cards per column; no redeal.
Scoring: Traditional scoring.`,
    videoQuery: "Strategy solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: 8,
      depth: 0,
      foundations: 4,
      stock: true,
      note: "Sort the whole stock into eight piles, then unload",
    }
  },
  {
    title: "Triplets",
    category: "Ordering",
    players: "1 Player",
    blurb: "Remove three consecutive-rank cards at a time from the columns — clear the deck down to a single card as high in rank as possible.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal all cards face up into 16 columns of three and two columns of two.
Object: Play all cards except one to the single foundation, leaving the one remaining card as high in rank as possible.
The Play:
• Remove the topmost cards from any columns in sets of three consecutive ranks, regardless of suit (wrapping from King to Ace as needed).
• Cards cannot be moved between columns.
• No redeal.
Scoring: Traditional scoring — if the final remaining card is a King, the score triples.`,
    videoQuery: "Triplets solitaire patience how to play",
    layout: "patience",
    layoutSpec: {
      tableau: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2],
      foundations: 1,
      note: "Remove topmost cards in runs of three",
    }
  },
  {
    title: "Yukon",
    category: "Ordering",
    players: "1 Player",
    blurb: "Like Klondike but bolder — any face-up card can be moved along with every card on top of it, regardless of order, giving more freedom and challenge.",
    instructions: `Preliminaries: Single player. 52-card pack. Deal all cards to seven columns — lengths of 1 to 11 cards, with some face-down cards at the base of each column.
Object: Build the four foundations up, in suit, from Ace to King.
The Play:
• Build columns downward in any suit other than the suit being built upon (i.e., not same suit as the card below).
• Any face-up card may be moved to another column, and all cards on top of it move with it — regardless of order.
• Face-down cards are flipped when uncovered.
• Empty columns may only be filled with Kings.
• No redeal.
Scoring: Traditional scoring.`,
    videoUrl: "https://youtu.be/3zvmx6ONoqw",
    layout: "patience",
    layoutSpec: {
      tableau: [1, 6, 7, 8, 9, 10, 11],
      faceDown: [0, 5, 5, 5, 5, 5, 5],
      foundations: 4,
      note: "Any face-up card moves with everything on top of it",
    }
  },
];
