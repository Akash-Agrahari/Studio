import React from "react";

function Details() {
  return (
    <>
      <div className='w-full px-6 pt-10 lg:px-10 lg:pt-20 flex flex-col gap-12 lg:gap-5 2xl:gap-8 text-[#222222] font-["Futura_std"] min-h-screen'>
        
        {/* Section 1: Who We Are */}
        <div className="flex flex-col lg:flex-row items-start">
          <h1 className="w-full lg:w-[20%] text-lg 2xl:text-[1.7rem] mb-2 lg:mb-0">
            Who We Are
          </h1>
          <h1 className="w-full lg:w-[20%] text-lg 2xl:text-[1.7rem] mb-4 lg:mb-0">
            EN
          </h1>
          <h1 className="w-full lg:w-[50%] text-lg 2xl:text-[1.7rem] leading-7 2xl:leading-8">
            Skadoosh Studio, we are an independent creative studio, started in
            2026 based in Kanpur India.
          </h1>
        </div>

        {/* Section 2: How It Started */}
        <div className="flex flex-col lg:flex-row items-start">
          <h1 className="w-full lg:w-[20%] text-lg 2xl:text-[1.7rem] mb-2 lg:mb-0">
            How It Started
          </h1>
          <h1 className="w-full lg:w-[20%] text-lg 2xl:text-[1.7rem] mb-4 lg:mb-0">
            2026
          </h1>
          <h1 className="w-full lg:w-[50%] text-lg 2xl:text-[1.7rem] flex flex-col gap-5 leading-7 2xl:leading-8">
            It starts with an Obsession, to make things look as beautiful as it
            works. We blend the perfection of function with elegance so it feels
            divine, this is what skadoosh is meant to be, we collaborate with
            brands who know that a good design is not all about how it works,
            but also how it feels.
          </h1>
        </div>

        {/* Section 3: What We Do */}
        <div className="flex flex-col lg:flex-row items-start">
          <h1 className="w-full lg:w-[20%] text-lg 2xl:text-[1.7rem] mb-4 lg:mb-0">
            What We Do
          </h1>
          <div className="hidden lg:block w-[20%]"></div>
          <h1 className="w-full lg:w-[50%] text-lg 2xl:text-[1.7rem] leading-7 2xl:leading-8">
            We build brands and digital experiences that are intentional,
            functional, and felt. <br />
            Websites and interfaces designed to move with purpose, not distract
            attention. <br />
            Shaping how a brand looks, feels, and communicates across
            touchpoints.
          </h1>
        </div>

        {/* Section 4: Start A Conversation */}
        <div className="flex flex-col lg:flex-row items-start">
          <h1 className="w-full lg:w-[20%] text-lg 2xl:text-[1.7rem] mb-4 lg:mb-0">
            Start A Conversation
          </h1>
          <div className="hidden lg:block w-[20%]"></div>
          <h1 className="w-full lg:w-[50%] text-lg 2xl:text-[1.7rem] underline">
            connect@skadoosh.com ↗
          </h1>
        </div>

      </div>
    </>
  );
}

export default Details;
