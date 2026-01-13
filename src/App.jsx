import React, { useRef } from 'react'
import Landing from './pages/Landing'
import Menu from './pages/Menu'
import About from './pages/About'
import JoinUs from './pages/Joinus'
import { ReactLenis } from 'lenis/react' // Notice the new import path
import Skadoosh from './pages/Skadoosh'
import Philosphy from './pages/Philosphy'
import Work from './pages/Work'
import HowWeWork from './pages/HowWeWork'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Hero from './pages/Hero'
import BranchBack from './pages/BranchBack'
import LiquidCursor from './addOns/LiquidCursor'

function App() {



  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05, duration: 2., easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical', gestureOrientation: 'vertical', wheelMultiplier: 1, touchMultiplier: 2,
        infinite: false, smoothWheel: true
      }}
    >


      {/* <Canvas onCreated={(state) => {}} style={{height: '100vh', width: '100vw' }} className=''> */}


      {/* <LiquidCursor /> */}

      {/* <Environment preset="city" /> */}


      {/* <BranchBack /> */}
      {/* <ContactShadows opacity={0.4} scale={10} blur={2} far={4.5} /> */}
      {/* <ambientLight color={'brown'} intensity={2} /> */}
      {/* <OrbitControls enableDamping /> */}

      {/* <EffectComposer> */}
      {/* <Bloom intensity={1}  /> */}
      {/* </EffectComposer> */}
      {/* <Hero /> */}

      {/* </Canvas> */}



      <Menu />
      <Landing />
      <Skadoosh />
      <Philosphy />
      <Work />
      <HowWeWork />
      {/* <About /> */}
      {/* <JoinUs /> */}
    </ReactLenis>

  )
}

export default App