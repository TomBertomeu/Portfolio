export interface ProjectBadge {
  iconId: string;
  text: string;
  tier?: "primary" | "secondary";
}

/** Why a project has no public link: internal/client work, or still being built. */
export type ProjectStatus = "private" | "wip";

export interface Project {
  id: string;
  status?: ProjectStatus;
  title?: string;
  tagline?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  link?: string;
  badges?: ProjectBadge[];
  featured?: boolean;
  year?: string;
  madeAt?: string;
  linkLabel?: string;
}
