'use client';
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react';
import React, { useEffect } from 'react'

const Navbar = () => {
    const[isScroll, setIsScroll] = React.useState(false);
    const sideMenuRef = React.useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true);
            }else{
                setIsScroll(false);
            }
        })
    }, []);

    return(

        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav 
            className={`w-full fixed px-5 lg:px-8 xl:px-{8%} py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm " : ""}`}>
                <a href="#top">
                    <Image src={assets.chopify_logo} alt='logo' className='w-28 cursor-pointer mr-10' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                    <li><a className='font-Ovo text-black hover:text-primary transition-colors' href="#home">Home</a></li>
                    <li><a className='font-Ovo text-black hover:text-primary transition-colors' href="#menu">Menu</a></li>
                    <li><a className='font-Ovo text-black hover:text-primary transition-colors' href="#combos">Combos</a></li>
                    <li><a className='font-Ovo text-black hover:text-primary transition-colors' href="#contact">Contact</a></li>
                </ul>
                <div className='flex items-center gap-4'>

                    <a
                        href="#cart"
                        className="flex items-center border border-gray-500 rounded-full px-3 py-2 text-sm lg:px-6 lg:py-2.5 lg:gap-3"
                        >
                        <ShoppingCart className="w-5 h-5" />
                        <span className="hidden lg:inline">Cart</span>
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>
            {/* *********MOBILE MENU******** */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                    <div className='absolute top-6 right-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li><a className='font-Ovo  text-black hover:text-primary transition-colors' onClick={closeMenu} href="#home">Home</a></li>
                    <li><a className='font-Ovo  text-black hover:text-primary transition-colors' onClick={closeMenu} href="#menu">Menu</a></li>
                    <li><a className='font-Ovo  text-black hover:text-primary transition-colors' onClick={closeMenu} href="#combos">Combos</a></li>
                    <li><a className='font-Ovo  text-black hover:text-primary transition-colors' onClick={closeMenu} href="#contact">Contact</a></li>
                </ul>

            </nav>
        </>
    )

}

export default Navbar
