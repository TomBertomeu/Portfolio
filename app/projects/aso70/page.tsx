import Image from "next/image";
import Badge from "@/components/Badge";
import { CheckCircle, Star, Code, Users, Target, ArrowRight, BookOpen, BarChart2, Award, GitBranch, Database, Shield, Key, Upload, Server, Cloud, Rocket } from "lucide-react";
import Link from "next/link";

export default function ASO70Project() {
  const projectData = {
    title: "Catalogue en ligne - ASO 70",
    description: "Application web de location de matériel événementiel développée avec Next.js.",
    image: "/images/projects/aso70.png",
    badges: [
      { icon: Code, text: "Next.js" },
    ],
    context: "Développement d'un catalogue en ligne de location de matériel événementiel pour ASO 70. Ce projet de 12 semaines a été l'occasion d'approfondir mes connaissances en développement web moderne, notamment avec l'apprentissage de React et Next.js en autodidacte.",
    role: "Développeur Full Stack",
    team: "Projet individuel",
    date: "2025",
    technologies: ["Next.js", "React", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    services: [
      "Clerk (Authentification)",
      "Vercel Blob (Gestion des ressources)",
      "Drizzle (ORM)",
      "Vercel (Déploiement)"
    ],
    skills: [
      "Architecture Feature Based",
      "Développement React/Next.js",
      "Gestion de base de données",
      "Intégration de services tiers",
      "Déploiement continu"
    ],
    challenges: [
      "Apprentissage autodidacte de React et Next.js",
      "Mise en place d'une architecture évolutive et maintenable",
      "Intégration et orchestration de multiples services externes",
      "Gestion efficace des ressources et des performances"
    ],
    results: [
      "Application performante et évolutive",
      "Architecture modulaire facilitant la maintenance",
      "Expérience utilisateur fluide et intuitive",
      "Base solide pour les évolutions futures"
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
            <p className="text-gray-700 leading-relaxed">
              J'ai choisi d'utiliser <strong>React</strong> et <strong>Next.js</strong> car ce sont des outils idéaux pour développer des applications web modernes, performantes et évolutives. Next.js permet notamment d'optimiser le chargement des pages (rendu côté serveur, génération statique), d'améliorer le SEO, et d'offrir une expérience utilisateur fluide. Ce choix technologique s'inscrit dans une démarche d'efficacité et de professionnalisation du projet.
            </p>
            <div className="mt-6 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <Target className="mr-2 h-5 w-5 text-blue-600" />
                Objectifs principaux
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Créer une application web moderne et performante</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mettre en place une architecture évolutive et maintenable</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Acquérir une expertise en React et Next.js</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Architecture et Organisation */}
          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <GitBranch className="mr-2 h-6 w-6 text-blue-600" />
              Architecture et Organisation
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Feature Based Architecture</h3>
                <p className="text-gray-600">
                  L'organisation du code suit une approche "Feature Based" plutôt qu'une organisation par technologie. 
                  Cette structure permet d'isoler les fonctionnalités et facilite la maintenance en regroupant tous les 
                  fichiers liés à une même fonctionnalité au même endroit.
                </p>
                <pre className="bg-gray-100 rounded p-4 text-xs overflow-x-auto mt-4"><code>{`
src/
├── features/
│   ├── catalog/
│   │   ├── _components/
│   │   │   ├── ProductCard.tsx
│   │   │   └── ...
│   │   ├── _services/
│   │   │   └── ...
│   │   ├── category/
│   │   │   ├── _components/
│   │   │   │   └── ...
│   │   │   ├── _services/
│   │   │   │   └── ...
│   │   │   └── CategoryPage.tsx
│   │   └── CatalogPage.tsx
├── components/
├── hooks/
├── utils/
└── app/
    ├── catalog/
    │   ├── category/
    │   │   └── page.tsx
    │   └── page.tsx
    ├── page.tsx
    ├── layout.tsx
    └── ...
`}</code></pre>
                <p className="text-gray-600 mt-4">
                  Les fichiers ou composants partagés entre plusieurs sous-features sont placés dans le dossier de la feature parente. Par exemple, si <code>ProductCard.tsx</code> est utilisé à la fois dans la page "catalog" et dans la page "category" (qui est une sous-feature de "catalog"), il sera placé dans <code>catalog/_components</code>. Ainsi, tous les enfants de "catalog" peuvent l'utiliser, mais pas les autres features. Pour garantir le respect de cette règle, il est possible de configurer des règles ESLint qui préviennent en cas de transgression.<br />
                  <br />
                  Séparer les pages (<code>/app</code>) et les features (<code>/features</code>) permet de garder une arborescence claire : seuls les fichiers de pages et de layouts se trouvent dans <code>/app</code>, ce qui évite toute pollution de l'arborescence des routes. L'arborescence des features réplique exactement celle des pages, ce qui facilite la navigation dans le code.<br />
                  <br />
                  Les fichiers ou utilitaires communs à tout le projet (hooks, composants, helpers…) sont placés dans des dossiers partagés à la racine du projet.<br />
                  <br />
                  Enfin, j'utilise la convention d'ajouter un <code>_</code> devant le nom des dossiers techniques au sein d'une feature (<code>_components</code>, <code>_services</code>…), ce qui permet de distinguer facilement les sous-features (ex : <code>category</code>) des dossiers techniques.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Services Intégrés</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Key className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Clerk (Authentification)</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Cloud className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Vercel Blob (Gestion des ressources)</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Database className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Drizzle (ORM)</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Rocket className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Vercel (Déploiement)</span>
                  </div>
                </div>
              </div>
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
