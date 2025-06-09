"use client"

"use client";
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { useLanguage } from "@/contexts/LanguageProvider";

export default function SeeAllProjectsButton() {
    const { t } = useLanguage();
    return (
        <div className="flex justify-center">
            <Link
                href={"/projects"}
                className="group inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 rounded-md bg-white hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
            >
                {t('projects.seeAll')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    )
}