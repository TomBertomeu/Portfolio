"use client";

import React, { useEffect, useRef, useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getInitialTransform = () => {
    // Reduced distance from 20 (5rem) to 8 (2rem) for subtler effect
    // Responsive logic:
    // - Base (Mobile): Always 'translate-y-8' (Standard 'up' animation)
    // - md (Desktop): Specific direction
    switch (direction) {
      case "left":
        // Mobile: Up (y-8), Desktop: Left (-x-8, reset y)
        return "translate-y-8 md:translate-y-0 md:-translate-x-8";
      case "right":
        // Mobile: Up (y-8), Desktop: Right (x-8, reset y)
        return "translate-y-8 md:translate-y-0 md:translate-x-8";
      case "up":
        // Always Up
        return "translate-y-8";
      case "down":
        // Always Down
        return "-translate-y-8";
      default: return "";
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
