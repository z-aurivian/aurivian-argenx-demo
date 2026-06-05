// Congress roster — Demo Brief §3 (+ §8 for per-congress ARIA data).

export const CONGRESS_OPTIONS = [
  {
    id: 'aan-2025',
    name: 'AAN 2025',
    fullName: 'American Academy of Neurology Annual Meeting 2025',
    location: 'San Diego, CA',
    date: 'Apr 5–9, 2025',
    available: true,
  },
  {
    id: 'ean-2025',
    name: 'EAN 2025',
    fullName: 'European Academy of Neurology Congress 2025',
    location: 'Helsinki, Finland',
    date: 'Jun 21–24, 2025',
    available: true,
  },
  {
    id: 'trend-aan-ean',
    name: 'Trend: AAN → EAN',
    fullName: 'Sentiment trend AAN 2025 to EAN 2025',
    location: '—',
    date: '—',
    available: true,
    isTrend: true,
  },
  {
    id: 'eular-2026',
    name: 'EULAR 2026',
    fullName: 'European Alliance of Associations for Rheumatology Congress 2026',
    location: 'TBD',
    date: 'Jun 2026',
    available: false,
    comingSoon: true,
  },
  { id: 'acr-2026', name: 'ACR 2026', fullName: 'American College of Rheumatology Convergence 2026', location: 'TBD', date: 'Nov 2026', available: false, comingSoon: true },
  { id: 'asn-2026', name: 'ASN 2026', fullName: 'American Society of Nephrology Kidney Week 2026', location: 'TBD', date: 'Oct 2026', available: false, comingSoon: true },
];
