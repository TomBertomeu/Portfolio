"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Calendar, Building, Code, CheckCircle2, AlertTriangle, Lightbulb, Hammer, CircleDashed } from "lucide-react";
import { findProjectById } from "@/repositories/projectRepository";
import type { ProjectFeature } from "@/types/project";
import Badge from "@/components/Badge";
import { useLanguage } from "@/contexts/LanguageProvider";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroBackground from "@/components/HeroBackground";
import UnderlineAccent from "@/components/UnderlineAccent";
import { notFound } from "next/navigation";

export default function ProjectDetailClient({ id }: { id: string }) {
    const { t, language } = useLanguage();
    const project = findProjectById(id, language);

    if (!project) {
        return notFound();
    }

    return (
        <div className="min-h-screen flex flex-col pt-32 relative">
            <HeroBackground />

            {/* Header / Hero */}
            <div className="pb-12 relative z-10">
                <div className="mx-auto max-w-7xl px-4">
                    <ScrollAnimation direction="down">
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all active:scale-95 mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            {t("projectsPage.backToHome") || "Retour"}
                        </Link>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column: Content */}
                        <div>
                            <ScrollAnimation direction="down" delay={100}>
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {project.year && (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {project.year}
                                        </span>
                                    )}
                                    {project.madeAt && (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                                            <Building className="w-3.5 h-3.5" />
                                            {project.madeAt}
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 relative inline-block">
                                    <span className="relative z-10">{project.title}</span>
                                    <UnderlineAccent />
                                </h1>
                            </ScrollAnimation>

                            <ScrollAnimation direction="up" delay={200}>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                    {project.description}
                                </p>
                            </ScrollAnimation>

                            {/* Links */}
                            <ScrollAnimation direction="up" delay={300}>
                                <div className="flex flex-wrap gap-4">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 duration-300"
                                        >
                                            {project.link.includes("github.com") ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                                            {project.link.includes("github.com") ? "Voir le code" : "Voir le projet"}
                                        </a>
                                    )}
                                    {project.demoVideo && (
                                        <a
                                            href={project.demoVideo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 duration-300"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            Demo Video
                                        </a>
                                    )}
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative">
                            {project.image && (
                                <ScrollAnimation direction="left" delay={400}>
                                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                        <Image
                                            src={project.image}
                                            alt={project.title || "Project Image"}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </ScrollAnimation>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-muted py-16 flex-grow relative z-10">
                <div className="mx-auto max-w-4xl px-4 space-y-20">

                    {/* Context & Role Section */}
                    <ScrollAnimation direction="up">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-3xl font-bold mb-6 relative inline-block">
                                {language === 'fr' ? "Contexte" : "Context"}
                                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
                            </h2>
                            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
                                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                                    {project.context || project.description}
                                </p>

                                {/* Tech Stack Inline */}
                                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-border/50">
                                    <div className="flex flex-wrap gap-2">
                                        {project.badges?.map((badge, index) => (
                                            <Badge
                                                key={index}
                                                text={badge.text}
                                                icon={<badge.icon className="w-3 h-3" />}
                                                className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Features Section - Visual Cards */}
                    {project.features && project.features.length > 0 && (
                        <ScrollAnimation direction="up">
                            <div>
                                <h2 className="text-3xl font-bold mb-8 relative inline-block">
                                    {language === 'fr' ? "Ce que ça fait" : "What it does"}
                                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.features.map((feature, index) => {
                                        const isObject = typeof feature === 'object';
                                        const text = isObject ? (feature as ProjectFeature).text : feature as string;
                                        const status = isObject ? (feature as ProjectFeature).status : 'completed';

                                        let Icon = CheckCircle2;
                                        let iconColor = "text-primary";
                                        let bgColor = "bg-primary/10";

                                        if (status === 'in-progress') {
                                            Icon = Hammer;
                                            iconColor = "text-amber-500";
                                            bgColor = "bg-amber-500/10";
                                        } else if (status === 'planned') {
                                            Icon = CircleDashed;
                                            iconColor = "text-muted-foreground";
                                            bgColor = "bg-muted";
                                        }

                                        return (
                                            <div key={index} className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex items-start gap-4">
                                                <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                    <Icon className={`w-5 h-5 ${iconColor}`} />
                                                </div>
                                                <p className="text-lg font-medium text-foreground leading-snug pt-1.5">
                                                    {text}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </ScrollAnimation>
                    )}

                    {/* Technical Deep Dive - Narrative Style */}
                    {(project.challenges || project.solutions) && (
                        <ScrollAnimation direction="up">
                            <div className="relative">

                                <h2 className="text-3xl font-bold mb-10 relative inline-block">
                                    {language === 'fr' ? "Challenge Technique" : "Technical Deep Dive"}
                                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
                                </h2>

                                <div className="space-y-12">
                                    {/* Challenge */}
                                    {project.challenges && (
                                        <div className="relative flex gap-8">
                                            <div className="hidden md:flex flex-col items-center relative">
                                                <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 border-2 border-amber-500 flex items-center justify-center z-10 shadow-sm">
                                                    <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                                </div>
                                                {project.solutions && (
                                                    <div className="absolute top-10 -bottom-12 w-0.5 bg-gradient-to-b from-amber-500/50 to-emerald-500/50"></div>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2 md:block">
                                                    <AlertTriangle className="w-5 h-5 text-amber-500 md:hidden" />
                                                    {language === 'fr' ? "Le Problème" : "The Challenge"}
                                                </h3>
                                                <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-950/10 border border-amber-200/50 dark:border-amber-800/30 text-muted-foreground leading-relaxed">
                                                    {project.challenges}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Solution */}
                                    {project.solutions && (
                                        <div className="relative flex gap-8">
                                            <div className="hidden md:flex flex-col items-center">
                                                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border-2 border-emerald-500 flex items-center justify-center z-10 shadow-sm">
                                                    <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2 md:block">
                                                    <Lightbulb className="w-5 h-5 text-emerald-500 md:hidden" />
                                                    {language === 'fr' ? "La Solution" : "The Solution"}
                                                </h3>
                                                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-950/10 border border-emerald-200/50 dark:border-emerald-800/30 text-muted-foreground leading-relaxed">
                                                    {project.solutions}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollAnimation>
                    )}

                </div>
            </div>
        </div>
    );
}
