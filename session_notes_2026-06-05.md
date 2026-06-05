# Session Notes — 2026-06-05

## What was built this session

### argenx demo (`z-aurivian/aurivian-argenx-demo`)
- Scaffolded from master template
- `src/config/customer.js`: `CLIENT.name='argenx'`, `cloudLabel='argenx-prod-aws'`, `CAPTURE_APP_URL='https://aurivian-argenx-capture-app.vercel.app'`, `PULSE_BRIEF_URL='/pulse_argenx_brief.html'`
- `src/config/products.js`: Vyvgart (IV, gMG/ITP), Vyvgart Hytrulo (SC, gMG/CIDP), Empasiprubart (Phase 3 pipeline). `PLATFORM_LENS: FcRn Platform`
- `src/config/strategy.js`: 4 ISP pillars (SC leadership, CIDP paradigm, FcRn pipeline, RWE). MO1 Sufficient, MO2 Low, MO3 Gap, MO4 Low, MO5 Sufficient. LP1–LP6 including home admin and RWE.
- `src/config/congresses.js`: AAN 2025 (available), EAN 2025 (available), Trend AAN→EAN, EULAR/ACR/ASN 2026 (comingSoon)
- `src/config/kols.js`: 17 real KOLs — gMG/CIDP (Wolfe, Vincent, Kaminski, Sanders, Silvestri, Lacomis, Kissel, Bril, Lewis), ITP (Kuter, Bussel, Cines, Pittock), FcRn pipeline nephrology (Rovin, Fervenza, Manzi, Cockwell)
- `src/config/kit-scorecards.js`: 5 KITs — IVIg-to-SC Transition (Alert +78%), CIDP Earlier-Line (Alert +69%), SC Self-Injection Confidence, FcRn Competitor Diff (Alert +72%), Payer Site-of-Care
- `src/config/gap-radar.js`: 4 gaps — FcRn competitor LP, SC site-of-care economics KIT, CIDP IgG reduction KIQ, empasiprubart nephrology LP
- `src/config/signals.js`: 5 signals — Rystiggo SC approval spike, Lacomis divergence (74→48), IVIg-to-SC transition +78%, CIDP IVIg shortage advocacy, 3 emerging CIDP influencers
- `src/config/artifacts.js`: 5 artifacts — Q2 S2A, AAN/EAN debrief, KOL alignment report, Hytrulo SC baseline, FcRn competitor brief
- `src/config/insight-sources.js`: 6 sources including X/LinkedIn (vol 4817, ROI 8.1); KIT trend with argenx KIT names
- `src/config/messaging-alignment.js`: 4 pillars (SC modality, CIDP earlier-line, FcRn differentiation, RWE durability); deterministic hashCode alignment
- `src/config/vega.js`: $21.3M ROMI, +238%, Lacomis as divergence KOL, Rystiggo/IMAAVY as competitive threat
- `public/index.html`: Tab title updated to "Aurivian | Argenx Medical Insights"
- `src/components/CommandCenter.js`: CLIENT.name capitalized for display (argenx → Argenx)
- `src/components/KOLManagement.js`: Import fixed to `config/kols.js` (was `data/demoData.js`)
- `src/components/Login.js`: CLIENT.name capitalized for display
- `src/components/AuriChatPanel.js`: CLIENT.name capitalized for display

### Key narrative
FcRn platform — SC modality transition (IVIg → Vyvgart Hytrulo home SC) and CIDP earlier-line positioning are the twin headline stories. Lacomis is the divergence KOL. Rystiggo (UCB) and IMAAVY (J&J nipocalimab) are the primary competitors. Empasiprubart (Phase 3) covers LN/MN pipeline with Rovin/Fervenza/Manzi as the nephrology KOLs.

### Product IDs
`'vyvgart'` | `'vyvgart-hytrulo'` | `'empasiprubart'`

---

## Pulse Brief (`public/pulse_argenx_brief.html`)
Full redesign to match Aurivian dark UI (bg #111111, blue #00A8FF, Inter font, Michroma wordmark).

### Views (all working)
- **Morning Brief** — 6 sections: IVIg transition risk, SC self-injection, payer budget impact, competitive (Rystiggo SC approval), post-AAN ADHERE signal, KOL watch. Bottom line: 4 items.
- **Signal Velocity** — 8-signal table with velocity bars and percentage changes
- **Narrative Map** — SVG diagram with 5 narrative nodes + 6 narrative detail cards

### Sidebar briefs (all clickable with full content)
- **This Week**: IVIg Transition Risk & SC Autonomy (Jun 5, active), Payer Budget Impact Model (Jun 3), Post-AAN 2026 ADHERE Signal (Jun 1)
- **Last Month**: ADAPT OCULUS Phase 3 Positive (May 12), Rystiggo SC Approval — CIDP Signal (May 10), IMAAVY withMe Programme Confirmed (Apr 28)
- Each brief has: eyebrow tags, headline, lede, situation room, 2–3 sections with pull quotes + FVQs, 3-item bottom line
- `switchBrief(card, briefId)` JS function routes to correct `brief-{id}` content block; scrolls to top

### Audio player
- ElevenLabs MP3 at `public/pulse_brief_audio.mp3` (Dyego - News Presenter voice)
- Listen button opens fixed bottom player bar: play/pause, progress scrubber (clickable), timestamp, close button
- Relative src path (`pulse_brief_audio.mp3`) required for both local and Vercel serving
- `audio.play()` wrapped in `.then()/.catch()` for browser promise handling

### Vercel fix
- `vercel.json` updated: catch-all SPA rewrite now excludes `.html` files (`/((?!.*\.html).*)`) so `pulse_argenx_brief.html` is served as a static file rather than being rewritten to `index.html`
- No-cache headers added for all `.html` files

---

## argenx Capture App (`z-aurivian/aurivian-argenx-capture-app`)
New repo created. Congress capture app for AAN 2026 (Chicago, April 18-22, 2026).

### Stack
- CRA + Tailwind, dark theme (bg #111111, blue #00A8FF), Inter font, Michroma wordmark
- Same 5-tab pattern as Otsuka/Novo Nordisk: Activity Feed / Capture / Leaderboard / Social / Auri
- useReducer + AppContext state, react-router-dom v7

### Content
- **Congress**: AAN 2026, McCormick Place, Chicago, Day 3/5
- **KITs**: IVIg-to-SC Transition (IVSC, +78%), CIDP Earlier-Line (CIDP), SC Self-Injection Confidence (SCIC), FcRn Competitor Diff (FCRD, +72%), Payer Site-of-Care (PSOC)
- **15 KIQs** (3 per KIT)
- **Products**: Vyvgart, Vyvgart Hytrulo, Rystiggo (competitor), IMAAVY (competitor), empasiprubart
- **8 trials**: ADAPT-SC+, ADHERE, ADHERE+, RAISE, CIDP-HYTRULO-001, MG0001, VIVACITY-MG3, ENHANCE
- **6 team members**: Dr. Aisha Rahman (lead, isCurrentUser), Marcus Brennan, Priya Nair, James Holloway, Sophie Laurent, Kevin Park
- **8 mock insights**: Days 1-3, all authors, hot insights on ins-2/4/7/8
- **6 social posts**: Wolfe, Bril, AANeurology, Kissel, Lewis, AAN2026 official
- **3 daily summaries**
- **Auri**: Claude Sonnet 4.6 via REACT_APP_ANTHROPIC_API_KEY + keyword fallback
- **vercel.json**: SPA rewrite for react-router

### Congress Capture button in argenx demo
- `CAPTURE_APP_URL` in `customer.js` set to `https://aurivian-argenx-capture-app.vercel.app`
- Button now live (was grayed out), opens capture app in new tab

---

## Bugs fixed this session
1. **KOLManagement.js** imports `KOL_DATA` from `../data/demoData` — should be `../config/kols`. Fixed in Jazz, argenx, UCB.
2. **Tab title** in `public/index.html` defaults to "Aurivian | Alexion Medical Insights" — must update per demo.
3. **Congress comingSoon entries** had 2025 dates — bumped to 2026 across all three demos.
4. **VEGA action text** referenced past 2025 congresses as future — fixed to 2026.
5. **UCB VEGA lastContact dates** were 2025 — corrected to 2026.
6. **CommandCenter.js** renders `CLIENT.name` raw — needs `.charAt(0).toUpperCase() + .slice(1)` for lowercase brand names (argenx).
7. **Pulse brief Signal Velocity / Narrative Map** disappeared after sidebar brief refactor — missing `</div>` closing `#view-brief` caused views to be nested inside it. Fixed.
8. **Vercel serving old cached HTML** — catch-all rewrite `/(.*) → /index.html` was intercepting `.html` static files. Fixed by excluding `.html` from rewrite pattern and adding no-cache headers.
9. **Audio not playing locally** — absolute src `/pulse_brief_audio.mp3` resolves to filesystem root under `file://`. Fixed to relative `pulse_brief_audio.mp3`.

## Checklist for any new demo
- [ ] `public/index.html` — update `<title>` and `<meta name="description">`
- [ ] `src/components/KOLManagement.js` — change import to `../config/kols`
- [ ] `src/config/congresses.js` — comingSoon entries should be 2026 dates
- [ ] `src/config/vega.js` — lastContact and action text should use 2026 dates
- [ ] `src/components/CommandCenter.js` — capitalize CLIENT.name if brand uses lowercase
- [ ] `src/components/Login.js` — capitalize CLIENT.name if brand uses lowercase
- [ ] `src/components/AuriChatPanel.js` — capitalize CLIENT.name if brand uses lowercase
- [ ] `vercel.json` — exclude `.html` from SPA rewrite pattern

## Status
- argenx demo: fully built, live at `aurivian-argenx-demo.vercel.app`
- argenx capture app: built, pushed to `z-aurivian/aurivian-argenx-capture-app`, Vercel connecting (URL: `aurivian-argenx-capture-app.vercel.app`)
- Jazz demo: built, all Alexion data replaced, pushed. Live.
- UCB demo: built, all Alexion data replaced, pushed. Live.
- Pulse brief: fully built with audio (argenx only). Jazz and UCB Pulse briefs not yet built.
- Demo landing page: argenx/Jazz/UCB not yet added to `z-aurivian/demo-landing`.
- All three demos need `REACT_APP_ANTHROPIC_API_KEY` set in Vercel for live Auri mode.
