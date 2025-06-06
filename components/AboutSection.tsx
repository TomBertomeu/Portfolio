import Title from "@/components/Title";
import Section from "@/components/Section";
import Image from "next/image";
import "@/styles/shimmer-effect.css";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
    return (
        <Section id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Information */}
                <div>
                    <div>
                        <p className="text-2xl font-bold text-gray-800">Bonjour! Je suis</p>
                        <span className="shimmer inline-block">
                            <Title text={"Tom Bertomeu"} />
                        </span>
                        <p className="mt-2 text-gray-600">
                            Étudiant en BUT à l'IUT de Belfort Montbéliard
                        </p>
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
                        width={250} 
                        height={250}
                        className="rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
                    />
                    <Button variant="outline">
                        <a href="/cv.pdf" download="cv-tom-bertomeu.pdf">
                            Télécharger mon CV
                        </a>
                    </Button>
                </div>
            </div>
        </Section>
    );
}