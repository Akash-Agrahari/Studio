varying vec2 vUv;
uniform sampler2D uTexture;
uniform sampler2D uPattern;
uniform vec2 uMouse;
uniform float uIntensity; // Spelling same as React!
uniform float uTime;

void main() {

    vec2 movement = vec2(uTime * 0.05, uTime * 0.04);
    vec2 reverseMovement = vec2(uTime * -0.02, uTime * -0.05);

    vec4 patternColor = texture2D(uPattern, vUv + movement);
    vec4 reversePatternColor = texture2D(uPattern, vUv + reverseMovement);

    vec2 offset1 = (patternColor.rg - 0.5) * 0.03;
    vec2 offset2 = (reversePatternColor.rg - 0.5) * 0.02;

    vec2 flowUv = vUv + offset1 + offset2;

    vec4 color = texture2D(uTexture, flowUv);
    csm_DiffuseColor = color;

}