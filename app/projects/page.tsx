"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { container } from "@/lib/container";
import Badge from "@/components/Badge";
import { resolveIcon } from "@/lib/icons";
import { useLanguage } from "@/contexts/LanguageProvider";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroBackground from "@/components/HeroBackground";
import UnderlineAccent from "@/components/UnderlineAccent";
import type { ProjectBadge } from "@/types/project";

function TechBadges({ badges }: Readonly<{ badges?: ProjectBadge[] }>) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {[...(badges ?? [])]
        .sort((a, b) => (b.tier === "primary" ? 1 : 0) - (a.tier === "primary" ? 1 : 0))
        .map((badge) => {
          const isPrimary = badge.tier === "primary";
          const Icon = isPrimary ? resolveIcon(badge.iconId) : undefined;
          return (
            <Badge
              key={badge.text}
              text={badge.text}
              icon={Icon ? <Icon className="w-3 h-3" /> : undefined}
              variant={isPrimary ? "primary" : "outline"}
              size="xs"
            />
          );
        })}
    </div>
  );
}

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const sortedProjects = container.getAllProjects(language);

  return (
    <div className="min-h-screen flex flex-col pt-32 relative">
      <HeroBackground />

      {/* Header */}
      <div className="pb-12 relative z-10">
        <div className="mx-auto max-w-7xl px-4 text-center flex flex-col items-center">
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
            <h1 className="font-handwritten text-5xl md:text-7xl font-bold mb-6 relative inline-block">
                <span className="relative z-10">{t("projectsPage.title")}</span>
                <UnderlineAccent strong />
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
        <div className="mx-auto max-w-7xl px-4">
          <ScrollAnimation direction="up" delay={100}>
            <div className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-md">
              <div className="overflow-x-auto md:overflow-visible rounded-xl">
                <table className="w-full text-left border-collapse">
                  <caption className="sr-only">{t("projectsPage.table.caption")}</caption>
                  <thead className="bg-card/95 backdrop-blur-sm">
                    <tr className="border-b border-border/50 text-muted-foreground text-sm">
                      <th className="py-4 pl-6 pr-4 font-medium">{t("projectsPage.table.year")}</th>
                      <th className="py-4 pr-4 font-medium">{t("projectsPage.table.project")}</th>
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
                          {project.year}
                        </td>
                        <td className="py-6 pr-4">
                          <div className="font-semibold text-foreground">{project.title}</div>
                          {project.madeAt && (
                            <div className="text-sm text-muted-foreground mt-0.5">{project.madeAt}</div>
                          )}
                          <div className="mt-2 sm:hidden">
                            <TechBadges badges={project.badges} />
                          </div>
                        </td>
                        <td className="py-6 pr-4 hidden sm:table-cell">
                          <TechBadges badges={project.badges} />
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
                              <span className="text-sm whitespace-nowrap">
                                {project.linkLabel ?? t("projectsPage.table.viewProject")}
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
