# Design plan — valentino-intelligence-site

Written 2026-09-11. First pass only (plan + self-review). Builder agent implements from this.

Reference for the look: a well-made quote sheet from a local shop. Ruled paper, ballpoint-blue ink,
one green stamp. Not a SaaS page, not a magazine.

## References

- https://eriosoftware.com/work — visual reference to pull from when building the site.

## 1. Tokens

### Color

| Token        | Hex       | Role |
|--------------|-----------|------|
| `paper`      | `#F7F6F1` | page background (bond white, one step cooler than cream) |
| `ink`        | `#1C2430` | all headings and body text (blue-black, reads as ballpoint ink) |
| `muted`      | `#5B6470` | secondary text: dates, client type, footer |
| `accent`     | `#23573E` | the single CTA button, the check marks in the quote sheet, link underlines |
| `accent-ink` | `#FFFFFF` | text on `accent` |
| `rule`       | `#B9C7DA` | ledger ruling: 1px horizontal lines in lists and the quote sheet |
| `margin`     | `#D46A6A` | the one vertical margin line inside the quote sheet only |

Contrast (WCAG, measured against `paper` L≈0.92):
- `ink` on `paper` 14.4:1 (AAA)
- `muted` on `paper` 5.5:1 (AA body)
- `accent-ink` on `accent` 8.4:1; `accent` as text on `paper` 7.8:1 (AA, so accent links are fine)
- `rule` and `margin` are non-text; no requirement.

No other colors. No greys from the Tailwind palette. No shadows anywhere. No gradients.

### Type

Two families from one designer: Geist for everything read, Geist Mono for section labels.
(Changed from Zilla Slab / Public Sans on 2026-09-14; the old pair is superseded.)

| Role    | Family     | next/font name | Weights   | Fallback stack |
|---------|------------|----------------|-----------|----------------|
| sans + display | Geist | `Geist`   | variable (use 400, 600) | system-ui, "Helvetica Neue", Arial, sans-serif |
| mono    | Geist Mono | `Geist_Mono`   | variable (use 400) | ui-monospace, Menlo, monospace |

Section labels (h2) are Geist Mono, small, uppercase, tracked, `muted`. This overrides the mono and
tracked-label ban in trait 5 below.

Type scale (mobile / ≥sm). Body-first; headings are Geist 600, section labels Geist Mono 400.

| Element | Mobile           | ≥sm              | Notes |
|---------|------------------|------------------|-------|
| h1      | 34px / 1.15      | 52px / 1.08      | Geist 600, letter-spacing -0.01em, max 14 words |
| h2      | 14px / 1.5       | 14px / 1.5       | Geist Mono 400, uppercase, `tracking-widest`, `muted` |
| h3      | 20px / 1.3       | 22px / 1.3       | Geist 600 |
| body    | 17px / 1.55      | 18px / 1.6       | Geist 400 |
| small   | 14px / 1.5       | 15px / 1.5       | Geist 400, `muted` |
| price   | 26px / 1         | 30px / 1         | Geist 600, `font-variant-numeric: tabular-nums` (unused; no prices on the page) |

rem base is 16px; express the above as rem (17px = 1.0625rem, 18px = 1.125rem, etc).

### Spacing, measure, radius

- 8px grid. Section vertical padding: 56px mobile, 96px ≥sm. Inside a section, heading→content 20px,
  item→item 24px. Sections are separated by whitespace only, never by a page-wide rule.
- Measure: body column max 62ch (≈640px at 18px). `max-w-[40rem]` on the text column.
- Border radius: `0` everywhere except the one button and any input, which get `3px`. Nothing is a
  rounded card.
- Ledger ruling: 1px `rule` lines, top border on each list entry, 40px row height minimum so rows read
  as ruled paper rather than a table.

### The one memorable element

The **quote sheet**: the Discovery Sprint offer is typeset as an actual line-item quote. A block with a
1px `margin` vertical line 24px from its left edge (legal-pad margin), `rule` horizontal ruling, tabular
figures, the price right-aligned on its own ruled line, and the guarantee as the last line. It is the
only place on the page with a vertical line and the only place with the `margin` color. Everything
else on the page is plain ink on paper so this block carries the whole visual argument: "here is exactly
what you get and what it costs".

No stamp graphic, no rotation, no paper texture. The ruling and the numbers do the work.

## 2. Layout

Concept: a single-column printed proposal read top to bottom, with section headings hanging in a left
margin column on desktop so the main column stays one uninterrupted measure.

Alignment: left-aligned throughout, ragged right, including the hero and the footer. Nothing is
centered; documents aren't.

Desktop grid (≥lg): `grid-cols-[12rem_minmax(0,40rem)]`, column gap 48px, whole grid `max-w-[56rem]`
left-anchored with `px-8`. Mobile: one column, `px-5`, heading stacks above its content.

Header (both sizes): one line. "Valentino Intelligence" in Zilla 600 left, "Beaverton, Oregon" in
`muted` right. No nav, no logo mark.

### Hero

Mobile
```
+----------------------------------+
| Valentino Intelligence   Beaverton|
|                                   |
| You are the approval step        |
| for everything. That is          |   h1, Zilla 700, 34px
| the bottleneck.                  |
|                                   |
| I build the boring automations   |   body 17px, muted? no: ink
| a 5–75 person business actually  |
| needs, with a human sign-off,    |
| an audit trail, and a rollback.  |
|                                   |
| [ Book a free fit call ]         |   accent button, full width on mobile
| 30–45 minutes. No deck.          |   small, muted
+----------------------------------+
```

Desktop
```
+--------------------------------------------------------------------+
| Valentino Intelligence                              Beaverton, Oregon|
|                                                                      |
|            | You are the approval step for everything.               |
|  (empty    | That is the bottleneck.                        h1 52px  |
|   margin)  |                                                          |
|            | I build the boring automations a 5–75 person business    |
|            | actually needs, with a human sign-off, an audit trail,   |
|            | and a rollback.                                          |
|            |                                                          |
|            | [ Book a free fit call ]   30–45 minutes. No deck.       |
+--------------------------------------------------------------------+
```
(Headline copy above is placeholder shape only; the copywriter owns the words.)

### Content section: "What you get" (the quote sheet)

Mobile
```
+----------------------------------+
| What you get                     |   h2
|                                   |
|  |  Discovery Sprint             |   h3 inside sheet; the | is the margin line
|  |-------------------------------|   rule
|  |  Two weeks, on site or remote |
|  |-------------------------------|
|  |  Roadmap of 3–5 scoped        |
|  |  opportunities, each with     |
|  |  effort and ROI               |
|  |-------------------------------|
|  |  One build spec you can hand  |
|  |  to me or anyone else         |
|  |-------------------------------|
|  |  Fixed fee            $4,500  |   price, tabular, right-aligned
|  |-------------------------------|
|  |  If the roadmap has nothing   |
|  |  worth building, you don't    |
|  |  pay.                         |   guarantee line, ink 600
+----------------------------------+
```

Desktop
```
+--------------------------------------------------------------------+
| What you get |  |  Discovery Sprint                                  |
|   (h2 in     |  |----------------------------------------------------|
|    margin)   |  |  Two weeks, on site or remote                      |
|              |  |----------------------------------------------------|
|              |  |  Roadmap of 3–5 scoped opportunities, with effort  |
|              |  |  and ROI for each                                  |
|              |  |----------------------------------------------------|
|              |  |  One build spec you can hand to me or anyone else  |
|              |  |----------------------------------------------------|
|              |  |  Fixed fee                                  $4,500 |
|              |  |----------------------------------------------------|
|              |  |  If the roadmap has nothing worth building,        |
|              |  |  you don't pay.                                    |
+--------------------------------------------------------------------+
```

### Case entry (one of three, stacked, no cards)

Mobile
```
+----------------------------------+
|----------------------------------|   1px rule top
| Family restaurant, South Carolina|   small, muted
| Social posts went out only when  |   h3
| the owner had time to post them. |
|                                   |
| Built a Slack approval queue:    |   body
| photo + caption arrive, owner    |
| taps approve, it posts.          |
|                                   |
| Live since July 2026.            |   body, ink 600
+----------------------------------+
```

Desktop
```
+--------------------------------------------------------------------+
| Family        |-----------------------------------------------------|
| restaurant,   | Social posts went out only when the owner had time. |
| South         |                                                     |
| Carolina      | Built a Slack approval queue: photo and caption     |
| (muted, small | arrive, owner taps approve, it posts.               |
|  in margin)   |                                                     |
|               | Live since July 2026.                               |
+--------------------------------------------------------------------+
```
Client type lives in the margin column on desktop, above the entry on mobile. Outcome line is the
last line, weight 600, no label.

### Remaining sections, briefly

- Sounds familiar: a ruled list (1px `rule` top border per item, 40px min row), plain sentences,
  no icons, no check marks.
- How it works: the only numbered thing on the page ("1." "2." "3." in Zilla 600 in the margin
  column; inline before the h3 on mobile). It is a real sequence.
- Objections: three h3 questions with a body paragraph each. No accordion; the answers are the point.
- Who I am: a plain rectangular photo (4:5, 160px wide on mobile, 200px desktop, radius 0, sits in
  the margin column on desktop), name, two sentences. Nike and the decade of ML in the sentence,
  not as logos or badges.
- Closing CTA: same button, same label as the hero. Never a second wording.
- Footer: one line, `small muted`: LLC name, Beaverton, Oregon, email, LinkedIn. Left-aligned.

## 3. Principles

1. It is a document, not an interface. Ink on paper, one column, left edge, whitespace between sections.
2. Structure encodes information: rules only appear on lists and the quote sheet, numbers only on the
   three real steps, the vertical margin line only on the thing you'd sign.
3. The price is typeset with more care than anything else on the page. Trust comes from the number.
4. One button label, used twice. One accent color, used for that button and nothing louder.
5. Banned: all-caps or tracked labels, eyebrows above headings, mono type anywhere, middle dots, spaced
   em-dash labels, arrows on links or buttons, cards with radius+shadow, gradient or orb backgrounds,
   icons next to list items, logo walls, italicised or recolored single words in headlines, scroll-in
   or fade-up animation. Hover on the button is a color step (`accent` → `#1B4631`), nothing else moves.
6. Quality floor without announcing it: `focus-visible` ring in `accent` 2px offset 2px; touch targets
   ≥44px; button full-width under 640px; no motion so `prefers-reduced-motion` has nothing to do.

## 4. Self-review against the brief

What the first draft did that was the generic default, and what changed:

- **Palette.** First reach was bond cream + a high-contrast serif display + a warm clay accent. That is
  calibration trait 1 verbatim. Changed to blue-black ink on a slightly cooler paper, fir green as the
  only accent, and ledger-blue ruling. The serif became a slab, which changes the register from
  "editorial" to "printed job ticket".
- **Case studies as cards.** Drafted three equal bordered cards in a grid. Trait 4. Changed to three
  ruled entries in one column with the client type hanging in the margin; nothing has four borders.
- **Section eyebrows.** The current site uses tracked ALL-CAPS grey `h2`s; my draft kept a small label
  above each `h2`. Removed. The margin-column `h2` is the only heading.
- **Numbered steps.** Drafted big `01 / 02 / 03` numerals as decoration. Checked: "how it works" is
  genuinely sequential, so numbering stays, but as plain `1.` in the heading size, not a display element.
  No other section is numbered.
- **Hairlines everywhere.** Drafted a rule between every section (trait 3, broadsheet). Removed; sections
  now separate by whitespace and rules are confined to lists and the quote sheet where they mean
  "one line item".
- **Two hero buttons.** Drafted primary + secondary ("See examples"). Brief says one CTA. Cut the second.
- **Mono price.** Drafted the `$4,500` in a mono face for the ledger feel. Trait 5. Changed to Public
  Sans 600 with tabular figures, which gives the alignment without the tell.
- **Photo as a circle.** Drafted a round avatar. Changed to a plain rectangle; a circle is the SaaS
  team-page default and a rectangle is what a form or a proposal would actually carry.

Considered and rejected: a rotated "APPROVED" stamp graphic on the quote sheet (cute, and cute is
what the audience distrusts); a paper-grain background (decoration); a dark hero band (turns the
document into a landing page).

## 5. Paste-ready code

### `app/globals.css`

```css
@import "tailwindcss";

@theme {
  --color-paper: #F7F6F1;
  --color-ink: #1C2430;
  --color-muted: #5B6470;
  --color-accent: #23573E;
  --color-accent-hover: #1B4631;
  --color-accent-ink: #FFFFFF;
  --color-rule: #B9C7DA;
  --color-margin: #D46A6A;
}

@theme inline {
  --font-sans: var(--font-geist), system-ui, "Helvetica Neue", Arial, sans-serif;
  --font-display: var(--font-geist), system-ui, "Helvetica Neue", Arial, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, Menlo, monospace;
}
```

Utilities this yields: `bg-paper text-ink text-muted bg-accent hover:bg-accent-hover text-accent-ink
border-rule border-margin font-sans font-display`.

### `app/layout.tsx` font imports

```ts
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// <html className={`${geist.variable} ${geistMono.variable} h-full antialiased`}>
// <body className="min-h-full flex flex-col bg-paper text-ink font-sans text-body sm:text-body-lg">
```
