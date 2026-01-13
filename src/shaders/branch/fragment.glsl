varying vec2 vUv;
varying vec3 vWorldPosition;

uniform vec3 uMouseMove;
uniform float uHover;

void main() {

    float dist = distance(vWorldPosition, uMouseMove);

// radius setup
    float inner = 0.30;   // fully gone
    float outer = 0.4;    // fully visible

// distance-based soft mask
    float mask = smoothstep(inner, outer, dist);

// hover control:
// uHover = 0 → dry fully visible
// uHover = 1 → distance-based reveal
    mask = mix(1.0, mask, uHover);

// OPTION A: alpha-based fade
    csm_DiffuseColor.a *= mask;

// OPTION B: hard cut inside inner radius (optional)
    if(uHover > 0.5 && dist < inner) {
        discard;
    }

}
