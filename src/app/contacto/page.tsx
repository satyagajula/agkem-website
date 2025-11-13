'use client';

import { useNavigation } from "@/context/NavigationContext";
import { useEffect, useState } from "react";
import ContactSection from "@/components/sections/ContactSection";

export default function Contacto() {
  const { currentSection, previousSection, setCurrentSection } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (currentSection !== 'contacto') {
      setCurrentSection('contacto');
    }
  }, [currentSection, setCurrentSection]);

  return (
    <div className="relative animate-gradient">
      <ContactSection />
    </div>
  );
}
