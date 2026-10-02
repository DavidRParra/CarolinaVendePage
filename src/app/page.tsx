'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiCash } from 'react-icons/hi';
import { FaBed, FaBath, FaBuilding, FaLocationArrow } from "react-icons/fa";

interface propiedadesVIP {
  ID: number;
  Nombre: string;
  Description: string;
  tipo: string;
  precio: number;
  ciudad: string;
  Habitaciones: string;
  Bathrooms: string;
  img: string;
}

interface testimoniales {
  ID: number;
  Nombre: string;
  Opinion: string;
  Operacion: string;
  img: string;
}

export default function Home() {

  const ciudades = [
    "La Vega",
    "Santiago",
    "Puerto Plata",
    "Puntacana",
    "Santo Domingo",
    "Bavaro"
  ];

  const tipos = [
    "Casa",
    "Departamento",
    "Local",
    "Cabaña",
    "Penthhouse"
  ];

  const propiedades : propiedadesVIP[] = [
    {
        ID: 1,
        Nombre: "Casa con Piscina y Jardín",
        Description: "Magnífica residencia con amplia piscina y jardines, ideal para el esparcimiento familiar. Ubicada en una zona tranquila.",
        tipo: "Casa",
        precio: 350000,
        ciudad: "Santiago",
        Habitaciones: "4",
        Bathrooms: "4",
        img: "/anuncio1.jpg"
    },
    {
        ID: 2,
        Nombre: "Apartamento con Vista al Mar",
        Description: "Moderno y lujoso apartamento con balcón y vista panorámica al mar Caribe, en un exclusivo sector de Santo Domingo.",
        tipo: "Departamento",
        precio: 250000,
        ciudad: "Santo Domingo",
        Habitaciones: "3",
        Bathrooms: "3",
        img: "/anuncio2.jpg"
    },
    {
        ID: 3,
        Nombre: "Cabaña en la Montaña",
        Description: "Hermosa cabaña rústica en Jarabacoa, rodeada de naturaleza. Perfecta para escapar del calor y disfrutar del clima fresco.",
        tipo: "Cabaña",
        precio: 180000,
        ciudad: "Jarabacoa",
        Habitaciones: "2",
        Bathrooms: "2",
        img: "/anuncio3.jpg"
    },
    {
        ID: 4,
        Nombre: "Penthouse de Lujo",
        Description: "Exclusivo penthouse de dos niveles, con terraza privada y jacuzzi. Vistas espectaculares de la ciudad de La Vega.",
        tipo: "Penthhouse",
        precio: 450000,
        ciudad: "La Vega",
        Habitaciones: "4",
        Bathrooms: "5",
        img: "/anuncio4.jpg"
    },
    {
        ID: 5,
        Nombre: "Local Comercial Estratégico",
        Description: "Local comercial de 100m² en una avenida principal de Bavaro, con gran flujo de personas y vehículos, ideal para cualquier negocio.",
        tipo: "Local",
        precio: 150000,
        ciudad: "Bavaro",
        Habitaciones: "0",
        Bathrooms: "1",
        img: "/anuncio5.jpg"
    },
    {
        ID: 6,
        Nombre: "Villa en Punta Cana",
        Description: "Espectacular villa de un solo piso con acceso a un campo de golf y club de playa privado, a solo 5 minutos de la playa.",
        tipo: "Casa",
        precio: 500000,
        ciudad: "Puntacana",
        Habitaciones: "5",
        Bathrooms: "6",
        img: "/anuncio6.jpg"
    }
  ];

  const testimoniales: testimoniales[] = [
    {
      ID: 1,
      Nombre: "Ana Torres",
      Opinion: "Excelente servicio y atención personalizada. Encontraron la casa de mis sueños en tiempo récord y el proceso fue muy sencillo. Los recomiendo al 100%.",
      Operacion: "Comprador",
      img: "/smiths.jpg"
    },
    {
      ID: 2,
      Nombre: "Javier Mendoza",
      Opinion: "Tenía dudas sobre el valor de mi propiedad y su equipo me brindó una consulta muy detallada y profesional. Me ayudaron a tomar la mejor decisión.",
      Operacion: "Consulta",
      img: "/smiths.jpg"
    },
    {
      ID: 3,
      Nombre: "Sofía Vargas",
      Opinion: "El equipo de esta agencia hizo que la venta de mi apartamento fuera un proceso transparente y sin estrés. Siempre estuvieron disponibles para cualquier pregunta. ¡Muy agradecida!",
      Operacion: "Vendedor",
      img: "/smiths.jpg"
    },
    {
      ID: 4,
      Nombre: "Carlos Ruiz",
      Opinion: "Como inversor, busco oportunidades de alta rentabilidad. Su asesoría fue clave para encontrar un local comercial con un gran potencial de crecimiento. Un acierto total.",
      Operacion: "Inversor",
      img: "/smiths.jpg"
    }
  ];

  const print = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscando...");
  }
  
  return (
    <div className="overflow-x-hidden">
      {/* Encabezado con el search */}
      <div 
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 pt-28 pb-12" 
        style={{ backgroundImage: `url('/Background.jpg')` }}
      >
        <div className="flex flex-col w-full max-w-5xl gap-6 items-center justify-center text-black p-4 md:p-8">
          <div className="flex flex-col bg-[#d3bc93]/95 backdrop-blur-sm w-full rounded-3xl p-6 md:p-10 gap-6 items-center justify-center shadow-xl">
            <div className="flex flex-col text-center gap-2">
              <h2 className="text-3xl md:text-5xl font-bold">Encuentra la casa de tus sueños</h2>
              <p className="text-lg md:text-2xl font-medium text-gray-800">Casas, apartamentos y más en Bienes Raíces en venta.</p>
            </div>

            <form onSubmit={print} className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 font-semibold text-base md:text-lg">
              <div className="flex flex-col sm:flex-row items-center gap-2 w-full lg:w-auto">
                <label htmlFor="city" className="lg:block">Ciudad:</label>
                <select name="city" id="city" className="bg-[#75512f] text-white p-3 rounded-lg w-full sm:w-auto text-base">
                  {ciudades.map((ciudad) => (
                    <option key={ciudad} value={ciudad} className="bg-white text-black">
                      {ciudad}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 w-full lg:w-auto">
                <label htmlFor="Type" className="lg:block">Tipo:</label>
                <select name="Type" id="Type" className="bg-[#75512f] text-white p-3 rounded-lg w-full sm:w-auto text-base">
                  {tipos.map((tipo) => (
                    <option key={tipo} value={tipo} className="bg-white text-black">
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full lg:w-auto px-8 py-3 bg-[#75512f] text-white rounded-lg hover:bg-[#5c3f25] transition-colors text-base"
              >
                Buscar
              </button>
            </form>
          </div>

          <Link 
            className="flex items-center gap-2 text-black text-xl md:text-3xl font-bold py-2 transition-colors duration-300 group relative mt-4"
            href="#"
          >
            <span className="flex items-center gap-2">
              Ver Propiedades
              <HiArrowRight className="w-7 h-7 transform group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#75512f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </Link>
        </div>
      </div>
      {/* Final de encabezado con el Search */}

      {/* Propiedades VIP */}
      <main className="flex flex-col w-[90%] max-w-7xl items-center mx-auto my-16">
        <h2 className="text-3xl md:text-5xl font-light my-8 text-center">
          Explora las mejores propiedades en venta.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
          {propiedades.map((propiedad) => (
            <div 
              key={propiedad.ID}
              className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 w-full max-w-sm justify-between"
            >
              <div className="relative w-full h-60">
                <Image 
                  src={propiedad.img} 
                  alt={propiedad.Nombre} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col p-5 gap-4 flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-xl text-center mb-2 text-gray-900">
                    {propiedad.Nombre}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                    {propiedad.Description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 text-base text-gray-700 border-t pt-4">
                  <div className="flex justify-between">
                    <p className="flex items-center gap-2">
                      <FaBuilding className="w-5 h-5 text-[#75512f]"/>
                      {propiedad.tipo}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaLocationArrow className="w-5 h-5 text-[#75512f]"/>
                      {propiedad.ciudad}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="flex items-center gap-2 font-bold text-black text-lg">
                      <HiCash className="w-5 h-5 text-[#75512f]"/>
                      ${propiedad.precio.toLocaleString()}
                    </p>
                    <div className="flex gap-4">
                      <p className="flex items-center gap-1.5" title="Habitaciones">
                        <FaBed className="w-5 h-5 text-[#75512f]"/>
                        {propiedad.Habitaciones}
                      </p>
                      <p className="flex items-center gap-1.5" title="Baños">
                        <FaBath className="w-5 h-5 text-[#75512f]"/>
                        {propiedad.Bathrooms}
                      </p>
                    </div>
                  </div>
                </div>

                <Link 
                  href="#" 
                  className="w-full rounded-xl text-base font-bold text-white text-center py-3 bg-[#75512f] hover:bg-[#5c3f25] transition-colors mt-2"
                >
                  Ver Propiedad
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Final de Propiedades VIP */}

      {/* Testimoniales */}
      <section className="flex flex-col w-[90%] max-w-5xl items-center mx-auto my-20 px-4">
        <h2 className="text-3xl md:text-5xl font-light mb-12 text-center">Lo que dicen nuestros clientes</h2>

        <div className="flex flex-col gap-10 w-full">
          {testimoniales.map((testimonial) => (
            <div 
              key={testimonial.ID}
              className="flex flex-col lg:flex-row text-xl md:text-2xl font-light w-full items-center gap-8 bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-100"
            >
              <div className="flex flex-col justify-between w-full lg:w-[65%] gap-6">
                <p className="italic text-gray-700 leading-relaxed">"{testimonial.Opinion}"</p>

                <div className="flex flex-wrap items-center justify-between gap-4 text-lg mt-2">
                  <div>
                    <p className="font-bold text-black">{testimonial.Nombre}</p>
                    <div className="h-[3px] w-16 bg-[#75512f] mt-1.5" />
                  </div>
                  <span className="text-[#75512f] font-semibold bg-[#d3bc93]/30 px-4 py-1.5 rounded-full text-base">
                    {testimonial.Operacion}
                  </span>
                </div>
              </div>

              <div className="relative w-full lg:w-[35%] h-56 lg:h-48 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                <Image 
                  src={testimonial.img} 
                  alt={testimonial.Nombre} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-center bg-[#75512f] text-sm md:text-base text-white py-6 px-4 text-center">
        <p>&copy; 2025 Derechos reservados | DRTechGroup, SRL | Creado por DRTechGroup</p>
      </footer>
    </div>
  );
}