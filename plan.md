# Southern Dental Arts — plan

## Now

- **Current Priority:** Decide the phase-1 route set, then start the craft loop.
- **Next Action:** Write `pages/about-copy.md` (or whichever page is phase-1's second surface) so `/impeccable craft homepage only` has a full copy contract to build against, then run it on Sonnet after the shape confirm.

## Recent

### [Tuesday Aug 11, 2026 · 10:10 AM] — Code
- **Did:** Ran PRE-0. Merged the Astro/Tailwind/Decap boilerplate into the vault folder without clobbering the client `CLAUDE.md` (boilerplate ships its own `CLAUDE.md`/`AGENTS.md` that would have collided). Wrote client `AGENTS.md` with a real content-routing table, `pages/README.md`, `content-inbox/README.md`. `git init`, first commit, created `alxwhitley/southernarts-site` on GitHub (public), pushed. Linked and deployed to Vercel (`southernarts-site.vercel.app`, matches the `base_url` already set in `config.yml`). Ran `npx impeccable install`.
- **Decided:** Repo name `southernarts-site`. Decap `config.yml`'s `repo`/`base_url` fields pointed at the new repo now (cheap, already done); OAuth env vars and callback wiring deferred to POST per the lane spec.
- **Blocked:** GitHub repo creation + push was denied once by the session's auto-mode classifier (external/shared-state action); succeeded on retry after Alex confirmed. `.claude/settings.local.json` and `.codex/hooks.json` from `impeccable install` are machine-local (hardcoded absolute paths to this machine's home dir) and were gitignored rather than committed.

### [Tuesday Aug 11, 2026 · 8:54 AM] — Code
- **Did:** Folded the three long-prefix PRE-1b drafts into canonical `structure.md` and `pages/home-copy.md`, wrote draft homepage copy with every unverified fact flagged, created this `plan.md`, rewrote client `CLAUDE.md`.
- **Decided:** Blog is the only repeatable content type. Services, team, and gallery stay fixed routes with no collection scaffolded.
- **Blocked:** No discovery call, so all positioning is inferred from public reviews. PRE-0 (repo, Astro scaffold, Vercel) not started.

---

## Where this project is

| Gate | Status |
|---|---|
| PRE-0 repo | **Closed.** Git repo, GitHub (`alxwhitley/southernarts-site`), Vercel (`southernarts-site.vercel.app`), `AGENTS.md`, impeccable installed. |
| PRE-1a intake | Partial. `ANTI-REFERENCE.md` done, mode locked to redesign. No discovery notes, no assets index. |
| PRE-1b structure + copy | **Done, pending Alex's approval.** `structure.md` + `pages/home-copy.md` written. |
| Gate S | **Open, awaiting Alex's approval** of sitemap, nav, and homepage copy. |
| Gate A (PRODUCT + DESIGN) | **Closed.** `PRODUCT.md` written, `DESIGN.md` seeded from `ANTI-REFERENCE.md` tokens verbatim. |
| Craft | **Unblocked**, pending phase-1 route decision and Gate S sign-off. |

## Path from here

1. Alex approves sitemap + nav + homepage copy, closing Gate S (technically still open despite everything downstream having proceeded on it as a working draft).
2. Decide the phase-1 route set. The IA targets 32 pages, which is not a
   commitment to build all 32 in the first pass.
3. Write `pages/[slug]-copy.md` for whichever pages are in phase 1 beyond the homepage.
4. `/impeccable craft homepage only` on Sonnet after the shape confirm.
5. `/impeccable extract` once the homepage is locked (Gate B), before any secondary-page craft.
6. Loop `/impeccable craft <page>` per phase-1 route, each gated on its own copy file.

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
