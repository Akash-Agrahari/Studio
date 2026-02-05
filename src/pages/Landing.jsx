import React, { useEffect, useRef } from "react";
import BlackNoiseBackground from "../addOns/BlackNoiseBackground";
import { motion, useTransform, useScroll, transform } from "framer-motion";

function Landing() {
  const divREf = useRef();

  return (
    <div
      ref={divREf}
      className="w-full  min-h-screen font-['Futura_std'] text-[#212721]"
    >
      <div className="max-w-[1920px] mx-auto  lg:gap-y-[2vh] h-auto overflow-hidden  grid grid-cols-12 md:px-5 xl:px-10 lg:px-2.5 lg:py-10 xl:py-5 px-2.5 2xl:h-auto lg:h-screen min-h-screen">
      
        <div className="flex relative lg:p-0 lg:m-0 flex-col lg:gap-5 lg:items-center lg:flex lg:flex-row md:grid md:grid-cols-12  md:items-center row-start-1 col-span-12 items-start">
          
          <h1 className=" lg:text-[8rem] 2xl:text-[10vw] xl:text-[9vw] pointer-events-none md:col-start-1 leading-none md:row-start-1 md:col-span-3 select-none font-bold text-[clamp(5rem,25vw,10rem)]">
            A
          </h1>

          <p className="absolute -right-10 -rotate-90 text-sm font-bold ">
            ESTD.2026
          </p>

          <video
            loop
            playsInline={true}
            preload="auto"
            autoPlay
            muted
            src="/media/tv-vedio-24.mp4"
            className="  justify-self-center video-1 transform-gpu will-change-transform object-top 2xl:w-[25%]  lg:aspect-16/9 xl:h-[18vh] xl:w-[30%] lg:w-[20vw] md:col-start-4 md:col-span-6 md:row-start-1 object-cover xs:aspect-16/7 aspect-16/5 lg:rounded-none   rounded-2xl w-full pointer-events-none"
          />

          <h1 className=" lg:text-[8rem]  2xl:text-[10vw] xl:text-[9vw] pointer-events-none leading-none md:row-start-2 md:col-span-12 select-none font-bold self-center text-center justify-self-center text-[clamp(4rem,20vw,10rem)] ">
            CREATIVE
          </h1>
        </div>

        <div className="row-start-2 lg:p-0 lg:m-0 lg:gap-[10vw] justify-between lg:justify-normal col-span-12 flex items-center ">
          <h1 className="lg:text-[8rem] 2xl:text-[10vw] xl:text-[9vw] select-none font-bold leading-none text-[clamp(3rem,16vw,50rem)]">
            STUDIO
          </h1>
          <h1
            style={{ fontFamily: "montserrat" }}
            className=" lg:text-[8rem] leading-none 2xl:text-[10vw] select-none pointer-events-none font-extrabold text-[clamp(3rem,15vw,100rem)]"
          >
            {`>>>`}
          </h1>
        </div>

        <div className="row-start-3 lg:p-0 lg:m-0 lg:flex lg:items-center lg:justify-between lg:flex-row md:pt-[1vh] pt-[.2vh] xs:pt-[.5vh] xs:gap-2 col-span-12 items-center flex-col flex">
          <video
            loop
            playsInline={true}
            preload="auto"
            autoPlay
            muted
            src="/media/wine-24.mp4"
            className=" transform-gpu video-2 will-change-transform    lg:rounded-none  object-bottom rounded-2xl xl:w-[50%] xl:h-[20vh] 2xl:w-[45%] lg:w-[32%] lg:aspect-16/7 object-cover w-full md:aspect-16/5 xs:aspect-16/6 aspect-16/5 pointer-events-none"
          />
          <h1 className=" lg:text-[8rem] 2xl:text-[10vw] xl:text-[9vw] pointer-events-none leading-none select-none text-[clamp(3.7rem,19vw,12rem)] font-bold">
            BUILDING
          </h1>
        </div>

        <div className=" row-start-4 lg:flex-row lg:p-0 lg:m-0  lg:justify-between lg:row lg:items-center  pt-[2.5vh] xs:pt-[2vh] md:pt-[4vh] col-span-12 gap-[clamp(.3vh,.7vh,10vh)]  flex flex-col items-center">
          <video
            playsInline={true}
            preload="auto"
            loop
            autoPlay
            muted
            src="/media/magzine-24.mp4"
            className="  transform-gpu video-3 will-change-transform  lg:order-2 object-center 2xl:w-[35%] lg:m-0 xl:w-[40%] xl:h-[20vh] lg:w-[20%] lg:aspect-16/11 lg:rounded-none   rounded-2xl w-full md:aspect-16/5 xs:aspect-16/6 mt-[-4vw] object-cover aspect-16/5 pointer-events-none"
          />

          <h1 className=" lg:text-[8rem] 2xl:text-[10vw] xl:text-[9vw] leading-none pointer-events-none lg:order-1 select-none font-bold text-[clamp(3.1rem,16vw,12rem)]">
            OBSESSION
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
