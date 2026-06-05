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
    id: 'eular-2025',
    name: 'EULAR 2025',
    fullName: 'European Alliance of Associations for Rheumatology Congress 2025',
    location: 'Barcelona, Spain',
    date: 'Jun 11–14, 2025',
    available: false,
    comingSoon: true,
  },
  { id: 'acr-2025', name: 'ACR 2025', fullName: 'American College of Rheumatology Convergence 2025', location: 'Washington, DC', date: 'Nov 14–19, 2025', available: false, comingSoon: true },
  { id: 'asn-2025', name: 'ASN 2025', fullName: 'American Society of Nephrology Kidney Week 2025', location: 'Philadelphia, PA', date: 'Oct 22–26, 2025', available: false, comingSoon: true },
];
