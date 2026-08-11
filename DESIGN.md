<!-- SEED: written at Gate A, before PRE-0 scaffold exists. No code yet.
     Re-run /impeccable document after homepage craft to promote this seed
     to captured tokens. Palette tokens below are normative now and come
     from ANTI-REFERENCE.md verbatim; everything else is direction to be
     confirmed at the homepage shape beat. -->

# Design

## Theme

One deliberate light theme. The scene: a patient on their phone in a parked
car or at the kitchen table, deciding whether it is finally time to call.
Daylight or warm indoor light; the surface must read calm and legible, never
dim, moody, or clinical-bright. No dark mode in phase 1.

## Color

**Strategy: Committed.** Olive and gold are the identity and carry real
surface area (headings, footer, section grounding, CTAs, accents). Warm
neutrals do the resting. White is reserved for cards. Cool grays are banned
sitewide; cool neutrals under warm brand hues are the incumbent's core
failure.

Provenance: hues extracted from the incumbent stylesheet and retained
deliberately (gold near 41 degrees, olive near 89 degrees). The neutral
system is corrected from cool to warm. Tokens are from `ANTI-REFERENCE.md`
**verbatim**. Do not re-derive, adjust, or "improve" them.

| Token | Hex | Role |
|---|---|---|
| `base` | `#FAF7F0` | Page background, warm off-white |
| `surface` | `#FFFFFF` | Cards only, used sparingly |
| `border` | `#EFE9DC` | Hairlines, dividers |
| `ink` | `#26241F` | Body text |
| `ink-muted` | `#6B6357` | Secondary text |
| `gold-accent` | `#B8862B` | Decorative only: icons, rules, hover states |
| `gold-text` | `#8D6319` | CTA fills, link text, any text-weight gold |
| `olive-deep` | `#4A5540` | Headings, footer, section grounding |
| `olive-soft` | `#7D8A6F` | Quiet fills, section tints |

**Two rules the build must not collapse:**

1. **Gold has two tokens, not one.** Decorative gold (`gold-accent`) never
   carries text and never sits behind text. Any gold that is read (link
   text, button fills under white labels) is `gold-text` (`#8D6319`, about
   5.9:1 against white). Do not let any tool merge them.
2. **Headings are olive, not black.** `olive-deep` on `base` is about
   7.5:1. This is the single change that most moves the site from clinical
   to warm.

Reserve: `#AD865B` (tan) and `#6B5238` (brown) for photography treatment
only (overlays, duotones). Never UI chrome. Excluded entirely: the old
theme's WordPress form-state colors (`#FFFBBC`, `#E7F7D3`, `#E6DB55`).

Note for later passes: the warm off-white base sits in the band the skill
flags as the cream default. Here it is retained brand identity, mandated
verbatim, chosen specifically to correct cool grays under a warm brand.
Identity preservation wins. Do not "fix" it.

Shadows: soft and hue-tinted (warm olive-brown cast, never pure black), one
consistent light direction, low elevation range.

## Typography

Voice words: settled, plain-spoken, unhurried.

Pairing (seed; confirm at homepage shape):

- **Headings: Source Serif 4.** Transitional serif, warm without
  decoration, credible for medical, variable weight with optical sizes.
- **Body and UI: Hanken Grotesk.** Humanist grotesque, warm and plainspoken,
  full variable range.

Both on Google Fonts, self-hosted at build time. Rejected reflexes: the
Fraunces/Playfair/Cormorant class of display serifs (saturated defaults,
too fashionable for this brand) and the Inter/DM Sans class of geometrics
(cool, corporate).

Rules:

- Sentence case headings sitewide. Title Case is an anti-reference.
- Full weight range in use, not just 400/700. Serif 500 to 600 for
  headings; grotesque 400/500/650 in UI.
- Body 18px minimum (accessibility contract), line-height near 1.6,
  measure capped at 65ch.
- Modular scale, ratio at least 1.25, fluid `clamp()` for headings. Display
  ceiling stays modest: this brand does not shout. Hero H1 clamp max around
  3.5 to 4rem.
- `text-wrap: balance` on h1 to h3; `text-wrap: pretty` on prose.
- Serif heading letter-spacing neutral to very slightly tight (never below
  -0.01em). No tracked-uppercase eyebrow labels as section grammar.

## Layout

- Max-width container discipline (the incumbent had none): content near
  72rem, prose at 65ch.
- Generous vertical pacing with real rhythm: wide separations between
  sections, tight groupings within them. Never equalized spacing.
- One dominant idea per fold; the homepage is an unhurried long scroll per
  the 11-block copy contract.
- Asymmetry preferred over symmetric card rows. The service router is
  exactly two panels, never three equal cards.
- No sidebar templates. No nested cards.
- Mobile: persistent bottom action bar (Call left, Book right) on every
  page; hero stacks with the CTA pair above the fold.

## Components (seed direction)

- **Buttons:** primary is `gold-text` fill with white label; secondary is a
  quiet outline or text link in `gold-text`. Modest radius (6 to 10px),
  settled rather than trendy. Focus ring always visible.
- **Navigation:** per `structure.md` contract. Utility bar, sticky
  condensing main bar, mega panels on items 2 and 3 only, 150ms enter and
  300ms exit hover intent, click and Enter also open, page dims 4 to 6
  percent behind an open panel.
- **Cards:** white `surface` on warm `base`, hairline `border`, soft tinted
  shadow. Used sparingly; cards are not the default section shape.
- **Emergency link:** distinct emphasis (color or small icon). Someone in
  pain is scanning, not reading.
- **Forms:** every field labeled, always. Booking fallback form is five
  fields maximum.
- **Testimonials:** static three-up or staggered. No dot carousels.

## Motion

Quiet, hospitable, few. At most one composed hero settle on load (fade plus
small rise, 300 to 500ms, exponential ease-out). Nav panels animate 200ms
opacity plus 4px translateY. No scroll-jacking, no parallax, no bounce, no
per-section entrance reflex. Hover and focus feedback is subtle: color,
underline, small shadow lift. Every animation has a
`prefers-reduced-motion` alternative, and content visibility is never gated
on an animation firing.

## Imagery

- Real photography only: Dr. Staehling, the team, the office, consented
  patients. **No stock imagery, ever.** This is the redesign's central
  prohibition; it overrides the brand register's stock-photo default.
- If a real photo does not exist, the section waits or is omitted. Interim
  fallback: reuse usable images from the current site, never fresh stock.
- Treatment: warm natural light, consistent direction. Tan and brown
  reserve tokens available for duotone or overlay work.
- For the anxiety block: rooms over faces. A calm treatment room does more
  work than a smiling face.
- Alt text is descriptive and in voice.

## Accessibility

WCAG 2.2 AA plus the comfort accommodations in `PRODUCT.md`: body 18px
minimum, reduced-motion everywhere, no hover-only navigation, visible focus
states, semantic landmarks, one H1 per page. Working contrast estimates:
`ink` on `base` about 15:1, `olive-deep` on `base` about 7.5:1, `gold-text`
on white about 5.9:1. Verify all ratios in the built theme (open item in
`ANTI-REFERENCE.md`).
