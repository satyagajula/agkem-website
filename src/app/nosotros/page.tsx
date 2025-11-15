'use client';

import { useNavigation } from "@/context/NavigationContext";
import { useEffect, useState } from "react";
import AboutSection from "@/components/sections/AboutSection";

export default function Nosotros() {
  const { currentSection, setCurrentSection } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (currentSection !== 'nosotros') {
      setCurrentSection('nosotros');
    }
  }, [currentSection, setCurrentSection]);

  return (
    <div className="h-full w-full">
      <AboutSection />
    </div>
  );
}