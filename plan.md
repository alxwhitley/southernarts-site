# Southern Dental Arts — plan

## Now

- **Current Priority:** Alex reviews the homepage (local dev server or https://southernarts-site.vercel.app) and decides whether to lock it as Gate B or redirect.
- **Next Action:** Based on that review — either redirect the build, or move to formally closing Gate S, decide on `/impeccable document`, and scope phase-1 routes. No other page is in scope until then.

## Recent

### [Tuesday Aug 11, 2026 · 10:55 AM] — Code
- **Did:** Normalized PRE-1b drafts into `structure.md`/`pages/home-copy.md`, ran PRE-0 (repo, GitHub, Vercel, impeccable install), built and shipped the homepage to southernarts-site.vercel.app.
- **Decided:** Blog is the only repeatable content type; homepage craft treated as extending an established, locked-palette system rather than running impeccable's world-invention roll; no stock photography anywhere, honest labeled placeholders instead.
- **Blocked:** No discovery call, positioning inferred from public reviews; `DESIGN.md` still a pre-code seed (`/impeccable document` offered, not run); Gate S never formally signed off despite everything proceeding on it as a working draft.

---

## Where this project is

| Gate | Status |
|---|---|
| PRE-0 repo | **Closed.** Git repo, GitHub (`alxwhitley/southernarts-site`), Vercel (`southernarts-site.vercel.app`), `AGENTS.md`, impeccable installed. |
| PRE-1a intake | Partial. `ANTI-REFERENCE.md` done, mode locked to redesign. No discovery notes, no assets index. |
| PRE-1b structure + copy | **Done, pending Alex's approval.** `structure.md` + `pages/home-copy.md` written. |
| Gate S | **Open, awaiting Alex's approval** of sitemap, nav, and homepage copy. |
| Gate A (PRODUCT + DESIGN) | **Closed.** `PRODUCT.md` written, `DESIGN.md` seeded from `ANTI-REFERENCE.md` tokens verbatim. |
| Craft | Homepage built, live at https://southernarts-site.vercel.app. Awaiting Alex's review — nothing else scoped per explicit instruction. |
| Gate B (homepage locked) | **Not yet.** Needs Alex's (and eventually client) sign-off. |

## Path from here

1. Alex reviews the built homepage and either locks it (Gate B) or redirects.
2. Alex approves sitemap + nav + homepage copy, formally closing Gate S (everything has proceeded on it as a working draft, but it was never explicitly signed off).
3. Decide whether to run `/impeccable document` to promote `DESIGN.md` from seed to captured tokens before building anything else — offered, not run, gated on confirmation since it changes the file's format.
4. Decide the phase-1 route set. The IA targets 32 pages, which is not a
   commitment to build all 32 in the first pass. Not scoped yet — Alex was explicit this session that only the homepage is in scope for now.
5. `/impeccable extract` once the homepage is locked (Gate B), before any secondary-page craft.
6. Loop `/impeccable craft <page>` per phase-1 route, each gated on its own copy file — only after phase-1 is actually decided.

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
