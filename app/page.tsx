"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Title from "@/components/Title";
import ProjectCard from "@/components/ProjectCard";
import ExperienceSection from "@/components/ExperienceSection";
import { container } from "@/lib/container";
import { useLanguage } from "@/contexts/LanguageProvider";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import ContactForm from "@/components/ContactForm";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
    const { t, language } = useLanguage();
    const featuredProjects = container.getFeaturedProjects(language);
    const otherProjects = container.getOtherProjects(language);

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
                                className="cursor-pointer relative inline-flex items-center gap-2 rounded-full border border-primary/40 bg-transparent px-5 py-2.5 text-primary font-medium overflow-hidden transition-all duration-300 ease-out hover:text-white hover:border-transparent hover:-translate-y-px hover:shadow-lg hover:shadow-[#2563eb]/30 active:scale-95 group"
                            >
                                <span className="absolute -inset-y-4 -inset-x-8 rounded-full bg-gradient-to-r from-[#2563eb] to-[#10b981] -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                                <span className="relative z-10">
                                    {t("about.downloadCv")}
                                </span>
                                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
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
                            className="cursor-pointer relative inline-flex items-center gap-2 rounded-full border border-primary/40 bg-transparent px-5 py-2.5 text-primary font-medium overflow-hidden transition-all duration-300 ease-out hover:text-white hover:border-transparent hover:-translate-y-px hover:shadow-lg hover:shadow-[#2563eb]/30 active:scale-95 group"
                        >
                            <span className="absolute -inset-y-4 -inset-x-8 rounded-full bg-gradient-to-r from-[#2563eb] to-[#10b981] -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                            <span className="relative z-10">
                                {t("about.downloadCv")}
                            </span>
                            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </a>
                    </div>
                </div>
            </Section>

            {/* Experience */}
            <ExperienceSection />

            {/* Featured Projects */}
            <Section id="projects" className="bg-muted">
                <ScrollAnimation direction="none">
                    <Title text={t("projects.title")} centered />
                </ScrollAnimation>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.35fr_1fr] gap-6 mt-12 md:mt-16 mb-12 items-center has-[a:hover]:[&>*:not(:has(a:hover))]:opacity-50">
                    {featuredProjects.map((project, index) => {
                        const isMain = index === 1;
                        const directions = ["left", "up", "right"] as const;
                        return (
                            <ScrollAnimation
                                key={project.id}
                                direction={directions[index]}
                                delay={index * 100}
                                className={`transition-all duration-300 ${isMain ? "sm:col-span-2 lg:col-span-1" : ""}`}
                            >
                                <ProjectCard project={project} priority={true} featured={isMain} />
                            </ScrollAnimation>
                        );
                    })}
                </div>

                <div className="flex justify-center mt-6">
                    <Link
                        href="/projects"
                        className="cursor-pointer relative inline-flex items-center gap-2 rounded-full border border-primary/40 bg-transparent px-5 py-2.5 text-primary font-medium overflow-hidden transition-all duration-300 ease-out hover:text-white hover:border-transparent hover:-translate-y-px hover:shadow-lg hover:shadow-[#2563eb]/30 active:scale-95 group"
                    >
                        <span className="absolute -inset-y-4 -inset-x-8 rounded-full bg-gradient-to-r from-[#2563eb] to-[#10b981] -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                        <span className="relative z-10">
                            {t("projects.seeAll") || "Voir tous les projets"}
                        </span>
                        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                </div>
            </Section>

            {/* Contact */}
            <Section id="contact" className="bg-transparent">
                <ContactForm />
            </Section>
        </>
    );
}
