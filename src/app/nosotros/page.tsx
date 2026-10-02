import Image from "next/image";
import Link from "next/link";

function NosotrosPage(){
    return (
        <div>
            <div className="w-full min-h-screen flex justify-center items-center px-4 pt-28 md:pt-36 pb-24">
                <div className="flex flex-col items-center gap-8 md:gap-10 w-full max-w-5xl mx-auto text-center">

                    {/* Imagen principal de Carolina con un tamaño adecuado para laptop */}
                    <div className="relative w-52 h-52 md:w-80 md:h-80 flex-shrink-0">
                        <Image 
                            src={"/Carolina_Vende_Foto.png"} 
                            alt="Carolina Vende" 
                            fill
                            sizes="(max-width: 768px) 208px, 320px"
                            className="rounded-full border-[6px] border-black bg-gray-200 object-cover shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Títulos y descripción */}
                    <div className="flex flex-col gap-5 md:gap-6 w-full max-w-4xl">
                        <h2 className="font-black text-3xl md:text-5xl text-[#75512f] leading-tight px-2">
                            Inmobiliaria y constructora dedicada al desarrollo y venta de proyectos de bajo costo.
                        </h2>

                        <p className="font-medium text-base md:text-xl text-gray-700 leading-relaxed px-4 text-justify md:text-center">
                            Soy Milagros González, pero en el mundo inmobiliario me conocen como <b className="font-black text-red-500 text-xl md:text-2xl">&quot;Carolina Vende&quot;</b>. Soy dominicana y, durante más de 45 años, me he dedicado con pasión a las ventas y el asesoramiento en este sector. Mi misión es guiar a cada cliente, brindándoles la mejor orientación para que logren su inversión ideal o encuentren el hogar perfecto que han soñado. 
                        </p>
                    </div>

                    {/* Enlaces a publicaciones de Instagram */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-12 mt-4">
                        <Link 
                            href={"https://www.instagram.com/p/DNwUPO5Qmzu/"}
                            className="transition-transform hover:scale-105"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={"/Publicacion_1.png"}
                                alt="Publicacion IG 1"
                                width={280}
                                height={280}
                                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-xl border-4 border-[#75512f]"
                            />
                        </Link>

                        <Link 
                            href={"https://www.instagram.com/p/DNwT0i6QsO2/"}
                            className="transition-transform hover:scale-105"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={"/Publicacion_2.png"}
                                alt="Publicacion IG 2"
                                width={280}
                                height={280}
                                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-xl border-4 border-[#75512f]"
                            />
                        </Link>
                    </div>
                    
                </div>

                
            </div>

            <footer className="flex items-center justify-center bg-[#75512f] text-sm md:text-base text-white py-6 px-4 text-center">
                <p>&copy; 2025 Derechos reservados | DRTechGroup, SRL | Creado por DRTechGroup</p>
            </footer>
        </div>
    )
}

export default NosotrosPage;