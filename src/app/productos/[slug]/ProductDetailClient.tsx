"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  description: string;
  details: string;
}

interface Props {
  slug: string;
  products: Product[]; // passed from server page
  backgroundImage?: string;
}

const ProductDetailClient: React.FC<Props> = ({ slug, products, backgroundImage = "" }) => {
  const product = products.find((p) => p.slug === slug);

  // mounted flag for simple mount animations
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  // product lists and bullet + side images
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

  const getProductListForSlug = (s: string) => {
    if (s === "fungicidas")
      return {
        list: fungicidasList,
        bullet: "/images/Agkem_fungicidasBullet.png",
        titleColor: "#2C3E2C",
      };

    if (s === "insecticidas")
      return {
        list: insecticidasList,
        bullet: "/images/Agkem_insecticidasBullet.png",
        titleColor: "#555",
      };

    if (s === "herbicidas")
      return {
        list: herbicidasList,
        bullet: "/images/Agkem_herbicidasBullet.png",
        titleColor: "#2C5E19",
      };

    return { list: [], bullet: "", titleColor: "#000" };
  };

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

  const { list, bullet, titleColor } = getProductListForSlug(slug);

  return (
    <div
      className="min-h-[calc(100vh)] bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      <div className="container-custom w-full min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center overflow-y-auto bg-transparent px-4 py-10 sm:py-8 lg:py-10">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[98%] sm:max-w-[95%] md:max-w-[92%] lg:max-w-[950px] xl:max-w-[1100px] 2xl:max-w-[1200px]">
            {/* Back link (aligned to card because both share the wrapper) */}
            <div
              className={`mb-8 lg:mb-10 transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: mounted ? "100ms" : "0ms" }}
            >
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 font-semibold text-agkem-dark text-lg bg-white/90 px-4 py-2 rounded-md shadow-sm backdrop-blur-sm hover:shadow-md transition z-20"
              >
                <ArrowLeft size={20} />
                Volver a Productos
              </Link>
            </div>

            {/* Product card */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden flex-1 relative z-10 p-5 sm:p-6 md:p-7 lg:p-8 min-h-[70vh] w-full transition-opacity duration-300"
              style={{ transitionDelay: mounted ? "100ms" : "0ms", opacity: mounted ? 1 : 0 }}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* LEFT */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-8 xl:p-10 bg-transparent flex items-center justify-center">
                  <div className="w-full max-w-md flex flex-col items-start justify-center">
                    {/* product image above list */}
                    <div className={`object-contain w-full max-w-xs mb-6 mx-auto transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: mounted ? "260ms" : "0ms" }}>
                      <Image src={product.image} alt={product.name} width={360} height={360} className="w-full h-auto object-contain" />
                    </div>

                    {/* LIST */}
                    <ul className="max-w-md mx-auto space-y-6">
                      {list.map((item, idx) => (
                        <li
                          key={item.title}
                          className="flex items-start gap-3 transition-opacity duration-500"
                          style={{ transitionDelay: `${300 + idx * 160}ms`, opacity: mounted ? 1 : 0 }}
                        >
                          {/* bullet: small image (kept as <img> — it's tiny; if you want convert to <Image/> ) */}
                          <img src={bullet} alt="bullet" className="w-8 h-8 mt-1 object-contain" />

                          <div>
                            <div className="font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-tight" style={{ color: titleColor }}>
                              {item.title}
                            </div>

                            <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-gray-500">
                              {item.subtitle}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-6 xl:p-8 flex flex-col justify-start">
                  <h1 className="font-bold mb-3 text-agkem-dark text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl transition-opacity duration-500" style={{ transitionDelay: mounted ? "420ms" : "0ms", opacity: mounted ? 1 : 0 }}>
                    {product.name}
                  </h1>

                  <p className="text-gray-700 mb-3 leading-relaxed text-xs sm:text-sm md:text-base lg:text-sm xl:text-base transition-opacity duration-500" style={{ transitionDelay: mounted ? "520ms" : "0ms", opacity: mounted ? 1 : 0 }}>
                    {product.description}
                  </p>

                  <p className="text-gray-600 mb-4 leading-relaxed text-xs sm:text-sm md:text-base lg:text-sm xl:text-base transition-opacity duration-500" style={{ transitionDelay: mounted ? "580ms" : "0ms", opacity: mounted ? 1 : 0 }}>
                    {product.details}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-2 xl:gap-3" style={{ transitionDelay: mounted ? "650ms" : "0ms", opacity: mounted ? 1 : 0 }}>
                    <Link href="/productos" className="inline-flex items-center justify-center gap-2 bg-agkem-primary text-white px-4 py-2 rounded-lg hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px] font-semibold text-sm">
                      Values
                    </Link>
                  </div>
                </div>
              </div>

              {/* corner tractor (bottom-left) */}
              <div style={{ transitionDelay: mounted ? "740ms" : "0ms", opacity: mounted ? 1 : 0 }}>
                <Image src="/images/Agkem_cornerTruck.png" alt="tractor" width={120} height={120} className="pointer-events-none absolute bottom-3 left-3 sm:w-10 sm:h-10 md:w-16 md:h-16 z-30 hidden md:block" />
              </div>

              {/* right-side product group */}
              <div style={{ transitionDelay: mounted ? "760ms" : "0ms", opacity: mounted ? 1 : 0 }}>
                <Image src={sideImageMap[slug] ?? ""} alt={`${product.name} group`} width={520} height={400} className="pointer-events-none absolute -right-6 -bottom-2 w-36 sm:w-44 md:w-56 lg:w-64 h-auto z-20 hidden md:block drop-shadow-lg" />
              </div>
            </div>
            {/* end product card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailClient;
