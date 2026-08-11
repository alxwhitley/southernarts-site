# ANTI-REFERENCE.md — Southern Dental Arts

The existing site at southerndentalarts.com is the anti-reference for this
project. Mode is **redesign**, not refinement. Nothing in the incumbent
visual system carries forward except the items listed under Continuity.

v2 — palette extracted from the live stylesheet, no longer assumed.

---

## Continuity — what must survive

These are the only things that make this read as the same practice.
Everything else is free to change completely.

| Element | Status |
|---|---|
| Practice name: Southern Dental Arts | Unchanged |
| Dr. Ryan K. Staehling — name, face, credentials | Unchanged |
| Address: 6500 Creedmoor Rd, Ste 204, Raleigh NC 27613 | Unchanged |
| Phone: (919) 706-0565 | Unchanged |
| Brand hue angles — gold ~41°, olive ~89° | Retained |

---

## Palette

### What was actually there

Extracted from `/wp-content/themes/staehling/style.css`, sorted by
frequency. This is a gold-and-olive palette, not the generic medical blue
a 2011 dental theme would suggest. It is unusual for the category and it
is worth keeping.

**Brand**
```
#c8921d   gold, primary          8 uses    H41  S74  L45
#8d6319   gold, dark             3
#7b530f   gold, darkest          2
#515c45   olive                  3         H89  S25  L32
#383f2f   olive, dark            2
#ad865b   tan                    2
#6b5238   brown                  2
```

**Neutrals in use** — `#fff` `#ccc` `#eee` `#f9f9f9` `#E5E5E5` `#DDDDDD`
`#666` `#000` `#20201f`

**Not brand — exclude from DESIGN.md**
```
#fffbbc   form warning background     1 use
#e7f7d3   form success background     1 use
#E6DB55   form warning border         1 use
```
These are WordPress form-validation states. They will look like brand
colors to any tool reading the stylesheet cold. They are not.

### The actual color failure

The hues are not the problem. The problem is warm gold and olive bolted
onto default cool WordPress grays — `#ccc`, `#eee`, `#666`. Warm brand
over cool neutrals is what reads muddy and cheap.

Correcting the neutrals alone would transform the site without touching a
single brand hue. This is the highest-leverage color change in the project.

### Target tokens

```
Base            #FAF7F0   warm off-white, page background
Surface         #FFFFFF   cards only, used sparingly
Border          #EFE9DC   hairlines, dividers
Ink             #26241F   body text
Ink muted       #6B6357   secondary text

Gold accent     #B8862B   decorative — icons, rules, hover states
Gold text       #8D6319   CTA fills, link text, any text-weight gold
Olive deep      #4A5540   headings, footer, section grounding
Olive soft      #7D8A6F   quiet fills, section tints
```

**Two rules the build must not collapse:**

1. **Gold has two tokens, not one.** `#c8921d` on white is ~3.4:1 and
   fails WCAG AA for text. `#8d6319` is ~5.9:1 and passes. Decorative gold
   and text gold are different values. Do not let a design tool merge them.
2. **Headings are olive, not black.** `#4A5540` on the warm base is ~7.5:1,
   fully accessible, and is the single change that most moves the site from
   clinical to warm. It costs nothing.

`#ad865b` and `#6b5238` are excluded from the core system — theme mid-tones,
not brand. Hold them in reserve for photography treatment only. Five colors
will hold together better than nine.

---

## Anti-Reference — what must not appear

Direct observations from the current site. Each is a prohibition.

### Layout
- **Five-slide auto-advancing hero carousel.** The single worst element.
  Replaced by one static hero.
- Three- and four-column symmetric card rows as the default section shape.
- Flat 16-item service list dumped on the homepage with no hierarchy.
- Sidebar-plus-content template layout.
- No max-width container discipline.

### Typography
- Default WordPress theme stack. System serif headings over Arial body.
- No weight hierarchy beyond regular and bold.
- Title Case On Every Heading.
- Cramped line-height, full-width measure on body text.

### Color and surface
- Cool gray neutrals under warm brand hues. See above — this is the core
  failure.
- High-saturation flat fills with hard edges.
- Zero texture or depth.
- Generic drop shadows at pure black low opacity.

### Imagery
- Stock dental photography throughout. Model patients, model dentists,
  uncanny smiles.
- Association logos as low-resolution PNGs at inconsistent sizes.
- No photography of the actual office, actual team, or actual patients.

### Copy patterns
- "State-of-the-art," "gentle," "dental family," "beautiful smiles,"
  "first-class, patient-focused."
- Services listed as clinical nouns with no patient framing.
- Doctor bio written in third-person marketing voice.

### Structural
- Social media icons in the header.
- Contact form with unlabeled fields.
- Primary CTA pointing at a Cloudways staging domain.

---

## Direction — what replaces it

### Positioning the design must serve
Anxious and skeptical patients, and families measured in decades. The
visual system's job is calm, human, and unhurried — not clinical, not
corporate, not premium-cosmetic-spa.

### The "Southern" thread
The name promises regional warmth. The incumbent site delivers none of it.
The extracted palette — gold and olive, earthy and warm — already points
this direction. The rebrand is not inventing a new idea; it is executing
one the practice already half-committed to and then buried under a stock
template.

Interpret warmth structurally, not decoratively. No script fonts, no
magnolia motifs, no literal Southern iconography. It should read as
hospitality: generous spacing, soft contrast, human photography, plain
language.

### Typography direction
- Pair a humanist or transitional serif for headings with a clean grotesque
  for body. Serif carries warmth; grotesque keeps it credible for medical.
- Full weight range in use, not just 400 and 700.
- Sentence case headings.
- Body measure capped around 65 characters.

### Surface direction
- Warm off-white base. White reserved for cards.
- Single accent family, derived from the retained gold.
- Olive as the grounding color for headings and footer.
- Soft, hue-tinted shadows. Consistent light direction.
- Real photography carrying the visual weight, not icons or illustration.

---

## Logo

**Out of scope for impeccable.** It generates layout and component code,
not identity marks.

Recommended path: a typographic wordmark rather than a symbol. For a solo
practice a well-set wordmark is more credible than an invented icon, and it
avoids the tooth-or-swoosh trap every dental logo falls into. Most of the
dated signal in the current mark is the typeface and the effects, not the
concept.

If a mark is wanted alongside the wordmark, keep it abstract and derived
from the wordmark's letterforms rather than depicting dentistry literally.

Price and scope this separately from the site build.

---

## Init Interview Prep

Answers to have ready before running `/impeccable init`. The interview
output becomes DESIGN.md, so vague answers here produce a vague DESIGN.md.

**Mode:** Redesign. Existing identity is anti-reference. State this
explicitly and early — redesign and refinement are mutually exclusive and
cannot be switched later.

**Business:** Solo-dentist family and cosmetic dental practice, Raleigh NC.
Independent, not a chain.

**Audience:** Two profiles. Primary — adults with dental anxiety, often
returning after years of avoidance. Secondary — families booking across
generations, plus cosmetic patients considering veneers or whitening.

**Voice:** Plain, warm, unhurried. Explains rather than sells. Confident
without superlatives. Never clinical-corporate, never spa-luxury.

**Feeling:** Calm. Human. A practice that has been in the same suite for
years and knows its patients' names.

**Not:** Clinical, sterile, high-tech, luxury, trendy, startup.

**Hard rules to state:**
- Use the target tokens above verbatim. Do not re-derive the palette.
- Gold accent and gold text are separate tokens.
- Headings are olive, not black.
- No carousels.
- No stock photography.
- No three-equal-card feature rows.
- Sentence case headings.

**Reference sites for tone** (structure and voice only, not visual
copying): grandstreetdental.com, atlantadentalspa.com.

---

## Open Items

- [ ] Confirm the client wants to retain the gold/olive family. This is
      Alex's call at pitch stage, not a client decision. The palette is
      distinctive enough to be worth defending, but it is still their
      brand to change.
- [ ] Verify contrast ratios in the built theme rather than trusting the
      estimates above.
- [ ] Logo work scoped and priced separately.
- [ ] **Photography — the largest blocker.** Real images of Dr. Staehling,
      the team, and the office are required for this direction to work.
      Without them the design falls back to the exact stock-imagery failure
      this document prohibits. If new photography is not possible before the
      pitch, reuse whatever usable images exist on the current site rather
      than introducing fresh stock.
