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
