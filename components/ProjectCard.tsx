"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import Badge from "./Badge";
import ProjectThumbnail from "./ProjectThumbnail";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: Readonly<ProjectCardProps>) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg border border-transparent bg-transparent transition-all duration-300 ease-in-out hover:border-border hover:bg-card hover:shadow-[-6px_6px_10px_rgba(0,0,0,0.1)] cursor-pointer"
    >

      {/* Image Column */}
      <div className="md:col-span-1">
        <ProjectThumbnail project={project} priority={priority} />
      </div>

      {/* Content Column */}
      <div className="md:col-span-3 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-medium leading-snug text-foreground text-lg group-hover:text-primary transition-colors flex items-center gap-2">
            {project.title || "Untitled Project"}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-muted-foreground group-hover:text-primary" />
          </h3>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description || ""}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.badges?.map((badge, index) => (
            <Badge
              key={index}
              text={badge.text}
              icon={<badge.icon className="w-3 h-3" />}
              variant="primary"
              size="sm"
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
