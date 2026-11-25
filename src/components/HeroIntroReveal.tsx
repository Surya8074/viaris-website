import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./hero-intro-reveal.css";

export default function HeroIntroReveal() {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const scope = root.current;
    if (!scope) return;
    const hero = scope.closest(".hero-photo") as HTMLElement | null;
    const page = scope.closest(".viaris-home") as HTMLElement | null;
    const image = hero?.querySelector<HTMLElement>(".hero-image");
    const left = scope.querySelector<HTMLElement>(".mfa-intro-left");
    const right = scope.querySelector<HTMLElement>(".mfa-intro-right");
    const copy = hero?.querySelector<HTMLElement>(".hero-copy");
    const topLine = hero?.querySelector<HTMLElement>(".hero-topline");
    const bottomLine = hero?.querySelector<HTMLElement>(".hero-bottomline");
    const header = page?.querySelector<HTMLElement>(".site-header");
    if (!hero || !image || !left || !right || !copy || !topLine || !bottomLine) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set([image,left,right,copy,topLine,bottomLine,header],{clearProps:"all"});
      scope.remove(); return;
    }
    const ctx=gsap.context(()=>{
      gsap.set(image,{clipPath:"inset(46% 50% 46% 50% round 999px)",scale:1.18,transformOrigin:"center center"});
      gsap.set([copy,topLine,bottomLine,header],{autoAlpha:0});
      gsap.set([left,right],{autoAlpha:0,y:18,force3D:true});
      const exit=()=>window.innerWidth*.72;
      const tl=gsap.timeline({defaults:{ease:"power3.out"},onComplete:()=>{gsap.set([image,left,right,copy,topLine,bottomLine,header],{clearProps:"willChange"});scope.remove();}});
      tl.to([left,right],{autoAlpha:1,y:0,duration:.7,stagger:.08},.15)
        .to(left,{x:()=>-exit(),autoAlpha:0,duration:1.25,ease:"expo.inOut"},1.05)
        .to(right,{x:()=>exit(),autoAlpha:0,duration:1.25,ease:"expo.inOut"},1.05)
        .to(image,{clipPath:"inset(0% 0% 0% 0% round 0px)",duration:1.55,ease:"expo.inOut"},1.12)
        .to(image,{scale:1,duration:2.05,ease:"power2.out"},1.12)
        .to([topLine,bottomLine],{autoAlpha:1,duration:.65,stagger:.12},2.05)
        .fromTo(copy,{autoAlpha:0,y:28},{autoAlpha:1,y:0,duration:1.05,ease:"power3.out"},2.25)
        .fromTo(header,{autoAlpha:0,y:-16},{autoAlpha:1,y:0,duration:.8,ease:"power3.out"},2.55);
    },hero);
    return ()=>ctx.revert();
  },[]);
  return <div className="mfa-hero-intro" ref={root} aria-hidden="true"><span className="mfa-hero-intro-word mfa-intro-left">Same</span><span className="mfa-hero-intro-word mfa-intro-right">roads.</span></div>;
}
