varying vec2 vUv;

void main() {
    vUv = uv;
    vec3 pos = csm_Position;

    csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}