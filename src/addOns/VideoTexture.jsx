import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import vertex from "../shaders/ImageShaders/vertex.glsl";
import fragment from "../shaders/ImageShaders/fragment.glsl";

const RESOLUTION = 256;

function MediaTexture() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const updateMedia = () => {
      // 1. Select BOTH videos and images with class .img-tex
      const elements = document.querySelectorAll("video, .img-tex");
      const collected = [];
      const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

      elements.forEach((ele) => {
        // Mobile Check
        if (!isLargeScreen) {
          ele.style.opacity = "1";
          return;
        }

        const rect = ele.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          // CSS Object Position Parsing
          const style = window.getComputedStyle(ele);
          const objPos = style.objectPosition.split(" ");
          
          const parsePos = (val) => {
            if (val.includes("top")) return 0;
            if (val.includes("bottom")) return 1;
            if (val.includes("left")) return 0;
            if (val.includes("right")) return 1;
            if (val.includes("center")) return 0.5;
            return parseFloat(val) / 100;
          };

          const alignX = objPos[0] ? parsePos(objPos[0]) : 0.5;
          const alignY = objPos[1] ? parsePos(objPos[1]) : 0.5;

          collected.push({
            el: ele,
            src: ele.currentSrc || ele.src, // Handle both img and video src
            type: ele.tagName.toLowerCase(), // 'img' or 'video'
            alignX,
            alignY,
          });
          
          ele.style.opacity = "0";
        }
      });
      setMedia(collected);
    };

    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  // 2. Intelligent Texture Loader (Handles Video & Image)
const textures = useMemo(() => {
    return media.map((item) => {
      if (item.type === "video") {
        // --- VIDEO SETUP ---
        const t = new THREE.VideoTexture(item.el);
        // Apply ColorSpace ONLY to videos
        t.colorSpace = THREE.SRGBColorSpace; 
        t.minFilter = THREE.LinearFilter;
        t.magFilter = THREE.LinearFilter;
        return t;
      } else {
        // --- IMAGE SETUP ---
        // Normal loader, NO colorSpace override
        const t = new THREE.TextureLoader().load(item.src);
        
        // Keep filters for smoothness (scaling), but remove color settings
        return t;
      }
    });
  }, [media]);

  return (
    <>
      {media.map((item, indx) => (
        <SingleMediaMesh
          key={indx}
          item={item}
          texture={textures[indx]}
          vertex={vertex}
          fragment={fragment}
        />
      ))}
    </>
  );
}
export default MediaTexture;

function SingleMediaMesh({ item, texture, vertex, fragment }) {
  const meshRef = useRef();

  // Mouse Trail State
  const points = useRef([]);
  const lastPoint = useRef(new THREE.Vector2(0, 0));

  const { ctx, trailTexture } = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = RESOLUTION;
    const context = c.getContext("2d", { alpha: false });
    const tex = new THREE.CanvasTexture(c);
    return { canvas: c, ctx: context, trailTexture: tex };
  }, []);

  const uniforms = useMemo(() => ({
      uTexture: { value: texture },
      uTrail: { value: trailTexture },
      uIntensity: { value: 0.15 },
      uUvScale: { value: new THREE.Vector2(1, 1) },
      uUvOffset: { value: new THREE.Vector2(0, 0) },
    }),
    [texture, trailTexture]
  );

  const handlePointerMove = (e) => {
    if (!e.uv) return;
    const x = e.uv.x * RESOLUTION;
    const y = (1 - e.uv.y) * RESOLUTION;
    const dist = lastPoint.current.distanceTo(new THREE.Vector2(x, y));
    const steps = Math.min(Math.ceil(dist / 5), 10);

    for (let i = 0; i < steps; i++) {
      const t = i / steps;
      points.current.push({
        x: THREE.MathUtils.lerp(lastPoint.current.x, x, t),
        y: THREE.MathUtils.lerp(lastPoint.current.y, y, t),
        age: 0,
      });
    }
    lastPoint.current.set(x, y);
  };

  useFrame((state, delta) => {
    if (!ctx || !meshRef.current || !item.el) return;

    // --- A. SYNC POSITION ---
    const rect = item.el.getBoundingClientRect();
    const x = rect.left + rect.width / 2 - window.innerWidth / 2;
    const y = -(rect.top + rect.height / 2 - window.innerHeight / 2);

    meshRef.current.position.set(x, y, 1);
    meshRef.current.scale.set(rect.width, rect.height, 1);

    // --- B. UNIVERSAL OBJECT-FIT LOGIC ---
    // Detect dimensions based on element type
    const naturalWidth = item.type === 'video' ? item.el.videoWidth : item.el.naturalWidth;
    const naturalHeight = item.type === 'video' ? item.el.videoHeight : item.el.naturalHeight;

    if (naturalWidth > 0 && naturalHeight > 0) {
      const imageAspect = naturalWidth / naturalHeight;
      const containerAspect = rect.width / rect.height;

      let scaleX = 1;
      let scaleY = 1;
      let offsetX = 0;
      let offsetY = 0;

      if (containerAspect > imageAspect) {
        scaleY = imageAspect / containerAspect;
        const invertedAlignY = 1.0 - item.alignY;
        offsetY = (1 - scaleY) * invertedAlignY;
      } else {
        scaleX = containerAspect / imageAspect;
        offsetX = (1 - scaleX) * item.alignX;
      }

      uniforms.uUvScale.value.set(scaleX, scaleY);
      uniforms.uUvOffset.value.set(offsetX, offsetY);
    }

    // --- C. TRAIL DRAWING ---
    ctx.fillStyle = "black";
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 0.15;
    ctx.fillRect(0, 0, RESOLUTION, RESOLUTION);

    ctx.globalAlpha = 1.0;
    ctx.globalCompositeOperation = "screen";

    for (let i = points.current.length - 1; i >= 0; i--) {
      const p = points.current[i];
      p.age += delta * 60;
      const life = 40;
      const opacity = Math.max(0, 1 - p.age / life);

      if (opacity <= 0) {
        points.current.splice(i, 1);
        continue;
      }

      const size = 30 * opacity + 10;
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
      grad.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    trailTexture.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} onPointerMove={handlePointerMove}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}