'use client';

import { useNavigation } from "@/context/NavigationContext";
import { useEffect, useState } from "react";
import ProductsSection from "@/components/sections/ProductsSection";

export default function Productos() {
  const { currentSection, setCurrentSection } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (currentSection !== 'productos') {
      setCurrentSection('productos');
    }
  }, [currentSection, setCurrentSection]);

  return (
    <div className="h-full w-full">
      <ProductsSection />
    </div>
  );
}