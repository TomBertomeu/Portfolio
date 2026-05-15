"use client";

import React from 'react';
import HeroBackground from './HeroBackground';
import { useScrollY } from "@/hooks/useScrollY";

const PARALLAX_SPEED = 0.5;
const FADE_SCROLL_DISTANCE = 700;

export default function Hero() {
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
                <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl shimmer pb-2">
                    [super slogan qui tue]
                </h1>
            </div>
        </section>
    );
}
