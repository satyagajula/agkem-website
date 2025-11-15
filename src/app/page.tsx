'use client';

import { useNavigation } from "@/context/NavigationContext";
import { useEffect, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  const { currentSection, setCurrentSection } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (currentSection !== 'inicio') {
      setCurrentSection('inicio');
    }
  }, [currentSection, setCurrentSection]);

  return (
    <div className="h-full w-full">
      <HeroSection />
    </div>
  );
}