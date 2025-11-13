'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type Section = 'inicio' | 'nosotros' | 'productos' | 'contacto';

interface NavigationContextType {
  currentSection: Section;
  previousSection: Section | null;
  setCurrentSection: (section: Section) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentSection, setCurrentSection] = useState<Section>('inicio');
  const [previousSection, setPreviousSection] = useState<Section | null>(null);

  useEffect(() => {
    const sectionFromPath = pathname === '/' ? 'inicio' : pathname.slice(1) as Section;
    if (sectionFromPath && sectionFromPath !== currentSection) {
      setPreviousSection(currentSection);
      setCurrentSection(sectionFromPath);
    }
  }, [currentSection, pathname]);

  const handleSetCurrentSection = (section: Section) => {
    setPreviousSection(currentSection);
    setCurrentSection(section);
    router.push(`/${section === 'inicio' ? '' : section}`);
  };

  return (
    <NavigationContext.Provider value={{ currentSection, previousSection, setCurrentSection: handleSetCurrentSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};
