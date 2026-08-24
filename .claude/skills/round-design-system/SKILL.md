---
name: "round-design-system"
description: "Round Treasury's brand design system — canonical palette, Roc Grotesk type scale, spacing, component patterns, backgrounds, chart styling, logo inventory, deck templates and copy rules. Use whenever producing anything Round-branded or visual for Round Treasury: HTML pages, artifacts, dashboards, slides, one-pagers, diagrams, emails, PDFs, mockups, or when asked to \"make this on-brand\", \"use Round's colours/fonts\", \"check this looks like Round\", or when editing round-presentation-builder.html. Never guess Round's colours or type — load this first."
---

# Round Treasury Design System

The single source of truth for Round's visual language.

**Rule zero:** never invent a colour, font or radius. If it is not in this file, it is not on brand.

---

## 0. What you can do with this file alone

Everything in §1–§5, §7 and the "Building HTML" path in §8 is **fully contained in this file**. No other
files, folders or skills are required. Palette, type scale, spacing, radii, backgrounds, every component
pattern, every chart spec, the copy rules and the Round wordmark are all here.

Two things live outside this file, in the **asset pack** (`round-presentation-builder.html`):

1. The 83 Round icons, 14 status icons, 8 illustrations, 7 shapes, 12 G2 badges and 44 client logos, as inline SVG.
2. The 39 slide templates and the base64 Roc Grotesk fonts — i.e. the ability to build a Round **deck**.

### Getting the asset pack

Look for `round-presentation-builder.html` in this order, and stop at the first hit:

1. Attached to the conversation, or in the user's connected/working folder (any subfolder — often a
   *Round Presentation Builder* folder).
2. The **Skill Materials** shared drive, which every Round teammate can read:
   https://drive.google.com/drive/folders/0AEK0M99uqiVsUk9PVA

   Via the Google Drive connector, list that folder with `parentId = '0AEK0M99uqiVsUk9PVA'` and take the
   newest `round-presentation-builder.html`. Use the folder ID, not a remembered file ID: re-uploading the
   pack replaces it with a **new** file ID, so any specific file link goes stale. A `title contains
   'presentation-builder'` search also works, but Drive's index lags for a few minutes after an upload —
   listing the folder is the reliable route.

   It is ~1.4MB, so do **not** pull it into the conversation. Ask the user to download it from that folder
   and either attach it to the chat or drop it in their working folder, then work on that copy with
   file/shell tools.
3. If it is in neither place, say so plainly and follow the degradation rules below. Do not improvise the
   missing assets silently.

**Two hard rules for handling the pack.** It is a single ~1.4MB file:

- **Never read the whole thing into context.** Grep out the one asset or template you need — `ASSETS` is a
  single JSON object, the templates are in the `const TPL = {` registry — or edit it in place.
- **Never reproduce it in a chat response.** Edit the file in place (or write a copy) with file/shell tools
  and hand the user the file. Pasting a deck's HTML into the reply will fail.

### If the pack is unavailable — degradation rules

- **Do it anyway:** any HTML page, artifact, dashboard, one-pager, email, diagram, PDF or mockup. All the
  tokens and patterns are below, and the wordmark is in §6. Output is fully on brand without the pack.
- **Type:** use the fallback stack in §2. Never substitute a different typeface (no Inter, no Manrope, no
  Google font) — the fallback system sans is the correct degradation.
- **Icons:** prefer no icon over a wrong icon. If an icon is structurally necessary, use a plain 1.5px
  ink-stroke geometric glyph and tell the user it is a placeholder, not a Round icon.
- **Illustrations, shapes, G2 badges, client logos:** omit them, or leave a `#F1F2ED` placeholder box. Never
  redraw a client's logo or a G2 badge.
- **Decks:** do not hand-write slide HTML pretending it is a Round deck. Either get the pack, or offer the
  user a 1280×720 HTML page built from §1–§5 and say clearly that it is not a builder deck.

---

## 1. Palette

### Brand palette (the only 7 brand colours)

| Name | Hex | Use |
|---|---|---|
| Neon | `#DDFF00` | The signal colour. Highlights, one CTA, the final bar in a chart, one accent per view. |
| Ink | `#10110D` | All body and heading text on light; dark backgrounds. Never pure `#000`. |
| Neon dim | `#B8D400` | Swatch value in the brand palette. In CSS the working neon-dim is `#9CB400` (quote marks, hover borders); neon button hover is `#e9ff4d`. |
| Grey | `#BDBEBA` | Placeholders, chart axis labels, disabled. |
| Light grey | `#E0E1DF` | Rules, dividers, oversized decorative glyphs. |
| Off white | `#F9F9F9` | Palette value only. In practice the light tint is `#F4F5F0` (the `soft` background). |
| White | `#FFFFFF` | Default slide/page background. |

### Working greys (used throughout the system)

```
#45473E  secondary body text on light        #55574c  tertiary body text
#686A60  captions, small labels              #8a8c80 / #9a9b90  faint meta, page numbers
#BDBEBA  light text on light / placeholder   #E4E5DF  borders and 1px rules
#F6F7F2  step 1 / neutral card fill          #E7E8E1  step 2 fill (one shade darker)
#F4F5F0  "soft" background, chart area fill  #F0F1EC  grid lines
#F1F2ED  image placeholder fill              #EFF0EA  donut track
#F8FFDE  pale neon band                      #FBFCEE  pale neon quote bubble
```

On dark (`#10110D`) backgrounds: body `#BDBEBA`, meta `#8b8d80`, faint meta `#6f7166`,
surfaces `#1a1b16` → `#1e1f19` → `#2a2b23`, borders `#2e2f27` / `#33342a`.

### Semantic
Positive/tick `#4CAF2E`, negative/cross `#c92f2f` — applied as `color` on comparison-row icons only,
never as decoration. Note the 14 `status` SVGs in the pack carry their own hard-coded fills (e.g. `complete`
renders `#17E600`) and ignore `currentColor`; use `icons:check` / `icons:exclaim` when you need the
semantic colours above.

### Approved neon gradients (the only two)

```css
linear-gradient(115deg, #EFFF66, #DDFF00)   /* wide neon band */
linear-gradient(135deg, #EFFF8C, #C2EE00)   /* app-icon tile */
```

### App chrome (dark UI: tools, dashboards, internal apps)

```css
:root {
  --bg: #0a0a0a;      --panel: #121310;   --panel-2: #171814;
  --border: #26271f;  --border-2: #33342a;
  --fg: #f2f2ee;      --muted: #8b8d80;
  --neon: #DDFF00;    --neon-dim: #9CB400;  --ink: #10110D;
  --radius: 10px;
}
```

### Neon discipline
Neon is punctuation, not paint. One neon element per view: a `<mark>` highlight, one primary
button, the last bar of a chart, the final step arrow, one hero number on dark. Neon backgrounds
carry ink text (`#10110D`) and ink-toned secondary text `#2a2c1a`. `mark` inverts on neon
backgrounds: ink fill, neon text.

---

## 2. Typography

**Kostic Roc Grotesk** only, weights **400 (Regular)** and **500 (Medium)**. There is no bold —
`<b>`/`<strong>` maps to weight 500. Always use this stack:

```css
font-family: 'Roc Grotesk', ui-sans-serif, system-ui, sans-serif;
-webkit-font-smoothing: antialiased;
```

**Sourcing the font.** Roc Grotesk is a licensed typeface and is not on any public CDN. Two cases:

- **Pack available:** copy the two base64 `@font-face` blocks from the top of
  `round-presentation-builder.html` and paste them into the output. Required for anything that must render
  correctly on someone else's machine or export to PDF.
- **Pack unavailable:** ship the stack above with no `@font-face`. It renders in the local system sans and
  stays on brand in every other respect. Mention this once to the user if the output is customer-facing.
  Never substitute a different typeface to "get close".

### Type scale (px, on the 1280×720 slide canvas — scale proportionally elsewhere)

| Role | Size | Weight | Tracking | Leading |
|---|---|---|---|---|
| Hero stat | 200 / 170 | 500 | -0.02em | 1.0 |
| Section number | 180 | 500 | -0.02em | 1.0 |
| Thank-you title | 96 | 500 | -0.02em | 1.05 |
| Cover headline (editorial) | 84 | 500 | -0.02em | 1.05 |
| Statement | 64 | 500 | -0.015em | 1.12 |
| Metric value | 62 | 500 | -0.015em | 1.0 |
| H1 (`.s-h1`) | 58 | 500 | -0.015em | 1.08–1.1 |
| Section title | 54 | 500 | -0.015em | 1.1 |
| H2 (`.s-h2`) / quote | 44 | 500 | -0.01em | 1.12 / 1.28 |
| Card / feature title | 20–24 | 500 | — | 1.25 |
| Sub / lead (`.s-sub`) | 21 | 400 | — | 1.45 (1.6 for long paragraphs) |
| Body | 15.5–19 | 400 | — | 1.45–1.55 |
| Small (`.s-small`) | 13–15 | 400 | — | 1.5 |
| Caption / meta | 11–13 | 400 | — | 1.4 |
| Kicker (uppercase) | 10.5–15 | 500 | .08–.18em | — |

Rules: negative tracking above ~40px, none below. Titles never exceed 500 weight. Uppercase is
reserved for kickers, tags and labels — never for headlines or body.

### Kicker (house signature)
A label preceded by a 4px vertical bar in `currentColor`:

```css
.s-kick { display:flex; align-items:center; gap:12px; font-size:16px; font-weight:500; margin-bottom:22px; }
.s-kick::before { content:''; width:4px; height:21px; background:currentColor; flex:none; }
```

The `.s-kick` bar label itself is 16px and *not* uppercase. The uppercase label form is
`font-size:10.5–15px; letter-spacing:.08–.18em; text-transform:uppercase; font-weight:500; color:#686A60`
(tags and plan names sit at the `.08em` end, section kickers at `.16–.18em`).

---

## 3. Layout & spacing

- **Slide/page canvas:** fixed **1280 × 720**, `overflow:hidden`. Text does **not** shrink to fit.
- **Side margin:** `64px` left and right — this is the spine of the system. Wide/centred layouts use `90–140px`.
- **Top padding:** `48–92px` on the template root. Footer sits `32px` from the bottom, content clears `~84–110px`.
- **Column gaps:** even values from 18 to 80 — commonly 20 / 22 / 26 / 30 / 38 / 54 / 64 / 76px.
  Card padding `20–50px`. List gaps 7–14px, block gaps 22–36px.
- **Radii:** `0` for structural cards, ruled rows and tables (the house look is mostly square);
  `8–10px` for thumbs, cards and image boxes; `12–18px` for large photos and app-icon tiles;
  `999px` for pills, chips and numbered discs; `4–5px` for tiny tags and bands.
- **Borders:** `1px solid #E4E5DF` on light, `1px solid #2e2f27` on dark. `1.5px` for emphasis/dashed.
- **Shadows:** used sparingly — `0 24px 60px rgba(16,17,13,.14)` for a hero product shot,
  `0 16px 38px rgba(16,17,13,.09)` for a highlighted card, `0 2px 8px rgba(16,17,13,.04)` for a resting card.

### Backgrounds (six, no others)

```css
white  #fff
grid   #fff + 91px × 91px lines of #f0f1ec, offset -1px
neon   #DDFF00                     (text becomes ink; sub text #2a2c1a)
dark   #10110D                     (text #fff; sub text #BDBEBA)
soft   #F4F5F0
glow   radial-gradient(760px 540px at 90% 114%, rgba(221,255,0,.42), rgba(221,255,0,0) 64%),
       radial-gradient(560px 420px at -6% -12%, rgba(221,255,0,.20), rgba(221,255,0,0) 60%), #fff
       /* use rgba(221,255,0,0), not `transparent` — transparent interpolates through grey */
```

Sequence them: neon opener → white/grid content → dark or neon for one emphasis moment → neon closer.
Never two neon slides in a row.

### Footer (house style)
Wordmark left, italic disclaimer centred, page number right:

```css
.s-footer { position:absolute; left:64px; right:64px; bottom:32px;
  display:flex; justify-content:space-between; align-items:center; gap:24px; }
.s-footer .wm svg { height:17px; }                       /* 88px slot */
.s-footer .note { flex:1; max-width:560px; text-align:center; font-size:11px;
  font-style:italic; color:#9a9b90; line-height:1.4; }
.s-footer .pg { width:88px; text-align:right; font-size:13px; color:#9a9b90; }
```

**Regulatory note.** Use this verbatim on any external Round material unless the user gives you a different
one. It matches the authorisation wording on roundtreasury.com:

> Round Financial Limited is authorised and regulated by the Financial Conduct Authority (FRN: 1050315), registered in England and Wales with company number 14609702.

Round is **directly authorised**. Never describe Round as an appointed representative of WealthKernel — that
was the old status and any material still carrying FRN 995009 or 723719 is out of date and should be corrected.
Every external deck carries the note. Where a specific product needs additional wording (Insignis introductions,
Keel e-money, BlackRock MMFs, FSCS scope), take it from the website's disclaimers or from compliance rather
than paraphrasing.

---

## 4. Component patterns

**Buttons** (chrome): height 34px (`sm` 28px), radius 8px (`sm` 7px), 13px/500, `gap:7px`.
Primary = neon fill + ink text, hover `#e9ff4d`. Secondary = `--panel-2` fill + `--border-2`.
Ghost = transparent + muted text.

**Inputs**: height 32px, radius 8px, 13px, `--panel-2` fill, `--border-2` border; focus
`border-color:#55573f; box-shadow: 0 0 0 2px rgba(221,255,0,.12)`.

**Pill / tag**: ink fill, white text, 12–14px/500, padding `4px 11px` to `5px 14px`, radius 5 / 6 /
999px; uppercase + `.08em` tracking for tags. On dark, or as the "current"/highlighted state, invert
to neon fill + ink text (e.g. the "most popular" badge on a pricing card, on light).

**Numbered disc**: 36–44px circle, ink fill, white text, 15–18px/500. The *last* or *active* one
flips to neon fill + ink text. Square variant: 36px, radius 2px.

**Ruled row list** (agenda, checklist, next steps): rows separated by `1px #E4E5DF`, top rule on
the first row, `17–22px` vertical padding, 19–23px text, numeral or icon in a fixed-width gutter.

**Card grid**: white fill, `1px #E4E5DF`, square corners for tables of cards; internal columns
divided by left borders rather than gaps. Watermark numeral variant: 80px/500 in `#F0F1EA` behind the content.

**Progression (1-2-3)**: fill ramp `#F6F7F2` → `#E7E8E1` → neon, and the neon block gets the arrow:

```css
clip-path: polygon(0 0, calc(100% - 44px) 0, 100% 50%, calc(100% - 44px) 100%, 0 100%);
padding-right: 66px;
/* timeline variant: calc(100% - 46px) with padding-right: 60px */
```

**Image box**: `#F1F2ED` fill, `object-fit:cover`, radius 10–16px, centred placeholder in `#BDBEBA`.

**Highlight**: `<mark>` → neon background, ink text, `padding:0 .06em; border-radius:2px`. One per headline, at most.

---

## 5. Charts

House chart style is flat and ink-lined — no gradients, no 3D, no rainbow palettes.

- **Line**: `620×400` viewBox, axes `#E4E5DF`, dashed verticals `stroke-dasharray:"3 4"`,
  axis labels 13–14px `#BDBEBA`, area fill `#F4F5F0`, line `#10110D` at `stroke-width:3` round caps,
  end point white circle with 2.5px ink stroke, and a **neon callout flag** (96×42 rect + triangle
  pointer, 22px/500 ink text).
- **Bar**: `1120×400`, bars `#E7E8E1` with the **final bar `#DDFF00`**, bar width `min(150, step*0.56)`,
  value label 21px/500 ink above, category label 15px `#9a9b90` below, baseline `#E4E5DF`.
- **Donut**: `330×330`, r=130, stroke-width 40, track `#EFF0EA`, value arc `#DDFF00`, rotated -90°,
  butt caps, big number centred at 62px/500.
- **Tiered bars (market size)**: widths 100% / 76% / 50%, fills `#F6F7F2` / `#E7E8E1` / neon.

Never more than two data colours in one chart: a neutral and neon.

---

## 6. Assets

### The wordmark and icon mark — always available, use these

Paste inline. Never recolour, stretch, outline, rotate, add effects or redraw. Wordmark ~520px wide on a
cover, 17–26px tall in headers and footers. For the **white** variants, use the identical SVG with every
`fill="#10110D"` swapped to `fill="#FFFFFF"` — nothing else changes. White goes on `#10110D` dark
backgrounds **only**: neon backgrounds take the black wordmark.

Wordmark (`fullBlack`):

```html
<svg viewBox="0 0 660 133" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M555.888 28.8331H537.065V104.165H555.888V28.8331Z" fill="#10110D"/>
<path d="M650 38.2495V94.7486C638.975 105.785 632.792 111.967 621.766 122.998H555.887L555.888 104.165L624.119 104.165C628.017 104.165 631.177 101.003 631.177 97.1027V35.8954C631.177 31.9949 628.017 28.833 624.119 28.833L555.888 28.8331L555.887 10H621.766C632.792 21.0361 638.975 27.2181 650 38.2495Z" fill="#10110D"/>
<path d="M518.209 38.2495V122.998H499.387V35.8954C499.387 31.9949 496.226 28.833 492.328 28.833H431.155C427.257 28.833 424.096 31.9949 424.096 35.8954V122.998H405.274V38.2495C416.299 27.2181 422.482 21.0361 433.508 10H489.975C501.001 21.0361 507.184 27.2181 518.209 38.2495Z" fill="#10110D"/>
<path d="M386.465 10V94.7486C375.44 105.785 369.262 111.967 358.232 122.998H301.764L273.53 94.7486V10H292.353V97.1027C292.353 101.003 295.513 104.165 299.411 104.165H360.585C364.483 104.165 367.643 101.003 367.643 97.1027V10H386.465Z" fill="#10110D"/>
<path d="M226.458 10H169.99C158.965 21.0361 152.781 27.2181 141.756 38.2495V94.7486C152.781 105.785 158.965 111.967 169.99 122.998H226.458C237.483 111.967 243.666 105.785 254.691 94.7486V38.2495C243.666 27.2181 237.483 21.0361 226.458 10ZM235.869 97.1027C235.869 101.001 232.711 104.165 228.81 104.165H167.637C163.741 104.165 160.579 101.001 160.579 97.1027V35.8954C160.579 31.997 163.741 28.833 167.637 28.833H228.81C232.711 28.833 235.869 31.997 235.869 35.8954V97.1027Z" fill="#10110D"/>
<path d="M28.8227 10.0019V28.8349H97.0544C100.953 28.8349 104.113 31.9968 104.113 35.8973V66.499H122.935V38.2514C111.909 27.2193 105.728 21.034 94.7016 10.0019L28.8227 10.0019Z" fill="#10110D"/>
<path d="M28.8227 28.8349L10 28.8349V123H28.8232L28.8227 28.8349Z" fill="#10110D"/>
<path d="M47.3887 80.6346H73.2697L113.524 123H87.643L47.3887 80.6346Z" fill="#10110D"/>
<path d="M122.935 66.499H104.113L104.113 80.6248H122.936L122.935 66.499Z" fill="#10110D"/>
</svg>
```

Icon mark (`iconBlack`), for favicons, avatars and tight spaces:

```html
<svg viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5004 28.5002H10V121H28.5004V28.5002Z" fill="#10110D"/>
<path d="M46.7474 79.3826H72.1847L111.749 120.998H86.3114L46.7474 79.3826Z" fill="#10110D"/>
<path d="M28.5004 28.5002L28.4996 10H93.2489L120.999 37.7503L121 79.3736H102.499L102.498 35.4378C102.498 31.6054 99.3928 28.5002 95.5615 28.5002H28.5004Z" fill="#10110D"/>
</svg>
```

If an output can rely on the network, the hosted wordmark is also fine:
`https://www.roundtreasury.com/images/round_logo.svg`. Prefer inline for anything that must work offline
or export to PDF.

### Everything else — in the asset pack

In `round-presentation-builder.html` (see §0) under the `ASSETS` object, as inline SVG strings. Copy from
there rather than redrawing. Reference syntax used by the deck JSON is `"<set>:<key>"`.

- **`icons`** (83, outline look drawn as filled paths — they inherit `currentColor` via `fill`, so set
  `color`, never `stroke`): account, accounting, activities, add-user, ai, ai-alt,
  arrow-up-right, arrow-right, arrow-down, autopilot, bell, building, calendar, card, check,
  clock-rotate-right, cloud, code, compliance-certificate, connect, context, copy, currency, dashboard,
  data, deposit, employee-payroll, exclaim, export, file, filter, folder, global, group, help, hourglass,
  info, insights, insurance, invoice, layers, legal, link-account, liquidity, lock, logic, mail, manual,
  mcp, merchant, message, nodes, note, notifications, payment, pencil, percent-change, pin, plane, plus,
  portfolio, refresh, rocket, route, saas, search, secure-application, send, server, settings, shine,
  sweep, timer, transfer, trash, trigger, user, verification, view, verified, wallet, warning, withdraw.
  Sizes: 18–22px inline, 26–34px feature, 46–62px hero.
- **`status`** (14, fixed fills — these do **not** follow `currentColor`): arrow-diagonal, autopilot,
  cancelled, complete, draft, exclaim, exclaim-inactive, in, negative, out, progress, received, todo,
  todo-colored.
- **`illustrations`** (8): `illustration-1` … `illustration-8`. One per view maximum.
- **`shapes`** (7): cube, cylinder, icosahedron, rounded-cube, sphere, star, torus.
- **`g2`** (12): best-estimated-roi, best-meets-requirements, best-results, best-usability, easiest-admin,
  easiest-setup, easiest-to-use, fastest-implementation, high-performer, momentum-leader, most-implementable,
  users-most-likely-to-recommend.
- **`logos`** (4): `fullBlack`, `fullWhite`, `iconBlack`, `iconWhite` — the same marks already inlined above.
- **`clientLogos`** (44): 11fs, g2, adfin, adfin-1, alstin, amazon, bnp-paribas, capitalone, checkout, cleo,
  coinbase, coniq, crowdcube, culture, dex, disco, ef, fis, fscs-mini, fscs-official, genie, indeed, love,
  merge, metomic, moneybox, monzo, notion, novo, oaknorth, ontime, passion-capital, pave, primer, republic,
  rise, roomzero, round-ai, shares, tsic, upvest, velocity-black, xero, yhangry.
  Display on white cells (`104px` tall cell, logo `30px`); on dark backgrounds put logos on a `#f5f6f1`
  cell rather than inverting them.

Asset keys are exact. A key that does not exist renders as an empty placeholder, so check the list (or grep
`ASSETS`) rather than guessing a plausible name.

---

## 7. Copy rules

- **UK English.** No em dashes. Sentence case for headings; no trailing full stop on short headings.
- **Plain English over jargon.** Round is precise and calm, not breathless. No exclamation marks, no emoji.
- **Length limits on a 1280×720 slide** (text is clipped, not shrunk): titles ≤ 60 chars; subtitles and
  paragraphs ≤ 220 chars (~3 lines); bullet / row / card item text ≤ 60 chars; card body ≤ 160 chars;
  comparison slides max 3 rows; keep every list within the counts in §8.
- **Only `<mark>`, `<b>`/`<strong>`, `<br>`, `<em>`/`<i>`** are allowed in rich text fields; everything
  else is stripped.

### Compliance

Anything customer-facing is a potential financial promotion. If the `gtm-compliance-checker` skill is
available, run the copy through it before it ships. If it is not installed, apply these minimums and tell
the user the copy still needs a compliance review:

- No promise, guarantee or projection of returns. Quote rates as historic and dated, never as "you'll earn".
- Say "capital at risk" wherever MMFs or investing are mentioned.
- Do not describe Round as a bank, or client money as a deposit, or imply FSCS cover for e-money or MMFs.
- Keep the regulatory note from §3 on anything external, and never use the old appointed-representative wording.

---

## 8. Applying the system

### Building HTML / an artifact / a page — works with no other files
1. Set the font stack from §2. Paste the base64 `@font-face` blocks only if you have the pack and the
   output must render offline.
2. Declare the §1 tokens as CSS variables — light surface (`#fff` / `#F4F5F0`, ink text) for documents and
   customer-facing pages, the dark chrome tokens for internal tools and dashboards.
3. Use the §2 scale by role, not by eyeballing. Only weights 400 and 500.
4. Reuse §4 component patterns verbatim rather than inventing new ones.
5. One neon accent. Square corners for structure, rounded only for media and pills.
6. Wordmark from §6, inline.

### Building a Round deck — needs the asset pack

Do not hand-write slide HTML. Get `round-presentation-builder.html` (§0), then rewrite **only** the JSON
inside `<script type="application/json" id="round-deck">`, leaving all layout, CSS and script untouched.
Edit the file in place with file/shell tools and hand the user the file — never paste it into the reply.
Note that the string `id="round-deck"` also appears in the file's header comment and in its script, so when
locating the block programmatically, take the **last** match.

```json
{ "title": "…", "footnote": "…",
  "slides": [ { "type": "<template key>", "bg": "white|grid|neon|dark|soft|glow",
                "footer": true, "hidden": false, "data": { }, "styles": {} } ] }
```

`footnote` is the centred footer disclaimer — keep it as the §3 regulatory note on any external deck.
Leave `styles` as `{}`; it holds the browser editor's manual nudges.

**The app silently repairs bad JSON. This is the main way a deck goes wrong:**

- A slide whose `type` is not one of the 39 keys below is **deleted without warning** — a typo like
  `bullets` or an invented key like `three-column` costs you the whole slide.
- A `bg` the template does not allow is **silently swapped** for that template's first allowed background.
- If every slide is dropped, the deck resets to a single default cover.

So after writing the JSON: re-read it back, confirm it parses, confirm the slide count matches what you
intended, and confirm every `type` and `bg` pair appears in the table below. Tell the user the slide count.

#### The 39 templates and their allowed backgrounds

| Key | Allowed `bg` |
|---|---|
| `cover` | neon, dark, white |
| `cover-left` | white, grid, soft, dark, neon |
| `agenda` | white, grid, soft, dark |
| `statement` | grid, white, dark, neon, soft |
| `section-number` | grid, white, dark, neon, soft, glow |
| `quote` | white, grid, dark, neon, soft |
| `next-steps` | neon, white, soft, dark, glow |
| `closing` | neon, dark, white |
| `thank-you` | white, grid, soft, dark, neon |
| `title-bullets` | white, grid, dark, soft |
| `three-cards` | white, grid, dark, soft |
| `comparison` | white, grid, dark, soft |
| `timeline` | white, grid, dark, soft |
| `pillars` | white, grid, dark, soft |
| `checklist` | white, grid, soft, dark |
| `feature-grid` | white, grid, dark, soft |
| `two-panel` | white, grid, soft, dark |
| `steps` | grid, white, soft, dark |
| `process` | white, grid, soft, dark |
| `faq` | white, grid, soft, dark |
| `numbered-cards` | grid, white, soft, dark |
| `mission-photo` | white, soft, grid, glow |
| `bracket-features` | grid, white, soft |
| `stat-chart` | white, grid |
| `bar-chart` | white, grid, soft |
| `donut` | white, grid, soft |
| `market-size` | white, grid, soft |
| `pricing` | white, grid, soft |
| `big-number` | white, grid, dark, neon, soft |
| `metrics-grid` | white, grid, dark, soft |
| `roadmap` | white, grid, soft, dark |
| `hero-stat` | grid, white, soft, dark |
| `image-full` | white, grid, dark, soft |
| `logo-wall` | white, grid, dark, soft |
| `team` | white, grid, soft |
| `testimonial-wall` | white, grid, soft |
| `architecture` | grid, white, soft |
| `g2-badges` | grid, white, soft |
| `modules` | white, grid, soft |

Note that most narrative and data templates do **not** allow `neon` — only the openers, closers,
`statement`, `quote`, `section-number`, `next-steps` and `big-number` do.

#### List field sizes (min, max)

The renderers and the browser editor enforce these. Write within them.

```
bullets 2-5   items 1-6    rows 2-5     blocks 3     cols 2-3    cards 2-4   people 1-6
groups 1-2    logos 2-12   stats 2-4    years 3      entries 3-8 actions 2-5 checks 3-7
paras 1-3     feats 4-6    points 1-4   steps 3      phases 3-5  qas 2-6     features 3-4
metrics 2-4   rings 3      quarters 3-4 plans 2-3    perks 2-5   quotes 3-6  agents 3-5
chips 3-7     ncards 2-4   badges 4-12  modules 3-6
```

#### Field names and asset references

Field names per template are in the `const TPL = {` registry inside the file's script — grep the template's
`defaults` object to see the exact shape before writing data. Asset references are **per field type**:

| Field type | Accepts |
|---|---|
| `img` | `"illustrations:<key>"`, `"shapes:<key>"`, a data URL |
| `icon` | `"icons:<key>"`, `"status:<key>"` |
| `logo` | `"clientLogos:<key>"`, a data URL |
| `badge` | `"g2:<key>"` (used by `g2-badges`) |
| `chart` | `{ labels, values, callout, prefix, suffix }` — labels/values are comma-separated strings |

#### What the user does next — tell them this

1. Open the returned file in a browser. Fonts, logos and icons are embedded, so it works offline.
2. Edit within the guardrails: text, neon `<mark>` highlights, small nudges and resizes, swap an image /
   icon / logo from the right panel (double-click jumps to the library), change a slide's template or
   background, add / hide / duplicate / reorder / delete slides, click a chart to edit its data, and set
   the deck-wide footer note from the right panel. Layout, fonts and colours are deliberately locked.
3. **Export PDF** opens the print dialog — choose "Save as PDF". Hidden slides are skipped.
4. **Save HTML** downloads the same file with edits baked in, ready to share or bring back for bigger changes.
5. If a bar appears saying *"You have unsaved edits from a previous session in this browser"*, that is an
   autosave of the deck they had open **before**. Ignore it on a fresh deck — clicking Restore replaces the
   new deck with the old one.
6. Uploaded images are stored in the file as data URLs; the app warns above 2.5MB per image, so ask for
   compressed images.

### Do not
- Add a font, colour, radius or shadow that is not in this file.
- Recolour or distort the logo, or place the black wordmark on a dark background (on neon it is correct —
  neon covers use the black wordmark).
- Use neon as a large background behind long body copy, or two neon elements in one view.
- Use pure black, saturated blues/reds, any gradient other than the two neon ramps in §1,
  drop shadows on text, or icon sets other than Round's.
- Let slide copy exceed the §7 limits — it is clipped, not resized.
- Invent a template key, background, asset key or list length. Check the tables above.
- Touch anything in the builder outside the `#round-deck` JSON, or paste the file into a chat reply.
- Invent an icon, illustration, client logo or G2 badge when the pack is missing. Follow §0 instead.
- Use the old appointed-representative FCA wording, or FRN 995009 / 723719.

