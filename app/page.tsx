"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Title from "@/components/Title";
import ProjectCard from "@/components/ProjectCard";
import SkillsetSection from "@/components/SkillsetSection";
import ExperienceSection from "@/components/ExperienceSection";
import { getFeaturedProjects, getOtherProjects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageProvider";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

import ContactForm from "@/components/ContactForm";

export default function Home() {
  const { t, language } = useLanguage();
  const featuredProjects = getFeaturedProjects();
  const otherProjects = getOtherProjects();

  return (
    <>
      <Hero />
      
      {/* About Section */}
      <Section id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <Title text={t("nav.about")} />
                <div className="prose prose-lg dark:prose-invert text-muted-foreground whitespace-pre-line mb-8">
                    {t("about.subtitle")}
                </div>
                
                <div className="flex flex-wrap gap-4">
                    <a 
                        href={`/cv/BERTOMEU_TOM-CV_Portfolio_${language.toUpperCase()}.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
                    >
                        <Download className="w-5 h-5" />
                        {t("about.downloadCv")}
                    </a>
                    
                    <Link 
                        href="/blog"
                        className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                    >
                        Veille Technologique
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
            
             <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Placeholder for profile picture - To be replaced with real image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-muted-foreground">
                    <span className="text-lg font-medium">Photo de profil</span>
                </div>
            </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section id="projects" className="bg-muted/30">
        <Title text={t("projects.title")} />
        <p className="mb-12 text-lg text-muted-foreground max-w-2xl">
            {t("projects.intro")}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} priority={true} />
            ))}
        </div>

        <div className="flex justify-center">
            <Link 
                href="/projects"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
            >
                {t("projects.seeAll") || "Voir tous les projets"}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
      </Section>

      {/* Experience */}
      <ExperienceSection />

      {/* Skills */}
      <SkillsetSection />

      {/* Contact */}
      <Section id="contact" className="bg-muted/30">
        <Title text={t("contact.title")} />
        <ContactForm />
      </Section>
    </>
  );
}
