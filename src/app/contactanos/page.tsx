'use client';
import { FaArrowRight } from "react-icons/fa";
import ScaleIn from "@/components/ScaleIn";
import { useState } from "react";

function CitasPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        appointmentDate: "",
        type: "",
        message: ""
    });

    // Estados para el modal de respuesta
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/apis/guardar_formulario", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Error al guardar en la base de datos");
            }

            // Éxito: se guardó correctamente para Carolina Vende (ID 3)
            setModalMessage("¡Cita guardada correctamente! Nuestra oficina se pondrá en contacto contigo pronto.");
            setIsSuccess(true);
            setIsModalOpen(true);

            // Limpiar formulario
            setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                appointmentDate: "",
                type: "",
                message: ""
            });

        } catch (error: any) {
            // Error
            setModalMessage("Error al enviar el formulario. Por favor, intenta de nuevo.\n" + (error.message || ""));
            setIsSuccess(false);
            setIsModalOpen(true);
        }
    };

    const formatPhoneNumber = (value: string) => {
        // Elimina todo lo que no sea número
        const numbers = value.replace(/\D/g, "");
        
        // Limita a 10 dígitos máximo
        const trimmed = numbers.slice(0, 10);

        // Formatea según la cantidad de dígitos ingresados
        if (trimmed.length < 4) return trimmed;
        if (trimmed.length < 7) return `(${trimmed.slice(0, 3)})-${trimmed.slice(3)}`;
        return `(${trimmed.slice(0, 3)})-${trimmed.slice(3, 6)}-${trimmed.slice(6)}`;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhone = formatPhoneNumber(e.target.value);
        setFormData({ ...formData, phone: formattedPhone });
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <ScaleIn>
            {/* Aumentamos el padding superior a pt-52 / pt-64 para superar por completo la altura del NavBar flotante */}
            <div className="w-full min-h-screen flex flex-col items-center justify-start px-4 pt-52 md:pt-64 pb-16">
                
                {/* Cabecera de la sección */}
                <div className="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto mb-10 px-2">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#75512f] leading-tight">
                        Vamos a personalizar tus opciones de cita
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-gray-700">
                        Solo unos pocos detalles rápidos para que podamos confirmar tu información y mostrar lo que está disponible en nuestra oficina más cercana.
                    </p>
                </div>

                {/* Formulario */}
                <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-6 w-full max-w-6xl border-2 font-bold text-[#75512f] border-[#75512f] bg-white p-6 md:p-10 rounded-2xl shadow-lg text-xl md:text-2xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="flex flex-col gap-2">
                            <label htmlFor="firstName">Nombre*</label>
                            <input 
                                required 
                                type="text" 
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="María" 
                                className="rounded-full border border-gray-300 py-2 px-4 text-black font-normal focus:outline-none focus:border-[#75512f]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="lastName">Apellido*</label>
                            <input 
                                required 
                                type="text" 
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Rosario" 
                                className="rounded-full border border-gray-300 py-2 px-4 text-black font-normal focus:outline-none focus:border-[#75512f]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone">Teléfono*</label>
                            <input 
                                required 
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handlePhoneChange} 
                                placeholder="(809)-676-0000" 
                                maxLength={14}
                                className="rounded-full border border-gray-300 py-2 px-4 text-black font-normal focus:outline-none focus:border-[#75512f]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email*</label>
                            <input 
                                required 
                                type="email" 
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="ejemplo@ejemplo.com" 
                                className="rounded-full border border-gray-300 py-2 px-4 text-black font-normal focus:outline-none focus:border-[#75512f]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="tipo-consulta">Tipo de cita*</label>
                            <select 
                                name="type" 
                                value={formData.type}
                                onChange={handleChange} 
                                id="tipo-consulta" 
                                className="border border-gray-300 rounded-full py-2 px-4 text-black font-normal bg-white focus:outline-none focus:border-[#75512f]" 
                                required
                            >
                                <option value="" disabled hidden>--Seleccione una opción--</option>
                                <option value="compra">Compra</option>
                                <option value="alquiler">Alquiler</option>
                                <option value="venta">Venta</option>
                                <option value="evaluacion">Evaluación</option>
                                <option value="hipoteca">Hipoteca</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="appointmentDate">Fecha de la cita*</label>
                            <input 
                                required 
                                type="date" 
                                id="appointmentDate"
                                name="appointmentDate"
                                min={today}
                                value={formData.appointmentDate}
                                onChange={handleChange}
                                className="rounded-full border border-gray-300 py-2 px-4 text-black font-normal focus:outline-none focus:border-[#75512f]"
                            />
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-2 mt-4">
                            <label htmlFor="message" className="text-[#75512f]">
                                Mensaje <span className="text-red-700">*</span>
                            </label>
                            <textarea 
                                id="message"
                                name="message" 
                                required
                                value={formData.message}
                                onChange={handleChange} 
                                rows={4} 
                                placeholder="Escribe aquí los detalles de tu cita..."
                                className="border border-gray-300 rounded-xl py-2 px-4 text-black font-normal resize-none focus:outline-none focus:border-[#75512f]"
                            ></textarea>
                        </div>

                    </div>

                    <div className="flex justify-center mt-6">
                        <button 
                            type="submit"
                            className="flex items-center justify-center gap-3 text-white border-2 border-transparent rounded-full bg-[#75512f] py-3 px-8 text-base md:text-lg font-bold cursor-pointer hover:text-[#75512f] hover:border-[#75512f] hover:bg-white transition-all duration-300 shadow-md"
                        >
                            Confirmar cita
                            <FaArrowRight className="border rounded-full p-1.5 text-xl" />
                        </button>
                    </div>

                </form>

            </div>

            {/* Modal Nativo de Respuesta */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs px-4">
                    <div className="w-full max-w-md flex flex-col justify-center items-center bg-white rounded-2xl p-6 sm:p-8 gap-6 shadow-2xl">
                        <p className="text-center text-lg md:text-xl font-bold leading-relaxed whitespace-pre-line text-gray-800">
                            {modalMessage}
                        </p>

                        <button
                            type="button"
                            className="bg-[#75512f] text-white py-2.5 px-8 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#583c23] transition-colors cursor-pointer"
                            onClick={() => {
                                setIsModalOpen(false);
                                if (isSuccess) {
                                    window.location.reload(); // Recarga limpia si se guardó correctamente
                                }
                            }}
                        >
                            Ok
                        </button>
                    </div>
                </div>
            )}

            <footer className="flex items-center justify-center bg-[#75512f] text-sm md:text-base text-white py-6 px-4 text-center">
                <p>&copy; 2025 Derechos reservados | DRTechGroup, SRL | Creado por DRTechGroup</p>
            </footer>
        </ScaleIn>
    );
}

export default CitasPage;