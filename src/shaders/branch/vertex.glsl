varying vec2 vUv;

uniform sampler2D uDryMap;
uniform sampler2D uDryNormal;
uniform sampler2D uDryRough;
uniform sampler2D uDryAo;

varying vec3 vWorldPosition; // <--- This is the key


uniform float uTime;
uniform vec3 uMouseMove;

uniform sampler2D uLiveMap;
uniform sampler2D uLiveNormal;
uniform sampler2D uLiveRough;
uniform sampler2D uLiveAo;
uniform sampler2D uLiveDisplacement;

void main() {
    vUv = uv;
    
    vec3 pos = csm_Position;

    vec4 worldPos = modelMatrix * vec4(pos, 1.0); 
    vWorldPosition = worldPos.xyz;

    csm_Position = pos; 
}