// VEGA — Strategic Analytics agent — argenx demo.
// FcRn platform — gMG SC modality transition and CIDP earlier-line positioning are the headline VEGA story.

export const VEGA_AWARENESS_PROGRESSION = {
  benchmark: '34% of target HCPs achieving sustained practice change vs 22% industry average — +55% outperformance. Slowest conversion: Knowledgeable → Intent (58%, avg 61 days). Primary blocker: SC self-injection training infrastructure gaps at community neurology practices. Recommended action: deploy SC training resource kit to community neurology networks and GBS/CIDP Foundation channels.',
  stages: [
    { stage: 'Sustained practice change', hcps: 367,  pctTotal: 34, vsQ4: '+11%' },
    { stage: 'Actively changing practice', hcps: 484,  pctTotal: 45, vsQ4: '+13%' },
    { stage: 'Intent to change',           hcps: 624,  pctTotal: 58, vsQ4: '+8%'  },
    { stage: 'Knowledgeable',              hcps: 891,  pctTotal: 83, vsQ4: '+6%'  },
    { stage: 'Aware only',                 hcps: 341,  pctTotal: 32, vsQ4: '-6%'  },
  ],
};

export const VEGA_INTERACTION_QUALITY = {
  insight: 'Marcus T shows high interaction volume but below-average insight capture rate — MSL conversations are generating competitive differentiation opportunities that are not being documented for cross-regional sharing. Sarah K shows excellent quality and FcRn competitor alignment. Recommended: MSL training on LP3 competitor differentiation protocol.',
  rows: [
    { msl: 'Sarah K',    region: 'Northeast',  interactions: 47, vsTarget: '+12%', quality: 9.0, insightRate: 84, overall: 'Excellent'     },
    { msl: 'Marcus T',   region: 'Southeast',  interactions: 54, vsTarget: '+24%', quality: 6.1, insightRate: 38, overall: 'Quality gap'   },
    { msl: 'Elena M',    region: 'Midwest',    interactions: 39, vsTarget: '-5%',  quality: 8.4, insightRate: 77, overall: 'Volume gap'    },
    { msl: 'James W',    region: 'West',       interactions: 44, vsTarget: '+7%',  quality: 8.1, insightRate: 72, overall: 'On track'      },
    { msl: 'Priya D',    region: 'South',      interactions: 28, vsTarget: '-28%', quality: 5.9, insightRate: 33, overall: 'Needs support' },
  ],
};

export const VEGA_ENGAGEMENT_GAPS = [
  { kol: 'Dr. David Lacomis',     tier: 'Tier 2', lastContact: '2026-03-31', gap: '9 weeks', action: 'Re-engage urgently — public-private divergence on SC transition detected' },
  { kol: 'Dr. Paul Cockwell',     tier: 'Tier 2', lastContact: '2026-04-14', gap: '7 weeks', action: 'Re-engage before ERA 2025 — empasiprubart pipeline briefing needed' },
  { kol: 'Dr. Fernando Fervenza', tier: 'Tier 1', lastContact: '2026-05-01', gap: '5 weeks', action: 'Schedule MN FcRn scientific exchange before ASN 2025 abstract deadline' },
  { kol: 'Dr. Susan Manzi',       tier: 'Tier 1', lastContact: '2026-05-19', gap: '2 weeks', action: 'On track — empasiprubart SLE/LN data package ready for delivery' },
];

export const VEGA_SHARE_OF_VOICE = {
  watchArea: 'Vyvgart Hytrulo SC share of voice growing (+31pts in 90 days) in gMG and CIDP discussions, but Rystiggo is generating increasing competitive noise post-SC approval (+18pts). FcRn class-wide interest is at a 3-year high. Recommend accelerating KOL co-creation on SC modality differentiation content ahead of AAN 2025 abstract season.',
  rows: [
    { source: 'Congress abstracts (AAN/EAN 2025)',    us: '52%', compA: '28%', compB: '14%', compC: '6%',  trend: 'up'   },
    { source: 'Peer-reviewed publications (12m)',     us: '41%', compA: '31%', compB: '19%', compC: '9%',  trend: 'up'   },
    { source: 'KOL active endorsements',              us: '57%', compA: '24%', compB: '13%', compC: '6%',  trend: 'up'   },
    { source: 'X / LinkedIn mentions (gMG/CIDP)',     us: '44%', compA: '38%', compB: '12%', compC: '6%',  trend: 'flat' },
    { source: 'Patient advocacy channels (SC/home)',  us: '63%', compA: '19%', compB: '11%', compC: '7%',  trend: 'up'   },
  ],
};

export const VEGA_SENTIMENT_VELOCITY = [
  { kol: 'Gil Wolfe',          score: 88, change30d: '+2.8', velocity: '+1.1 ↑↑', interpretation: 'Strongly positive — AAN advisory board anchor; SC modality leadership narrative well-received' },
  { kol: 'David Lacomis',      score: 48, change30d: '-9.2', velocity: '-2.3 ↓↓', interpretation: 'Worsening fast — public SC scepticism vs private positivity divergence; urgent re-engagement needed' },
  { kol: 'Angela Vincent',     score: 86, change30d: '+1.9', velocity: '+0.7 ↑',  interpretation: 'Steady positive — FcRn biology alignment strong; prioritise European KOL amplification at EAN' },
  { kol: 'David Kuter',        score: 84, change30d: '+1.3', velocity: '+0.5 ↑',  interpretation: 'Stable — ITP FcRn positioning robust; IMAAVY readout may create near-term differentiation need' },
];

export const VEGA_CARE_GAP_CLOSURE = [
  { gap: 'IVIg-to-SC transition rate at community neurology', linkedMO: 'MO1',  baseline: '21%',     current: '34% (+13pts)',    patientsImpacted: '~280 additional patients accessing home SC per quarter' },
  { gap: 'Time to CIDP FcRn treatment (diagnosis → Rx)',      linkedMO: 'MO2',  baseline: '9.4 wks', current: '7.1 wks (-2.3w)', patientsImpacted: '~160 patients receiving earlier targeted therapy' },
  { gap: 'Vyvgart Hytrulo HCP awareness (community neuro)',   linkedMO: 'MO4',  baseline: '31%',     current: '54% (+23pts)',    patientsImpacted: 'SC modality access expanding beyond academic centres' },
];

export const VEGA_ROMI = {
  netValueCreated: '$21.3M',
  roiPct: '+238%',
  returnPerPound: '$3.38',
  rows: [
    { category: 'Vyvgart Hytrulo SC prescription growth attributed to MA', value: '$13.1M', methodology: 'HCPs with high MSL engagement show 2.7× higher SC conversion rate — difference-in-difference vs matched controls' },
    { category: 'CIDP earlier-line treatment access (IVIg gap)',           value: '$4.4M',  methodology: 'Incremental patients receiving Hytrulo as first targeted therapy through earlier-line messaging; avg treatment value applied' },
    { category: 'FcRn pipeline HCP priming (empasiprubart)',               value: '$6.1M',  methodology: 'Estimated launch-quarter revenue uplift from pre-launch KOL engagement in nephrology (LN/MN) and neuroimmunology' },
    { category: 'Total MA investment',                                     value: '-$4.3M', methodology: 'Full Medical Affairs budget — field team, advisory boards, congress, scientific exchange, content' },
  ],
};

export const VEGA_IMPACT_INDEX = {
  overall: 76,
  vsQ4: '+12',
  target: 82,
  dimensions: [
    { dim: 'Execution excellence',      score: 83, commentary: 'MSL interaction volume above target; quality gap in Southeast region being addressed with LP3 competitor differentiation protocol' },
    { dim: 'External ecosystem impact', score: 81, commentary: '+22% KOL network expansion including 3 emerging CIDP digital influencers; 2 new FcRn pipeline nephrology KOLs mapped' },
    { dim: 'HCP practice change',       score: 77, commentary: '34% sustained SC practice change vs 22% industry average; CIDP earlier-line positioning is the primary growth driver' },
    { dim: 'Patient care gap closure',  score: 73, commentary: 'IVIg-to-SC conversion +13pts, CIDP time-to-treatment -2.3 weeks; empasiprubart pipeline engagement baseline established' },
    { dim: 'Social signal intelligence', score: 64, commentary: 'New capability — social listening tracking 19 HCP accounts and 4 patient advocacy communities; LP3 competitor alignment protocol in rollout' },
  ],
};
