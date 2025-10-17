'use client'
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Combo from "./components/Combo";
import MenuSection from "./components/MenuSection";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Combo />

      {/* MENU PREVIEW SECTION */}
      <section id="menu" className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-[#292A44] mb-10">
          Explore Our Menu
        </h2>

        <MenuSection />
        
        {/* Link to full menu page */}
        <div className="text-center mt-8">
          <a
            href="/menu"
            className="inline-block bg-[#E46B3F] hover:bg-[#C4402A] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            View Full Menu
          </a>
        </div>
      </section>

      <Testimonial />
    </>
  );
}
