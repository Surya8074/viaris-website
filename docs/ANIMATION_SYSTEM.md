# Viaris animation system

## Motion principles
1. Narrative first: motion clarifies a transition, relationship or state.
2. Controlled pacing: a few signature sequences are better than constant movement.
3. Continuity: animated route lines can connect otherwise distinct scenes.
4. Restraint: no gratuitous cursor trails, perpetual float, or scroll hijacking.
5. Accessibility: support reduced motion; content must remain complete without animation.
6. Performance: prioritise transforms and opacity; avoid layout thrashing and heavy paint.

## Planned choreography
- **Hero:** cinematic image reveal, measured headline entrance, CTA reveal, route stroke drawing.
- **Question:** editorial type reveal; illustrative paths appear and converge.
- **Brand reveal:** central logo with soft light treatment; one route stem branches to Daily Commute, Intercity and Communities.
- **How it works:** explain Find a Ride and Publish a Ride inside one unified experience.
- **App showcase:** transition only between authentic Viaris screenshots; desktop pinning is optional, mobile uses natural flow.
- **Benefits and impact:** accessible count-up values and a transparent calculator; tree equivalence is explicitly an analogy.
- **Why Viaris / Trust / Closing:** restrained image masks and staggered text; never delay important trust or FAQ content.

## GSAP pattern
Use `useGSAP` from `@gsap/react`. Register ScrollTrigger once in a shared animation setup module. Scope animations to component roots, avoid global selectors and let GSAP context revert on unmount.

## Framer Motion
Use for local state transitions such as selectors, accordions, navigation and small content swaps. Keep it separate from GSAP-owned scroll choreography.

## Lenis
Optional, centrally instantiated. Keep native scrolling as a fallback and verify keyboard navigation, reduced motion and touch performance.

## Three.js
Do not add 3D by default. Consider it only for a specific visual idea (for example, an art-directed brand mark reveal) and provide a static/mobile fallback.
