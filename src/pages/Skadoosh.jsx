import { motion, useTransform, useScroll, transform } from 'framer-motion'
import React, { useRef } from 'react'
import BlackNoiseBackground from '../addOns/BlackNoiseBackground'


function Skadoosh() {

    const scrollRef = useRef()
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start start', 'end end']
    })



    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'], { clamp: true })

    return (
        <>
            <div ref={scrollRef} className='w-full h-[300vh] relative bg-[#000]' >

                <BlackNoiseBackground fullScreen={false} opacity={1.} />

                <div className='flex w-full h-screen  sticky top-0 gap-96 items-center overflow-hidden' >
                    <audio preload='auto' src='/bgm.mp3' />
                    <div></div>
                    <motion.h1 style={{ x }} className=' font-["Futura std"] select-none text-white text-[25rem] font-black' >SKADOOOOH</motion.h1>
                </div>

            </div>

        </>
    )
}

export default Skadoosh