import React from "react";
import clsx from "clsx";

interface BadgeProps {
  text: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function Badge({ text, className, icon }: Readonly<BadgeProps>) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary",
        className
      )}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {text}
    </span>
  );
}
