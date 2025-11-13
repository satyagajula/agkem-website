// const HeroSection = () => {
//   return (
//     <section className="bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/images/Agkem_homeBackground.png')", height: "100vh", filter: "brightness(1.2)" }}>
//       <h1 className="font-gordita font-bold absolute top-8 left-4 z-10" style={{ fontSize: "58.7px", color: "#213d00" }}>
//         Innovación para el campo
//       </h1>
//       <div className="flex items-center justify-center h-full">
//         <p className="font-gordita" style={{ fontSize: "51.7px", color: "#213d00" }}>
//           Siempre cercanos a nuestros clientes
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


const HeroSection = () => {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat relative min-h-screen" 
      style={{ 
        backgroundImage: "url('/images/Agkem_homeBackground.png')",
        backgroundPosition: "center 70%",
        filter: "brightness(1.2)" 
      }}
    >
      {/* Main heading - responsive text sizing */}
      <h1 
        className="font-gordita font-bold absolute z-10
                   top-4 left-4 right-4
                   text-2xl
                   sm:text-3xl sm:top-6 sm:left-6
                   md:text-4xl md:top-8 md:left-8
                   lg:text-5xl lg:top-10 lg:left-10
                   xl:text-6xl xl:top-12 xl:left-12
                   2xl:left-16"
        style={{ color: "#213d00" }}
      >
        Innovación para el campo
      </h1>

      {/* Centered tagline - responsive text sizing and padding */}
      <div 
        className="flex items-center justify-center h-screen px-4
                   sm:px-6
                   md:px-8
                   lg:px-12
                   xl:px-16
                   pb-16
                   sm:pb-20
                   md:pb-24
                   lg:pb-28
                   xl:pb-32"
      >
        <p 
          className="font-gordita text-center
                     text-xl
                     sm:text-2xl
                     md:text-3xl
                     lg:text-4xl
                     xl:text-5xl
                     2xl:text-6xl
                     leading-tight"
          style={{ color: "#213d00" }}
        >
          Siempre cercanos a nuestros clientes
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
