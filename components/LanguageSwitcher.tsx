"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "@/contexts/LanguageProvider";
import { FR, GB, NL } from 'country-flag-icons/react/3x2';
import { ChevronDown } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages: { code: Language; label: string; Flag: React.ComponentType<{ className?: string }> }[] = [
    { code: 'fr', label: 'Français', Flag: FR },
    { code: 'en', label: 'English', Flag: GB },
    // { code: 'nl', label: 'Nederlands', Flag: NL }
  ];

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer inline-flex h-9 items-center justify-center gap-2 rounded-md border border-input bg-background px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <currentLanguage.Flag className="w-5 h-5 rounded-sm" />
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 rounded-md border border-border bg-popover p-1 shadow-md animate-in fade-in zoom-in-95 duration-200 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`cursor-pointer flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground ${
                language === lang.code ? "bg-accent text-accent-foreground" : ""
              }`}
            >
              <lang.Flag className="w-5 h-5 rounded-sm" />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
