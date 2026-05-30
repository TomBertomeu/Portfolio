export interface ProjectBadge {
  iconId: string;
  text: string;
  tier?: "primary" | "secondary";
}

export interface Project {
  id: string;
  title?: string;
  tagline?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  link?: string;
  badges?: ProjectBadge[];
  featured?: boolean;
  year?: string;
  madeAt?: string;
}
