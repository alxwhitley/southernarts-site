# Southern Dental Arts — Navigation Spec

Mega dropdown structure. Pairs with `southern-dental-arts-sitemap.md`.
Status: DRAFT, not client-approved.

---

## Structure Summary

| # | Nav Item | Type | Panel Width |
|---|---|---|---|
| 1 | About | Simple dropdown | Auto (~260px) |
| 2 | Cosmetic Dentistry | **Mega panel** | Full-bleed, 4 col |
| 3 | Family Care | **Mega panel** | Full-bleed, 4 col |
| 4 | Patient Experience | Compact panel | 2 col (~560px) |
| 5 | Smile Gallery | Direct link | — |
| 6 | Book a Visit | CTA button | — |

Only items 2 and 3 get full mega treatment. Applying it to all six
reproduces the clutter the format is supposed to fix.

---

## Utility Bar (above nav)

```
┌──────────────────────────────────────────────────────────────────────┐
│  6500 Creedmoor Rd, Ste 204        Open until 4:30 PM    (919) 706-0565 │
└──────────────────────────────────────────────────────────────────────┘
```
- Hours status is live/dynamic ("Open until 4:30 PM" / "Closed — opens
  Monday 8:00 AM"). Pulls from a single hours source, same one feeding
  schema + GBP.
- Phone is `tel:` linked on all breakpoints.
- No social icons here. Footer only.

---

## Main Bar

```
┌──────────────────────────────────────────────────────────────────────┐
│ [LOGO]   About  Cosmetic Dentistry  Family Care  Patient Experience   │
│                 Smile Gallery              [ Book a Visit ]           │
└──────────────────────────────────────────────────────────────────────┘
```
Sticky on scroll, condensed height after ~120px.

---

## 1. About — Simple Dropdown

```
┌────────────────────────────┐
│  Meet Dr. Staehling        │
│  Our Team                  │
│  Office & Technology       │
│  ─────────────────────     │
│  Our Practice              │
└────────────────────────────┘
```

| Label | URL |
|---|---|
| Meet Dr. Staehling | `/dr-ryan-staehling/` |
| Our Team | `/our-team/` |
| Office & Technology | `/office-and-technology/` |
| Our Practice | `/about/` |

Hub link sits last, separated by a rule — people scanning want the specific
page, not the overview.

---

## 2. Cosmetic Dentistry — Mega Panel

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  POPULAR              SMILE                 ALSO              ┌────────────┐ │
│  TREATMENTS           TRANSFORMATION        OFFERED           │  [image]   │ │
│                                                               │            │ │
│  Porcelain Veneers    Smile Design          Teeth Whitening   │ See Real   │ │
│  Dental Bonding       Invisalign            Tooth-Colored     │ Results    │ │
│                       Clear Aligners        Fillings          │            │ │
│                                                               │ Browse the │ │
│                                                               │ gallery →  │ │
│                                                               └────────────┘ │
│  ──────────────────────────────────────────────────────────                  │
│  All Cosmetic Services →                                                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Column 1 — Popular Treatments**
| Label | URL |
|---|---|
| Porcelain Veneers | `/porcelain-veneers/` |
| Dental Bonding | `/dental-bonding/` |

**Column 2 — Smile Transformation**
| Label | URL |
|---|---|
| Smile Design | `/smile-design/` |
| Invisalign | `/invisalign/` **[CONFIRM OFFERED]** |

**Column 3 — Also Offered**
| Label | URL |
|---|---|
| Teeth Whitening | `/teeth-whitening/` |
| Tooth-Colored Fillings | `/tooth-colored-fillings/` |

Fillings appear in both this panel and Family Care. Deliberate — patients
search it as both cosmetic and restorative. Same URL, two entry points.

**Column 4 — Featured Panel**
- Before/after image, real case
- "See Real Results" → `/smile-gallery/`
- Blocked until gallery assets exist. Interim fallback: swap for a short
  "Not sure where to start? Book a consult" block → `/book/`

**Footer row:** All Cosmetic Services → `/cosmetic-dentistry/`

---

## 3. Family Care — Mega Panel

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  PREVENTIVE           RESTORATIVE           FOR CHILDREN      ┌────────────┐ │
│                                             & URGENT          │            │ │
│  Cleanings & Exams    Crowns & Bridges                        │ Nervous    │ │
│  Periodontal Care     Dental Implants       Children's        │ about the  │ │
│  Night Guards &       Root Canal            Dentistry         │ dentist?   │ │
│  Mouthguards          Treatment                               │            │ │
│                       Dentures              Emergency         │ Here's how │ │
│                       Tooth-Colored         Dental Care       │ we help →  │ │
│                       Fillings                                └────────────┘ │
│  ──────────────────────────────────────────────────────────                  │
│  All Family & Restorative Services →                                         │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Column 1 — Preventive**
| Label | URL |
|---|---|
| Cleanings & Exams | `/dental-cleanings/` |
| Periodontal Care | `/periodontal-care/` |
| Night Guards & Mouthguards | `/night-guards-and-mouthguards/` |

**Column 2 — Restorative**
| Label | URL |
|---|---|
| Crowns & Bridges | `/dental-crowns-and-bridges/` |
| Dental Implants | `/dental-implants/` |
| Root Canal Treatment | `/root-canal-treatment/` |
| Dentures | `/dentures/` |
| Tooth-Colored Fillings | `/tooth-colored-fillings/` |

**Column 3 — For Children & Urgent**
| Label | URL |
|---|---|
| Children's Dentistry | `/childrens-dentistry/` |
| Emergency Dental Care | `/emergency-dentistry/` |

Emergency gets visual emphasis — distinct color or small icon. Someone
in pain is scanning, not reading.

**Column 4 — Featured Panel**
- "Nervous about the dentist?" → `/dental-anxiety/`
- This is the differentiator page. Putting it in the nav panel rather than
  burying it under Patient Experience is deliberate: it's the thing the
  reviews say they're actually best at.

**Footer row:** All Family & Restorative Services → `/family-dentistry/`

---

## 4. Patient Experience — Compact Panel

```
┌──────────────────────────────────────────────┐
│  YOUR VISIT              PRACTICAL           │
│                                              │
│  Your First Visit        Patient Forms       │
│  Dental Anxiety          Insurance & Payment │
│  ──────────────────────────────────          │
│  What to Expect →                            │
└──────────────────────────────────────────────┘
```

| Label | URL |
|---|---|
| Your First Visit | `/new-patient-visit/` |
| Dental Anxiety | `/dental-anxiety/` |
| Patient Forms | `/patient-forms/` |
| Insurance & Payment | `/insurance-and-payment/` |
| What to Expect | `/patient-experience/` |

---

## 5. Smile Gallery — Direct Link
`/smile-gallery/` — no dropdown.

## 6. Book a Visit — CTA Button
`/book/` — high-contrast fill, only filled button in the bar.

---

## Interaction Spec

**Desktop**
- Trigger: hover with 150ms enter delay, 300ms exit delay. Prevents panels
  firing while the cursor crosses the bar.
- Also opens on click/Enter for keyboard and touch-laptop users.
- Panel animates: 200ms, opacity + 4px translateY. No slide-down height
  animation — it janks.
- Scrim: page content below dims slightly (4-6% black) while panel is open.
- Only one panel open at a time.
- Panels close on Escape, outside click, or scroll.

**Keyboard / a11y**
- Nav items are `<button aria-expanded>` when they own a panel, `<a>` when
  they don't.
- Tab moves through panel links in DOM order; Escape returns focus to the
  trigger.
- Visible focus ring on every item. Do not suppress outlines.
- Panel is `<nav aria-label>`-wrapped, links in semantic `<ul>`.
- Column headers are real text, not `aria-hidden` decoration.

**Active state**
- Current section's top-level item carries a persistent underline or weight
  change so people know where they are.

---

## Mobile (below 1024px)

Mega panels do not translate. Full-screen accordion drawer instead.

```
┌──────────────────────────┐
│ [LOGO]              [☰]  │
├──────────────────────────┤
│  About                +  │
│  Cosmetic Dentistry   +  │
│  Family Care          +  │
│  Patient Experience   +  │
│  Smile Gallery           │
├──────────────────────────┤
│   [ Book a Visit ]       │
│   [ Call (919) 706-0565 ]│
└──────────────────────────┘
```

- Accordion sections expand in place; column groupings become subheadings.
- Only one section open at a time.
- Drawer scrolls independently; body scroll locked.
- **Persistent bottom bar on all mobile pages** (not just nav): Call left,
  Book right. Thumb zone. This is the single highest-value mobile element
  for a practice where most traffic is a phone search near an appointment
  moment.
- Emergency Dental Care surfaces one level up in the mobile Family Care
  accordion — urgent intent shouldn't require two taps.

---

## Open Items

- [ ] Invisalign — listed in Cosmetic panel, offering unconfirmed. Remove
      if they don't provide it.
- [ ] Cosmetic featured panel needs a real before/after asset. Fallback
      block specified above until then.
- [ ] Hours-status logic needs a single source of truth shared with schema
      and GBP. Decide where that lives at build time.
- [ ] Confirm whether tooth-colored fillings should genuinely dual-list.
      Low risk, but it's a judgment call the client may have a view on.
