import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Copyright from "@/components/layout/Copyright";
import { NavigationProvider } from "@/context/NavigationContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "AG KEM - Innovación para el campo",
  description: "AG KEM es una empresa mexicana de agroquímicos, ofreciendo soluciones innovadoras para el control de plagas y enfermedades en cultivos.",
  keywords: "agroquímicos, herbicidas, fungicidas, insecticidas, agricultura, México, AG KEM",
  authors: [{ name: "AG KEM" }],
  robots: "index, follow",
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
    <html lang="es" className="h-full">
      <body className="bg-agkem-bg h-full overflow-x-hidden">
        <NavigationProvider>
          <Header />
          <main className="h-screen pt-16 lg:pt-20 2xl:pt-28">
            {children}
          </main>
          <Copyright />
        </NavigationProvider>
      </body>
    </html>
  );
}