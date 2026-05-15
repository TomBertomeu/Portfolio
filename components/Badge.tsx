import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors select-none",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary",
        primary: "bg-primary/10 text-primary hover:bg-primary/20",
        outline: "border border-border bg-transparent text-foreground hover:bg-accent",
      },
      size: {
        default: "px-3 py-1 text-sm",
        sm: "px-2.5 py-0.5 text-xs",
        xs: "px-2 py-0.5 text-[10px] gap-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  text: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function Badge({ text, className, variant, size, icon }: Readonly<BadgeProps>) {
  return (
    <span className={clsx(badgeVariants({ variant, size }), className)}>
      {icon && <span className="flex items-center justify-center w-4 h-4">{icon}</span>}
      {text}
    </span>
  );
}

