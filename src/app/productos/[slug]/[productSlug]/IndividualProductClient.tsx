"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileText, Download } from "lucide-react";

interface PDFDocument {
  name: string;
  url: string;
  icon?: string;
}

interface IndividualProduct {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  image: string;
  activeIngredient: string;
  uses: string[];
  dosage: string;
  precautions: string;
  documents?: PDFDocument[];
}

interface Props {
  product: IndividualProduct;
  categorySlug: string;
  backgroundImage?: string;
}

const IndividualProductClient: React.FC<Props> = ({
  product,
  categorySlug,
  backgroundImage = "",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  // Get category name for display
  const categoryNames: Record<string, string> = {
    fungicidas: "Fungicidas",
    insecticidas: "Insecticidas",
    herbicidas: "Herbicidas",
  };

  const categoryName = categoryNames[categorySlug] || categorySlug;

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
            {/* Back link */}
            <div
              className={`mb-8 lg:mb-10 transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: mounted ? "100ms" : "0ms" }}
            >
              <Link
                href={`/productos/${categorySlug}`}
                className="inline-flex items-center gap-2 font-semibold text-agkem-dark text-lg bg-white/90 px-4 py-2 rounded-md shadow-sm backdrop-blur-sm hover:shadow-md transition z-20"
              >
                <ArrowLeft size={20} />
                Volver a {categoryName}
              </Link>
            </div>

            {/* Product detail card */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden flex-1 relative z-10 p-5 sm:p-6 md:p-7 lg:p-8 min-h-[70vh] w-full transition-opacity duration-300"
              style={{
                transitionDelay: mounted ? "100ms" : "0ms",
                opacity: mounted ? 1 : 0,
              }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* LEFT - Product Image */}
                <div className="w-full lg:w-2/5 flex items-center justify-center p-4">
                  <div
                    className="w-full max-w-md transition-opacity duration-500"
                    style={{
                      transitionDelay: mounted ? "260ms" : "0ms",
                      opacity: mounted ? 1 : 0,
                    }}
                  >
                    <div className="bg-gray-50 rounded-lg p-6 shadow-inner">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT - Product Information */}
                <div className="lg:w-3/5 p-4 flex flex-col">
                  {/* Title */}
                  <h1
                    className="font-bold mb-2 text-agkem-dark text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl transition-opacity duration-500"
                    style={{
                      transitionDelay: mounted ? "320ms" : "0ms",
                      opacity: mounted ? 1 : 0,
                    }}
                  >
                    {product.title}
                  </h1>

                  {/* Subtitle */}
                  <p
                    className="text-gray-500 mb-4 text-sm sm:text-base uppercase tracking-wide transition-opacity duration-500"
                    style={{
                      transitionDelay: mounted ? "380ms" : "0ms",
                      opacity: mounted ? 1 : 0,
                    }}
                  >
                    {product.subtitle}
                  </p>

                  {/* Description */}
                  <p
                    className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base md:text-lg transition-opacity duration-500"
                    style={{
                      transitionDelay: mounted ? "440ms" : "0ms",
                      opacity: mounted ? 1 : 0,
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Details */}
                  <p
                    className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base transition-opacity duration-500"
                    style={{
                      transitionDelay: mounted ? "500ms" : "0ms",
                      opacity: mounted ? 1 : 0,
                    }}
                  >
                    {product.details}
                  </p>

                  {/* Active Ingredient */}
                  <div
                    className="mb-4 transition-opacity duration-500"
                    style={{
                      transitionDelay: mounted ? "560ms" : "0ms",
                      opacity: mounted ? 1 : 0,
                    }}
                  >
                    <h3 className="font-semibold text-agkem-dark text-lg mb-2">
                      Ingrediente Activo
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {product.activeIngredient}
                    </p>
                  </div>

                  {/* Uses */}
                  <div
                    className="mb-4 transition-opacity duration-500"
                    style={{
                      transitionDelay: mounted ? "620ms" : "0ms",
                      opacity: mounted ? 1 : 0,
                    }}
                  >
                    <h3 className="font-semibold text-agkem-dark text-lg mb-2">
                      Usos
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                      {product.uses.map((use, idx) => (
                        <li key={idx}>{use}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Dosage */}
                  <div
                    className="mb-4 transition-opacity duration-500"
                    style={{
                      transitionDelay: mounted ? "680ms" : "0ms",
                      opacity: mounted ? 1 : 0,
                    }}
                  >
                    <h3 className="font-semibold text-agkem-dark text-lg mb-2">
                      Dosificación
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {product.dosage}
                    </p>
                  </div>

                  {/* Precautions */}
                  <div
                    className="mb-6 transition-opacity duration-500"
                    style={{
                      transitionDelay: mounted ? "740ms" : "0ms",
                      opacity: mounted ? 1 : 0,
                    }}
                  >
                    <h3 className="font-semibold text-agkem-dark text-lg mb-2">
                      Precauciones
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {product.precautions}
                    </p>
                  </div>

                  {/* Contact Button */}
                  <div
                    className="transition-opacity duration-500"
                    style={{
                      transitionDelay: mounted ? "800ms" : "0ms",
                      opacity: mounted ? 1 : 0,
                    }}
                  >
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center gap-2 bg-agkem-primary text-white px-6 py-3 rounded-lg hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-sm sm:text-base"
                    >
                      Consultar Disponibilidad
                    </Link>
                  </div>
                </div>
              </div>

              {/* PDF Documents Section */}
              {product.documents && product.documents.length > 0 && (
                <div
                  className="mt-8 pt-8 border-t border-gray-200 transition-opacity duration-500"
                  style={{
                    transitionDelay: mounted ? "860ms" : "0ms",
                    opacity: mounted ? 1 : 0,
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.documents.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-agkem-primary text-white px-6 py-3 rounded-lg hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-sm sm:text-base"
                      >
                        <FileText className="w-5 h-5 flex-shrink-0" />
                        <span className="truncate">{doc.name}</span>
                        <Download className="w-5 h-5 flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProductClient;
