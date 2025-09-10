import {FaArrowRight} from "react-icons/fa"
import ScaleIn from "@/components/ScaleIn";

function CitasPage() {
    return (
        <ScaleIn>
            <div className="flex flex-col flex-grow items-center gap-10 justify-center p-4 text-[2rem] h-[80vh]">
                <h2 className="text-[5rem] flex font-bold text-[#75512f]">
                    Vamos a personalizar tus opciones de cita
                </h2>
                <p className="font-bold">
                    Solo unos pocos detalles rápidos para que podamos confirmar tu información y mostrar lo que está disponible en nuestra oficina más cercanas
                </p>

                
                <form action="" className="grid grid-cols-2 gap-6 w-[70%] border font-bold text-[#75512f] border-[#75512f] p-5 rounded-lg">

                    <div className="flex flex-col">
                        <label htmlFor="nombre">Nombre*</label>
                        <input required type="text" placeholder="María" className="rounded-full border px-4 text-black"/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="nombre">Apellido*</label>
                        <input required type="text" placeholder="Rosario" className="rounded-full border px-4 text-black"/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="nombre">Telefono*</label>
                        <input required type="number" placeholder="8096760000" className="rounded-full border px-4 text-black"/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="nombre">Email*</label>
                        <input required type="text" placeholder="ejemplo@ejemplo.com" className="rounded-full border px-4 text-black"/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="nombre">Fecha de la cita*</label>
                        <input required type="datetime-local" className="rounded-full border px-4 text-black"/>
                    </div>

                    <div className="flex items-end text-white">
                        <button 
                            className="
                                flex items-center justify-between 
                                w-full 
                                border border-transparent rounded-full 
                                bg-[#75512f] py-1 px-4 cursor-pointer 
                                hover:text-[#75512f] hover:border-[#75512f] hover:bg-white"
                            >
                            Confirmar cita
                            <FaArrowRight className="border rounded-full p-1"/>
                        </button>
                    </div>

                </form>



            </div>
        </ScaleIn>
    );
}

export default CitasPage;