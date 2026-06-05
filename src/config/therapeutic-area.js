// Therapeutic area — Demo Brief §3.
// Default fill reflects Alexion (rare hematology/neurology).

export const THERAPEUTIC_AREA = {
  name: 'Immunology — Neuromuscular & Autoimmune',
  subIndications: ['gMG', 'CIDP', 'ITP', 'IIM/Myositis', 'TED', 'MN', 'MMN'],
  competitors: [
    { name: 'Rystiggo', company: 'UCB', moA: 'FcRn antagonist (rozanolixizumab)', posture: 'Direct FcRn competitor in gMG' },
    { name: 'Nipocalimab', company: 'Johnson & Johnson', moA: 'FcRn antagonist', posture: 'Phase 3, gMG and other autoimmune' },
    { name: 'Inebilizumab (Uplizna)', company: 'Amgen/Horizon', moA: 'Anti-CD19 B-cell depletion', posture: 'NMOSD; emerging gMG data' },
    { name: 'Avacopan (Tavneos)', company: 'Amgen', moA: 'C5aR1 antagonist', posture: 'ANCA vasculitis; adjacent complement space' },
  ],
  advocacyOrgs: ['Myasthenia Gravis Foundation of America (MGFA)', 'GBS/CIDP Foundation International', 'Immune Deficiency Foundation'],
};
