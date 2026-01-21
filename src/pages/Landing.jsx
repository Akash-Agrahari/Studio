import React, { useEffect, useRef } from 'react'
import BlackNoiseBackground from '../addOns/BlackNoiseBackground'
import { motion, useTransform, useScroll, transform } from 'framer-motion'

function Landing() {

  return (
    <div className='w-full h-screen  ' >

      <BlackNoiseBackground opacity={.3} fullScreen={true} />
      
      <div
        style={{ fontFamily: 'futura std' }}
        className="px-12.5 text-[#222222] grid grid-rows-4 w-full h-screen"
      >
        <div className="row-1 grid  grid-cols-[1fr_4fr_6fr_1fr] gap-x-10  items-center " >

          <h1 className=" pointer-events-none select-none font-bold  text-[109px]  ">A</h1>

          <div className='flex justify-center items-center' >
            <img src="./Prada-bag-2.svg" className="   rounded-2xl  pointer-events-none" />
          </div>

          <h1 className=" pointer-events-none select-none font-bold  text-[109px]">CREATIVE</h1>

          <div className='flex justify-end' >
            <h1 className=" pointer-events-none select-none font-bold text-sm -rotate-90 ">ESTD.2026</h1>
          </div>

        </div>

        <div className="row-2 flex gap-70 items-center " >
          <h1 className="  select-none font-bold  hover:italic  text-[109px]">STUDIO</h1>
          <h1 style={{ fontFamily: 'montserrat' }} className=" select-none pointer-events-none font-extrabold text-[109px]">{`>>>`}</h1>
        </div>

        <div className="row-3 flex items-center  justify-between " >
            {/* <video src="./video/match-cut.mp4" autoPlay muted loop className="rounded-2xl object-fit  pointer-events-none" /> */}
          <img src="./Prada-fume.svg" className="  rounded-2xl  pointer-events-none" />
          <h1 className=" pointer-events-none select-none font-bold  text-[109px]">BUILDING</h1>

        </div>

        <div className="row-4 flex items-center justify-between">
          <h1 className=" pointer-events-none select-none font-bold  text-[109px]">OBSESSION</h1>
          <img src="./Lvmh.svg" className="  rounded-2xl  pointer-events-none" />
        </div>

      </div>
    </div>
  )
}

export default Landing