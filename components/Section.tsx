"use client";

import React, { useEffect, useRef } from "react";
import { useActiveSection } from "@/contexts/ActiveSectionContext";

export default function Section(
    {
        children,
        id,
        className = "",
    }: Readonly<{
        children: React.ReactNode;
        id: string;
        className?: string;
    }>
) {
    const { sectionRefs } = useActiveSection();
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (sectionRef.current && id) {
            sectionRefs.current[id as keyof typeof sectionRefs.current] = sectionRef.current;
        }
        // Cleanup function to remove the ref when component unmounts
        return () => {
            if (id) {
                delete sectionRefs.current[id as keyof typeof sectionRefs.current];
            }
        };
    }, [id, sectionRefs]);

    return (
        <section ref={sectionRef} id={id} className={`w-full mb-16 md:mb-24 ${className}`}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24`}>
                {children}
            </div>
        </section>
    )
}