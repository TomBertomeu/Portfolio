import Image from "next/image";
import Badge from "@/components/Badge";
import { CheckCircle, Code, Cpu, BookOpen, Target, Award, LayoutGrid, Users } from "lucide-react";
import Link from "next/link";

export default function SmartChefProject() {
  const projectData = {
    title: "Smart Chef - Application React Native",
    description: "Application React Native interagissant avec un LLM via une API Python (FastAPI) pour proposer des plats en fonction des produits disponibles, des objectifs, des préférences et des allergies de l'utilisateur.",
    image: "/images/projects/smart-chef.png",
    badges: [
      { icon: Code, text: "React Native" },
      { icon: Code, text: "FastAPI" },
      { icon: Code, text: "LangChain" },
    ],
    context: "Projet réalisé en 2025. L'objectif était de développer une application React Native interagissant avec un LLM via une API Python (FastAPI) pour proposer des plats en fonction des produits disponibles, des objectifs, des préférences et des allergies de l'utilisateur. Le LLM utilise une grande base de données pour faire ses choix, après un tri via des filtres personnalisés. Les interactions avec le LLM sont formatées à l'aide de LangChain.",
    role: "Développeur React Native",
    team: "2 étudiants",
    date: "2025",
    technologies: ["React Native", "FastAPI", "LLM", "LangChain"],
    skills: [
      "Développement d'applications React Native",
      "Interaction avec une API Python (FastAPI)",
      "Utilisation de LLM (OpenAI ou Mistral)",
      "Gestion des données et des requêtes",
      "Interface utilisateur interactive"
    ],
    results: [
      "Application fonctionnelle avec interface utilisateur interactive",
      "API Python (FastAPI) interagissant avec un LLM",
      "Première expérience de projet React Native"
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
                  <span>Développer une application React Native interagissant avec un LLM via une API Python (FastAPI)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Proposer des plats en fonction des produits disponibles, des objectifs, des préférences et des allergies de l'utilisateur</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Créer une interface utilisateur interactive et attrayante</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Découvrir le développement d'applications React Native</span>
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
                <h3 className="font-medium text-gray-900 mb-2">Application React Native</h3>
                <p className="text-gray-600">
                  Développement d'une application React Native permettant de proposer des plats en fonction des produits disponibles, des objectifs, des préférences et des allergies de l'utilisateur, en interagissant avec un LLM via une API Python (FastAPI).
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">API Python (FastAPI) & LangChain</h3>
                <p className="text-gray-600">
                  Création d'une API Python (FastAPI) interagissant avec un LLM pour fournir des suggestions de plats, en utilisant une grande base de données pour les choix, après un tri via des filtres personnalisés. Les échanges avec le LLM sont structurés grâce à LangChain.
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