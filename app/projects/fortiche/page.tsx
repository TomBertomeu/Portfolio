import Image from "next/image";
import Badge from "@/components/Badge";
import { CheckCircle, Star, Code, Users, Target, ArrowRight, BookOpen, BarChart2, Award } from "lucide-react";
import Link from "next/link";

export default function ForticheProject() {
  // Données spécifiques au projet Fortiche
  const projectData = {
    title: "Site de Présentation - Fortiche",
    description: "Site web de présentation d'un studio d'animation français réalisé dans le cadre d'un projet académique.",
    image: "/images/projects/fortiche.webp",
    badges: [
      { icon: Star, text: "Premier Projet" }
    ],
    // Données spécifiques à la page de détail
    context: "Mon tout premier projet web réalisé dans le cadre de ma formation. L'objectif était de créer un site de présentation pour le studio d'animation français Fortiche, connu pour des productions comme la série 'Arcane'. Ce projet a marqué mes premiers pas dans le développement web.",
    role: "Rédacteur et intégrateur web - Section 'Histoire'",
    team: "4 étudiants",
    date: "2022",
    technologies: ["HTML", "CSS", "JavaScript"],
    skills: [
      "Recherche documentaire",
      "Rédaction de contenu",
      "Conception de maquettes",
      "Développement HTML/CSS",
      "Travail d'équipe"
    ],
    challenges: [
      "Apprendre les bases du développement web (HTML, CSS, JavaScript)",
      "Découvrir et appliquer les bases de la gestion de projet en équipe",
      "Créer une identité visuelle cohérente avec l'univers du studio"
    ],
    results: [
      "Site web responsive et accessible",
      "Contenu informatif et bien structuré",
      "Bonne collaboration au sein de l'équipe"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* En-tête avec image et titre */}
      <div className="mb-12">
        <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-8">
          <Image
            src={projectData.image}
            alt={projectData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              {projectData.badges?.map((badge, index) => (
                <Badge key={index} icon={badge.icon} text={badge.text} className="bg-white/10 backdrop-blur-sm" />
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">{projectData.title}</h1>
            <p className="text-xl text-gray-200">{projectData.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contenu principal */}
        <div className="lg:col-span-2 space-y-12">
          {/* Contexte et objectifs */}
          <section className="prose max-w-none">
            <h2 className="flex items-center text-2xl font-semibold mb-6">
              <BookOpen className="mr-2 h-6 w-6 text-blue-600" />
              Contexte et objectifs
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {projectData.context}
            </p>
            <div className="mt-6 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <Target className="mr-2 h-5 w-5 text-blue-600" />
                Objectifs principaux
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mettre en avant les productions et l'univers créatif du studio</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Défis rencontrés */}
          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <BarChart2 className="mr-2 h-6 w-6 text-blue-600" />
              Défis rencontrés
            </h2>
            <div className="space-y-4">
              {projectData.challenges.map((challenge, index) => (
                <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-medium text-gray-900 mb-2">Défi #{index + 1}</h3>
                  <p className="text-gray-600">{challenge}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Compétences développées */}
          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-blue-600" />
              Compétences développées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectData.skills.map((skill, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Détails du projet</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Rôle</p>
                <p className="text-gray-700">{projectData.role}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Équipe</p>
                <p className="text-gray-700">{projectData.team}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {projectData.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Date</p>
                <p className="text-gray-700">{projectData.date}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-lg mb-4">Résultats</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Analyse du marché de l'animation française</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Diagnostic financier approfondi de Fortiche Production</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-3">Envie d'en savoir plus ?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Ce projet vous intéresse ? N'hésitez pas à me contacter pour plus d'informations ou pour discuter d'opportunités similaires.
            </p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
