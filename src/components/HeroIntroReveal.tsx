import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./hero-intro-reveal.css";

export default function HeroIntroReveal() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const overlay = root.current;
    const page = overlay?.closest(".viaris-home") as HTMLElement | null;
    if (!overlay || !page) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      overlay.remove();
      return;
    }

    const ctx = gsap.context(() => {
      const left = overlay.querySelector<HTMLElement>(".mfa-intro-left");
      const right = overlay.querySelector<HTMLElement>(".mfa-intro-right");
      if (!left || !right) return;

      const distance = () => Math.max(window.innerWidth, window.innerHeight) * 0.72;
      gsap.set(page, {
        clipPath: "inset(49% 49% 49% 49% round 18px)",
        willChange: "clip-path",
      });
      gsap.set([left, right], { autoAlpha: 0, y: 22 });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(page, { clearProps: "clipPath,willChange" });
          overlay.remove();
        },
      });

      timeline
        .to([left, right], { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.1 }, 0.25)
        .to(left, { x: () => -distance(), autoAlpha: 0, duration: 1.15, ease: "expo.inOut" }, 1.55)
        .to(right, { x: () => distance(), autoAlpha: 0, duration: 1.15, ease: "expo.inOut" }, 1.55)
        .to(page, { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 1.45, ease: "expo.inOut" }, 2.35)
        .to(overlay, { autoAlpha: 0, duration: 0.95, ease: "power2.inOut" }, 2.35);
    }, overlay);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mfa-hero-intro" ref={root} aria-hidden="true">
      <span className="mfa-hero-intro-line">Someone&apos;s already</span>
      <span className="mfa-hero-intro-line mfa-intro-second">going your way.</span>
    </div>
  );
}
