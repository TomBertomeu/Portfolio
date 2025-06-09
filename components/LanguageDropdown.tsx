"use client";
import { useRef, useEffect, useState } from "react";
import GB from 'country-flag-icons/react/3x2/GB';
import FR from 'country-flag-icons/react/3x2/FR';
import NL from 'country-flag-icons/react/3x2/NL';

import type { Language } from "@/contexts/LanguageProvider";

const flagMap: Record<Language, JSX.Element> = {
  en: <GB title="English" className="absolute inset-0 w-full h-full" />,
  fr: <FR title="Français" className="absolute inset-0 w-full h-full" />,
  nl: <NL title="Nederlands" className="absolute inset-0 w-full h-full" />,
};

interface LanguageDropdownProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  availableLanguages: readonly Language[];
}

export default function LanguageDropdown({ language, setLanguage, availableLanguages }: LanguageDropdownProps) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        className="border rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 flex items-center focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Switch language"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span className="rounded-full overflow-hidden w-9 h-9 aspect-square min-w-0 min-h-0 flex items-center justify-center relative">
  <span
    className="absolute inset-0 w-full h-full block"
    style={{
      WebkitMaskImage: 'radial-gradient(circle, white 100%, transparent 100%)',
      maskImage: 'radial-gradient(circle, white 100%, transparent 100%)',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: '100% 100%',
      maskSize: '100% 100%'
    }}
  >
          {flagMap[language]}
    </span>
  </span>
      </button>
      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border rounded shadow-lg z-50 flex flex-col"
          role="listbox"
          tabIndex={-1}
        >
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setOpen(false);
              }}
              className={`flex items-center px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none min-w-0 justify-start`}
              role="option"
              aria-selected={language === lang}
              tabIndex={0}
              type="button"
>
  <span className={`rounded-full overflow-hidden w-9 h-9 aspect-square min-w-0 min-h-0 flex items-center justify-center relative ${language === lang ? 'ring-2 ring-blue-500' : ''}`}>
  <span
    className="absolute inset-0 w-full h-full block"
    style={{
      WebkitMaskImage: 'radial-gradient(circle, white 100%, transparent 100%)',
      maskImage: 'radial-gradient(circle, white 100%, transparent 100%)',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: '100% 100%',
      maskSize: '100% 100%'
    }}
  >
    {flagMap[lang]}
    </span>
  </span>
</button>
          ))}
        </div>
      )}
    </div>
  );
}
