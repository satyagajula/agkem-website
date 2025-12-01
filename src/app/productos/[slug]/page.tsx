import ProductDetailClient from "./ProductDetailClient";

interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  description: string;
  details: string;
}

const products: Product[] = [
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

// generateStaticParams must live in a server component (page.tsx)
export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const backgroundImage = bgMap[slug] ?? "";
  // render the client component and pass the slug
  return <ProductDetailClient slug={params.slug} products={products} backgroundImage={backgroundImage} />;
}
