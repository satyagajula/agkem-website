'use client';

const AboutSection = () => {
  return (
    <section 
      className="relative w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center
                 py-4
                 sm:py-6
                 md:py-8
                 lg:py-8" 
      style={{ backgroundImage: "url('/images/Agkem_aboutUs.png')" }}
    >
      
      <div 
        className="w-full max-w-xs mx-4 p-3 rounded-lg text-black
                   sm:max-w-md sm:mx-6 sm:p-4
                   md:max-w-2xl md:mx-8 md:p-5
                   lg:max-w-3xl lg:p-6
                   xl:max-w-4xl xl:p-8
                   my-auto" 
        style={{ backgroundColor: '#f0ddab' }}
      >
        <h2 
          className="font-bold text-center mb-3
                     text-lg
                     sm:text-xl sm:mb-4
                     md:text-2xl md:mb-4
                     lg:text-3xl lg:mb-5
                     xl:text-4xl xl:mb-6"
        >
          SOBRE NOSOTROS
        </h2>
        
        <p 
          className="mb-3 text-white p-2 rounded
                     text-[10px]
                     sm:text-xs sm:mb-3 sm:p-3
                     md:text-sm md:mb-4 md:p-4
                     lg:text-base lg:p-5 lg:mb-4
                     xl:text-lg xl:p-6 xl:mb-5
                     leading-relaxed" 
          style={{ backgroundColor: '#2C3E2C', opacity: 0.9 }}
        >
          AG KEM nace como una empresa mexicana, basada en alianzas estratégicas con presencia
          internacional. Nos distingue una combinación de precios competitivos, calidad consistente y
          confiabilidad en el suministro; con un portafolio en crecimiento de productos y servicios.
        </p>
        
        <div className="p-1 rounded-lg sm:p-2 md:p-2 lg:p-3">
          <ul 
            className="list-none space-y-1
                       text-[10px]
                       sm:text-xs sm:space-y-1.5
                       md:text-sm md:space-y-2
                       lg:text-base lg:space-y-2
                       xl:text-lg xl:space-y-3
                       [&>li]:relative 
                       [&>li]:pl-5
                       sm:[&>li]:pl-6
                       md:[&>li]:pl-7
                       lg:[&>li]:pl-8
                       [&>li]:before:content-['✓'] 
                       [&>li]:before:absolute 
                       [&>li]:before:left-0 
                       [&>li]:before:text-agkem-primary 
                       [&>li]:before:font-bold 
                       [&>li]:before:text-sm
                       sm:[&>li]:before:text-base
                       md:[&>li]:before:text-lg
                       lg:[&>li]:before:text-xl
                       xl:[&>li]:before:text-2xl"
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