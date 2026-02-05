import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { BufferAttribute, DoubleSide, MultiplyBlending } from 'three'

function Ink() {
  const pointsPos = useRef([])
  const geometry = useRef()
  const lerpRef = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })

  // FIX 1: Create a raw Float32Array (30 points * 2 sides * 3 coords = 180)
  const [posArray] = useState(() => new Float32Array(180))

  // FIX 2: Correct Event Listener
  useEffect(() => {

    if(window.innerWidth < 1024)
      {
        return;
      }

    const handleMousemove = (event) => {
      mouse.current.x = event.clientX - window.innerWidth / 2
      mouse.current.y = -(event.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', handleMousemove)
    return () => window.removeEventListener('mousemove', handleMousemove)
  }, [])

  // One-time Indexing
  useEffect(() => {
    const indices = []
    for (let i = 0; i < 30 - 1; i++) {
      const a = i * 2, b = i * 2 + 1, c = i * 2 + 2, d = i * 2 + 3
      indices.push(a, b, c, b, d, c)
    }
    geometry.current.setIndex(indices)
  }, [])

  useFrame(() => {
    // 1. Smooth the movement
    lerpRef.current.x += (mouse.current.x - lerpRef.current.x) * 0.15
    lerpRef.current.y += (mouse.current.y - lerpRef.current.y) * 0.15

    // 2. Add to history
    pointsPos.current.push({ xAxis: lerpRef.current.x, yAxis: lerpRef.current.y })
    if (pointsPos.current.length > 30) pointsPos.current.shift()
    if (pointsPos.current.length < 2) return

    // 3. Calculate Ribbon
    pointsPos.current.forEach((curr, i) => {
      const prev = pointsPos.current[i - 1] || curr
      const dx = curr.xAxis - prev.xAxis
      const dy = curr.yAxis - prev.yAxis

      const nx = -dy, ny = dx
      const dist = Math.sqrt(nx * nx + ny * ny) || 1
      
      const progress = i / pointsPos.current.length
      const width = Math.sin(progress * Math.PI) * 10 // Increased width to 15px

      const lX = curr.xAxis + (nx / dist) * width
      const lY = curr.yAxis + (ny / dist) * width
      const rX = curr.xAxis - (nx / dist) * width
      const rY = curr.yAxis - (ny / dist) * width

      // FIX 3: Fill the raw Float32Array
      const base = i * 6
      posArray[base] = lX
      posArray[base + 1] = lY
      posArray[base + 2] = 0
      posArray[base + 3] = rX
      posArray[base + 4] = rY
      posArray[base + 5] = 0
    })

    if (geometry.current) {
      geometry.current.attributes.position.needsUpdate = true
    }
  })

  return (
    <mesh>
      <bufferGeometry ref={geometry}>
        <bufferAttribute 
          attach="attributes-position" 
          count={posArray.length / 3} 
          array={posArray} 
          itemSize={3} 
        />
      </bufferGeometry>
      <meshBasicMaterial 
        color="red" 
        side={DoubleSide} 
        transparent 
        depthTest={false} 
      />
    </mesh>
  )
}

export default Ink