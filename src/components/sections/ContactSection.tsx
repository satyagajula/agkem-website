'use client';

import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="h-screen overflow-hidden bg-white py-4 sm:py-6 md:py-8 lg:py-10 pb-20 sm:pb-24 md:pb-28 lg:pb-16">
      <div className="container-custom h-full">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 h-full overflow-y-auto lg:overflow-hidden">
          
          {/* Left Image Section */}
          <div className="w-full lg:w-1/4 flex items-center justify-center lg:items-start">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-full lg:h-auto lg:max-w-[200px] xl:max-w-[250px] lg:aspect-square">
              <Image
                src="/images/Agkem_thanks.png"
                alt="Contact Background"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, 250px"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-3/4 flex flex-col">
            <h2 
              className="font-bold mb-2 uppercase
                         text-xl
                         sm:text-2xl sm:mb-3
                         md:text-3xl md:mb-3
                         lg:text-3xl lg:mb-3
                         xl:text-4xl xl:mb-4"
            >
              CONTACTO
            </h2>
            
            <p 
              className="mb-3 text-gray-700
                         text-xs
                         sm:text-sm sm:mb-4
                         md:text-base md:mb-4
                         lg:text-sm lg:mb-3
                         xl:text-base xl:mb-4
                         leading-relaxed"
            >
              Para consultas comerciales o técnicas, contáctanos directamente.
            </p>

            {/* Altiplano y Sureste */}
            <div 
              className="text-darkgrey p-2 rounded-lg mb-2
                         sm:p-3 sm:mb-3
                         md:p-4 md:mb-4
                         lg:p-2 lg:mb-2
                         xl:p-3 xl:mb-3" 
              style={{backgroundColor: "#8dd57d"}}
            >
              <h3 
                className="font-bold mb-1 text-center
                           text-xs
                           sm:text-sm sm:mb-2
                           md:text-base md:mb-2
                           lg:text-sm lg:mb-1.5
                           xl:text-base xl:mb-2"
              >
                Altiplano y Sureste
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-4">
                <div className="space-y-0.5 sm:space-y-1">
                  <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs">
                    <strong>Contacto:</strong> Cicerón Maza
                  </p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs break-all">
                    <strong>Teléfono/WhatsApp:</strong> +52 96 1233 4597
                  </p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs break-all">
                    <strong>Email:</strong> ciceron.maza@ag-kem.com
                  </p>
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs">
                    <strong>Contacto:</strong> Omar Mora
                  </p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs break-all">
                    <strong>Teléfono/WhatsApp:</strong> +52 249 101 0701
                  </p>
                  <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs break-all">
                    <strong>Email:</strong> ome_agronomo46@hotmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom sections container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-2 xl:gap-3">
              
              {/* Left Column */}
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-2 xl:gap-3">
                
                {/* Dirección Comercial */}
                <div 
                  className="text-darkgrey p-2 rounded-lg
                             sm:p-3
                             md:p-4
                             lg:p-2
                             xl:p-3" 
                  style={{backgroundColor: "#8dd57d"}}
                >
                  <h3 
                    className="font-bold mb-1 text-center
                               text-xs
                               sm:text-sm sm:mb-2
                               md:text-base md:mb-2
                               lg:text-sm lg:mb-1.5
                               xl:text-base xl:mb-2"
                  >
                    Dirección Comercial
                  </h3>
                  <div className="space-y-0.5 sm:space-y-1">
                    <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs">
                      <strong>Contacto:</strong> Sergio Moraila
                    </p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs break-all">
                      <strong>Teléfono/WhatsApp:</strong> +52 33 2258 4777
                    </p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs break-all">
                      <strong>Email:</strong> sergio.moraila@ag-kem.com
                    </p>
                  </div>
                </div>

                {/* Noroeste */}
                <div 
                  className="text-darkgrey p-2 rounded-lg
                             sm:p-3
                             md:p-4
                             lg:p-2
                             xl:p-3" 
                  style={{backgroundColor: "#8dd57d"}}
                >
                  <h3 
                    className="font-bold mb-1 text-center
                               text-xs
                               sm:text-sm sm:mb-2
                               md:text-base md:mb-2
                               lg:text-sm lg:mb-1.5
                               xl:text-base xl:mb-2"
                  >
                    Noroeste
                  </h3>
                  <div className="space-y-0.5 sm:space-y-1">
                    <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs">
                      <strong>Contacto:</strong> Mario Ballesteros
                    </p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs break-all">
                      <strong>Teléfono/WhatsApp:</strong> +52 64 420 2414
                    </p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs break-all">
                      <strong>Email:</strong> mariobamx@yahoo.com.mx
                    </p>
                  </div>
                </div>
              </div>

              {/* UBICACIÓN CORPORATIVA */}
              <div 
                className="text-darkgrey p-2 rounded-lg
                           sm:p-3
                           md:p-4
                           lg:p-2
                           xl:p-3" 
                style={{backgroundColor: "#8dd57d"}}
              >
                <h3 
                  className="font-bold mb-1 text-center
                             text-xs
                             sm:text-sm sm:mb-2
                             md:text-base md:mb-2
                             lg:text-sm lg:mb-1.5
                             xl:text-base xl:mb-2"
                >
                  UBICACIÓN CORPORATIVA
                </h3>
                <div className="space-y-2 lg:space-y-1.5 xl:space-y-2">
                  <div className="space-y-0.5 sm:space-y-1">
                    <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs">
                      <strong>Dirección:</strong> Calle Asunción #1653, Guadalajara, Jalisco, México
                    </p>
                    <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs">
                      <strong>Horario:</strong> Lunes a Viernes, 9:00–18:00 (hora local)
                    </p>
                  </div>
                  <div className="w-full">
                    <iframe
                      src="https://maps.google.com/maps?q=Calle+Asunción+1653,+Guadalajara,+Jalisco,+México&output=embed"
                      className="w-full h-32 sm:h-40 md:h-48 lg:h-32 xl:h-40 rounded-lg"
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