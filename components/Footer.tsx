"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { container } from "@/lib/container";

// About, contact and legal links on every page: humans use them, and agents
// use them to decide whether the site belongs to a real person.
const FOOTER_LINKS = [
    { href: "/#about", key: "nav.about" },
    { href: "/projects", key: "nav.projects" },
    { href: "/#contact", key: "nav.contact" },
    { href: "/legal", key: "legal.title" },
] as const;

const ICON_LINK_CLASS = "inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:text-[var(--primary-blue)] hover:bg-accent transition-colors";

export default function Footer() {
    const { t } = useLanguage();
    const profile = container.getProfile();

    return (
        <footer className="py-6 bg-background border-t border-border">
            <div className="mx-auto max-w-5xl px-4 flex flex-col items-center gap-3">
                <nav aria-label={t("footer.navLabel")} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
                    {FOOTER_LINKS.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-[var(--primary-blue)] transition-colors">
                            {t(link.key)}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-1">
                    <a href={`mailto:${profile.email}`} className={ICON_LINK_CLASS} aria-label={profile.email} title={profile.email}>
                        <Mail className="h-4 w-4" />
                    </a>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer me" className={ICON_LINK_CLASS} aria-label="GitHub" title={profile.githubHandle}>
                        <Github className="h-4 w-4" />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer me" className={ICON_LINK_CLASS} aria-label="LinkedIn" title={profile.linkedinName}>
                        <Linkedin className="h-4 w-4" />
                    </a>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                    {t("footer.credits")}
                </p>
            </div>
        </footer>
    );
}
