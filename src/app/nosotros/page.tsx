import Image from "next/image";
import Link from "next/link";

function NosotrosPage(){
    return (
        <div className="flex justify-center items-center w-[70vw] h-[90vh] mx-auto gap-6">
            <div className="flex flex-col items-center gap-12 h-full justify-center text-[2rem] w-[90%] pt-[6rem]">

                <div 
                    className=""
                >
                    <Image 
                        src={"/Carolina_Vende_Foto.png"} 
                        alt="IG" 
                        width={300} 
                        height={300}
                        className="rounded-full border-[.2rem] border-black bg-gray-200"
                    />
                </div>

                <div className="flex flex-col gap-16">
                    <h2 
                        className="font-black text-center text-5xl text-[#75512f]"
                    >
                        Inmobiliaria y constructora dedicada al desarrollo y venta de proyecto de bajo costo.
                    </h2>

                    <p className="font-bold">
                        Soy Milagros González, pero en el mundo inmobiliario me conocen como <b className="font-black text-[#55381d] text-5xl">&quot;Carolina Vende&quot;</b>. Soy dominicana y, durante más de 45 años, me he dedicado con pasión a las ventas y el asesoramiento en este sector. Mi misión es guiar a cada cliente, brindándoles la mejor orientación para que logren su inversión ideal o encuentren el hogar perfecto que han soñado. 
                    </p>
                </div>

                <div className="flex gap-[6rem]">
                    <Link 
                        href={"https://www.instagram.com/p/DNwUPO5Qmzu/"}
                    >

                        <Image
                            src={"/Publicacion_1.png"}
                            alt="Publicacion IG 1"
                            width={200}
                            height={200}
                            className="rounded-full w-[10rem] h-[10rem]"
                        />

                    </Link>

                    <Link 
                        href={"https://www.instagram.com/p/DNwT0i6QsO2/"}
                    >

                        <Image
                            src={"/Publicacion_2.png"}
                            alt="Publicacion IG 2"
                            width={200}
                            height={200}
                            className="rounded-full w-[10rem] h-[10rem]"
                        />

                    </Link>
                </div>
                
                
            </div>

        </div>
    )
}

export default NosotrosPage;