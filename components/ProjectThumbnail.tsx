import React from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectThumbnailProps {
    project: Project;
    priority?: boolean;
    className?: string;
}

export default function ProjectThumbnail({ project, priority = false, className }: Readonly<ProjectThumbnailProps>) {
    return (
        <div className={cn(
            "relative overflow-hidden border border-border/50",
            project.imageFit === "contain" ? "bg-white" : "bg-muted",
            className
        )}>
            {project.imageFit !== "contain" && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            )}

            {!project.image && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <ImageOff className="w-8 h-8 text-muted-foreground" />
                </div>
            )}

            {project.image && (
                <Image
                    src={project.image}
                    alt={project.title || "Project image"}
                    fill
                    className={`${project.imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 50vw, 33vw"
                    priority={priority}
                />
            )}
        </div>
    );
}
