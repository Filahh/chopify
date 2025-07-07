import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = () => {
  return (

    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={assets.bg_image}
        alt="Delicious Naija food"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Text Content */}
      <div className="relative z-10 h-full px-6 md:px-12 lg:px-20 flex items-center">
        <div className="max-w-xl">
          <h1 className="text-#C4402A text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow-md mb-4">
            Chop Life With <span className="text-orange-400">Chopify</span>
          </h1>
          <p className="text-white text-base md:text-lg leading-relaxed drop-shadow-sm mb-6">
            Deliciously Nigerian. Delivered to you — fast, fresh, and with love.
          </p>
          <a
            href="#menu"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  )
}


export default Header
