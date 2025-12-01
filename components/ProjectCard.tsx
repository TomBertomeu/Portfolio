"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import Badge from "./Badge";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: Readonly<ProjectCardProps>) {
  const Container = project.link ? 'a' : 'div';
  const containerProps = project.link ? {
    href: project.link,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <Container 
      {...containerProps}
      className={`group relative grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg border border-transparent bg-transparent transition-all duration-300 ease-in-out hover:border-border hover:bg-card hover:shadow-[-6px_6px_10px_rgba(0,0,0,0.1)] ${project.link ? 'cursor-pointer' : ''}`}
    >
      
      {/* Image Column */}
      <div className="md:col-span-1">
        <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-muted border border-border/50">
            {/* Year Badge */}
            <div className="absolute top-2 right-2 z-10 rounded-full bg-background/80 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-sm border border-border/50 select-none">
                {project.year}
            </div>

            {/* Placeholder gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            
            {project.image && (
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    priority={priority}
                />
            )}
        </div>
      </div>

      {/* Content Column */}
      <div className="md:col-span-3 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-medium leading-snug text-foreground text-lg group-hover:text-primary transition-colors flex items-center gap-2">
            {project.title}
            {project.link && (
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-muted-foreground group-hover:text-primary" />
            )}
          </h3>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.badges?.map((badge, index) => (
            <Badge 
                key={index} 
                text={badge.text} 
                icon={<badge.icon className="w-3 h-3" />}
                className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs px-3 py-1"
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
