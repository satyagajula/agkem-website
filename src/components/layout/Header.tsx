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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentSection]);

  const menuItems = [
    { label: 'Inicio', section: 'inicio' },
    { label: 'Quienes Somos', section: 'nosotros' },
    { label: 'Productos', section: 'productos' },
    { label: 'Contacto', section: 'contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-agkem-dark transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20 2xl:h-28">
          <Link 
            href="/" 
            className="flex items-center space-x-2 sm:space-x-3 2xl:space-x-4 z-50 relative"
            data-testid="header-logo-link"
          >
            <Logo 
              width={36} 
              height={36} 
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 2xl:w-16 2xl:h-16" 
            />
            <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl 2xl:text-4xl tracking-wider">
              AG KEM
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 2xl:space-x-12 z-10 relative">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={`/${item.section === 'inicio' ? '' : item.section}`}
                className={`text-sm lg:text-base 2xl:text-2xl font-medium transition-colors duration-200 hover:text-agkem-primary ${
                  currentSection === item.section
                    ? 'text-agkem-primary'
                    : 'text-white'
                }`}
                data-testid={`header-nav-${item.section}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-agkem-primary transition-colors z-50 relative p-2 -mr-2 touch-manipulation"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          <div 
            className="fixed top-16 left-0 right-0 bottom-0 bg-agkem-dark shadow-xl z-40 md:hidden overflow-y-auto"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={`/${item.section === 'inicio' ? '' : item.section}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 transition-all duration-200 text-left font-medium touch-manipulation min-h-[44px] flex items-center ${
                    currentSection === item.section
                      ? 'text-agkem-primary bg-agkem-primary/10 border-l-4 border-agkem-primary'
                      : 'text-white hover:bg-agkem-primary/10 hover:text-agkem-primary'
                  }`}
                  data-testid={`mobile-nav-${item.section}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;