'use client';

import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="min-h-screen bg-white py-8 sm:py-10 md:py-12 lg:py-16 pb-24 sm:pb-28 md:pb-32">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Image Section */}
          <div className="w-full lg:w-1/4 flex items-start justify-center lg:justify-start">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-full lg:h-auto lg:aspect-square">
              <Image
                src="/images/Agkem_thanks.png"
                alt="Contact Background"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 25vw"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-3/4 flex flex-col">
            <h2 
              className="font-bold mb-3 uppercase
                         text-2xl
                         sm:text-3xl sm:mb-4
                         md:text-4xl md:mb-5
                         lg:text-4xl lg:mb-6
                         xl:text-5xl"
            >
              CONTACTO
            </h2>
            
            <p 
              className="mb-6 text-gray-700
                         text-sm
                         sm:text-base sm:mb-8
                         md:text-lg
                         leading-relaxed"
            >
              Para consultas comerciales o técnicas, contáctanos directamente.
            </p>

            {/* Altiplano y Sureste */}
            <div 
              className="text-darkgrey p-4 rounded-lg mb-4
                         sm:p-5 sm:mb-5
                         md:p-6 md:mb-6
                         lg:mb-6" 
              style={{backgroundColor: "#8dd57d"}}
            >
              <h3 
                className="font-bold mb-3 text-center
                           text-base
                           sm:text-lg sm:mb-4
                           md:text-xl md:mb-5
                           lg:text-xl"
              >
                Altiplano y Sureste
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-xs sm:text-sm md:text-base">
                    <strong>Contacto:</strong> Cicerón Maza
                  </p>
                  <p className="text-xs sm:text-sm md:text-base break-all">
                    <strong>Teléfono/WhatsApp:</strong> +52 96 1233 4597
                  </p>
                  <p className="text-xs sm:text-sm md:text-base break-all">
                    <strong>Email:</strong> ciceron.maza@ag-kem.com
                  </p>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-xs sm:text-sm md:text-base">
                    <strong>Contacto:</strong> Omar Mora
                  </p>
                  <p className="text-xs sm:text-sm md:text-base break-all">
                    <strong>Teléfono/WhatsApp:</strong> +52 249 101 0701
                  </p>
                  <p className="text-xs sm:text-sm md:text-base break-all">
                    <strong>Email:</strong> ome_agronomo46@hotmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom sections container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              
              {/* Left Column */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                
                {/* Dirección Comercial */}
                <div 
                  className="text-darkgrey p-4 rounded-lg
                             sm:p-5
                             md:p-6" 
                  style={{backgroundColor: "#8dd57d"}}
                >
                  <h3 
                    className="font-bold mb-3 text-center
                               text-base
                               sm:text-lg sm:mb-4
                               md:text-xl"
                  >
                    Dirección Comercial
                  </h3>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-xs sm:text-sm md:text-base">
                      <strong>Contacto:</strong> Sergio Moraila
                    </p>
                    <p className="text-xs sm:text-sm md:text-base break-all">
                      <strong>Teléfono/WhatsApp:</strong> +52 33 2258 4777
                    </p>
                    <p className="text-xs sm:text-sm md:text-base break-all">
                      <strong>Email:</strong> sergio.moraila@ag-kem.com
                    </p>
                  </div>
                </div>

                {/* Noroeste */}
                <div 
                  className="text-darkgrey p-4 rounded-lg
                             sm:p-5
                             md:p-6" 
                  style={{backgroundColor: "#8dd57d"}}
                >
                  <h3 
                    className="font-bold mb-3 text-center
                               text-base
                               sm:text-lg sm:mb-4
                               md:text-xl"
                  >
                    Noroeste
                  </h3>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-xs sm:text-sm md:text-base">
                      <strong>Contacto:</strong> Mario Ballesteros
                    </p>
                    <p className="text-xs sm:text-sm md:text-base break-all">
                      <strong>Teléfono/WhatsApp:</strong> +52 64 420 2414
                    </p>
                    <p className="text-xs sm:text-sm md:text-base break-all">
                      <strong>Email:</strong> mariobamx@yahoo.com.mx
                    </p>
                  </div>
                </div>
              </div>

              {/* UBICACIÓN CORPORATIVA */}
              <div 
                className="text-darkgrey p-4 rounded-lg
                           sm:p-5
                           md:p-6" 
                style={{backgroundColor: "#8dd57d"}}
              >
                <h3 
                  className="font-bold mb-3 text-center
                             text-base
                             sm:text-lg sm:mb-4
                             md:text-xl"
                >
                  UBICACIÓN CORPORATIVA
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm md:text-base">
                      <strong>Dirección:</strong> Calle Asunción #1653, Guadalajara, Jalisco, México
                    </p>
                    <p className="text-xs sm:text-sm md:text-base">
                      <strong>Horario:</strong> Lunes a Viernes, 9:00–18:00 (hora local)
                    </p>
                  </div>
                  <div className="w-full">
                    <iframe
                      src="https://maps.google.com/maps?q=Calle+Asunción+1653,+Guadalajara,+Jalisco,+México&output=embed"
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg"
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