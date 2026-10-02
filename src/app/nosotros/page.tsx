import Image from "next/image";
import Link from "next/link";

function NosotrosPage(){
    return (
        <div className="w-full min-h-screen flex justify-center items-center px-4 py-16 md:py-24">
            <div className="flex flex-col items-center gap-10 md:gap-14 w-full max-w-5xl mx-auto text-center">

                {/* Imagen principal de Carolina Vende más grande */}
                <div className="relative w-56 h-56 md:w-150 md:h-150 flex-shrink-0">
                    <Image 
                        src={"/Carolina_Vende_Foto.png"} 
                        alt="Carolina Vende" 
                        fill
                        sizes="(max-width: 768px) 224px, 320px"
                        className="rounded-full border-[6px] border-black bg-gray-200 object-cover shadow-2xl"
                        priority
                    />
                </div>

                {/* Títulos y descripción */}
                <div className="flex flex-col gap-6 md:gap-8 w-full max-w-4xl">
                    <h2 className="font-black text-3xl md:text-5xl text-[#75512f] leading-tight px-2">
                        Inmobiliaria y constructora dedicada al desarrollo y venta de proyectos de bajo costo.
                    </h2>

                    <p className="font-medium text-lg md:text-2xl text-gray-700 leading-relaxed px-4 text-justify md:text-center">
                        Soy Milagros González, pero en el mundo inmobiliario me conocen como <b className="font-black text-red-500 text-2xl md:text-3xl">&quot;Carolina Vende&quot;</b>. Soy dominicana y, durante más de 45 años, me he dedicado con pasión a las ventas y el asesoramiento en este sector. Mi misión es guiar a cada cliente, brindándoles la mejor orientación para que logren su inversión ideal o encuentren el hogar perfecto que han soñado. 
                    </p>
                </div>

                {/* Enlaces a publicaciones de Instagram con imágenes mucho más grandes */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 mt-6">
                    <Link 
                        href={"https://www.instagram.com/p/DNwUPO5Qmzu/"}
                        className="transition-transform hover:scale-105"
                    >
                        <Image
                            src={"/Publicacion_1.png"}
                            alt="Publicacion IG 1"
                            width={320}
                            height={320}
                            className="rounded-full w-52 h-52 md:w-72 md:h-72 object-cover shadow-xl border-4 border-[#75512f]"
                        />
                    </Link>

                    <Link 
                        href={"https://www.instagram.com/p/DNwT0i6QsO2/"}
                        className="transition-transform hover:scale-105"
                    >
                        <Image
                            src={"/Publicacion_2.png"}
                            alt="Publicacion IG 2"
                            width={320}
                            height={320}
                            className="rounded-full w-52 h-52 md:w-72 md:h-72 object-cover shadow-xl border-4 border-[#75512f]"
                        />
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default NosotrosPage;