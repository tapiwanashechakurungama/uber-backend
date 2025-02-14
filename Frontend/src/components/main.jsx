import React from 'react';
import Bak from '../imgs/back.png';
import { MdDriveEta } from "react-icons/md";
import { GiForkKnifeSpoon, GiNetworkBars } from "react-icons/gi";

const Main = () => {
  return (
    <div
      className="font-[Poppins] min-h-[664px] bg-cover bg-center flex justify-center items-center px-6 py-12 md:py-20"
      style={{ backgroundImage: `url(${Bak})` }}
    >
      <div className="w-full max-w-[576px] bg-white shadow-lg rounded-lg p-6 md:p-10 space-y-6">
        <div className="flex justify-between border-b-4 border-black pb-4">
          <div className="w-1/3 text-center flex flex-col items-center gap-2 cursor-pointer hover:text-gray-700">
            <MdDriveEta className="text-4xl" />
            <a href="#" className="text-lg font-semibold">Drive or Deliver</a>
          </div>
          <div className="w-1/3 text-center flex flex-col items-center gap-2 cursor-pointer hover:text-gray-700">
            <GiForkKnifeSpoon className="text-4xl" />
            <a href="#" className="text-lg font-semibold">Eat</a>
          </div>
          <div className="w-1/3 text-center flex flex-col items-center gap-2 cursor-pointer hover:text-gray-700">
            <GiNetworkBars className="text-4xl" />
            <a href="#" className="text-lg font-semibold">Ride</a>
          </div>
        </div>
        
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Get in the driver’s seat and get paid
          </h1>
          <p className="text-gray-700 text-lg">
            Drive on the platform with the largest network of active riders.
          </p>
          
          <button className="w-full md:w-[170px] py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all">
            Sign Up to Drive
          </button>
          
          <p className="text-gray-600 underline cursor-pointer hover:text-gray-800">
            Learn more about driving and delivering
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
