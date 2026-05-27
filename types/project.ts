export interface ProjectBadge {
  iconId: string;
  text: string;
  tier?: "primary" | "secondary";
}

export type FeatureStatus = "completed" | "in-progress" | "planned";

export interface ProjectFeature {
  text: string;
  status: FeatureStatus;
}

export interface Project {
  id: string;
  title?: string;
  tagline?: string;
  description?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  link?: string;
  badges?: ProjectBadge[];
  featured?: boolean;
  year?: string;
  madeAt?: string;
  gallery?: string[];
  features?: ProjectFeature[];
  challenges?: string;
  solutions?: string;
  role?: string;
  team?: string;
  context?: string;
  demoVideo?: string;
}

type LocalizedField =
  | "title"
  | "tagline"
  | "description"
  | "madeAt"
  | "features"
  | "challenges"
  | "solutions"
  | "role"
  | "team"
  | "context";

export interface ProjectData extends Omit<Project, LocalizedField> {
  title?: { fr: string; en: string };
  tagline?: { fr: string; en: string };
  description?: { fr: string; en: string };
  madeAt?: { fr: string; en: string };
  features?: { fr: ProjectFeature[]; en: ProjectFeature[] };
  challenges?: { fr: string; en: string };
  solutions?: { fr: string; en: string };
  role?: { fr: string; en: string };
  team?: { fr: string; en: string };
  context?: { fr: string; en: string };
}
