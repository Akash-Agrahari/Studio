import React from 'react';

const BlackNoiseBackground = ({ 
  opacity = 0.05, 
  frequency = 0.8, 
  octaves = 3, 
  zIndex = 1,
  blendMode = 'multiply',
  fullScreen = true // New Prop: true for whole page, false for parent container
}) => {
  return (
    <div
      style={{
        // Agar fullScreen true hai toh 'fixed', warna 'absolute'
        position: fullScreen ? 'fixed' : 'absolute', 
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: zIndex,
        opacity: opacity, 
        mixBlendMode: blendMode, 
      }}
    >
      <svg width="100%" height="100%">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={frequency}
            numOctaves={octaves}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export default BlackNoiseBackground;