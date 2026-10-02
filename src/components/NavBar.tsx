'use client';

import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu, HiPhone, HiMail } from "react-icons/hi";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const [isInmueblesOpen, setIsInmueblesOpen] = useState(false);

    const pressButtonMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="mx-auto bg-white/80 lg:rounded-4xl lg:w-[90%] lg:fixed top-0 right-0 left-0 z-40 md:mt-[2rem] border border-[#75512f] shadow-lg">
            <nav className="flex flex-col py-4 px-6 lg:flex-row lg:mx-auto lg:relative lg:px-8 lg:items-center lg:justify-between">
                
                {/* CONTENEDOR SUPERIOR MÓVIL*/}
                <div className="flex flex-row items-center justify-between w-full lg:w-auto">
                    {/* LOGOTIPO Y TÍTULO */}
                    <Link href="/" className="flex items-center text-[2rem] gap-[1rem] lg:text-[3rem] group relative">
                        <Image
                            src='/Carolina_Vende_Foto.png'
                            alt="CarolinaVende"
                            width={300}
                            height={300}
                            className="w-[8rem] lg:w-[10rem]"
                        />
                        <h1 className="font-semibold text-red-700">CarolinaVende</h1>

                        {/* Tarjeta desplegable al hacer hover en desktop */}
                        <div className="w-[70rem] absolute flex flex-col top-40 left-10 scale-0 group-hover:block group-hover:scale-100 z-90 bg-[#75512f] rounded-4xl px-[6rem] py-[3rem]">
                            <div
                                style={{backgroundImage : "url('/Carolina_Vende_Profile.png')"}}
                                className="w-[45rem] h-[30rem] bg-no-repeat bg-cover mx-auto"
                            />
                            <p className="mt-[1.2rem] text-[2.5rem] text-center text-white font-bold">Inmobiliaria y constructora dedicada al desarrollo y venta de proyecto de bajo costo.</p>
                            <p className="mt-[1.2rem] text-[1.6rem] text-center text-white ">Soy Milagros González, pero en el mundo inmobiliario me conocen como "Carolina Vende". Soy dominicana y, durante más de 45 años, me he dedicado con pasión a las ventas y el asesoramiento en este sector. Mi misión es guiar a cada cliente, brindándoles la mejor orientación para que logren su inversión ideal o encuentren el hogar perfecto que han soñado.</p>
                        </div>
                    </Link>

                    {/* BOTÓN DE HAMBURGUESA */}
                    <div className="lg:hidden">
                        <button onClick={pressButtonMenu} className="focus:outline-none p-2 bg-gray-100 rounded-lg border border-[#75512f]">
                            <HiOutlineMenu className="w-[2.5rem] h-[2.5rem] text-black" />
                        </button>
                    </div>
                </div>

                {/* CONTENEDOR DE NAVEGACIÓN Y CONTACTO */}
                <div className={`flex flex-col w-full items-center gap-[2rem] mt-4 lg:mt-0 lg:flex lg:flex-row lg:w-auto lg:justify-between lg:items-center ${isOpen ? 'flex' : 'hidden lg:flex'}`}>

                    {/* OPCIONES DE NAVEGACIÓN */}
                    <ul className="flex flex-col items-center text-center text-[1.4rem] lg:text-[1.8rem] gap-3 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex-row lg:gap-6">
                        <li>
                            <Link onClick={pressButtonMenu} href="/" className="relative font-semibold py-2 transition-colors duration-300 lg:hover:text-[#75512f] group">
                                Inicio
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#75512f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                            </Link>
                        </li>

                        <div className="hidden lg:block lg:w-[.15rem] lg:h-[1.5rem] lg:bg-[#75512f]"/>

                        {/* Menú desplegable de Inmuebles */}
                        <li className="relative group">
                            <button 
                                onClick={() => setIsInmueblesOpen(!isInmueblesOpen)}
                                className="flex items-center hover:text-[#75512f] font-semibold py-2 focus:outline-none mx-auto"
                            >
                                Inmuebles
                                <ChevronDownIcon className={`h-[1.5rem] w-[1.5rem] transform transition-transform duration-300 ml-1 ${isInmueblesOpen ? 'rotate-180' : ''} lg:group-hover:rotate-180`} />
                            </button>

                            <ul className={`${isInmueblesOpen ? 'block' : 'hidden'} lg:hidden lg:group-hover:block lg:absolute lg:bg-gray-100 lg:shadow-md left-0 top-full rounded-lg z-10 w-48 py-2 bg-gray-50 mt-1`}>
                                <Link href="#" onClick={() => { setIsInmueblesOpen(false); pressButtonMenu(); }}><li className="hover:bg-[#75512f] hover:text-[#ffffff] px-4 py-2">Casas</li></Link>
                                <Link href="#" onClick={() => { setIsInmueblesOpen(false); pressButtonMenu(); }}><li className="hover:bg-[#75512f] hover:text-[#ffffff] px-4 py-2">Apartamentos</li></Link>
                                <Link href="#" onClick={() => { setIsInmueblesOpen(false); pressButtonMenu(); }}><li className="hover:bg-[#75512f] hover:text-[#ffffff] px-4 py-2">Edificios</li></Link>
                                <Link href="#" onClick={() => { setIsInmueblesOpen(false); pressButtonMenu(); }}><li className="hover:bg-[#75512f] hover:text-[#ffffff] px-4 py-2">Solares</li></Link>
                                <Link href="#" onClick={() => { setIsInmueblesOpen(false); pressButtonMenu(); }}><li className="hover:bg-[#75512f] hover:text-[#ffffff] px-4 py-2">Fincas</li></Link>
                            </ul>
                        </li>

                        <div className="hidden lg:block lg:w-[.15rem] lg:h-[1.5rem] lg:bg-[#75512f]"/>

                        <li>
                            <Link onClick={pressButtonMenu} href="/nosotros" className="relative font-semibold py-2 transition-colors duration-300 lg:hover:text-[#75512f] group">
                                Sobre Nosotros
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#75512f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                            </Link>
                        </li>

                        <div className="hidden lg:block lg:w-[.15rem] lg:h-[1.5rem] lg:bg-[#75512f]"/>

                        <li>
                            <Link onClick={pressButtonMenu} href="/portafolio" className="relative font-semibold py-2 transition-colors duration-300 lg:hover:text-[#75512f] group">
                                Portafolio
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#75512f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                            </Link>
                        </li>

                        <div className="hidden lg:block lg:w-[.15rem] lg:h-[1.5rem] lg:bg-[#75512f]"/>

                        <li>
                            <Link onClick={pressButtonMenu} href="/contactanos" className="relative font-semibold py-2 transition-colors duration-300 lg:hover:text-[#75512f] group">
                                Contactanos
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#75512f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                            </Link>
                        </li>
                    </ul>

                    <div className="flex flex-col lg:flex-row items-center text-[1.3rem] lg:gap-8 border-t lg:border-t-0 pt-4 lg:pt-0 border-gray-300 lg:ml-auto">
                        <div>
                            <p className="flex items-center gap-[.5rem]"> <HiPhone className="w-[1.2rem] h-[1.2rem] text-black"/> (809) 849-7680</p>
                            <p className="flex items-center gap-[.5rem]"> <HiPhone className="w-[1.2rem] h-[1.2rem] text-black"/> (809) 705-7318</p>
                        </div>

                        <div className="flex items-center text-[1.3rem] lg:text-[1.5rem] mt-2 lg:mt-0">
                            <HiMail className="h-[2rem] w-[2rem] mr-2"/>
                            <p>carolinavende@gmail.com</p>
                        </div>
                    </div>

                </div>

            </nav>
        </div>
    );
}

export default NavBar;