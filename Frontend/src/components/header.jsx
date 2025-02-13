import React, { useState } from 'react';
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white font-[Poppins] px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-x-8">
        <a href="#" className="text-lg font-semibold hover:underline">Uber</a>
        <div className="hidden md:flex items-center gap-x-6">
          <div className="flex items-center gap-1 hover:underline cursor-pointer">
            <a href="#">Company</a>
            <IoIosArrowDown />
          </div>
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">COVID-19 Resource</a>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-x-6">
        <div className="flex items-center gap-x-1 cursor-pointer hover:text-gray-300">
          <CiGlobe />
          <a href="#">EN</a>
        </div>
        <div className="flex items-center gap-x-1 cursor-pointer hover:text-gray-300">
          <AiOutlineProduct />
          <a href="#">Products</a>
        </div>
        <div className="flex items-center gap-x-1 cursor-pointer hover:text-gray-300">
          <IoPersonOutline />
          <a href="#">Log in</a>
        </div>
        <div className="bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition duration-300 cursor-pointer">
          <a href="#">Sign Up</a>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white p-6 flex flex-col items-center space-y-4 md:hidden">
          <a href="#" className="hover:underline">Company</a>
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">COVID-19 Resource</a>
          <a href="#" className="hover:underline flex items-center gap-1">
            <CiGlobe />
            EN
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            <AiOutlineProduct />
            Products
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            <IoPersonOutline />
            Log in
          </a>
          <div className="bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition duration-300 cursor-pointer">
            <a href="#">Sign Up</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
