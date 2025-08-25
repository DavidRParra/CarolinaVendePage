'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiCash } from 'react-icons/hi';
import { FaBed, FaBath, FaBuilding, FaLocationArrow } from "react-icons/fa";

interface propiedadesVIP {
  ID: number;
  Nombre: string,
  Description: string,
  tipo: string,
  precio: number,
  ciudad: string,
  Habitaciones: string
  Bathrooms: string
  img: string
}

interface testimoniales {
  ID: number,
  Nombre: string,
  Opinion: string,
  Operacion: string,
  img: string
}


export default function Home() {

  const ciudades = 
    ["La Vega",
    "Santiago",
    "Puerto Plata",
    "Puntacana",
    "Santo Domingo",
    "Bavaro"];

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

  const print = () => {
    console.log("Buscando...")
  }
  
  return (
    <div>
      {/*Encabezado con el search*/}
      <div 
        className="top-0 left-0 right-0 z-[-1] h-[100vh] bg-cover bg-center  flex  flex-col gap-[3rem] items-center justify-center lg:justify-end" 
        style={{backgroundImage : `url('/bg_pueba.jpg')`}}
      >
        <div className="flex flex-col w-[50%] gap-[3rem]  items-center justify-center text-black text-[2rem] p-[2rem] lg:mb-[5%]">
          <div className="flex flex-col bg-[#d3bc93]/70 w-full rounded-4xl gap-5  items-center justify-center text-[2rem] pb-[1.2rem] ">
            <div className="flex flex-col text-[3rem] font-bold text-center">
              <h2>Encuentra la casa de tus sueños</h2>
              <p className="text-[1.5rem] font-semibold">Casas, departamento y demas en Bienes Raices en venta.</p>
            </div>

            <form action="" className="flex flex-col items-center justify-center w-full gap-4  lg:flex-row font-semibold">

              <div className="flex flex-row gap-2 ">
                <label htmlFor="city" className="hidden lg:block">Ciudad:</label>

                <select name="city" id="city" className="bg-[#75512f] p-1 rounded-lg">
                  {ciudades.map((ciudad) => (
                    <option key={ciudad} value={ciudad}>
                      {ciudad}
                    </option>
                  ))}

                </select>
              </div>

              <div className="flex flex-row gap-2">
                <label htmlFor="Type" className="hidden lg:block">Tipo de Propiedad:</label>

                <select name="Type" id="Type" className="bg-[#75512f] p-1 rounded-lg">

                  

                  {tipos.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}

                </select>
              </div>

              <button
                onClick={print}
                className="px-[1rem] bg-[#75512f] rounded-lg"
              >
                Buscar
              </button>

            </form>

          </div>

          <Link 
            className="flex items-center gap-2 text-black text-[1.8rem] lg:text-[3rem] link-hover-group
            relative
            font-semibold
            py-2
            transition-colors duration-300
            group
            mb-[-10rem]
            mt-[15rem]
            "
            href="#"
          >
                  <span className="flex items-center">
                    Ver Propiedades

                    <HiArrowRight 
                      className="
                        w-[3rem] h-[3rem]
                        transform
                        arrow-icon
                      "
                    />
                  </span>

                  <span 
                    className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        h-[2px]
                        bg-[#75512f]
                        transform
                        scale-x-0
                        group-hover:scale-x-100
                        transition-transform
                        duration-300
                        origin-center
                    "
                  />

                  
          </Link>

          <div className="flex flex-row gap-1 w-[165%] mt-[5rem] mb-[-5rem] items-end justify-end">
            <Link href="https://www.instagram.com/carolinavende/" target="_blank">
              <Image
                src="/instagram.png" 
                alt="Smith" 
                width={300} 
                height={300}
                className="rounded-lg w-[3rem]"
              
              />
            </Link>

            <Link href="https://www.facebook.com/carolinavende/" target="_blank">
              <Image
                src="/facebook.png" 
                alt="Smith" 
                width={300} 
                height={300}
                className="rounded-lg w-[3rem]"
              
              />
            </Link>

            <Link href="/" target="_blank">
              <Image
                src="/linkedin.png" 
                alt="Smith" 
                width={300} 
                height={300}
                className="rounded-lg w-[3rem]"
              
              />
            </Link>
          </div>
          
        </div>

      </div>
      {/*Final de encabezado con el Search*/}

      {/*Propiedades VIP*/}
      <main className="flex flex-col w-[80%] items-center mx-[auto]">

        <h2 className="text-[3rem] font-light my-[3vh] lg:my-[7vh]">
          Explora las mejores propiedades en venta.
        </h2>
        <div className=" flex flex-wrap justify-center items-center gap-y-3">
          {propiedades.map((propiedad) => (
            <div 
              key={propiedad.ID}
              className="w-full md:w-1/2 lg:w-1/3"
            >
              <Image 
                src={propiedad.img} 
                alt={propiedad.Nombre} 
                width={300} 
                height={300}
                className="w-[95%] rounded-lg"
              />
              <div className="lg:h-full">

                <div className="w-[95%] text-[1.4rem] h-[10vh]">
                  <h3
                    className="font-semibold text-center"
                  >
                    {propiedad.Nombre}
                  </h3>

                  <p>
                    {propiedad.Description}
                  </p>
                </div>

                <div className="flex flex-col w-[95%] px-[5%] text-[1.5rem]">
                  <div className="flex justify-evenly">
                    <p 
                      className="flex items-center gap-1">
                      <FaBuilding className="w-[1.5rem] h-[1.5rem]"/>
                      {propiedad.tipo}
                    </p>

                    <p 
                      className="flex items-center gap-1">
                      <FaLocationArrow className="w-[1.5rem] h-[1.5rem]"/>
                      {propiedad.ciudad}
                    </p>
                  </div>


                  <div className="flex justify-evenly">
                    <p 
                      className="flex items-center gap-1">
                      <HiCash className="w-[1.5rem] h-[1.5rem]"/>
                      {propiedad.precio}
                    </p>

                    <p 
                      className="flex items-center gap-1">
                      <FaBed className="w-[1.5rem] h-[1.5rem]"/>
                      {propiedad.Habitaciones}
                    </p>

                    <p 
                      className="flex items-center gap-1">
                      <FaBath className="w-[1.5rem] h-[1.5rem]"/>
                      {propiedad.Bathrooms}
                    </p>
                  </div>
                </div>
                <Link 
                  href="#" 
                  className="flex w-[95%] rounded-lg text-[1.2rem] text-white justify-center p-2 bg-[#75512f] hover:bg-[#5c3f25]"
                >
                  Ver Propiedad
                </Link>
              </div>

            </div>

          ))}
        </div>

      </main>
      {/*Final de Propiedades VIP*/}


      <section className="flex flex-col w-full items-center mx-[auto] px-[5%]">
        <h2 className="text-[3rem] font-light my-[3vh] lg:my-[7vh]">Lo que dicen nuestros clientes</h2>

          
          {testimoniales.map((testimonial) => (
            <div 
              key={testimonial.ID}
              className="flex text-[2.8rem] font-light w-[100%] items-center lg:h-[50rem]"
            >
              <div className="flex flex-col justify-between h-[80%] w-[70%]">
                <p>{testimonial.Opinion}</p>

                <div className="flex gap-[2vh] text-[2rem]">
                  <span>
                    <p>{testimonial.Nombre}</p>
                    <div className="h-[.3rem] w-[40%] bg-[#75512f]" />
                  </span>
                  <span className="text-[#75512f] font-semibold">{testimonial.Operacion}</span>
                </div>
              </div>

              <Image 
                src={testimonial.img} 
                alt="Smith" 
                width={300} 
                height={300}
                className="rounded-lg lg:w-[50rem]"
              />
            </div>
          ))}
        
      </section>
      <p className="flex items-center justify-center my-0 bg-[#75512f] text-[1.2rem] text-white h-[3rem] mt-[2rem]">
                &copy; 2025 Derechos reservados | DRTechGroup, SRL | Creado por DRTechGroup
            </p>
    </div>
  );
}
