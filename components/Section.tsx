import React from "react";
import clsx from "clsx";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: Readonly<SectionProps>) {
  return (
    <section
      id={id}
      className={clsx("relative z-20 bg-background py-20", className)}
    >
      <div className="mx-auto max-w-5xl px-4">
        {children}
      </div>
    </section>
  );
}
