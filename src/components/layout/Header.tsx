'use client';

import React, { useState, useEffect } from 'react';
import Logo from '@/components/ui/Logo';
import { Menu, X } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentSection } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', section: 'inicio' },
    { label: 'Quienes Somos', section: 'nosotros' },
    { label: 'Productos', section: 'productos' },
    { label: 'Contacto', section: 'contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-agkem-dark transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-3 z-10 relative">
            <Logo width={40} height={40} />
            <span className="text-white font-bold text-xl lg:text-2xl tracking-wider">
              AG KEM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 z-10 relative">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={`/${item.section === 'inicio' ? '' : item.section}`}
                className={`text-sm lg:text-base font-medium transition-colors duration-200 ${
                  currentSection === item.section
                    ? 'text-agkem-primary'
                    : 'text-white hover:text-agkem-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-agkem-primary transition-colors z-10 relative"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-agkem-dark shadow-lg z-10">
            <div className="flex flex-col py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={`/${item.section === 'inicio' ? '' : item.section}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 transition-colors duration-200 text-left ${
                    currentSection === item.section
                      ? 'text-agkem-primary bg-agkem-primary/10 border-l-8 border-agkem-primary rounded-l-sm'
                      : 'text-white hover:bg-agkem-primary/10 hover:text-agkem-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
