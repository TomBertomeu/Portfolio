"use client";
import Title from "@/components/Title";
import ProjectGrid from "@/components/ProjectGrid";
import SeeAllProjectsButton from "@/components/SeeAllProjectsButton";
import Section from "@/components/Section";
import { getFeaturedProjects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const featuredProjects = getFeaturedProjects(3); // Affiche les 3 premiers projets

  return (
    <Section id="projects">
      <Title text={t('projects.title')} />
      <p className="mb-4 text-gray-600">
        {t('projects.intro')}
      </p>
      <ProjectGrid projects={featuredProjects} />
      <SeeAllProjectsButton />
    </Section>
  );
}