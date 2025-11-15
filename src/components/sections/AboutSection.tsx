'use client';

const AboutSection = () => {
  return (
    <section 
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center
                 py-8
                 sm:py-12
                 md:py-16
                 lg:py-20" 
      style={{ backgroundImage: "url('/images/Agkem_aboutUs.png')" }}
    >
      
      <div 
        className="w-full max-w-xs mx-4 p-4 rounded-lg text-black
                   sm:max-w-md sm:mx-6 sm:p-5
                   md:max-w-2xl md:mx-8 md:p-6
                   lg:max-w-3xl lg:p-8
                   xl:max-w-4xl xl:p-10
                   my-auto" 
        style={{ backgroundColor: '#f0ddab' }}
      >
        <h2 
          className="font-bold text-center mb-4
                     text-xl
                     sm:text-2xl sm:mb-5
                     md:text-3xl md:mb-6
                     lg:text-4xl lg:mb-8
                     xl:text-5xl"
        >
          SOBRE NOSOTROS
        </h2>
        
        <p 
          className="mb-4 text-white p-3 rounded
                     text-xs
                     sm:text-sm sm:mb-5 sm:p-4
                     md:text-base md:mb-6 md:p-5
                     lg:text-lg lg:p-6
                     xl:text-xl
                     leading-relaxed" 
          style={{ backgroundColor: '#2C3E2C', opacity: 0.9 }}
        >
          AG KEM nace como una empresa mexicana, basada en alianzas estratégicas con presencia
          internacional. Nos distingue una combinación de precios competitivos, calidad consistente y
          confiabilidad en el suministro; con un portafolio en crecimiento de productos y servicios.
        </p>
        
        <div className="p-2 rounded-lg sm:p-3 md:p-4">
          <ul 
            className="list-none space-y-2
                       text-xs
                       sm:text-sm sm:space-y-3
                       md:text-base md:space-y-3
                       lg:text-lg lg:space-y-4
                       xl:text-xl
                       [&>li]:relative 
                       [&>li]:pl-7
                       sm:[&>li]:pl-8
                       md:[&>li]:pl-9
                       lg:[&>li]:pl-10
                       [&>li]:before:content-['✓'] 
                       [&>li]:before:absolute 
                       [&>li]:before:left-0 
                       [&>li]:before:text-agkem-primary 
                       [&>li]:before:font-bold 
                       [&>li]:before:text-lg
                       sm:[&>li]:before:text-xl
                       md:[&>li]:before:text-2xl
                       lg:[&>li]:before:text-3xl"
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