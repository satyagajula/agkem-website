// const AboutSection = () => {
//   return (
//     <section className="h-screen py-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/Agkem_aboutUs.png')" }}>
//       <h2 className="heading-2 text-center mb-8">SOBRE NOSOTROS</h2>
//       <div className="max-w-4xl mx-auto p-8 rounded-lg text-black -mt-8" style={{ backgroundColor: '#f0ddab' }}>
//         <p className="mb-4 text-sm text-white p-4 rounded" style={{ backgroundColor: '#2C3E2C', opacity: 0.8 }}>
//           AG KEM nace como una empresa mexicana, basada en alianzas estratégicas con presencia
//           internacional. Nos distingue una combinación de precios competitivos, calidad consistente y
//           confiabilidad en el suministro; con un portafolio en crecimiento de productos y servicios.
//         </p>
//         <div className="p-2 rounded-lg">
//           <ul className="text-sm list-none [&>li]:relative [&>li]:pl-6 [&>li]:mb-2 [&>li]:before:content-['✓'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-agkem-primary [&>li]:before:font-bold [&>li]:before:text-lg">
//             <li>
//               <strong>Innovadores</strong>: mejora continua en formulaciones y procesos.
//             </li>
//             <li>
//               <strong>Flexibles</strong>: nos adaptamos por cultivo, región y cliente.
//             </li>
//             <li>
//               <strong>Internacional</strong>: redes de abasto y colaboración global.
//             </li>
//             <li>
//               <strong>Competitivos</strong>: enfoque en eficacia y precios competitivos.
//             </li>
//             <li>
//               <strong>Confiabilidad</strong>: calidad garantizada y respaldo con registros oficiales vigentes.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


const AboutSection = () => {
  return (
    <section 
      className="h-screen py-2 bg-cover bg-center bg-no-repeat
                 sm:py-8
                 md:py-8
                 lg:py-8" 
      style={{ backgroundImage: "url('/images/Agkem_aboutUs.png')" }}
    >
      
      <div 
        className="max-w-4xl mx-auto p-3 rounded-lg text-black -mt-1 mb-8
                   px-4
                   sm:px-6 sm:p-3 sm:mb-10
                   md:px-8 md:p-4 md:mb-12
                   lg:px-10 lg:p-4 lg:mb-14
                   xl:px-12 xl:p-5 xl:mb-16
                   max-h-[280px]
                   sm:max-h-[320px]
                   md:max-h-[380px]
                   lg:max-h-[420px]
                   xl:max-h-[480px]
                   overflow-y-auto" 
        style={{ backgroundColor: '#f0ddab' }}
      >
        <h2 
          className="heading-2 text-center
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    lg:text-4xl"
        >
          SOBRE NOSOTROS
        </h2>
        <p 
          className="mb-2 text-white p-2 rounded
                     text-[10px]
                     sm:text-xs sm:mb-2 sm:p-2
                     md:text-sm md:mb-2 md:p-2.5
                     lg:text-sm lg:p-3
                     xl:text-base xl:p-3" 
          style={{ backgroundColor: '#2C3E2C', opacity: 0.8 }}
        >
          AG KEM nace como una empresa mexicana, basada en alianzas estratégicas con presencia
          internacional. Nos distingue una combinación de precios competitivos, calidad consistente y
          confiabilidad en el suministro; con un portafolio en crecimiento de productos y servicios.
        </p>
        
        <div className="p-0.5 rounded-lg sm:p-1 md:p-1">
          <ul 
            className="list-none
                       text-[10px]
                       sm:text-xs
                       md:text-sm
                       lg:text-sm
                       xl:text-base
                       [&>li]:relative 
                       [&>li]:pl-6
                       [&>li]:mb-1
                       sm:[&>li]:pl-6 sm:[&>li]:mb-1.5
                       md:[&>li]:pl-7 md:[&>li]:mb-1.5
                       lg:[&>li]:pl-7
                       [&>li]:before:content-['✓'] 
                       [&>li]:before:absolute 
                       [&>li]:before:left-0 
                       [&>li]:before:text-agkem-primary 
                       [&>li]:before:font-bold 
                       [&>li]:before:text-base
                       sm:[&>li]:before:text-lg
                       md:[&>li]:before:text-lg
                       lg:[&>li]:before:text-xl"
          >
            <li>
              <strong>Innovadores</strong>: mejora continua en formulaciones y procesos.
            </li>
            <li>
              <strong>Flexibles</strong>: nos adaptamos por cultivo, región y cliente.
            </li>
            <li>
              <strong>Internacional</strong>: redes de abasto y colaboración global.
            </li>
            <li>
              <strong>Competitivos</strong>: enfoque en eficacia y precios competitivos.
            </li>
            <li>
              <strong>Confiabilidad</strong>: calidad garantizada y respaldo con registros oficiales vigentes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
