import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import JsonLd from "@/components/JsonLd";
import { buildLegalGraph } from "@/lib/structuredData";
import { buildAgentContentInput } from "@/lib/agentContentInput";
import { getTranslations } from "@/lib/i18n";
import { DEFAULT_LANGUAGE } from "@/types/language";
import { SITE_PATHS } from "@/lib/site";

const t = getTranslations(DEFAULT_LANGUAGE);

export const metadata: Metadata = {
    title: t.legal.title,
    description: t.legal.summary,
    alternates: { canonical: SITE_PATHS.legal },
};

export default function Legal() {
    return (
        <>
            <JsonLd data={buildLegalGraph(buildAgentContentInput())} />
            <LegalPage />
        </>
    );
}
