'use client';

import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="h-full bg-white py-2 sm:py-4 md:py-6 lg:py-3 pb-20 sm:pb-24 md:pb-28 lg:pb-20 overflow-y-auto lg:overflow-hidden">
      <div className="container-custom h-full">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 h-full">
          
          {/* Left Image Section */}
          <div className="w-full lg:w-1/3 flex items-center justify-center lg:items-start">
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-full lg:h-auto lg:max-w-[270px] xl:max-w-[330px] lg:aspect-square mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
  <Image
    src="/images/Agkem_thanks.png"
    alt="Contact Background"
    fill
    className="object-contain"
    sizes="(max-width: 768px) 288px, 330px"
  />
</div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <h2 
              className="font-bold mb-0.5 uppercase
                         text-lg
                         sm:text-xl sm:mb-1
                         md:text-2xl md:mb-1
                         lg:text-2xl lg:mb-1
                         xl:text-3xl xl:mb-1"
            >
              CONTACTO
            </h2>
            
            <p 
              className="mb-2 text-gray-700
                         text-[10px]
                         sm:text-xs sm:mb-2
                         md:text-xs md:mb-2
                         lg:text-xs lg:mb-1
                         xl:text-sm xl:mb-1
                         leading-relaxed"
            >
              Para consultas comerciales o técnicas, contáctanos directamente.
            </p>

            {/* Altiplano y Sureste */}
            <div
              className="text-darkgrey p-1.5 rounded-lg mb-1
                         sm:p-3 sm:mb-1
                         md:p-4 md:mb-2
                         lg:p-2.5 lg:mb-1
                         xl:p-3 xl:mb-1"
              style={{backgroundColor: "#ecfde9"}}
            >
              <h3 
                className="font-bold mb-1 text-center
                           text-[10px]
                           sm:text-xs sm:mb-1
                           md:text-sm md:mb-1.5
                           lg:text-xs lg:mb-1
                           xl:text-sm xl:mb-1"
              >
                Altiplano y Sureste
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 lg:gap-2 xl:gap-2 text-center">
                <div className="space-y-0.5">
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px]">
                    <strong>Contacto:</strong> Cicerón Maza
                  </p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] break-all">
                    <strong>Teléfono/WhatsApp:</strong> +52 96 1233 4597
                  </p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] break-all">
                    <strong>Email:</strong> ciceron.maza@ag-kem.com
                  </p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px]">
                    <strong>Contacto:</strong> Omar Mora
                  </p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] break-all">
                    <strong>Teléfono/WhatsApp:</strong> +52 249 101 0701
                  </p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] break-all">
                    <strong>Email:</strong> ome_agronomo46@hotmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom sections container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 lg:gap-1.5 xl:gap-2">
              
              {/* Left Column */}
              <div className="flex flex-col gap-1 sm:gap-1 md:gap-1 lg:gap-1 xl:gap-2 h-full">
                
                {/* Dirección Comercial */}
                <div 
                  className="text-darkgrey p-1.5 rounded-lg
                             sm:p-3
                             md:p-4
                             lg:p-2.5
                             xl:p-3" 
                  style={{backgroundColor: "#ecfde9"}}
                >
                  <h3 
                    className="font-bold mb-1 text-center
                               text-[10px]
                               sm:text-xs sm:mb-1
                               md:text-sm md:mb-1.5
                               lg:text-xs lg:mb-1
                               xl:text-sm xl:mb-1"
                  >
                    Dirección Comercial
                  </h3>
                  <div className="space-y-0.5 text-center">
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px]">
                      <strong>Contacto:</strong> Sergio Moraila
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] break-all">
                      <strong>Teléfono/WhatsApp:</strong> +52 33 2258 4777
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] break-all">
                      <strong>Email:</strong> sergio.moraila@ag-kem.com
                    </p>
                  </div>
                </div>

                {/* Noroeste */}
                <div
                  className="text-darkgrey p-1.5 rounded-lg
                             sm:p-3
                             md:p-4
                             lg:p-2.5
                             xl:p-3"
                  style={{backgroundColor: "#ecfde9"}}
                >
                  <h3 
                    className="font-bold mb-1 text-center
                               text-[10px]
                               sm:text-xs sm:mb-1
                               md:text-sm md:mb-1.5
                               lg:text-xs lg:mb-1
                               xl:text-sm xl:mb-1"
                  >
                    Noroeste
                  </h3>
                  <div className="space-y-0.5 text-center">
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px]">
                      <strong>Contacto:</strong> Mario Ballesteros
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] break-all">
                      <strong>Teléfono/WhatsApp:</strong> +52 64 420 2414
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] break-all">
                      <strong>Email:</strong> mariobamx@yahoo.com.mx
                    </p>
                  </div>
                </div>
              </div>

              {/* UBICACIÓN CORPORATIVA */}
              <div
                className="text-darkgrey p-1 rounded-lg flex flex-col
                           sm:p-2
                           md:p-2
                           lg:p-2
                           xl:p-3"
                style={{backgroundColor: "#ecfde9"}}
              >
                <h3 
                  className="font-bold mb-1 text-center
                             text-[10px]
                             sm:text-xs sm:mb-1
                             md:text-sm md:mb-1.5
                             lg:text-xs lg:mb-1
                             xl:text-sm xl:mb-1"
                >
                  UBICACIÓN CORPORATIVA
                </h3>
                <div className="flex-1 flex flex-row gap-2 lg:gap-3 xl:gap-4">
                  <div className="flex-1 flex flex-col space-y-2 lg:space-y-3 xl:space-y-4 text-center">
                    <div className="space-y-0.5 pt-1 lg:pt-2 xl:pt-3">
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px]">
                        <strong>Contacto:</strong> Cris Villagrana
                      </p>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] break-all">
                        <strong>Teléfono/WhatsApp:</strong> +52-3318508512
                      </p>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] break-all">
                        <strong>Email:</strong> cris.v@ag-kem.com
                      </p>
                    </div>
                    <div className="space-y-0.5 pb-1 lg:pb-2 xl:pb-3">
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px]">
                        <strong>Dirección:</strong> Calle Asunción #1653, Guadalajara, Jalisco, México
                      </p>
                      <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px]">
                        <strong>Horario:</strong> Lunes a Viernes, 9:00–18:00 (hora local)
                      </p>
                      <a
                        href="https://maps.google.com/maps?q=Calle+Asunción+1653,+Guadalajara,+Jalisco,+México"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] text-blue-600 hover:text-blue-800 underline"
                      >
                        view on google map →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;