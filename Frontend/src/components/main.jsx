import React from 'react'
import  Bak from '../imgs/back.png'
import { MdDriveEta } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiNetworkBars } from "react-icons/gi";
 const main = () => {
  return (
    <>
    <div className="main font-[poppins] h-[664px]" style={{
        backgroundImage: `url(${Bak})`,
        height: '644px',
        backgroundRepeat : 'no-repeat'
    }}>

        <div className="sub w-[576px] h-[536px] bg-white  translate-x-[140px] translate-y-[50px] flex flex-col px-[50px] space-y-[1em]">
            <div className="subs flex  ">
                <div className="drive w-[172px] h-[171px]  flex flex-col items-center justify-center border-b-[5px] border-black">
                    <MdDriveEta className='text-3xl'/>
                    <a href="">Drive or <br /> Deliver</a>
                </div>
                <div className="eat w-[172px] h-[171px] flex flex-col items-center justify-center">
                    <GiForkKnifeSpoon className='text-3xl'/>
                    <a href="">Eat</a>
                </div>
                <div className="ride w-[172px] h-[171px] flex flex-col items-center justify-center">
                    <GiNetworkBars className='text-3xl'/>
                    <a href="">Ride</a>
                </div>
            </div>
            <div className="subs space-y-4">
                <p className='text-[52px]'>
                Get in the drivers seat and get paid
                </p>
                <div className="text">
                <p>Drive on the platform with the largest network of active riders.</p>
            </div>
            <div className="btn ">
                <button className='w-[170px] h-[48px] bg-black text-white'>
                    Sign Up Drive
                </button>
            </div>
            <div className="text">
                <p>Learn more about driving and delivering</p>
            </div>
            </div>
            

        </div>
    </div>
    </>
  )
}

export default main