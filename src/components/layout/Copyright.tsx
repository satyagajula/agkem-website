// 'use client';

// import { MapPin, Linkedin, MessageCircle } from 'lucide-react';

// const Copyright = () => {
//   return (
//     <div
//       className="w-full text-white py-1.5 sm:py-2"
//       style={{ backgroundColor: '#2C3E2C' }}
//     >
//       <div className="container-custom">
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          
//           {/* Copyright text - centered */}
//           <div className="text-center flex-1 w-full sm:w-auto">
//             <p className="text-[9px] sm:text-[10px] text-gray-300 mb-0.5">
//               © 2025 AG KEM. Todos los derechos reservados.
//             </p>
//             <p className="text-[8px] sm:text-[9px] text-gray-400 leading-relaxed">
//               El uso de agroquímicos debe realizarse conforme a etiqueta y por personal capacitado
//             </p>
//           </div>
          
//           {/* Social Icons */}
//           <div className="flex space-x-2 sm:space-x-3 flex-shrink-0">
//             <a
//               href="https://wa.me/523322584777"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-agkem-primary/20 hover:bg-agkem-primary/40 p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:scale-110 touch-manipulation min-w-[32px] min-h-[32px] flex items-center justify-center"
//             >
//               <MessageCircle className="w-3.5 h-3.5" />
//             </a>

//             <a
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-agkem-primary/20 hover:bg-agkem-primary/40 p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:scale-110 touch-manipulation min-w-[32px] min-h-[32px] flex items-center justify-center"
//             >
//               <Linkedin className="w-3.5 h-3.5" />
//             </a>

//             <a
//               href="/contacto"
//               className="bg-agkem-primary/20 hover:bg-agkem-primary/40 p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:scale-110 touch-manipulation min-w-[32px] min-h-[32px] flex items-center justify-center"
//             >
//               <MapPin className="w-3.5 h-3.5" />
//             </a>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Copyright;


// Copyright.tsx (replace the root div with this)
'use client';

import { MapPin, Linkedin, MessageCircle } from 'lucide-react';

const Copyright = () => {
  return (
    <footer
      className="site-footer w-full text-white py-1.5 sm:py-2"
      style={{ backgroundColor: '#2C3E2C' }}
    >
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <div className="text-center flex-1 w-full sm:w-auto">
            <p className="text-[9px] sm:text-[10px] text-gray-300 mb-0.5">
              © 2025 AG KEM. Todos los derechos reservados.
            </p>
            <p className="text-[8px] sm:text-[9px] text-gray-400 leading-relaxed">
              El uso de agroquímicos debe realizarse conforme a etiqueta y por personal capacitado
            </p>
          </div>

          <div className="flex space-x-2 sm:space-x-3 flex-shrink-0">
            <a
              href="https://wa.me/523322584777"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-agkem-primary/20 hover:bg-agkem-primary/40 p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:scale-110 touch-manipulation min-w-[32px] min-h-[32px] flex items-center justify-center"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-agkem-primary/20 hover:bg-agkem-primary/40 p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:scale-110 touch-manipulation min-w-[32px] min-h-[32px] flex items-center justify-center"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href="/contacto"
              className="bg-agkem-primary/20 hover:bg-agkem-primary/40 p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:scale-110 touch-manipulation min-w-[32px] min-h-[32px] flex items-center justify-center"
            >
              <MapPin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;
