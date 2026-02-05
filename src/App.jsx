import React, { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import { ReactLenis } from "lenis/react";
import Philosphy from "./pages/Philosphy";
import Fotter from "./pages/Fotter";
import { Canvas } from "@react-three/fiber";
import Ink from "./addOns/Ink";
import StudioWorks from "./pages/StudioWorks";
import Details from "./pages/Details";
import Ambient from "./addOns/Ambient";
import BlackNoiseBackground from "./addOns/BlackNoiseBackground";
import VideoTexture from "./addOns/VideoTexture";
import { Suspense } from "react";
import Loader from "./addOns/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // FIX: Use useEffect to lock body scroll instead of a div class
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); // Ensure user is at top
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <ReactLenis
        root
        options={{
          lerp: 0.05,
          duration: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
          smoothWheel: true,
        }}
      >
        {/* Remove the conditional h-screen class logic from here */}
        <div className="w-full relative">
          
          <div className="w-full h-screen fixed z-10 pointer-events-none">
            <Canvas
              orthographic
              camera={{
                zoom: 1,
                position: [0, 0, 100],
                left: -window.innerWidth / 2,
                right: window.innerWidth / 2,
                top: window.innerHeight / 2,
                bottom: -window.innerHeight / 2,
              }}
              className="z-10"
              style={{ width: "100vw", height: "100vh" }}
            >
              <Ink />
              <Suspense fallback={null}>
                <VideoTexture />
              </Suspense>
            </Canvas>
          </div>

          <BlackNoiseBackground opacity={0.3} fullScreen={true} />
          
          <Ambient muteAll={isLoading} />
          
          <Landing />
          <Philosphy />
          <Details />
          <StudioWorks />
          <Fotter />
        </div>
      </ReactLenis>
    </>
  );
}

export default App;