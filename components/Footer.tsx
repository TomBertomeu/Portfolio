"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-4 bg-white dark:bg-black border-t border-border">
            <div className="mx-auto max-w-5xl px-4">
                <p className="text-sm text-muted-foreground text-center">
                    {t("footer.credits")}
                </p>
            </div>
        </footer>
    );
}
