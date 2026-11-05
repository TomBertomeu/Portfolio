/** Site-wide identity constants shared by metadata, structured data and agent files. */
export const SITE_URL = "https://tom-bertomeu.com";
export const SITE_NAME = "Tom Bertomeu";
export const SITE_TITLE = "Tom Bertomeu, développeur Fullstack";
export const SITE_DESCRIPTION =
    "Tom Bertomeu, développeur Fullstack en alternance et étudiant en Mastère Expert en Architecture et Développement Logiciel. Portfolio professionnel.";
export const SITE_LOCALE = "fr_FR";

/** Paths of the human-readable pages, used by the sitemap, llms.txt and structured data. */
export const SITE_PATHS = {
    home: "/",
    projects: "/projects/",
    legal: "/legal/",
} as const;

/** Machine-readable alternates served next to the HTML pages. */
export const AGENT_PATHS = {
    llms: "/llms.txt",
    homeMarkdown: "/index.md",
    projectsMarkdown: "/projects.md",
} as const;

export function absoluteUrl(path: string): string {
    return new URL(path, SITE_URL).toString();
}
