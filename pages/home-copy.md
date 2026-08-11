# Homepage copy

**Status:** DRAFT. Not client-approved. No discovery call has happened.
Positioning is derived from public Google/Yelp/Nextdoor reviews, not from the
practice. Every `[PLACEHOLDER]` and `[CONFIRM]` must stay visibly flagged in
the build and must not be silently resolved by writing something plausible.

Folded from `southern-dental-arts-homepage-structure.md` (superseded).
Companion: `structure.md`, `ANTI-REFERENCE.md`.

---

## Job of this page

Convince an anxious or skeptical visitor that this practice is safe to call,
then route them to the right half of the practice and into a booking.

---

## Positioning basis

Solo, founder-led family and cosmetic dentistry practice in Raleigh.
4.8 stars across 67 Google reviews.

Three themes repeat across every review platform. These are the page's job,
in priority order:

1. **Dental anxiety, handled well.** Patients name their fear explicitly and
   credit the practice for patience and explanation, not just "gentleness."
   Several describe returning after years of avoidance.
2. **Multi-generational tenure.** Families measured in decades. Children who
   grew up in the chair. Proof of trust no competitor can copy.
3. **Conservative treatment philosophy.** Patients repeatedly note being told
   what to watch rather than being sold work.

**Framing rule:** state theme 3 as the practice's own philosophy, never as a
comparison. No "unlike other practices," no implied swipe at corporate
chains. The patient reading it already has the bad experience in mind.
Naming it for them is unnecessary and cheap.

**Banned language.** Every Raleigh competitor already uses these: gentle,
compassionate, state-of-the-art, caring team, beautiful smiles, your smile is
our priority, dental family, cutting-edge, world-class.

**Voice.** Plain, warm, unhurried. Explains rather than sells. Confident
without superlatives. Sentence case headings throughout.

---

## Sections (in order)

Eleven blocks. The order is deliberate: anxiety resolution comes before
service selection, because an anxious visitor will not shop procedures until
they feel safe.

---

### 1. Utility bar and navigation

Per `structure.md`. Sticky, condenses on scroll. No copy owned here.

---

### 2. Hero

**Job:** answer *where am I*, *can I trust this person*, and *what is my next
step* in under four seconds.

- **H1:** The kind of dentist people stay with.
- Body: Southern Dental Arts is an independent practice in Raleigh. Family
  care and cosmetic dentistry, at a pace that leaves room for questions.
- CTA (primary): Book a visit → `/book/`
- CTA (secondary): Call (919) 706-0565 → `tel:+19197060565`
- Media notes: single static hero, **no carousel**. Their current site rotates
  five slides and replacing that is the most important single change. Real
  photography of Dr. Staehling with an actual patient or team member. **No
  stock imagery.** If real photos do not exist yet this is a production
  blocker, not something to paper over. Content sits left on desktop, stacked
  on mobile. No video background on a first pass, it adds weight and delays LCP.

**Do not** stack a services list in the hero.

---

### 3. Trust strip

**Job:** immediate third-party validation before any claim is made.

- No heading. Signal strip, not a feature section.
- Body: 4.8 stars, 67 Google reviews. `[VERIFY LIVE AT BUILD TIME, this
  number moves]`
- Body: Association marks already on the current site: ADA, AGD, AACD,
  NC Dental Society. Assets exist on the old site, reuse them rather than
  re-sourcing.
- Optional: years in practice. `[CONFIRM. The current site footer says
  © 2011, which is the site's age, not necessarily the practice's.]`
- Media notes: single horizontal band, low visual weight. Association logos
  must be re-exported at consistent size and resolution. The old site's
  inconsistent low-res PNGs are an explicit anti-reference.

---

### 4. The anxiety block

**Job:** the primary differentiator, and the reason this practice wins.
Placed high deliberately.

- **H2:** What if you are nervous about the dentist?
- Body (direct-answer opening, self-contained, roughly 130 to 160 words, must
  survive extraction into an AI answer):

  > Tell us before your appointment and we will plan around it. A first visit
  > here starts with a conversation, not an instrument. Dr. Staehling walks
  > through what he sees on your x-rays, explains what each option would
  > involve, and tells you what can reasonably wait. Nothing is decided the
  > same day unless you want it decided. Patients who have put off dental care
  > for years are a regular part of the schedule here, and there is no lecture
  > waiting for you when you come back. If you need to stop partway through,
  > you say so and we stop.

  `[CONFIRM. Every behavior above is inferred from patient reviews, not
  stated by the practice. Dr. Staehling should verify each one and add the
  practice's own comfort measures: numbing protocol, appointment length,
  headphones or music, sedation options, anything else that is actually
  true. Two or three concrete specifics, not adjectives.]`
- CTA: How we help nervous patients → `/dental-anxiety/`
- Media notes: if a photo is used here, it should be the room, not a face.
  A treatment room that looks calm and unhurried does more work than a
  smiling model.

---

### 5. Two-tier service split

**Job:** route the two buyer types without inducing choice paralysis.
Replaces the current 15-item flat list.

- **H2:** Two ways people come to us.
- Structure: exactly two cards or panels. **Not three columns.** Three equal
  cards is the generic pattern this redesign exists to escape.

**Left panel**
- **H3:** Family and preventive care
- Body: Cleanings, exams, and the restorative work that keeps a tooth in your
  mouth rather than replacing it. Children are welcome from their first visit.
- Sub-links: Cleanings and exams → `/dental-cleanings/`, Children's dentistry
  → `/childrens-dentistry/`, Crowns and bridges →
  `/dental-crowns-and-bridges/`, Emergency care → `/emergency-dentistry/`
- CTA: All family care → `/family-dentistry/`

**Right panel**
- **H3:** Cosmetic dentistry
- Body: Changes to how your smile looks, planned with you before anything
  becomes permanent.
- Sub-links: Porcelain veneers → `/porcelain-veneers/`, Teeth whitening →
  `/teeth-whitening/`, Smile design → `/smile-design/`, Invisalign →
  `/invisalign/` `[CONFIRM OFFERED, remove if not]`
- CTA: All cosmetic services → `/cosmetic-dentistry/`

Each panel shows three to four representative procedures only. Full lists
live on the hub pages.

- CTA (section close, conversion point 3): Book a visit → `/book/`

---

### 6. Meet Dr. Staehling

**Job:** humanity, shown rather than claimed. The counter to templated
dentistry is a real person, not an adjective.

- **H2:** Meet Dr. Staehling
- Body: `[PLACEHOLDER. Two or three sentences in his own voice about
  treatment philosophy. This cannot be written for him. Do not ship an
  invented paraphrase.]`
- Body (credentials, safe to build against): Dr. Ryan K. Staehling, DDS,
  owns and runs Southern Dental Arts. He is a member of the American Dental
  Association, the Academy of General Dentistry, the American Academy of
  Cosmetic Dentistry, and the North Carolina Dental Society.
  `[CONFIRM dental school, graduation year, and continuing education before
  adding any of those.]`
- CTA (primary): More about Dr. Staehling → `/dr-ryan-staehling/`
- CTA (secondary): Meet the team → `/our-team/`
- Media notes: real portrait, not clinical stock. His bio must not read in
  third-person marketing voice, which is an explicit anti-reference.

**Team note:** front-desk staff are named by patients across three separate
review platforms. The secondary link is not filler, the team is a named trust
asset here.

---

### 7. Smile gallery teaser

**Job:** visual proof for the cosmetic buyer.

**Status: SHELL APPROVED, ASSETS PENDING** (updated 2026-08-11). Alex has
asked for the section shell to ship now with honest labeled placeholders,
matching the pattern already used in the hero, anxiety, and doctor sections.
Real before/after cases with written patient consent still block the actual
photography — do not substitute stock before/after imagery, it is both
dishonest and instantly recognizable. Swap placeholders for real cases as
they're supplied; no other change to the section should be needed.

- **H2:** Real results, real patients
- Body: A short line naming this as a preview of cosmetic work, with a nod
  that these are placeholders pending real cases.
- Structure: three to four placeholder tiles in a grid (paired
  before/after framing, not a slider — keeps this shippable without slider
  JS before real assets exist). Each tile carries a "Before/after photos —
  pending" caption in the same style as other pending-photo captions on this
  page. No names, no invented procedures on the placeholders.
- CTA: See more results → `/smile-gallery/`
- CTA (secondary, kept from the old fallback since it still earns its
  place): Not sure where to start? Book a consultation → `/book/`

---

### 8. Patient voices

**Job:** social proof in patients' own words, weighted toward the anxiety and
tenure themes.

- **H2:** In patients' own words
- Body: three testimonials, selected to cover one anxiety story, one
  long-tenure family story, and one conservative-treatment story.
- Source: pull final text from the live Google Business Profile at build time
  rather than hardcoding, so they stay current and attributable.
- Attribution: first name plus last initial, matching how GBP displays them.
- Media notes: **no three-card carousel with dots.** Static three-up,
  staggered layout, or a single rotating quote.

**Open item:** reviews are public, but confirm with the client before
featuring named patients on the site. Some practices ask permission as policy
regardless.

---

### 9. Insurance and payment

**Job:** remove financial hesitation before the booking ask.

**Status: BLOCKED ON CLIENT DATA.** Everything in this section is unknown.

- **H2:** Insurance and payment
- Body: `[PLACEHOLDER]` In-network plans accepted
- Body: `[PLACEHOLDER]` Out-of-network policy, and whether the practice files
  claims on the patient's behalf
- Body: `[PLACEHOLDER]` Payment options and financing
- Body: `[PLACEHOLDER]` In-house membership plan, if one exists
- CTA: Insurance and payment details → `/insurance-and-payment/`
- CTA (conversion point 4): Book a visit → `/book/`

**Do not invent any of this.** Incorrect insurance information on a medical
site is a real liability, not a placeholder-copy problem. Build the section
shell and leave the fields visibly empty.

---

### 10. Location and booking anchor

**Job:** final conversion, with the practical details a decided visitor needs.

- **H2:** Come see us
- Body: 6500 Creedmoor Rd, Suite 204, Raleigh, NC 27613
- Body: (919) 706-0565, `tel:` linked
- Body (hours): Monday to Thursday, 8:00 AM to 4:30 PM. Friday, 8:00 AM to
  1:00 PM. Closed Saturday and Sunday. `[VERIFY against the client, not just
  GBP.]`
- Body (parking): `[CONFIRM details.]` Patients mention easy parking and
  building access in reviews, which is worth stating plainly if true.
- CTA: Book a visit → `/book/`
- Media notes: map embed. Booking should be an embedded real-time scheduler
  if their practice management system supports it. `[UNKNOWN. Need to know
  their PMS: Dentrix, OpenDental, or something else.]` Fallback is a short
  request form, five fields maximum: name, phone, email, preferred time,
  reason for visit. Every field labeled. The old site's unlabeled contact
  form is an explicit anti-reference.

---

### 11. Footer

Per `structure.md`. NAP from the single business data source, simplified nav
columns, hours, social links here only, Privacy Policy and HIPAA Notice.

---

## CTA distribution

Five conversion points.

| # | Location | Copy | Target |
|---|---|---|---|
| 1 | Header nav | Book a Visit | `/book/` |
| 2 | Hero | Book a visit / Call (919) 706-0565 | `/book/`, `tel:` |
| 3 | After the services split | Book a visit | `/book/` |
| 4 | After the insurance block | Book a visit | `/book/` |
| 5 | Footer and mobile sticky bar | Call / Book | `tel:`, `/book/` |

---

## Mobile requirements

- Persistent bottom action bar: Call on the left, Book on the right, thumb
  zone. Present on every page, per `structure.md`.
- Hero stacks. The CTA pair stays above the fold.
- Services split stacks to two full-width panels.

---

## Open items

Blockers, in order of how much they hold back:

| Blocker | Impact |
|---|---|
| No discovery call | All positioning is inferred from reviews, not confirmed |
| No real photography | Hero, doctor, and team sections all depend on it |
| Dr. Staehling's own words | Section 6 stays a placeholder until he supplies them |
| No insurance data | Section 9 cannot be written |
| No PMS knowledge | Booking mechanism undecided |
| No gallery assets | Section 7 omitted |

Also open:

- [ ] Verify the 4.8 / 67 review figures at build time.
- [ ] Confirm Invisalign is offered before it appears in the cosmetic panel.
- [ ] Confirm the practice's actual comfort measures for the anxiety block.
- [ ] Confirm years in practice, or drop the line.
- [ ] Confirm review republication consent policy.
- [ ] Verify hours with the client, not just the Google Business Profile.
- [ ] Confirm the parking and building-access detail.
- [ ] Decide whether "Raleigh" alone or a neighborhood qualifier reads better
      in the hero. North Raleigh is accurate for 27613 but narrows the claim.

**For a pitch mockup:** sections 7 and 9 can be omitted and the rest built
with flagged draft copy. Ship it labeled as a concept, not as a proposal of
final copy.
