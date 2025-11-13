// import Image from 'next/image';

// const ContactSection = () => {
//   return (
//     <section className="min-h-screen bg-white flex pb-16">
//       <div className="w-1/3 flex items-start justify-start p-8">
//         <Image
//           src="/images/Agkem_thanks.png"
//           alt="Contact Background"
//           width={300}
//           height={300}
//           className="max-w-full max-h-full object-contain"
//         />
//       </div>
//       <div className="w-2/3 flex flex-col justify-start p-8">
//         <h2 className="text-lg font-bold mb-2">CONTACTO</h2>
//         <p className="text-sm mb-2">
//           Para consultas comerciales o técnicas, contáctanos directamente.
//         </p>
//         <div className="text-darkgrey p-2 rounded mb-2" style={{backgroundColor: "#8dd57d"}}>
//           <h3 className="text-sm font-bold mb-2 text-center">Altiplano y Sureste</h3>
//           <div className="grid grid-cols-2 gap-8">
//             <div>
//               <p className="text-xs"><strong>Contacto:</strong> Cicerón Maza</p>
//               <p className="text-xs"><strong>Teléfono/WhatsApp:</strong> +52 96 1233 4597</p>
//               <p className="text-xs"><strong>Email:</strong> ciceron.maza@ag-kem.com</p>
//             </div>
//             <div>
//               <p className="text-xs"><strong>Contacto:</strong> Omar Mora</p>
//               <p className="text-xs"><strong>Teléfono/WhatsApp:</strong> +52 249 101 0701</p>
//               <p className="text-xs"><strong>Email:</strong> ome_agronomo46@hotmail.com</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <div className="flex flex-col gap-2 flex-1">
//             <div className="text-darkgrey p-2 rounded" style={{backgroundColor: "#8dd57d"}}>
//               <h3 className="text-sm font-bold mb-2 text-center">Dirección Comercial</h3>
//               <p className="text-xs"><strong>Contacto:</strong> Sergio Moraila</p>
//               <p className="text-xs"><strong>Teléfono/WhatsApp:</strong> +52 33 2258 4777</p>
//               <p className="text-xs"><strong>Email:</strong> sergio.moraila@ag-kem.com</p>
//             </div>
//             <div className="text-darkgrey p-2 rounded" style={{backgroundColor: "#8dd57d"}}>
//               <h3 className="text-sm font-bold mb-2 text-center">Noroeste</h3>
//               <p className="text-xs"><strong>Contacto:</strong> Mario Ballesteros</p>
//               <p className="text-xs"><strong>Teléfono/WhatsApp:</strong> +52 64 420 2414</p>
//               <p className="text-xs"><strong>Email:</strong> mariobamx@yahoo.com.mx</p>
//             </div>
//           </div>
//           <div className="text-darkgrey p-2 rounded flex-1" style={{backgroundColor: "#8dd57d"}}>
//             <h3 className="text-sm font-bold mb-2 text-center">UBICACIÓN CORPORATIVA</h3>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <p className="text-xs mb-2"><strong>Dirección:</strong> Calle Asunción #1653, Guadalajara, Jalisco, México</p>
//                 <p className="text-xs"><strong>Horario:</strong> Lunes a Viernes, 9:00–18:00 (hora local)</p>
//               </div>
//               <div>
//                 <iframe
//                   src="https://maps.google.com/maps?q=Calle+Asunción+1653,+Guadalajara,+Jalisco,+México&output=embed"
//                   width="100%"
//                   height="150"
//                   style={{border:0}}
//                   allowFullScreen={true}
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className="max-h-screen bg-white flex flex-col lg:flex-row pb-16 sm:pb-20 md:pb-24 lg:pb-16 overflow-y-auto">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/3 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:items-start lg:justify-start">
        <Image
          src="/images/Agkem_thanks.png"
          alt="Contact Background"
          width={300}
          height={300}
          className="max-w-full max-h-full object-contain
                     w-40 h-40
                     sm:w-48 sm:h-48
                     md:w-56 md:h-56
                     lg:w-64 lg:h-64
                     xl:w-72 xl:h-72"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-2/3 flex flex-col justify-start p-4 sm:p-6 md:p-4 lg:p-8">
        <h2 
          className="font-bold mb-2 uppercase
                     text-base
                     sm:text-lg sm:mb-3
                     md:text-base md:mb-2
                     lg:text-lg lg:mb-2"
        >
          CONTACTO
        </h2>
        
        <p 
          className="mb-3 text-gray-700
                     text-xs
                     sm:text-sm sm:mb-4
                     md:text-xs md:mb-2
                     lg:text-sm lg:mb-2"
        >
          Para consultas comerciales o técnicas, contáctanos directamente.
        </p>

        {/* Altiplano y Sureste */}
        <div 
          className="text-darkgrey p-3 rounded mb-3
                     sm:p-4 sm:mb-4
                     md:p-2 md:mb-2
                     lg:p-2 lg:mb-2" 
          style={{backgroundColor: "#8dd57d"}}
        >
          <h3 
            className="font-bold mb-2 text-center
                       text-xs
                       sm:text-sm sm:mb-3
                       md:text-xs md:mb-1.5
                       lg:text-sm lg:mb-2"
          >
            Altiplano y Sureste
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-3 lg:gap-8">
            <div>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                <strong>Contacto:</strong> Cicerón Maza
              </p>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                <strong>Teléfono/WhatsApp:</strong> +52 96 1233 4597
              </p>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                <strong>Email:</strong> ciceron.maza@ag-kem.com
              </p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                <strong>Contacto:</strong> Omar Mora
              </p>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                <strong>Teléfono/WhatsApp:</strong> +52 249 101 0701
              </p>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                <strong>Email:</strong> ome_agronomo46@hotmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom sections container */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-2 lg:gap-2">
          {/* Left Column */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-2 lg:gap-2 lg:flex-1">
            {/* Dirección Comercial */}
            <div 
              className="text-darkgrey p-3 rounded
                         sm:p-4
                         md:p-2
                         lg:p-2" 
              style={{backgroundColor: "#8dd57d"}}
            >
              <h3 
                className="font-bold mb-2 text-center
                           text-xs
                           sm:text-sm sm:mb-3
                           md:text-xs md:mb-1.5
                           lg:text-sm lg:mb-2"
              >
                Dirección Comercial
              </h3>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                <strong>Contacto:</strong> Sergio Moraila
              </p>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                <strong>Teléfono/WhatsApp:</strong> +52 33 2258 4777
              </p>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                <strong>Email:</strong> sergio.moraila@ag-kem.com
              </p>
            </div>

            {/* Noroeste */}
            <div 
              className="text-darkgrey p-3 rounded
                         sm:p-4
                         md:p-2
                         lg:p-2" 
              style={{backgroundColor: "#8dd57d"}}
            >
              <h3 
                className="font-bold mb-2 text-center
                           text-xs
                           sm:text-sm sm:mb-3
                           md:text-xs md:mb-1.5
                           lg:text-sm lg:mb-2"
              >
                Noroeste
              </h3>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                <strong>Contacto:</strong> Mario Ballesteros
              </p>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                <strong>Teléfono/WhatsApp:</strong> +52 64 420 2414
              </p>
              <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                <strong>Email:</strong> mariobamx@yahoo.com.mx
              </p>
            </div>
          </div>

          {/* UBICACIÓN CORPORATIVA */}
          <div 
            className="text-darkgrey p-3 rounded lg:flex-1
                       sm:p-4
                       md:p-2
                       lg:p-2" 
            style={{backgroundColor: "#8dd57d"}}
          >
            <h3 
              className="font-bold mb-2 text-center
                         text-xs
                         sm:text-sm sm:mb-3
                         md:text-xs md:mb-1.5
                         lg:text-sm lg:mb-2"
            >
              UBICACIÓN CORPORATIVA
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-2 lg:gap-4">
              <div>
                <p className="text-[10px] mb-2 sm:text-xs sm:mb-3 md:text-[10px] md:mb-1.5 lg:text-xs lg:mb-2">
                  <strong>Dirección:</strong> Calle Asunción #1653, Guadalajara, Jalisco, México
                </p>
                <p className="text-[10px] sm:text-xs md:text-[10px] lg:text-xs">
                  <strong>Horario:</strong> Lunes a Viernes, 9:00–18:00 (hora local)
                </p>
              </div>
              <div>
                <iframe
                  src="https://maps.google.com/maps?q=Calle+Asunción+1653,+Guadalajara,+Jalisco,+México&output=embed"
                  width="100%"
                  height="120"
                  className="sm:h-32 md:h-28 lg:h-36"
                  style={{border:0}}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
