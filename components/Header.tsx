"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageProvider";
import { useScrollY } from "@/hooks/useScrollY";
import { FileText, BookText } from "lucide-react";

const SCROLL_THRESHOLD = 50;

export default function Header() {
    const { t, language } = useLanguage();
    const scrolled = useScrollY() > SCROLL_THRESHOLD;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "py-2 bg-background/80 backdrop-blur-md"
                : "py-4 bg-transparent backdrop-blur-none"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="relative w-10 h-10 hover:opacity-80 transition-opacity">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                    />
                </Link>

                {/* Navigation & Actions */}
                <div className="flex items-center gap-6">
                    {/* Nav Links - Hidden on mobile, visible on md+ */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/#about" className="hover:text-[var(--primary-blue)] transition-all active:scale-95">
                            {t("nav.about") || "À propos"}
                        </Link>
                        <Link href="/#projects" className="hover:text-[var(--primary-blue)] transition-all active:scale-95">
                            {t("nav.projects") || "Projets"}
                        </Link>
                        <Link href="/blog" className="hover:text-[var(--primary-blue)] transition-all active:scale-95">
                            {t("nav.blog") || "Blog"}
                        </Link>
                        <Link href="/#contact" className="hover:text-[var(--primary-blue)] transition-all active:scale-95">
                            {t("nav.contact") || "Contact"}
                        </Link>
                    </nav>

                    {/* Separator */}
                    <div className="hidden md:block h-4 w-px bg-border"></div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        {/* Mobile Blog Link */}
                        <Link
                            href="/blog"
                            className="md:hidden inline-flex items-center justify-center p-2 hover:bg-accent hover:text-accent-foreground active:bg-accent/80 active:scale-95 rounded-md transition-all"
                            title={t("nav.blog") || "Blog"}
                        >
                            <BookText className="w-5 h-5" />
                        </Link>

                        <a
                            href={`/cv/BERTOMEU_TOM-CV_Portfolio_${language.toUpperCase()}.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--primary-blue)] active:scale-95 transition-all mr-2"
                            title={t("about.downloadCv")}
                        >
                            <FileText className="w-4 h-4" />
                            <span className="hidden lg:inline">CV</span>
                        </a>
                        <LanguageSwitcher />
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Animated Border */}
            <div
                className={`absolute bottom-0 left-0 h-[1px] bg-border transition-all duration-500 ease-in-out ${scrolled ? "w-full" : "w-0"
                    }`}
            />
        </header>
    );
}