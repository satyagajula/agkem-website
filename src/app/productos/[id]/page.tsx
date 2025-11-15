import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
      image: '/images/Agkem_product1.png',
      description: 'Opciones para la prevención y control de enfermedades fungosas, con perfiles preventivos/curativos y protección residual.',
      details: 'Nuestros fungicidas ofrecen soluciones avanzadas para el control de enfermedades en cultivos. Con formulaciones innovadoras que combinan acción preventiva y curativa, garantizan una protección residual efectiva contra hongos patógenos.'
    },
    {
      id: '2',
      name: 'Insecticidas',
      image: '/images/Agkem_product2.png',
      description: 'Alternativas para el manejo de insectos plaga, con diferentes modos de acción y estrategias de rotación para minimizar resistencia.',
      details: 'Nuestra línea de insecticidas proporciona control efectivo contra plagas agrícolas. Utilizando diferentes modos de acción, facilitan la rotación de productos para prevenir el desarrollo de resistencia en poblaciones de insectos.'
    },
    {
      id: '3',
      name: 'Herbicidas',
      image: '/images/Agkem_product3.png',
      description: 'Soluciones para control de malezas de hoja ancha y gramíneas, con opciones selectivas y no selectivas según cultivo y momento de aplicación.',
      details: 'Ofrecemos herbicidas selectivos y no selectivos para el control eficiente de malezas. Nuestras soluciones se adaptan a diferentes cultivos y momentos de aplicación, maximizando la eficacia y minimizando el impacto ambiental.'
    }
  ];

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="text-center max-w-md">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Producto no encontrado
          </h1>
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 bg-agkem-primary text-white px-6 py-3 rounded-lg hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 touch-manipulation min-h-[44px]"
            data-testid="back-to-products-button"
          >
            <ArrowLeft size={20} />
            Volver a Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 sm:py-10 md:py-12 lg:py-16 pb-24 sm:pb-28 md:pb-32">
      <div className="container-custom">
        
        {/* Back button */}
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 text-agkem-dark hover:text-agkem-primary transition-colors mb-6 sm:mb-8 touch-manipulation min-h-[44px] group"
          data-testid="back-button"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm sm:text-base font-medium">Volver a Productos</span>
        </Link>

        {/* Product detail card */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Image section */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 bg-gray-50 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
            
            {/* Content section */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <h1 
                className="font-bold mb-4 text-agkem-dark
                           text-2xl
                           sm:text-3xl sm:mb-5
                           md:text-4xl md:mb-6
                           lg:text-4xl
                           xl:text-5xl"
              >
                {product.name}
              </h1>
              
              <p 
                className="text-gray-700 mb-4 leading-relaxed
                           text-sm
                           sm:text-base sm:mb-5
                           md:text-lg md:mb-6
                           lg:mb-6"
              >
                {product.description}
              </p>
              
              <p 
                className="text-gray-600 mb-6 leading-relaxed
                           text-sm
                           sm:text-base sm:mb-8
                           md:text-lg md:mb-10
                           lg:mb-10"
              >
                {product.details}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center gap-2 bg-agkem-primary text-white px-6 py-3 rounded-lg hover:bg-agkem-accent transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation min-h-[44px] font-semibold"
                  data-testid="back-to-products-cta"
                >
                  <ArrowLeft size={20} />
                  Ver Todos los Productos
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-white text-agkem-dark border-2 border-agkem-primary px-6 py-3 rounded-lg hover:bg-agkem-primary hover:text-white transition-all duration-300 shadow-md touch-manipulation min-h-[44px] font-semibold"
                  data-testid="contact-cta"
                >
                  Contactar
                </Link>
              </div>
            </div>
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