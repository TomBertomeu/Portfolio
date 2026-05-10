"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

const DEFAULT_THRESHOLD = 0.1;
const DEFAULT_ROOT_MARGIN = "50px";

export function useInView<T extends Element = HTMLDivElement>({
  threshold = DEFAULT_THRESHOLD,
  rootMargin = DEFAULT_ROOT_MARGIN,
  once = true,
}: UseInViewOptions = {}): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isInView];
}
