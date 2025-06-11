'use client';

import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';

type Section = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

type ActiveSectionContextType = {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  sectionRefs: React.MutableRefObject<{ [key in Section]?: HTMLElement }>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const sectionRefs = useRef<{ [key in Section]?: HTMLElement }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id as Section;
            setActiveSection(sectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    // Observe all section elements
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, sectionRefs }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
}
