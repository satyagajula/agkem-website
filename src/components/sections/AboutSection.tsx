'use client';

import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section
      className="relative w-full h-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center overflow-hidden
                 py-4
                 sm:py-6
                 md:py-8
                 lg:py-10
                 xl:py-12
                 2xl:py-16
                 mac:py-18
                 mac-xl:py-20"
      style={{ backgroundImage: "url('/images/Agkem_aboutUs.png')" }}
    >
      {/* Overlay for background visibility */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}

      <div
        className={`relative z-10 w-full max-w-xs mx-4 p-2 rounded-2xl text-black
                   sm:max-w-md sm:mx-6 sm:p-3 sm:rounded-2xl
                   md:max-w-2xl md:mx-8 md:p-4 md:rounded-3xl
                   lg:max-w-3xl lg:p-4 lg:rounded-3xl
                   xl:max-w-5xl xl:p-6 xl:rounded-3xl
                   2xl:max-w-6xl 2xl:p-8 2xl:rounded-3xl
                   mac:max-w-7xl mac:p-9 mac:rounded-3xl
                   mac-xl:max-w-[120rem] mac-xl:p-10 mac-xl:rounded-3xl
                   3xl:max-w-7xl 3xl:p-10 3xl:rounded-3xl
                   4xl:max-w-[100rem] 4xl:p-12 4xl:rounded-3xl
                   shadow-xl
                   transition-opacity duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundColor: 'rgba(245, 245, 245, 0.7)' }}
      >

        {/* Heading inside container */}
        <h2
          className={`z-20 font-bold text-left text-agkem-dark
                     text-base
                     sm:text-lg
                     md:text-xl
                     lg:text-2xl
                     xl:text-3xl
                     2xl:text-4xl 2xl:mb-6
                     mac:text-5xl mac:mb-7
                     mac-xl:text-6xl mac-xl:mb-8
                     3xl:text-5xl 3xl:mb-8
                     4xl:text-6xl 4xl:mb-10
                     drop-shadow-lg
                     transition-opacity duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
        >
          SOBRE NOSOTROS
        </h2>

        <p
          className={`mb-1 p-0 rounded
                     text-sm
                     sm:text-xs sm:mb-2
                     md:text-sm md:mb-2
                     lg:text-sm lg:mb-2
                     xl:text-lg xl:mb-3
                     2xl:text-xl 2xl:mb-8
                     mac:text-2xl mac:mb-9
                     mac-xl:text-3xl mac-xl:mb-10
                     3xl:text-2xl 3xl:mb-10
                     4xl:text-4xl 4xl:mb-12
                     leading-relaxed
                     text-gray-800
                     transition-opacity duration-700 delay-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
        >
          AG KEM nace como una empresa mexicana, basada en alianzas estratégicas con presencia
          internacional. Nos distingue una combinación de precios competitivos, calidad consistente y
          confiabilidad en el suministro; con un portafolio en crecimiento de productos y servicios.
        </p>
        
        <div className="p-0 rounded-lg">
          <ul
            className={`list-none space-y-1
                       text-sm
                       sm:text-xs sm:space-y-1
                       md:text-xs md:space-y-1
                       lg:text-xs lg:space-y-1
                       xl:text-sm xl:space-y-1
                       2xl:text-xl 2xl:space-y-3
                       3xl:text-2xl 3xl:space-y-3
                       4xl:text-3xl 4xl:space-y-4
                       [&>li]:relative
                       [&>li]:pl-5
                       sm:[&>li]:pl-6
                       md:[&>li]:pl-7
                       lg:[&>li]:pl-8
                       xl:[&>li]:pl-10
                       2xl:[&>li]:pl-12
                       3xl:[&>li]:pl-14
                       4xl:[&>li]:pl-16
                       mac-xl:[&>li]:pl-12
                       [&>li]:py-2
                       2xl:[&>li]:py-4
                       3xl:[&>li]:py-5
                       4xl:[&>li]:py-6
                       [&>li]:before:content-['➤']
                       [&>li]:before:absolute
                       [&>li]:before:left-0
                       [&>li]:before:top-0.5
                       mac-xl:[&>li]:before:top-0.5
                       [&>li]:before:text-agkem-primary
                       [&>li]:before:font-bold
                       [&>li]:before:text-sm
                       sm:[&>li]:before:text-base
                       md:[&>li]:before:text-lg
                       lg:[&>li]:before:text-xl
                       xl:[&>li]:before:text-2xl
                       2xl:[&>li]:before:text-3xl
                       3xl:[&>li]:before:text-4xl
                       4xl:[&>li]:before:text-5xl
                       transition-opacity duration-1000 delay-500 opacity-100`}
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