"use client";
import { Code, Layout, Database, Server, Settings, PenTool } from "lucide-react";
import Title from "@/components/Title";

import { useLanguage } from "@/contexts/LanguageProvider";

export default function SkillsetSection() {
  const { t } = useLanguage();
  const skillGroups = [
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: 'skills.groups.languages',
      skills: [
        "Arduino",
        "C",
        "C++",
        "HTML/CSS",
        "Java",
        "JavaScript",
        "JSON",
        "Python",
        "SQL",
        "TypeScript",
      ],
    },
    {
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      title: 'skills.groups.frontend',
      skills: [
        "Next.js",
        "React",
        "React Native",
        "Tailwind CSS",
        "Vue.js",
        "iOS",
        "Android",
      ],
    },
    {
      icon: <Server className="w-6 h-6 text-blue-500" />,
      title: 'skills.groups.backend',
      skills: [
        "Express.js",
        "Flask",
        "Laravel",
        "Node.js",
        "Spring Boot",
        "FastAPI",
      ],
    },
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: 'skills.groups.database',
      skills: [
        "Cassandra",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Redis",
        "SQLite",
      ],
    },
    {
      icon: <Settings className="w-6 h-6 text-blue-500" />,
      title: 'skills.groups.tools',
      skills: [
        "Capacitor",
        "Docker",
        "Expo",
        "Git",
        "GitLab",
        "Jenkins",
        "Kubernetes",
        "LangChain",
        "Postman",
        "VirtualBox",
      ],
    },
    {
      icon: <PenTool className="w-6 h-6 text-blue-500" />,
      title: 'skills.groups.design',
      skills: [
        "Figma",
        "Prototyping",
        "UI/UX Design",
        "Wireframing",
      ],
    },
  ];

  // --- END skillGroups definition ---

  return (
    <section className="py-16 px-8 md:px-0 max-w-6xl mx-auto" id="skills">
      <Title text={t('skills.title')} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-white/70 border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-4 min-h-[170px]"
          >
            <div className="flex items-center gap-2 mb-2">
              {group.icon}
              <span className="font-semibold text-lg text-gray-800">{t(group.title)}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
