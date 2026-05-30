"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";
import HeroBackground from "@/components/HeroBackground";

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background font-sans">
            <HeroBackground />

            <div className="relative z-10 flex flex-col items-center text-center px-4">
                {/* Glitch Effect 404 */}
                <div className="relative mb-2">
                    <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/20 select-none animate-pulse">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 blur-[2px] animate-pulse">
                        <span className="text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter text-primary/30 transform translate-x-1 translate-y-1">404</span>
                    </div>
                </div>

                {/* Subtitle & Description */}
                <div className="space-y-6 max-w-lg mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {t("notFound.subtitle") || "Page Not Found"}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t("notFound.description") || "Oops! It seems you are lost in the void..."}
                    </p>

                    {/* Back Home Button */}
                    <div className="pt-8 flex justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-all active:scale-95 shadow-lg hover:shadow-primary/25"
                        >
                            <Home className="w-5 h-5" />
                            {t("notFound.backHome") || "Back to Home"}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Ambient decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
    );
}
