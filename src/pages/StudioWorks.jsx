import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function StudioWorks() {
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const wheelRef = useRef();
  const [ready, setReady] = useState(false);

  const handleButtonClick = (direction, element) => {
    const audio = new Audio("/sound/navigation-tap.wav");
    audio.currentTime = 0;
    audio.volume = 0.2;
    audio.play();

    // 2. Trigger the navigation
    if (direction === "next") {
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
      ease: "power1.inOut",
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

  const list = [
    {
      "first-h1": "Web Diary",
      "second-h1": "2026",
      img: "/media/frame-6.webp",
      "third-h1": "Branding, Design, Storytelling",
      "fourth-h1": "View Site",
    },
    {
      "first-h1": "Web Diary",
      "second-h1": "2026",
      img: "/media/frame-5.webp",
      "third-h1": "Branding, Design, Storytelling",
      "fourth-h1": "View Site",
    },
    {
      "first-h1": "Web Diary",
      "second-h1": "2026",
      img: "/media/frame-6.webp",
      "third-h1": "Branding, Design, Storytelling",
      "fourth-h1": "View Site",
    },
  ];

  const next = () => {
    setActiveIndex((i) => Math.min(i + 1, list.length - 1));
  };

  const prev = () => {
    setActiveIndex((i) => Math.max(i - 1, 0));
  };

  const getGap = () => {
    if (itemRefs.current.length < 2) return 0;

    const first = itemRefs.current[0].getBoundingClientRect();
    const second = itemRefs.current[1].getBoundingClientRect();

    return second.left - first.right;
  };

  useEffect(() => {
    if (!ready) return;

    const widths = itemRefs.current.map((el) => el.offsetWidth);

    const centerOffset = widths[activeIndex] / 2;

    const gap = getGap();

    const slidePosition = widths
      .slice(0, activeIndex)
      .reduce((sum, w) => sum + w + gap, 0);

    gsap.to(sliderRef.current, {
      xPercent: 50,
      x: -(centerOffset + slidePosition),
      duration: 1.2,
      ease: "expo.out",
      overwrite: "auto",
    });

    itemRefs.current.forEach((item, i) => {
      const inner = item.querySelector(".innner-slider");

      gsap.to(inner, {
        scale: i === activeIndex ? 1 : 0.9,
        duration: 1,
        ease: "power2.out",
      });
    });
  }, [activeIndex, ready]);

  return (
    <div className='w-full relative  fut-medium h-screen '>
      <div className="relative w-full pt-10 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex  items-center md:gap-[10vw] xl:gap-[25vw] lg:gap-[20vw] gap-5 transition-transform duration-500 ease-out"
        >
          {list.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="items-center "
            >
              <div className="innner-slider shrink-0 flex   flex-col items-center gap-2">
                <div className="flex text-[clamp(.7rem,3vw,1.5rem)] lg:text-[1rem]  2xl:text-[1.5rem]  items-center w-full justify-between">
                  <h2>{item["first-h1"]}</h2>
                  <h3>{item["second-h1"]}</h3>
                </div>

                <img
                  className="shadow-[5px_-5px_10px_1px_rgba(0,0,0,.20)] img-tex max-w-none w-auto md:h-[32vh] h-[25vh] lg:h-[35vh] "
                  src={item.img}
                  onLoad={() => setReady(true)}
                />

                <div className=" text-[clamp(.7rem,3vw,1.5rem)] lg:text-[1rem] 2xl:text-[1.5rem] border-b  pb-1 w-full flex items-center justify-between">
                  <h3>{item["third-h1"]}</h3>
                  <h3>{item["fourth-h1"]}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute select-none z-20 left-1/2 -translate-x-1/2 flex items-center justify-center bottom-1/10">
        <div className="bg-[#111111]  shadow-[0_10px_30px_2px_rgba(0,0,0,.2)]  text-white relative rounded-full lg:w-[15vw] lg:h-[15vw] h-[35vw] md:w-[30vw] md:h-[30vw] xl:h-[10vw] xl:w-[10vw]  w-[35vw]">
          <p
            onClick={(e) => handleButtonClick("menu", e.target)}
            className="absolute text-[clamp(.7rem,3.5vw,2rem)] lg:text-[1rem] 2xl:text-[1.2rem] left-1/2 lg:top-[1vw] -translate-x-1/2 top-[2vw] cursor-pointer"
          >
            View
          </p>
          <p
            onClick={(e) => handleButtonClick("back", e.target)}
            className="absolute text-[clamp(.7rem,3.5vw,2rem)] lg:text-[1rem] 2xl:text-[1.2rem] left-1/2 lg:bottom-[1vw] -translate-x-1/2 bottom-[2vw] cursor-pointer"
          >
            Back
          </p>
          <img
            onClick={(e) => handleButtonClick("next", e.target)}
            src="/media/next.png"
            className="h-[2.5vh] lg:h-[2.5vh]  md:h-[3vh] absolute  top-1/2 cursor-pointer -translate-y-1/2 lg:right-[1vw] right-[2vw] "
          />
          <img
            onClick={(e) => handleButtonClick("prev", e.target)}
            src="/media/next.png"
            className="h-[2.5vh] lg:h-[2.5vh] md:h-[3vh]  absolute  top-1/2 cursor-pointer -translate-y-1/2 lg:left-[1vw] rotate-180 left-[2vw] "
          />
        </div>

        <div className="bg-[#222222] border   shadow-[0_0px_30px_5px_rgba(0,0,0,.1)]  rounded-full h-[15vw] md:w-[12vw] lg:w-[7vw] lg:h-[7vw] xl:w-[4vw] xl:h-[4vw] md:h-[12vw] w-[15vw] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="text-[clamp(.9rem,2.5vw,10rem)] 2xl:text-[1.5rem] xl:text-[1rem] lg:bottom-5 absolute bottom-1/12 px-5  flex items-center -z-1  justify-between w-full">
        <h1>Studio Works</h1>
        <p className="text-red-500">0{activeIndex + 1}</p>
      </div>
    </div>
  );
}

export default StudioWorks;
