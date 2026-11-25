import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalendarDays, Users, Route } from 'lucide-react';
import '../styles/viaris-features.css';

gsap.registerPlugin(ScrollTrigger);

const ASSET_BASE = '/viaris-website/assets/';

const FEATURE_DATA = [
  {
    id: 'intercity', number: '01', title: 'Intercity', eyebrow: 'GO FURTHER, TOGETHER',
    description: 'Share long-distance rides between cities, split travel costs and make every kilometre count.',
    detail: 'Shared journeys between cities', image: ASSET_BASE + 'intercity-scene.svg', icon: Route,
    path: 'M 410 150 C 330 208 165 168 92 258 C 52 307 58 360 58 392',
    carPath: 'M 410 150 C 330 208 165 168 92 258 C 52 307 58 360 58 392', end: { x: 58, y: 392 }
  },
  {
    id: 'daily-commute', number: '02', title: 'Daily Commute', eyebrow: 'MAKE EVERY DAY EASIER',
    description: 'Find people travelling your way to work, college or business — and turn the daily drive into a shared ride.',
    detail: 'Everyday rides along your route', image: ASSET_BASE + 'commute-scene.svg', icon: CalendarDays,
    path: 'M 410 150 C 410 220 410 300 410 392',
    carPath: 'M 410 150 C 410 220 410 300 410 392', end: { x: 410, y: 392 }
  },
  {
    id: 'communities', number: '03', title: 'Communities', eyebrow: 'YOUR PEOPLE. YOUR PLACES.',
    description: 'Connect with neighbours, friends and local groups around gyms, parks, schools and the places you visit.',
    detail: 'Local connections around shared destinations', image: ASSET_BASE + 'communities-scene.svg', icon: Users,
    path: 'M 410 150 C 490 208 655 168 728 258 C 768 307 762 360 762 392',
    carPath: 'M 410 150 C 490 208 655 168 728 258 C 768 307 762 360 762 392', end: { x: 762, y: 392 }
  }
];

function BrandMark() {
  return <div className="vf-brand" aria-label="Viaris">
    <svg className="vf-brand__symbol" viewBox="0 0 92 88" aria-hidden="true">
      <defs><linearGradient id="vfBrandGreen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0c6847"/><stop offset="1" stopColor="#8bd52d"/></linearGradient></defs>
      <path d="M12 12 H29 C35 12 39 15 43 21 L66 59 C70 66 65 76 56 76 H49 C44 76 40 73 37 68 L9 23 C5 17 7 12 12 12Z" fill="none" stroke="url(#vfBrandGreen)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29 70 C40 54 53 43 75 29" fill="none" stroke="#72c927" strokeWidth="3.2" strokeLinecap="round"/>
      <path d="M70 10 C70 3 75 0 81 0 C88 0 92 5 92 11 C92 20 81 32 81 32 C81 32 70 20 70 10Z" fill="#79c92b"/>
      <circle cx="81" cy="11" r="4" fill="#fbfcf8"/>
    </svg>
    <span className="vf-brand__word">Viaris</span>
  </div>;
}

function MovingCar({ pathId, delay = 0 }: { pathId: string; delay?: number }) {
  return <g className="vf-journey-car">
    <g transform="translate(-12 -7)">
      <path d="M2 9 L4.5 4.5 Q5.5 3 8 3 H16 Q18 3 19.5 5 L22 9 V13 H2Z" fill="#fbfcf8" stroke="#07583d" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M7 4.5 L5 8 H18.5 L16.5 4.5Z" fill="#d9edcf" stroke="#07583d" strokeWidth="1.2"/>
      <circle cx="7" cy="13" r="2" fill="#07583d"/><circle cx="17" cy="13" r="2" fill="#07583d"/>
    </g>
    <animateMotion dur="8s" repeatCount="indefinite" begin={`${delay}s`} rotate="auto"><mpath href={`#vf-motion-${pathId}`}/></animateMotion>
  </g>;
}

function JourneyMap() {
  return <svg className="vf-journey-map" viewBox="0 0 820 430" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id="vfJourneyStroke" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#a6d94d"/><stop offset=".5" stopColor="#79c72c"/><stop offset="1" stopColor="#0e6848"/></linearGradient>
      <filter id="vfPinGlow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    {FEATURE_DATA.map(feature => <path key={feature.id} id={`vf-motion-${feature.id}`} d={feature.carPath} fill="none"/>)}
    <path className="vf-journey-map__branch" d={FEATURE_DATA[0].path}/>
    <path className="vf-journey-map__branch vf-journey-map__branch--center" d={FEATURE_DATA[1].path}/>
    <path className="vf-journey-map__branch" d={FEATURE_DATA[2].path}/>
    <circle className="vf-journey-map__origin-halo" cx="410" cy="150" r="19"/>
    <circle className="vf-journey-map__origin" cx="410" cy="150" r="6.5" filter="url(#vfPinGlow)"/>
    {FEATURE_DATA.map((feature,index) => <g key={feature.id}><circle className="vf-journey-map__endpoint" cx={feature.end.x} cy={feature.end.y} r="5.5"/><MovingCar pathId={feature.id} delay={index*1.1}/></g>)}
  </svg>;
}

type FeatureItem = (typeof FEATURE_DATA)[number];

function FeatureBranch({ feature }: { feature: FeatureItem }) {
  const Icon = feature.icon;
  return <article className={`vf-feature-branch vf-feature-branch--${feature.id}`}>
    <div className="vf-feature-branch__art"><img src={feature.image} alt="" loading="eager"/></div>
    <div className="vf-feature-branch__content">
      <div className="vf-feature-branch__meta"><span className="vf-feature-branch__number">{feature.number}</span><span className="vf-feature-branch__eyebrow">{feature.eyebrow}</span></div>
      <div className="vf-feature-branch__heading"><span className="vf-feature-branch__icon"><Icon size={19} strokeWidth={1.7}/></span><h2>{feature.title}</h2></div>
      <p>{feature.description}</p><span className="vf-feature-branch__detail">{feature.detail}</span>
    </div>
  </article>;
}

export default function ViarisFeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        gsap.set('.vf-journey-map__branch, .vf-feature-branch, .vf-brand', { clearProps: 'all' });
        return;
      }
      const branches = gsap.utils.toArray<SVGPathElement>('.vf-journey-map__branch');
      const featureCards = gsap.utils.toArray<HTMLElement>('.vf-feature-branch');
      gsap.fromTo(logoRef.current,
        { opacity: 0, y: 12, scale: .985, filter: 'drop-shadow(0 0 0 rgba(120,201,43,0))' },
        { opacity: 1, y: 0, scale: 1, filter: 'drop-shadow(0 0 14px rgba(120,201,43,.28))', duration: 1.1, ease: 'power3.out',
          onComplete: () => gsap.to(logoRef.current, { filter: 'drop-shadow(0 0 0 rgba(120,201,43,0))', duration: 1.4, ease: 'power2.out' }) }
      );
      branches.forEach(path => { const length = path.getTotalLength(); gsap.set(path, { strokeDasharray: length, strokeDashoffset: length }); });
      const timeline = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top 68%', once: true }, delay: .65 });
      timeline.to(branches, { strokeDashoffset: 0, duration: 1.45, stagger: .24, ease: 'power2.inOut' });
      timeline.fromTo(featureCards, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: .75, stagger: .18, ease: 'power3.out' }, '-=.25');
      timeline.fromTo('.vf-feature-branch__art img', { opacity: 0, scale: .97 }, { opacity: 1, scale: 1, duration: .85, stagger: .16, ease: 'power2.out' }, '<');
    }, section);
    return () => ctx.revert();
  }, []);
  return <section className="viaris-feature-section" id="viaris-features" ref={sectionRef}>
    <div className="viaris-feature-section__inner">
      <header className="viaris-feature-section__header">
        <div ref={logoRef} className="viaris-feature-section__brand-wrap"><BrandMark/></div>
        <p className="viaris-feature-section__tagline">COMMUNITY CARPOOLING PLATFORM</p>
        <p className="viaris-feature-section__intro">One journey can connect more than a destination.</p>
      </header>
      <div className="vf-journey-stage"><JourneyMap/></div>
      <div className="vf-feature-grid">{FEATURE_DATA.map(feature => <FeatureBranch key={feature.id} feature={feature}/>)}</div>
    </div>
  </section>;
}
