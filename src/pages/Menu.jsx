import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lottie from "lottie-react";
import iconUrl from "/Skadoosh/5-feb-2026/public/media/menu-icon.json";
import { useLenis } from "lenis/react";

function Menu({ sections }) {
  const lenis = useLenis();


  const centerRef = useRef(null);
  const audioRef = useRef(null);
  const hoverAudioRef = useRef();
  const menuRef = useRef(null);
  const lottieRef = useRef();
  
  const [menuOpen, setMenuOpen] = useState(false)

  // PERFORMANCE FIX: Use useRef instead of useState to avoid re-renders during animation
  const isMenuOpen = useRef(false);

  // --- INITIAL SETUP ---
  useEffect(() => {
    if (menuRef.current) {
      gsap.set(menuRef.current, {
        clipPath: "circle(0% at 95% 5%)",
        display: "flex", // Ensure it's visible to the DOM but clipped
      });
    }
  }, []);

  const scrollTo = (ref) => {
    if (!ref?.current) return;

    // Close Menu Logic
    gsap.to(menuRef.current, {
      clipPath: "circle(0% at 95% 5%)",
      duration: 0.8, // Slightly faster for snappier feel
      ease: "power4.in",
      pointerEvents: "none",
    });

    isMenuOpen.current = false; // Update ref
    lottieRef.current.playSegments([20, 28.5], true);

    lenis.scrollTo(ref.current, {
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
  };

  const handleToggle = () => {
    // Audio
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }

    if (!isMenuOpen.current) {
      // --- OPEN ---
      lottieRef.current.playSegments([0, 20], true);

      gsap.to(menuRef.current, {
        clipPath: "circle(150% at 95% 5%)",
        duration: 1.2, // 1.8 is too slow, 1.2 is smooth
        ease: "power4.out",
        pointerEvents: "auto",
      });

      setMenuOpen(true)

      isMenuOpen.current = true;
    } else {
      // --- CLOSE ---
      lottieRef.current.playSegments([20, 28.5], true);

      gsap.to(menuRef.current, {
        clipPath: "circle(0% at 95% 5%)",
        duration: 0.8,
        ease: "power4.in",
        pointerEvents: "none",
      });

      isMenuOpen.current = false;
      setMenuOpen(false)
    }
  };

  // --- HOVER ANIMATIONS ---
  // Kept mostly the same, just optimized selectors
  const showRoman = (text) => {
    if (window.innerWidth < 1024) return;
    // Using quickSetter or just set is fine here
    gsap.set(centerRef.current, {
      textContent: text,
      opacity: 1,
      scale: 1,
    });
  };

  const handleMouseEnter = (e, text) => {
    if (window.innerWidth < 1024) return;
    showRoman(text);

    if (hoverAudioRef.current) {
      hoverAudioRef.current.pause();
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.volume = .8;
      hoverAudioRef.current.play();
    }

    const line = e.currentTarget.querySelector(".underline-bar");
    gsap.fromTo(
      line,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.4, ease: "power2.out" } // Slightly faster ease
    );
  };

  const handleMouseLeave = (e) => {
    const line = e.currentTarget.querySelector(".underline-bar");
    gsap.to(line, {
      scaleX: 0,
      transformOrigin: "right",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <>
     <div
  ref={lottieRef}
  onClick={handleToggle}
  className={`
    w-[3vw] h-[3vw]
    rounded-full
    p-1.5
    cursor-pointer
    fixed right-2 top-2
    z-[100]
    transition-colors duration-300
    ${menuOpen ? "bg-[#fafafa]" : "backdrop-blur-xs"}
  `}
>

        <Lottie
          lottieRef={lottieRef}
          animationData={iconUrl}
          loop={false}
          autoplay={false}
        />
        <audio src="/sound/transition.wav" ref={audioRef} />
      </div>

      {/* ADDED: will-change-transform 
         This tells the browser to put this layer on the GPU 
      */}
      <div
        ref={menuRef}
        style={{ willChange: "clip-path" }} 
        className="w-full fixed top-0 left-0 bg-[#010101] z-40 font-['Futura_Std'] gap-[2vh] lg:flex-row lg:items-center lg:justify-between font-medium text-[#fafafa] h-screen flex flex-col px-10 pt-20 items-start pointer-events-none clip-circle-0"
      >
        {/* CENTER ROMAN */}
        <div className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p
            ref={centerRef}
            className="text-red-500 text-[50vw] leading-none opacity-0 scale-90 will-change-transform"
          >
            I
          </p>
        </div>

        <audio src="/sound/hover.mp3" ref={hoverAudioRef} />

        {/* --- MENU ITEMS --- */}
        {/* Added 'will-change-transform' to the underline bars for smoother hover */}
        
        <div
          onClick={() => scrollTo(sections.index)}
          onMouseEnter={(e) => handleMouseEnter(e, "I")}
          onMouseLeave={handleMouseLeave}
          className="flex items-start relative xs:gap-[1vw] cursor-pointer group"
        >
          <span className="text-[clamp(1rem,4vw,1.5rem)] lg:text-[1rem] relative -top-0.5 text-red-500 self-start">
            I
          </span>
          <div className="relative flex flex-col">
            <p className="label text-[clamp(3rem,5vw,5rem)] lg:text-[clamp(2rem,2.5vw,3rem)] leading-none">
              Index
            </p>
            <span className="underline-bar h-[3px] w-full bg-[#fafafa] absolute -bottom-1 left-0 scale-x-0 origin-left will-change-transform"></span>
          </div>
        </div>

        <div
          onClick={() => scrollTo(sections.work)}
          onMouseEnter={(e) => handleMouseEnter(e, "II")}
          onMouseLeave={handleMouseLeave}
          className="flex items-start relative xs:gap-[1vw] cursor-pointer group"
        >
          <span className="text-[clamp(1rem,4vw,1.5rem)] lg:text-[1rem] relative -top-0.5 text-red-500 self-start">
            II
          </span>
          <div className="relative flex flex-col">
            <p className="label text-[clamp(3rem,5vw,5rem)] lg:text-[clamp(2rem,2.5vw,3rem)] leading-none">
              Work
            </p>
            <span className="underline-bar h-[3px] w-full bg-[#fafafa] absolute -bottom-1 left-0 scale-x-0 origin-left will-change-transform"></span>
          </div>
        </div>

        <div
          onClick={() => scrollTo(sections.contact)}
          onMouseEnter={(e) => handleMouseEnter(e, "III")}
          onMouseLeave={handleMouseLeave}
          className="flex items-start relative xs:gap-[1vw] cursor-pointer group"
        >
          <span className="text-[clamp(1rem,4vw,1.5rem)] lg:text-[1rem] relative -top-0.5 text-red-500 self-start">
            III
          </span>
          <div className="relative flex flex-col">
            <p className="label text-[clamp(3rem,5vw,5rem)] lg:text-[clamp(2rem,2.5vw,3rem)] leading-none">
              Contact
            </p>
            <span className="underline-bar h-[3px] w-full bg-[#fafafa] absolute -bottom-1 left-0 scale-x-0 origin-left will-change-transform"></span>
          </div>
        </div>

        <div
          onClick={() => scrollTo(sections.about)}
          onMouseEnter={(e) => handleMouseEnter(e, "IV")}
          onMouseLeave={handleMouseLeave}
          className="flex items-start relative xs:gap-[1vw] cursor-pointer group"
        >
          <span className="text-[clamp(1rem,4vw,1.5rem)] lg:text-[1rem] relative -top-0.5 text-red-500 self-start">
            IV
          </span>
          <div className="relative flex flex-col">
            <p className="label text-[clamp(3rem,5vw,5rem)] lg:text-[clamp(2rem,2.5vw,3rem)] leading-none">
              About
            </p>
            <span className="underline-bar h-[3px] w-full bg-[#fafafa] absolute -bottom-1 left-0 scale-x-0 origin-left will-change-transform"></span>
          </div>
        </div>

        <div
          onMouseEnter={(e) => handleMouseEnter(e, "V")}
          onMouseLeave={handleMouseLeave}
          className="flex items-start relative xs:gap-[1vw] cursor-pointer group"
        >
          <span className="text-[clamp(1rem,4vw,1.5rem)] lg:text-[1rem] relative -top-0.5 text-red-500 self-start">
            V
          </span>
          <div className="relative flex flex-col">
            <p className="label text-[clamp(3rem,5vw,5rem)] lg:text-[clamp(2rem,2.5vw,3rem)] leading-none">
              Collaborate
            </p>
            <span className="underline-bar h-[3px] w-full bg-[#fafafa] absolute -bottom-1 left-0 scale-x-0 origin-left will-change-transform"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;