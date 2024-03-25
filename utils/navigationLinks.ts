export interface NavigationLink {
  name: string;
  href: string;
}

export const navigationLinks: NavigationLink[] = [
  {
    name: "Our company",
    href: "/our-company",
  },

  {
    name: "Locations",
    href: "/locations",
  },

  {
    name: "Contact",
    href: "/contact",
  },
];