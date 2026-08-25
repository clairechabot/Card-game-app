# Card Codex

A reference codex of **66 card games**, classified by primary mechanism following David
Parlett's *The Penguin Book of Card Games*.

Card Codex is a rules reference, not a playable game. Each entry carries a blurb, structured
rules (preliminaries, object, play, scoring), a setup diagram drawn from that game's actual deal,
and a link to a tutorial video.

## The eight mechanisms

Parlett classifies games by what they fundamentally ask you to do, not by their family or
country of origin. The sidebar follows his order:

| Mechanism | What it asks of you |
| --- | --- |
| **Trick-Taking** | Win tricks to fulfil contracts or accumulate card-points |
| **Card-Taking** | Capture cards from a central layout by matching or summing |
| **Adding-up** | Play cards to a running total without overshooting a limit |
| **Shedding** | Race to be first to empty your hand |
| **Collecting** | Form matched sets and sequences in your hand |
| **Ordering / Patience** | Arrange a shuffled pack into a specific sequence |
| **Vying** | Bet on hand strength, or bluff opponents into folding |
| **Banking** | Bet against a central bank or house dealer |

Games sit under their *primary* mechanism. Blackjack and Pontoon are filed under Adding-up
rather than Banking, for instance, because reaching 21 is the mechanism and the banker is the
betting structure around it — whereas Baccarat, where the draws are fixed by the table and the
bettor decides nothing, is banking through and through.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over the whole project |
| `npm run validate` | Check the game catalogue's integrity (see below) |
| `npm run check-links` | Verify every tutorial link resolves and names its game |

## Project layout

```
src/
  App.jsx                    shell: routing, filtering, layout
  data/
    categories.js            the eight mechanisms
    games/                   66 records, one file per mechanism
  components/
    Sidebar, Header, HomeView, GameGrid, GameCard, GameModal, RulesText
    visualizers/
      Card.jsx               shared card + container primitives
      GameVisualizer.jsx     bespoke diagrams, keyed off `layout`
      PatienceLayout.jsx     patience diagrams, driven by `layoutSpec`
      TrickTable.jsx         trick-taking tables, driven by `tableSpec`
  hooks/                     useHashRoute, useFavorites
  lib/                       slugify, player-range parsing
```

### Adding a game

Add a record to the file for its mechanism in `src/data/games/`:

```js
{
  title: "Whist",
  category: "Trick-Taking",   // must match an id in data/categories.js
  subType: "Plain-trick",     // optional
  players: "4 Players",       // must start with a parseable count
  blurb: "…",
  instructions: `Preliminaries: …
Object: …
The Play:
• …
Scoring:
• …`,
  videoUrl: "https://youtu.be/…",   // or videoQuery for a YouTube search
  layout: "tricktaking",            // a case in GameVisualizer.jsx
}
```

There is no `id` field — the URL slug is derived from the title and is the record's identity, so
ids cannot drift or collide. Patience games take a `layoutSpec` instead of a `layout`; see the
doc comment at the top of `PatienceLayout.jsx` for the fields.

Then run `npm run validate`.

### The validator

`npm run validate` asserts that slugs are unique, every required field is present, every category
resolves, every `layout` has a matching visualizer case, every patience game carries its own
`layoutSpec` and every trick-taking game its own `tableSpec`, a shared diagram is only reused by
games that say how they differ, the deal is arithmetically possible, every rules string uses the
recognised section headings, and no category is empty. It runs in CI alongside lint and build.

`npm run check-links` is separate because it needs the network: it asks YouTube's oEmbed endpoint
whether each `videoUrl` still resolves, and whether the video's real title names the game.

These exist because the catalogue is the product and it keeps drifting. Three separate rounds of
it have now been caught: 31 patience games shared three setup diagrams, so FreeCell was pictured
as Klondike; Hearts claimed to deal thirteen cards each to as many as six players, which needs 78
cards from a 52-card pack; and every one of the six tutorial links the app shipped opened a video
about a different game. Each check above was added after one of those, so the same class of
error fails the build instead of reaching a reader.

## Routing

Hash-based (`#/trick-taking`, `#/game/freecell`), so deep links work on any static host with no
rewrite rules. Favorites are stored per-browser in `localStorage`.

## Deploying

Vite builds a static site to `dist/`. Vercel detects the framework with no configuration —
import the repository and deploy. Any static host works.
