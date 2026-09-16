export interface PillarMeta {
  slug: 'development' | 'construction' | 'engineering' | 'real-estate' | 'management' | 'specialist';
  title: string;
  eyebrow: string;
  href: string;
  icon: string;
  short: string;
  ctaHeading: string;
  image?: string;   // only the top-row bento tiles (1–2) render a photo
}

export const pillars: PillarMeta[] = [
  {
    slug: 'development',
    title: 'Property Development',
    eyebrow: '01 — Development',
    href: '/services/development',
    icon: 'lucide:landmark',
    short: 'Feasibility, master-plan, and end-to-end delivery of luxury residential, commercial, and mixed-use assets.',
    ctaHeading: 'Begin a development with the practice.',
    image: 'https://picsum.photos/seed/scbl-development/1600/1200',
  },
  {
    slug: 'construction',
    title: 'Construction Services',
    eyebrow: '02 — Construction',
    href: '/services/construction',
    icon: 'ph:hard-hat-thin',
    short: 'Design-and-build, high-end residential, commercial, structural works, and luxury refurbishment.',
    ctaHeading: 'Begin a build with the practice.',
    image: 'https://picsum.photos/seed/scbl-construction/1600/1200',
  },
  {
    slug: 'engineering',
    title: 'Engineering Services',
    eyebrow: '03 — Engineering',
    href: '/services/engineering',
    icon: 'ph:blueprint-thin',
    short: 'Structural, civil, MEP, geotechnical, and value-engineering practices under one accountable roof.',
    ctaHeading: 'Bring us in before ground breaks.',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate Services',
    eyebrow: '04 — Real Estate',
    href: '/services/real-estate',
    icon: 'lucide:building-2',
    short: 'Sales, leasing, valuation, advisory, and long-term portfolio stewardship — all on one underwriting discipline.',
    ctaHeading: 'Talk to the advisory team.',
  },
  {
    slug: 'management',
    title: 'Project & Construction Management',
    eyebrow: '05 — Management',
    href: '/services/management',
    icon: 'lucide:clipboard-check',
    short: 'Independent project governance — cost, programme, quality, HSE, and risk, from mobilisation to handover.',
    ctaHeading: 'Put governance on your project.',
  },
  {
    slug: 'specialist',
    title: 'Specialist & Value-Added',
    eyebrow: '06 — Specialist',
    href: '/services/specialist',
    icon: 'ph:diamonds-four-thin',
    short: 'Sustainability, bespoke design, heritage restoration, facilities, and after-sales care.',
    ctaHeading: 'Ask about the specialist scope.',
  },
];

export const pillarBySlug = new Map(pillars.map((p) => [p.slug, p]));
