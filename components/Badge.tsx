import {LucideIcon} from "lucide-react";

interface BadgeProps {
  icon?: LucideIcon;
  text?: string;
}

export default function Badge({ icon: Icon, text }: Readonly<BadgeProps>) {
  return (
      <div className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium text-gray-500 border border-gray-500 hover:bg-gray-100 transition-colors duration-200 select-none">
        {Icon && <Icon className="h-4 w-4" />}
        {text && <span>{text}</span>}
      </div>
  );
}