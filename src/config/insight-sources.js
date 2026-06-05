// Insight Source Value Matrix — argenx demo.
// IVIg transition and FcRn competitor signals are the headline sources.

export const INSIGHT_SOURCES = [
  { id: 'is-1', source: 'MSL Field Reports',            volume: 912,  qualityScore: 81, leadsToActionPct: 41, costPerInsight: 195,  roiScore: 7.6 },
  { id: 'is-2', source: 'Advisory Boards',               volume: 38,   qualityScore: 94, leadsToActionPct: 74, costPerInsight: 4600, roiScore: 8.5 },
  { id: 'is-3', source: 'Congress Feedback',             volume: 264,  qualityScore: 76, leadsToActionPct: 34, costPerInsight: 870,  roiScore: 6.3 },
  { id: 'is-4', source: 'Med Info Inquiries',            volume: 538,  qualityScore: 68, leadsToActionPct: 21, costPerInsight: 49,   roiScore: 7.0 },
  { id: 'is-5', source: 'X / LinkedIn Social Listening', volume: 4817, qualityScore: 56, leadsToActionPct: 24, costPerInsight: 9,    roiScore: 8.1 },
  { id: 'is-6', source: 'Patient Advocacy Monitoring',   volume: 2134, qualityScore: 47, leadsToActionPct: 16, costPerInsight: 7,    roiScore: 6.7 },
];

// KIT Relevance Trend — 6-month relevance score per argenx KIT.
export const KIT_RELEVANCE_TREND = [
  { month: 'Jan 2026', 'IVIg-to-SC Transition': 62, 'CIDP Earlier-Line': 54, 'SC Self-Injection Confidence': 58, 'FcRn Competitor Diff.': 51, 'Payer Site-of-Care': 44 },
  { month: 'Feb 2026', 'IVIg-to-SC Transition': 68, 'CIDP Earlier-Line': 60, 'SC Self-Injection Confidence': 63, 'FcRn Competitor Diff.': 58, 'Payer Site-of-Care': 49 },
  { month: 'Mar 2026', 'IVIg-to-SC Transition': 74, 'CIDP Earlier-Line': 67, 'SC Self-Injection Confidence': 69, 'FcRn Competitor Diff.': 67, 'Payer Site-of-Care': 55 },
  { month: 'Apr 2026', 'IVIg-to-SC Transition': 82, 'CIDP Earlier-Line': 74, 'SC Self-Injection Confidence': 73, 'FcRn Competitor Diff.': 79, 'Payer Site-of-Care': 62 },
  { month: 'May 2026', 'IVIg-to-SC Transition': 89, 'CIDP Earlier-Line': 82, 'SC Self-Injection Confidence': 76, 'FcRn Competitor Diff.': 87, 'Payer Site-of-Care': 69 },
  { month: 'Jun 2026', 'IVIg-to-SC Transition': 96, 'CIDP Earlier-Line': 91, 'SC Self-Injection Confidence': 78, 'FcRn Competitor Diff.': 93, 'Payer Site-of-Care': 74 },
];
