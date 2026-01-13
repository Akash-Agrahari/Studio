import { useTexture } from '@react-three/drei'
import React, { useEffect, useMemo, useRef } from 'react'
import { MathUtils, MeshBasicMaterial, MeshPhysicalMaterial, RepeatWrapping, Vector2 } from 'three'
import fragmentShader from '../shaders/branch-Bg-Fragment.glsl'
import vertexShader from '../shaders/branch-Bg-Vertex.glsl'
import { useFrame } from '@react-three/fiber'
import CustomShaderMaterial from 'three-custom-shader-material'




function BranchBack() {

    const [texture, pattern] = useTexture(['/texture/bg-8.jpg', '/texture/tech-pattern.png'])

    const uniforms = useMemo(() => ({
        uTime: { value: 0. },
        uTexture: { value: texture },
        uPattern: { value: pattern },
        uMouse: { value: new Vector2() },
        uIntensity: { value: 0. }

    }), [texture, pattern])

    let prevMouse = useRef(new Vector2(0, 0))
    const meshRef = useRef()

    const onMouseMove = (e) => {

        if (e.uv) {
            uniforms.uMouse.value.set(e.uv.x, e.uv.y)

            const dist = e.uv.distanceTo(prevMouse.current)

            uniforms.uIntensity.value = Math.min(dist * 60, 1.2)

            prevMouse.current.copy(e.uv)
        }

    }

    useFrame((state) => {
        uniforms.uTime.value = state.clock.getElapsedTime()

        uniforms.uIntensity.value = MathUtils.lerp(
            uniforms.uIntensity.value,
            0,
            0.03
        )
    })

    pattern.wrapS = pattern.wrapT = RepeatWrapping

    return (
        <group>
            <directionalLight color={'white'} intensity={8.}  />
            <mesh ref={meshRef} position={[0,0,0]} rotation={[0.,0,0]} onPointerMove={onMouseMove} >
                <planeGeometry args={[12, 7]} />
                <CustomShaderMaterial
                    ref={meshRef}
                    baseMaterial={MeshBasicMaterial}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={uniforms}
                />
            </mesh>
        </group>
    )
}

export default BranchBack