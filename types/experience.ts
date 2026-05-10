export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education";
  current?: boolean;
  technologies: string[];
  link?: string;
}

export interface ExperienceData extends Omit<Experience, "title" | "period" | "description"> {
  title: { fr: string; en: string };
  period: { fr: string; en: string };
  description: { fr: string; en: string };
}
