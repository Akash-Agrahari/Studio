import React from "react";
import BlackNoiseBackground from "../addOns/BlackNoiseBackground";

function Philosphy() {
  return (
    <>
      <div
        className="
        w-full  min-h-screen grid relative md:gap-y-2  pt-2  grid-cols-12 text-[#212721] px-2
        "
      >
        <h1 className="font-semibold  fut-semibold -rotate-90 lg:text-[clamp(.8rem,1vw,2rem)] lg:-translate-y-1/2 lg:top-1/2 xs:text-[2.5vw] text-[.5rem] origin-bottom-right absolute top-1/15  leading-none right-2 ">
          ESTD.2026
        </h1>

        <div className=" font-medium fut-medium text-[clamp(2rem,10vw,50vw)] lg:text-[clamp(6rem,7vw,12rem)]  flex flex-col items-start  col-start-1  row-start-1 col-span-12">
          <div className="flex items-center w-full justify-between">
            <h1 className="leading-none ">SKADOOSH</h1>

            <div className="w-[10vw] h-[10vw] lg:w-[clamp(2rem,4vw,7rem)] lg:h-[clamp(2rem,4vw,7rem)] rounded-full border border-[#212721] flex items-center justify-center">
              {/* 1.4rem */}
              <span className=" font-bold fut-bold text-[clamp(1.4rem,7vw,15vw)] lg:text-[clamp(2rem,2vw,4rem)] ">
                2
              </span>
            </div>
          </div>

          <div className="flex gap-2 lg:flex-col lg:items-start items-center">
            <h1 className="leading-none">STUDIO</h1>
            <h1 className="text-[clamp(.8rem,4vw,4rem)] lg:text-[clamp(1rem,2vw,5rem)] leading-none font-extrabold fut-extrabold">
              啪嗒
            </h1>
          </div>
        </div>

        <div className="lg:pr-[clamp(5rem,10vw,10rem)] relative lg:-top-20  row-start-3 mt-[4vh] mb-[1vh] col-span-12  md:h-[30vh] h-[30vh]  items-start justify-end lg:gap-[1vw] gap-[1.5vw] flex">
          <div className="flex relative items-end justify-between flex-col  h-full">
            <p className="font-medium fut-medium lg:text-[clamp(1rem,1vw,3rem)] text-[clamp(.6rem,3.5vw,1.5rem)] text-right items-end">
              An
              <br /> Independent <br />
              Creative Agency
            </p>

            <div
              className="flex lg:text-[clamp(6rem,8vw,11rem)] text-[clamp(2rem,10vw,3.5rem)] flex-col justify-self-start
                            lg:font-medium  fut-medium lg:absolute lg:-bottom-[70%] self-end "
            >
              <h1 className="leading-none ">It Starts</h1>
              <h1 className="leading-none lg:gap-[25vw] gap-[10vw] flex justify-between">
                With <span>An</span>
              </h1>
            </div>
          </div>

          <img
            src="/media/black-2.webp"
            className="justify-self-end img-tex object-cover object-top scale-x-[-1] lg:w-[25vw] xl:w-[20vw] lg:h-[20vh] w-[45vw]  md:h-[30vh] h-[30vh] "
          />
        </div>

        <div className="lg:pr-[clamp(5rem,10vw,10rem)] lg:relative lg:-top-40 flex flex-col gap-[1.5vh] items-end md:row-start-6 row-start-4 col-span-12 ">
          <h1 className="font-semibold  fut-semibold origin-bottom-left lg:text-[clamp(.8rem,1vw,2rem)] leading-0 -rotate-90  text-[clamp(.4rem,2.5vw,5rem)] absolute bottom-1/5 ml-2 left-0  ">
            INDIA :: 26°27′00″N 80°19′55″E{" "}
          </h1>

          <img
            src="/media/black-2.webp"
            className=" img-tex scale-x-[-1] lg:w-[25vw] object-bottom  xl:w-[20vw] w-[70vw] h-[35vh] lg:h-[30vh] object-cover"
          />

          <div className="flex items-center gap-2 lg:relative lg:left-10 ">
            <div className="bg-[#000000] h-0.5 w-[15vw] "></div>

            <h1 className="font-medium fut-medium lg:text-[clamp(5rem,6vw,8rem)] text-[clamp(3.5rem,17vw,8rem)] leading-none items-end text-[#cacaca]">
              Obsession
            </h1>
          </div>

          <h1 className=" font-black fut-extrabold lg:relative lg:left-10 xs:text-[5vw] lg:text-[clamp(1.5rem,2.2vw,4rem)] text-[.7rem] leading-none  items-end">
            困扰
          </h1>
        </div>

        <div className="row-start-5 row-span-3"></div>
      </div>
    </>
  );
}

export default Philosphy;
