import {LucideIcon} from "lucide-react";

interface BadgeProps {
  icon?: LucideIcon;
  text?: string;
  className?: string;
}

export default function Badge({ icon: Icon, text, className }: Readonly<BadgeProps>) {
  return (
      <div
          className={`
          inline-flex
          items-center
          gap-1
          rounded-full
          px-2
          py-1
          text-sm
          font-medium
          text-black
          border
          border-gray-300
          bg-white
          hover:bg-gray-100
          hover:text-blue-600
          transition-colors
          duration-200 select-none
          ${className || ''}
          `}
      >
        {Icon && <Icon className="h-4 w-4" />}
        {text && <span>{text}</span>}
      </div>
  );
}