"use client";
import { Briefcase, GraduationCap } from "lucide-react";
import Title from "@/components/Title";

const professionalExperiences = [
  {
    title: "Stage Développeur Web",
    company: "Exaprobe",
    period: "Avril 2024 - Juin 2024",
    location: "Belfort, France",
    job: "Développeur Web Full Stack",
  },
  {
    title: "Stage Développeur Web",
    company: "Exaprobe",
    period: "Avril 2024 - Juin 2024",
    location: "Belfort, France",
    job: "Développeur Web Full Stack",
  }
  // Ajoutez d'autres expériences ici si besoin
];

import { useLanguage } from "@/contexts/LanguageProvider";

export default function ExperienceSection() {
  const { t } = useLanguage();
  return (
    <section className="max-w-6xl mx-auto px-8 md:px-0 py-16" id="experience">
      <Title text={t('experience.title')} />
      <div className="flex flex-col gap-8">
        {/* Professional Experiences */}
        <div className="flex flex-col gap-8">
          {professionalExperiences.map((exp, idx) => (
            <div key={idx} className="bg-white/80 border border-gray-200 rounded-xl shadow-sm p-8 flex flex-col">
              <div className="flex flex-col md:flex-row gap-0 items-center md:items-stretch">
                {/* Left Side */}
                <div className="flex-1 flex items-center justify-center md:justify-start mb-4 md:mb-0 px-0 md:px-6">
                  <Briefcase className="w-8 h-8 text-blue-500 mr-3" />
                  <span className="text-xl md:text-2xl font-bold text-gray-900">{exp.company}</span>
                </div>
                {/* Divider */}
                <div className="hidden md:block w-px bg-gray-300 mx-2" />
                {/* Right Side */}
                <div className="flex-1 flex flex-col justify-center text-gray-700 gap-2 px-0 md:px-6">
                  <div><span className="font-medium">{t('experience.labelTitle')} :</span> {exp.title}</div>
                  <div><span className="font-medium">{t('experience.labelPeriod')} :</span> {exp.period}</div>
                  <div><span className="font-medium">{t('experience.labelJob')} :</span> {exp.job}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
