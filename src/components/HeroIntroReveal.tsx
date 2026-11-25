import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./hero-intro-reveal.css";

export default function HeroIntroReveal() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const overlay = root.current;
    const page = document.querySelector<HTMLElement>(".viaris-home");
    if (!overlay || !page) {
      overlay?.remove();
      return;
    }

    const lines = overlay.querySelectorAll<HTMLElement>(".mfa-hero-intro-line");
    if (lines.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(page, { clearProps: "clipPath,willChange" });
      overlay.remove();
      return;
    }

    const [firstLine, secondLine] = Array.from(lines);
    const distance = () => Math.max(window.innerWidth, window.innerHeight) * 0.72;

    const ctx = gsap.context(() => {
      gsap.set(page, {
        clipPath: "inset(49% 49% 49% 49% round 18px)",
        willChange: "clip-path",
      });
      gsap.set(lines, { autoAlpha: 0, y: 22 });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(page, { clearProps: "clipPath,willChange" });
          overlay.remove();
        },
      });

      timeline
        .to(lines, { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.1 }, 0.25)
        .to(firstLine, { x: () => -distance(), autoAlpha: 0, duration: 1.15, ease: "expo.inOut" }, 1.55)
        .to(secondLine, { x: () => distance(), autoAlpha: 0, duration: 1.15, ease: "expo.inOut" }, 1.55)
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
