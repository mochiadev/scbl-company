export interface PillarMeta {
  slug: 'development' | 'construction' | 'engineering' | 'real-estate' | 'management' | 'specialist';
  title: string;
  eyebrow: string;
  href: string;
  icon: string;
  short: string;
}

export const pillars: PillarMeta[] = [
  {
    slug: 'development',
    title: 'Property Development',
    eyebrow: '01 — Development',
    href: '/services/development',
    icon: 'lucide:landmark',
    short: 'Feasibility, master-plan, and end-to-end delivery of luxury residential, commercial, and mixed-use assets.',
  },
  {
    slug: 'construction',
    title: 'Construction Services',
    eyebrow: '02 — Construction',
    href: '/services/construction',
    icon: 'ph:crane-thin',
    short: 'Design-and-build, high-end residential, commercial, structural works, and luxury refurbishment.',
  },
  {
    slug: 'engineering',
    title: 'Engineering Services',
    eyebrow: '03 — Engineering',
    href: '/services/engineering',
    icon: 'ph:blueprint-thin',
    short: 'Structural, civil, MEP, geotechnical, and value-engineering practices under one accountable roof.',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate Services',
    eyebrow: '04 — Real Estate',
    href: '/services/real-estate',
    icon: 'lucide:building-2',
    short: 'Sales, leasing, valuation, advisory, and long-term portfolio stewardship — all on one underwriting discipline.',
  },
  {
    slug: 'management',
    title: 'Project & Construction Management',
    eyebrow: '05 — Management',
    href: '/services/management',
    icon: 'lucide:clipboard-check',
    short: 'Independent project governance — cost, programme, quality, HSE, and risk, from mobilisation to handover.',
  },
  {
    slug: 'specialist',
    title: 'Specialist & Value-Added',
    eyebrow: '06 — Specialist',
    href: '/services/specialist',
    icon: 'ph:diamonds-four-thin',
    short: 'Sustainability, bespoke design, heritage restoration, facilities, and after-sales care.',
  },
];

export const pillarBySlug = new Map(pillars.map((p) => [p.slug, p]));
