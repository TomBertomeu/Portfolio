"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { findAllProjects } from "@/repositories/projectRepository";
import Badge from "@/components/Badge";
import { useLanguage } from "@/contexts/LanguageProvider";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroBackground from "@/components/HeroBackground";
import UnderlineAccent from "@/components/UnderlineAccent";

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const sortedProjects = findAllProjects(language);

  return (
    <div className="min-h-screen flex flex-col pt-32 relative">
      <HeroBackground />

      {/* Header */}
      <div className="pb-12 relative z-10">
        <div className="mx-auto max-w-6xl px-4 text-center flex flex-col items-center">
          <ScrollAnimation direction="down">
            <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {t("projectsPage.backToHome")}
            </Link>
          </ScrollAnimation>

          <ScrollAnimation direction="down" delay={100}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 relative inline-block">
                <span className="relative z-10">{t("projectsPage.title")}</span>
                <UnderlineAccent />
            </h1>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("projectsPage.subtitle")}
            </p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-muted py-16 flex-grow relative z-10">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollAnimation direction="up" delay={300}>
            <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm">
              <div className="overflow-x-auto md:overflow-visible rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead className="sticky top-[57px] z-20 bg-card/95 backdrop-blur-sm shadow-sm">
                    <tr className="border-b border-border/50 text-muted-foreground text-sm">
                      <th className="py-4 pl-6 pr-4 font-medium">{t("projectsPage.table.year")}</th>
                      <th className="py-4 pr-4 font-medium">{t("projectsPage.table.project")}</th>
                      <th className="py-4 pr-4 font-medium hidden md:table-cell">{t("projectsPage.table.madeAt")}</th>
                      <th className="py-4 pr-4 font-medium hidden sm:table-cell">{t("projectsPage.table.tech")}</th>
                      <th className="py-4 pl-4 pr-6 font-medium">{t("projectsPage.table.link")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedProjects.map((project) => (
                      <tr 
                        key={project.id} 
                        className="group border-b border-border/50 last:border-0 hover:bg-muted/50 transition-colors"
                      >
                        <td className="py-6 pl-6 pr-4 text-muted-foreground font-mono text-sm">
                          {project.year || "-"}
                        </td>
                        <td className="py-6 pr-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                          <Link href={`/projects/${project.id}`} className="hover:underline">
                            {project.title || "Untitled"}
                          </Link>
                        </td>
                        <td className="py-6 pr-4 text-muted-foreground text-sm hidden md:table-cell">
                          {project.madeAt || "-"}
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
                        <td className="py-6 pl-4 pr-6">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors group/link"
                              aria-label={`${t("projectsPage.table.view")} ${project.title}`}
                            >
                              <span className="hidden sm:inline text-sm break-all">
                                {project.link.replace(/^https?:\/\//, '')}
                              </span>
                              <ArrowUpRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
