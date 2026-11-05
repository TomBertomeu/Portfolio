import type { Metadata } from "next";
import ProjectsPage from "@/components/ProjectsPage";
import JsonLd from "@/components/JsonLd";
import { buildProjectsGraph } from "@/lib/structuredData";
import { buildAgentContentInput } from "@/lib/agentContentInput";
import { getTranslations } from "@/lib/i18n";
import { DEFAULT_LANGUAGE } from "@/types/language";
import { AGENT_PATHS, SITE_PATHS } from "@/lib/site";

const t = getTranslations(DEFAULT_LANGUAGE);

export const metadata: Metadata = {
    title: t.projectsPage.title,
    description: t.projectsPage.subtitle,
    alternates: {
        canonical: SITE_PATHS.projects,
        types: { "text/markdown": AGENT_PATHS.projectsMarkdown },
    },
};

export default function Projects() {
    return (
        <>
            <JsonLd data={buildProjectsGraph(buildAgentContentInput())} />
            <ProjectsPage />
        </>
    );
}
