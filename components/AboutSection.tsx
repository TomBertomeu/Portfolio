import Title from "@/components/Title";
import Section from "@/components/Section";
import Image from "next/image";
import "@/styles/shimmer-effect.css";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

export default function AboutSection() {
    return (
        <Section id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Information */}
                <div>
                    <div>
                        <p className="text-2xl font-bold text-gray-800">Bonjour! Je suis</p>
                        <span className="shimmer inline-block">
                            <Title text={"Tom Bertomeu"} className="md:text-6xl" />
                        </span>
                        <p className="mt-2 text-gray-600">
                            Étudiant en BUT à l'IUT de Belfort Montbéliard
                        </p>
                    </div>

                    {/* School Experience Card */}
                    <div className="bg-white/80 border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col mt-6">
                      <div className="flex flex-col md:flex-row gap-0 items-center md:items-stretch">
                        {/* Left Side */}
                        <div className="flex-1 flex items-center justify-center md:justify-start mb-4 md:mb-0 px-0 md:px-6">
                          <span className="inline-flex items-center">
                            <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6" /></svg>
                            <span className="text-xl md:text-2xl font-bold text-gray-900">BUT Informatique</span>
                          </span>
                        </div>
                        {/* Divider */}
                        <div className="hidden md:block w-px bg-gray-300 mx-2" />
                        {/* Right Side */}
                        <div className="flex-1 flex flex-col justify-center text-gray-700 gap-2 px-0 md:px-6">
                          <div><span className="font-medium">Établissement :</span> IUT de Belfort-Montbéliard</div>
                          <div><span className="font-medium">Période :</span> Septembre 2022 - Aujourd'hui</div>
                        </div>
                      </div>
                    </div>

                    {/* Interests as badges */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        <Badge variant="secondary">Course automobile</Badge>
                        <Badge variant="secondary">Science-fiction</Badge>
                        <Badge variant="secondary">Informatique</Badge>
                    </div>


                </div>

                {/* Right Column - Profile Image and Resume Button */}
                <div className="flex flex-col items-center gap-4">
                    <Image 
                        src="/images/profile.png" 
                        alt="Mon profil" 
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
                        Télécharger mon CV
                    </a>
                </div>
            </div>
        </Section>
    );
}