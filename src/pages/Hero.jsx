import { Instances, Instance, useGLTF, useHelper, useTexture } from '@react-three/drei'
import React, { useLayoutEffect, useMemo, useRef } from 'react'
import { Mesh, MeshBasicMaterial, MeshPhysicalMaterial } from 'three'
import CustomShaderMaterial from 'three-custom-shader-material'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import vertex from '../shaders/branch/vertex.glsl'
import liveVertex from '../shaders/branch/Live/vertex.glsl'
import liveFragment from '../shaders/branch/Live/fragment.glsl'
import fragment from '../shaders/branch/fragment.glsl'



function Hero() {

    const dry = useTexture({
        normal: '/texture/dry-normal.jpg',
        map: '/texture/dry-diffuse.jpg',
        rough: '/texture/dry-rough.jpg',
        ao: '/texture/dry-ao.jpg',
    })

    dry.map.colorSpace = THREE.SRGBColorSpace
    dry.map.flipY = false
    dry.map.needsUpdate = true
    dry.map.encoding = THREE.sRGBEncoding;

    dry.normal.flipY = false
    dry.normal.colorSpace = THREE.NoColorSpace

    // Optimize textures for realism
    Object.values(dry).forEach(texture => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        texture.anisotropy = 16 // Sharper textures at glancing angles
    })

    const live = useTexture({
        normal: '/texture/live-normal.jpg',
        displacement: '/texture/live-displacement.jpg',
        distort: '/texture/tech-pattern.png',
        rough: '/texture/live-rough.jpg',
        map: '/texture/live-color.jpg',
        ao: '/texture/live-Ambient.jpg',
    })

    Object.values(live).forEach(texture => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        texture.anisotropy = 16 // Sharper textures at glancing angles
    })

    live.distort.wrapS = live.distort.wrapT = THREE.RepeatWrapping



    const { nodes: branchNodes } = useGLTF('/model/branch-1.glb')

    const { nodes: ivyNodes } = useGLTF('/model/ivy-new.glb')

    const { nodes: flowerNodes } = useGLTF('/model/flower.glb')

    const mesh = useMemo(() => { return Object.values(branchNodes).find((n => n instanceof Mesh)) }, [branchNodes])



    // const flowermesh = useMemo(() => { return Object.values(flowerNodes).find((n => n instanceof Mesh)) }, [flowerNodes])

    const ivyMesh = useMemo(() => { return Object.values(ivyNodes).find((n => n instanceof Mesh)) }, [ivyNodes])

    const ivyRef = useRef()
    const stemRef = useRef()
    const petalsRef = useRef()
    const centerRef = useRef()
    const groupRef = useRef()
    const liveGroupRef = useRef()

    useFrame((state) => {

        branchUniforms.uTime.value = state.clock.getElapsedTime();

        if (!groupRef.current) return

        const targetX = (state.mouse.y * 0.02)
        const targetY = -(state.mouse.x * 0.02)

        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x, targetX, 0.03
        )

        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y, targetY, 0.03
        )

    })


    const flowerParts = useMemo(() => {
        return {
            // Adjust these strings if your console shows different names!
            stem: Object.values(flowerNodes).find(n => n.name.includes('green')),
            petals: Object.values(flowerNodes).find(n => n.name.includes('white')),
            center: Object.values(flowerNodes).find(n => n.name.includes('yellow'))
        }
    }, [flowerNodes])

    useLayoutEffect(() => {
        if (!ivyRef.current || !stemRef.current) return

        const ivyTemp = new THREE.Object3D()
        const flowerTemp = new THREE.Object3D()


        const ivyData = [
            { pos: [-1.2, -0, 3.95], rot: [0, 0, 1.5] },
            { pos: [0, -.1, 4.], rot: [2.2, 0, 1.5] },
            { pos: [.8, -.1, 4.], rot: [1, 0, 1.5] }
        ]

        const flowerData = [
            { pos: [0, -.15, 3.95], rot: [-7., 0, 0], scale: .1 },
            { pos: [-1, -.05, 3.9], rot: [-1., .5, 0], scale: .11 },
            { pos: [.8, .01, 4.], rot: [-7., 0, 0], scale: .08 },
            { pos: [-.5, -.1, 4.], rot: [0.2, 1., 0], scale: .08 }
        ]

        flowerData.forEach((item, i) => {
            flowerTemp.position.set(...item.pos)
            flowerTemp.rotation.set(...item.rot)
            flowerTemp.scale.setScalar(item.scale)
            flowerTemp.updateMatrix()

            // Apply the same matrix to ALL parts of the flower
            stemRef.current.setMatrixAt(i, flowerTemp.matrix)
            petalsRef.current.setMatrixAt(i, flowerTemp.matrix)
            centerRef.current.setMatrixAt(i, flowerTemp.matrix)
        })

        stemRef.current.instanceMatrix.needsUpdate = true
        petalsRef.current.instanceMatrix.needsUpdate = true
        centerRef.current.instanceMatrix.needsUpdate = true


        ivyData.forEach((item, i) => {
            ivyTemp.position.set(...item.pos)
            ivyTemp.rotation.set(...item.rot)
            ivyTemp.updateMatrix()

            ivyRef.current.setMatrixAt(i, ivyTemp.matrix)
        })

        ivyRef.current.instanceMatrix.needsUpdate = true

    }, [])

    const branchUniforms = useMemo(() => ({

        uMouseMove: { value: new THREE.Vector3(100, 100, 100) },

        uDryMap: { value: dry.map },
        uDryNormal: { value: dry.normal },
        uDryRough: { value: dry.rough },
        uDryAo: { value: dry.ao },

        uTime: { value: 0 },
        uHover: { value: .0 },
        uNormalScale: { value: new THREE.Vector2(1, 1) },

        uLiveDistort: { value: live.distort },
        uLiveMap: { value: live.map },
        uLiveNormal: { value: live.normal },
        uLiveRough: { value: live.rough },
        uLiveAo: { value: live.ao },
        uLiveDisplacement: { value: live.displacement },
    })
    )

    const handleMouseMove = (e) => {
        branchUniforms.uMouseMove.value.copy(e.point)
        branchUniforms.uHover.value = 1.;
    }

    const handleMouseOut = (e) => {
        branchUniforms.uMouseMove.value.set(100, 100, 100)
        branchUniforms.uHover.value = 0.;
    }

    const flatNormal = new THREE.DataTexture(
        new Uint8Array([128, 128, 255, 255]),
        1,
        1,
        THREE.RGBAFormat
    )
    flatNormal.needsUpdate = true

    return (
        <group ref={groupRef}   >

          

            <group ref={liveGroupRef} >
                <mesh
                    onPointerMove={handleMouseMove}
                    onPointerOut={handleMouseOut}
                    geometry={mesh.geometry}
                    scale={1}
                    position={[-.8, 0, 3.9]}
                    rotation={[0, 3, 0]}
                    castShadow
                    receiveShadow
                >
                    <CustomShaderMaterial
                        baseMaterial={MeshPhysicalMaterial}
                        map={live.map}
                        normalMap={live.normal}
                        roughnessMap={live.rough}
                        aoMap={live.ao}
                        aoMapIntensity={3}
                        vertexShader={liveVertex}
                        fragmentShader={liveFragment}
                        uniforms={branchUniforms}

                        // Organic settings
                        roughness={1.}
                        metalness={0}
                        reflectivity={.1}

                        // Clearcoat adds that "wet/moist" look
                        clearcoat={0.3}
                        clearcoatRoughness={0.4}

                        // Sheen helps simulate the fuzzy look of moss
                        sheen={3.}
                        sheenRoughness={1.}
                        sheenColor={new THREE.Color('#4a5d23')}
                    />
                </mesh>


                {ivyMesh && (
                    <instancedMesh ref={ivyRef} args={[ivyMesh.geometry, null, 3]} castShadow>
                        <meshPhysicalMaterial
                            transparent={true}
                            alphaTest={0.5}
                            // Organic settings
                            roughness={1}
                            metalness={0}
                            reflectivity={.1}

                            // Clearcoat adds that "wet/moist" look
                            clearcoat={0.3}
                            clearcoatRoughness={0.4}

                            // Sheen helps simulate the fuzzy look of moss
                            sheen={1.5}
                            sheenRoughness={0.2}
                            sheenColor={new THREE.Color('#4a5d23')}

                            /* Realism for leaves: Transmission & Thickness */
                            transmission={0.2} // Light passing through
                            thickness={0.1}    // Depth of the leaf
                            attenuationColor="#ffffff"

                            /* If your ivy.glb has its own textures, use them here */
                            map={ivyMesh.material.map}
                            side={THREE.DoubleSide} // Important: Leaves are thin, see both sides
                        />

                    </instancedMesh>
                )}

                {flowerParts.stem && (
                    <>
                        <instancedMesh ref={stemRef} args={[flowerParts.stem.geometry, null, 4]}>
                            <meshPhysicalMaterial roughness={1.} color="lightgreen" map={flowerParts.stem.material.map} />
                        </instancedMesh>

                        <instancedMesh ref={petalsRef} args={[flowerParts.petals.geometry, null, 4]}>
                            <meshPhysicalMaterial roughness={1.} color="white" map={flowerParts.petals.material.map} side={THREE.DoubleSide} />
                        </instancedMesh>

                        <instancedMesh ref={centerRef} args={[flowerParts.center.geometry, null, 4]}>
                            <meshPhysicalMaterial color="yellow" roughness={1.} map={flowerParts.center.material.map} />
                        </instancedMesh>
                    </>
                )}
            </group>

              <mesh
                onPointerMove={handleMouseMove}
                onPointerOut={handleMouseOut}
                geometry={mesh.geometry}
                scale={1}
                position={[-.8, 0, 3.9]}
                rotation={[0, 3, 0]}
                castShadow
                receiveShadow
            >
                <CustomShaderMaterial
                    baseMaterial={MeshPhysicalMaterial}
                    map={dry.map}
                    normalMap={dry.normal}
                    roughnessMap={dry.rough}
                    aoMap={dry.ao}
                    aoMapIntensity={15}
                    vertexShader={vertex}
                    fragmentShader={fragment}
                    uniforms={branchUniforms}


                    // Organic settings
                    roughness={1.}
                    metalness={0}
                    // reflectivity={.1}

                    // Clearcoat adds that "wet/moist" look
                    // clearcoat={0.3}
                    // clearcoatRoughness={0.4}

                    // Sheen helps simulate the fuzzy look of moss
                    sheen={4.}
                    sheenRoughness={.5}
                    sheenColor={new THREE.Color('green')}
                />
            </mesh>



        </group>
    )
}

useGLTF.preload('/model/branch-1.glb')
useGLTF.preload('/model/ivy-new.glb')
useGLTF.preload('/model/flower.glb')

export default Hero

