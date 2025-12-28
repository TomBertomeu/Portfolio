"use client";

import React from "react";
import Section from "@/components/Section";
import Title from "@/components/Title";
import { getExperiences } from "@/data/experience";
import { useLanguage } from "@/contexts/LanguageProvider";
import Badge from "@/components/Badge";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowUpRight } from "lucide-react";

export default function ExperienceSection() {
  const { t, language } = useLanguage();
  const currentLang = (language === 'fr' || language === 'en') ? language : 'fr';
  const experiences = getExperiences(currentLang);

  return (
    <Section id="experience">
      <ScrollAnimation direction="left">
        <Title text={t("experience.title") || "Mon Parcours"} />
      </ScrollAnimation>

      <div className="space-y-4 group/experience">
        {experiences.map((exp, index) => {
          const Container = exp.link ? 'a' : 'div';
          const containerProps = exp.link ? {
            href: exp.link,
            target: "_blank",
            rel: "noopener noreferrer"
          } : {};

          return (
            <ScrollAnimation key={exp.id} direction="left" delay={index * 100}>
              <Container
                {...containerProps}
                className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-4 rounded-lg border border-transparent transition-all duration-300 ease-in-out hover:border-border hover:bg-muted/50 hover:shadow-[-6px_6px_10px_rgba(0,0,0,0.1)] cursor-pointer hover:!opacity-100 group-hover/experience:opacity-50 active:scale-[0.98]"
              >
                {/* Date / Period - Left Column */}
                <header
                  className="md:col-span-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground mt-1"
                  aria-label={exp.period}
                >
                  <div className="flex items-center gap-2">
                    {exp.current && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                    )}
                    {exp.period}
                  </div>
                </header>

                {/* Content - Right Column */}
                <div className="md:col-span-3 flex flex-col gap-4">
                  {/* Title & Company */}
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

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.technologies?.map((tech, index) => (
                      <Badge
                        key={index}
                        text={tech}
                        variant="primary"
                        size="sm"
                      />
                    ))}
                  </div>
                </div>
              </Container>
            </ScrollAnimation>
          );
        })}
      </div>
    </Section>
  );
}
