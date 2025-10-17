import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = () => {
  return (
    <section id='home' className="w-full min-h-screen">

      {/* Mobile + Medium: Full Screen Vertical Layout */}
      <div className="lg:hidden bg-white h-screen flex flex-col items-center justify-center px-6 text-center">
        <Image
          src={assets.f2}
          alt="Food spread"
          width={200}
          height={200}
          className="mb-6 rounded-full shadow-lg ring-2 ring-[#C4402A]"
        />

        <h1 className="text-dark-brown text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
          Chop Life With <span className="text-[#F8B75D]">Chopify</span>
        </h1>

        <p className="text-[#292A44] text-base sm:text-lg leading-relaxed mb-6 max-w-sm">
          Deliciously Nigerian. Delivered to you — fast, fresh, and with love.
        </p>

        <a
          href="#menu"
          className="bg-[#E46B3F] hover:bg-[#C4402A] text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
        >
          Order Now
        </a>
      </div>

      {/* Large: Diagonal Layout */}
      <div className="hidden lg:flex relative w-full h-screen overflow-hidden diagonal-bg">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.bg_image}
            alt="Diagonal BG"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative z-10 w-full flex items-center justify-between px-12 lg:px-20">
          <div className="max-w-xl">
            <h1 className="text-dark-brown text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow-md mb-4">
              Chop Life With <span className="text-[#F8B75D]">Chopify</span>
            </h1>

            <p className="text-[#292A44]  text-lg leading-relaxed drop-shadow-sm mb-6">
              Deliciously Nigerian. Delivered to you — fast, fresh, and with love.
            </p>

            <a
              href="#menu"
              className="inline-block bg-[#E46B3F] hover:bg-[#C4402A] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Header




