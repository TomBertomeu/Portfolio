import { container } from "@/lib/container";
import { getTranslations } from "@/lib/i18n";
import { DEFAULT_LANGUAGE } from "@/types/language";
import type { AgentContentInput } from "@/lib/agentContent";

/** Gathers the prerendered-language data the agent text files are built from. */
export function buildAgentContentInput(lang = DEFAULT_LANGUAGE): AgentContentInput {
    return {
        profile: container.getProfile(),
        projects: container.getAllProjects(lang),
        experiences: container.getAllExperiences(lang),
        t: getTranslations(lang),
        lang,
    };
}
