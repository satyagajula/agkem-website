import IndividualProductClient from "./IndividualProductClient";

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

const allProducts: IndividualProduct[] = [
  // Fungicidas
  {
    slug: "lander250",
    category: "fungicidas",
    title: "LANDER 250",
    subtitle: "AZOXYSTROBIN 250",
    description: "Fungicida sistémico del grupo de las estrobilurinas para el control preventivo y curativo de enfermedades fungosas.",
    details: "LANDER 250 ofrece una excelente protección contra una amplia gama de enfermedades fungosas en diversos cultivos. Su acción sistémica garantiza una distribución uniforme en la planta.",
    image: "/images/lander250.jpg",
    activeIngredient: "Azoxystrobin 250 g/L",
    uses: ["Control de enfermedades foliares indicadas en etiqueta", "Aplicación en los cultivos autorizados."],
    dosage: "0.5 – 0.6 L/ha de acuerdo con el cultivo indicado en etiqueta.",
    precautions: "Usar equipo de protección personal. No aplicar en días ventosos.",
    documents: [
      {
        name: "Etiqueta LANDER 250 SC",
        url: "/documents/Etiqueta_LANDER.pdf",
      },
      {
        name: "Ficha Técnica LANDER",
        url: "/documents/Ficha_Tecnica_LANDER.pdf",
      },
      {
        name: "Hoja de Seguridad LANDER",
        url: "/documents/Hoja_de_seguridad_LANDER.pdf",
      },
    ],
  },
  {
    slug: "metalaxil240ce",
    category: "fungicidas",
    title: "METALAXIL 240 CE",
    subtitle: "Metalaxil 240 g/L",
    description: "Fungicida sistémico específico para el control de enfermedades causadas por oomicetos, en los cultivos y condiciones indicadas en la etiqueta autorizada.",
    details: "Su formulación concentrada emulsionable facilita la aplicación y permite una adecuada distribución cuando se utiliza conforme a las recomendaciones técnicas.",
    image: "/images/metalaxil240ce.jpg",
    activeIngredient: "Metalaxil 240 g/L",
    uses: ["Control de tizón tardío (Phytophthora infestans)", "Control de enfermedades causadas por Phytophthora spp. indicadas en etiqueta", "Aplicación en los cultivos autorizados"],
    dosage: "De acuerdo con el cultivo y enfermedad indicados en la etiqueta.",
    precautions: "Consulte la etiqueta antes de usar el producto.",
    documents: [
      {
        name: "Etiqueta METALAXIL 240 CE",
        url: "/documents/Etiqueta_METALAXIL_240_CE.pdf",
      },
      {
        name: "Ficha Técnica METALAXIL 240 CE",
        url: "/documents/Ficha_Tecnica_METALAXIL_240_CE.pdf",
      },
      {
        name: "Hoja de Seguridad METALAXIL 240 CE",
        url: "/documents/Hoja_de_seguridad_METALAXIL_240_CE.pdf",
      },
    ],
  },
  {
    slug: "slash250",
    category: "fungicidas",
    title: "SLASH 250",
    subtitle: "Piraclostrobina 250 g/L",
    description: "Fungicida sistémico translaminar del grupo de las estrobilurinas, de amplio espectro y acción preventiva y curativa, para el control de las enfermedades indicadas en la etiqueta autorizada.",
    details: "Su formulación concentrada emulsionable favorece una adecuada adherencia y resistencia al lavado cuando se aplica conforme a las recomendaciones técnicas.",
    image: "/images/slash250.jpg",
    activeIngredient: "Piraclostrobina 250 g/L",
    uses: ["Control de antracnosis (Colletotrichum spp.)", "Control de tizón temprano (Alternaria solani)", "Aplicación en los cultivos indicados en la etiqueta"],
    dosage: "De acuerdo con el cultivo y enfermedad indicados en la etiqueta autorizada.",
    precautions: "Consulte la etiqueta antes de usar el producto.",
    documents: [
      {
        name: "Etiqueta SLASH 250",
        url: "/documents/Etiqueta_SLASH_250.pdf",
      },
      {
        name: "Ficha Técnica SLASH 250",
        url: "/documents/Ficha_Tecnica_SLASH_250.pdf",
      },
      {
        name: "Hoja de Seguridad SLASH 250",
        url: "/documents/Hoja_de_seguridad_SLASH_250.pdf",
      },
    ],
  },
  {
    slug: "sanare",
    category: "fungicidas",
    title: "SANARE 600 WP",
    subtitle: "Tiabendazol 600 g/kg",
    description: "Fungicida sistémico para el control de enfermedades indicadas en los cultivos autorizados en la etiqueta oficial.",
    details: "Su acción permite proteger el cultivo cuando se aplica conforme a las recomendaciones técnicas establecidas.",
    image: "/images/sanare.jpg",
    activeIngredient: "Tiabendazol 600 g/kg",
    uses: ["Control de antracnosis (Colletotrichum gloeosporioides)", "Control de costra negra (Rhizoctonia solani)", "Aplicación en los cultivos indicados en la etiqueta"],
    dosage: "De acuerdo con el cultivo y enfermedad indicados en la etiqueta autorizada.",
    precautions: "Consulte la etiqueta antes de usar el producto.",
    documents: [
      {
        name: "Etiqueta SANARE 600 CE",
        url: "/documents/Etiqueta_SANARE.pdf",
      },
      {
        name: "Ficha Técnica SANARE",
        url: "/documents/Ficha_Tecnica_SANARE.pdf",
      },
      {
        name: "Hoja de Seguridad SANARE",
        url: "/documents/Hoja_de_seguridad_SANARE.pdf",
      },
    ],
  },

  // Insecticidas
  {
    slug: "abamectina18ce",
    category: "insecticidas",
    title: "ABAMECTINA 1.8 CE",
    subtitle: "Abamectina 1.8% p/v",
    description: "Insecticida-acaricida para el control de las plagas indicadas en los cultivos autorizados en la etiqueta oficial.",
    details: "Actúa por contacto e ingestión cuando se aplica conforme a las recomendaciones técnicas.",
    image: "/images/abamectina18ce.jpg",
    activeIngredient: "Abamectina 1.8% p/v",
    uses: ["Control de ácaros indicados en etiqueta", "Control de minadores de hoja indicados en etiqueta", "Control de las plagas autorizadas en los cultivos señalados"],
    dosage: "De acuerdo con el cultivo y plaga indicados en la etiqueta autorizada.",
    precautions: "Consulte la etiqueta antes de usar el producto.",
    documents: [
      {
        name: "Etiqueta ABAMECTINA 1.8 CE",
        url: "/documents/Etiqueta_ABAMECTINA_1.8_CE.pdf",
      },
      {
        name: "Ficha Técnica ABAMECTINA",
        url: "/documents/Ficha_Tecnica_ABAMECTINA.pdf",
      },
      {
        name: "Hoja de Seguridad ABAMECTINA",
        url: "/documents/Hoja_de_seguridad_ABAMECTINA.pdf",
      },
    ],
  },
  {
    slug: "kaprid200",
    category: "insecticidas",
    title: "KAPRID 200",
    subtitle: "Acetamiprid 200 g/L",
    description: "Insecticida neonicotinoide sistémico para el control de las plagas indicadas en los cultivos autorizados en la etiqueta oficial.",
    details: "Actúa de forma sistémica cuando se aplica conforme a las recomendaciones técnicas.",
    image: "/images/kaprid200.jpg",
    activeIngredient: "Acetamiprid 200 g/L",
    uses: ["Control de paratrioza (Bactericera cockerelli)", "Control de pulgón de la col (Brevicoryne brassicae)", "Aplicación en los cultivos indicados en etiqueta"],
    dosage: "De acuerdo con el cultivo y plaga indicados en la etiqueta autorizada.",
    precautions: "Consulte la etiqueta antes de usar el producto.",
    documents: [
      {
        name: "Etiqueta KAPRID 200",
        url: "/documents/Etiqueta_KAPRID_200.pdf",
      },
      {
        name: "Ficha Técnica KAPRID 200",
        url: "/documents/Ficha_Tecnica_KAPRID_200.pdf",
      },
      {
        name: "Hoja de Seguridad KAPRID 200",
        url: "/documents/Hoja_de_seguridad_KAPRID_200.pdf",
      },
    ],
  },
  {
    slug: "alfa18",
    category: "insecticidas",
    title: "ALFA 1.8",
    subtitle: "Benzoato de Emamectina 1.8 CE",
    description: "Insecticida para el control de las plagas indicadas en los cultivos autorizados en la etiqueta oficial.",
    details: "Actúa eficazmente cuando se aplica conforme a las recomendaciones técnicas.",
    image: "/images/alfa18.jpg",
    activeIngredient: "Benzoato de Emamectina 1.8% p/p",
    uses: ["Control de gusano cogollero (Spodoptera frugiperda)", "Control de gusano cogollero (Spodoptera exigua)", "Aplicación en los cultivos indicados en etiqueta"],
    dosage: "De acuerdo con el cultivo y plaga indicados en la etiqueta autorizada.",
    precautions: "Consulte la etiqueta antes de usar el producto.",
    documents: [
      {
        name: "Etiqueta ALFA 1.8",
        url: "/documents/Etiqueta_ALFA_1.8.pdf",
      },
      {
        name: "Ficha Técnica ALFA 1.8",
        url: "/documents/Ficha_Tecnica_ALFA_1.8.pdf",
      },
      {
        name: "Hoja de Seguridad ALFA 1.8",
        url: "/documents/Hoja_de_seguridad_ALFA_1.8.pdf",
      },
    ],
  },
  {
    slug: "koros",
    category: "insecticidas",
    title: "KOROS",
    subtitle: "Spinosad 480 SC",
    description: "Insecticida para el control de las plagas indicadas en los cultivos autorizados en la etiqueta oficial.",
    details: "Actúa eficazmente cuando se aplica conforme a las recomendaciones técnicas.",
    image: "/images/koros.jpg",
    activeIngredient: "Spinosad 480 g/L",
    uses: ["Control de trips indicados en etiqueta", "Control de minadores indicados en etiqueta", "Control de las plagas autorizadas en los cultivos señalados"],
    dosage: "De acuerdo con el cultivo y plaga indicados en la etiqueta autorizada.",
    precautions: "Consulte la etiqueta antes de usar el producto.",
    documents: [
      {
        name: "Etiqueta KOROS",
        url: "/documents/Etiqueta_KOROS.pdf",
      },
      {
        name: "Ficha Técnica KOROS",
        url: "/documents/Ficha_Tecnica_KOROS.pdf",
      },
      {
        name: "Hoja de Seguridad KOROS",
        url: "/documents/Hoja_de_seguridad_KOROS.pdf",
      },
    ],
  },

  // Herbicidas
  {
    slug: "glory90",
    category: "herbicidas",
    title: "GLORY 90",
    subtitle: "Atrazina 90% WG",
    description: "Herbicida para el control de malezas indicadas en los cultivos autorizados en la etiqueta oficial.",
    details: "Actúa en pre-emergencia con acción sistémica y efecto residual cuando se aplica conforme a las recomendaciones técnicas.",
    image: "/images/glory90.jpg",
    activeIngredient: "Atrazina 90% WG",
    uses: ["Control de malezas indicadas en etiqueta", "Aplicación en maíz, sorgo y otros cultivos autorizados", "Actividad pre-emergente con efecto residual"],
    dosage: "De acuerdo con el cultivo y maleza indicados en la etiqueta autorizada.",
    precautions: "Consulte la etiqueta antes de usar el producto.",
    documents: [
      {
        name: "Etiqueta GLORY 90",
        url: "/documents/Etiqueta_GLORY_90_1kg.pdf",
      },
      {
        name: "Ficha Técnica GLORY 90",
        url: "/documents/Ficha_Tecnica_GLORY_90.pdf",
      },
      {
        name: "Hoja de Seguridad GLORY 90",
        url: "/documents/Hoja_de_seguridad_GLORY_90.pdf",
      },
    ],
  },
  {
    slug: "kaima41",
    category: "herbicidas",
    title: "KAIMA 41",
    subtitle: "Glifosato 41% SL",
    description: "Herbicida sistémico no selectivo para aplicación en post-emergencia de malezas anuales y perennes.",
    details: "KAIMA 41 es absorbido por el follaje y translocado hacia las raíces y órganos de reserva, controlando gramíneas y malezas de hoja ancha indicadas en la etiqueta autorizada. No presenta actividad residual en el suelo cuando se aplica conforme a las recomendaciones técnicas.",
    image: "/images/kaima41.jpg",
    activeIngredient: "Glifosato 41% SL (sal isopropilamina)",
    uses: ["Control de malezas indicadas en etiqueta", "Aplicación en cultivos autorizados", "Manejo de malezas en sistemas agrícolas"],
    dosage: "De acuerdo con cultivo y maleza indicados en la etiqueta oficial.",
    precautions: "Producto no selectivo. Evitar deriva hacia cultivos sensibles. Consulte la etiqueta antes de usar el producto.",
    documents: [
      {
        name: "Etiqueta KAIMA 41",
        url: "/documents/Etiqueta_KAIMA_41.pdf",
      },
      {
        name: "Ficha Técnica KAIMA 41",
        url: "/documents/Ficha_Tecnica_KAIMA_41.pdf",
      },
      {
        name: "Hoja de Seguridad KAIMA 41",
        url: "/documents/Hoja_de_seguridad_KAIMA_41.pdf",
      },
    ],
  },
  {
    slug: "over18",
    category: "herbicidas",
    title: "OVER 18",
    subtitle: "Glufosinato de Amonio 200 g/L",
    description: "Herbicida no selectivo de contacto para el control de malezas indicadas en los cultivos autorizados en la etiqueta oficial.",
    details: "Actúa inhibiendo procesos metabólicos esenciales en la planta, proporcionando control visible rápido cuando se aplica conforme a las recomendaciones técnicas.",
    image: "/images/over18.jpg",
    activeIngredient: "Glufosinato de Amonio 200 g/L",
    uses: ["Control de malezas indicadas en etiqueta", "Aplicación en cultivos autorizados", "Manejo de malezas en sistemas agrícolas"],
    dosage: "De acuerdo con cultivo y maleza indicados en la etiqueta oficial.",
    precautions: "Aplicar conforme a las recomendaciones técnicas. Consulte la etiqueta antes de usar el producto.",
    documents: [
      {
        name: "Etiqueta OVER 18",
        url: "/documents/Etiqueta_OVER18.pdf",
      },
      {
        name: "Ficha Técnica OVER 18",
        url: "/documents/Ficha_Tecnica_OVER18.pdf",
      },
      {
        name: "Hoja de Seguridad OVER 18",
        url: "/documents/Hoja_de_seguridad_OVER18.pdf",
      },
    ],
  },
  {
    slug: "shao200",
    category: "herbicidas",
    title: "SHAO 200",
    subtitle: "Paraquat 200 g/L (como dicloruro) — Producto de uso restringido",
    description: "Herbicida de contacto no selectivo para el control de malezas indicadas en los cultivos autorizados en la etiqueta oficial.",
    details: "Actúa rápidamente sobre tejido verde, proporcionando control visible cuando se aplica conforme a las recomendaciones técnicas. No presenta actividad residual en el suelo.",
    image: "/images/shao200.jpg",
    activeIngredient: "Paraquat 200 g/L (como dicloruro)",
    uses: ["Control de malezas indicadas en la etiqueta", "Aplicación en cultivos autorizados", "Manejo dirigido de malezas en sistemas agrícolas"],
    dosage: "De acuerdo con cultivo y maleza indicados en la etiqueta oficial.",
    precautions: "Producto de uso restringido. Aplicar únicamente conforme a la etiqueta autorizada. Consulte siempre las medidas de seguridad antes de su manejo.",
    documents: [
      {
        name: "Etiqueta SHAO 200",
        url: "/documents/Etiqueta_SHAO_200.pdf",
      },
      {
        name: "Ficha Técnica SHAO 200",
        url: "/documents/Ficha_Tecnica_SHAO_200.pdf",
      },
      {
        name: "Hoja de Seguridad SHAO 200",
        url: "/documents/Hoja_de_seguridad_SHAO_200.pdf",
      },
    ],
  },
];

// map category -> background image path
const bgMap: Record<string, string> = {
  fungicidas: "/images/fungicidas_bg.png",
  insecticidas: "/images/insecticidas_bg.png",
  herbicidas: "/images/herbicidas_bg.png",
};

export async function generateStaticParams() {
  return allProducts.map((p) => ({
    slug: p.category,
    productSlug: p.slug,
  }));
}

export default function Page({
  params,
}: {
  params: { slug: string; productSlug: string };
}) {
  const { slug, productSlug } = params;
  const product = allProducts.find(
    (p) => p.category === slug && p.slug === productSlug
  );
  const backgroundImage = bgMap[slug] ?? "";

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <IndividualProductClient
      product={product}
      categorySlug={slug}
      backgroundImage={backgroundImage}
    />
  );
}
