# Southern Dental Arts — Proposed Sitemap

Status: DRAFT. Not client-approved. Positioning inputs sourced from public
Google/Yelp/Nextdoor reviews, not a discovery call.

---

## URL Principles

1. **Flat paths.** One level deep. `/porcelain-veneers/`, not
   `/dental/cosmetic/porcelain-veneers-raleigh/`.
2. **Drop the geo-stuffing.** "-raleigh" comes out of every slug. Location
   lives in title tags, H1s, body copy, schema, and the Google Business
   Profile — which is where local ranking actually comes from for a
   single-location practice.
3. **Visual nesting, flat URLs.** Nav groups services into Cosmetic vs.
   Family Care for human comprehension; URLs stay shallow for link equity.
4. **One page per intent.** Kill the hub/Introduction duplicates.

---

## Primary Navigation (6 items, capped)

```
About  |  Cosmetic Dentistry  |  Family Care  |  Patient Experience  |  Smile Gallery  |  [Book a Visit]
```

Item 6 renders as the high-contrast CTA button, not a text link.
Social icons move to footer only.

---

## Full Sitemap

### Tier 0
```
/                                   Homepage
```

### 1. About  (nav hub, dropdown)
```
/about/                             Practice hub — philosophy, why independent
/dr-ryan-staehling/                 Founder bio, credentials, treatment philosophy
/our-team/                          Team page — Lynn + hygienists named
/office-and-technology/             Tour, comfort amenities, equipment
```
**Why `/our-team/` matters more than usual here:** front-desk staff are named
by patients across three separate review platforms. The team is a named trust
asset, not filler.

### 2. Cosmetic Dentistry  (nav hub, dropdown)
```
/cosmetic-dentistry/                Hub — overview + routes to procedures
/porcelain-veneers/
/teeth-whitening/
/dental-bonding/
/smile-design/
/invisalign/                        [NEW — CONFIRM THEY OFFER IT]
```

### 3. Family Care  (nav hub, dropdown)
```
/family-dentistry/                  Hub — preventive + restorative overview
/dental-cleanings/                  Preventive / hygiene
/childrens-dentistry/               CONSOLIDATES the two current pediatric URLs
/periodontal-care/
/tooth-colored-fillings/
/dental-crowns-and-bridges/         ABSORBS inlays & onlays
/dental-implants/
/root-canal-treatment/
/dentures/
/night-guards-and-mouthguards/
/emergency-dentistry/               [NEW]
```
**Emergency is a real gap.** Current site mentions emergency care in a body
paragraph with no page. High commercial intent, high local search volume,
zero competition from their own site today.

### 4. Patient Experience  (nav hub, dropdown)
```
/patient-experience/                Hub — what a first visit actually looks like
/dental-anxiety/                    [NEW — the differentiator page]
/new-patient-visit/                 Step-by-step first appointment walkthrough
/patient-forms/
/insurance-and-payment/
```
**`/dental-anxiety/` is the strategic page.** Anxiety is the single most
repeated theme across their real reviews, and no page on the current site
addresses it. This is both the SEO opportunity and the positioning anchor.

### 5. Smile Gallery
```
/smile-gallery/                     [NEW] Before/after cases with context
```
**Blocked on assets.** Needs real case photography with patient consent.
Do not build this page with stock or placeholder imagery.

### 6. Conversion + Utility
```
/book/                              Primary scheduling page
/contact/                           NAP, map, hours, directions, parking
/reviews/                           [NEW] Aggregated testimonials
/blog/                              Retained
/blog/[post-slug]/                  Flatten posts to one level
```

### Legal / System
```
/privacy-policy/
/hipaa-notice/
/sitemap.xml                        XML replaces the current HTML /sitemap/ page
/404                                Custom branded 404
```

**Total: ~32 pages** (from ~36 today, with 3 duplicate pairs removed and 5
strategic pages added).

---

## 301 Redirect Map

Every current URL must resolve. No exceptions.

### Hub consolidations (duplicate pairs → single page)
```
/dental/cosmetic/                                  → /cosmetic-dentistry/
/dental/cosmetic/cosmetic-dentistry-raleigh/       → /cosmetic-dentistry/
/dental/preventative/                              → /family-dentistry/
/dental/preventative/dentistry-raleigh-preventative/ → /family-dentistry/
/dental/restorative/                               → /family-dentistry/
/dental/restorative/restorative-dentistry-raleigh/ → /family-dentistry/
/dental/                                           → /family-dentistry/
```

### Cosmetic
```
/dental/cosmetic/porcelain-veneers-raleigh/        → /porcelain-veneers/
/dental/cosmetic/teeth-whitening-raleigh/          → /teeth-whitening/
/dental/cosmetic/bonding-raleigh/                  → /dental-bonding/
/dental/cosmetic/smile-design-raleigh/             → /smile-design/
```

### Restorative
```
/dental/restorative/dental-fillings-raleigh/       → /tooth-colored-fillings/
/dental/restorative/dental-crowns-raleigh-bridges/ → /dental-crowns-and-bridges/
/dental/restorative/inlays-raleigh-onlays/         → /dental-crowns-and-bridges/
/dental/restorative/dental-implants-raleigh/       → /dental-implants/
/dental/restorative/dentures-raleigh/              → /dentures/
/dental/restorative/root-canal-raleigh/            → /root-canal-treatment/
```

### Preventive
```
/dental/preventative/family-dentist-raleigh/       → /childrens-dentistry/
/dental/preventative/childrens-dentistry-raleigh/  → /childrens-dentistry/
/dental/preventative/periodontics-raleigh/         → /periodontal-care/
/dental/preventative/mouthguards-raleigh/          → /night-guards-and-mouthguards/
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
/resources/                                        → /patient-experience/
/resources/health-wellness-raleigh/                → /new-patient-visit/
/resources/dds-raleigh/                            → /patient-forms/
/resources/dentists-in-raleigh/                    → /insurance-and-payment/
```

### Conversion / utility
```
/dentist-in-raleigh-contact/                       → /contact/
/appointment-form/                                 → /book/
/hipaa-notice-of-privacy-practices/                → /hipaa-notice/
/sitemap/                                          → /sitemap.xml
/privacy-policy/                                   → /privacy-policy/  (unchanged)
/blog/                                             → /blog/            (unchanged)
```

### Off-domain leak — fix regardless of redesign
```
wordpress-533351-5373549.cloudwaysapps.com/appointment-form/  → /book/
```
The staging domain should 301 wholesale to the live domain, and every
internal link pointing at it must be rewritten. This is live today and
worth flagging to the client as a free finding.

---

## Consolidation Decisions to Confirm

| Decision | Rationale | Risk |
|---|---|---|
| Inlays & onlays folded into crowns/bridges | Thin page, low standalone search volume, same patient decision | Low — but check if it ranks first |
| Preventive + restorative merged under one Family Care hub | Patients don't think in these clinical categories; six nav items is the cap | Low |
| Three "Introduction" pages deleted | Pure duplicate content against their own hubs | None, this is a fix |
| Every slug loses "-raleigh" | Geo-stuffing in paths is 2011 tactics; hurts nothing to remove with clean 301s | Low, but this is the change most worth verifying against real ranking data first |

---

## Open Items

- [ ] **Run domain/backlink check before migrating.** If any current service
      URL has genuine external links or rankings, its 301 needs individual
      attention rather than bulk mapping.
- [ ] **Confirm Invisalign / clear aligners.** Page proposed but not
      verified as an offered service. Do not build unconfirmed.
- [ ] **Smile gallery assets.** Needs real cases + written patient consent.
- [ ] **Insurance specifics.** In-network plans, out-of-network policy,
      membership plan (if any) — all unknown. Page structure proposed,
      content blocked on client.
- [ ] **Review republication consent.** Google reviews are public, but
      confirm before featuring patients by name on `/reviews/`.
- [ ] **Blog post URLs.** Current post-level structure not yet audited;
      flatten plan assumes it's nested. Verify.
- [ ] **Scheduling system.** Research recommends embedded real-time booking.
      Requires knowing their practice management software (Dentrix?
      OpenDental? something else). Unknown.
