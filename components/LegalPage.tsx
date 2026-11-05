"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { container } from "@/lib/container";
import HeroBackground from "@/components/HeroBackground";
import UnderlineAccent from "@/components/UnderlineAccent";

const LINK_CLASS = "underline underline-offset-4 decoration-border hover:text-[var(--primary-blue)] hover:decoration-current transition-colors";

export default function LegalPage() {
    const { t } = useLanguage();
    const profile = container.getProfile();

    const sections = [
        {
            id: "publisher",
            heading: t("legal.publisherHeading"),
            body: t("legal.publisherBody"),
            extra: (
                <p>
                    {t("legal.publisherContact")}{" "}
                    <a href={`mailto:${profile.email}`} className={LINK_CLASS}>{profile.email}</a>
                </p>
            ),
        },
        {
            id: "hosting",
            heading: t("legal.hostingHeading"),
            body: t("legal.hostingBody"),
            extra: (
                <p>
                    <a href="https://www.hostinger.com/" target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
                        {t("legal.hostingLink")}
                    </a>
                </p>
            ),
        },
        { id: "data", heading: t("legal.dataHeading"), body: t("legal.dataBody") },
        { id: "ip", heading: t("legal.ipHeading"), body: t("legal.ipBody") },
        {
            id: "agents",
            heading: t("legal.agentsHeading"),
            body: t("legal.agentsBody"),
            extra: (
                <p className="flex flex-wrap gap-x-4 gap-y-1">
                    <a href="/robots.txt" className={LINK_CLASS}>robots.txt</a>
                    <a href="/llms.txt" className={LINK_CLASS}>llms.txt</a>
                    <a href="/sitemap.xml" className={LINK_CLASS}>sitemap.xml</a>
                </p>
            ),
        },
    ];

    return (
        <div className="min-h-screen flex flex-col pt-32 relative">
            <HeroBackground />

            <article className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-24">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--primary-blue)] transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    {t("legal.backHome")}
                </Link>

                <h1 className="font-handwritten text-5xl md:text-7xl font-bold mb-6 relative inline-block [text-wrap:balance]">
                    <span className="relative z-10">{t("legal.title")}</span>
                    <UnderlineAccent strong />
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">{t("legal.intro")}</p>

                {sections.map((section) => (
                    <section key={section.id} id={section.id} className="mt-10 space-y-3 text-muted-foreground leading-relaxed">
                        <h2 className="text-2xl font-bold text-foreground">{section.heading}</h2>
                        <p className="whitespace-pre-line [text-wrap:pretty]">{section.body}</p>
                        {section.extra}
                    </section>
                ))}
            </article>
        </div>
    );
}
