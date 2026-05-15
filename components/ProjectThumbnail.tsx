import React from "react";
import Image from "next/image";
import type { Project } from "@/types/project";

interface ProjectThumbnailProps {
    project: Project;
    priority?: boolean;
}

export default function ProjectThumbnail({ project, priority = false }: Readonly<ProjectThumbnailProps>) {
    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-muted border border-border/50">
            {/* Placeholder gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />

            {project.image && (
                <Image
                    src={project.image}
                    alt={project.title || "Project image"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={priority}
                />
            )}
        </div>
    );
}
