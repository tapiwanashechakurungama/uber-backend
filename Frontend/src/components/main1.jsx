import React from 'react'
import Frame from '../imgs/Frame.png'
 const main1 = () => {
  return (
    <>
     <div className="cities flex justify-between px-[50px] py-[50px] font-[poppins]">
            <div className="text leading-10">
                <div className="sub-text w-[390px] leading-8">
                <h1 className='text-[32px]'>Setting 10,000+ cities in motion</h1>
                </div>
                <a href='' className='hover:border-b border-black'>View all cities</a>
            </div>
            <div className="img">
                <img src={Frame} alt="" />
            </div>

        </div>
    </>
  )
}

export default main1