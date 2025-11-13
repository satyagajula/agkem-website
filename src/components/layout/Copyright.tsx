import { MapPin, Linkedin, MessageCircle } from 'lucide-react';

const Copyright = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 text-white py-2" style={{ backgroundColor: '#2C3E2C', opacity: 0.8 }}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <p className="text-xs text-gray-300 mb-1">
              © [2025] AG KEM. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-400">
              El uso de agroquímicos debe realizarse conforme a etiqueta y por personal capacitado
            </p>
          </div>
          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-agkem-primary/20 hover:bg-agkem-primary/30 p-2 rounded-full transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-agkem-primary/20 hover:bg-agkem-primary/30 p-2 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-agkem-primary/20 hover:bg-agkem-primary/30 p-2 rounded-full transition-colors"
              aria-label="Google Maps"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
