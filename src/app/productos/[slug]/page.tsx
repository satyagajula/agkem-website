// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft } from 'lucide-react';

// interface ProductDetailProps {
//   params: {
//     id: string;
//   };
// }

// const ProductDetail = ({ params }: ProductDetailProps) => {
//   const id = params.id;

//   const products = [
//     {
//       id: '1',
//       name: 'Fungicidas',
//       image: '/images/Agkem_product1.png',
//       description: 'Opciones para la prevención y control de enfermedades fungosas, con perfiles preventivos/curativos y protección residual.',
//       details: 'Nuestros fungicidas ofrecen soluciones avanzadas para el control de enfermedades en cultivos. Con formulaciones innovadoras que combinan acción preventiva y curativa, garantizan una protección residual efectiva contra hongos patógenos.'
//     },
//     {
//       id: '2',
//       name: 'Insecticidas',
//       image: '/images/Agkem_product2.png',
//       description: 'Alternativas para el manejo de insectos plaga, con diferentes modos de acción y estrategias de rotación para minimizar resistencia.',
//       details: 'Nuestra línea de insecticidas proporciona control efectivo contra plagas agrícolas. Utilizando diferentes modos de acción, facilitan la rotación de productos para prevenir el desarrollo de resistencia en poblaciones de insectos.'
//     },
//     {
//       id: '3',
//       name: 'Herbicidas',
//       image: '/images/Agkem_product3.png',
//       description: 'Soluciones para control de malezas de hoja ancha y gramíneas, con opciones selectivas y no selectivas según cultivo y momento de aplicación.',
//       details: 'Ofrecemos herbicidas selectivos y no selectivos para el control eficiente de malezas. Nuestras soluciones se adaptan a diferentes cultivos y momentos de aplicación, maximizando la eficacia y minimizando el impacto ambiental.'
//     }
//   ];

//   const product = products.find(p => p.id === id);

//   if (!product) {
//     return (
//       <div className="h-screen overflow-hidden bg-white flex items-center justify-center p-4 sm:p-6 md:p-8">
//         <div className="text-center max-w-md">
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800">
//             Producto no encontrado
//           </h1>
//           <Link
//             href="/productos"
//             className="inline-flex items-center gap-2 bg-agkem-primary text-white px-6 py-3 rounded-lg hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 touch-manipulation min-h-[44px]"
//             data-testid="back-to-products-button"
//           >
//             <ArrowLeft size={20} />
//             Volver a Productos
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="h-screen overflow-y-auto lg:overflow-hidden bg-white py-4 sm:py-6 md:py-8 lg:py-8 pb-24 sm:pb-28 md:pb-32 lg:pb-16">
//       <div className="container-custom h-full flex flex-col lg:justify-center">
        
//         {/* Back button */}
//         {/* <Link
//           href="/productos"
//           className="inline-flex items-center gap-2 text-agkem-dark hover:text-agkem-primary transition-colors mb-3 sm:mb-4 lg:mb-4 touch-manipulation min-h-[44px] group"
//           data-testid="back-button"
//         >
//           <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
//           <span className="text-sm sm:text-base font-medium">Volver a Productos</span>
//         </Link> */}

//         {/* Product detail card */}
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden flex-1 lg:flex-1">
//           <div className="flex flex-col lg:flex-row h-full">
            
//             {/* Image section */}
//             <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-8 xl:p-10 bg-gray-50 flex items-center justify-center">
//               <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-contain"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   priority
//                 />
//               </div>
//             </div>
            
//             {/* Content section */}
//             <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center">
//               <h1 
//                 className="font-bold mb-3 text-agkem-dark
//                            text-xl
//                            sm:text-2xl sm:mb-3
//                            md:text-3xl md:mb-4
//                            lg:text-3xl lg:mb-3
//                            xl:text-4xl xl:mb-4"
//               >
//                 {product.name}
//               </h1>
              
//               <p 
//                 className="text-gray-700 mb-3 leading-relaxed
//                            text-xs
//                            sm:text-sm sm:mb-3
//                            md:text-base md:mb-4
//                            lg:text-sm lg:mb-3
//                            xl:text-base xl:mb-4"
//               >
//                 {product.description}
//               </p>
              
//               <p 
//                 className="text-gray-600 mb-4 leading-relaxed
//                            text-xs
//                            sm:text-sm sm:mb-5
//                            md:text-base md:mb-6
//                            lg:text-sm lg:mb-4
//                            xl:text-base xl:mb-5"
//               >
//                 {product.details}
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-3 lg:gap-2 xl:gap-3">
//                 <Link
//                   href="/productos"
//                   className="inline-flex items-center justify-center gap-2 bg-agkem-primary text-white px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-lg hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation min-h-[44px] font-semibold text-sm lg:text-sm xl:text-base"
//                   data-testid="back-to-products-cta"
//                 >
//                   {/* <ArrowLeft size={18} /> */}
//                   Values
//                 </Link>
//                 {/* <Link
//                   href="/contacto"
//                   className="inline-flex items-center justify-center gap-2 bg-white text-agkem-dark border-2 border-agkem-primary px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-lg hover:bg-agkem-primary hover:text-white transition-all duration-300 shadow-md touch-manipulation min-h-[44px] font-semibold text-sm lg:text-sm xl:text-base"
//                   data-testid="contact-cta"
//                 >
//                   Contactar
//                 </Link> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

// export async function generateStaticParams() {
//   return [
//     { id: '1' },
//     { id: '2' },
//     { id: '3' },
//   ];
// }



// app/productos/[slug]/page.tsx
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft } from 'lucide-react';

// interface ProductDetailProps {
//   params: {
//     slug: string;
//   };
// }

// const products = [
//   {
//     id: '1',
//     slug: 'fungicidas',
//     name: 'Fungicidas',
//     image: '/images/Agkem_product1.png',
//     description:
//       'Opciones para la prevención y control de enfermedades fungosas, con perfiles preventivos/curativos y protección residual.',
//     details:
//       'Nuestros fungicidas ofrecen soluciones avanzadas para el control de enfermedades en cultivos. Con formulaciones innovadoras que combinan acción preventiva y curativa, garantizan una protección residual efectiva contra hongos patógenos.',
//   },
//   {
//     id: '2',
//     slug: 'insecticidas',
//     name: 'Insecticidas',
//     image: '/images/Agkem_product2.png',
//     description:
//       'Alternativas para el manejo de insectos plaga, con diferentes modos de acción y estrategias de rotación para minimizar resistencia.',
//     details:
//       'Nuestra línea de insecticidas proporciona control efectivo contra plagas agrícolas. Utilizando diferentes modos de acción, facilitan la rotación de productos para prevenir el desarrollo de resistencia en poblaciones de insectos.',
//   },
//   {
//     id: '3',
//     slug: 'herbicidas',
//     name: 'Herbicidas',
//     image: '/images/Agkem_product3.png',
//     description:
//       'Soluciones para control de malezas de hoja ancha y gramíneas, con opciones selectivas y no selectivas según cultivo y momento de aplicación.',
//     details:
//       'Ofrecemos herbicidas selectivos y no selectivos para el control eficiente de malezas. Nuestras soluciones se adaptan a diferentes cultivos y momentos de aplicación, maximizando la eficacia y minimizando el impacto ambiental.',
//   },
// ];

// const ProductDetail = ({ params }: ProductDetailProps) => {
//   const slug = params.slug;
//   const product = products.find((p) => p.slug === slug);

//   if (!product) {
//     return (
//       <div className="h-screen overflow-hidden bg-white flex items-center justify-center p-4 sm:p-6 md:p-8">
//         <div className="text-center max-w-md">
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800">Producto no encontrado</h1>
//           <Link
//             href="/productos"
//             className="inline-flex items-center gap-2 bg-agkem-primary text-white px-6 py-3 rounded-lg hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 touch-manipulation min-h-[44px]"
//             data-testid="back-to-products-button"
//           >
//             <ArrowLeft size={20} />
//             Volver a Productos
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="h-screen overflow-y-auto lg:overflow-hidden bg-white py-4 sm:py-6 md:py-8 lg:py-8 pb-24 sm:pb-28 md:pb-32 lg:pb-16">
//       <div className="container-custom h-full flex flex-col lg:justify-center">
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden flex-1 lg:flex-1">
//           <div className="flex flex-col lg:flex-row h-full">
//             <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-8 xl:p-10 bg-gray-50 flex items-center justify-center">
//               <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square">
//                 <Image src={product.image} alt={product.name} fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" priority />
//               </div>
//             </div>

//             <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-center">
//               <h1 className="font-bold mb-3 text-agkem-dark text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
//                 {product.name}
//               </h1>

//               <p className="text-gray-700 mb-3 leading-relaxed text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
//                 {product.description}
//               </p>

//               <p className="text-gray-600 mb-4 leading-relaxed text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
//                 {product.details}
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 lg:gap-2 xl:gap-3">
//                 <Link
//                   href="/productos"
//                   className="inline-flex items-center justify-center gap-2 bg-agkem-primary text-white px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-lg hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation min-h-[44px] font-semibold text-sm lg:text-sm xl:text-base"
//                   data-testid="back-to-products-cta"
//                 >
//                   Values
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

// export async function generateStaticParams() {
//   return products.map((p) => ({ slug: p.slug }));
// }
















// src/app/productos/[slug]/page.tsx
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";

// interface ProductDetailProps {
//   params: {
//     slug: string;
//   };
// }

// const products = [
//   {
//     id: "1",
//     slug: "fungicidas",
//     name: "Fungicidas",
//     image: "/images/Agkem_product1.png",
//     description:
//       "Opciones para la prevención y control de enfermedades fungosas, con perfiles preventivos/curativos y protección residual.",
//     details:
//       "Nuestros fungicidas ofrecen soluciones avanzadas para el control de enfermedades en cultivos. Con formulaciones innovadoras que combinan acción preventiva y curativa, garantizan una protección residual efectiva contra hongos patógenos.",
//   },
//   {
//     id: "2",
//     slug: "insecticidas",
//     name: "Insecticidas",
//     image: "/images/Agkem_product2.png",
//     description:
//       "Alternativas para el manejo de insectos plaga, con diferentes modos de acción y estrategias de rotación para minimizar resistencia.",
//     details:
//       "Nuestra línea de insecticidas proporciona control efectivo contra plagas agrícolas. Utilizando diferentes modos de acción, facilitan la rotación de productos para prevenir el desarrollo de resistencia en poblaciones de insectos.",
//   },
//   {
//     id: "3",
//     slug: "herbicidas",
//     name: "Herbicidas",
//     image: "/images/Agkem_product3.png",
//     description:
//       "Soluciones para control de malezas de hoja ancha y gramíneas, con opciones selectivas y no selectivas según cultivo y momento de aplicación.",
//     details:
//       "Ofrecemos herbicidas selectivos y no selectivos para el control eficiente de malezas. Nuestras soluciones se adaptan a diferentes cultivos y momentos de aplicación, maximizando la eficacia y minimizando el impacto ambiental.",
//   },
// ];

// // map slug -> background image path in /public/images
// const bgMap: Record<string, string> = {
//   fungicidas: "/images/fungicidas_bg.png",
//   insecticidas: "/images/insecticidas_bg.png",
//   herbicidas: "/images/herbicidas_bg.png",
// };

// const ProductDetail = ({ params }: ProductDetailProps) => {
//   const slug = params.slug;
//   const product = products.find((p) => p.slug === slug);

//   // background for this page (defaults to a neutral image or none)
//   const backgroundImage = bgMap[slug] ?? "";

//   if (!product) {
//     return (
//       <div className="h-screen flex items-center justify-center p-4 bg-white">
//         <div className="text-center max-w-md">
//           <h1 className="text-2xl font-bold mb-4 text-gray-800">Producto no encontrado</h1>
//           <Link
//             href="/productos"
//             className="inline-flex items-center gap-2 bg-agkem-primary text-white px-6 py-3 rounded-lg hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 touch-manipulation min-h-[44px]"
//           >
//             <ArrowLeft size={20} />
//             Volver a Productos
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const fungicidasList = [
//   { title: "LANDER 250", subtitle: "AZOXYSTROBIN 250" },
//   { title: "METALAXIL 240 CE", subtitle: "METALAXIL 240 CE" },
//   { title: "SLASH 250", subtitle: "PIRACLOSTROBIN 250" },
//   { title: "SANARE", subtitle: "TIABENDAZOL 600" },
// ];

// const insecticidasList = [
//   { title: "ABAMECTINA 1.8 CE", subtitle: "ABAMECTINA 1.8 CE" },
//   { title: "APRID 200", subtitle: "ACETAMIPRID 200" },
//   { title: "ALFA 1.8", subtitle: "BENZOATO DE EMAMECTINA 1.8" },
//   { title: "KOROS", subtitle: "SPINOSAD 480" },
// ];

// const herbicidasList = [
//   { title: "GLORY 90", subtitle: "ATRAZINA 90" },
//   { title: "KAIMA 41", subtitle: "GLIFOSATO 41%" },
//   { title: "OVER 18", subtitle: "GLUFOSINATO DE AMONIO 200" },
//   { title: "SHAO 200", subtitle: "PARAQUAT 200" },
// ];

// const sideImageMap: Record<string, string> = {
//   fungicidas: "/images/fungicidas_products.png",
//   insecticidas: "/images/insecticidas_products.png",
//   herbicidas: "/images/herbicidas_products.png",
// };


// const getProductListForSlug = (slug: string) => {
//   if (slug === "fungicidas")
//     return {
//       list: fungicidasList,
//       bullet: "/images/Agkem_fungicidasBullet.png",
//       titleColor: "#2C3E2C",
//     };

//   if (slug === "insecticidas")
//     return {
//       list: insecticidasList,
//       bullet: "/images/Agkem_insecticidasBullet.png",
//       titleColor: "#555",
//     };

//   if (slug === "herbicidas")
//     return {
//       list: herbicidasList,
//       bullet: "/images/Agkem_herbicidasBullet.png",
//       titleColor: "#2C5E19",
//     };

//   return { list: [], bullet: "", titleColor: "#000" };
// };


//   return (
//   <div
//     className="min-h-[calc(100vh)] bg-no-repeat bg-center bg-cover"
//     style={{
//       backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
//     }}
//   >
//     {/* scrollable content area */}
//     <div className="container-custom w-full min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center overflow-y-auto bg-transparent px-4 py-10 sm:py-8 lg:py-10">
//       {/* container: link + card live inside this so background alignment is preserved */}
//       {/* <div className="container-custom relative h-full flex flex-col lg:justify-center"> */}
//         {/* <-- BACK LINK placed inside container so it doesn't affect the background layout */}
//         <div className="mb-6">
//           <Link
//             href="/productos"
//             className="inline-flex items-center gap-2 font-semibold text-agkem-dark text-lg
//                        bg-white/90 px-4 py-2 rounded-md shadow-sm backdrop-blur-sm
//                        hover:shadow-md transition z-20"
//           >
//             <ArrowLeft size={20} />
//             Volver a Productos
//           </Link>
//         </div>

//         {/* product card; ensure it's stacked below the link visually */}
//         <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden flex-1 relative z-10 w-full /* Mobile / iOS: make it BIGGER */
//     max-w-[98%]
//     sm:max-w-[95%]
//     md:max-w-[92%]
//      /* Desktop: reduce width */
//     lg:max-w-4xl
//     xl:max-w-5xl
//     2xl:max-w-5xl
//     /* Padding and spacing */
//     p-5 sm:p-6 md:p-7 lg:p-8
//     mt-6 sm:mt-8 md:mt-10    /* More space BELOW header */
//     mb-10                    /* More space ABOVE copyright */
//     ">
//           <div className="flex flex-col lg:flex-row h-full">
//             <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-8 xl:p-10 bg-transparent flex items-center justify-center">
//               {/* innerGroup is centered in the left half; content inside is stacked and list items remain left-aligned */}
//               <div className="w-full max-w-md flex flex-col items-start justify-center">
//                 {/* optional product image above the list (centered) */}
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="object-contain w-full max-w-xs mb-6 mx-auto"
//                 />

//                 {/* the list itself — fixed max width, centered as a group because parent is centered */}
//                 {(() => {
//                   const { list, bullet, titleColor } = getProductListForSlug(slug);
//                   return (
//                     <ul className="max-w-md mx-auto space-y-6">
//                       {list.map((item) => (
//                         <li key={item.title} className="flex items-start gap-3">
//                           {/* Bullet icon image */}
//                           <img
//                             src={bullet}
//                             alt="bullet"
//                             className="w-8 h-8 mt-1 object-contain"
//                           />

//                           <div>
//                             <div
//                               className="font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-tight"
//                               style={{ color: titleColor }}
//                             >
//                               {item.title}
//                             </div>

//                             <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-gray-500">
//                               {item.subtitle}
//                             </div>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   );
//                 })()}
//               </div>
//             </div>
//             <div className=" lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-start">
//               <h1 className="font-bold mb-3 text-agkem-dark text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
//                 {product.name}
//               </h1>
//               {/* <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
//                 <img
//                     src={product.image}
//                     alt={product.name}
//                     className="object-contain "
//                   />
//               </div> */}

//               <p className="text-gray-700 mb-3 leading-relaxed text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
//                 {product.description}
//               </p>

//               <p className="text-gray-600 mb-4 leading-relaxed text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
//                 {product.details}
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 lg:gap-2 xl:gap-3">
//                 <Link
//                   href="/productos"
//                   className="inline-flex items-center justify-center gap-2 bg-agkem-primary text-white px-4 py-2 rounded-lg
//                              hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px] font-semibold text-sm"
//                 >
//                   Values
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* corner tractor - anchored to the container's bottom-left */}
//           <img
//             src="/images/Agkem_cornerTruck.png"
//             alt="tractor"
//             className="
//               pointer-events-none
//               absolute
//               bottom-1
//               left-2
//               sm:w-10 sm:h-10
//               md:w-16 md:h-16
//               hidden md:block
//             "
//           />
//           {/* right-side product group (anchored to card's bottom-right) */}
//           <img
//             src={sideImageMap[slug] ?? ""}
//             alt={`${product.name} group`}
//             className="
//               pointer-events-none
//               absolute
//               -right-3
//               -bottom-3
//               w-36
//               h-auto
//               sm:w-44
//               md:w-56
//               lg:w-64
//               z-20
//               hidden md:block
//               drop-shadow-lg
//             "
//           />
//         </div>
//         {/* end product card */}
//       {/* </div> */}
//       {/* end container */}
//     </div>
//     {/* end scrollable content */}
//   </div>
// );

// };

// export default ProductDetail;

// export async function generateStaticParams() {
//   return products.map((p) => ({ slug: p.slug }));
// }


import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

const products = [
  {
    id: "1",
    slug: "fungicidas",
    name: "Fungicidas",
    image: "/images/Agkem_product1.png",
    description:
      "Opciones para la prevención y control de enfermedades fungosas, con perfiles preventivos/curativos y protección residual.",
    details:
      "Nuestros fungicidas ofrecen soluciones avanzadas para el control de enfermedades en cultivos. Con formulaciones innovadoras que combinan acción preventiva y curativa, garantizan una protección residual efectiva contra hongos patógenos.",
  },
  {
    id: "2",
    slug: "insecticidas",
    name: "Insecticidas",
    image: "/images/Agkem_product2.png",
    description:
      "Alternativas para el manejo de insectos plaga, con diferentes modos de acción y estrategias de rotación para minimizar resistencia.",
    details:
      "Nuestra línea de insecticidas proporciona control efectivo contra plagas agrícolas. Utilizando diferentes modos de acción, facilitan la rotación de productos para prevenir el desarrollo de resistencia en poblaciones de insectos.",
  },
  {
    id: "3",
    slug: "herbicidas",
    name: "Herbicidas",
    image: "/images/Agkem_product3.png",
    description:
      "Soluciones para control de malezas de hoja ancha y gramíneas, con opciones selectivas y no selectivas según cultivo y momento de aplicación.",
    details:
      "Ofrecemos herbicidas selectivos y no selectivos para el control eficiente de malezas. Nuestras soluciones se adaptan a diferentes cultivos y momentos de aplicación, maximizando la eficacia y minimizando el impacto ambiental.",
  },
];

// map slug -> background image path in /public/images
const bgMap: Record<string, string> = {
  fungicidas: "/images/fungicidas_bg.png",
  insecticidas: "/images/insecticidas_bg.png",
  herbicidas: "/images/herbicidas_bg.png",
};

const ProductDetail = ({ params }: ProductDetailProps) => {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  // background for this page (defaults to a neutral image or none)
  const backgroundImage = bgMap[slug] ?? "";

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center p-4 bg-white">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Producto no encontrado</h1>
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 bg-agkem-primary text-white px-6 py-3 rounded-lg hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 touch-manipulation min-h-[44px]"
          >
            <ArrowLeft size={20} />
            Volver a Productos
          </Link>
        </div>
      </div>
    );
  }

  const fungicidasList = [
    { title: "LANDER 250", subtitle: "AZOXYSTROBIN 250" },
    { title: "METALAXIL 240 CE", subtitle: "METALAXIL 240 CE" },
    { title: "SLASH 250", subtitle: "PIRACLOSTROBIN 250" },
    { title: "SANARE", subtitle: "TIABENDAZOL 600" },
  ];

  const insecticidasList = [
    { title: "ABAMECTINA 1.8 CE", subtitle: "ABAMECTINA 1.8 CE" },
    { title: "APRID 200", subtitle: "ACETAMIPRID 200" },
    { title: "ALFA 1.8", subtitle: "BENZOATO DE EMAMECTINA 1.8" },
    { title: "KOROS", subtitle: "SPINOSAD 480" },
  ];

  const herbicidasList = [
    { title: "GLORY 90", subtitle: "ATRAZINA 90" },
    { title: "KAIMA 41", subtitle: "GLIFOSATO 41%" },
    { title: "OVER 18", subtitle: "GLUFOSINATO DE AMONIO 200" },
    { title: "SHAO 200", subtitle: "PARAQUAT 200" },
  ];

  const sideImageMap: Record<string, string> = {
    fungicidas: "/images/fungicidas_products.png",
    insecticidas: "/images/insecticidas_products.png",
    herbicidas: "/images/herbicidas_products.png",
  };

  const getProductListForSlug = (slug: string) => {
    if (slug === "fungicidas")
      return {
        list: fungicidasList,
        bullet: "/images/Agkem_fungicidasBullet.png",
        titleColor: "#2C3E2C",
      };

    if (slug === "insecticidas")
      return {
        list: insecticidasList,
        bullet: "/images/Agkem_insecticidasBullet.png",
        titleColor: "#555",
      };

    if (slug === "herbicidas")
      return {
        list: herbicidasList,
        bullet: "/images/Agkem_herbicidasBullet.png",
        titleColor: "#2C5E19",
      };

    return { list: [], bullet: "", titleColor: "#000" };
  };

  return (
    <div
      className="min-h-[calc(100vh)] bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      {/* outer scroll area */}
      <div className="container-custom w-full min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center overflow-y-auto bg-transparent px-4 py-10 sm:py-8 lg:py-10">
        {/* CENTERED WRAPPER that will control the left alignment for both the link + card */}
        <div className="w-full flex justify-center">
          {/* INNER centered box: this max-w matches the card width so link left edge aligns to card left edge */}
          <div
            className="
              w-full
              /* Mobile - keep it wide on small screens */
              max-w-[98%] sm:max-w-[95%] md:max-w-[92%]
              /* Increased desktop widths (~ +20%) */
              /* Slightly wider (≈10%) but not touching edges */
              lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1200px]
            "
          >
            {/* Back link — now inside the same centered wrapper so its left edge equals the card left edge */}
            <div className="mb-8 lg:mb-10">
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 font-semibold text-agkem-dark text-lg
                       bg-white/90 px-4 py-2 rounded-md shadow-sm backdrop-blur-sm
                       hover:shadow-md transition z-20"
              >
                <ArrowLeft size={20} />
                Volver a Productos
              </Link>
            </div>

            {/* product card (fills the inner wrapper width) */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden flex-1 relative z-10
                p-5 sm:p-6 md:p-7 lg:p-8
                min-h-[80vh]
                w-full
              "
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-8 xl:p-10 bg-transparent flex items-center justify-center">
                  {/* innerGroup is centered in the left half; content inside is stacked and list items remain left-aligned */}
                  <div className="w-full max-w-md flex flex-col items-start justify-center">
                    {/* optional product image above the list (centered) */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain w-full max-w-xs mb-6 mx-auto"
                    />

                    {/* the list itself — fixed max width, centered as a group because parent is centered */}
                    {(() => {
                      const { list, bullet, titleColor } = getProductListForSlug(slug);
                      return (
                        <ul className="max-w-md mx-auto space-y-6">
                          {list.map((item) => (
                            <li key={item.title} className="flex items-start gap-3">
                              {/* Bullet icon image */}
                              <img
                                src={bullet}
                                alt="bullet"
                                className="w-8 h-8 mt-1 object-contain"
                              />

                              <div>
                                <div
                                  className="font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-tight"
                                  style={{ color: titleColor }}
                                >
                                  {item.title}
                                </div>

                                <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-gray-500">
                                  {item.subtitle}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      );
                    })()}
                  </div>
                </div>

                <div className=" lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-start">
                  <h1 className="font-bold mb-3 text-agkem-dark text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                    {product.name}
                  </h1>

                  <p className="text-gray-700 mb-3 leading-relaxed text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
                    {product.description}
                  </p>

                  <p className="text-gray-600 mb-4 leading-relaxed text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
                    {product.details}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-2 xl:gap-3">
                    <Link
                      href="/productos"
                      className="inline-flex items-center justify-center gap-2 bg-agkem-primary text-white px-4 py-2 rounded-lg
                             hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px] font-semibold text-sm"
                    >
                      Values
                    </Link>
                  </div>
                </div>
              </div>

              {/* corner tractor - anchored to the card's bottom-left corner */}
              <img
                src="/images/Agkem_cornerTruck.png"
                alt="tractor"
                className="
                  pointer-events-none
                  absolute
                  bottom-3
                  left-3
                  sm:w-10 sm:h-10
                  md:w-16 md:h-16
                  z-30
                  hidden md:block
                "
              />

              {/* right-side product group (anchored to card's bottom-right) */}
              <img
                src={sideImageMap[slug] ?? ""}
                alt={`${product.name} group`}
                className="
                  pointer-events-none
                  absolute
                  -right-6
                  -bottom-2
                  w-36
                  h-auto
                  sm:w-44
                  md:w-56
                  lg:w-64
                  z-20
                  hidden md:block
                  drop-shadow-lg
                "
              />
            </div>
            {/* end product card */}
          </div>
        </div>
        {/* end centered wrapper */}
      </div>
      {/* end scrollable content */}
    </div>
  );
};

export default ProductDetail;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

