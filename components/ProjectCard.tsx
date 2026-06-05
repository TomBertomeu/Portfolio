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
  const hasLink = Boolean(project.link);

  const shapeClasses = featured
    ? "sm:p-6 sm:rounded-[36px] sm:border-primary/30 sm:shadow-md"
    : "sm:p-4 sm:rounded-[28px] sm:border-border sm:shadow-sm";

  const interactiveClasses = hasLink
    ? `transition-all duration-300 ease-in-out cursor-pointer active:scale-[0.98] sm:hover:shadow-[-6px_6px_20px_rgba(0,0,0,0.12)] ${
        featured ? "sm:hover:border-primary/60" : "sm:hover:border-primary/40"
      }`
    : "";

  const baseClasses = `group relative flex h-full flex-col gap-3 sm:gap-4 sm:border sm:bg-card ${shapeClasses} ${interactiveClasses}`;

  const thumbnailClass = "w-full aspect-video rounded-lg sm:rounded-xl";

  const content = (
    <>
      <ProjectThumbnail project={project} priority={priority} className={thumbnailClass} />

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2 mb-1 sm:mb-2">
          <h3 className={`font-medium leading-snug text-foreground transition-colors flex items-center gap-1.5 ${hasLink ? "group-hover:text-primary" : ""} ${featured ? "text-lg sm:text-2xl sm:min-h-[3.125rem]" : "text-base sm:text-lg"}`}>
            {project.title || "Untitled Project"}
            {hasLink && (
              <ArrowUpRight className={`shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-muted-foreground group-hover:text-primary ${featured ? "w-4 h-4 sm:w-5 sm:h-5" : "w-4 h-4"}`} />
            )}
          </h3>
        </div>

        {project.tagline && (
          <p className={`text-muted-foreground leading-snug mb-3 sm:mb-4 ${featured ? "text-sm sm:text-base" : "text-sm"}`}>
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
    </>
  );

  if (hasLink) {
    return (
      <Link
        href={project.link!}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
