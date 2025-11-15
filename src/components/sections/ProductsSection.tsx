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
    <section className="h-full bg-white py-2 sm:py-4 md:py-6 lg:py-3 overflow-y-auto lg:overflow-hidden">
      <div className="container-custom h-full flex flex-col">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 xl:gap-8 h-full">
          
          {/* Left Content Section */}
          <div className="w-full lg:w-2/3 flex flex-col">
            
            <h2 
              className="font-bold mb-1 uppercase
                         text-lg
                         sm:text-xl sm:mb-1.5
                         md:text-2xl md:mb-1.5
                         lg:text-2xl lg:mb-1.5
                         xl:text-3xl xl:mb-2"
            >
              PRODUCTOS
            </h2>
            
            <p 
              className="mb-2 text-gray-700
                         text-[10px]
                         sm:text-xs sm:mb-2
                         md:text-sm md:mb-3
                         lg:text-sm lg:mb-2
                         xl:text-base xl:mb-3
                         leading-relaxed"
            >
              Nuestro portafolio abarca tres categorías principales para el manejo integral de plagas y enfermedades, con diversos modos de acción para favorecer la rotación y la eficacia.
            </p>

            {/* Image for mobile/tablet */}
            <div className="lg:hidden w-full flex justify-center mb-3 sm:mb-4">
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
              className="flex flex-col gap-1.5
                         sm:gap-2
                         md:gap-3
                         lg:gap-2
                         xl:gap-2.5"
            >
              {products.map((product, index) => (
                <div
  key={index}
  className="flex flex-col items-start text-left
             p-0.5 sm:p-1 md:p-1"
  data-testid={`product-card-${index + 1}`}
>
                    <div
  className="relative w-14 h-8 sm:w-16 md:w-20 cursor-pointer"
  onClick={() => router.push(`/productos/${index + 1}`)}
>
  <Image
    src={product.image}
    alt={product.name}
    width={100}
    height={100}
    className="object-contain"
  />
</div>
  <p className="text-gray-600 leading-relaxed
                text-[9px] sm:text-[10px] md:text-base">
    {product.description}
  </p>

                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image Section - Desktop only */}
          <div className="hidden lg:flex lg:w-1/3 items-center justify-center">
            <div className="relative w-full aspect-[3/4] max-h-full">
              <Image
                src="/images/Agkem_productBG.png"
                alt="Products Background"
                fill
                
                className="object-contain "
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