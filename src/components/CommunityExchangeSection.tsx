import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Dumbbell, Trees, GraduationCap, BriefcaseBusiness, CarFront, ArrowRight } from "lucide-react";
import "../styles/community-exchange.css";

gsap.registerPlugin(ScrollTrigger);

function Brand() {
  return <a className="ce-brand" href="#home" aria-label="Viaris home">
    <svg viewBox="0 0 54 52" aria-hidden="true">
      <path d="M7 7h9c4 0 6 2 8 5l15 25c2 4 0 8-5 8h-3c-3 0-5-1-7-4L5 13C3 10 4 7 7 7Z" fill="none" stroke="#173b2c" strokeWidth="2.4"/>
      <path d="M19 43c8-11 16-18 28-26" stroke="#78c900" strokeWidth="3" strokeLinecap="round"/>
      <path d="M38 6c0-4 3-6 7-6s7 3 7 7c0 6-7 13-7 13s-7-7-7-14Z" fill="#78c900"/>
    </svg><span>Viaris</span>
  </a>;
}

function Neighbourhood() {
  return <div className="ce-scene">
    <svg viewBox="0 0 1100 470" role="img" aria-label="A neighbourhood with homes, gym, park, school, workplace and a car following a shared route">
      <defs>
        <linearGradient id="ce-sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#f8f9f3"/><stop offset="1" stopColor="#fff"/></linearGradient>
        <linearGradient id="ce-road" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#fff"/><stop offset=".5" stopColor="#e9e8dc"/><stop offset="1" stopColor="#fff"/></linearGradient>
        <linearGradient id="ce-glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d9eee8"/><stop offset="1" stopColor="#8db7ad"/></linearGradient>
      </defs>
      <circle cx="520" cy="180" r="205" fill="#eef2e7" opacity=".6"/><circle cx="990" cy="190" r="250" fill="#f0f3e8" opacity=".55"/>
      <path d="M0 360Q180 320 350 355T700 350T1100 350V470H0Z" fill="#edf3e6"/>
      <g stroke="#8b9d7b" strokeWidth="2" fill="#f7f6e9">
        <path d="M75 320V140l75-35 85 35v180Z"/><path d="M235 320V170l55-25 62 25v150Z"/>
        <path d="M78 140h155M235 170h117" stroke="#d0a878" strokeWidth="5"/>
        <path d="M95 165h24v30H95zM142 165h24v30h-24zM190 165h24v30h-24zM95 215h24v30H95zM142 215h24v30h-24zM190 215h24v30h-24zM255 192h20v26h-20zM300 192h20v26h-20zM255 238h20v26h-20zM300 238h20v26h-20z" fill="#cfe4d9" stroke="#9eb9a4"/>
      </g>
      <g stroke="#a28d6e" strokeWidth="2.5" fill="#fffaf0">
        <path d="M560 315V220l85-60 86 60v95Z"/><path d="M545 220h202l-101-70Z" fill="#e7c99e"/><path d="M625 315v-65h42v65" fill="#d6e5d7"/>
        <circle cx="645" cy="218" r="15" fill="#fff" stroke="#b7a17e"/><path d="M645 207v11l8 4" fill="none"/>
        <path d="M585 242h23v24h-23zM682 242h23v24h-23z" fill="#cfe4e7" stroke="#a6bcb2"/>
      </g>
      <g stroke="#9ab5ad" strokeWidth="2" fill="url(#ce-glass)">
        <path d="M840 315V165l76-32 78 32v150Z"/><path d="M930 315V115l58-24 62 24v200Z"/>
        <path d="M855 184h45v30h-45zM855 230h45v30h-45zM855 276h45v24h-45zM947 135h31v28h-31zM990 135h42v28h-42zM947 180h31v28h-31zM990 180h42v28h-42zM947 225h31v28h-31zM990 225h42v28h-42zM947 270h31v30h-31zM990 270h42v30h-42z" fill="#e5f2ef" stroke="#b2c9c0"/>
      </g>
      <g fill="#7fae42" stroke="#719e42" strokeWidth="2">
        <path d="M35 326v-65M17 276q18-64 37 0q-18 28-37 0ZM200 330v-60M178 281q22-65 44 0q-22 27-44 0ZM390 335v-64M368 286q22-63 44 0q-22 28-44 0ZM760 330v-64M738 282q22-63 44 0q-22 28-44 0ZM1080 330v-70M1056 282q24-66 48 0q-24 28-48 0Z"/>
      </g>
      <g fill="#9fca65"><circle cx="32" cy="253" r="29"/><circle cx="195" cy="254" r="30"/><circle cx="390" cy="259" r="28"/><circle cx="760" cy="258" r="30"/><circle cx="1080" cy="252" r="32"/></g>
      <path d="M-30 430C150 370 260 390 395 365S650 330 790 365S1000 395 1130 345" fill="none" stroke="#fff" strokeWidth="75" strokeLinecap="round"/>
      <path d="M-30 430C150 370 260 390 395 365S650 330 790 365S1000 395 1130 345" fill="none" stroke="url(#ce-road)" strokeWidth="58" strokeLinecap="round"/>
      <path d="M-30 430C150 370 260 390 395 365S650 330 790 365S1000 395 1130 345" fill="none" stroke="#79c900" strokeWidth="3" strokeLinecap="round"/>
      <path d="M250 394C420 362 550 350 685 350" fill="none" stroke="#79c900" strokeWidth="4" strokeLinecap="round"/>
      <g transform="translate(315 336)">
        <ellipse cx="0" cy="39" rx="66" ry="9" fill="#647b64" opacity=".16"/>
        <path d="M-58 21l15-30q6-12 21-12h48q13 0 22 13l17 29v20h-123Z" fill="#fff" stroke="#294b3a" strokeWidth="3"/>
        <path d="M-30 -15h52q10 0 17 11l8 17h-91l8-18q2-10 6-10Z" fill="#a8c7c3" stroke="#527568" strokeWidth="2"/>
        <path d="M-58 20h123" stroke="#d9e3da" strokeWidth="3"/>
        <circle cx="-34" cy="42" r="10" fill="#263e32"/><circle cx="43" cy="42" r="10" fill="#263e32"/><circle cx="-34" cy="42" r="4" fill="#cbd7ce"/><circle cx="43" cy="42" r="4" fill="#cbd7ce"/>
      </g>
      <g transform="translate(720 292)"><path d="M0 0c-17 0-29 13-29 29 0 23 29 54 29 54s29-31 29-54C29 13 17 0 0 0Z" fill="#79c900"/><circle cy="29" r="9" fill="#fff"/></g>
    </svg>
    <span className="ce-place ce-place--gym"><Dumbbell/>Gym</span>
    <span className="ce-place ce-place--park"><Trees/>Park</span>
    <span className="ce-place ce-place--school"><GraduationCap/>School</span>
    <span className="ce-place ce-place--work"><BriefcaseBusiness/>Workplace</span>
  </div>;
}

function Avatars({ count = 3 }: { count?: number }) {
  return <div className="ce-avatars" aria-label="Community members">
    {Array.from({length:count},(_,i)=><span className={"ce-avatar ce-avatar--"+i} key={i}><i/></span>)}
    {count===3 && <b>+8</b>}
  </div>;
}

function FindRide() {
  return <article className="ce-panel ce-panel--find">
    <Avatars/>
    <span className="ce-card-arrow ce-card-arrow--solid"><ArrowRight/></span>
    <h3>Find a Ride</h3>
    <p className="ce-card-lead">Need a seat?</p>
    <p className="ce-copy">Discover people from your apartment, gym, school or workplace who are already heading your way.</p>
  </article>;
}
function OfferRide() {
  return <article className="ce-panel ce-panel--offer">
    <div className="ce-driver-avatar"><i/></div><span className="ce-car-badge"><CarFront/></span>
    <span className="ce-card-arrow"><ArrowRight/></span>
    <h3>Offer a Ride</h3>
    <p className="ce-card-lead">Have empty seats?</p>
    <p className="ce-copy">Share your destination and available seats so people in your community can join you.</p>
  </article>;
}

export default function CommunityExchangeSection() {
  const ref = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".ce-brand,.ce-hero-copy,.ce-place,.ce-panel,.ce-shared", {
        opacity:0, y:18, duration:.7, stagger:.08, ease:"power2.out",
        scrollTrigger:{trigger:ref.current,start:"top 72%",once:true}
      });
    },ref);
    return () => ctx.revert();
  },[]);
  return <section className="ce-section" id="communities" ref={ref}>
    <div className="ce-shell">
      <Brand/>
      <div className="ce-hero">
        <div className="ce-hero-copy">
          <span className="ce-pill"><Users/> Communities</span>
          <h2>Your community<br/>moves together.</h2>
          <p>Find neighbours travelling your way,<br/>or share your journey with someone nearby.</p>
        </div>
        <Neighbourhood/>
      </div>
      <div className="ce-flow">
        <svg className="ce-flow-lines" viewBox="0 0 1400 300" preserveAspectRatio="none" aria-hidden="true">
          <path className="ce-road-up" d="M700 0V80C700 115 700 120 700 130"/>
          <path className="ce-flow-left" d="M700 210C620 285 560 185 480 185"/>
          <path className="ce-flow-right" d="M700 210C780 285 840 185 920 185"/>
          <circle cx="480" cy="185" r="6"/><circle cx="920" cy="185" r="6"/>
        </svg>
        <FindRide/>
        <div className="ce-network-node"><Users/></div>
        <OfferRide/>
      </div>
      <footer className="ce-shared">
        <span className="ce-leaf">◆</span>
        <h3>One shared community network</h3>
        <p>Passengers and drivers discover each other<br/>through the same community.</p>
      </footer>
    </div>
  </section>;
}
