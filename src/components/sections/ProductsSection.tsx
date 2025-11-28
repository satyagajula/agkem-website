// //'use client';

// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const slugify = (str: string) =>
//   str
//     .toLowerCase()
//     .normalize('NFD')                     // separate accents from letters
//     .replace(/[\u0300-\u036f]/g, '')      // remove diacritics
//     .replace(/[^a-z0-9\s-]/g, '')         // remove invalid chars
//     .trim()
//     .replace(/\s+/g, '-')                 // spaces -> hyphens
//     .replace(/-+/g, '-');                 // collapse multiple hyphens

// const ProductsSection = () => {
//   const router = useRouter();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);

//   const products = [
//     {
//       image: '/images/Agkem_product1.png',
//       name: 'Fungicidas',
//       description:
//         'Opciones para la prevención y control de enfermedades fungosas, con perfiles preventivos/curativos y protección residual.',
//     },
//     {
//       image: '/images/Agkem_product2.png',
//       name: 'Insecticidas',
//       description:
//         'Alternativas para el manejo de insectos plaga, con diferentes modos de acción y estrategias de rotación para minimizar resistencia.',
//     },
//     {
//       image: '/images/Agkem_product3.png',
//       name: 'Herbicidas',
//       description:
//         'Soluciones para control de malezas de hoja ancha y gramíneas, con opciones selectivas y no selectivas según cultivo y momento de aplicación.',
//     },
//   ];

//   return (
//     <section className="bg-white w-full py-10 relative overflow-visible pb-0">
//       <div className="container-custom mx-auto px-10">

//         {/* Title */}
//         <h2
//           className={`font-bold uppercase text-[#2C3E2C]
//           text-[26px] leading-tight mb-3
//           transition-opacity duration-500
//           ${mounted ? 'opacity-100' : 'opacity-0'}`}
//         >
//           PRODUCTOS
//         </h2>

//         {/* Intro */}
//         <p
//           className={`text-[#555] text-[17px] leading-snug max-w-[700px] mb-8
//           transition-opacity duration-500 delay-200
//           ${mounted ? 'opacity-100' : 'opacity-0'}`}
//         >
//           Nuestro portafolio abarca tres categorías principales para el manejo integral
//           de plagas y enfermedades, con diversos modos de acción para favorecer
//           la rotación y la eficacia.
//         </p>

//         {/* FLEX LAYOUT (this is the fix) */}
//         <div className="flex justify-between items-start gap-6 w-full">

//           {/* LEFT COLUMN */}
//           <div className="w-[55%]">
//             {products.map((p, i) => {
//               const slug = slugify(p.name);

//               return (
//                 <div
//                   key={i}
//                   className={`mb-8 transition-opacity duration-700 ${
//                     mounted ? 'opacity-100' : 'opacity-0'
//                   }`}
//                   style={{ transitionDelay: `${200 + i * 200}ms` }}
//                 >
//                   <div
//                     className="relative w-[180px] h-[70px] cursor-pointer mb-2"
//                     onClick={() => router.push(`/productos/${slug}`)}
//                     role="link"
//                     tabIndex={0}
//                     aria-label={`Ver ${p.name}`}
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter' || e.key === ' ') router.push(`/productos/${slug}`);
//                     }}
//                   >
//                     <Image
//                       src={p.image}
//                       alt={p.name}
//                       fill
//                       className="object-contain"
//                       priority={i === 0}
//                     />
//                   </div>

//                   <p className="text-[#444] text-[17px] leading-snug max-w-[700px]">
//                     {p.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* RIGHT COLUMN (image now aligns perfectly to top) */}
//           <div className="w-[45%] flex justify-end">
//             <div className={`relative w-full max-w-[520px] -top-[150px] transition-opacity duration-500 ${
//               mounted ? 'opacity-100' : 'opacity-0'}`}
//               style={{ transitionDelay: "600ms" }}
//             >
//               <Image
//                 src="/images/Agkem_productBG.png"
//                 alt="Products Collage"
//                 width={520}
//                 height={700}
//                 className="object-contain w-full h-auto"
//               />
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProductsSection;




'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductsSection = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const products = [
    {
      slug: 'fungicidas',
      image: '/images/Agkem_product1.png',
      name: 'Fungicidas',
      description:
        'Opciones para la prevención y control de enfermedades fungosas, con perfiles preventivos/curativos y protección residual.',
    },
    {
      slug: 'insecticidas',
      image: '/images/Agkem_product2.png',
      name: 'Insecticidas',
      description:
        'Alternativas para el manejo de insectos plaga, con diferentes modos de acción y estrategias de rotación para minimizar resistencia.',
    },
    {
      slug: 'herbicidas',
      image: '/images/Agkem_product3.png',
      name: 'Herbicidas',
      description:
        'Soluciones para control de malezas de hoja ancha y gramíneas, con opciones selectivas y no selectivas según cultivo y momento de aplicación.',
    },
  ];

  return (
    <section className="bg-white w-full py-10 relative overflow-visible pb-0">
      <div className="container-custom mx-auto px-10">
        {/* Title */}
        <h2
          className={`font-bold uppercase text-[#2C3E2C] text-[26px] leading-tight mb-3 transition-opacity duration-500 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          PRODUCTOS
        </h2>

        {/* Intro */}
        <p
          className={`text-[#555] text-[17px] leading-snug max-w-[700px] mb-8 transition-opacity duration-500 delay-200 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Nuestro portafolio abarca tres categorías principales para el manejo integral
          de plagas y enfermedades, con diversos modos de acción para favorecer
          la rotación y la eficacia.
        </p>

        {/* FLEX LAYOUT */}
        <div className="flex justify-between items-start gap-6 w-full">
          {/* LEFT COLUMN */}
          <div className="w-[55%]">
            {products.map((p, i) => (
              <div
                key={p.slug}
                className={`mb-8 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${200 + i * 200}ms` }}
              >
                <div
                  className="relative w-[180px] h-[70px] cursor-pointer mb-2"
                  onClick={() => router.push(`/productos/${p.slug}`)}
                >
                  <Image src={p.image} alt={p.name} fill className="object-contain" priority={i === 0} />
                </div>
                <p className="text-[#444] text-[17px] leading-snug max-w-[700px]">{p.description}</p>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN (visual) */}
          <div className="w-[45%] flex justify-end">
            <div
              className={`relative w-full max-w-[520px] -top-[150px] transition-opacity duration-500 ${
                mounted ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <Image
                src="/images/Agkem_productBG.png"
                alt="Products Collage"
                width={520}
                height={700}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
