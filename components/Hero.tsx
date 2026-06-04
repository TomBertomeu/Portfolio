"use client";

import React from 'react';
import HeroBackground from './HeroBackground';
import Link from "next/link";
import { useScrollY } from "@/hooks/useScrollY";
import { useLanguage } from "@/contexts/LanguageProvider";
import { ArrowRight, ChevronDown } from "lucide-react";

const PARALLAX_SPEED = 0.5;
const FADE_SCROLL_DISTANCE = 700;

export default function Hero() {
    const scrolled = useScrollY();
    const { t, language } = useLanguage();
    const cvHref = `/cv/BERTOMEU_TOM-CV_Portfolio_${language.toUpperCase()}.pdf`;

    const contentStyle = {
        transform: `translateY(${scrolled * PARALLAX_SPEED}px)`,
        opacity: `${1 - scrolled / FADE_SCROLL_DISTANCE}`,
    };

    return (
        <section className="relative h-[100svh] w-full overflow-hidden">
            <HeroBackground />

            <div
                style={contentStyle}
                className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4"
            >
                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl text-foreground max-w-3xl leading-tight text-balance">
                    {t("hero.headline")}{" "}
                    <span className="font-handwritten font-normal text-blue-600 dark:text-blue-500">
                        {t("hero.headlineAccent")}
                    </span>
                </h1>

                <p className="mt-5 md:mt-6 text-sm md:text-base text-muted-foreground tracking-wide max-w-xl mx-auto text-balance">
                    {t("hero.subtitle")}
                </p>

                <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href={cvHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer relative inline-flex items-center gap-2 rounded-full border border-primary/40 bg-transparent px-5 py-2.5 text-primary font-medium overflow-hidden transition-all duration-300 ease-out hover:text-white hover:border-transparent hover:-translate-y-px hover:shadow-lg hover:shadow-[#2563eb]/30 active:scale-95 group"
                    >
                        <span className="absolute -inset-y-4 -inset-x-8 rounded-full bg-gradient-to-r from-[#2563eb] to-[#10b981] -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                        <span className="relative z-10">{t("about.downloadCv")}</span>
                        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </a>

                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 rounded-full border border-[#2563eb]/50 bg-transparent px-5 py-2.5 text-[#2563eb] dark:text-blue-400 dark:border-blue-400/50 font-medium transition-all duration-300 ease-out hover:border-[#2563eb] dark:hover:border-blue-400 hover:-translate-y-px hover:shadow-md hover:shadow-[#2563eb]/20 active:scale-95"
                    >
                        {t("hero.seeProjects")}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                </div>

                <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                    <button
                        type="button"
                        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                        aria-label={t("hero.scrollToAbout")}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                    >
                        <ChevronDown
                            className="w-5 h-5 animate-[scroll-bob_2s_ease-in-out_infinite] motion-reduce:animate-none"
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
