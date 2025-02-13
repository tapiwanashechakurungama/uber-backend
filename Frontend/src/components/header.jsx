import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

 const header = () => {
  return (
    <>
    <div className="head font-[poppins] bg-black h-[64px] flex flex-row text-white items-center justify-between px-[50px] py-[10px]">
        <div className="flex flex-row gap-10">
            <div className="sub flex gap-6">
                <div className="name-1">
                    <a href='' className=''>Uber</a>
                </div>
                <div className="name-2 flex justify-center items-center">
                    <a href=''>Company</a>
                    <IoIosArrowDown/>
                </div>
            </div>
            <div className="sub-2 flex gap-6">
                <div className="name-3">
                    <a href=''>Help</a>
                </div>
                <div className="name-4">
                    <a href=''>COVID-19 resource</a>
                </div>
            </div>
        </div>
        <div className="flex gap-6">
            <div className="lan flex items-center gap-1">
                <CiGlobe/>
                <a href='' className=''>EN</a>
            </div>
            <div className="pro flex items-center gap-1 ">
                <AiOutlineProduct/>
                <a href=''>Products</a>
            </div>
            <div className="log flex items-center  gap-1">
                <IoPersonOutline/>
                <a href=''>Log in</a>
            </div>
            <div className="sign-up bg-white  w-[91px] h-[38px] text-black flex items-center justify-center rounded-[65px]">
                <a href=''>Sign Up</a>
            </div>
        </div>
    </div>
    </>
  )
}


export default header