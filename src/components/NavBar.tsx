'use client';

import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu, HiPhone } from "react-icons/hi"
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import React, {useState} from "react";

function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

    const pressButtonMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="mx-auto bg-white/80 lg:rounded-4xl lg:w-[80%] lg:fixed top-0 right-0 left-0 z-40 mt-[2rem]">
            <nav className="flex flex-col items-center justify-evenly py-3 lg:flex-row lg:mx-[auto]">
                <Link href="/" className="flex flex-col items-center text-[2rem] gap-[1rem] lg:flex-row lg:text-[3rem]">
                    <Image
                        src='/Carolina_Vende_Foto.png'
                        alt="CarolinaVende"
                        width={300}
                        height={300}
                        className="w-[10rem] lg:w-[10rem]"
                    />
                    <h1 className="font-semibold"> CarolinaVende</h1>
                </Link>

                <div className="lg:hidden">
                    <button onClick={pressButtonMenu} className=" focus:outline-none">
                        <HiOutlineMenu className="w-[3rem] h-[3rem] text-black" />
                    </button>
                </div>

                <div className={`flex flex-col w-full items-center gap-[2rem] lg:gap-0 lg justify-between lg:flex lg:flex-row lg:w-[50%] ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col items-center text-center text-[1.5rem] gap-3 lg:flex-row">
                        <li>
                            <Link 
                                onClick={pressButtonMenu}
                                href="/" 
                                className="
                                    relative
                                    text-2xl
                                    font-semibold
                                    py-2
                                    transition-colors duration-300
                                    lg:hover:text-[#75512f]
                                    group
                                "
                            >
                                Inicio

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
                        </li>

                        <div className="lg:w-[.2rem] lg:h-[2rem] lg:bg-[#75512f]"/>

                        <li className="relative group">
                            <Link href="#" className="flex items-center hover:text-[#75512f] font-bold">
                            Inmuebles
                            <ChevronDownIcon className="hidden h-[2rem] w-[2rem] transform group-hover:rotate-180 transition-transform duration-450 lg:block" />
                            </Link>

                            <ul className="lg:absolute lg:hidden group-hover:block bg-gray-100 left-0 top-9 rounded-lg z-10">
                                <Link href="#" ><li className="hover:bg-[#75512f] hover:text-[#ffffff] px-4 py-2 rounded-lg">Casas</li></Link>
                                <Link href="#" ><li className="hover:bg-[#75512f] hover:text-[#ffffff] px-4 py-2 rounded-lg">Apartamentos</li></Link>
                                <Link href="#" ><li className="hover:bg-[#75512f] hover:text-[#ffffff] px-4 py-2 rounded-lg">Edificios</li></Link>
                                {/*<Link href="#" ><li className="hover:bg-[#75512f] hover:text-[#ffffff] px-4 py-2 rounded-lg">Turistico</li></Link>*/}
                                <Link href="#" ><li className="hover:bg-[#75512f] hover:text-[#ffffff] px-4 py-2 rounded-lg">Solares</li></Link>
                                <Link href="#" ><li className="hover:bg-[#75512f] hover:text-[#ffffff] px-4 py-2 rounded-lg">Fincas</li></Link>

                            </ul>
                        </li>

                        <div className="lg:w-[.2rem] lg:h-[2rem] lg:bg-[#75512f]"/>

                        <li>
                            <Link 
                                onClick={pressButtonMenu}
                                href="/nosotros" 
                                className="
                                    relative
                                    text-2xl
                                    font-semibold
                                    py-2
                                    transition-colors duration-300
                                    lg:hover:text-[#75512f]
                                    group
                                "
                            >
                                Sobre Nosotros

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
                        </li>

                        <div className="lg:w-[.2rem] lg:h-[2rem] lg:bg-[#75512f]"/>

                        <li>
                            <Link 
                                onClick={pressButtonMenu}
                                href="/contactanos" 
                                className="
                                    relative
                                    text-2xl
                                    font-semibold
                                    py-2
                                    transition-colors duration-300
                                    lg:hover:text-[#75512f]
                                    group
                                "
                            >
                                Contactanos

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
                        </li>
                    </ul>

                    <div className="text-[1.2rem] hover:cursor-default">
                        <p className="flex items-center gap-[.5rem]"> <HiPhone className="w-[1.5rem] h-[1.5rem] text-black"/> (809) 849-7680</p>
                        <p className="flex items-center gap-[.5rem]"> <HiPhone className="w-[1.5rem] h-[1.5rem] text-black"/> (809) 705-7318</p>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;