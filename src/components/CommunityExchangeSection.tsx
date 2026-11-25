import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Search, CarFront, ArrowUpRight, ArrowRight, Dumbbell, Trees, GraduationCap, BriefcaseBusiness, UserRound } from "lucide-react";
import "../styles/community-exchange.css";

gsap.registerPlugin(ScrollTrigger);

function Brand() {
  return <a className="ce-brand" href="#home" aria-label="Viaris home">
    <svg viewBox="0 0 54 52" aria-hidden="true">
      <path d="M7 7h9c4 0 6 2 8 5l15 25c2 4 0 8-5 8h-3c-3 0-5-1-7-4L5 13C3 10 4 7 7 7Z" fill="none" stroke="#07583d" strokeWidth="2.5"/>
      <path d="M19 43c8-11 16-18 28-26" stroke="#79c72c" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M38 6c0-4 3-6 7-6s7 3 7 7c0 6-7 13-7 13s-7-7-7-14Z" fill="#79c72c"/>
      <circle cx="45" cy="7" r="2.5" fill="#fbfcf8"/>
    </svg><span>Viaris</span>
  </a>;
}

function Neighbourhood() {
  return <div className="ce-neighbourhood">
    <svg viewBox="0 0 1000 340" role="img" aria-label="Illustrated neighbourhood with apartments, gym, park, school, workplace and a shared road">
      <path d="M0 220Q110 160 210 210T430 206T660 205T1000 194V340H0Z" fill="#edf4e8"/>
      <g stroke="#547b5d" strokeWidth="2" strokeLinejoin="round" fill="#f9fcf6">
        <path d="M68 206V95l85-34 86 34v111ZM245 207V123l58-24 59 24v84Z"/>
        <path d="M638 207V115l75-36 76 36v92Z M626 116h170 M696 80V59h34v21"/>
        <path d="M835 207V88l52-24 52 24v119Z"/>
      </g>
      <g stroke="#a4c59a" strokeWidth="2" fill="#d9e9d3">
        <path d="M90 109h22v23H90zM132 109h22v23h-22zM174 109h22v23h-22zM90 151h22v23H90zM132 151h22v23h-22zM174 151h22v23h-22z"/>
        <path d="M264 137h18v20h-18zM306 137h18v20h-18zM653 133h20v18h-20zM752 133h20v18h-20zM851 104h18v22h-18zM883 104h18v22h-18zM915 104h18v22h-18z"/>
      </g>
      <g stroke="#628d4d" strokeWidth="2" fill="#a9d58c"><path d="M432 213v-54M414 175q18-39 36 0q-18 21-36 0ZM480 216v-72M456 164q24-50 48 0q-24 28-48 0ZM530 213v-52M512 174q18-38 36 0q-18 22-36 0Z"/></g>
      <path d="M405 219q70-28 146 0" stroke="#a3cb85" strokeWidth="3" fill="none"/>
      <path d="M0 286C160 272 248 278 365 265S570 240 674 266S870 289 1000 258" fill="none" stroke="#fff" strokeWidth="32" strokeLinecap="round"/>
      <path d="M0 286C160 272 248 278 365 265S570 240 674 266S870 289 1000 258" fill="none" stroke="#91c94a" strokeWidth="2.5" strokeLinecap="round"/>
      <g transform="translate(322 236)" stroke="#07583d" strokeWidth="2.2"><path d="M0 18 9 4q3-4 9-4h35q7 0 11 6l8 12v12H0Z" fill="#fff"/><path d="m18 3-7 12h51L53 3Z" fill="#dcebd4"/><circle cx="15" cy="30" r="6" fill="#07583d"/><circle cx="58" cy="30" r="6" fill="#07583d"/></g>
      <g transform="translate(680 235)"><path d="M0 0c-13 0-23 10-23 23 0 18 23 42 23 42s23-24 23-42C23 10 13 0 0 0Z" fill="#79c72c"/><circle cy="23" r="7" fill="#fff"/></g>
    </svg>
    <span className="ce-place ce-place--gym"><Dumbbell/>Gym</span>
    <span className="ce-place ce-place--park"><Trees/>Park</span>
    <span className="ce-place ce-place--school"><GraduationCap/>School</span>
    <span className="ce-place ce-place--work"><BriefcaseBusiness/>Workplace</span>
  </div>;
}

function FindRide() {
  return <article className="ce-panel ce-panel--find" id="find-a-ride">
    <div className="ce-panel__top"><span className="ce-panel__kicker">01 <i/> PASSENGER</span><span className="ce-panel__symbol"><Search/></span></div>
    <div className="ce-avatars" aria-label="Members in your community">
      <span className="ce-avatar ce-a1"><UserRound/></span><span className="ce-avatar ce-a2"><UserRound/></span><span className="ce-avatar ce-a3"><UserRound/></span><span className="ce-avatar ce-a4"><Users/></span>
    </div>
    <h3>Find a ride</h3><p className="ce-question">Need a seat?</p>
    <p className="ce-copy">Discover people from your apartment, gym, school or workplace who are already heading your way.</p>
    <div className="ce-route"><div className="ce-route__line"><i/><i/></div><div><small>FROM YOUR COMMUNITY</small><strong>Your community</strong></div><ArrowRight/><div><small>HEADING TO</small><strong>Your destination</strong></div></div>
    <a className="ce-link" href="#find-a-ride">Explore available rides <ArrowUpRight/></a>
  </article>;
}

function OfferRide() {
  return <article className="ce-panel ce-panel--offer" id="offer-a-ride">
    <div className="ce-panel__top"><span className="ce-panel__kicker">02 <i/> DRIVER</span><span className="ce-panel__symbol"><CarFront/></span></div>
    <div className="ce-driver"><span className="ce-driver__avatar"><UserRound/></span><span className="ce-driver__car"><CarFront/></span><small>YOUR CAR · YOUR ROUTE</small></div>
    <h3>Offer a ride</h3><p className="ce-question">Have empty seats?</p>
    <p className="ce-copy">Share your destination and available seats so people in your community can join you.</p>
    <div className="ce-offer-preview"><small>YOUR ROUTE</small><strong>Your community <ArrowRight/> Your destination</strong><div><span>Choose departure time</span><span>Set available seats</span></div></div>
    <a className="ce-link" href="#offer-a-ride">Share your journey <ArrowUpRight/></a>
  </article>;
}

export default function CommunityExchangeSection() {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({scrollTrigger:{trigger:ref.current,start:"top 72%",once:true}});
      tl.from(".ce-brand",{opacity:0,y:8,duration:.6})
        .from(".ce-hero-copy>*",{opacity:0,y:14,stagger:.1,duration:.5},"-.2")
        .from(".ce-place",{opacity:0,y:7,stagger:.08,duration:.35},"-.1")
        .from(".ce-panel",{opacity:0,y:18,stagger:.14,duration:.65},"-.05");
    },ref);
    return () => ctx.revert();
  },[]);
  return <section className="ce-section" id="communities" ref={ref}>
    <div className="ce-shell">
      <nav className="ce-nav" aria-label="Community section"><Brand/><span>COMMUNITY CARPOOLING</span></nav>
      <div className="ce-hero">
        <div className="ce-hero-copy">
          <span className="ce-pill"><Users/> COMMUNITIES</span>
          <h2>Your community<br/><em>moves together.</em></h2>
          <p>Find neighbours travelling your way, or share your journey with someone nearby.</p>
          <div className="ce-proof"><i/> One trusted network. Two ways to ride.</div>
        </div>
        <Neighbourhood/>
      </div>
      <div className="ce-panels">
        <FindRide/>
        <div className="ce-connector" aria-hidden="true"><svg viewBox="0 0 170 180"><path d="M0 28C42 28 52 78 85 78S128 28 170 28"/><circle cx="0" cy="28" r="4"/><circle cx="170" cy="28" r="4"/></svg><span><Users/></span></div>
        <OfferRide/>
      </div>
      <footer className="ce-shared"><span><Users/></span><div><strong>One shared community network</strong><p>Find a ride today. Offer one tomorrow. Both happen within the same community.</p></div><aside><i>Apartment</i><i>Gym</i><i>Park</i><i>School</i><i>Workplace</i></aside></footer>
    </div>
  </section>;
}
