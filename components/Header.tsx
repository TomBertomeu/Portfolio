"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Header() {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
                scrolled
                    ? "bg-background/80 backdrop-blur-md"
                    : "bg-transparent backdrop-blur-none"
            }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    Tom<span className="text-[var(--primary-blue)]">.</span>
                </Link>

                {/* Navigation & Actions */}
                <div className="flex items-center gap-6">
                    {/* Nav Links - Hidden on mobile, visible on md+ */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/#about" className="hover:text-[var(--primary-blue)] transition-colors">
                            {t("nav.about") || "À propos"}
                        </Link>
                        <Link href="/#projects" className="hover:text-[var(--primary-blue)] transition-colors">
                            {t("nav.projects") || "Projets"}
                        </Link>
                        <Link href="/blog" className="hover:text-[var(--primary-blue)] transition-colors">
                            {t("nav.blog") || "Blog"}
                        </Link>
                        <Link href="/#contact" className="hover:text-[var(--primary-blue)] transition-colors">
                            {t("nav.contact") || "Contact"}
                        </Link>
                    </nav>

                    {/* Separator */}
                    <div className="hidden md:block h-4 w-px bg-border"></div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <LanguageSwitcher />
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Animated Border */}
            <div 
                className={`absolute bottom-0 left-0 h-[1px] bg-border transition-all duration-500 ease-in-out ${
                    scrolled ? "w-full" : "w-0"
                }`}
            />
        </header>
    );
}