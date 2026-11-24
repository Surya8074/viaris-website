# Animation modules

Keep animation logic separate from page markup. Each animated section should have a scoped root and a dedicated hook or module.

- Use `@gsap/react`'s `useGSAP` for GSAP setup and automatic context cleanup.
- Use ScrollTrigger for narrative scroll effects and carefully chosen pinned scenes.
- Scope selectors to the section root; prefer data attributes over broad selectors.
- Animate transforms and opacity wherever possible.
- Use Framer Motion for discrete interface states (tabs, accordions, menus, local content swaps).
- Never let GSAP and Framer Motion animate the same property on the same element.
- Integrate Lenis once at application level; synchronise it with ScrollTrigger if enabled.
- Add reduced-motion fallbacks and test touch scrolling.
- Three.js is optional and must have a clear art-directed purpose and a lightweight fallback.
