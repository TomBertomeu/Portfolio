import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import JsonLd from "@/components/JsonLd";
import { buildHomeGraph } from "@/lib/structuredData";
import { buildAgentContentInput } from "@/lib/agentContentInput";
import { AGENT_PATHS, SITE_PATHS } from "@/lib/site";

export const metadata: Metadata = {
    alternates: {
        canonical: SITE_PATHS.home,
        types: { "text/markdown": AGENT_PATHS.homeMarkdown },
    },
};

// Server component shell: emits the JSON-LD into the prerendered HTML, then
// hands over to the client-side page (i18n, animations, contact form).
export default function Home() {
    return (
        <>
            <JsonLd data={buildHomeGraph(buildAgentContentInput())} />
            <HomePage />
        </>
    );
}
