export type HeroSection = {
  _id: string;
  headlineTitle: string;
  subtitle: string;
  midlineText: string;
  image: any;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};
