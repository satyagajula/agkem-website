'use client';

import { useNavigation } from "@/context/NavigationContext";
import { useEffect, useState } from "react";
import AboutSection from "@/components/sections/AboutSection";

export default function Nosotros() {
  const { currentSection, previousSection, setCurrentSection } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (currentSection !== 'nosotros') {
      setCurrentSection('nosotros');
    }
  }, [currentSection, setCurrentSection]);

  return (
    <div className="relative animate-gradient">
      <AboutSection />
    </div>
  );
}
