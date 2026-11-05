import type { Profile } from "@/types/profile";
import type { Project } from "@/types/project";
import type { Experience } from "@/types/experience";
import type { Translations } from "@/lib/i18n";
import { SITE_DESCRIPTION, SITE_NAME, SITE_PATHS, SITE_TITLE, SITE_URL, absoluteUrl } from "@/lib/site";

/**
 * JSON-LD (schema.org) builders. This is a personal portfolio, so the central
 * entity is a `Person`, not an `Organization`: the WebSite is published by that
 * person and the homepage is their ProfilePage.
 */
export type JsonLdNode = Record<string, unknown>;

export interface JsonLdGraph {
    "@context": "https://schema.org";
    "@graph": JsonLdNode[];
}

export interface StructuredDataInput {
    profile: Profile;
    projects: Project[];
    experiences: Experience[];
    t: Translations;
    lang: string;
}

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

function organization(name: string, url?: string): JsonLdNode {
    return { "@type": "Organization", name, ...(url ? { url } : {}) };
}

export function buildPerson({ profile, experiences, t }: StructuredDataInput): JsonLdNode {
    const current = experiences.find((e) => e.current && e.type === "work");
    const knowsAbout = Array.from(new Set(experiences.flatMap((e) => e.technologies)));

    return {
        "@type": "Person",
        "@id": PERSON_ID,
        name: SITE_NAME,
        givenName: "Tom",
        familyName: "Bertomeu",
        url: SITE_URL,
        image: absoluteUrl("/images/profile.png"),
        jobTitle: t.about.role,
        description: t.hero.subtitle,
        email: `mailto:${profile.email}`,
        sameAs: [profile.github, profile.linkedin],
        ...(current ? { worksFor: organization(current.company, current.link) } : {}),
        alumniOf: {
            "@type": "EducationalOrganization",
            name: t.about.school,
        },
        knowsAbout,
        knowsLanguage: ["fr", "en"],
    };
}

export function buildWebSite(): JsonLdNode {
    return {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: ["fr", "en"],
        publisher: { "@id": PERSON_ID },
    };
}

function webPage(type: string, path: string, name: string, description: string, lang: string): JsonLdNode {
    const url = absoluteUrl(path);
    return {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: lang,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
    };
}

function projectNode(project: Project): JsonLdNode {
    return {
        "@type": "CreativeWork",
        name: project.title ?? project.id,
        ...(project.tagline ? { description: project.tagline } : {}),
        ...(project.link ? { url: project.link } : {}),
        ...(project.year ? { dateCreated: project.year } : {}),
        ...(project.image ? { image: absoluteUrl(project.image) } : {}),
        ...(project.badges?.length ? { keywords: project.badges.map((b) => b.text).join(", ") } : {}),
        ...(project.madeAt ? { sourceOrganization: organization(project.madeAt) } : {}),
        creator: { "@id": PERSON_ID },
    };
}

function projectList(projects: Project[]): JsonLdNode {
    return {
        "@type": "ItemList",
        itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: projectNode(project),
        })),
    };
}

/** Homepage: Person + WebSite + ProfilePage whose main entity is the person. */
export function buildHomeGraph(input: StructuredDataInput): JsonLdGraph {
    const { t, lang } = input;
    return {
        "@context": "https://schema.org",
        "@graph": [
            buildPerson(input),
            buildWebSite(),
            {
                ...webPage("ProfilePage", SITE_PATHS.home, SITE_TITLE, t.hero.subtitle, lang),
                mainEntity: { "@id": PERSON_ID },
                hasPart: projectList(input.projects.filter((p) => p.featured)),
            },
        ],
    };
}

/** /projects: CollectionPage listing every project as a CreativeWork. */
export function buildProjectsGraph(input: StructuredDataInput): JsonLdGraph {
    const { t, lang } = input;
    return {
        "@context": "https://schema.org",
        "@graph": [
            buildPerson(input),
            buildWebSite(),
            {
                ...webPage("CollectionPage", SITE_PATHS.projects, t.projectsPage.title, t.projectsPage.subtitle, lang),
                mainEntity: projectList(input.projects),
            },
        ],
    };
}

/** /legal: plain WebPage about the person. */
export function buildLegalGraph(input: StructuredDataInput): JsonLdGraph {
    const { t, lang } = input;
    return {
        "@context": "https://schema.org",
        "@graph": [
            buildPerson(input),
            buildWebSite(),
            webPage("WebPage", SITE_PATHS.legal, t.legal.title, t.legal.summary, lang),
        ],
    };
}
