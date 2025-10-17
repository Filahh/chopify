import React from "react";
import FoodCard from "./FoodCard";
import { assets } from "@/assets/assets";

const Combo = () => {
  const foods = [
    {
      image: assets.jellof_beef,
      name: "Jollof Rice Combo",
      description: "With fried chicken and plantain",
      price: 12.5,
    },
    {
      image: assets.egusi_eba,
      name: "Efo Riro Plate",
      description: "Served with pounded yam",
      price: 15.0,
    },
    {
      image: assets.fried_rice,
      name: "Fried Rice Bowl",
      description: "Topped with shrimps & veggies",
      price: 13.0,
    },
    {
      image: assets.egusi_soup,
      name: "Egusi Deluxe",
      description: "With beef & stockfish",
      price: 14.5,
    },
  ];

  return (
    <section id="combos" className="bg-white py-16 px-6 md:px-12 text-center">
      <h2 className="text-4xl font-extrabold text-[#292A44] mt-10 mb-18">
        Our Signature Dishes
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {foods.map((food, index) => (
          <FoodCard key={index} {...food} />
        ))}
      </div>
    </section>
  );
};

export default Combo;
