// Auri canned Q&A — argenx demo.
// Backs the chatbot's suggested prompts and the offline/fallback path.
// Every response cites populated config objects (insights / MOs / actions /
// emerging themes) via ref ids — see AURI_RAG_SPEC.md.

export const AURI_PROMPTS = [
  {
    prompt: 'Where are our biggest strategic coverage gaps?',
    response:
      'Three MO-level gaps stand out right now:\n\n• **MO3 (Pipeline KOL engagement)** — Gap. Only 2 signals this cycle, both from NOVA analysis-engine tracking rather than active MSL engagement. 6 nephrology/rheumatology investigators publishing on complement-mediated disease relevant to ARGX-117 are unengaged, with an 18-month window before the Phase 3 readout (AI3).\n• **MO2 (CIDP evidence generation)** — Low. Community neurologists are still 6+ months behind academic centers on the ADHERE post-hoc treatment-naïve data (AI2); A3 (HEOR sub-analysis) is Started but the MSL briefing (A4) is still Proposed.\n• **MO4 (RWE dissemination)** — Low. Long-term registry data isn\'t yet packaged for congress or field use (AI5), even though the underlying data exists.',
    cites: [
      { type: 'mo',      id: 'MO3' },
      { type: 'mo',      id: 'MO2' },
      { type: 'mo',      id: 'MO4' },
      { type: 'insight', id: 'AI3' },
      { type: 'insight', id: 'AI2' },
      { type: 'insight', id: 'AI5' },
    ],
  },
  {
    prompt: 'Summarise the most important signals from the last congress cycle.',
    response:
      'Four themes are trending this cycle:\n\n1. **SC home administration as default expectation** (+71% growth) — Rystiggo\'s autoinjector approval is raising the convenience bar; Hytrulo\'s Q4W-vs-Q2W dosing advantage is underexposed.\n2. **CIDP earlier-line debate intensifying post-AAN** (+58%) — the ADHERE post-hoc treatment-naïve data plus independent Medscape coverage are shifting community conversation toward earlier consideration.\n3. **FcRn class differentiation on dosing interval** (+44%) — the Q4W-vs-Q2W message is the most actionable near-term MSL talking point, but awareness is still low.\n4. **Pipeline KOL landscape shifting ahead of empasiprubart readout** (+33%) — nephrology/rheumatology investigators are gaining congress visibility that argenx hasn\'t yet engaged.',
    cites: [
      { type: 'theme', id: 'et-1' },
      { type: 'theme', id: 'et-2' },
      { type: 'theme', id: 'et-3' },
      { type: 'theme', id: 'et-4' },
    ],
  },
  {
    prompt: 'Which insights are driving the most action right now?',
    response:
      '**AI1 (Stable-patient IV→SC conversion inertia)** is the most load-bearing — recurs 4× this cycle, confidence 89%, Prioritised. Two actions in-flight (A1 Started, A2 Proposed).\n\n**AI2 (CIDP place-in-therapy uncertainty)** is the most strategically impactful — A3 has been flagged as *Changed* (it actually shifted HEOR\'s roadmap), commissioning the ADHERE post-hoc sub-analysis that\'s now anchoring the earlier-line narrative.',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI2' },
      { type: 'action',  id: 'A3'  },
    ],
  },
  {
    prompt: 'Who should we engage for the pipeline KOL push ahead of empasiprubart?',
    response:
      'NOVA\'s publication and congress-tracking analysis has already identified the targets: 6 nephrology/rheumatology investigators publishing on complement-mediated glomerular disease, 2 of whom presented at ERA 2026 with no recorded argenx MSL interaction at the same event (AI3). Action A5 (build a tier-1 pipeline KOL outreach plan) is currently Proposed with no owner assigned — the 18-month window before Phase 3 readout is the reason to move now rather than after data lands.',
    cites: [
      { type: 'insight', id: 'AI3' },
      { type: 'action',  id: 'A5'  },
    ],
  },
  {
    prompt: 'What would NOVA change about the current plan if given free rein?',
    response:
      'Three concrete changes:\n\n1. **Assign an owner to A5** (pipeline KOL outreach plan) — MO3 is a Gap and this is currently the only action addressing it, but it has no owner.\n2. **Promote the home self-injection confidence toolkit (A6, Accepted)** as the flagship MO1 deliverable — AI1 and AI4 both triangulate on the same underlying barrier: confidence, not clinical evidence.\n3. **Fast-track the long-term registry RWE package (A7)** — AI5 is isolated today, but congress-driven durability questions are recurring and the underlying data already exists; this is a packaging gap, not a data gap.',
    cites: [
      { type: 'mo',      id: 'MO3' },
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI4' },
      { type: 'action',  id: 'A5'  },
      { type: 'action',  id: 'A6'  },
      { type: 'action',  id: 'A7'  },
    ],
  },
];

export const SUGGESTED_PROMPTS = [
  'Where are our biggest strategic coverage gaps?',
  'Summarise the most important signals from the last congress cycle.',
  'Which insights are driving the most action right now?',
  'Who should we engage for the pipeline KOL push ahead of empasiprubart?',
  'What would NOVA change about the current plan if given free rein?',
];
