// Actionable insights — argenx demo.
// FcRn platform: SC modality transition (MO1) and CIDP earlier-line
// positioning (MO2) are the headline narrative alongside pipeline KOL
// mapping ahead of the empasiprubart Phase 3 readout (MO3).

export const INSIGHTS = [
  {
    id: 'AI1',
    title: 'Stable-patient inertia is slowing IV→SC Hytrulo conversion',
    priority: 'High',
    lpRefs: ['LP1'], moRefs: ['MO1'],
    recurrence: 4,
    recency: '2026-06',
    summary: 'Community neurologists managing patients stable on Vyvgart IV are reluctant to switch to Hytrulo SC despite equivalent efficacy and the convenience of home self-administration. The barrier is framing, not clinical evidence — switching data is convincing on paper but there is no clean community-facing algorithm.',
    sourceInsights: [
      { type: 'MSL interaction', role: 'Community neurologist', location: 'Charlotte, NC', quote: 'Patients who are stable are stable — I don’t want to mess with it, even though the SC schedule would be easier for them.', date: '2026-06-04' },
      { type: 'Ad board', role: 'Academic neurologist', location: 'Boston, MA', quote: 'The switching data are convincing on paper but we need a cleaner community-facing algorithm for who to move first.', date: '2026-05-22' },
      { type: 'Med Info query', role: 'Infusion center nurse', location: 'Phoenix, AZ', quote: 'Asked for a conversion protocol sheet we can hand to scheduling when patients ask about the home option.', date: '2026-05-30' },
    ],
    status: 'Prioritised',
    confidenceScore: 0.89,
    provenance: 'synthesized',
  },
  {
    id: 'AI2',
    title: 'CIDP neurologists want head-to-head data before positioning Hytrulo ahead of IVIg',
    priority: 'High',
    lpRefs: ['LP2'], moRefs: ['MO2'],
    recurrence: 3,
    recency: '2026-06',
    summary: 'The ADHERE post-hoc treatment-naïve finding is compelling, but community neurologists are 6+ months behind academic centers on algorithm updates and are waiting for more direct comparative framing vs IVIg and rituximab before moving efgartigimod earlier in the CIDP pathway.',
    sourceInsights: [
      { type: 'Congress debrief', role: 'CIDP specialist', location: 'AAN 2026', quote: 'We’re still making first-line decisions on IVIg-failure logic. The treatment-naïve post-hoc data is interesting but it’s post-hoc, not a primary endpoint — I need to see it discussed that way.', date: '2026-04-20' },
      { type: 'MSL interaction', role: 'Community neurologist', location: 'Nashville, TN', quote: 'I know the 87.5% number. I don’t yet have a clean way to explain why that changes when I reach for it versus IVIg.', date: '2026-05-14' },
    ],
    status: 'Validated',
    confidenceScore: 0.85,
    provenance: 'synthesized',
  },
  {
    id: 'AI3',
    title: 'Emerging FcRn/complement pipeline KOLs remain unengaged ahead of empasiprubart Phase 3 readout',
    priority: 'Medium',
    lpRefs: ['LP4'], moRefs: ['MO3'],
    recurrence: 2,
    recency: '2026-05',
    summary: 'NOVA publication and congress-tracking analysis has identified nephrology and rheumatology investigators publishing on complement-mediated disease relevant to ARGX-117 (anti-C2) who are not currently on argenx’s pipeline engagement list. The 18-month window before Phase 3 readouts makes early relationship-building the highest-leverage action available.',
    sourceInsights: [
      { type: 'Publication analysis', role: 'NOVA analysis engine', location: 'PubMed', quote: '6 nephrology/rheumatology investigators with recent publications on complement-mediated glomerular disease identified; none are currently on the empasiprubart engagement list.', date: '2026-05-02' },
      { type: 'Congress speaker tracking', role: 'NOVA congress monitor', location: 'ERA 2026', quote: '2 of the 6 identified investigators gave abstract presentations at ERA 2026. No argenx MSL interaction recorded at the same event.', date: '2026-05-10' },
    ],
    status: 'Triaged',
    confidenceScore: 0.71,
    provenance: 'synthesized',
  },
  {
    id: 'AI4',
    title: 'Home self-administration training gap is the top-cited barrier to SC uptake',
    priority: 'High',
    lpRefs: ['LP3'], moRefs: ['MO1'],
    recurrence: 3,
    recency: '2026-06',
    summary: 'Patients and community HCPs report interest in Hytrulo home self-administration but lack confidence and structured support materials for the prefilled syringe. This is a training and materials gap, not a clinical or access barrier — patients who complete initial training convert at a much higher rate.',
    sourceInsights: [
      { type: 'MSL interaction', role: 'Patient support program lead', location: 'Indianapolis, IN', quote: 'Patients want to do this at home. What they don’t have is a confident first injection experience — that’s where they drop off.', date: '2026-06-02' },
      { type: 'Med Info query', role: 'Infusion center nurse', location: 'Denver, CO', quote: 'We get asked constantly about the prefilled syringe but we don’t have a standard training packet to hand out ourselves.', date: '2026-05-27' },
    ],
    status: 'Validated',
    confidenceScore: 0.83,
    provenance: 'synthesized',
  },
  {
    id: 'AI5',
    title: 'Long-term registry RWE lagging behind congress-driven durability questions',
    priority: 'Medium',
    lpRefs: ['LP6'], moRefs: ['MO4'],
    recurrence: 2,
    recency: '2026-05',
    summary: 'HCPs at recent congresses are asking for multi-year IgG reduction and relapse-free survival data beyond the ADAPT and ADHERE trial windows. Registry data exists but has not yet been packaged into a congress-ready or MSL-ready format.',
    sourceInsights: [
      { type: 'Congress debrief', role: 'Academic neurologist', location: 'AAN 2026', quote: 'The trial data is 2-3 years. My patients have been on this for longer than that now — where is that data?', date: '2026-04-19' },
      { type: 'MSL interaction', role: 'Neuromuscular specialist', location: 'Minneapolis, MN', quote: 'Real-world relapse-free data past year 3 would change how I counsel new patients on long-term expectations.', date: '2026-05-08' },
    ],
    status: 'Captured',
    confidenceScore: 0.68,
    provenance: 'synthesized',
  },
];
