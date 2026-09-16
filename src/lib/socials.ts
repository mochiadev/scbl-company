export interface SocialLink {
  name: string;
  href: string;   // empty = not live yet — hidden from Footer icons and schema `sameAs`
  icon: string;
}

// Fill in `href` for each platform once the real profile exists. Both the
// Footer icon row and BaseLayout's JSON-LD `sameAs` read from this one list,
// so a single edit here activates both.
export const socials: SocialLink[] = [
  { name: 'LinkedIn', href: '', icon: 'ph:linkedin-logo-thin' },
  { name: 'Facebook', href: '', icon: 'ph:facebook-logo-thin' },
  { name: 'Instagram', href: '', icon: 'ph:instagram-logo-thin' },
];

export const liveSocials = socials.filter((s) => s.href);
