import AboutSection from "@/components/AboutSection";
import BouncingArrow from "@/components/BouncingArrow";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsetSection from "@/components/SkillsetSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
    return (
        <div className="mx-auto max-w-6xl">
            <AboutSection />
            <SkillsetSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
            <BouncingArrow targetId="skills" />
        </div>
    );
}