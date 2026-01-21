import React from 'react'
import BlackNoiseBackground from '../addOns/BlackNoiseBackground'


function Philosphy() {
    return (
        <>
            <div className='w-full mt-10 h-screen  relative' >
                {/* <BlackNoiseBackground opacity={.5} fullScreen={false} /> */}
                <h1 className=' font-bold -rotate-90 text-[#222222] text-xs absolute font-["Futura_std"]  bottom-30 -left-12 ' >26°27′00″N 80°19′55″E </h1>

                <div className='grid relative gap-15 text-[#222222] grid-row-2 px-5 font-["Futura_std"] pt-5' >
                    <div className='absolute -rotate-90 flex items-center -right-18 top-1/2' >
                        <h1 className=' font-bold text-xs' >ESTD.2026</h1>
                        <div className='w-20' ></div>
                        <h1 className=' text-2xl  font-bold ' >痴迷</h1>
                    </div>
                    <div className='flex row-1 w-full items-start relative  gap-50 ' >
                        <h1 className=' flex  flex-col font-medium text-8xl' >SKADOOSH <br /> STUDIO <span className='text-3xl font-bold' >啪嗒 </span></h1>
                        <div className='flex gap-2 items-start absolute right-38.5 -bottom-10 justify-self-center self-center justify-center' >
                            <p className='flex text-right font-medium text-xl' >An<br />Independent<br />Creative Agency</p>
                            <img src='/Prada-bag-cut.svg' width={300} className='grayscale-100' />
                        </div>
                    </div>
                    <div className='row-2 flex w-full items-start' >
                        <div className='w-30'></div>
                        <h1 className='font-medium text-8xl flex gap-77.5 items-end ' >It Starts <br />With <span>An</span></h1>
                        <div className='w-5'></div>
                        <div className='relative flex flex-col' >
                            <img src='/Prada-bag-cut-2.svg' width={300} />
                            <div className='flex absolute -bottom-25 -left-70 items-center justify-center gap-10' >
                                <div className='bg-[#222222] h-1 w-40' ></div>
                                <h1 className=' font-medium text-8xl flex gap-82.5 items-end text-[#cacaca]' >Obsession</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

               <div className='w-full h-screen ' >
            
                    <div className='w-full px-10 pt-20 gap-5 flex-col text-[#222222] font-["Futura_std"] flex h-full'>
            
                      <div className='flex  items-start  '   >
            
                        <h1 className='w-[20%] text-lg' >Who We Are</h1>
                        <h1 className='w-[20%] text-lg ' >EN</h1>
            
                        <h1 className='w-[50%] text-lg leading-7' >Skadoosh Studio, we are an independent creative studio, started in 2026 based in Kanpur India.</h1>
            
                      </div>
            
                      <div className='flex items-start ' >
                        <h1 className='w-[20%] text-lg'  >How It Started</h1>
                        <h1 className='w-[20%] text-lg'  >2026</h1>
            
                        <h1 className=' text-lg w-[50%] flex leading-7 flex-col gap-5 ' >It starts with an Obsession, to make things look as beautiful as it works.
                          We blend the perfection of function with elegance so it feels divine, this is what skadoosh is meant to be, we collaborate with brands who know that a good design is not all about how it works, but also how it feels.
                          <span>As we all know we buy what we see.</span>
                        </h1>
                      </div>
                      <div className='flex  items-start ' >
                        <h1 className='w-[20%] text-lg'  >What We Do</h1>
                        <div className='w-[20%]'  ></div>
                        <h1 className='w-[50%] text-lg leading-7' >We build brands and digital experiences that are intentional, functional, and felt. <br />
                          Websites and interfaces designed to move with purpose, not distract attention. <br />
                          Shaping how a brand looks, feels, and communicates across touchpoints.</h1>
                      </div>
                      <div className='flex  items-start ' >
                        <h1 className='w-[20%] text-lg'  >Start A Conversation</h1>
                        <div className='w-[20%]'  ></div>
                        <h1 className='text-lg w-[50%] underline ' >connect@skadoosh.com</h1>
                      </div>
                    </div>
                  </div>

        </>
    )
}

export default Philosphy