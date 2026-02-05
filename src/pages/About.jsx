import React from 'react'
import BlackNoiseBackground from '../addOns/BlackNoiseBackground'

function About() {
    return (
        <div className='w-full h-screen overflow-x-hidden' >
            <div className='first bg-[#ffffff] relative flex justify-center gap-120 items-center overflow-y-clip w-full h-[150vh] ' >

                {/* <BlackNoiseBackground opacity={1.} fullScreen={false} /> */}
                <div className='flex relative items-center justify-center ' >
                    <h1 className=' select-none text-[#212721] absolute  text-[25rem] mt-30 rotate-90 font-bold' style={{ fontFamily: 'futura std' }} >OOS</h1>
                    <div className='strips  bg-[#14AFC7] mt-70 ml-40 absolute w-16 h-180 -rotate-6' ></div>
                </div>

                <div className='flex  items-center  relative justify-center ' >
                    <h1 className=' select-none text-[#212721]  absolute text-[25rem] mt-30 rotate-90 font-bold' style={{ fontFamily: 'futura std' }} >SKA</h1>
                    <div className='strips  bg-[#14AFC7] mt-56 mr-20 absolute w-16 h-200 -rotate-10' ></div>
                </div>
            </div>
        </div>
    )
}

export default About