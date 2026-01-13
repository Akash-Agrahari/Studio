import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

function JoinUs() {

    const ashRef = useRef()

    useEffect(()=>{

        if(!ashRef.current) return

        gsap.to(ashRef.current,
            {
                rotation: 360,
                duration : 8,
                repeat : -1,
                ease: 'none'
            })
    },[])

    return (
        <div className='main-JoinUs overflow-hidden bg-[#FAFAFA] h-screen w-full'>

            <div className='first w-full px-10 borer-[#212721] border-b flex items-center justify-between  ' >

                <div style={{ fontFamily: 'PlayFair Display', fontStyle: 'italic' }} 
                className=' w-[65%] flex items-center gap-7 ' >
                    <h1 className='text-[80px]  text-[#212721]' >Re</h1>
                    <div className='w-96 h-px bg-[#212721]' ></div>
                    <h1 className='text-[#212721] text-[80px]' >Imagine</h1>
                </div>

                <div className='flex border-l w-[35%] border-[#212721] items-center justify-between  pt-5 ' >

                    <div style={{ fontFamily: 'chivo mono' }} className=' px-5 text-[#212721]' >
                        <p>We Love to Collaborate</p>
                        <p>Tell us Your Why?</p>
                    </div>

                    <img className='select-none' width={100} src='/Prada-black.svg' />

                </div>

            </div>

            <div className='px-10 relative second flex border-b borer-[#212721] items-stretch ' >
                
                <div className='relative w-[65%]' >
                    <div class=" absolute -left-10 w-24 border-2 h-48 rounded-r-full border-l-0 border-[#212721]"></div>
                    <img src='/Prada-stoking.svg' className='select-none' width={128} />

                </div>

                <div style={{fontFamily:'Playfair display',fontStyle:'italic'}} className='relative flex w-[35%] border-l '>
                    <div className='flex flex-col absolute top-2 gap-0  -left-60  ' >
                    <h1 className='text-[80px] leading-20 relative -left-20  text-[#212721]' >The</h1>
                    <h1 className='text-[80px] leading-20  text-[#212721]' ><span style={{fontStyle:'normal'}} >Web</span>/Experience</h1>
                    </div>
                </div>

            </div>

            <div className='third px-10 flex w-full items-stretch justify-between  ' >
                
                <div className='flex justify-between w-[65%]  ' >
                    <div className='flex-col px-20 flex  justify-center gap-10' >

                        <div style={{ fontFamily: 'chivo mono' }} className='text-[#212721]' >
                            <p>26.4499° N, 80.3319° E </p>
                            <p>India :::::: Worldwide</p>
                        </div>

                        <div style={{ fontFamily: 'chivo mono' }} className='text-[#212721]' >
                            <p className='text-sm' >Founder :: Akash Agrahari</p>

                        </div>
                    </div>

                    <img className='border-l border-[#212721]'  src='/Prada-bag.svg' width={230} />

                </div>
              
                <div className=' flex flex-col  items-center justify-center   w-[35%] border-l' >
                    <h1  style={{fontFamily:'Playfair Display'}} className='text-8xl' >*</h1>
                    <div style={{ fontFamily: 'chivo mono' }} className=' flex flex-col gap-2  items-center text-[#212721]' >
                        <div >
                        <p className='text-sm' >If This Suits You</p>
                        <p className='text-sm' >You're Good To Go</p>
                        </div>
                        <p className='text-xl' >Skadoosh Studio</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default JoinUs