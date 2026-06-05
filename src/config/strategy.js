// Strategic framework — Demo Brief §4.
// This is NOVA's spine: ISP → POA (Medical Objectives) → Listening
// Priorities → KIQs / KITs. Drives the Strategy-to-Action surface and the
// coverage scoring displayed on the Command Center.
//
// Default fill: Alexion (template example). Overwrite per demo.

export const ISP_PILLARS = [
  { id: 'p1', title: 'Drive Vyvgart Hytrulo as the preferred SC efgartigimod formulation',  description: 'Establish self-administration at home as the clinical standard; generate real-world IV vs SC comparative insights.' },
  { id: 'p2', title: 'Lead the CIDP treatment paradigm with efgartigimod',                  description: 'Build scientific consensus for efgartigimod as an early-line option in CIDP; address evidence gaps vs IVIG and rituximab.' },
  { id: 'p3', title: 'Expand FcRn platform awareness across pipeline indications',           description: 'Educate on FcRn biology in IIM, TED, MN and position empasiprubart (ARGX-117) for Phase 3 readout.' },
  { id: 'p4', title: 'Generate and communicate real-world evidence at scale',                description: 'Leverage post-launch registry data to reinforce long-term safety and efficacy across gMG and CIDP.' },
];

export const MEDICAL_OBJECTIVES = [
  { id: 'MO1', name: 'SC modality adoption',       description: 'Drive understanding of IV vs SC efgartigimod differences; support transition to Hytrulo home self-administration where appropriate.', ispPillarRef: 'p1' },
  { id: 'MO2', name: 'CIDP evidence generation',   description: 'Disseminate ADHERE trial data; surface HCP questions on place-in-therapy vs IVIG and rituximab.', ispPillarRef: 'p2' },
  { id: 'MO3', name: 'Pipeline KOL engagement',    description: 'Identify and engage neuromuscular and rheumatology KOLs on empasiprubart Phase 3 trial design and FcRn pipeline.', ispPillarRef: 'p3' },
  { id: 'MO4', name: 'RWE dissemination',          description: 'Capture and share real-world long-term outcomes data from gMG and CIDP registries at key congresses.', ispPillarRef: 'p4' },
  { id: 'MO5', name: 'Access & reimbursement',     description: 'Understand and address payer barriers to SC efgartigimod home administration; surface regional access gaps.', ispPillarRef: 'p1' },
];

export const LISTENING_PRIORITIES = [
  { id: 'LP1', name: 'IV vs SC preference drivers',    moRef: 'MO1', kiq: 'What clinical and patient factors are driving or blocking transition from IV to SC efgartigimod?',                 kits: ['MSL field report', 'Ad board summary', 'Patient survey'] },
  { id: 'LP2', name: 'CIDP place-in-therapy',          moRef: 'MO2', kiq: 'How are neurologists positioning efgartigimod relative to IVIG and rituximab in newly diagnosed CIDP?',           kits: ['Congress debrief', 'KOL advisory board', 'Med Info query log'] },
  { id: 'LP3', name: 'Home admin confidence',          moRef: 'MO1', kiq: 'What training and support do patients and HCPs need to feel confident with prefilled syringe self-administration?', kits: ['MSL interaction log', 'Patient support program data'] },
  { id: 'LP4', name: 'Pipeline KOL landscape',         moRef: 'MO3', kiq: 'Which emerging KOLs in neuromuscular and rheumatology are shaping FcRn platform discourse?',                      kits: ['Publication analysis', 'Congress speaker tracking'] },
  { id: 'LP5', name: 'Access & reimbursement gaps',    moRef: 'MO5', kiq: 'Where are payers creating barriers to SC efgartigimod home administration, and which patient segments are most affected?', kits: ['Payer landscape report', 'MSL access log'] },
  { id: 'LP6', name: 'RWE gap identification',         moRef: 'MO4', kiq: 'What long-term outcome questions remain unanswered in gMG and CIDP registries?',                                   kits: ['Registry data summary', 'Congress abstract review'] },
];

// Coverage score per MO at the moment of the demo.
export const COVERAGE_TARGETS = {
  MO1: 'Sufficient',
  MO2: 'Low',
  MO3: 'Gap',
  MO4: 'Low',
  MO5: 'Sufficient',
};
