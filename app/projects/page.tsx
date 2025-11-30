"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import projects from "@/data/projects";
import Badge from "@/components/Badge";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function ProjectsPage() {
  const { t } = useLanguage();
  // Sort projects by year descending
  const sortedProjects = [...projects].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <div className="min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("projectsPage.backToHome")}
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            {t("projectsPage.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("projectsPage.subtitle")}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/50 text-muted-foreground text-sm">
                <th className="py-4 pr-4 font-medium">{t("projectsPage.table.year")}</th>
                <th className="py-4 pr-4 font-medium">{t("projectsPage.table.project")}</th>
                <th className="py-4 pr-4 font-medium hidden md:table-cell">{t("projectsPage.table.madeAt")}</th>
                <th className="py-4 pr-4 font-medium hidden sm:table-cell">{t("projectsPage.table.tech")}</th>
                <th className="py-4 pl-4 font-medium">{t("projectsPage.table.link")}</th>
              </tr>
            </thead>
            <tbody>
              {sortedProjects.map((project) => (
                <tr 
                  key={project.id} 
                  className="group border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-6 pr-4 text-muted-foreground font-mono text-sm">
                    {project.year}
                  </td>
                  <td className="py-6 pr-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </td>
                  <td className="py-6 pr-4 text-muted-foreground text-sm hidden md:table-cell">
                    {project.madeAt}
                  </td>
                  <td className="py-6 pr-4 hidden sm:table-cell">
                    <div className="flex flex-wrap gap-2">
                      {project.badges?.map((badge, index) => (
                        <Badge 
                          key={index} 
                          text={badge.text} 
                          className="bg-primary/10 text-primary hover:bg-primary/20 border-none"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="py-6 pl-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${t("projectsPage.table.view")} ${project.title}`}
                      >
                        <span className="hidden sm:inline text-sm">{t("projectsPage.table.view")}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
