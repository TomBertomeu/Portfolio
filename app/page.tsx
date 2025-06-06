import AboutSection from "@/components/AboutSection";
import SkillsetSection from "@/components/SkillsetSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
    return (
        <div className="mx-auto max-w-6xl">
            <AboutSection />
            <ProjectsSection />
            <SkillsetSection />
            <ContactSection />
        </div>
    );
}