'use client';
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'


const Navbar = () => {
  const [isScroll, setIsScroll] = React.useState(false);
  const sideMenuRef = React.useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={assets.chopify_logo}
            alt="logo"
            className="w-28 cursor-pointer mr-10"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <a
              className={`font-Ovo transition-colors text-black hover:text-[#292A44]`}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo transition-colors text-black hover:text-[#292A44]`}
              href="#combos"
            >
              Combos
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo transition-colors text-black hover:text-[#292A44]`}
              href="#menu"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              className={`font-Ovo transition-colors text-black hover:text-[#292A44]`}
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#cart"
            className="flex items-center border border-gray-500 rounded-full px-3 py-2 text-sm lg:px-6 lg:py-2.5 lg:gap-3 transition-colors"
          >
            {/* Cart Icon & Text */}
            <ShoppingCart
              className={`w-5 h-5 transition-colors duration-300 ${
                isScroll ? "text-[#292A44]" : "text-white"
              }`}
            />
            <span
              className={`hidden lg:inline transition-colors duration-300 ${
                isScroll ? "text-[#292A44]" : "text-white"
              }`}
            >
              Cart
            </span>
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;