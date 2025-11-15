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
    <section className="min-h-screen bg-white py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Content Section */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            
            <h2 
              className="font-bold mb-3 uppercase
                         text-2xl
                         sm:text-3xl sm:mb-4
                         md:text-4xl md:mb-5
                         lg:text-4xl lg:mb-6
                         xl:text-5xl"
            >
              PRODUCTOS
            </h2>
            
            <p 
              className="mb-6 text-gray-700
                         text-sm
                         sm:text-base sm:mb-8
                         md:text-lg md:mb-10
                         lg:text-lg lg:mb-12
                         leading-relaxed"
            >
              Nuestro portafolio abarca tres categorías principales para el manejo integral de plagas y enfermedades, con diversos modos de acción para favorecer la rotación y la eficacia.
            </p>

            {/* Image for mobile/tablet - between description and products */}
            <div className="lg:hidden w-full flex justify-center mb-8 sm:mb-10">
              <div className="relative w-full max-w-md aspect-[4/3]">
                <Image
                  src="/images/Agkem_productBG.png"
                  alt="Products Background"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
            
            {/* Products List */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6
                         sm:gap-8
                         md:gap-10
                         lg:gap-8"
            >
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="flex flex-col sm:flex-row lg:flex-row items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
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
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-28 lg:h-28 xl:w-32 xl:h-32">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 96px, 128px"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-agkem-dark mb-2 text-base sm:text-lg md:text-xl">
                      {product.name}
                    </h3>
                    <p 
                      className="text-gray-600 leading-relaxed
                                 text-xs
                                 sm:text-sm
                                 md:text-base
                                 lg:text-sm
                                 xl:text-base"
                    >
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image Section - Hidden on mobile/tablet, visible on desktop */}
          <div className="hidden lg:flex lg:w-1/3 items-start justify-center pt-20">
            <div className="relative w-full max-w-sm aspect-[4/3] sticky top-24">
              <Image
                src="/images/Agkem_productBG.png"
                alt="Products Background"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 1024px) 0vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;