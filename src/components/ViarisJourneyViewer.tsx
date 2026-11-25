import { useState } from 'react';
import { ArrowUpRight, CalendarDays, CarFront, MapPin, Route, Users } from 'lucide-react';
import '../styles/viaris-journey-viewer.css';

const journeys = [
  {
    id: 'commute',
    title: 'Daily commutes',
    eyebrow: 'YOUR ROUTINE, SHARED',
    description: 'Find neighbours and colleagues heading towards the same workplace. Ride once, or make it part of your weekly routine.',
    detail: 'One-time rides · Recurring weekdays',
    icon: CalendarDays,
    marker: '01',
  },
  {
    id: 'intercity',
    title: 'Between cities',
    eyebrow: 'MAKE THE DISTANCE BETTER',
    description: 'Connect with drivers already travelling your way. Share the journey, split the travel cost and make longer trips feel lighter.',
    detail: 'City-to-city · Shared seats',
    icon: Route,
    marker: '02',
  },
  {
    id: 'community',
    title: 'Around your community',
    eyebrow: 'CLOSER THAN YOU THINK',
    description: 'Discover people around the places you share — your apartment, gym, school or favourite neighbourhood spots.',
    detail: 'Local connections · Shared destinations',
    icon: Users,
    marker: '03',
  },
  {
    id: 'flexible',
    title: 'Your plans, your way',
    eyebrow: 'FLEXIBILITY BUILT IN',
    description: 'Looking for a ride or have empty seats? Publish a trip or find one that fits your time, route and plans.',
    detail: 'Find a ride · Publish a ride',
    icon: CarFront,
    marker: '04',
  },
];

function JourneyScene({ active }: { active: string }) {
  const isCity = active === 'intercity';
  const isCommunity = active === 'community';
  const isFlexible = active === 'flexible';
  return (
    <div className={`vj-scene vj-scene--${active}`} aria-hidden="true">
      <div className="vj-scene__topline"><span>VIARIS / SHARED MOBILITY</span><span>GOING YOUR WAY <i /></span></div>
      <svg className="vj-landscape" viewBox="0 0 900 540" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="vj-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f7faf2"/><stop offset="1" stopColor="#e6f0df"/></linearGradient>
          <linearGradient id="vj-road" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#65796a"/><stop offset="1" stopColor="#354b3e"/></linearGradient>
          <linearGradient id="vj-car" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#dce8d8"/></linearGradient>
          <filter id="vj-shadow" x="-30%" y="-30%" width="160%" height="180%"><feGaussianBlur stdDeviation="12"/></filter>
        </defs>
        <rect x="0" y="0" width="900" height="540" rx="26" fill="url(#vj-sky)"/>
        <circle cx="720" cy="112" r="44" fill="#f2d991" opacity=".65"/>
        <path d="M0 320 Q155 230 300 300 T590 280 T900 270 V540 H0Z" fill="#c5dcb8"/>
        <path d="M0 365 Q160 295 320 350 T620 330 T900 320 V540 H0Z" fill="#a8c89c"/>
        {isCity || isFlexible ? <g className="vj-buildings" fill="#c0d5b9">
          <path d="M590 285V130h70v155zm82 0V88h88v197zm100 0V160h65v125z"/>
          <path d="M604 151h13v17h-13zm27 0h13v17h-13zm-27 34h13v17h-13zm27 0h13v17h-13zm59-75h15v18h-15zm29 0h15v18h-15zm-29 37h15v18h-15zm29 0h15v18h-15zm-29 38h15v18h-15zm29 0h15v18h-15z" fill="#f5f8ef"/>
        </g> : <g className="vj-homes">
          <path d="M570 294v-92l76-59 76 59v92Z" fill="#f5f7ed" stroke="#9fbc96" strokeWidth="3"/>
          <path d="M552 205 646 130l94 75" fill="none" stroke="#638b64" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="628" y="226" width="34" height="68" rx="3" fill="#c6d9bc"/><rect x="587" y="221" width="27" height="25" rx="3" fill="#a8c99c"/><rect x="680" y="221" width="27" height="25" rx="3" fill="#a8c99c"/>
          <path d="M750 294v-72l59-45 59 45v72Z" fill="#edf3e7" stroke="#9fbc96" strokeWidth="3"/>
          <path d="m736 225 73-58 73 58" fill="none" stroke="#7a9e70" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
        </g>}
        <path d={isCity ? "M-20 535 C180 475 270 390 420 390 S680 480 930 350" : isCommunity ? "M-20 535 C180 475 270 390 420 390 S680 480 930 350" : "M-20 535 C180 475 270 390 420 390 S680 480 930 350"} fill="none" stroke="#d9e2d1" strokeWidth="118" strokeLinecap="round"/>
        <path d="M-20 535 C180 475 270 390 420 390 S680 480 930 350" fill="none" stroke="url(#vj-road)" strokeWidth="92" strokeLinecap="round"/>
        <path d="M-20 535 C180 475 270 390 420 390 S680 480 930 350" fill="none" stroke="#e9e9d4" strokeWidth="3" strokeDasharray="18 18" strokeLinecap="round"/>
        <g className="vj-route-pins">
          <circle cx="195" cy="450" r="17" fill="#fff" stroke="#39864b" strokeWidth="4"/><circle cx="195" cy="450" r="5" fill="#39864b"/>
          <circle cx="704" cy="420" r="17" fill="#fff" stroke="#39864b" strokeWidth="4"/><circle cx="704" cy="420" r="5" fill="#39864b"/>
          <path d="M195 450 Q430 290 704 420" fill="none" stroke="#80b96d" strokeWidth="3" strokeDasharray="8 10"/>
        </g>
        <g className="vj-tree" transform="translate(120 280)"><path d="M0 64v-43" stroke="#8d7655" strokeWidth="9" strokeLinecap="round"/><circle cx="-15" cy="12" r="31" fill="#80ae6c"/><circle cx="17" cy="5" r="34" fill="#609653"/><circle cx="0" cy="-20" r="30" fill="#94bf7b"/></g>
        <g className="vj-tree" transform="translate(820 275)"><path d="M0 64v-43" stroke="#8d7655" strokeWidth="9" strokeLinecap="round"/><circle cx="-15" cy="12" r="31" fill="#80ae6c"/><circle cx="17" cy="5" r="34" fill="#609653"/><circle cx="0" cy="-20" r="30" fill="#94bf7b"/></g>
        <ellipse cx="450" cy="440" rx="125" ry="18" fill="#1f3829" opacity=".18" filter="url(#vj-shadow)"/>
        <g className="vj-car-art" transform="translate(340 320)">
          <path d="M28 88 48 45q9-19 31-19h104q22 0 36 21l28 41 9 8v42H18V99Z" fill="url(#vj-car)" stroke="#3c5945" strokeWidth="4" strokeLinejoin="round"/>
          <path d="m63 47-20 38h76V34H81q-12 0-18 13Zm70-13v51h91l-25-38q-6-13-20-13Z" fill="#8ba990" stroke="#55775c" strokeWidth="3" strokeLinejoin="round"/>
          <path d="M20 98h231" stroke="#6c9c67" strokeWidth="6"/>
          <circle cx="70" cy="140" r="20" fill="#263b2e"/><circle cx="70" cy="140" r="9" fill="#dce8d8"/>
          <circle cx="207" cy="140" r="20" fill="#263b2e"/><circle cx="207" cy="140" r="9" fill="#dce8d8"/>
          <rect x="119" y="100" width="43" height="18" rx="9" fill="#278b43"/>
          <path d="m131 109 8-7 8 7" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        {isCommunity && <g className="vj-community-dots"><circle cx="305" cy="205" r="8" fill="#4d9956"/><circle cx="330" cy="185" r="8" fill="#4d9956"/><circle cx="355" cy="205" r="8" fill="#4d9956"/><path d="M305 205Q330 150 355 205" fill="none" stroke="#4d9956" strokeWidth="3" strokeDasharray="4 5"/></g>}
      </svg>
      <div className="vj-scene__caption"><span className="vj-caption-dot" />{journeys.find(item => item.id === active)?.detail}</div>
      <div className="vj-scene__coordinate">{isCity ? 'CITY TO CITY / 01' : isCommunity ? 'NEARBY / CONNECTED' : isFlexible ? 'YOUR RIDE / YOUR TIME' : 'DAILY ROUTE / SHARED'}</div>
    </div>
  );
}

export default function ViarisJourneyViewer() {
  const [activeId, setActiveId] = useState(journeys[0].id);
  const active = journeys.find(item => item.id === activeId) ?? journeys[0];
  return (
    <section className="vj-section" aria-label="Explore the ways to travel with Viaris">
      <div className="vj-inner">
        <div className="vj-selector" role="tablist" aria-label="Viaris journey options" aria-orientation="vertical">
          {journeys.map((item) => {
            const selected = item.id === activeId;
            return (
              <div className={`vj-option-wrap${selected ? ' is-active' : ''}`} key={item.id}>
                <button className="vj-option" type="button" role="tab" aria-selected={selected} aria-expanded={selected} aria-controls="vj-panel" id={`vj-tab-${item.id}`} tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(item.id)}
                  onKeyDown={(event) => {
                    const index = journeys.findIndex(entry => entry.id === item.id);
                    let next = index;
                    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % journeys.length;
                    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + journeys.length) % journeys.length;
                    else if (event.key === 'Home') next = 0;
                    else if (event.key === 'End') next = journeys.length - 1;
                    else return;
                    event.preventDefault();
                    setActiveId(journeys[next].id);
                    document.getElementById(`vj-tab-${journeys[next].id}`)?.focus();
                  }}>
                  <span className="vj-option-plus" aria-hidden="true"><svg viewBox="0 0 24 24" width="30" height="30"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.25"/><path d={selected ? "M7.5 12h9" : "M12 7.5v9M7.5 12h9"} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></span>
                  <span className="vj-option-copy">{item.title}</span>
                </button>
                {selected && <div className="vj-option-description" id={`vj-description-${item.id}`}><p>{item.description}</p><span>{item.detail}</span></div>}
              </div>
            );
          })}
        </div>
        <div className="vj-display" id="vj-panel" role="tabpanel" aria-labelledby={`vj-tab-${active.id}`} tabIndex={0}>
          <div className="vj-display-visual" key={`scene-${active.id}`}><JourneyScene active={active.id}/></div>
        </div>
      </div>
    </section>
  );
}
