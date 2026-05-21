export type Journey = {
  slug: "decision" | "build" | "operate" | "scale";
  number: string;
  englishName: string;
  arabicName: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  highlighted?: boolean;
  deliverables: string[];
  whatsIncluded: string[];
};

export type Pillar = {
  number: string;
  title: string;
  description: string;
};

export type ValueProp = {
  text: string;
};

export type ClientType = {
  title: string;
  description: string;
  icon: string;
  cta?: boolean;
};

export type Stat = {
  icon: string;
  count: number;
  plus?: boolean;
  label: string;
};

export type Partner = {
  name: string;
  icon: string;
  promo?: {
    title: string;
    description: string;
  };
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string; // ISO
  author: string;
  cover: string; // icon class for now
  tag: string;
};

export type FounderInfo = {
  yearsExperience: number;
  bio: string;
  expertise: string[];
  quote: string;
  quoteTitle: string;
  quoteAuthor: string;
};
