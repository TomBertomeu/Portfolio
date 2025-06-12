import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/data/projects";
import {LucideIcon} from "lucide-react";

interface ProjectGridProps {
    projects: Project[];
}

export default function ProjectGrid({ projects }: Readonly<ProjectGridProps>) {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {projects.map((project, index) => (
                <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                    badges={project.badges}
                    key={index}
                />
            ))}
        </div>
    );
}