import Image from "next/image";
import Badge from "@/components/Badge";
import { CheckCircle, Code, LayoutGrid, Award, BookOpen, Target, Users } from "lucide-react";

export default function DroneIAProject() {
  const projectData = {
    title: "Drone à commande vocale alimenté par IA",
    description: "Projet d'architecture logicielle et matérielle pour un drone contrôlé par commande vocale, intégrant de l'IA pour l'analyse et la centralisation des données issues de microcontrôleurs, d'une application mobile et d'un serveur d'analyse vidéo.",
    image: "/images/projects/drone-ia.png",
    badges: [
      { icon: Code, text: "Java" },
      { icon: Code, text: "Node.js" },
      { icon: Code, text: "MongoDB" },
      { icon: Code, text: "Vue.js" },
      { icon: Code, text: "Docker" },
      { icon: Code, text: "OpenCV" },
    ],
    context: "L'objectif était de concevoir une architecture complète pour un drone à commande vocale, en respectant des contraintes imposées : centralisation des données via un serveur Java, analyse vidéo par IA, stockage MongoDB, API Node.js, et visualisation des données sur une interface Vue.js. Toutes les parties serveurs sont conteneurisées avec Docker.",
    role: "Développeur fullstack et intégrateur système",
    team: "4 étudiants",
    date: "2025",
    technologies: [
      "Java (serveur central)",
      "Node.js (API)",
      "MongoDB",
      "Vue.js (frontend)",
      "OpenCV (analyse vidéo)",
      "ESP32 (microcontrôleurs)",
      "Docker",
      "GitLab"
    ],
    skills: [
      "Programmation client/serveur en Java",
      "Création d'API REST Node.js avec Mongoose",
      "Gestion de base de données MongoDB",
      "Développement frontend Vue.js",
      "Programmation microcontrôleurs (ESP32)",
      "Traitement d'image avec OpenCV",
      "Conteneurisation Docker",
      "Intégration continue avec GitLab CI",
      "Travail en équipe et adaptation de code existant"
    ],
    results: [
      "Architecture logicielle et matérielle fonctionnelle respectant toutes les contraintes du cahier des charges.",
      "Mise en place d'une chaîne complète de collecte, traitement, centralisation et visualisation des données du drone.",
      "Automatisation du déploiement des serveurs via Docker et scripts CI."
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
            <p className="text-gray-700 leading-relaxed">{projectData.context}</p>
            <div className="mt-6 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <Target className="mr-2 h-5 w-5 text-blue-600" />
                Objectifs principaux
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Centraliser et analyser les données issues de multiples sources (microcontrôleurs, mobile, serveur d'analyse vidéo)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Assurer la visualisation des résultats sur une interface web moderne</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Respecter les contraintes d'architecture et d'intégration continue</span>
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
                <h3 className="font-medium text-gray-900 mb-2">Architecture globale</h3>
                <Image src="/images/projects/drone-ia-architecture.png" alt="Schéma d'architecture du projet drone IA" width={900} height={400} className="rounded-lg border my-4" />
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Serveur central Java (TCP) pour la centralisation et la gestion des données</li>
                  <li>API Node.js pour l'accès à la base MongoDB et la communication avec le frontend</li>
                  <li>Microcontrôleurs ESP32 pour la gestion des capteurs et actionneurs (LED, boutons, capteurs BPM, accéléromètre...)</li>
                  <li>Application mobile Android pour la capture vidéo et l'envoi au serveur d'analyse (OpenCV)</li>
                  <li>Frontend Vue.js pour la visualisation des données et le pilotage</li>
                  <li>Conteneurisation Docker et scripts GitLab CI pour l'intégration continue</li>
                </ul>
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
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6 h-fit">
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
          <div>
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
        </div>
      </div>
    </div>
  );
} 