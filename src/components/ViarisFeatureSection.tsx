import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalendarDays, Users, Route } from 'lucide-react';
import '../styles/viaris-features.css';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    id: 'intercity',
    title: 'Intercity',
    description: 'Share the road between cities. Find a seat, split the fuel and make the distance feel shorter.',
    image: '/viaris-website/assets/intercity-scene.svg',
    icon: Route,
    path: 'M410 0 C350 48 132 24 83 112 C57 158 59 188 59 218'
  },
  {
    id: 'daily-commute',
    title: 'Daily commute',
    description: 'Find people heading your way to work, college or business — once, or on the same weekdays.',
    image: '/viaris-website/assets/commute-scene.svg',
    icon: CalendarDays,
    path: 'M410 0 C410 62 410 142 410 218'
  },
  {
    id: 'communities',
    title: 'Communities',
    description: 'Connect with people around the places you share — your neighbourhood, gym, park or school.',
    image: '/viaris-website/assets/communities-scene.svg',
    icon: Users,
    path: 'M410 0 C470 48 688 24 737 112 C763 158 761 188 761 218'
  }
];

function BranchCar({ id, delay }: { id: string; delay: number }) {
  return <g className="vf-car">
    <g transform="translate(-10 -5)">
      <path d="M1 6.5 3.5 2.8Q4.5 1.5 6.5 1.5h7q2 0 3 1.8l2.5 3.2v4.2H1Z" fill="#fffefa" stroke="#315b42" strokeWidth="1.35" strokeLinejoin="round"/>
      <path d="m5 2.8-1.5 3h10l-1.8-3Z" fill="#dce8d5"/>
      <circle cx="5.5" cy="11" r="1.4" fill="#315b42"/><circle cx="14.5" cy="11" r="1.4" fill="#315b42"/>
    </g>
    <animateMotion dur="10s" repeatCount="indefinite" begin={`${delay}s`} rotate="0"><mpath href={`#vf-path-${id}`}/></animateMotion>
  </g>;
}

function RouteBranches() {
  return <svg className="vf-routes" viewBox="0 0 820 236" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id="vf-route-tone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#9bbd78"/><stop offset="1" stopColor="#6c9b53"/></linearGradient>
    </defs>
    {FEATURES.map(feature => <path key={feature.id} id={`vf-path-${feature.id}`} d={feature.path} fill="none"/>)}
    {FEATURES.map((feature,index) => <g key={feature.id}>
      <path className="vf-route" d={feature.path}/>
      <circle className="vf-route-end" cx={[59,410,761][index]} cy="218" r="3.4"/>
      <BranchCar id={feature.id} delay={index * 1.4}/>
    </g>)}
    <circle className="vf-route-origin-ring" cx="410" cy="1" r="8"/>
    <circle className="vf-route-origin" cx="410" cy="1" r="3.2"/>
  </svg>;
}

function Feature({ feature }: { feature: (typeof FEATURES)[number] }) {
  const Icon = feature.icon;
  return <article className={`vf-feature vf-feature--${feature.id}`}>
    <div className="vf-feature__illustration">
      <img src={feature.image} alt="" loading="lazy"/>
    </div>
    <div className="vf-feature__copy">
      <div className="vf-feature__title">
        <span className="vf-feature__icon"><Icon size={17} strokeWidth={1.65}/></span>
        <h3>{feature.title}</h3>
      </div>
      <p>{feature.description}</p>
    </div>
  </article>;
}

export default function ViarisFeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const context = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;
      const routes = gsap.utils.toArray<SVGPathElement>('.vf-route');
      routes.forEach(path => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      });
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 72%', once: true }
      });
      timeline.fromTo(brandRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .65, ease: 'power2.out' });
      timeline.to(routes, { strokeDashoffset: 0, duration: 1.35, stagger: .18, ease: 'power2.inOut' }, '-=.08');
      timeline.fromTo('.vf-feature__illustration', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .65, stagger: .12, ease: 'power2.out' }, '-=.2');
      timeline.fromTo('.vf-feature__copy', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .55, stagger: .12, ease: 'power2.out' }, '-=.25');
    }, section);
    return () => context.revert();
  }, []);

  return <section className="viaris-feature-section" id="viaris-features" ref={sectionRef} aria-labelledby="viaris-feature-heading">
    <div className="viaris-feature-section__inner">
      <header className="vf-header">
        <div className="vf-wordmark" ref={brandRef} aria-label="Viaris">viaris<span>.</span></div>
        <p id="viaris-feature-heading" className="vf-kicker">COMMUNITY CARPOOLING PLATFORM</p>
      </header>
      <div className="vf-route-stage"><RouteBranches/></div>
      <div className="vf-features">
        {FEATURES.map(feature => <Feature key={feature.id} feature={feature}/>)}
      </div>
    </div>
  </section>;
}
