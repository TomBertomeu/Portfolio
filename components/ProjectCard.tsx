"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import Badge from "./Badge";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: Readonly<ProjectCardProps>) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg">
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {/* Placeholder gradient if image fails or is placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        
        {/* We use a simple div with background for now if image is missing, or Next/Image if present */}
        {project.image && (
            <div className="relative w-full h-full">
                 {/* Note: In a real scenario, ensure images exist in public folder. 
                     For now, we'll use a fallback if the image path is just a placeholder string. 
                     But here we assume the user will put images there. */}
                 <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={priority}
                 />
            </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
          <div className="flex gap-2">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Voir le code source de ${project.title}`}
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>

        <p className="mb-6 flex-1 text-muted-foreground">
          {project.description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.badges?.map((badge, index) => (
            <Badge 
                key={index} 
                text={badge.text} 
                icon={<badge.icon className="w-3 h-3" />}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
