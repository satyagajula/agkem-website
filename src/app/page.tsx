'use client';

import { useNavigation } from "@/context/NavigationContext";
import { useEffect, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  const { currentSection, previousSection, setCurrentSection } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (currentSection !== 'inicio') {
      setCurrentSection('inicio');
    }
  }, [currentSection, setCurrentSection]);

  return (
    <div className="relative animate-gradient">
      <HeroSection />
    </div>
  );
}
