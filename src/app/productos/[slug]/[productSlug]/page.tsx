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
    image: "/images/lander250.png",
    activeIngredient: "Azoxystrobin 250 g/L",
    uses: ["Control de mildiu", "Prevención de roya", "Protección contra mancha foliar"],
    dosage: "0.5-1.0 L/ha según cultivo y enfermedad",
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
    subtitle: "METALAXIL 240 CE",
    description: "Fungicida sistémico específico para el control de enfermedades causadas por Oomicetos.",
    details: "METALAXIL 240 CE proporciona control efectivo de mildiu y otras enfermedades causadas por Oomicetos. Su formulación concentrada emulsionable facilita la aplicación.",
    image: "/images/metalaxil240ce.png",
    activeIngredient: "Metalaxil 240 g/L",
    uses: ["Control de mildiu", "Prevención de Phytophthora", "Protección de raíces"],
    dosage: "1.0-2.0 L/ha según cultivo",
    precautions: "Aplicar preventivamente para mejores resultados.",
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
    subtitle: "PIRACLOSTROBIN 250",
    description: "Fungicida del grupo de las estrobilurinas con acción preventiva y curativa.",
    details: "SLASH 250 ofrece protección de amplio espectro contra enfermedades fungosas. Su formulación avanzada garantiza una excelente adherencia y resistencia al lavado.",
    image: "/images/products/slash250.png",
    activeIngredient: "Piraclostrobin 250 g/L",
    uses: ["Control de roya", "Mancha foliar", "Antracnosis"],
    dosage: "0.4-0.8 L/ha",
    precautions: "Rotar con fungicidas de diferentes grupos químicos.",
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
    title: "SANARE",
    subtitle: "TIABENDAZOL 600",
    description: "Fungicida sistémico para tratamiento de semillas y control de enfermedades de suelo.",
    details: "SANARE proporciona protección efectiva contra enfermedades de semilla y suelo. Su acción sistémica protege las plántulas durante las etapas críticas de desarrollo.",
    image: "/images/sanare.png",
    activeIngredient: "Tiabendazol 600 g/L",
    uses: ["Tratamiento de semillas", "Control de fusarium", "Protección de plántulas"],
    dosage: "100-200 mL por 100 kg de semilla",
    precautions: "Aplicar solo a semillas destinadas a siembra.",
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
    subtitle: "ABAMECTINA 1.8 CE",
    description: "Insecticida-acaricida de origen biológico con acción de contacto e ingestión.",
    details: "ABAMECTINA 1.8 CE es efectivo contra ácaros e insectos minadores. Su modo de acción único lo hace ideal para programas de manejo integrado de plagas.",
    image: "/images/abamectina18ce.png",
    activeIngredient: "Abamectina 1.8% p/v",
    uses: ["Control de ácaros", "Minadores de hojas", "Trips"],
    dosage: "0.5-1.0 L/ha",
    precautions: "Altamente tóxico para peces. No contaminar fuentes de agua.",
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
    slug: "aprid200",
    category: "insecticidas",
    title: "APRID 200",
    subtitle: "ACETAMIPRID 200",
    description: "Insecticida neonicotinoide sistémico para el control de insectos chupadores.",
    details: "APRID 200 ofrece control efectivo de pulgones, mosca blanca y otros insectos chupadores. Su acción sistémica garantiza protección prolongada.",
    image: "/images/products/aprid200.png",
    activeIngredient: "Acetamiprid 200 g/L",
    uses: ["Control de pulgones", "Mosca blanca", "Trips"],
    dosage: "0.3-0.5 L/ha",
    precautions: "Tóxico para abejas. No aplicar durante floración.",
    documents: [
      {
        name: "Etiqueta APRID 200",
        url: "/documents/Etiqueta_APRID_200.pdf",
      },
      {
        name: "Ficha Técnica APRID 200",
        url: "/documents/Ficha_Tecnica_APRID_200.pdf",
      },
      {
        name: "Hoja de Seguridad APRID 200",
        url: "/documents/Hoja_de_seguridad_APRID_200.pdf",
      },
    ],
  },
  {
    slug: "alfa18",
    category: "insecticidas",
    title: "ALFA 1.8",
    subtitle: "BENZOATO DE EMAMECTINA 1.8",
    description: "Insecticida de amplio espectro especialmente efectivo contra lepidópteros.",
    details: "ALFA 1.8 proporciona control excepcional de larvas de lepidópteros. Su baja dosis de aplicación lo hace económico y ambientalmente favorable.",
    image: "/images/products/alfa18.png",
    activeIngredient: "Benzoato de Emamectina 1.8% p/p",
    uses: ["Control de gusanos", "Larvas de lepidópteros", "Cogollero"],
    dosage: "200-400 g/ha",
    precautions: "Muy tóxico para organismos acuáticos.",
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
    subtitle: "SPINOSAD 480",
    description: "Insecticida de origen biológico con excelente perfil toxicológico.",
    details: "KOROS combina eficacia contra plagas con un perfil favorable para enemigos naturales. Ideal para agricultura orgánica y manejo integrado de plagas.",
    image: "/images/koros.png",
    activeIngredient: "Spinosad 480 g/L",
    uses: ["Control de trips", "Minadores", "Larvas de lepidópteros"],
    dosage: "0.15-0.3 L/ha",
    precautions: "Selectivo a enemigos naturales. Respetar intervalos de aplicación.",
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
    subtitle: "ATRAZINA 90",
    description: "Herbicida selectivo pre y post-emergente para el control de malezas de hoja ancha.",
    details: "GLORY 90 ofrece control residual de malezas en cultivos de maíz y sorgo. Su acción sistémica controla malezas establecidas y previene nuevas emergencias.",
    image: "/images/products/glory90.png",
    activeIngredient: "Atrazina 90% WG",
    uses: ["Control de malezas en maíz", "Malezas de hoja ancha", "Control residual"],
    dosage: "1.5-3.0 kg/ha",
    precautions: "Usar solo en cultivos tolerantes. Riesgo de contaminación de agua.",
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
    subtitle: "GLIFOSATO 41%",
    description: "Herbicida no selectivo sistémico de amplio espectro para control total de malezas.",
    details: "KAIMA 41 es absorbido por el follaje y translocado a todo el sistema de la planta. Controla malezas anuales y perennes, gramíneas y hoja ancha.",
    image: "/images/kaima41.png",
    activeIngredient: "Glifosato 41% SL (sal de isopropilamina)",
    uses: ["Control total de malezas", "Barbechos químicos", "Limpieza de terrenos"],
    dosage: "2.0-4.0 L/ha según tipo de maleza",
    precautions: "No selectivo. Proteger cultivos de deriva.",
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
    subtitle: "GLUFOSINATO DE AMONIO 200",
    description: "Herbicida de contacto no selectivo con rápida acción sobre malezas.",
    details: "OVER 18 actúa por contacto inhibiendo la síntesis de aminoácidos. Proporciona control rápido visible de malezas con mínima translocación.",
    image: "/images/products/over18.png",
    activeIngredient: "Glufosinato de Amonio 200 g/L",
    uses: ["Desecación de malezas", "Control en cultivos tolerantes", "Barbechos"],
    dosage: "2.0-4.0 L/ha",
    precautions: "Mejor control con malezas pequeñas. Usar surfactante.",
    documents: [
      {
        name: "Etiqueta OVER 18",
        url: "/documents/Etiqueta_OVER18_1000-200_lts.pdf",
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
    subtitle: "PARAQUAT 200",
    description: "Herbicida de contacto no selectivo de acción rápida.",
    details: "SHAO 200 proporciona desecación rápida de follaje verde. Inactivado al contacto con el suelo, permitiendo siembra inmediata.",
    image: "/images/shao200.png",
    activeIngredient: "Paraquat 200 g/L (como dicloruro)",
    uses: ["Desecación rápida", "Control de malezas establecidas", "Pre-siembra"],
    dosage: "1.5-3.0 L/ha",
    precautions: "ALTAMENTE TÓXICO. Usar equipo de protección completo. Producto restringido.",
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
