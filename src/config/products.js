// Portfolio — Demo Brief §2.
// Products surface in the header selector and scope most agent views.
// Optional: platformLens for customers that track a cross-indication
// platform/mechanism (e.g. Dyne FORCE™).

export const PRODUCT_OPTIONS = [
  {
    id: 'vyvgart',
    name: 'Vyvgart',
    generic: 'efgartigimod alfa',
    stage: 'Launched',
    indications: ['gMG', 'ITP'],
    administrationRoute: 'IV infusion',
  },
  {
    id: 'vyvgart-hytrulo',
    name: 'Vyvgart Hytrulo',
    generic: 'efgartigimod alfa + hyaluronidase',
    stage: 'Launched',
    indications: ['gMG', 'CIDP'],
    administrationRoute: 'SC injection / self-administration',
  },
  {
    id: 'empasiprubart',
    name: 'Empasiprubart',
    generic: 'ARGX-117 (anti-C2)',
    stage: 'Phase 3',
    indications: ['MMN', 'DGF', 'LN'],
    administrationRoute: 'IV / SC (TBD)',
  },
];

// FcRn platform lens — efgartigimod is the anchor molecule across IV and SC formulations.
export const PLATFORM_LENS = {
  name: 'FcRn Platform',
  description: 'Neonatal Fc receptor (FcRn) blockade reduces pathogenic IgG across multiple autoimmune diseases.',
  appliesToProducts: ['vyvgart', 'vyvgart-hytrulo', 'empasiprubart'],
};
