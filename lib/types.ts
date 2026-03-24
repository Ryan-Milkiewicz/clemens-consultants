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

export type AboutPage = {
  heading: string;
  subheading?: string;
  image?: {
    asset: {
      url: string;
    };
  };
};

export type OurFirmPage = {
  heading: string;
  subheading?: string;
  servicesList?: string[];
  closingStatement?: string;
  image?: {
    asset: {
      url: string;
    };
  };
};

export type LeadershipPage = {
  pageTitle: string;
  teamMembers?: {
    name: string;
    credentials?: string;
    role?: string;
    bio?: string;
    experienceAreas?: string[];
    closingStatement?: string;
    photo?: {
      asset?: {
        url?: string;
      };
    };
  }[];
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

export type IndustrySection = {
  heading: string;
  subheading: string;
  sections: {
    title: string;
    description: string;
    photo: string;
  }[];
};
