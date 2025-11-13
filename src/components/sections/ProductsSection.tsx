// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// const ProductsSection = () => {
//   const router = useRouter();
//   const products = [
//     {
//       image: '/images/Agkem_productname1.png',
//       description: 'Opciones para la prevención y control de enfermedades fungosas, con perfiles preventivos/curativos y protección residual.'
//     },
//     {
//       image: '/images/Agkem_productname2.png',
//       description: 'Alternativas para el manejo de insectos plaga, con diferentes modos de acción y estrategias de rotación para minimizar resistencia.'
//     },
//     {
//       image: '/images/Agkem_productname3.png',
//       description: 'Soluciones para control de malezas de hoja ancha y gramíneas, con opciones selectivas y no selectivas según cultivo y momento de aplicación.'
//     }
//   ];

//   return (
//     <section className="h-screen bg-white flex">
//       <div className="w-2/3 p-8 flex flex-col justify-center mt-0 lg:mt-[-8rem]">
//         <h2 className="text-2xl font-bold mb-4 uppercase">PRODUCTOS</h2>
//         <p className="text-sm mb-4 text-gray-700">
//           Nuestro portafolio abarca tres categorías principales para el manejo integral de plagas y enfermedades, con diversos modos de acción para favorecer la rotación y la eficacia.
//         </p>
//         <div className="space-y-4 ">
//           {products.map((product, index) => (
//             <div key={index} className="flex flex-col items-start">
//               <Image
//                 src={product.image}
//                 alt={`Product ${index + 1}`}
//                 width={100}
//                 height={100}
//                 className="cursor-pointer hover:opacity-80 transition-opacity"
//                 onClick={() => router.push(`/productos/${index + 1}`)}
//               />
//               <p className="text-sm text-gray-600 text-left mt-2 ">{product.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="w-1/3 relative">
//         <Image
//           src="/images/Agkem_productBG.png"
//           alt="Products Background"
//           width={400}
//           height={263}
//           className="absolute top-4 right-4 object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;



import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProductsSection = () => {
  const router = useRouter();
  const products = [
    {
      image: '/images/Agkem_product1.png',
      description: 'Opciones para la prevención y control de enfermedades fungosas, con perfiles preventivos/curativos y protección residual.'
    },
    {
      image: '/images/Agkem_product2.png',
      description: 'Alternativas para el manejo de insectos plaga, con diferentes modos de acción y estrategias de rotación para minimizar resistencia.'
    },
    {
      image: '/images/Agkem_product3.png',
      description: 'Soluciones para control de malezas de hoja ancha y gramíneas, con opciones selectivas y no selectivas según cultivo y momento de aplicación.'
    }
  ];

  return (
    <section className="h-screen bg-white flex flex-col lg:flex-row overflow-y-auto">
      {/* Left Content Section */}
      <div className="w-full lg:w-2/3 p-4 flex flex-col justify-center lg:mt-[-8rem]
                      sm:p-5
                      md:p-6
                      lg:p-8">
        
        <h2 
          className="font-bold mb-2 uppercase
                     text-lg
                     sm:text-xl sm:mb-3
                     md:text-2xl
                     lg:text-2xl lg:mb-4"
        >
          PRODUCTOS
        </h2>
        
        <p 
          className="mb-2 text-gray-700
                     text-xs
                     sm:text-sm sm:mb-3
                     md:text-sm
                     lg:text-sm lg:mb-4"
        >
          Nuestro portafolio abarca tres categorías principales para el manejo integral de plagas y enfermedades, con diversos modos de acción para favorecer la rotación y la eficacia.
        </p>

        {/* Image for mobile - between description and products */}
        <div className="lg:hidden w-full flex justify-center my-4 sm:my-5 md:my-6">
          <Image
            src="/images/Agkem_productBG.png"
            alt="Products Background"
            width={300}
            height={200}
            className="object-cover rounded-lg w-full max-w-sm"
          />
        </div>
        
        {/* Products List */}
        <div 
          className="space-y-2
                     sm:space-y-3
                     md:space-y-3
                     lg:space-y-4"
        >
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-start">
              <Image
                src={product.image}
                alt={`Product ${index + 1}`}
                width={100}
                height={100}
                className="cursor-pointer hover:opacity-80 transition-opacity
                           w-16 h-auto
                           sm:w-20
                           md:w-24
                           lg:w-24
                           xl:w-28"
                onClick={() => router.push(`/productos/${index + 1}`)}
              />
              <p 
                className="text-gray-600 text-left mt-1
                           text-[10px]
                           sm:text-xs sm:mt-1.5
                           md:text-sm md:mt-2
                           lg:text-sm"
              >
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Image Section - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block lg:w-1/3 relative">
        <Image
          src="/images/Agkem_productBG.png"
          alt="Products Background"
          width={350}
          height={230}
          className="absolute top-4 right-4 object-cover"
        />
      </div>
    </section>
  );
};

export default ProductsSection;
