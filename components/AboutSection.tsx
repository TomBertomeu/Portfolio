"use client";

import Title from "@/components/Title";
import Section from "@/components/Section";
import Image from "next/image";
import "@/styles/shimmer-effect.css";
import { Badge } from "@/components/ui/badge";
import { Download, GraduationCap } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageProvider";

export default function AboutSection() {
    const { t } = useLanguage();
    return (
        <Section id="about">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8">
                {/* Right Column - Information */}
                <div className="mt-8 md:mt-0">
                    <div>
                        <p className="text-2xl font-bold text-gray-800">{t('about.greeting')}</p>
                        <span className="shimmer inline-block">
                            <Title text={t('about.name')} className="md:text-6xl" />
                        </span>
                        <p className="mt-2 text-gray-600">
                            {t('about.subtitle')}
                        </p>
                    </div>

                    {/* Diplôme */}
                    <div className="mt-6">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-sm px-3 py-1">
                        <GraduationCap className="w-3.5 h-3.5 mr-1.5" />
                        {t('about.school')}
                      </Badge>
                    </div>


                </div>

                {/* Left Column - Profile Image and Resume Button */}
                <div className="flex flex-col items-center gap-4">
                    <Image 
                        src="/images/profile.png" 
                        alt={t('about.profileImageAlt')} 
                        width={320} 
                        height={320}
                        className="rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-xl w-[200px] h-[200px] md:w-[320px] md:h-[320px]"
                    />
                    <a
                        href="/cv.pdf"
                        download="cv-tom-bertomeu.pdf"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 cursor-pointer"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        {t('about.downloadCv')}
                    </a>
                </div>
            </div>
        </Section>
    );
}