"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { resolveIcon } from "@/lib/icons";
import Badge from "./Badge";
import ProjectThumbnail from "./ProjectThumbnail";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  featured?: boolean;
}

export default function ProjectCard({ project, priority = false, featured = false }: Readonly<ProjectCardProps>) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={`group relative flex h-full flex-col gap-4 rounded-2xl border bg-card transition-all duration-300 ease-in-out cursor-pointer active:scale-[0.98] hover:shadow-[-6px_6px_20px_rgba(0,0,0,0.12)] ${
        featured
          ? "p-6 border-primary/30 shadow-md hover:border-primary/60"
          : "p-4 border-border shadow-sm hover:border-primary/40"
      }`}
    >
      <ProjectThumbnail project={project} priority={priority} />

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className={`font-medium leading-snug text-foreground group-hover:text-primary transition-colors flex items-center gap-2 ${featured ? "text-2xl" : "text-lg min-h-[3.125rem]"}`}>
            {project.title || "Untitled Project"}
            <ArrowUpRight className={`shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-muted-foreground group-hover:text-primary ${featured ? "w-5 h-5" : "w-4 h-4"}`} />
          </h3>
        </div>

        {project.tagline && (
          <p className={`text-muted-foreground leading-snug mb-4 ${featured ? "text-base" : "text-sm"}`}>
            {project.tagline}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {[...(project.badges ?? [])]
            .sort((a, b) => (b.tier === "primary" ? 1 : 0) - (a.tier === "primary" ? 1 : 0))
            .map((badge, index) => {
              const isPrimary = badge.tier === "primary";
              const Icon = isPrimary ? resolveIcon(badge.iconId) : undefined;
              return (
                <Badge
                  key={index}
                  text={badge.text}
                  icon={Icon ? <Icon className="w-3 h-3" /> : undefined}
                  variant={isPrimary ? "primary" : "outline"}
                  size={featured && isPrimary ? "sm" : "xs"}
                />
              );
            })}
        </div>
      </div>
    </Link>
  );
}
