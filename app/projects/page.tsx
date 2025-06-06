import Title from "@/components/Title";
import ProjectGrid from "@/components/ProjectGrid";
import { HomeIcon } from "lucide-react";

const projects = [
    {
        title: "Projet 1",
        description: "Description du projet 1",
        image: "https://img.freepik.com/premium-vector/project-planning-abstract-concept-vector-illustration_107173-75508.jpg?semt=ais_items_boosted&w=740",
        link: "/projects/project-1",
        badges: [
            { icon: HomeIcon, text: "Nouveau" },
            { icon: HomeIcon, text: "Populaire" }
        ]
    },
    {
        title: "Projet 2",
        description: "Description du projet 2",
        image: "https://img.freepik.com/premium-vector/project-management-business-team-abstract-concept-vector-illustration_107173-75509.jpg?semt=ais_items_boosted&w=740",
        link: "/projects/project-2",
        badges: [
            { icon: HomeIcon, text: "En cours" },
            { icon: HomeIcon, text: "À venir" }
        ]
    },
    {
        title: "Projet 3",
        description: "Description du projet 3",
        image: "https://www.projectaccelerator.co.uk/wp-content/uploads/2017/01/project-management-infographic.jpg",
        link: "/projects/project-3",
        badges: [
            { icon: HomeIcon, text: "Terminé" },
            { icon: HomeIcon, text: "Réussi" }
        ]
    }
];

export default function Projects() {
    return (
        <div className="max-w-6xl mx-auto px-8 md:px-0 py-16 min-h-screen flex flex-col">
            <Title text="Tous mes projets" />
            <ProjectGrid projects={projects} />
        </div>
    );
}