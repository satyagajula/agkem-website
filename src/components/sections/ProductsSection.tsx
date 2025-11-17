'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductsSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const router = useRouter();
  const products = [
    {
      image: '/images/Agkem_product1.png',
      name: 'Fungicidas',
      description: 'Opciones para la prevención y control de enfermedades fungosas, con perfiles preventivos/curativos y protección residual.'
    },
    {
      image: '/images/Agkem_product2.png',
      name: 'Insecticidas',
      description: 'Alternativas para el manejo de insectos plaga, con diferentes modos de acción y estrategias de rotación para minimizar resistencia.'
    },
    {
      image: '/images/Agkem_product3.png',
      name: 'Herbicidas',
      description: 'Soluciones para control de malezas de hoja ancha y gramíneas, con opciones selectivas y no selectivas según cultivo y momento de aplicación.'
    }
  ];

  return (
    <section className="h-full bg-white py-1 sm:py-2 md:py-3 lg:py-2 overflow-y-auto lg:overflow-hidden">
      <div className="container-custom h-full flex flex-col">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 3xl:gap-10 4xl:gap-12 h-full">
          
          {/* Left Content Section */}
          <div className="w-full lg:w-3/4 flex flex-col">
            
            <h2
              className={`font-bold mb-0.5 uppercase
                         text-lg
                         sm:text-xl sm:mb-1
                         md:text-2xl md:mb-1
                         lg:text-2xl lg:mb-1
                         xl:text-3xl xl:mb-2.5
                         2xl:text-4xl 2xl:mb-3
                         3xl:text-5xl 3xl:mb-3.5
                         4xl:text-6xl 4xl:mb-4
                         transition-opacity duration-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
            >
              PRODUCTOS
            </h2>
            
            <p
              className={`mb-1 text-gray-700
                         text-[10px]
                         sm:text-xs sm:mb-1.5
                         md:text-sm md:mb-2
                         lg:text-sm lg:mb-1.5
                         xl:text-base xl:mb-2
                         2xl:text-lg 2xl:mb-3
                         3xl:text-xl 3xl:mb-4
                         4xl:text-2xl 4xl:mb-5
                         leading-relaxed
                         transition-opacity duration-700 delay-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
            >
              Nuestro portafolio abarca tres categorías principales para el manejo integral de plagas y enfermedades, con diversos modos de acción para favorecer la rotación y la eficacia.
            </p>

            {/* Image for mobile/tablet */}
            <div className="lg:hidden w-full flex justify-center mb-2 sm:mb-3">
              <div className="relative w-full max-w-md aspect-[4/3]">
                <Image
                  src="/images/Agkem_productBG.png"
                  alt="Products Background"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </div>
            </div>
            
            {/* Products List */}
            <div
              className={`flex flex-col gap-0.5
                         sm:gap-1
                         md:gap-1.5
                         lg:gap-1
                         xl:gap-1.5
                         2xl:gap-2
                         3xl:gap-2.5
                         4xl:gap-3
                         transition-opacity duration-1000 delay-500 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
            >
              {products.map((product, index) => (
                <div
  key={index}
  className="flex flex-col items-start text-left p-0"
  data-testid={`product-card-${index + 1}`}
>
                    <div
  className="relative cursor-pointer mb-0
  w-16 h-10 sm:w-18 sm:h-11 md:w-20 md:h-12 lg:w-32 lg:h-11 xl:w-22 xl:h-13 2xl:w-24 2xl:h-14 3xl:w-26 3xl:h-15 4xl:w-28 4xl:h-16"
  onClick={() => router.push(`/productos/${index + 1}`)}
>
  <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-cover"
    sizes="(max-width: 640px) 64px, (max-width: 768px) 72px, (max-width: 1024px) 80px, (max-width: 1280px) 88px, (max-width: 1536px) 96px, (max-width: 1920px) 104px, 112px" priority={index === 0}
  />
</div>
  <p className="text-gray-600 leading-tight
                                text-[9px] sm:text-[9px] md:text-xs lg:text-xs xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl
                                max-w-full">
    {product.description}
  </p>

                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image Section - Desktop only */}
          <div className="hidden lg:flex lg:w-1/4 items-start justify-end">
            <div className="relative w-full max-w-sm aspect-[3/4]">
              <Image
                src="/images/Agkem_productBG.png"
                alt="Products Background"
                fill

                className="object-contain"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
