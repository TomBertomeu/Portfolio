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
    switch (direction) {
      case "left": return "-translate-x-20";
      case "right": return "translate-x-20";
      case "up": return "translate-y-20";
      case "down": return "-translate-y-20";
      default: return "";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible 
          ? "opacity-100 translate-x-0 translate-y-0" 
          : `opacity-0 ${getInitialTransform()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
