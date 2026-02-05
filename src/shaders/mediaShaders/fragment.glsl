precision mediump float;

uniform sampler2D uVideo;
uniform sampler2D uDistortMap;
uniform float uTime;

varying vec2 vUv;

void main() {
  // distortion map (animated)
  vec2 distort = texture2D(
    uDistortMap,
    vUv + vec2(uTime * 0.05, uTime * 0.03)
  ).rg;

  // remap 0–1 to -1–1
  distort = distort * 2.0 - 1.0;

  // apply distortion strength
  vec2 uv = vUv + distort * 0.05;

  // sample video
  vec4 videoColor = texture2D(uVideo, uv);

  gl_FragColor = videoColor;
}
