import Image from 'next/image';
import Link from 'next/link';

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetail = ({ params }: ProductDetailProps) => {
  const id = params.id;

  const products = [
    {
      id: '1',
      name: 'Fungicidas',
      image: '/images/Agkem_productname1.png',
      description: 'Opciones para la prevención y control de enfermedades fungosas, con perfiles preventivos/curativos y protección residual.',
      details: 'Nuestros fungicidas ofrecen soluciones avanzadas para el control de enfermedades en cultivos. Con formulaciones innovadoras que combinan acción preventiva y curativa, garantizan una protección residual efectiva contra hongos patógenos.'
    },
    {
      id: '2',
      name: 'Insecticidas',
      image: '/images/Agkem_productname2.png',
      description: 'Alternativas para el manejo de insectos plaga, con diferentes modos de acción y estrategias de rotación para minimizar resistencia.',
      details: 'Nuestra línea de insecticidas proporciona control efectivo contra plagas agrícolas. Utilizando diferentes modos de acción, facilitan la rotación de productos para prevenir el desarrollo de resistencia en poblaciones de insectos.'
    },
    {
      id: '3',
      name: 'Herbicidas',
      image: '/images/Agkem_productname3.png',
      description: 'Soluciones para control de malezas de hoja ancha y gramíneas, con opciones selectivas y no selectivas según cultivo y momento de aplicación.',
      details: 'Ofrecemos herbicidas selectivos y no selectivos para el control eficiente de malezas. Nuestras soluciones se adaptan a diferentes cultivos y momentos de aplicación, maximizando la eficacia y minimizando el impacto ambiental.'
    }
  ];

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Producto no encontrado</h1>
          <Link
            href="/productos"
            className="bg-agkem-primary text-white px-6 py-2 rounded-lg hover:bg-agkem-primary/80 transition-colors"
          >
            Volver a Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-700 mb-6">{product.details}</p>
            <Link
              href="/productos"
              className="bg-agkem-primary text-white px-6 py-2 rounded-lg hover:bg-agkem-primary/80 transition-colors self-start inline-block"
            >
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}
