import Title from "@/components/Title";
import ProjectGrid from "@/components/ProjectGrid";
import SeeAllProjectsButton from "@/components/SeeAllProjectsButton";
import { HomeIcon } from "lucide-react";
import Section from "@/components/Section";

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
        image: "https://media.istockphoto.com/id/1291339958/fr/vectoriel/illustration-vectorielle-de-concept-de-gestion-de-projet-%C3%A9quipe-daffaires-travaillant.jpg?s=612x612&w=0&k=20&c=w-2oCo_srm57gxcudF7jQeqESZ2CaH7PNhOEtihVbmM=",
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

export default function ProjectsSection() {
    return (
        <Section id="projects">
            <Title text="Projets récents" />
            <p className="mb-4 text-gray-600">
                Voici quelques-uns des projets sur lesquels j’ai travaillé,
                mettant en valeur mes compétences dans différentes technologies et domaines.
            </p>
            <ProjectGrid projects={projects}/>
            <SeeAllProjectsButton/>
        </Section>
    )
}