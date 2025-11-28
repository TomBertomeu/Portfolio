"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-4 py-12">
                <div className="grid gap-8 md:grid-cols-3 md:gap-12">
                    {/* Brand & Info */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                            Tom<span className="text-[var(--primary-blue)]">.</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            {t("about.subtitle")?.split('\n')[0] || "Fullstack Developer"}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">
                            {t("footer.navigation")}
                        </h3>
                        <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-[var(--primary-blue)] transition-colors w-fit">
                                {t("nav.home")}
                            </Link>
                            <Link href="/#about" className="hover:text-[var(--primary-blue)] transition-colors w-fit">
                                {t("nav.about")}
                            </Link>
                            <Link href="/projects" className="hover:text-[var(--primary-blue)] transition-colors w-fit">
                                {t("nav.projects")}
                            </Link>
                            <Link href="/#contact" className="hover:text-[var(--primary-blue)] transition-colors w-fit">
                                {t("nav.contact")}
                            </Link>
                        </nav>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">
                            {t("footer.socials")}
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/TomBertomeu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-[var(--primary-blue)] hover:text-white transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tom-bertomeu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:tom.bertomeu@edu.univ-fcomte.fr"
                                className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-[var(--primary-green)] hover:text-white transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>
                        &copy; {currentYear} Tom Bertomeu. {t("footer.copyright")}
                    </p>
                    <p className="flex items-center gap-1">
                        Designed & Built with 
                        <span className="text-red-500 animate-pulse">❤</span> 
                        by Tom Bertomeu
                    </p>
                </div>
            </div>
        </footer>
    );
}
