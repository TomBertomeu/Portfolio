"use client";

import React, { useEffect, useRef } from 'react';
import HeroBackground from './HeroBackground';
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Hero() {
    const { t } = useLanguage();
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                const scrolled = window.scrollY;
                // Parallax effect: move content down at 50% of scroll speed
                // This makes it look like it's moving slower than the rest of the page (which moves up at 100% speed relative to viewport)
                contentRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
                contentRef.current.style.opacity = `${1 - scrolled / 700}`; // Fade out
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Fixed Background */}
            <HeroBackground />

            {/* Content Container */}
            <div 
                ref={contentRef}
                className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4"
            >
                <p className="mb-4 text-xl font-medium text-foreground/80 sm:text-2xl">
                    {t("about.greeting")}
                </p>
                <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-green)] bg-clip-text text-transparent pb-2">
                    Tom BERTOMEU
                </h1>
                <h2 className="mt-4 text-2xl font-medium text-foreground sm:text-4xl">
                    Fullstack Developer
                </h2>
            </div>
        </section>
    );
}
