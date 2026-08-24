# Round design principles in this project

Round Treasury's design system is the source of truth for anything visual here.
The full system lives at [.claude/skills/round-design-system/SKILL.md](.claude/skills/round-design-system/SKILL.md)
— palette, type scale, spacing, component patterns, charts, logos and copy
rules. Read it before designing anything new. This file only explains how it is
wired into this codebase.

**Rule zero: never invent a colour, font or radius.** If it is not in the design
system, it is not on brand.

## This is an internal tool, so it runs dark

The design system has two surface families: light (`#fff` / `#F4F5F0`, ink text)
for documents and customer-facing pages, and the dark **app chrome** palette for
internal tools and dashboards. A wall display in the office is an internal tool,
so [app/globals.css](app/globals.css) sets the app chrome tokens as the default.

## Tokens

All tokens are declared in [app/globals.css](app/globals.css) as CSS custom
properties named exactly as the design system names them (`--neon`, `--ink`,
`--panel`, `--rule`, …), then exposed to Tailwind under clearer utility names.

| Use | CSS variable | Tailwind |
|---|---|---|
| Signal colour | `--neon` | `bg-neon` `text-neon` `border-neon` |
| Text/dark backgrounds | `--ink` | `bg-ink` `text-ink` |
| Page background | `--bg` | `bg-canvas` |
| Panel surface | `--panel` / `--panel-2` | `bg-panel` `bg-panel-2` |
| Borders | `--border` / `--border-2` | `border-line` `border-line-2` |
| Body text | `--fg` | `text-fg` |
| Secondary text | `--muted` | `text-muted` |

The working greys for light surfaces (`--ink-2`, `--caption`, `--rule`,
`--step-1`, `--step-2`, `--soft`, …) are declared too, for anything that has to
render on white.

## Type

Kostic Roc Grotesk only, loaded from `app/fonts/` through `next/font/local` in
[app/layout.tsx](app/layout.tsx). Weights **400 and 500** — there is no bold, so
`<b>`/`<strong>` maps to 500 and `font-synthesis-weight` is off.

> **Missing weight:** only Light (300) and Regular (400) are in the repo. The
> Medium (500) file is not, so headings currently render at Regular and lose
> their weight contrast. Drop `RocGrotesk-Medium.otf` into `app/fonts/` and add
> it to the `src` array in `app/layout.tsx` to fix it. Do not substitute another
> typeface to get close — the system sans fallback is the correct degradation.

Size the type by **role, not by eye**. Each role carries its own tracking,
leading and weight:

`text-hero` `text-statement` `text-metric` `text-h1` `text-h2` `text-card`
`text-lead` `text-body` `text-small` `text-caption` `text-kicker`

Negative tracking above ~40px, none below. Titles never exceed weight 500.
Uppercase is for kickers, tags and labels — never headlines or body.

## The TV canvas

The design system is specified on a fixed 1280×720 canvas. A wall TV is 1920 or
3840 wide, so a route that puts `.tv-canvas` on its root gets a root em that
scales with the viewport (`16px` at 1280 wide, `24px` at 1920). Every rem-based
token then stays exactly in proportion, and the design system's px values can be
read straight off the spec. Text is clipped, not shrunk — keep copy within the
length limits in §7 of the system.

## Components and utilities

Provided in [app/globals.css](app/globals.css) and `components/brand/`:

- `.kick` — the house kicker: a label behind a 4px vertical bar in
  `currentColor`. This is Round's signature label.
- `.ruled` — the ruled row list used for agendas, checklists and next steps.
- `mark` — neon highlight, ink text. Inverts inside `.on-neon`.
- `surface-grid`, `surface-glow` — two of the six permitted backgrounds. The
  other four (`white`, `neon`, `dark`, `soft`) are plain colour utilities.
- `<RoundWordmark>` and `<RoundIconMark>` from
  [components/brand/RoundLogo.tsx](components/brand/RoundLogo.tsx). White goes
  on dark backgrounds only; neon backgrounds take the black mark.

## Neon discipline

Neon is punctuation, not paint. **One neon element per view** — one highlight,
one primary button, the last bar of a chart, one hero number. Never two neon
surfaces in a row, and never neon behind long body copy.

## Copy

UK English, sentence case, no em dashes, no exclamation marks, no emoji.
Precise and calm.

## Don't

- Add a font, colour, radius or shadow that is not in the design system.
- Use pure black (`#000`), saturated blues or reds, or any gradient other than
  the two neon ramps.
- Recolour or distort the logo, or put the black wordmark on a dark background.
- Use an icon set other than Round's, or redraw a Round icon from memory. The
  83 Round icons live in the asset pack — see §0 and §6 of the design system.
