"use client";

import React from "react";
import Section from "@/components/Section";
import Title from "@/components/Title";
import { container } from "@/lib/container";
import { useLanguage } from "@/contexts/LanguageProvider";
import Badge from "@/components/Badge";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowUpRight } from "lucide-react";

export default function ExperienceSection() {
  const { t, language } = useLanguage();
  const experiences = container.getAllExperiences(language);

  return (
    <Section id="experience">
      <ScrollAnimation direction="up">
        <Title text={t("experience.title")} />
      </ScrollAnimation>

      <div className="relative space-y-6 group/experience">
        {/* Vertical timeline line */}
        <div className="absolute left-[5px] top-3 bottom-3 w-px bg-border/60" aria-hidden="true" />

        {experiences.map((exp, index) => {
          const cardClassName = "group relative grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8 pl-8 transition-all duration-300 ease-in-out cursor-pointer hover:!opacity-100 group-hover/experience:opacity-60 active:scale-[0.98]";

          const cardContent = (
            <>
              {/* Timeline dot */}
              <span
                className="absolute left-0 top-1.5 z-10 flex h-3 w-3 items-center justify-center rounded-full border-2 border-border bg-background"
                aria-hidden="true"
              >
                {exp.current && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                  </span>
                )}
              </span>

              <header
                className="md:col-span-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground mt-1"
                aria-label={exp.period}
              >
                {exp.period}
              </header>

              <div className="md:col-span-3 flex flex-col gap-4">
                <h3 className="font-medium leading-snug text-foreground text-lg group-hover:text-primary transition-colors">
                  <div>
                    <span className="font-bold">{exp.title}</span>
                    <span className="text-primary"> · </span>
                    <span className="text-muted-foreground inline-flex items-center gap-1">
                      {exp.company}
                      {exp.link && (
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      )}
                    </span>
                  </div>
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.technologies?.map((tech) => (
                    <Badge
                      key={tech}
                      text={tech}
                      variant="primary"
                      size="sm"
                    />
                  ))}
                </div>
              </div>
            </>
          );

          return (
            <ScrollAnimation key={exp.id} direction="up" delay={index * 100}>
              {exp.link ? (
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className={cardClassName}>
                  {cardContent}
                </a>
              ) : (
                <div className={cardClassName}>{cardContent}</div>
              )}
            </ScrollAnimation>
          );
        })}
      </div>
    </Section>
  );
}
