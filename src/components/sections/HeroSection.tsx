'use client';

import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      className="relative w-full h-full bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ 
        backgroundImage: "url('/images/Agkem_homeBackground.png')",
        backgroundPosition: "center 70%",
        backgroundSize: "cover"
      }}
    >
      {/* Brightness overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Main heading */}
        <div className="pt-4 px-4 sm:pt-6 sm:px-6 md:pt-8 md:px-8 lg:pt-10 lg:px-10 xl:pt-12 xl:px-12 2xl:pt-20 2xl:px-20">
          <h1 
            className={`font-gordita font-bold max-w-full break-words
                       text-2xl
                       sm:text-3xl
                       md:text-4xl
                       lg:text-5xl
                       xl:text-6xl
                       2xl:text-8xl
                       leading-tight
                       transition-opacity duration-500 ${
                         isMounted ? 'opacity-100' : 'opacity-0'
                       }`}
            style={{ color: "#213d00" }}
          >
            Innovación para el campo
          </h1>
        </div>

        {/* Centered tagline */}
        <div 
          className="flex-1 flex items-center justify-center px-4
                     sm:px-6
                     md:px-8
                     lg:px-12
                     xl:px-16
                     2xl:px-24
                     pb-32
                     sm:pb-36
                     md:pb-40
                     lg:pb-32
                     xl:pb-40
                     2xl:pb-48"
        >
          <p 
            className={`font-gordita text-center max-w-4xl 2xl:max-w-6xl
                       text-xl
                       sm:text-2xl
                       md:text-3xl
                       lg:text-4xl
                       xl:text-5xl
                       2xl:text-7xl
                       leading-tight
                       px-4
                       transition-opacity duration-700 delay-300 ${
                         isMounted ? 'opacity-100' : 'opacity-0'
                       }`}
            style={{ color: "#213d00" }}
          >
            Siempre cercanos a nuestros clientes
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;