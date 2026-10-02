'use client';
import { useState } from "react";
import ScaleIn from "@/components/ScaleIn";
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages } from "react-icons/fa";

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
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const openModal = (project: typeof projects[0]) => {
        setSelectedProject(project);
        setActiveImageIndex(0);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const nextImage = () => {
        if (selectedProject) {
            setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    return (
        <ScaleIn>
            <div className="w-full min-h-screen flex flex-col items-center justify-start px-4 pt-56 md:pt-72 pb-24">
                
                {/* Cabecera de la sección */}
                <div className="flex flex-col items-center text-center gap-5 max-w-5xl mx-auto mb-14 px-2">
                    <h2 className="text-4xl md:text-7xl font-extrabold text-[#75512f] leading-tight">
                        Nuestro Portafolio de Proyectos
                    </h2>
                    <p className="text-lg md:text-2xl font-medium text-gray-700 max-w-4xl">
                        Explora los desarrollos inmobiliarios más destacados. Haz clic en cualquier proyecto para ver la galería completa de imágenes.
                    </p>
                </div>

                {/* Cuadrícula de Proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full mx-auto px-4">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            onClick={() => openModal(project)}
                            className="group relative bg-white border-2 border-[#75512f] rounded-3xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="relative h-80 md:h-[420px] w-full overflow-hidden bg-gray-100">
                                <img 
                                    src={project.cover} 
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
                                
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                                    <div>
                                        <span className="text-xs md:text-sm uppercase tracking-wider bg-[#75512f] px-4 py-1.5 rounded-full font-semibold">
                                            {project.subtitle}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold mt-3 text-white">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-4 py-2 rounded-full text-sm md:text-base font-semibold">
                                        <FaImages />
                                        <span>{project.images.length} fotos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal de Galería optimizado */}
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 md:p-6">
                        <div className="relative bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[96vh]">
                            
                            {/* Cabecera del Modal */}
                            <div className="flex justify-between items-center bg-[#75512f] text-white px-6 py-3.5 flex-shrink-0">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold">{selectedProject.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-200">Imagen {activeImageIndex + 1} de {selectedProject.images.length}</p>
                                </div>
                                <button 
                                    onClick={closeModal}
                                    className="text-white hover:bg-white/20 p-2.5 rounded-full transition-colors cursor-pointer text-xl"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Visor de Imagen Principal */}
                            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[45vh] md:min-h-[55vh] max-h-[62vh] overflow-hidden">
                                <img 
                                    src={selectedProject.images[activeImageIndex]} 
                                    alt={`${selectedProject.title} ${activeImageIndex + 1}`}
                                    className="max-h-full max-w-full object-contain p-2"
                                />

                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button 
                                            onClick={prevImage}
                                            className="absolute left-4 bg-black/60 hover:bg-[#75512f] text-white p-3 rounded-full transition-colors cursor-pointer text-lg shadow-lg"
                                        >
                                            <FaChevronLeft />
                                        </button>
                                        <button 
                                            onClick={nextImage}
                                            className="absolute right-4 bg-black/60 hover:bg-[#75512f] text-white p-3 rounded-full transition-colors cursor-pointer text-lg shadow-lg"
                                        >
                                            <FaChevronRight />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Miniaturas (Thumbnails) con scroll horizontal ordenado */}
                            {selectedProject.images.length > 1 && (
                                <div className="flex gap-2.5 px-4 py-3 bg-gray-100 overflow-x-auto flex-shrink-0 justify-start md:justify-center scrollbar-thin">
                                    {selectedProject.images.map((img, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => setActiveImageIndex(idx)}
                                            className={`relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${activeImageIndex === idx ? 'border-[#75512f] scale-105 shadow-md ring-2 ring-[#75512f]/40' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                        >
                                            <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>
                )}

            </div>
        </ScaleIn>
    );
}