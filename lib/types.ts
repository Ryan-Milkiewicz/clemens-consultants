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

export type ServicesPage = {
  heading: string;
  subheading: string;
  sections: {
    title: string;
    description: string;
    photo: any;
    includes: string;
    items: string[];
    closingStatement: string;
  }[];
};
