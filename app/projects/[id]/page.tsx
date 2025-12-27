import { getProjects } from "@/data/projects";
import ProjectDetailClient from "./client";

export async function generateStaticParams() {
  const projects = getProjects("fr");
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProjectDetailClient id={id} />;
}
