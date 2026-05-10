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

  const getInitialTransform = () => {
    switch (direction) {
      case "left":  return "translate-y-8 md:translate-y-0 md:-translate-x-8";
      case "right": return "translate-y-8 md:translate-y-0 md:translate-x-8";
      case "up":    return "translate-y-8";
      case "down":  return "-translate-y-8";
      default:      return "";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${getInitialTransform()}`
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
