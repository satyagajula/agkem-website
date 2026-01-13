'use client';

import { useNavigation } from "@/context/NavigationContext";
import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  const { currentSection, setCurrentSection } = useNavigation();

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