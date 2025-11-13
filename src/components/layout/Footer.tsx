import Logo from '@/components/ui/Logo';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agkem-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo width={40} height={40} />
              <span className="text-xl font-bold">AG KEM</span>
            </div>
            <p className="text-gray-300 text-sm">
              Innovación y calidad en agroquímicos para el campo mexicano.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-agkem-primary">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Quienes Somos', 'Productos', 'Contacto'].map(item => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-300 hover:text-agkem-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-agkem-primary">Productos</h3>
            <ul className="space-y-2">
              {['Herbicidas', 'Insecticidas', 'Fungicidas', 'Catálogo Completo'].map(item => (
                <li key={item} className="text-gray-300 text-sm">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-agkem-primary">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+523322584777" className="text-gray-300 hover:text-agkem-primary transition-colors text-sm flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +52 33 2258 4777
                </a>
              </li>
              <li>
                <a href="mailto:info@ag-kem.com" className="text-gray-300 hover:text-agkem-primary transition-colors text-sm flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@ag-kem.com
                </a>
              </li>
              <li className="text-gray-300 text-sm flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                Guadalajara, Jalisco, México
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-3 mt-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="bg-agkem-primary/20 hover:bg-agkem-primary/30 p-2 rounded-full transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
