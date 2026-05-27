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
