'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProductsSection = () => {
  const router = useRouter();
  
  const products = [
    {
      image: '/images/Agkem_product1.png',
      name: 'FUNGICIDAS',
      description: 'Opciones para la prevención y control de enfermedades fungosas, con perfiles preventivos/curativos y protección residual.',
      icon: '💧'
    },
    {
      image: '/images/Agkem_product2.png',
      name: 'INSECTICIDAS',
      description: 'Alternativas para el manejo de insectos plaga, con diferentes modos de acción y estrategias de rotación para minimizar resistencia.',
      icon: '🦋'
    },
    {
      image: '/images/Agkem_product3.png',
      name: 'HERBICIDAS',
      description: 'Soluciones para control de malezas de hoja ancha y gramíneas, con opciones selectivas y no selectivas según cultivo y momento de aplicación.',
      icon: '🔥'
    }
  ];

  return (
    <section className="h-full bg-white overflow-hidden relative">
      <div className="container-custom h-full flex items-center py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full h-full">
          
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center overflow-y-auto lg:overflow-hidden py-4">
            
            <h2 className="font-bold uppercase mb-3 lg:mb-4 text-3xl lg:text-4xl xl:text-5xl text-gray-900">
              PRODUCTOS
            </h2>
            
            <p className="mb-4 lg:mb-6 text-gray-700 text-sm lg:text-base leading-relaxed">
              Nuestro portafolio abarca tres categorías principales para el manejo integral de plagas y enfermedades, con diversos modos de acción para favorecer la rotación y la eficacia.
            </p>
            
            {/* Products List */}
            <div className="flex flex-col gap-4 lg:gap-5">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 lg:gap-4"
                  data-testid={`product-card-${index + 1}`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 relative w-12 h-12 lg:w-14 lg:h-14">
                    <div className="w-full h-full rounded-full flex items-center justify-center text-2xl lg:text-3xl bg-gradient-to-br from-green-100 to-green-50 border-2 border-green-400">
                      {product.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1 lg:mb-2 text-base lg:text-lg tracking-wide">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-xs lg:text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Decorative Section with Circular Images */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative h-full">
            {/* Background image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-lg">
                <Image
                  src="/images/Agkem_productBG.png"
                  alt="Products Background"
                  fill
                  className="object-contain"
                  sizes="50vw"
                />
              </div>
            </div>
            
            {/* Circular overlays with green borders */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                
                {/* Top circular image - Berries */}
                <div className="absolute top-0 right-1/4 w-40 h-40 xl:w-48 xl:h-48">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-green-500 bg-white shadow-lg">
                    <Image
                      src="/images/Agkem_product1.png"
                      alt="Fungicidas"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>
                
                {/* Right circular image - Tomatoes */}
                <div className="absolute top-1/4 right-0 w-36 h-36 xl:w-44 xl:h-44">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-green-500 bg-white shadow-lg">
                    <Image
                      src="/images/Agkem_product2.png"
                      alt="Insecticidas"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>
                
                {/* Bottom circular image - Avocados */}
                <div className="absolute bottom-1/4 left-1/4 w-44 h-44 xl:w-52 xl:h-52">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-green-500 bg-white shadow-lg">
                    <Image
                      src="/images/Agkem_product3.png"
                      alt="Herbicidas"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>
                
                {/* Decorative curved line */}
                <svg 
                  className="absolute inset-0 w-full h-full" 
                  viewBox="0 0 400 400" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M 300 50 Q 350 150, 300 250 T 200 350" 
                    stroke="#22c55e" 
                    strokeWidth="3" 
                    fill="none"
                    opacity="0.3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
