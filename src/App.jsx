import Landing from "./pages/Landing";
import { ReactLenis } from "lenis/react"; // Notice the new import path
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

function App() {
  return (
    <>
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
        <div className="w-full h-screen fixed z-10">
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
        <Ambient />
        <Landing />
        <Philosphy />
        <Details />
        <StudioWorks />
        <Fotter />
        {/* <JoinUs /> */}
      </ReactLenis>
    </>
  );
}

export default App;
