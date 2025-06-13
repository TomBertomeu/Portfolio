import Image from "next/image";
import Badge from "@/components/Badge";
import { CheckCircle, Code, Cpu, BookOpen, Target, Award, LayoutGrid, Users } from "lucide-react";
import Link from "next/link";

export default function ARvolutionProject() {
  const projectData = {
    title: "ARvolution - Salon de réalité virtuelle",
    description: "Site de présentation pour un salon sur la réalité virtuelle, avec réservation de stands et de créneaux.",
    image: "/images/projects/arvolution.png",
    badges: [
      { icon: Code, text: "Vue.js" },
      { icon: Code, text: "PostgreSQL" },
      { icon: Code, text: "Express" },
    ],
    context: "Projet Vue.js réalisé en 2024. L'objectif était de créer un site de présentation pour un salon sur la réalité virtuelle, avec gestion des cookies, authentification, et réservation de stands et de créneaux.",
    role: "Développeur Front-end",
    team: "4 étudiants",
    date: "2024",
    technologies: ["Vue.js"],
    skills: [
      "Développement front-end avec Vue.js",
      "Gestion des cookies",
      "Authentification",
      "Réservation de stands sur une carte interactive",
      "Réservation de créneaux de conférence sur un planning"
    ],
    results: [
      "Site fonctionnel avec interface utilisateur interactive",
      "Gestion des cookies et authentification",
      "Réservation de stands et de créneaux",
      "Première expérience de projet Vue.js"
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
                <Badge key={index} icon={badge.icon} text={badge.text} className="bg-white/80 backdrop-blur-sm hover:bg-white" />
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
                  <span>Créer un site de présentation pour un salon sur la réalité virtuelle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Gérer les cookies et l'authentification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Permettre la réservation de stands et de créneaux</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Développer une interface utilisateur interactive avec Vue.js</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Architecture et organisation */}
          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <LayoutGrid className="mr-2 h-6 w-6 text-blue-600" />
              Architecture et organisation
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Interface utilisateur Vue.js</h3>
                <p className="text-gray-600">
                  Développement d'une interface utilisateur interactive en utilisant Vue.js, avec gestion des cookies et authentification.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Réservation de stands et de créneaux</h3>
                <p className="text-gray-600">
                  Implémentation d'une carte interactive pour la réservation de stands et d'un planning pour la réservation de créneaux.
                </p>
              </div>
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
              {projectData.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{result}</span>
                </li>
              ))}
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