'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const ContactSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <section
  className="w-full overflow-x-hidden overflow-y-hidden"
  style={{
    height: "var(--safe-vh)",
    maxHeight: "var(--safe-vh)",
    display: "flex",
    flexDirection: "column",
  }}
>
      <div className="flex flex-col lg:flex-row flex-1 min-h-0 overflow-hidden">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/3 flex items-center justify-center p-4 ">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:max-w-[325px]">
            <Image
              src="/images/Agkem_thanks.png"
              alt="Contact Background"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT CONTENT with iOS FIX */}
        <div className="ios-flex-fix w-full lg:w-2/3 flex flex-col flex-1 min-h-0 px-2 mt-4" style={{ height: "calc(var(--safe-vh) * 0.80)" }}>
          {/* HEADER */}
          <div>
            <h2
              className={`font-bold uppercase text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-3xl mb-1.5 transition-opacity duration-500 ${
                isMounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              CONTACTO
            </h2>

            <p
              className={`text-gray-700 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base mb-2 transition-opacity duration-700 delay-200 ${
                isMounted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Para consultas comerciales o técnicas, contáctanos directamente.
            </p>
          </div>

          {/* CONTENT WRAPPER */}
          <div className="flex flex-col gap-2 min-h-0 flex-1">

            {/* ROW 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 flex-1">
              <div className="bg-[#ecfde9] p-3 rounded-lg flex flex-col justify-center">
                <h3 className="font-bold text-center text-sm sm:text-base mb-1.5">
                  Dirección Comercial
                </h3>
                <div className="text-center text-xs sm:text-sm space-y-0.5">
                  <p><strong>Contacto:</strong> Sergio Moraila</p>
                  <p><strong>WhatsApp:</strong> +52 33 2258 4777</p>
                  <p><strong>Email:</strong> sergio.moraila@ag-kem.com</p>
                </div>
              </div>

              <div className="bg-[#ecfde9] p-3 rounded-lg flex flex-col justify-center">
                <h3 className="font-bold text-center text-sm sm:text-base mb-1.5">
                  Noroeste
                </h3>
                <div className="text-center text-xs sm:text-sm space-y-0.5">
                  <p><strong>Contacto:</strong> Mario Ballesteros</p>
                  <p><strong>WhatsApp:</strong> +52 64 420 2414</p>
                  <p><strong>Email:</strong> mariobamx@yahoo.com.mx</p>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="bg-[#ecfde9] p-3 rounded-lg flex flex-col justify-center flex-1">
              <h3 className="font-bold text-center text-sm sm:text-base mb-1.5">
                Altiplano y Sureste
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 pt-2 text-center text-xs sm:text-sm">
                <div className="space-y-0.5">
                  <p><strong>Contacto:</strong> Cicerón Maza</p>
                  <p><strong>WhatsApp:</strong> +52 96 1233 4597</p>
                  <p><strong>Email:</strong> ciceron.maza@ag-kem.com</p>
                </div>
                <div className="space-y-0.5">
                  <p><strong>Contacto:</strong> Omar Mora</p>
                  <p><strong>WhatsApp:</strong> +52 249 101 0701</p>
                  <p><strong>Email:</strong> ome_agronomo46@hotmail.com</p>
                </div>
              </div>
            </div>

            {/* ROW 3 WITH MAP */}
            <div className="bg-[#ecfde9] p-3 rounded-lg flex flex-col md:flex-row gap-3 flex-1">

              <div className="flex-1 flex flex-col justify-center text-xs sm:text-sm space-y-0.5">
                <h3 className="font-bold text-sm sm:text-base mb-1.5 text-center md:text-left">
                  UBICACIÓN CORPORATIVA
                </h3>
                <p><strong>Contacto:</strong> Cris Villagrana</p>
                <p><strong>WhatsApp:</strong> +52-3318508512</p>
                <p><strong>Email:</strong> cris.v@ag-kem.com</p>
                <p><strong>Dirección:</strong> Calle Asunción #1653, Guadalajara</p>
                <p><strong>Horario:</strong> Lunes a Viernes, 9:00–18:00</p>
              </div>

              <div className="flex-1 min-h-[120px] flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59816.82386190931!2d-103.401253!3d20.659698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad0b21a43f35%3A0xdda1fcfaf71b3c2e!2sGuadalajara%2C%20Jalisco!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  className="rounded-lg border border-gray-300 shadow-sm"
                  loading="lazy"
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
