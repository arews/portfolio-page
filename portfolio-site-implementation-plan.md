# aresandvik.com — Implementation Plan

Based on `portfolio-site-research.md` and the following decisions:

- **Localization:** one HTML file per page, with both NO/EN text embedded in the DOM and a JS toggle that shows/hides the active language (avoids the SEO downside of client-side-only injection, since both languages are present in the markup for crawlers).
- **Visual style:** near-black background (`#1A1A1A`) / off-white text (`#F1F1F1`) — passes WCAG AAA, softer than pure black/white.
- **Hosting:** GitHub Pages.

---

## Phase 0 — Content you provide

- [x] CV content — used the attached Resume PDF (LinkedIn export) in place of a fresh paste.
- [ ] Confirm your registrar for aresandvik.com (still needed for DNS setup in Phase 4).

Everything else (consultant CV, publications) is already available from the uploaded source files.

## Phase 1 — Structure & content

- [x] Build the three pages as plain HTML with both NO and EN text embedded (`data-lang="no"` / `data-lang="en"` spans), no visual styling yet.
- [x] Translate/write the missing language:
  - [x] Consultant project descriptions (`Netlife-CV (English).pdf`) — full EN translation written for all 27 projects.
  - [x] Publication titles/descriptions (`Portfolio - ekstern kommunikasjon.docx`) — EN glosses written for all 9 entries.
- [x] Page 1 (`index.html`) built from the attached Resume PDF.

Files produced: `index.html` (CV), `consulting.html` (consultant projects), `publications.html` (publications).

## Phase 2 — Styling

- [x] One shared stylesheet (`style.css`): system font stack (no font-loading requests), near-black background (`#1A1A1A`), off-white text (`#F1F1F1`).
- [x] Shared header/nav across all 3 pages, including the language toggle control.
- [x] Responsive check (mobile/desktop) — single-column layout with a max content width and a mobile breakpoint that stacks the two-column language list.

## Phase 3 — Language toggle behavior

- [x] Small script (`lang.js`) that flips which embedded language elements are visible (no separate files, no framework).
- [x] Persist the chosen language via `localStorage` so it sticks across all 3 pages.
- [x] Set `<html lang="...">` dynamically to match the active language for accessibility.

## Phase 4 — Deploy

- [ ] Push the site to a GitHub repo, enable GitHub Pages. `CNAME` file (containing `aresandvik.com`) is already prepared alongside the HTML/CSS/JS files.
- [ ] At the registrar, set:
  - 4 A-records for the apex domain: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - A CNAME for `www` → `<username>.github.io`
- [ ] Verify domain ownership in GitHub's settings before or alongside the DNS change, to prevent domain takeover risk.

I don't have a connector to your GitHub account or domain registrar, so this phase needs you to run the push and DNS steps yourself.

## Phase 5 — Verify & polish

- [ ] Confirm HTTPS is auto-issued once DNS propagates (can't check until Phase 4 is live).
- [x] Test both languages on all 3 pages — verified NO/EN element counts match on all pages and HTML parses cleanly.
- [x] Confirm all publication links resolve correctly — fetched all 4 op-ed URLs directly; all resolve (some via redirect) and confirm Are's byline.
- [x] Final proofread pass on the newly-written EN/NO translations.

---

## Open items carried over

1. Registrar confirmation for aresandvik.com — needed before DNS records can be set.
2. GitHub username/repo — needed to fill in the `www` CNAME target and to actually push/enable Pages.
