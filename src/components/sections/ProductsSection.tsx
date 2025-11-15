'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProductsSection = () => {
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
    <section className="h-screen overflow-hidden bg-white py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="container-custom h-full flex flex-col">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-12 h-full overflow-y-auto lg:overflow-hidden">
          
          {/* Left Content Section */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            
            <h2 
              className="font-bold mb-2 uppercase
                         text-xl
                         sm:text-2xl sm:mb-3
                         md:text-3xl md:mb-3
                         lg:text-3xl lg:mb-4
                         xl:text-4xl xl:mb-5"
            >
              PRODUCTOS
            </h2>
            
            <p 
              className="mb-4 text-gray-700
                         text-xs
                         sm:text-sm sm:mb-5
                         md:text-base md:mb-6
                         lg:text-base lg:mb-6
                         xl:text-lg xl:mb-8
                         leading-relaxed"
            >
              Nuestro portafolio abarca tres categorías principales para el manejo integral de plagas y enfermedades, con diversos modos de acción para favorecer la rotación y la eficacia.
            </p>

            {/* Image for mobile/tablet */}
            <div className="lg:hidden w-full flex justify-center mb-4 sm:mb-6">
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
              className="flex flex-col gap-3
                         sm:gap-4
                         md:gap-5
                         lg:gap-4
                         xl:gap-5"
            >
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group
                             sm:gap-4 sm:p-3
                             md:gap-4 md:p-3
                             lg:gap-3 lg:p-2
                             xl:gap-4 xl:p-3"
                  onClick={() => router.push(`/productos/${index + 1}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      router.push(`/productos/${index + 1}`);
                    }
                  }}
                  data-testid={`product-card-${index + 1}`}
                >
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        sizes="96px"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-agkem-dark mb-1 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg">
                      {product.name}
                    </h3>
                    <p 
                      className="text-gray-600 leading-relaxed
                                 text-[10px]
                                 sm:text-xs
                                 md:text-sm
                                 lg:text-xs
                                 xl:text-sm"
                    >
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image Section - Desktop only */}
          <div className="hidden lg:flex lg:w-1/3 items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[4/3]">
              <Image
                src="/images/Agkem_productBG.png"
                alt="Products Background"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;