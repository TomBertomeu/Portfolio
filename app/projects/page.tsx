import Title from "@/components/Title";
import ProjectGrid from "@/components/ProjectGrid";
import { getFeaturedProjects } from "@/data/projects";

export default function Projects() {
  const allProjects = getFeaturedProjects(); // Récupère tous les projets

  return (
    <div className="max-w-6xl mx-auto px-8 md:px-0 py-16 min-h-screen flex flex-col">
      <Title text="Tous mes projets" />
      <p className="mb-8 text-gray-600">
        Découvrez une sélection de mes projets récents et de mes réalisations.
      </p>
      <ProjectGrid projects={allProjects} />
    </div>
  );
}