'use client';
import { useState } from "react";
import ScaleIn from "@/components/ScaleIn";
import { FaImages, FaArrowLeft, FaTimes, FaExpand } from "react-icons/fa";

// Definición de los proyectos con sus respectivas imágenes basadas en tu estructura en public/
const projects = [
    {
        id: "brisas",
        title: "Brisas",
        subtitle: "Proyecto Residencial",
        cover: "/Brisas/Brisas-1.jpeg",
        images: [
            "/Brisas/Brisas-1.jpeg",
            "/Brisas/Brisas-2.jpeg",
            "/Brisas/Brisas-3.jpeg",
            "/Brisas/Brisas-4.jpeg",
            "/Brisas/Brisas-5.jpeg",
        ]
    },
    {
        id: "cora-8",
        title: "Cora-8",
        subtitle: "Desarrollo Inmobiliario",
        cover: "/Cora-8/Cora-8-1.jpeg",
        images: [
            "/Cora-8/Cora-8-1.jpeg",
            "/Cora-8/Cora-8-2.jpeg",
            "/Cora-8/Cora-8-3.jpeg",
            "/Cora-8/Cora-8-4.jpeg",
            "/Cora-8/Cora-8-5.jpeg",
            "/Cora-8/Cora-8-6.jpeg",
            "/Cora-8/Cora-8-7.jpeg",
            "/Cora-8/Cora-8-8.jpeg",
            "/Cora-8/Cora-8-9.jpeg",
        ]
    },
    {
        id: "don-persio",
        title: "Don Persio",
        subtitle: "Residencial Exclusivo",
        cover: "/Don-Persio/Don-Persio-1.jpeg",
        images: [
            "/Don-Persio/Don-Persio-1.jpeg",
        ]
    },
    {
        id: "el-campito",
        title: "El Campito",
        subtitle: "Solares y Quintas",
        cover: "/El-Campito/El-Campito-1.jpeg",
        images: [
            "/El-Campito/El-Campito-1.jpeg",
            "/El-Campito/El-Campito-2.jpeg",
            "/El-Campito/El-Campito-3.jpeg",
            "/El-Campito/El-Campito-4.jpeg",
            "/El-Campito/El-Campito-5.jpeg",
        ]
    }
];

export default function PortafolioPage() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    return (
        <ScaleIn>
            <div className="w-full min-h-screen flex flex-col items-center justify-start px-4 pt-56 md:pt-72 pb-24">
                
                {!selectedProject ? (
                    <>
                        {/* Cabecera de la sección */}
                        <div className="flex flex-col items-center text-center gap-6 max-w-6xl mx-auto mb-16 px-2">
                            <h2 className="text-5xl md:text-7xl font-extrabold text-[#75512f] leading-tight">
                                Nuestro Portafolio de Proyectos
                            </h2>
                            <p className="text-xl md:text-3xl font-medium text-gray-700 max-w-5xl leading-relaxed">
                                Explora los desarrollos inmobiliarios más destacados. Haz clic en cualquier proyecto para ver todas las fotos en una sola página.
                            </p>
                        </div>

                        {/* Cuadrícula de Proyectos Principales */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full mx-auto px-4">
                            {projects.map((project) => (
                                <div 
                                    key={project.id}
                                    onClick={() => setSelectedProject(project)}
                                    className="group relative bg-white border-2 border-[#75512f] rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl"
                                >
                                    <div className="relative h-[380px] md:h-[460px] w-full overflow-hidden bg-gray-100">
                                        <img 
                                            src={project.cover} 
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
                                        
                                        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white">
                                            <div>
                                                <span className="text-sm md:text-base uppercase tracking-wider bg-[#75512f] px-5 py-2 rounded-full font-bold shadow-md">
                                                    {project.subtitle}
                                                </span>
                                                <h3 className="text-4xl md:text-5xl font-extrabold mt-4 text-white">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <div className="flex items-center gap-2.5 bg-white/30 backdrop-blur-md px-5 py-2.5 rounded-full text-base md:text-lg font-bold shadow-md">
                                                <FaImages className="text-xl" />
                                                <span>{project.images.length} fotos</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    /* Vista de detalle: Muestra todas las fotos del proyecto seleccionado en una sola página */
                    <div className="max-w-6xl w-full mx-auto px-4 flex flex-col gap-10">
                        
                        {/* Botón para regresar al portafolio general */}
                        <div>
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="flex items-center gap-3 bg-[#75512f] text-white px-7 py-3.5 rounded-full font-bold text-lg md:text-xl hover:bg-[#5e4024] transition-colors cursor-pointer shadow-lg"
                            >
                                <FaArrowLeft /> Volver al portafolio
                            </button>
                        </div>

                        {/* Encabezado del proyecto seleccionado */}
                        <div className="bg-white border-2 border-[#75512f] rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <span className="text-sm md:text-base uppercase tracking-wider bg-[#75512f]/10 text-[#75512f] px-5 py-2 rounded-full font-extrabold">
                                    {selectedProject.subtitle}
                                </span>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-[#75512f] mt-4">
                                    {selectedProject.title}
                                </h2>
                            </div>
                            <div className="text-gray-700 font-bold text-lg md:text-xl bg-gray-100 px-6 py-3 rounded-2xl shadow-inner">
                                Mostrando las {selectedProject.images.length} fotos disponibles
                            </div>
                        </div>

                        {/* Cuadrícula con todas las fotos del proyecto */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {selectedProject.images.map((img, index) => (
                                <div 
                                    key={index} 
                                    onClick={() => setLightboxImage(img)}
                                    className="relative h-80 md:h-96 rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl group bg-gray-100 cursor-pointer"
                                >
                                    <img 
                                        src={img} 
                                        alt={`${selectedProject.title} Foto ${index + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Icono de zoom / expandir al hacer hover */}
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="bg-white/80 backdrop-blur-md p-3 rounded-full text-[#75512f] text-xl shadow-lg">
                                            <FaExpand />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm md:text-base px-4 py-1.5 rounded-full font-bold backdrop-blur-md shadow-md pointer-events-none">
                                        {index + 1} / {selectedProject.images.length}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                )}

                {/* Modal / Lightbox para ver la imagen ampliada */}
                {lightboxImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
                        <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
                            <button 
                                onClick={() => setLightboxImage(null)}
                                className="absolute -top-12 right-0 md:right-4 text-white bg-black/60 hover:bg-[#75512f] p-3 rounded-full transition-colors cursor-pointer text-xl shadow-lg z-10"
                            >
                                <FaTimes />
                            </button>
                            <img 
                                src={lightboxImage} 
                                alt="Imagen ampliada" 
                                className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                )}

            </div>
        </ScaleIn>
    );
}