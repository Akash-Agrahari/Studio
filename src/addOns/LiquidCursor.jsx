import { MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react'

function LiquidCursor() {

    const pointsRef = useRef()

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        const X = (state.mouse.x * state.viewport.width) / 2
        const Y = (state.mouse.y * state.viewport.height) / 2
    
        const smoothNess = 0.1;

        const currX = pointsRef.current.position.x
        const currY = pointsRef.current.position.y

        pointsRef.current.position.x += (X - currX) * smoothNess;
        pointsRef.current.position.y += (Y - currY) * smoothNess;
    })

    return (
        <>
            <mesh ref={pointsRef} >
                <circleGeometry args={[.12, 10]} />
                <meshBasicMaterial color={'red'} />
            </mesh>
        </>
    )
}

export default LiquidCursor