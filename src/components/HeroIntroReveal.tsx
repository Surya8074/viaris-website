import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./hero-intro-reveal.css";

export default function HeroIntroReveal() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const overlay = root.current;
    const page = document.querySelector<HTMLElement>(".viaris-home");
    if (!overlay || !page) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      gsap.set(page, { clearProps: "clipPath,willChange" });
      overlay.remove();
      return;
    }

    const firstLine = overlay.querySelector<HTMLElement>(".mfa-intro-line-one");
    const secondLine = overlay.querySelector<HTMLElement>(".mfa-intro-line-two");
    if (!firstLine || !secondLine) {
      overlay.remove();
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(page, {
        clipPath: "inset(49% 49% 49% 49% round 16px)",
        willChange: "clip-path",
      });
      gsap.set([firstLine, secondLine], { autoAlpha: 0, y: 24 });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(page, { clearProps: "clipPath,willChange" });
          overlay.remove();
        },
      });

      timeline
        .to([firstLine, secondLine], {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
        }, 0.25)
        .to([firstLine, secondLine], {
          autoAlpha: 0,
          y: -18,
          duration: 0.55,
          stagger: 0.06,
          ease: "power2.in",
        }, 2.05)
        .to(page, {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          duration: 1.55,
          ease: "expo.inOut",
        }, 2.45)
        .to(overlay, {
          autoAlpha: 0,
          duration: 1.15,
          ease: "power2.inOut",
        }, 2.45);
    }, overlay);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mfa-hero-intro" ref={root} aria-hidden="true">
      <span className="mfa-hero-intro-line mfa-intro-line-one">Someone&apos;s already</span>
      <span className="mfa-hero-intro-line mfa-intro-line-two">going your way.</span>
    </div>
  );
}
