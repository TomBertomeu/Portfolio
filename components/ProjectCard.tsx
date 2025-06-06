import Link from "next/link";
import {LucideIcon} from "lucide-react";
import Badge from "@/components/Badge";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    badges?: {
        icon?: LucideIcon;
        text?: string;
    }[];
}

export default function ProjectCard({ title, description, image, link, badges }: Readonly<ProjectCardProps>) {
    return (
        <Link href={link} className="block w-full overflow-hidden rounded-lg border border-gray-200 bg-white hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">
            <Image src={image} alt={title} width={400} height={200} className="w-full h-48 object-cover" />

            <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="text-gray-700">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {badges?.map((badge, index) => (
                        <Badge text={badge.text} icon={badge.icon} key={index} />
                    ))}
                </div>
            </div>
        </Link>
    );
}