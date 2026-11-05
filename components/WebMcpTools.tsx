"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { container } from "@/lib/container";
import { buildHomeMarkdown } from "@/lib/agentContent";
import { buildAgentContentInput } from "@/lib/agentContentInput";
import { AGENT_PATHS, SITE_URL, absoluteUrl } from "@/lib/site";

const text = (value: string): ModelContextToolResult => ({ content: [{ type: "text", text: value }] });

/**
 * Registers read-only WebMCP tools (navigator.modelContext) so an in-browser
 * agent can query the portfolio without scraping the DOM. No-op in browsers
 * that do not expose the API. Re-registers when the UI language changes so
 * results follow the visitor's language.
 */
export default function WebMcpTools() {
    const { language } = useLanguage();

    useEffect(() => {
        const modelContext = navigator.modelContext;
        if (!modelContext || typeof modelContext.registerTool !== "function") return;

        const tools: ModelContextTool[] = [
            {
                name: "get_profile_summary",
                description:
                    "Return Tom Bertomeu's portfolio homepage as Markdown: who he is, his experience, featured projects and contact details.",
                inputSchema: { type: "object", properties: {} },
                execute: () => text(buildHomeMarkdown(buildAgentContentInput(language))),
            },
            {
                name: "list_projects",
                description: "List Tom Bertomeu's projects with year, tagline, technologies, status and public link when there is one.",
                inputSchema: {
                    type: "object",
                    properties: {
                        featuredOnly: { type: "boolean", description: "Only return the highlighted projects shown on the homepage." },
                    },
                },
                execute: (input) => {
                    const projects = input.featuredOnly
                        ? container.getFeaturedProjects(language)
                        : container.getAllProjects(language);
                    return text(
                        JSON.stringify(
                            projects.map((p) => ({
                                id: p.id,
                                title: p.title,
                                tagline: p.tagline,
                                year: p.year,
                                madeAt: p.madeAt,
                                status: p.status ?? "public",
                                link: p.link,
                                technologies: (p.badges ?? []).map((b) => b.text),
                            })),
                            null,
                            2,
                        ),
                    );
                },
            },
            {
                name: "get_contact_details",
                description: "Return the ways to contact Tom Bertomeu: email, GitHub, LinkedIn, CV and the machine-readable site files.",
                inputSchema: { type: "object", properties: {} },
                execute: () => {
                    const profile = container.getProfile();
                    return text(
                        JSON.stringify(
                            {
                                email: profile.email,
                                github: profile.github,
                                linkedin: profile.linkedin,
                                cv: absoluteUrl(`/cv/BERTOMEU_TOM-CV_Portfolio_${language.toUpperCase()}.pdf`),
                                website: SITE_URL,
                                llmsTxt: absoluteUrl(AGENT_PATHS.llms),
                            },
                            null,
                            2,
                        ),
                    );
                },
            },
        ];

        for (const tool of tools) modelContext.registerTool(tool);

        return () => {
            if (typeof modelContext.unregisterTool !== "function") return;
            for (const tool of tools) modelContext.unregisterTool(tool.name);
        };
    }, [language]);

    return null;
}
