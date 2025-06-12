'use client';

import { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';
import { usePathname } from "next/navigation";

type Section = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

type ActiveSectionContextType = {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  sectionRefs: React.MutableRefObject<{ [key in Section]?: HTMLElement }>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isHashNavigation, setIsHashNavigation] = useState(false);
  const sectionRefs = useRef<{ [key in Section]?: HTMLElement }>({});
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isHashNavigation) return;
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
  }, [isHashNavigation]);

  useEffect(() => {
    if (pathname === "/" && window.scrollY === 0) {
      setActiveSection("about");
    }
  }, [pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (["about", "skills", "projects", "experience", "contact"].includes(hash)) {
        setActiveSection(hash as Section);
        setIsHashNavigation(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isHashNavigation) {
        setIsHashNavigation(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHashNavigation]);

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
