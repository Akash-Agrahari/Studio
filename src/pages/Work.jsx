import React, { useEffect, useRef } from 'react'
import BlackNoiseBackground from '../addOns/BlackNoiseBackground'

function Work() {

    const screeRef = useRef(null)

    const mouse = useRef({ x: 0, y: 0 })
    const pos = useRef({ x: 0, y: 0 })
    const MaxX = window.innerWidth * 0.5
    const MaxY = window.innerHeight * 0.5


    const clamp = (value, min, max) => {
        return Math.min(Math.max(value, min), max)

    }

    useEffect(() => {

        const div = document.querySelector('.grid-div')

        const mouseMove = (e) => {

            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1

        }

        div.addEventListener('mousemove', mouseMove)

        const animate = () => {
            pos.current.x += - (mouse.current.x) * 1.5
            pos.current.y += mouse.current.y * 1.5

            pos.current.x = clamp(pos.current.x, -MaxX, MaxX)
            pos.current.y = clamp(pos.current.y, -MaxY, MaxY)

            if (screeRef.current) {
                screeRef.current.style.transform = `translate(calc(-50% + ${pos.current.x}px), calc(-50% + ${pos.current.y}px))`
            }

            requestAnimationFrame(animate)

        }

        animate()


        return () => div.removeEventListener('mousemove', mouseMove)

    }, [])


    return (
        <div className='bg-white text-[#222222] overflow-hidden relative w-screen font-["futura_std"] h-screen'>

            {/* <BlackNoiseBackground fullScreen={false} opacity={1} /> */}

            <div className='  flex flex-col items-start gap-2  absolute px-5 pt-10 left-0  z-10' >
                <h1 className='  text-2xl  font-medium' >Studio Works</h1>
                {/* <h1 className='  text-xl  font-medium' >Counts: 4</h1> */}
            </div>
            <div
                ref={screeRef}
                className="grid-div w-[200vw] bg-white  absolute left-1/2 top-1/2 h-[200vh]"
                style={{
                    transform: 'translate(-50%, -50%)',
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.2) 1px, transparent 1px) `,
                    backgroundSize: '80px 80px'
                }}
            >
                <div
                    className="absolute text-white flex  items-start transition-all ease-out 1s  cursor-pointer hover:scale-110  "
                    style={{ left: '30%', top: '40%', }}
                >
                    <h1 className=' font-["futura_std"] text-[#222222]    -top-4 absolute font-bold text-2xl ' >1</h1>
                    <img src='/Prada-bag.svg' className='w-30  ' />
                </div>
                <div
                    className="absolute text-white flex  items-start transition-all ease-out 1s  cursor-pointer hover:scale-110  "
                    style={{ left: '50%', top: '20%', }}
                >
                    <h1 className=' font-["futura_std"] text-[#222222]    -top-4 absolute font-bold text-2xl ' >4</h1>
                    <img src='/Prada-stoking.svg' className='w-30  ' />
                </div>
                <div
                    className="absolute text-white flex  items-start transition-all ease-out 1s  cursor-pointer hover:scale-110  "
                    style={{ left: '10%', top: '34%', }}
                >
                    <h1 className=' font-["futura_std"] text-[#222222]    -top-4 absolute font-bold text-2xl ' >3</h1>
                    <img src='/Prada-bag-2.svg' className='w-30  ' />
                </div>
                <div
                    className="absolute text-white flex  items-start transition-all ease-out 1s  cursor-pointer hover:scale-110  "
                    style={{ left: '68%', top: '60%', }}
                >
                    <h1 className=' font-["futura_std"] text-[#222222]    -top-4 absolute font-bold text-2xl ' >2</h1>
                    <img src='/Prada-black.svg' className='w-30  ' />
                </div>

            </div>
        </div>
    )
}

export default Work