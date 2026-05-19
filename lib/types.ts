import type { Image } from "@sanity/types";
import type { PortableTextBlock } from "next-sanity";

export type HeroSection = {
  _id: string;
  headlineTitle: string;
  subtitle: string;
  midlineText: string;
  image: CustomImage;
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
  image: CustomImage;
};

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  date: Date;
  excerpt: string;
  coverImage: CustomImage;
}

export interface CustomImage extends Image {
  alt: string;
}

export interface FullPost extends BlogPost {
  content: PortableTextBlock[];
}

export type OurApproachPage = {
  heading: string;
  subheading?: string;
  principles?: {
    title: string;
    description?: string;
  }[];
};

export type OurFirmPage = {
  heading: string;
  subheading?: string;
  servicesList?: string[];
  closingStatement?: string;
  image?: CustomImage;
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
    photo?: CustomImage;
  }[];
};

export type ServicesPage = {
  heading: string;
  subheading: string;
  sections: {
    title: string;
    description: string;
    photo: CustomImage;
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
