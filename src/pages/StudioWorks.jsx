import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function StudioWorks() {

    const sliderRef = useRef()
    const [activeIndex, setActiveIndex] = useState(1)
    const ITEM_WIDTH = 400
    const GAP = 280
    const TOTAL_WIDTH = ITEM_WIDTH + GAP
    const wheelRef = useRef()

   const handleButtonClick = (direction, element) => {

    const audio = new Audio('/sound/navigation-tap.wav');
    audio.currentTime = 0;
    audio.volume = 0.2;   
    audio.play();

    // 2. Trigger the navigation
    if (direction === 'next') {
        next();
    } else if (direction === "prev") {
        prev();
    }

    // 3. Physical "Push" effect for the whole wheel
    gsap.to(wheelRef.current, {
        scale: 0.97,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut"
    });

    // 4. Subtle highlight for the specific icon being clicked
    gsap.to(element, {
        opacity: 0.5,
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
    });
};

    const list = [{
        "first-h1": "Web Diary",
        "second-h1": "2026",
        "img": '/images/frame-6.png',
        "third-h1": "Branding, Design, Storytelling",
        "fourth-h1": "View Site"
    },
    {
        "first-h1": "Web Diary",
        "second-h1": "2026",
        "img": '/images/frame-5.webp',
        "third-h1": "Branding, Design, Storytelling",
        "fourth-h1": "View Site"

    },
    {
        "first-h1": "Web Diary",
        "second-h1": "2026",
        "img": '/images/frame-5.webp',
        "third-h1": "Branding, Design, Storytelling",
        "fourth-h1": "View Site"
    }
    ]


    const next = () => {
        setActiveIndex((i) => Math.min(i + 1, list.length - 1))
    }

    const prev = () => {
        setActiveIndex((i) => Math.max(i - 1, 0))
    }

    useEffect(() => {

        const centerOffset = ITEM_WIDTH / 2;
        const slidePosition = activeIndex * TOTAL_WIDTH;

        gsap.to(sliderRef.current, {
            xPercent: 50,
            x: -(centerOffset + slidePosition),
            duration: 1.2,
            ease: "expo.out",
            overwrite: "auto"
        });

        const items = sliderRef.current.children;
        Array.from(items).forEach((item, i) => {
            gsap.to(item, {
                scale: i === activeIndex ? 1 : .90,
                duration: 1,
                ease: "power2.out"
            });
        });

    }, [activeIndex, TOTAL_WIDTH]);

    return (
        <div className='w-full relative font-["Futura_std"]  h-screen ' >


            <div className="relative w-full pt-5 overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex items-center gap-70 transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(calc(50% - ${ITEM_WIDTH / 2}px - ${activeIndex * TOTAL_WIDTH}px))`
                    }}
                >
                    {list.map((item, i) => (
                        <div
                            key={i}
                            className="shrink-0 flex flex-col items-center gap-2"
                            style={{ width: ITEM_WIDTH }}
                        >
                            <div className='flex  items-center w-full justify-between' >
                                <h1>{item['first-h1']}</h1>
                                <h1>{item['second-h1']}</h1>
                            </div>

                            <img className='shadow-[5px_-5px_10px_1px_rgba(0,0,0,.20)]' src={item.img} width={400} />

                            <div className=' border-b pb-1 w-full  flex items-center justify-between' >
                                <h1>{item['third-h1']}</h1>
                                <h1>{item['fourth-h1']}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <div className='absolute select-none left-1/2 -translate-x-1/2 flex items-center justify-center bottom-5'>

                <div className='bg-[#111111]  shadow-[0_10px_30px_2px_rgba(0,0,0,.2)]  text-white relative rounded-full h-40 w-40' >
                    <p onClick={(e) => handleButtonClick('menu', e.target)} className='absolute  left-1/2 -translate-x-1/2 top-3 cursor-pointer' >Menu</p>
                    <p onClick={(e) => handleButtonClick('back', e.target)} className='absolute  left-1/2 -translate-x-1/2 bottom-3 cursor-pointer' >Back</p>
                    <img onClick={(e) => handleButtonClick('next', e.target)} src='/images/next.png' className='h-5 absolute  top-1/2 cursor-pointer -translate-y-1/2 right-3 ' />
                    <img onClick={(e) => handleButtonClick('prev', e.target)} src='/images/next.png' className='h-5 absolute  top-1/2 cursor-pointer -translate-y-1/2 rotate-180 left-3 ' />
                </div>
                
                <div className='bg-[#222222] border   shadow-[0_0px_30px_5px_rgba(0,0,0,.1)]  rounded-full h-18 w-18 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' ></div>

            </div>


            <div className='text-lg absolute bottom-2 px-5  flex items-center gap-50 justify-start w-1/2'>
                <p>Studio Works</p>
                <p className='text-red-500' >0{activeIndex + 1}</p>
            </div>

        </div>
    )
}

export default StudioWorks
