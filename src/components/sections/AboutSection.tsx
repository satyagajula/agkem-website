'use client';

import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <section
      className="
        relative w-full
        min-h-[calc(100vh-6rem)]   /* Fix iOS scrolling and ensure spacing */
        flex items-center justify-center
        bg-cover bg-center bg-no-repeat
        px-4                      /* Side padding so card never touches edges */
        py-10                     /* Top + bottom spacing */
      "
      style={{ backgroundImage: "url('/images/Agkem_aboutUs.png')" }}
    >
      {/* CARD */}
      <div
  className={`
    w-full

    /* Mobile / iOS: make it BIGGER */
    max-w-[98%]
    sm:max-w-[95%]
    md:max-w-[92%]

    /* Desktop: reduce width */
    lg:max-w-3xl
    xl:max-w-4xl
    2xl:max-w-5xl

    /* Padding and spacing */
    p-5 sm:p-6 md:p-7 lg:p-8
    mt-6 sm:mt-8 md:mt-10    /* More space BELOW header */
    mb-10                    /* More space ABOVE copyright */

    rounded-2xl shadow-xl
    transition-opacity duration-500
    ${isMounted ? 'opacity-100' : 'opacity-0'}
  `}
  style={{
    backgroundColor: 'rgba(245, 245, 245, 0.72)',
    boxShadow: '0px 4px 30px rgba(0,0,0,0.18)'
  }}
>


        {/* Heading */}
        <h2
          className={`
            font-bold text-agkem-dark
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
            mb-4
            transition-opacity duration-500
            ${isMounted ? 'opacity-100' : 'opacity-0'}
          `}
        >
          SOBRE NOSOTROS
        </h2>

        {/* Intro paragraph */}
        <p
          className={`
            text-gray-800 leading-relaxed
            text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl
            mb-6
            transition-opacity duration-700 delay-200
            ${isMounted ? 'opacity-100' : 'opacity-0'}
          `}
        >
          AG KEM nace como una empresa mexicana, basada en alianzas estratégicas con presencia
          internacional. Nos distingue una combinación de precios competitivos, calidad consistente
          y confiabilidad en el suministro; con un portafolio en crecimiento de productos y servicios.
        </p>

        {/* List */}
        <ul
  className={`
    list-none space-y-1

    /* Bullet layout */
    [&>li]:relative
    [&>li]:pl-6
    [&>li]:before:content-['➤']
    [&>li]:before:absolute
    [&>li]:before:left-0
    [&>li]:before:top-1/2
    [&>li]:before:-translate-y-1/2
    [&>li]:before:text-agkem-primary
    [&>li]:before:font-bold
    [&>li]:before:text-base

    /* iOS & mobile – tighter spacing */
    sm:[&>li]:py-1.5
    sm:space-y-1.5

    /* medium screens */
    md:[&>li]:py-2
    md:space-y-2

    /* desktop */
    lg:[&>li]:py-2
    lg:space-y-2

    /* large screens */
    xl:[&>li]:py-3
    xl:space-y-3

    /* extra large */
    2xl:[&>li]:py-4
    2xl:space-y-4

    transition-opacity duration-1000 delay-300
    ${isMounted ? 'opacity-100' : 'opacity-0'}
  `}
>



          <li><strong>Innovadores</strong>: mejora continua en formulaciones y procesos.</li>
          <li><strong>Flexibles</strong>: nos adaptamos por cultivo, región y cliente.</li>
          <li><strong>Internacional</strong>: redes de abasto y colaboración global.</li>
          <li><strong>Competitivos</strong>: enfoque en eficacia y precios competitivos.</li>
          <li><strong>Confiabilidad</strong>: calidad garantizada y respaldo con registros oficiales vigentes.</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
