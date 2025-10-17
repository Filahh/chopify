import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const FoodCard = ({ image, name, description, price }) => {
  return (
    <div className="bg-[#292A44] text-white rounded-3xl shadow-xl p-5 w-[220px] sm:w-[250px] flex flex-col items-center hover:scale-105 transition-transform duration-300 relative">
      {/* Food Image */}
      <div className="w-40 h-40 rounded-full mx-auto overflow-hidden shadow-lg mb-4 ring-4 ring-[#F8B75D]/20">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-center object-cover"
        />
      </div>

      {/* Details */}
      <h3 className="text-xl font-bold text-[#F8B75D] mb-1">{name}</h3>
      <p className="text-gray-200 text-sm mb-3">{description}</p>

      {/* Price and Cart */}
      <div className="flex items-center justify-between w-full">
        <span className="text-[#E46B3F] font-bold text-lg">${price}</span>
        <button className="bg-[#C4402A] hover:bg-[#E46B3F] text-white p-2 rounded-full transition-colors duration-300 shadow-md">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FoodCard;

