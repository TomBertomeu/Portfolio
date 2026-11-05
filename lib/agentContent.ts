import type { Project } from "@/types/project";
import type { Experience } from "@/types/experience";
import type { Profile } from "@/types/profile";
import type { Translations } from "@/lib/i18n";
import { AGENT_PATHS, SITE_NAME, SITE_PATHS, absoluteUrl } from "@/lib/site";

/**
 * Everything needed to render the agent-facing text files (llms.txt and the
 * Markdown alternates). Pure data in, string out: no framework, no I/O.
 */
export interface AgentContentInput {
    profile: Profile;
    projects: Project[];
    experiences: Experience[];
    t: Translations;
    /** Language code the texts are written in, e.g. "fr". */
    lang: string;
}

const SEPARATOR = "\n\n";

function heroTitle(t: Translations): string {
    return `${t.hero.headline} ${t.hero.headlineAccentParenthetical}${t.hero.headlineAccentRest}`.trim();
}

function projectStatusLabel(project: Project, t: Translations): string | undefined {
    if (project.status === "private") return t.projects.statusPrivate;
    if (project.status === "wip") return t.projects.statusWip;
    return undefined;
}

function projectOutcome(project: Project, t: Translations): string {
    if (project.link) {
        return `[${project.linkLabel ?? t.projectsPage.table.viewProject}](${project.link})`;
    }
    return projectStatusLabel(project, t) ?? "";
}

function projectLine(project: Project, t: Translations): string {
    const parts: string[] = [`**${project.title ?? project.id}**`];
    if (project.year) parts[0] += ` (${project.year})`;
    if (project.madeAt) parts.push(project.madeAt);
    if (project.tagline) parts.push(project.tagline);
    const outcome = projectOutcome(project, t);
    if (outcome) parts.push(outcome);
    const tech = (project.badges ?? []).map((b) => b.text);
    if (tech.length) parts.push(tech.join(", "));
    return `- ${parts.join(" — ")}`;
}

function contactList(profile: Profile): string {
    return [
        `- E-mail : [${profile.email}](mailto:${profile.email})`,
        `- GitHub : [${profile.githubHandle}](${profile.github})`,
        `- LinkedIn : [${profile.linkedinName}](${profile.linkedin})`,
    ].join("\n");
}

function cvLink(lang: string): string {
    const upper = lang.toUpperCase();
    return `- CV (PDF, ${upper}) : ${absoluteUrl(`/cv/BERTOMEU_TOM-CV_Portfolio_${upper}.pdf`)}`;
}

/** llms.txt per https://llmstxt.org: H1, blockquote summary, then link sections. */
export function buildLlmsTxt({ profile, projects, experiences, t, lang }: AgentContentInput): string {
    const current = experiences.find((e) => e.current);
    const summary = current
        ? `${current.title} — ${current.company}. ${t.hero.subtitle}`
        : `${t.about.role}. ${t.hero.subtitle}`;

    const pages = [
        `- [${t.nav.home}](${absoluteUrl(AGENT_PATHS.homeMarkdown)}) : ${t.hero.subtitle}`,
        `- [${t.nav.projects}](${absoluteUrl(AGENT_PATHS.projectsMarkdown)}) : ${t.projectsPage.subtitle}`,
        `- [${t.legal.title}](${absoluteUrl(SITE_PATHS.legal)}) : ${t.legal.summary}`,
    ].join("\n");

    const linkedProjects = projects
        .filter((p) => p.link)
        .map((p) => {
            const description = p.tagline ?? p.linkLabel;
            return `- [${p.title ?? p.id}](${p.link})${description ? ` : ${description}` : ""}`;
        })
        .join("\n");

    return [
        `# ${SITE_NAME}`,
        `> ${summary}`,
        `${t.about.subtitle}\n\n${t.llms.languagesNote}`,
        `## ${t.llms.pagesHeading}\n\n${pages}`,
        `## ${t.nav.projects}\n\n${linkedProjects}`,
        `## ${t.nav.contact}\n\n${contactList(profile)}`,
        `## ${t.llms.optionalHeading}\n\n${cvLink(lang)}\n- HTML : ${absoluteUrl(SITE_PATHS.home)}\n- Sitemap : ${absoluteUrl("/sitemap.xml")}`,
    ].join(SEPARATOR) + "\n";
}

/** Markdown twin of the homepage: hero, about, experience, featured projects, contact. */
export function buildHomeMarkdown({ profile, projects, experiences, t }: AgentContentInput): string {
    const featured = projects.filter((p) => p.featured);

    const experienceBlocks = experiences
        .map((e) => {
            const company = e.link ? `[${e.company}](${e.link})` : e.company;
            const tech = e.technologies.length ? `\n\n${t.projectsPage.table.tech} : ${e.technologies.join(", ")}` : "";
            return `### ${e.title} — ${company}\n\n*${e.period}*\n\n${e.description}${tech}`;
        })
        .join(SEPARATOR);

    return [
        `# ${SITE_NAME} — ${t.about.role}`,
        `> ${heroTitle(t)}\n>\n> ${t.hero.subtitle}`,
        `## ${t.nav.about}\n\n${t.about.subtitle}`,
        `## ${t.experience.title}\n\n${experienceBlocks}`,
        `## ${t.projects.title}\n\n${featured.map((p) => projectLine(p, t)).join("\n")}\n\n${t.projects.seeAll} : ${absoluteUrl(AGENT_PATHS.projectsMarkdown)}`,
        `## ${t.contact.title}\n\n${t.contactForm.infoSubtitle}\n\n${contactList(profile)}`,
    ].join(SEPARATOR) + "\n";
}

/** Markdown twin of /projects: every project as a table row. */
export function buildProjectsMarkdown({ projects, t }: AgentContentInput): string {
    const header =
        `| ${t.projectsPage.table.year} | ${t.projectsPage.table.project} | ${t.projectsPage.table.madeAt} | ${t.projectsPage.table.tech} | ${t.projectsPage.table.view} |\n` +
        "|---|---|---|---|---|";
    const rows = projects
        .map((p) => {
            const title = p.tagline ? `**${p.title ?? p.id}** — ${p.tagline}` : `**${p.title ?? p.id}**`;
            const tech = (p.badges ?? []).map((b) => b.text).join(", ");
            return `| ${p.year ?? ""} | ${title} | ${p.madeAt ?? ""} | ${tech} | ${projectOutcome(p, t)} |`;
        })
        .join("\n");

    return [
        `# ${t.projectsPage.title}`,
        `> ${t.projectsPage.subtitle}`,
        `${header}\n${rows}`,
        `${t.projectsPage.backToHome} : ${absoluteUrl(AGENT_PATHS.homeMarkdown)}`,
    ].join(SEPARATOR) + "\n";
}
