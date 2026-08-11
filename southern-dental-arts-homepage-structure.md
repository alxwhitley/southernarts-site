# Southern Dental Arts — Homepage Structure

Reference doc for `/impeccable craft` (homepage only, first pass).
Sits alongside `PRODUCT.md` + `DESIGN.md`. This file defines **structure and
intent**, not visual design. Do not let it override DESIGN.md tokens.

**Status: DRAFT — no client discovery call has happened.** Positioning is
derived from public Google/Yelp/Nextdoor reviews. Copy directions are
starting points, not approved copy. Every `[PLACEHOLDER]` must stay visibly
flagged in the build.

Companion docs: `southern-dental-arts-sitemap.md`,
`southern-dental-arts-nav-spec.md`.

---

## Positioning Basis

The practice is a solo, founder-led family + cosmetic dentistry office in
Raleigh. 4.8★ across 67 Google reviews.

Three themes repeat across every review platform. These are the homepage's
job, in priority order:

1. **Dental anxiety, handled well.** Patients name their fear explicitly and
   credit the practice for patience and explanation — not just "gentleness."
   Several describe returning after years of avoidance.
2. **Multi-generational tenure.** Families measured in decades. Children who
   grew up in the chair. This is proof of trust that no competitor can copy.
3. **Conservative treatment philosophy.** Patients repeatedly note being told
   what to watch rather than being sold work.

**Framing rule:** state #3 as our own philosophy, never as a comparison.
No "unlike other practices," no implied swipe at corporate chains. The
patient reading it already has the bad experience in mind; naming it for
them is unnecessary and cheap.

**Banned language** (every Raleigh competitor already uses these):
gentle, compassionate, state-of-the-art, caring team, beautiful smiles,
your smile is our priority, dental family, cutting-edge, world-class.

---

## Section Order

Eleven blocks. Order is deliberate — anxiety resolution comes before service
selection, because an anxious visitor won't shop procedures until they feel
safe.

---

### 1. Utility Bar + Navigation
Per `southern-dental-arts-nav-spec.md`. Sticky, condenses on scroll.
Not built by craft if nav is a separate component — coordinate.

---

### 2. Hero

**Job:** answer *where am I*, *can I trust this person*, *what's my next
step* in under four seconds.

**Structure**
- Single static hero. **No carousel.** Their current site rotates five
  slides; this is the most important thing being replaced.
- Real photography of Dr. Staehling with an actual patient or team member.
  **No stock imagery.** If real photos don't exist yet, this is a
  production blocker, not a thing to paper over with stock.
- Content sits left on desktop, stacked on mobile.

**Content**
- H1 — direction: lead with tenure and trust rather than services.
  `[DRAFT COPY — not approved]`
- Supporting line: one sentence, plain, names Raleigh and the two service
  halves (family + cosmetic) without listing procedures.
- Dual CTA: primary `Book a Visit` → `/book/`, secondary
  `Call (919) 706-0565` as a `tel:` link.

**Do not**
- Stack a services list here.
- Use a video background as a first pass. Adds weight, delays LCP.

---

### 3. Trust Strip

**Job:** immediate third-party validation before any claim is made.

**Content**
- Google rating: 4.8★, 67 reviews. **Verify live at build time** — this
  number moves.
- Association marks already on their current site: ADA, AGD, AACD,
  NC Dental Society. Assets exist on the old site, reuse them.
- Optional: years in practice. `[CONFIRM — site footer says © 2011, which
  is the site's age, not necessarily the practice's]`

**Format:** single horizontal band, low visual weight. This is a signal
strip, not a feature section.

---

### 4. The Anxiety Block  ← primary differentiator

**Job:** the reason this practice wins. Placed high deliberately.

**Structure**
- Direct-answer opening: first two sentences must answer the implicit
  question ("what happens if I'm scared of the dentist?"). Self-contained,
  roughly 130–160 words, survives extraction.
- Heading phrased as the patient's actual question, not a marketing line.

**Content**
- What the practice actually does differently: explains before doing,
  walks through x-rays, no pressure to decide same-day.
  `[CONFIRM specifics with client — the reviews describe these behaviors
  but the practice should verify and name its own comfort measures]`
- 2–3 concrete specifics, not adjectives. Amenities, process steps, or
  time allowances — whatever is true.
- CTA: `How we help nervous patients` → `/dental-anxiety/`

---

### 5. Two-Tier Service Split

**Job:** route the two buyer types without inducing choice paralysis.
Replaces the current 15-item flat list.

**Structure**
- Exactly two cards or panels. Not three columns.
- Left: **Family & Preventive Care** → `/family-dentistry/`
- Right: **Cosmetic Dentistry** → `/cosmetic-dentistry/`
- Each shows 3–4 representative procedures as sub-links, not the full set.
  Full lists live on the hub pages.

**Family panel:** cleanings & exams, children's dentistry, crowns &
bridges, emergency care.
**Cosmetic panel:** porcelain veneers, teeth whitening, smile design,
Invisalign `[CONFIRM OFFERED]`.

**Do not** render this as three equal cards — that's the generic pattern
the redesign exists to escape.

---

### 6. Meet Dr. Staehling

**Job:** humanity, shown not claimed. This is the counter to cheap
templated dentistry — a real person, not an adjective.

**Content**
- Portrait, real, not clinical stock.
- 2–3 sentences in his own voice about treatment philosophy.
  `[PLACEHOLDER — needs his actual words, cannot be written for him]`
- Credentials line: DDS, association memberships.
  `[CONFIRM — dental school, year, continuing education]`
- CTA → `/dr-ryan-staehling/`

**Team note:** front-desk staff are named by patients across three separate
review platforms. Include a secondary link to `/our-team/` — the team is a
named trust asset here, not filler.

---

### 7. Smile Gallery Teaser

**Job:** visual proof for the cosmetic buyer.

**Status: BLOCKED.** Requires real before/after cases with written patient
consent.

**If assets unavailable at build time:** omit this section entirely. Do not
substitute stock before/after imagery — it is both dishonest and instantly
recognizable. Replace with a consult-booking block if vertical rhythm needs
filling.

**If available:** 3–4 cases, before/after slider or paired images, one line
of context each. CTA → `/smile-gallery/`

---

### 8. Patient Voices

**Job:** social proof in patients' own words, weighted toward the anxiety
and tenure themes.

**Content**
- 3 testimonials, selected to cover: an anxiety story, a long-tenure family
  story, a conservative-treatment story.
- Pull final text from the live Google Business Profile at build time
  rather than hardcoding — keeps them current and attributable.
- Attribution: first name + last initial, matching how GBP displays them.

**Open item:** reviews are public, but confirm with the client before
featuring named patients on the site. Some practices ask permission as
policy regardless.

**Format:** avoid the 3-card carousel with dots. Static three-up, staggered
layout, or a single rotating quote.

---

### 9. Insurance & Payment

**Job:** remove financial hesitation before the booking ask.

**Status: BLOCKED ON CLIENT DATA.** Everything here is unknown.

**Needs:**
- `[PLACEHOLDER]` In-network plans accepted
- `[PLACEHOLDER]` Out-of-network policy and whether they file claims
- `[PLACEHOLDER]` Payment options / financing
- `[PLACEHOLDER]` In-house membership plan, if one exists

**Do not invent any of this.** Incorrect insurance information on a medical
site is a real liability, not a placeholder-copy problem. Build the section
shell and leave the fields visibly empty.

CTA → `/insurance-and-payment/`

---

### 10. Location & Booking Anchor

**Job:** final conversion, with the practical details a decided visitor
needs.

**Content**
- Address: 6500 Creedmoor Rd, Suite 204, Raleigh, NC 27613
- Phone: (919) 706-0565 — `tel:` linked
- Hours: Mon–Thu 8:00 AM–4:30 PM, Fri 8:00 AM–1:00 PM, closed Sat/Sun.
  **Verify against the client, not just GBP.**
- Map embed
- Parking / building-access note — patients mention easy parking and
  building access in reviews, which is worth stating. `[CONFIRM details]`
- Booking: embedded real-time scheduler if their practice management system
  supports it. `[UNKNOWN — need to know their PMS: Dentrix? OpenDental?
  something else]`. Fallback: short request form, 3–5 fields maximum
  (name, phone, email, preferred time, reason).

---

### 11. Footer

- NAP repeated, matching `business.ts` exactly
- Nav column set, simplified — not a four-column link farm
- Social links live **here only**, never in the header
- Legal: Privacy Policy, HIPAA Notice
- Hours

---

## CTA Distribution

Five conversion points, per the research pattern:

| # | Location | Copy | Target |
|---|---|---|---|
| 1 | Header nav | Book a Visit | `/book/` |
| 2 | Hero | Book a Visit / Call | `/book/`, `tel:` |
| 3 | After services split | Book a Visit | `/book/` |
| 4 | After insurance block | Book a Visit | `/book/` |
| 5 | Footer / mobile sticky bar | Call + Book | `tel:`, `/book/` |

First-person, action phrasing. Not "Submit," not "Learn More," not
"Contact Us."

---

## Mobile Requirements

- **Persistent bottom action bar** on every page: Call left, Book right.
  Thumb zone. Highest-value mobile element for a practice whose traffic is
  mostly phone searches near an appointment moment.
- Hero stacks; CTA pair remains above the fold.
- Services split stacks to two full-width panels.
- Target sub-2.5s load. Hero image is the LCP element — compress hard,
  serve modern formats, set explicit dimensions.

---

## Technical Notes for Build

- **Schema:** `Dentist` (a `LocalBusiness` subtype) sitewide with NAP,
  hours, and geo. `Person` for Dr. Staehling. No FAQ schema.
- **Single NAP source of truth.** Address, phone, and hours appear in the
  utility bar, location block, footer, and schema. One data file feeds all
  four — do not hardcode in four places.
- **Semantic HTML.** `<nav>`, `<main>`, `<section>`, `<article>`. Real
  heading hierarchy, one H1.
- **Alt text on every image**, descriptive.
- **Decap CMS editable fields** for this tier: hero headline, announcement
  or notice bar, hours, testimonials. Services and structural copy stay in
  code.

---

## Blockers Before This Can Ship as a Real Homepage

| Blocker | Impact |
|---|---|
| No discovery call | All positioning is inferred from reviews, not confirmed |
| No real photography | Hero, team, and doctor sections all depend on it |
| No insurance data | Section 9 cannot be written |
| No PMS knowledge | Booking mechanism undecided |
| No gallery assets | Section 7 omitted |
| Dr. Staehling's own words | Section 6 placeholder only |

For a **pitch mockup**, sections 7 and 9 can be omitted and the rest built
with flagged draft copy. Ship it labeled as a concept, not a proposal of
final copy.
