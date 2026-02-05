varying vec2 vUv;

uniform sampler2D uTexture;
uniform sampler2D uTrail;
uniform float uIntensity;

// 👉 NEW: These match the JS "Cover" logic
uniform vec2 uUvScale;
uniform vec2 uUvOffset;

void main() {
    // 1. Get Trail Data
    vec4 trail = texture2D(uTrail, vUv);

    // 2. Apply Object-Fit Logic (Crop/Zoom)
    // First, calculate which part of the texture should show
    vec2 fittedUv = vUv * uUvScale + uUvOffset;

    // 3. Apply Distortion to the FITTED UVs
    // Now add the trail displacement to the cropped coordinates
    vec2 uv = fittedUv + trail.rg * uIntensity;

    // 4. Safety clamp 
    // Keeps the sampling inside the texture boundaries
    uv = clamp(uv, 0.001, 0.999);

    gl_FragColor = texture2D(uTexture, uv);
}