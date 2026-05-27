import { container } from "@/lib/container";
import ProjectDetailClient from "./client";
import { Metadata } from "next";

export async function generateStaticParams() {
  const projects = container.getAllProjects("fr");
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = container.getProjectById(id, "fr");

  if (!project) {
    return {
      title: "Projet non trouvé | Tom Bertomeu",
      description: "Le projet que vous cherchez n'existe pas.",
    };
  }

  return {
    title: `${project.title} | Tom Bertomeu`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Portfolio Tom Bertomeu`,
      description: project.description,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProjectDetailClient id={id} />;
}
