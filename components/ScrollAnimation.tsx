"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down" | "none";
  className?: string;
  delay?: number;
}

export default function ScrollAnimation({
  children,
  direction = "up",
  className = "",
  delay = 0
}: Readonly<ScrollAnimationProps>) {
  const [ref, isVisible] = useInView<HTMLDivElement>();

  // Visibility is controlled by CSS (styles/globals.css), gated on `html.js`, so the
  // prerendered content stays visible for no-JS clients and crawlers. The animation
  // only enhances; it never hides content from anyone who can't run the observer.
  return (
    <div
      ref={ref}
      data-reveal
      data-direction={direction}
      data-visible={isVisible}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
