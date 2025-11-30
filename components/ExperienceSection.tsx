"use client";

import React from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import Section from "@/components/Section";
import Title from "@/components/Title";
import experiences from "@/data/experience";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <Section id="experience">
      <Title text={t("experience.title") || "Mon Parcours"} />
      
      <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 py-4">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            {/* Icon Bubble */}
            <div className="absolute -left-3 md:-left-4 top-0 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border border-border bg-background shadow-sm">
              {exp.type === "work" ? (
                <Briefcase className="h-3 w-3 md:h-4 md:w-4 text-primary" />
              ) : (
                <GraduationCap className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                  <Calendar className="h-3 w-3" />
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg font-semibold text-primary">
                {exp.company}
              </div>
              
              <p className="text-muted-foreground max-w-3xl">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
