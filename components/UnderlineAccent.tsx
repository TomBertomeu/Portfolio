"use client";

import { useId } from "react";

interface UnderlineAccentProps {
  strong?: boolean;
}

export default function UnderlineAccent({ strong = false }: Readonly<UnderlineAccentProps>) {
  const id = useId();
  const gradId = `ul-grad-${id}`;
  const grainId = `ul-grain-${id}`;
  const strokeWidth = strong ? 8 : 6;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 24"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-4 -left-3 z-0 h-8 w-[calc(100%+1.5rem)] overflow-visible"
    >
      <defs>
        <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2563eb" stopOpacity={1} />
          <stop offset="100%" stopColor="#10b981" stopOpacity={1} />
        </linearGradient>
        <filter id={grainId} x="-20%" y="-100%" width="140%" height="300%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="2.5" />
        </filter>
      </defs>
      <path
        d="M1 14 Q 25 8, 50 11 T 99 12"
        stroke={`url(#${gradId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        filter={`url(#${grainId})`}
      />
    </svg>
  );
}
