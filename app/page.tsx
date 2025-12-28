"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Title from "@/components/Title";
import ProjectCard from "@/components/ProjectCard";
import ExperienceSection from "@/components/ExperienceSection";
import { getFeaturedProjects, getOtherProjects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageProvider";
import { FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import ContactForm from "@/components/ContactForm";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
    const { t, language } = useLanguage();
    const currentLang = (language === 'fr' || language === 'en') ? language : 'fr';
    const featuredProjects = getFeaturedProjects(currentLang);
    const otherProjects = getOtherProjects(currentLang);

    return (
        <>
            <Hero />

            {/* About Section */}
            <Section id="about" className="bg-muted">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                    <div>
                        <ScrollAnimation direction="left">
                            <Title text={t("nav.about")} />
                        </ScrollAnimation>
                        <ScrollAnimation direction="left" delay={200}>
                            <div className="prose prose-lg dark:prose-invert text-muted-foreground whitespace-pre-line mb-4 md:mb-8">
                                {t("about.subtitle")}
                            </div>
                        </ScrollAnimation>

                        <div className="hidden md:flex flex-wrap gap-4">
                            <a
                                href={`/cv/BERTOMEU_TOM-CV_Portfolio_${language.toUpperCase()}.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-md text-sm font-medium hover:bg-primary/90 active:scale-95 transition-all duration-300"
                            >
                                <FileText className="w-5 h-5" />
                                {t("about.downloadCv")}
                            </a>
                        </div>
                    </div>

                    <ScrollAnimation direction="right" delay={300} className="flex justify-center md:justify-end">
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg rotate-3">
                            <Image
                                src="/images/profile.png"
                                alt={t("about.profileImageAlt") || "Tom Bertomeu"}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </ScrollAnimation>

                    <div className="flex md:hidden justify-center mt-6">
                        <a
                            href={`/cv/BERTOMEU_TOM-CV_Portfolio_${language.toUpperCase()}.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-md text-sm font-medium hover:bg-primary/90 active:scale-95 transition-all duration-300"
                        >
                            <FileText className="w-5 h-5" />
                            {t("about.downloadCv")}
                        </a>
                    </div>
                </div>
            </Section>

            {/* Experience */}
            <ExperienceSection />

            {/* Featured Projects */}
            <Section id="projects" className="bg-muted">
                <ScrollAnimation direction="left">
                    <Title text={t("projects.title")} />
                </ScrollAnimation>

                <div className="flex flex-col gap-4 mb-12 group/projects">
                    {featuredProjects.map((project, index) => (
                        <ScrollAnimation key={project.id} direction="left" delay={index * 100} className="transition-all duration-300 hover:!opacity-100 group-hover/projects:opacity-50">
                            <ProjectCard project={project} priority={true} />
                        </ScrollAnimation>
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <Link
                        href="/projects"
                        className="cursor-pointer inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium active:scale-95 transition-all duration-300 group"
                    >
                        <span className="relative">
                            {t("projects.seeAll") || "Voir tous les projets"}
                            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-current opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </Section>

            {/* Contact */}
            <Section id="contact">
                <ContactForm />
            </Section>
        </>
    );
}
