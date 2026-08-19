# Client logos

Drop each client's logo in this folder using the exact filename below and it
appears on the home page automatically, in the "Engaged by" cards. No code
change is needed.

| File | Client |
| --- | --- |
| `hdfc-life.svg` | HDFC Life |
| `vervali-systems.svg` | Vervali Systems |
| `heckyl-technologies.svg` | Heckyl Technologies |

`.png` and `.webp` work too — the extension does not matter, only the name
before it.

## Why this folder and not `public/`

Files here are resolved when the site is **built**, so a logo that has not been
added yet is simply absent from the bundle: nothing is requested and the card
falls back to the client's name set in Space Grotesk.

Putting them in `public/` would break that. This site serves an SPA fallback,
so a request for a file that does not exist returns `200` with the *index page*
rather than a `404`. An `<img>` pointed at a missing logo would then neither
load nor cleanly fail, leaving an empty slot where the client's name should be.

## Before you add one

These are **third-party trademarks**, not our assets. Naming a client and
displaying their logo are different things: a logo implies endorsement, and
most companies require written permission for it. The 2026 portfolio already
withholds one client's identity at their request, so the same care applies
here.

Get the file from the client directly, or from their official brand or press
page. Avoid logo-aggregator sites — the marks there are often outdated,
redrawn, or redistributed without licence.

## What makes a good file

- **SVG** preferred; a transparent PNG at 2× the display size otherwise.
- Rendered at about **34px tall**, so supply at least 68px of height.
- **Horizontal lockup** rather than a stacked or icon-only mark — the slot is
  wide and short, max 190 × 34px.
- **Transparent background**, trimmed of surrounding whitespace, or the mark
  will look smaller than its neighbours.
- Any colour is fine. Logos render greyscale and return to full colour on
  hover, so three unrelated brand palettes do not fight the layout.
