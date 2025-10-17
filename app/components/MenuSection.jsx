import Image from "next/image";
import { menuItems } from "../data/menuData";

const MenuSection = () => {
  return (
    <div id="menu" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1"
        >
          <div className="w-full h-56 flex items-center justify-center bg-[#F8B75D]">
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="object-cover rounded-full border-4 border-[#C4402A]"
            />
          </div>

          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-[#292A44]">{item.name}</h3>
            <p className="text-[#C4402A] font-bold mt-2">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuSection;
