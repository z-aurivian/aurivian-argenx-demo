// Insight-to-Impact — Vision Doc Module 2 (Insights to Action) impact view.
// Surfaces the lineage from a captured insight → action taken → measurable
// outcome, with timeframe and impact score — argenx demo.

export const INSIGHT_TO_IMPACT = [
  {
    id: 'i2i-1',
    insight: 'Community neurologists request an SC conversion narrative for stable IV patients.',
    action: 'Community-facing IV→SC Hytrulo conversion narrative deployed to the MSL field team across NA + EU5.',
    outcome: '+16% conversion-conversation rate in tracked accounts; home-injection enrollment inquiries up 1.8×.',
    timeframe: '6 weeks',
    impactScore: 8,
    relatedInsight: 'AI1',
    relatedMO: 'MO1',
  },
  {
    id: 'i2i-2',
    insight: 'CIDP neurologists want head-to-head framing before earlier-line positioning.',
    action: 'ADHERE post-hoc treatment-naïve sub-analysis commissioned; MSL briefing deck built around the 87.5% early-benefit finding.',
    outcome: 'Adopted by 9 of 14 targeted CIDP KOLs in Q2 2026; earlier-line conversation rate up in community accounts.',
    timeframe: '8 weeks',
    impactScore: 7,
    relatedInsight: 'AI2',
    relatedMO: 'MO2',
  },
  {
    id: 'i2i-3',
    insight: 'Home self-administration training gap surfaced via MSL and patient-support interactions.',
    action: 'Patient + HCP self-injection confidence toolkit co-created with the patient support program; distributed to the top 20 infusion-to-home accounts.',
    outcome: 'Self-injection confidence score up from 58% to 74% in surveyed patients; 6 accounts completed full transition.',
    timeframe: '10 weeks',
    impactScore: 6,
    relatedInsight: 'AI4',
    relatedMO: 'MO1',
  },
];
