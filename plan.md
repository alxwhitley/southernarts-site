# Southern Dental Arts — plan

## Now

- **Current Priority:** Gate A. Run `/impeccable init` on Fable to produce PRODUCT.md and a seeded DESIGN.md.
- **Next Action:** Switch to `/model claude-fable-5`, then run `/impeccable init` against `structure.md`, `pages/home-copy.md`, and `ANTI-REFERENCE.md`.

## Recent

### [Tuesday Aug 11, 2026 · 8:54 AM] — Code
- **Did:** Folded the three long-prefix PRE-1b drafts into canonical `structure.md` and `pages/home-copy.md`, wrote draft homepage copy with every unverified fact flagged, created this `plan.md`, rewrote client `CLAUDE.md`.
- **Decided:** Blog is the only repeatable content type. Services, team, and gallery stay fixed routes with no collection scaffolded.
- **Blocked:** No discovery call, so all positioning is inferred from public reviews. PRE-0 (repo, Astro scaffold, Vercel) not started.

---

## Where this project is

| Gate | Status |
|---|---|
| PRE-0 repo | **Not started.** No git repo, no Astro scaffold, no Vercel link, no `AGENTS.md`. |
| PRE-1a intake | Partial. `ANTI-REFERENCE.md` done, mode locked to redesign. No discovery notes, no assets index. |
| PRE-1b structure + copy | **Done, pending approval.** `structure.md` + `pages/home-copy.md` written. |
| Gate S | **Open, awaiting Alex's approval** of sitemap, nav, and homepage copy. |
| Gate A (PRODUCT + DESIGN) | Not started. |
| Craft onward | Blocked on PRE-0 and Gate A. |

## Path from here

1. Alex approves sitemap + nav + homepage copy, closing Gate S.
2. `/impeccable init` on Fable. Redesign mode. Reads `ANTI-REFERENCE.md` first,
   then `structure.md` and `pages/home-copy.md`. Must not invent pages or nav.
   Palette comes from the ANTI-REFERENCE target tokens verbatim, not re-derived.
3. Approve PRODUCT.md and the seeded DESIGN.md, closing Gate A.
4. PRE-0: clone the boilerplate, set the git author email, link Vercel, write
   `AGENTS.md`, scaffold `pages/README.md` and `content-inbox/README.md`.
5. Decide the phase-1 route set. The IA targets 32 pages, which is not a
   commitment to build all 32 in the first pass.
6. `/impeccable craft homepage only` on Sonnet after the shape confirm.

## Standing constraints

- **No discovery call has happened.** Everything in `pages/home-copy.md` traces
  to public Google, Yelp, and Nextdoor reviews. PRODUCT.md must record this
  rather than presenting inferred positioning as client-confirmed.
- **Never invent** insurance details, credentials, comfort measures, or
  Dr. Staehling's voice. Incorrect insurance information on a medical site is
  a liability, not a copy placeholder.
- **No stock photography.** This is the redesign's central prohibition. If real
  photos are unavailable, reuse usable images from the current site rather than
  introducing fresh stock.
- Gold has two tokens, decorative and text. Headings are olive, not black.
  See `ANTI-REFERENCE.md`.

## Hard blockers on a real (non-pitch) build

| Blocker | What it holds up |
|---|---|
| No discovery call | All positioning |
| No real photography | Hero, doctor, team sections |
| Dr. Staehling's own words | Homepage section 6, `/dr-ryan-staehling/` |
| No insurance data | Homepage section 9, `/insurance-and-payment/` |
| No PMS knowledge | Booking mechanism, `/book/` |
| No gallery assets | Homepage section 7, `/smile-gallery/`, cosmetic nav panel |
| Invisalign unconfirmed | `/invisalign/`, two nav entries, services split |

## Free findings worth telling the client now

- The primary CTA on the live site points at a Cloudways staging domain
  (`wordpress-533351-5373549.cloudwaysapps.com/appointment-form/`). Live today,
  independent of the redesign.
- Three "Introduction" pages duplicate their own hub pages.
- Emergency care is mentioned in body copy with no page behind it, in a
  category with high commercial intent and high local volume.
