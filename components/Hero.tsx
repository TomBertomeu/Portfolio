"use client";

import React from 'react';
import HeroBackground from './HeroBackground';
import { useLanguage } from "@/contexts/LanguageProvider";
import { useScrollY } from "@/hooks/useScrollY";

const PARALLAX_SPEED = 0.5;
const FADE_SCROLL_DISTANCE = 700;

export default function Hero() {
    const { t } = useLanguage();
    const scrolled = useScrollY();

    const contentStyle = {
        transform: `translateY(${scrolled * PARALLAX_SPEED}px)`,
        opacity: `${1 - scrolled / FADE_SCROLL_DISTANCE}`,
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Fixed Background */}
            <HeroBackground />

            {/* Content Container */}
            <div
                style={contentStyle}
                className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4"
            >
                <p className="mb-4 text-xl font-medium text-foreground/80 sm:text-2xl">
                    {t("about.greeting")}
                </p>
                <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl shimmer pb-2">
                    Tom BERTOMEU
                </h1>
                <h2 className="mt-4 text-2xl font-medium text-foreground sm:text-4xl">
                    {t("about.role")}
                </h2>
            </div>
        </section>
    );
}
