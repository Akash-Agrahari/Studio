varying vec2 vUv;

void main() {
    vUv = uv;

    vec3 pos = csm_Position;

    csm_Position = pos;
}