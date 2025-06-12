"use client";
import { Briefcase, PartyPopper, Snowflake } from "lucide-react";
import Title from "@/components/Title";
import Section from "@/components/Section";

const professionalExperiences = [
  {
    title: "Stage Développeur Full Stack",
    company: "ASO 70",
    period: "2025 (12 semaines)",
    location: "France",
    job: "Développement d'un catalogue en ligne de location de matériel événementiel",
    icon: PartyPopper
  },
  {
    title: "Stage Développeur Web",
    company: "Vecofroid",
    period: "2024 (8 semaines)",
    location: "France",
    job: "Développement d'une application web de gestion des interventions de l'entreprise",
    icon: Snowflake
  }
];

import { useLanguage } from "@/contexts/LanguageProvider";

export default function ExperienceSection() {
  const { t } = useLanguage();
  return (
    <Section id="experience">
      <Title text={t('experience.title')} />
      <div className="flex flex-col gap-8">
        {/* Professional Experiences */}
        <div className="flex flex-col gap-8">
          {professionalExperiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="bg-white/80 border border-gray-200 rounded-xl shadow-sm p-8 flex flex-col hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-0 items-center md:items-stretch">
                {/* Left Side - 1/3 width */}
                <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start mb-4 md:mb-0 px-0 md:px-6">
                  <exp.icon className="w-8 h-8 text-blue-500 mr-3" />
                  <span className="text-xl md:text-2xl font-bold text-gray-900">{exp.company}</span>
                </div>
                {/* Divider */}
                <div className="hidden md:block w-px bg-gray-300 mx-2" />
                {/* Right Side - 2/3 width */}
                <div className="w-full md:w-2/3 flex flex-col justify-center text-gray-700 gap-2 px-0 md:px-6">
                  <div><span className="font-medium">{t('experience.labelTitle')} :</span> {exp.title}</div>
                  <div><span className="font-medium">{t('experience.labelPeriod')} :</span> {exp.period}</div>
                  <div><span className="font-medium">{t('experience.labelJob')} :</span> {exp.job}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
