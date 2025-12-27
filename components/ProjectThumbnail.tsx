import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectThumbnailProps {
    project: Project;
    priority?: boolean;
}

export default function ProjectThumbnail({ project, priority = false }: Readonly<ProjectThumbnailProps>) {
    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-muted border border-border/50">
            {/* Year Badge */}
            {project.year && (
                <div className="absolute top-2 right-2 z-10 rounded-full bg-background/80 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-sm border border-border/50 select-none">
                    {project.year}
                </div>
            )}

            {/* Placeholder gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />

            {project.image && (
                <Image
                    src={project.image}
                    alt={project.title || "Project image"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    priority={priority}
                />
            )}
        </div>
    );
}
