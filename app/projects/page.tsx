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
            <h1 className="font-handwritten text-5xl md:text-7xl font-bold mb-6 relative inline-block [text-wrap:balance]">
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

      {/* Projects list */}
      <div className="bg-muted py-16 flex-grow relative z-10">
        <div className="mx-auto max-w-7xl px-4">
          {/* Mobile: stacked cards (< sm) */}
          <div className="flex flex-col gap-4 sm:hidden">
            {sortedProjects.map((project, index) => (
              <ScrollAnimation key={project.id} direction="up" delay={Math.min(index, 4) * 75}>
                <div className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm p-5">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${t("projectsPage.table.view")} ${project.title}`}
                      >
                        <span className="whitespace-nowrap">
                          {project.linkLabel ?? t("projectsPage.table.viewProject")}
                        </span>
                        <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                      </a>
                    )}
                  </div>
                  <div className="font-semibold text-foreground">{project.title}</div>
                  {project.madeAt && (
                    <div className="text-sm text-muted-foreground mt-0.5 mb-3">{project.madeAt}</div>
                  )}
                  <div className={project.madeAt ? "" : "mt-3"}>
                    <TechBadges badges={project.badges} />
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Desktop / tablet: table (sm+) */}
          <ScrollAnimation direction="up" delay={100} className="hidden sm:block">
            <div className="relative">
              {/* Floating table header */}
              <div className="relative z-20 rounded-2xl border border-border/60 bg-card/95 backdrop-blur-sm shadow-sm">
                <div className="grid grid-cols-[130px_1fr_1fr_200px] items-center text-sm text-muted-foreground">
                  <div className="py-4 pl-6 pr-4 font-medium">{t("projectsPage.table.year")}</div>
                  <div className="py-4 px-4 font-medium">{t("projectsPage.table.project")}</div>
                  <div className="py-4 px-4 font-medium">{t("projectsPage.table.tech")}</div>
                  <div className="py-4 pl-4 pr-6 font-medium">{t("projectsPage.table.link")}</div>
                </div>
              </div>

              {/* Table body */}
              <div className="relative z-10 -mt-4 rounded-b-2xl border border-border/50 bg-card/80 pt-6 shadow-lg backdrop-blur-sm" role="table" aria-label={t("projectsPage.table.caption")}>
                {sortedProjects.map((project) => (
                  <div
                    key={project.id}
                    role="row"
                    className="group grid grid-cols-[130px_1fr_1fr_200px] items-center border-b border-border/50 last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <div role="cell" className="py-5 pl-6 pr-4 text-muted-foreground font-mono text-sm">
                      {project.year}
                    </div>
                    <div role="cell" className="py-5 px-4">
                      <div className="font-semibold text-foreground">{project.title}</div>
                      {project.madeAt && (
                        <div className="text-sm text-muted-foreground mt-0.5">{project.madeAt}</div>
                      )}
                    </div>
                    <div role="cell" className="py-5 px-4">
                      <TechBadges badges={project.badges} />
                    </div>
                    <div role="cell" className="py-5 pl-4 pr-6">
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
