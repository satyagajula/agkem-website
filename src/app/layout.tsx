import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Copyright from "@/components/layout/Copyright";
import { NavigationProvider } from "@/context/NavigationContext";

export const metadata: Metadata = {
  title: "AG KEM - Innovación para el campo",
  description: "AG KEM es una empresa mexicana de agroquímicos, ofreciendo soluciones innovadoras para el control de plagas y enfermedades en cultivos.",
  keywords: "agroquímicos, herbicidas, fungicidas, insecticidas, agricultura, México, AG KEM",
  authors: [{ name: "AG KEM" }],
  robots: "index, follow",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/images/Agkem_logoNoBG.png",
  },
  openGraph: {
    title: "AG KEM - Innovación para el campo",
    description: "Soluciones agroquímicos de calidad para el campo mexicano",
    type: "website",
    locale: "es_MX",
    siteName: "AG KEM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-agkem-bg relative min-h-screen overflow-hidden">
        <NavigationProvider>
          <Header />
          <main className="pt-16 lg:pt-20 min-h-screen">
            {children}
          </main>
          <Copyright />
        </NavigationProvider>
      </body>
    </html>
  );
}
