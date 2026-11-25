import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./hero-intro-reveal.css";

export default function HeroIntroReveal() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const overlay = root.current;
    if (!overlay) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      overlay.remove();
      return;
    }

    const ctx = gsap.context(() => {
      const left = overlay.querySelector<HTMLElement>(".mfa-intro-left");
      const right = overlay.querySelector<HTMLElement>(".mfa-intro-right");
      if (!left || !right) return;

      const distance = () => Math.max(window.innerWidth, window.innerHeight) * 0.72;
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => overlay.remove(),
      });

      gsap.set([left, right], { autoAlpha: 0, y: 22 });
      timeline
        .to([left, right], { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.1 }, 0.25)
        .to(left, { x: () => -distance(), autoAlpha: 0, duration: 1.15, ease: "expo.inOut" }, 1.35)
        .to(right, { x: () => distance(), autoAlpha: 0, duration: 1.15, ease: "expo.inOut" }, 1.35)
        .to(overlay, { autoAlpha: 0, duration: 0.7, ease: "power2.out" }, 2.15);
    }, overlay);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mfa-hero-intro" ref={root} aria-hidden="true">
      <span className="mfa-hero-intro-word mfa-intro-left">Same</span>
      <span className="mfa-hero-intro-word mfa-intro-right">roads.</span>
    </div>
  );
}
