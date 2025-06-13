import Image from "next/image";
import Badge from "@/components/Badge";
import { CheckCircle, Wifi, WifiOff, Smartphone, Cpu, GitBranch, Code, Database, CpuIcon, Target, BookOpen, Award } from "lucide-react";
import Link from "next/link";
import LocalFirstDiagram from "./LocalFirstDiagram";

export default function VecofroidProject() {
  // Données spécifiques au projet Vecofroid
  const projectData = {
    title: "Application de Gestion des Interventions",
    description: "Outil de gestion des interventions et bons d'intervention pour Vecofroid.",
    image: "/images/projects/vecofroid.png",
    badges: [
      { icon: Code, text: "Vue.js" },
      { icon: Code, text: "Ionic" },
      { icon: Code, text: "Capacitor" },
      { icon: Code, text: "Express" },
      { icon: Code, text: "PostgreSQL" },
    ],
    // Données spécifiques à la page de détail
    context: "Application web et mobile développée pendant un stage de 8 semaines chez Vecofroid, entreprise spécialisée dans l'installation et la maintenance frigorifique. L'objectif était de moderniser leur système de gestion des interventions en permettant aux techniciens de créer et suivre leurs interventions même sans connexion internet.",
    role: "Développeur Full Stack",
    team: "1 développeur (moi) avec supervision du tuteur de stage",
    date: "2024",
    technologies: ["Vue.js", "Ionic", "Capacitor", "API REST"],
    results: [
      "Application web et mobile fonctionnelle déployée en production",
      "Réduction significative du temps de saisie des bons d'intervention",
      "Élimination des pertes de données dans les zones sans couverture réseau"
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
          <section>
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
                  <span>Développer une application de gestion des interventions accessible sur web et mobile</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Assurer le bon fonctionnement en mode hors-ligne pour les zones sans connexion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Faciliter la création et le suivi des bons d'intervention</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Gestion hors-ligne */}
          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-6">
              <div className="relative mr-2">
                <WifiOff className="h-6 w-6 text-blue-600 absolute" />
                <Wifi className="h-6 w-6 text-blue-600 opacity-30" />
              </div>
              Gestion hors-ligne
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700 mb-6">
                L'une des fonctionnalités clés de cette application est sa capacité à fonctionner de manière autonome, même sans connexion Internet. Voici comment cela fonctionne :
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Local First</strong> : Toutes les modifications effectuées par l'utilisateur sont d'abord appliquées localement sur l'appareil. Cela garantit que l'application reste totalement fonctionnelle, même en zone blanche ou sans connexion. Dès qu'une connexion réseau est retrouvée, toutes les modifications sont automatiquement synchronisées avec l'API distante.
              </p>
              <LocalFirstDiagram />
              <p className="text-gray-700 mb-6">
                Ce système assure la continuité du service, la sécurité des données et une expérience utilisateur optimale, peu importe les conditions de réseau.
              </p>
            </div>
          </section>

          {/* Compétences développées */}
          <section className="prose max-w-none mt-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-blue-600" />
              Compétences développées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Développement d'applications web et mobiles hybrides (Vue.js, Ionic)</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Gestion de la persistance locale (Local First)</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Synchronisation de données et gestion des conflits</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Conception d'API REST sécurisées</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Expérience utilisateur en conditions réelles (zones blanches, mobilité)</span>
              </div>
            </div>
          </section>
        </div>

        {/* Barre latérale */}
        <div className="space-y-8">
          {/* Détails du projet */}
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

          {/* Résultats */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-lg mb-4">Résultats</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Application web et mobile fonctionnelle déployée en production</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Réduction significative du temps de saisie des bons d'intervention</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Élimination des pertes de données dans les zones sans couverture réseau</span>
              </li>
            </ul>
          </div>

          {/* Appel à l'action */}
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-semibold text-lg mb-3">En savoir plus ?</h3>
            <p className="text-gray-700 text-sm mb-4">
              Ce projet vous intéresse ? Je serais ravi d'échanger plus en détail sur cette expérience et les défis techniques rencontrés.
            </p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
