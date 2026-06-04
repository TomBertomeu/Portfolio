"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageProvider";
import { useScrollY } from "@/hooks/useScrollY";
import { FileText, Menu, X } from "lucide-react";

const SCROLL_THRESHOLD = 50;

const NAV_LINKS = [
    { href: "/#about", key: "nav.about" },
    { href: "/#experience", key: "nav.experience" },
    { href: "/#projects", key: "nav.projects" },
    { href: "/#contact", key: "nav.contact" },
] as const;

export default function Header() {
    const { t, language } = useLanguage();
    const scrolled = useScrollY() > SCROLL_THRESHOLD;
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");
    const cvHref = `/cv/BERTOMEU_TOM-CV_Portfolio_${language.toUpperCase()}.pdf`;

    useEffect(() => {
        const sectionIds = NAV_LINKS.map(l => l.href.replace("/#", ""));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-100px 0px -45% 0px", threshold: 0 }
        );
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
                ${scrolled
                    ? "py-4 bg-background/80 backdrop-blur-sm"
                    : "py-8 bg-transparent backdrop-blur-none"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity">
                    <span className={`logo-gradient font-black uppercase tracking-wider whitespace-nowrap inline-block transition-all duration-500 ease-in-out ${scrolled
                        ? "text-lg sm:text-xl"
                        : "text-2xl sm:text-3xl"
                    }`}>
                        Tom Bertomeu.
                    </span>
                </Link>

                {/* Navigation & Actions */}
                <div className="flex items-center gap-6">
                    {/* Nav Links - Hidden on mobile, visible on md+ */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-black uppercase tracking-wider">
                        {NAV_LINKS.map(link => {
                            const isActive = activeSection === link.href.replace("/#", "");
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    aria-current={isActive ? "location" : undefined}
                                    className={`transition-all active:scale-95 ${isActive ? "text-[var(--primary-blue)]" : "hover:text-[var(--primary-blue)]"}`}
                                >
                                    {t(link.key)}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Separator */}
                    <div className="hidden md:block h-4 w-px bg-border"></div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <a
                            href={cvHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider hover:text-[var(--primary-blue)] active:scale-95 transition-all mr-2"
                            title={t("about.downloadCv")}
                        >
                            <FileText className="w-4 h-4" strokeWidth={2.75} />
                            <span className="hidden lg:inline">CV</span>
                        </a>
                        <LanguageSwitcher />
                        <ThemeToggle />

                        {/* Hamburger - mobile only */}
                        <button
                            type="button"
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
                            aria-expanded={menuOpen}
                            className="md:hidden cursor-pointer relative inline-flex h-11 w-11 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground active:scale-95 transition-all"
                        >
                            {menuOpen
                                ? <X className="h-5 w-5" strokeWidth={2.75} />
                                : <Menu className="h-5 w-5" strokeWidth={2.75} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            <nav
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    menuOpen ? "max-h-96 border-b border-border" : "max-h-0"
                } bg-background/95 backdrop-blur-sm`}
            >
                <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.href.replace("/#", "");
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                aria-current={isActive ? "location" : undefined}
                                className={`py-3 text-sm font-black uppercase tracking-wider active:scale-95 transition-all ${isActive ? "text-[var(--primary-blue)]" : "hover:text-[var(--primary-blue)]"}`}
                            >
                                {t(link.key)}
                            </Link>
                        );
                    })}
                    <a
                        href={cvHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 border-t border-border py-3 text-sm font-black uppercase tracking-wider hover:text-[var(--primary-blue)] active:scale-95 transition-all"
                    >
                        <FileText className="w-4 h-4" strokeWidth={2.75} />
                        {t("about.downloadCv")}
                    </a>
                </div>
            </nav>

            {/* Animated Border */}
            <div
                className={`absolute bottom-0 left-0 h-[1px] bg-border transition-all duration-500 ease-in-out ${scrolled ? "w-full" : "w-0"
                    }`}
            />
        </header>
    );
}