'use client';

import { MapPin, Linkedin, MessageCircle } from 'lucide-react';

const Copyright = () => {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 text-white py-1.5 sm:py-2" 
      style={{ backgroundColor: '#2C3E2C', opacity: 0.95 }}
    >
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          
          {/* Copyright text - centered */}
          <div className="text-center flex-1 w-full sm:w-auto">
            <p className="text-[9px] sm:text-[10px] text-gray-300 mb-0.5">
              © 2025 AG KEM. Todos los derechos reservados.
            </p>
            <p className="text-[8px] sm:text-[9px] text-gray-400 leading-relaxed">
              El uso de agroquímicos debe realizarse conforme a etiqueta y por personal capacitado
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-2 sm:space-x-3 flex-shrink-0">
            <a
              href="https://wa.me/523322584777"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-agkem-primary/20 hover:bg-agkem-primary/40 p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 touch-manipulation min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="WhatsApp"
              data-testid="footer-whatsapp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-agkem-primary/20 hover:bg-agkem-primary/40 p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 touch-manipulation min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="LinkedIn"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://maps.google.com/?q=Calle+Asunción+1653,+Guadalajara,+Jalisco,+México"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-agkem-primary/20 hover:bg-agkem-primary/40 p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 touch-manipulation min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Google Maps"
              data-testid="footer-maps"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;