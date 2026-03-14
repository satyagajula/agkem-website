'use client';

import React, { useState, useEffect, useRef } from 'react';
import Logo from '@/components/ui/Logo';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductosOpen, setIsProductosOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const { currentSection } = useNavigation();
  const router = useRouter();

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredResults([]);
      setShowSearchResults(false);
      return;
    }

    const searchLower = query.toLowerCase();
    const results: any[] = [];

    // Search categories
    productCategories.forEach((category) => {
      if (category.name.toLowerCase().includes(searchLower)) {
        results.push({
          type: 'category',
          name: category.name,
          slug: category.slug,
          url: `/productos/${category.slug}`,
        });
      }

      // Search products within categories
      category.products.forEach((product) => {
        if (product.title.toLowerCase().includes(searchLower)) {
          results.push({
            type: 'product',
            name: product.title,
            category: category.name,
            slug: product.slug,
            url: `/productos/${category.slug}/${product.slug}`,
          });
        }
      });
    });

    setFilteredResults(results);
    setShowSearchResults(results.length > 0);
  };

  const handleResultClick = (url: string) => {
    router.push(url);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  const menuItems = [
    { label: 'Inicio', section: 'inicio' },
    { label: 'Quienes Somos', section: 'nosotros' },
    { label: 'Productos', section: 'productos' },
    { label: 'Contacto', section: 'contacto' },
  ];

  const productCategories = [
    {
      name: 'Fungicidas',
      slug: 'fungicidas',
      products: [
        { title: 'LANDER 250', slug: 'lander250' },
        { title: 'METALAXIL 240 CE', slug: 'metalaxil240ce' },
        { title: 'SLASH 250', slug: 'slash250' },
        { title: 'SANARE', slug: 'sanare' },
      ],
    },
    {
      name: 'Insecticidas',
      slug: 'insecticidas',
      products: [
        { title: 'ABAMECTINA 1.8 CE', slug: 'abamectina18ce' },
        { title: 'KAPRID 200', slug: 'kaprid200' },
        { title: 'ALFA 1.8', slug: 'alfa18' },
        { title: 'KOROS', slug: 'koros' },
      ],
    },
    {
      name: 'Herbicidas',
      slug: 'herbicidas',
      products: [
        { title: 'GLORY 90', slug: 'glory90' },
        { title: 'KAIMA 41', slug: 'kaima41' },
        { title: 'OVER 18', slug: 'over18' },
        { title: 'SHAO 200', slug: 'shao200' },
      ],
    },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-agkem-dark transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center space-x-3 sm:space-x-4.5 z-50 relative"
            data-testid="header-logo-link"
          >
            <Logo
              width={54}
              height={54}
              className="w-12 h-12 sm:w-13.5 sm:h-13.5 md:w-15 md:h-15"
            />
            <span className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl tracking-wider">
              AG KEM
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8 relative" ref={searchRef}>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => {
                  if (searchQuery.trim() !== '' && filteredResults.length > 0) {
                    setShowSearchResults(true);
                  }
                }}
                placeholder="Buscar productos"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-agkem-primary transition-all duration-200"
              />

              {/* Search Results Dropdown */}
              {showSearchResults && filteredResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
                  {filteredResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleResultClick(result.url)}
                      className="w-full px-4 py-3 text-left hover:bg-agkem-primary/10 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">{result.name}</p>
                          {result.type === 'product' && (
                            <p className="text-sm text-gray-500">{result.category}</p>
                          )}
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          result.type === 'category'
                            ? 'bg-agkem-primary/20 text-agkem-primary'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {result.type === 'category' ? 'Categoría' : 'Producto'}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 z-10 relative">
            {menuItems.map((item) => {
              if (item.section === 'productos') {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setIsProductosOpen(true)}
                    onMouseLeave={() => {
                      setIsProductosOpen(false);
                      setExpandedCategory(null);
                    }}
                  >
                    <Link
                      href="/productos"
                      className={`text-sm lg:text-base font-medium transition-colors duration-200 hover:text-agkem-primary flex items-center gap-1 ${
                        currentSection === item.section
                          ? 'text-agkem-primary'
                          : 'text-white'
                      }`}
                      data-testid={`header-nav-${item.section}`}
                    >
                      {item.label}
                      <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-visible max-h-[80vh]">
                      {productCategories.map((category, idx) => (
                        <div
                          key={category.slug}
                          className="border-b border-gray-100 last:border-b-0 relative group/category"
                          onMouseEnter={() => setExpandedCategory(category.slug)}
                          onMouseLeave={() => setExpandedCategory(null)}
                        >
                          <Link
                            href={`/productos/${category.slug}`}
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-agkem-primary/10 hover:text-agkem-primary transition-colors font-medium group-hover/category:bg-agkem-primary/5"
                          >
                            {category.name}
                            <ChevronDown
                              size={16}
                              className="ml-2 -rotate-90"
                            />
                          </Link>

                          {/* Nested Products - Show on Hover */}
                          {expandedCategory === category.slug && (
                            <div
                              className="absolute left-full top-0 w-64 bg-white shadow-xl"
                              style={{
                                borderTopRightRadius: idx === 0 ? '0.5rem' : '0',
                                borderBottomRightRadius: idx === productCategories.length - 1 ? '0.5rem' : '0',
                                borderLeft: '1px solid rgb(243 244 246)',
                              }}
                            >
                              {category.products.map((product, pIdx) => (
                                <Link
                                  key={product.slug}
                                  href={`/productos/${category.slug}/${product.slug}`}
                                  className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-agkem-primary/10 hover:text-agkem-primary transition-colors border-b border-gray-100 last:border-b-0"
                                  style={{
                                    borderTopRightRadius: idx === 0 && pIdx === 0 ? '0.5rem' : '0',
                                    borderBottomRightRadius: idx === productCategories.length - 1 && pIdx === category.products.length - 1 ? '0.5rem' : '0',
                                  }}
                                >
                                  {product.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={`/${item.section === 'inicio' ? '' : item.section}`}
                  className={`text-sm lg:text-base font-medium transition-colors duration-200 hover:text-agkem-primary ${
                    currentSection === item.section
                      ? 'text-agkem-primary'
                      : 'text-white'
                  }`}
                  data-testid={`header-nav-${item.section}`}
                >
                  {item.label}
                </Link>
              );
            })}
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
              {menuItems.map((item) => {
                if (item.section === 'productos') {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setIsProductosOpen(!isProductosOpen)}
                        className={`w-full px-6 py-4 transition-all duration-200 text-left font-medium touch-manipulation min-h-[44px] flex items-center justify-between ${
                          currentSection === item.section
                            ? 'text-agkem-primary bg-agkem-primary/10 border-l-4 border-agkem-primary'
                            : 'text-white hover:bg-agkem-primary/10 hover:text-agkem-primary'
                        }`}
                      >
                        {item.label}
                        <ChevronDown size={20} className={`transition-transform ${isProductosOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isProductosOpen && (
                        <div className="bg-agkem-dark/50">
                          {productCategories.map((category) => (
                            <div key={category.slug}>
                              <Link
                                href={`/productos/${category.slug}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-10 py-3 text-white/90 hover:text-agkem-primary hover:bg-agkem-primary/10 transition-colors font-medium"
                              >
                                {category.name}
                              </Link>
                              <div className="pl-6">
                                {category.products.map((product) => (
                                  <Link
                                    key={product.slug}
                                    href={`/productos/${category.slug}/${product.slug}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-10 py-2 text-sm text-white/70 hover:text-agkem-primary hover:bg-agkem-primary/10 transition-colors"
                                  >
                                    {product.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
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
                );
              })}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;