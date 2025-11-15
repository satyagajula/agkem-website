'use client';

const AboutSection = () => {
  return (
    <section 
      className="relative w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden
                 py-2 pb-24
                 sm:py-4 sm:pb-28
                 md:py-6 md:pb-32
                 lg:py-4 lg:pb-24
                 2xl:py-8 2xl:pb-36" 
      style={{ backgroundImage: "url('/images/Agkem_aboutUs.png')" }}
    >
      {/* Overlay for background visibility */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div 
        className="relative z-10 w-full max-w-xs mx-4 p-3 rounded-lg text-black
                   sm:max-w-md sm:mx-6 sm:p-4
                   md:max-w-2xl md:mx-8 md:p-5
                   lg:max-w-3xl lg:p-5
                   xl:max-w-4xl xl:p-7
                   2xl:max-w-6xl 2xl:p-12
                   my-auto"
        style={{ backgroundColor: 'rgba(245, 245, 245, 0.95)' }}
      >
        <h2 
          className="font-bold text-center mb-2
                     text-base
                     sm:text-lg sm:mb-2
                     md:text-xl md:mb-2
                     lg:text-2xl lg:mb-2
                     xl:text-3xl xl:mb-3
                     2xl:text-5xl 2xl:mb-6"
        >
          SOBRE NOSOTROS
        </h2>
        
        <p 
          className="mb-2 p-0 rounded
                     text-[10px]
                     sm:text-xs sm:mb-2
                     md:text-sm md:mb-2
                     lg:text-base lg:mb-2
                     xl:text-lg xl:mb-3
                     2xl:text-2xl 2xl:mb-5
                     leading-relaxed
                     text-gray-800" 
        >
          AG KEM nace como una empresa mexicana, basada en alianzas estratégicas con presencia
          internacional. Nos distingue una combinación de precios competitivos, calidad consistente y
          confiabilidad en el suministro; con un portafolio en crecimiento de productos y servicios.
        </p>
        
        <div className="p-0 rounded-lg">
          <ul 
            className="list-none space-y-1
                       text-[10px]
                       sm:text-xs sm:space-y-1
                       md:text-sm md:space-y-1
                       lg:text-base lg:space-y-1
                       xl:text-lg xl:space-y-1.5
                       2xl:text-2xl 2xl:space-y-3
                       [&>li]:relative 
                       [&>li]:pl-5
                       sm:[&>li]:pl-6
                       md:[&>li]:pl-7
                       lg:[&>li]:pl-8
                       2xl:[&>li]:pl-12
                       [&>li]:before:content-['✓'] 
                       [&>li]:before:absolute 
                       [&>li]:before:left-0 
                       [&>li]:before:text-agkem-primary 
                       [&>li]:before:font-bold 
                       [&>li]:before:text-sm
                       sm:[&>li]:before:text-base
                       md:[&>li]:before:text-lg
                       lg:[&>li]:before:text-xl
                       xl:[&>li]:before:text-2xl
                       2xl:[&>li]:before:text-4xl"
          >
            <li>
              <strong>Innovadores</strong>: mejora continua en formulaciones y procesos.
            </li>
            <li>
              <strong>Flexibles</strong>: nos adaptamos por cultivo, región y cliente.
            </li>
            <li>
              <strong>Internacional</strong>: redes de abasto y colaboración global.
            </li>
            <li>
              <strong>Competitivos</strong>: enfoque en eficacia y precios competitivos.
            </li>
            <li>
              <strong>Confiabilidad</strong>: calidad garantizada y respaldo con registros oficiales vigentes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;