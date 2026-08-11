# Southern Dental Arts — plan

## Now

- **Current Priority:** Review the homepage build at https://southernarts-site.vercel.app (once this push deploys) and decide whether it's the right direction before any other page is scoped.
- **Next Action:** Alex's call — approve/redirect the homepage, then decide whether to run `/impeccable document` (promotes DESIGN.md from seed to the newer frontmatter+8-section format; gated on confirmation since it's a real format migration, not run yet) before scoping any further pages. No other page is in scope until then, per Alex's explicit instruction this session.

## Recent

### [Tuesday Aug 11, 2026 · 10:35 AM] — Code
- **Did:** Built the homepage (`/impeccable craft`, homepage only, per Alex's explicit scope instruction — no other page touched). Header (utility bar, mega nav panels, mobile accordion drawer, persistent bottom action bar), Footer, single NAP/hours data source (`src/data/business.ts`), all 11 sections from `pages/home-copy.md`, Dentist/Person JSON-LD schema, self-hosted Source Serif 4 + Hanken Grotesk. Ran two inspection rounds via Playwright screenshots (desktop + mobile) and the impeccable detector; fixed a mobile-drawer CTA duplication bug, a WCAG-failing footer caption color (white/60 on olive-deep, 4.04:1), and added the hero settle-on-load motion DESIGN.md specifies but the first pass missed. Committed and pushed (`2ad8764`).
- **Decided:** Treated this as "extend an established, incomplete brand" rather than running impeccable's full concept-seed world-invention roll — DESIGN.md's palette is already locked verbatim and home-copy.md's section order/content is already contractually fixed, so the roll's premise (open invention) didn't apply. No real photography exists, so hero/doctor/anxiety images ship as honestly labeled placeholders, never stock. Testimonials and the two blocked sections (gallery, insurance) ship as visibly flagged pending/empty states, never invented content.
- **Blocked:** DESIGN.md is still the pre-code SEED — promoting it to captured tokens via `/impeccable document` is explicitly gated on user confirmation (it's a format migration, not a silent overwrite) and wasn't run. `.impeccable/hook.cache.json` got caught in the same machine-local-state cleanup as the `.claude`/`.codex` hook wiring from PRE-0 — untracked and gitignored.

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
