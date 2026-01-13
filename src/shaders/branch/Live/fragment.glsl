varying vec2 vUv;
uniform sampler2D uLiveDisplacement;
uniform sampler2D uLiveDistort;
uniform float uTime;
uniform sampler2D uLiveMap;

void main()
{
    vec2 movement = vec2(uTime * 0.05, uTime * - 0.03);

    vec4 pattern = texture2D(uLiveDisplacement , vUv + movement);

    vec2 offset = (pattern.rg - 0.5) * 0.02;

    vec2 distort = vUv + offset; 

    vec4 color = texture2D(uLiveMap, distort);
    csm_DiffuseColor = color;
}