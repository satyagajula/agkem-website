'use client';

const AboutSection = () => {
  return (
    <section 
      className="relative w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden
                 py-2
                 sm:py-4
                 md:py-6
                 lg:py-4" 
      style={{ backgroundImage: "url('/images/Agkem_aboutUs.png')" }}
    >
      
      <div 
        className="w-full max-w-xs mx-4 p-2 rounded-lg text-black
                   sm:max-w-md sm:mx-6 sm:p-3
                   md:max-w-2xl md:mx-8 md:p-4
                   lg:max-w-3xl lg:p-4
                   xl:max-w-4xl xl:p-6
                   my-auto" 
        style={{ backgroundColor: '#f0ddab' }}
      >
        <h2 
          className="font-bold text-center mb-2
                     text-base
                     sm:text-lg sm:mb-3
                     md:text-xl md:mb-3
                     lg:text-2xl lg:mb-3
                     xl:text-3xl xl:mb-4"
        >
          SOBRE NOSOTROS
        </h2>
        
        <p 
          className="mb-2 text-white p-2 rounded
                     text-[9px]
                     sm:text-[10px] sm:mb-2 sm:p-2
                     md:text-xs md:mb-3 md:p-3
                     lg:text-sm lg:p-3 lg:mb-3
                     xl:text-base xl:p-4 xl:mb-4
                     leading-relaxed" 
          style={{ backgroundColor: '#2C3E2C', opacity: 0.9 }}
        >
          AG KEM nace como una empresa mexicana, basada en alianzas estratégicas con presencia
          internacional. Nos distingue una combinación de precios competitivos, calidad consistente y
          confiabilidad en el suministro; con un portafolio en crecimiento de productos y servicios.
        </p>
        
        <div className="p-1 rounded-lg sm:p-1 md:p-2 lg:p-2">
          <ul 
            className="list-none space-y-0.5
                       text-[9px]
                       sm:text-[10px] sm:space-y-1
                       md:text-xs md:space-y-1
                       lg:text-sm lg:space-y-1.5
                       xl:text-base xl:space-y-2
                       [&>li]:relative 
                       [&>li]:pl-4
                       sm:[&>li]:pl-5
                       md:[&>li]:pl-6
                       lg:[&>li]:pl-6
                       [&>li]:before:content-['✓'] 
                       [&>li]:before:absolute 
                       [&>li]:before:left-0 
                       [&>li]:before:text-agkem-primary 
                       [&>li]:before:font-bold 
                       [&>li]:before:text-xs
                       sm:[&>li]:before:text-sm
                       md:[&>li]:before:text-base
                       lg:[&>li]:before:text-lg
                       xl:[&>li]:before:text-xl"
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