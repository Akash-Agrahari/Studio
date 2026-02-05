import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const highlightRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    // Step 1: Grow highlight
    // Note: Duration 5s bahut lamba hai, maine 2.5s kar diya hai for better UX
    tl.fromTo(
      highlightRef.current,
      { scaleX: 0, opacity: 1 },
      { scaleX: 1, duration: 2.5 }, 
      "+=0.5"
    );

    // Step 2: Fade out screen
    tl.to(containerRef.current, { opacity: 0, duration: 0.5 }, "+=0.2");

    // Step 3: Complete
    tl.call(() => {
      if (onComplete) onComplete();
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Base Line (Grey) - Responsive Width: 70% mobile, 20% desktop */}
      <div className="absolute h-[2px] w-[70%] md:w-[20%] bg-white/20" />
      
      {/* Highlight Line (White) - Same Responsive Width */}
      <div
        ref={highlightRef}
        className="absolute h-[2px] w-[70%] md:w-[20%] bg-white origin-center scale-x-0"
      />
    </div>
  );
}