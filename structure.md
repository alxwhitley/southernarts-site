# Site structure — Southern Dental Arts

**Status:** DRAFT for Gate S. Not client-approved. No discovery call has
happened. Positioning inputs are public Google/Yelp/Nextdoor reviews.

**Mode:** Redesign. See `ANTI-REFERENCE.md`.

Folded from `southern-dental-arts-sitemap.md` and
`southern-dental-arts-nav-spec.md` (both superseded by this file).

---

## URL principles

1. **Flat paths.** One level deep. `/porcelain-veneers/`, not
   `/dental/cosmetic/porcelain-veneers-raleigh/`.
2. **No geo-stuffing in slugs.** "-raleigh" comes out of every path.
   Location lives in title tags, H1s, body copy, schema, and the Google
   Business Profile, which is where local ranking actually comes from for a
   single-location practice.
3. **Visual nesting, flat URLs.** Nav groups services into Cosmetic vs.
   Family Care for human comprehension. URLs stay shallow for link equity.
4. **One page per intent.** The hub/Introduction duplicates are killed.

---

## Sitemap

Roughly 32 pages, down from about 36 today: 3 duplicate pairs removed,
5 strategic pages added.

### Tier 0
- `/` — Homepage — resolve anxiety, then route the two buyer types to a booking.

### About
- `/about/` — Practice hub — philosophy, why independent.
- `/dr-ryan-staehling/` — Founder bio, credentials, treatment philosophy.
- `/our-team/` — Team page, Lynn and hygienists named.
- `/office-and-technology/` — Tour, comfort amenities, equipment.

`/our-team/` carries more weight here than usual: front-desk staff are named
by patients across three separate review platforms. The team is a named trust
asset, not filler.

### Cosmetic Dentistry
- `/cosmetic-dentistry/` — Hub, overview plus routes to procedures.
- `/porcelain-veneers/`
- `/teeth-whitening/`
- `/dental-bonding/`
- `/smile-design/`
- `/invisalign/` — **NEW. Offering unconfirmed, do not build until verified.**

### Family Care
- `/family-dentistry/` — Hub, preventive plus restorative overview.
- `/dental-cleanings/` — Preventive / hygiene.
- `/childrens-dentistry/` — Consolidates the two current pediatric URLs.
- `/periodontal-care/`
- `/tooth-colored-fillings/`
- `/dental-crowns-and-bridges/` — Absorbs inlays and onlays.
- `/dental-implants/`
- `/root-canal-treatment/`
- `/dentures/`
- `/night-guards-and-mouthguards/`
- `/emergency-dentistry/` — **NEW.**

Emergency is a real gap. The current site mentions emergency care in a body
paragraph with no page behind it. High commercial intent, high local search
volume, zero competition from their own site today.

### Patient Experience
- `/patient-experience/` — Hub, what a first visit actually looks like.
- `/dental-anxiety/` — **NEW. The differentiator page.**
- `/new-patient-visit/` — Step-by-step first appointment walkthrough.
- `/patient-forms/`
- `/insurance-and-payment/`

`/dental-anxiety/` is the strategic page. Anxiety is the single most repeated
theme across their real reviews, and no page on the current site addresses it.
It is both the SEO opportunity and the positioning anchor.

### Smile Gallery
- `/smile-gallery/` — **NEW. Blocked on assets.** Needs real case photography
  with written patient consent. Do not build with stock or placeholder imagery.

### Conversion and utility
- `/book/` — Primary scheduling page.
- `/contact/` — NAP, map, hours, directions, parking.
- `/reviews/` — **NEW.** Aggregated testimonials.
- `/blog/` — Retained.
- `/blog/[post-slug]/` — Posts flattened to one level.

### Legal / system
- `/privacy-policy/`
- `/hipaa-notice/`
- `/sitemap.xml` — XML replaces the current HTML `/sitemap/` page.
- `/404` — Custom branded 404.

---

## Repeatable content decision (Gate S requirement)

One repeatable type in scope: **blog posts**. Everything else is a fixed page
with a `pages/*-copy.md` contract.

| Field | Value |
|---|---|
| Collection | `blog` |
| Canonical source | `src/content/blog/<slug>/index.md` |
| Route | `/blog/[slug]/` |
| Slug convention | Folder slug, frontmatter slug, and route slug must match |
| Required metadata | title, description, publishDate, author, draft |
| Draft behavior | `draft: true` excluded from build and from the index |
| Owned assets | `src/assets/blog/<slug>/` |

Not collections, deliberately:
- **Services.** Each service page is a distinct copy contract with its own
  intent, not a record in a list. Fixed routes with `pages/*-copy.md`.
- **Team members.** One page (`/our-team/`), not a per-person route.
- **Smile gallery cases.** Revisit once real consented assets exist. If the
  gallery grows past roughly a dozen cases, promote it to a collection then.
  Do not scaffold an empty one now.
- **Reviews.** Pulled live from the Google Business Profile at build time,
  not authored records.

---

## Navigation

Six primary items, capped. Item 6 renders as the high-contrast CTA button,
not a text link. Social icons live in the footer only, never the header.

```
About | Cosmetic Dentistry | Family Care | Patient Experience | Smile Gallery | [Book a Visit]
```

| # | Nav item | Type | Panel width |
|---|---|---|---|
| 1 | About | Simple dropdown | Auto, roughly 260px |
| 2 | Cosmetic Dentistry | Mega panel | Full-bleed, 4 col |
| 3 | Family Care | Mega panel | Full-bleed, 4 col |
| 4 | Patient Experience | Compact panel | 2 col, roughly 560px |
| 5 | Smile Gallery | Direct link | n/a |
| 6 | Book a Visit | CTA button | n/a |

Only items 2 and 3 get full mega treatment. Applying it to all six reproduces
the clutter the format exists to fix.

### Utility bar (above the main nav)

```
6500 Creedmoor Rd, Ste 204     Open until 4:30 PM     (919) 706-0565
```

- Hours status is live and dynamic ("Open until 4:30 PM" / "Closed, opens
  Monday 8:00 AM"). Pulls from the single hours source that also feeds schema
  and the Google Business Profile.
- Phone is `tel:` linked at every breakpoint.
- No social icons here.

### Main bar

Sticky on scroll, condenses in height after roughly 120px.

### 1. About (simple dropdown)

| Label | URL |
|---|---|
| Meet Dr. Staehling | `/dr-ryan-staehling/` |
| Our Team | `/our-team/` |
| Office & Technology | `/office-and-technology/` |
| Our Practice | `/about/` |

Hub link sits last, separated by a rule. People scanning want the specific
page, not the overview.

### 2. Cosmetic Dentistry (mega panel, 4 columns)

**Column 1, Popular Treatments**

| Label | URL |
|---|---|
| Porcelain Veneers | `/porcelain-veneers/` |
| Dental Bonding | `/dental-bonding/` |

**Column 2, Smile Transformation**

| Label | URL |
|---|---|
| Smile Design | `/smile-design/` |
| Invisalign | `/invisalign/` **[CONFIRM OFFERED]** |

**Column 3, Also Offered**

| Label | URL |
|---|---|
| Teeth Whitening | `/teeth-whitening/` |
| Tooth-Colored Fillings | `/tooth-colored-fillings/` |

Fillings appear in both this panel and Family Care. Deliberate: patients
search it as both cosmetic and restorative. Same URL, two entry points.

**Column 4, featured panel.** Before/after image from a real case, "See Real
Results" to `/smile-gallery/`. Blocked until gallery assets exist. Interim
fallback: a short "Not sure where to start? Book a consult" block to `/book/`.

**Footer row:** All Cosmetic Services to `/cosmetic-dentistry/`.

### 3. Family Care (mega panel, 4 columns)

**Column 1, Preventive**

| Label | URL |
|---|---|
| Cleanings & Exams | `/dental-cleanings/` |
| Periodontal Care | `/periodontal-care/` |
| Night Guards & Mouthguards | `/night-guards-and-mouthguards/` |

**Column 2, Restorative**

| Label | URL |
|---|---|
| Crowns & Bridges | `/dental-crowns-and-bridges/` |
| Dental Implants | `/dental-implants/` |
| Root Canal Treatment | `/root-canal-treatment/` |
| Dentures | `/dentures/` |
| Tooth-Colored Fillings | `/tooth-colored-fillings/` |

**Column 3, For Children & Urgent**

| Label | URL |
|---|---|
| Children's Dentistry | `/childrens-dentistry/` |
| Emergency Dental Care | `/emergency-dentistry/` |

Emergency gets visual emphasis, a distinct color or small icon. Someone in
pain is scanning, not reading.

**Column 4, featured panel.** "Nervous about the dentist?" to
`/dental-anxiety/`. Putting it in the nav panel rather than burying it under
Patient Experience is deliberate: it is the thing the reviews say they are
actually best at.

**Footer row:** All Family & Restorative Services to `/family-dentistry/`.

### 4. Patient Experience (compact panel, 2 columns)

| Label | URL | Column |
|---|---|---|
| Your First Visit | `/new-patient-visit/` | Your Visit |
| Dental Anxiety | `/dental-anxiety/` | Your Visit |
| Patient Forms | `/patient-forms/` | Practical |
| Insurance & Payment | `/insurance-and-payment/` | Practical |
| What to Expect | `/patient-experience/` | Footer row |

### 5. Smile Gallery
`/smile-gallery/`. Direct link, no dropdown.

### 6. Book a Visit
`/book/`. High-contrast fill, the only filled button in the bar.

---

## Primary CTA

**Label:** Book a Visit. **Target:** `/book/`.

Secondary conversion path is always the phone: `Call (919) 706-0565` as a
`tel:` link. First-person, action phrasing everywhere. Never "Submit," never
"Learn More," never "Contact Us."

---

## Nav interaction contract

**Desktop**
- Trigger on hover with a 150ms enter delay and 300ms exit delay, so panels
  do not fire while the cursor crosses the bar.
- Also opens on click and Enter, for keyboard and touch-laptop users.
- Panel animates over 200ms: opacity plus 4px translateY. No slide-down
  height animation, it janks.
- Page content below dims slightly, 4 to 6 percent black, while a panel is open.
- One panel open at a time. Panels close on Escape, outside click, or scroll.

**Keyboard and accessibility**
- Nav items are `<button aria-expanded>` when they own a panel, `<a>` when
  they do not.
- Tab moves through panel links in DOM order. Escape returns focus to the trigger.
- Visible focus ring on every item. Do not suppress outlines.
- Panel is wrapped in `<nav aria-label>`, links in a semantic `<ul>`.
- Column headers are real text, not `aria-hidden` decoration.

**Active state**
- The current section's top-level item carries a persistent underline or
  weight change, so people know where they are.

---

## Mobile navigation (below 1024px)

Mega panels do not translate. Full-screen accordion drawer instead.

- Accordion sections expand in place. Column groupings become subheadings.
- One section open at a time.
- Drawer scrolls independently, body scroll locked.
- Emergency Dental Care surfaces one level up in the Family Care accordion.
  Urgent intent should not require two taps.
- Drawer footer holds both actions: `[ Book a Visit ]` and
  `[ Call (919) 706-0565 ]`.

**Persistent bottom action bar on every mobile page**, not just the nav: Call
on the left, Book on the right, in the thumb zone. This is the single
highest-value mobile element for a practice whose traffic is mostly phone
searches near an appointment moment.

---

## Footer

- NAP repeated, matching the single business data source exactly.
- Simplified nav column set, not a four-column link farm.
- Hours.
- Social links live here only.
- Legal: Privacy Policy, HIPAA Notice.

---

## Site-wide technical notes

- **Schema:** `Dentist` (a `LocalBusiness` subtype) sitewide with NAP, hours,
  and geo. `Person` for Dr. Staehling. No FAQ schema.
- **Single NAP source of truth.** Address, phone, and hours appear in the
  utility bar, location block, footer, and schema. One data file feeds all
  four. Do not hardcode in four places.
- **Semantic HTML.** `<nav>`, `<main>`, `<section>`, `<article>`. Real heading
  hierarchy, one H1 per page.
- **Descriptive alt text on every image.**
- **Decap CMS editable fields** for this tier: hero headline, announcement or
  notice bar, hours, testimonials. Services and structural copy stay in code.
- **Performance target:** sub-2.5s load. The hero image is the LCP element.
  Compress hard, serve modern formats, set explicit dimensions.

---

## 301 redirect map

Every current URL must resolve. No exceptions.

### Hub consolidations (duplicate pairs to a single page)
```
/dental/cosmetic/                                    → /cosmetic-dentistry/
/dental/cosmetic/cosmetic-dentistry-raleigh/         → /cosmetic-dentistry/
/dental/preventative/                                → /family-dentistry/
/dental/preventative/dentistry-raleigh-preventative/ → /family-dentistry/
/dental/restorative/                                 → /family-dentistry/
/dental/restorative/restorative-dentistry-raleigh/   → /family-dentistry/
/dental/                                             → /family-dentistry/
```

### Cosmetic
```
/dental/cosmetic/porcelain-veneers-raleigh/          → /porcelain-veneers/
/dental/cosmetic/teeth-whitening-raleigh/            → /teeth-whitening/
/dental/cosmetic/bonding-raleigh/                    → /dental-bonding/
/dental/cosmetic/smile-design-raleigh/               → /smile-design/
```

### Restorative
```
/dental/restorative/dental-fillings-raleigh/         → /tooth-colored-fillings/
/dental/restorative/dental-crowns-raleigh-bridges/   → /dental-crowns-and-bridges/
/dental/restorative/inlays-raleigh-onlays/           → /dental-crowns-and-bridges/
/dental/restorative/dental-implants-raleigh/         → /dental-implants/
/dental/restorative/dentures-raleigh/                → /dentures/
/dental/restorative/root-canal-raleigh/              → /root-canal-treatment/
```

### Preventive
```
/dental/preventative/family-dentist-raleigh/         → /childrens-dentistry/
/dental/preventative/childrens-dentistry-raleigh/    → /childrens-dentistry/
/dental/preventative/periodontics-raleigh/           → /periodontal-care/
/dental/preventative/mouthguards-raleigh/            → /night-guards-and-mouthguards/
```

### About
```
/dentists/                                              → /about/
/dentists/dentist-raleigh-cosmetic-dentistry-staehling/ → /dr-ryan-staehling/
/dentists/cosmetic-dentist-raleigh-team/                → /our-team/
/dentists/dental-care-raleigh-comforts/                 → /office-and-technology/
```

### Resources
```
/resources/                                          → /patient-experience/
/resources/health-wellness-raleigh/                  → /new-patient-visit/
/resources/dds-raleigh/                              → /patient-forms/
/resources/dentists-in-raleigh/                      → /insurance-and-payment/
```

### Conversion / utility
```
/dentist-in-raleigh-contact/                         → /contact/
/appointment-form/                                   → /book/
/hipaa-notice-of-privacy-practices/                  → /hipaa-notice/
/sitemap/                                            → /sitemap.xml
/privacy-policy/                                     → /privacy-policy/   (unchanged)
/blog/                                               → /blog/             (unchanged)
```

### Off-domain leak, fix regardless of the redesign
```
wordpress-533351-5373549.cloudwaysapps.com/appointment-form/  → /book/
```
The staging domain should 301 wholesale to the live domain, and every internal
link pointing at it must be rewritten. This is live today and worth flagging
to the client as a free finding.

---

## Consolidation decisions to confirm

| Decision | Rationale | Risk |
|---|---|---|
| Inlays and onlays folded into crowns/bridges | Thin page, low standalone search volume, same patient decision | Low, but check whether it ranks first |
| Preventive and restorative merged under one Family Care hub | Patients do not think in these clinical categories, and six nav items is the cap | Low |
| Three "Introduction" pages deleted | Pure duplicate content against their own hubs | None, this is a fix |
| Every slug loses "-raleigh" | Geo-stuffing in paths is 2011 tactics, and it costs nothing to remove with clean 301s | Low, but this is the change most worth verifying against real ranking data first |

---

## Notes

- **Nav rule for the build:** wire only routes that exist. Until a listed page
  ships, omit it or anchor-fallback. Never invent a new label to fill a gap.
- **Phase 1 scope is not yet set.** All 32 pages are the target IA, not a
  commitment to build all 32 in the first pass. Decide the phase-1 route set
  before the craft loop starts.
- The dental vertical playbook at `~/websites/_agency/industries/dental/playbook.md`
  is currently an empty seed, so nothing was inherited from it. Generalizable
  lessons from this build should be folded back there, not left client-side.

---

## Open items

- [ ] **Run a domain and backlink check before migrating.** If any current
      service URL has genuine external links or rankings, its 301 needs
      individual attention rather than bulk mapping.
- [ ] **Confirm Invisalign / clear aligners.** Page and two nav entries
      proposed but the service is not verified as offered. Do not build
      unconfirmed.
- [ ] **Smile gallery assets.** Needs real cases plus written patient consent.
- [ ] **Insurance specifics.** In-network plans, out-of-network policy,
      membership plan if any. All unknown. Page proposed, content blocked.
- [ ] **Review republication consent.** Google reviews are public, but confirm
      before featuring patients by name on `/reviews/`.
- [ ] **Blog post URLs.** Current post-level structure not yet audited. The
      flatten plan assumes it is nested. Verify.
- [ ] **Scheduling system.** Embedded real-time booking is the recommendation,
      but it requires knowing their practice management software. Unknown.
- [ ] **Hours source of truth.** Decide at build time where the single hours
      record lives, shared by the utility bar, location block, footer, schema,
      and GBP.
- [ ] **Confirm tooth-colored fillings should dual-list** in both mega panels.
      Low risk, but a judgment call the client may have a view on.
