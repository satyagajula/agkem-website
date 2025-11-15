'use client';

import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="h-full bg-white py-2 sm:py-4 md:py-6 lg:py-3 2xl:py-8 pb-20 sm:pb-24 md:pb-28 lg:pb-20 2xl:pb-32 overflow-y-auto lg:overflow-hidden">
      <div className="container-custom h-full">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 2xl:gap-8 h-full">
          
          {/* Left Image Section */}
          <div className="w-full lg:w-1/5 flex items-center justify-center lg:items-start">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-full lg:h-auto lg:max-w-[140px] xl:max-w-[180px] 2xl:max-w-[280px] lg:aspect-square">
              <Image
                src="/images/Agkem_thanks.png"
                alt="Contact Background"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, (max-width: 1536px) 180px, 280px"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-4/5 flex flex-col">
            <h2 
              className="font-bold mb-1.5 uppercase
                         text-lg
                         sm:text-xl sm:mb-2
                         md:text-2xl md:mb-2
                         lg:text-2xl lg:mb-2
                         xl:text-3xl xl:mb-2
                         2xl:text-5xl 2xl:mb-4"
            >
              CONTACTO
            </h2>
            
            <p 
              className="mb-2 text-gray-700
                         text-[10px]
                         sm:text-xs sm:mb-3
                         md:text-sm md:mb-3
                         lg:text-xs lg:mb-2
                         xl:text-sm xl:mb-2
                         2xl:text-xl 2xl:mb-4
                         leading-relaxed"
            >
              Para consultas comerciales o técnicas, contáctanos directamente.
            </p>

            {/* Altiplano y Sureste */}
            <div 
              className="text-darkgrey p-1.5 rounded-lg mb-1.5
                         sm:p-2 sm:mb-2
                         md:p-3 md:mb-3
                         lg:p-1.5 lg:mb-1.5
                         xl:p-2 xl:mb-2
                         2xl:p-4 2xl:mb-4" 
              style={{backgroundColor: "#d8fed0"}}
            >
              <h3 
                className="font-bold mb-1 text-center
                           text-[10px]
                           sm:text-xs sm:mb-1
                           md:text-sm md:mb-1.5
                           lg:text-xs lg:mb-1
                           xl:text-sm xl:mb-1
                           2xl:text-xl 2xl:mb-2"
              >
                Altiplano y Sureste
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 lg:gap-2 xl:gap-2 2xl:gap-4">
                <div className="space-y-0.5 2xl:space-y-1">
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base">
                    <strong>Contacto:</strong> Cicerón Maza
                  </p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base break-all">
                    <strong>Teléfono/WhatsApp:</strong> +52 96 1233 4597
                  </p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base break-all">
                    <strong>Email:</strong> ciceron.maza@ag-kem.com
                  </p>
                </div>
                <div className="space-y-0.5 2xl:space-y-1">
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base">
                    <strong>Contacto:</strong> Omar Mora
                  </p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base break-all">
                    <strong>Teléfono/WhatsApp:</strong> +52 249 101 0701
                  </p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base break-all">
                    <strong>Email:</strong> ome_agronomo46@hotmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom sections container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 lg:gap-1.5 xl:gap-2 2xl:gap-4">
              
              {/* Left Column */}
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 lg:gap-1.5 xl:gap-2 2xl:gap-4">
                
                {/* Dirección Comercial */}
                <div 
                  className="text-darkgrey p-1.5 rounded-lg
                             sm:p-2
                             md:p-3
                             lg:p-1.5
                             xl:p-2
                             2xl:p-4" 
                  style={{backgroundColor: "#d8fed0"}}
                >
                  <h3 
                    className="font-bold mb-1 text-center
                               text-[10px]
                               sm:text-xs sm:mb-1
                               md:text-sm md:mb-1.5
                               lg:text-xs lg:mb-1
                               xl:text-sm xl:mb-1
                               2xl:text-xl 2xl:mb-2"
                  >
                    Dirección Comercial
                  </h3>
                  <div className="space-y-0.5 2xl:space-y-1">
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base">
                      <strong>Contacto:</strong> Sergio Moraila
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base break-all">
                      <strong>Teléfono/WhatsApp:</strong> +52 33 2258 4777
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base break-all">
                      <strong>Email:</strong> sergio.moraila@ag-kem.com
                    </p>
                  </div>
                </div>

                {/* Noroeste */}
                <div 
                  className="text-darkgrey p-1.5 rounded-lg
                             sm:p-2
                             md:p-3
                             lg:p-1.5
                             xl:p-2
                             2xl:p-4" 
                  style={{backgroundColor: "#d8fed0"}}
                >
                  <h3 
                    className="font-bold mb-1 text-center
                               text-[10px]
                               sm:text-xs sm:mb-1
                               md:text-sm md:mb-1.5
                               lg:text-xs lg:mb-1
                               xl:text-sm xl:mb-1
                               2xl:text-xl 2xl:mb-2"
                  >
                    Noroeste
                  </h3>
                  <div className="space-y-0.5 2xl:space-y-1">
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base">
                      <strong>Contacto:</strong> Mario Ballesteros
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base break-all">
                      <strong>Teléfono/WhatsApp:</strong> +52 64 420 2414
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base break-all">
                      <strong>Email:</strong> mariobamx@yahoo.com.mx
                    </p>
                  </div>
                </div>
              </div>

              {/* UBICACIÓN CORPORATIVA */}
              <div 
                className="text-darkgrey p-1.5 rounded-lg flex flex-col
                           sm:p-2
                           md:p-3
                           lg:p-1.5
                           xl:p-2
                           2xl:p-4" 
                style={{backgroundColor: "#d8fed0"}}
              >
                <h3 
                  className="font-bold mb-1 text-center
                             text-[10px]
                             sm:text-xs sm:mb-1
                             md:text-sm md:mb-1.5
                             lg:text-xs lg:mb-1
                             xl:text-sm xl:mb-1
                             2xl:text-xl 2xl:mb-2"
                >
                  UBICACIÓN CORPORATIVA
                </h3>
                <div className="flex-1 flex flex-col justify-between space-y-1 lg:space-y-1 xl:space-y-1 2xl:space-y-2">
                  <div className="space-y-0.5 2xl:space-y-1">
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base">
                      <strong>Dirección:</strong> Calle Asunción #1653, Guadalajara, Jalisco, México
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-base">
                      <strong>Horario:</strong> Lunes a Viernes, 9:00–18:00 (hora local)
                    </p>
                  </div>
                  <div className="w-full flex-shrink-0">
                    <iframe
                      src="https://maps.google.com/maps?q=Calle+Asunción+1653,+Guadalajara,+Jalisco,+México&output=embed"
                      className="w-full h-20 sm:h-24 md:h-32 lg:h-20 xl:h-24 2xl:h-40 rounded-lg"
                      style={{border:0}}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación AG KEM"
                    ></iframe>
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