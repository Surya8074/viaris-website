import { useEffect } from 'react';
import { ArrowUpRight, Menu, MapPin, CarFront, Users, Building2 } from 'lucide-react';

export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    const story = document.querySelector<HTMLElement>('.community-story');
    const updateProgress = () => {
      if (!story) return;
      const rect = story.getBoundingClientRect();
      const travel = Math.max(1, story.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      story.style.setProperty('--story-progress', String(progress));
      const active = Math.min(3, Math.floor(progress * 4));
      story.querySelectorAll<HTMLElement>('[data-chapter]').forEach((chapter, index) => chapter.classList.toggle('chapter-active', index === active));
      const road = story.querySelector<SVGPathElement>('.road-motion-path');
      const vehicles = story.querySelectorAll<SVGGElement>('.road-vehicle');
      if (road && vehicles.length) {
        const length = road.getTotalLength();
        vehicles.forEach((vehicle, index) => {
          const merge = progress > 0.76;
          const offsets = merge ? [0.82, 0.82, 0.82] : [0.12, 0.27, 0.42];
          const t = Math.min(0.96, Math.max(0.02, progress * 0.82 + offsets[index]));
          const point = road.getPointAtLength(length * t);
          const ahead = road.getPointAtLength(Math.min(length, length * t + 2));
          const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180 / Math.PI;
          const lateral = merge ? 0 : (index - 1) * 23;
          vehicle.setAttribute('transform', `translate(${point.x + lateral} ${point.y}) rotate(${angle}) scale(.78)`);
          vehicle.style.opacity = merge && index > 0 ? '0' : '1';
        });
        const single = story.querySelector<SVGGElement>('.road-vehicle-single');
        if (single) {
          const point = road.getPointAtLength(length * Math.min(.96, Math.max(.02, progress * .82 + .42)));
          const ahead = road.getPointAtLength(Math.min(length, length * Math.min(.96, Math.max(.02, progress * .82 + .42)) + 2));
          const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180 / Math.PI;
          single.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(${angle}) scale(.82)`);
          single.style.opacity = progress > .76 ? '1' : '0';
        }
      }
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <main className="viaris-home">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Viaris home">viaris<span>.</span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#experiences">Experiences</a>
          <a href="#how-it-works">How it works</a>
          <a href="#communities">Communities</a>
        </nav>
        <div className="header-actions">
          <a className="header-cta" href="#get-app">Get the app <ArrowUpRight size={15} /></a>
          <button className="menu-button" aria-label="Open menu"><Menu size={22} /></button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-photo">
          <div className="hero-image" role="img" aria-label="A modern car travelling through a green countryside landscape" />
          <div className="hero-wash" />
          <div className="hero-topline"><span>MOVE TOGETHER</span><span>01 — A NEW WAY TO GO</span></div>

          <div className="hero-copy">
            <p className="eyebrow"><span /> THE JOURNEY IS BETTER SHARED</p>
            <h1>Same roads.<br /><em>Different people.</em> One journey.</h1>
            <p className="hero-description">Find people going your way. Share everyday commutes,<br className="desktop-break" /> discover intercity rides, and make every journey count.</p>
            <a className="hero-cta" href="#experiences">Explore the Viaris way <ArrowUpRight size={16} /></a>
          </div>

          <div className="hero-bottomline"><span>DAILY COMMUTE <i /> INTERCITY <i /> COMMUNITIES</span><span>GO FURTHER, TOGETHER <b>↗</b></span></div>
        </div>
      </section>

      <section className="community-story" id="experiences" aria-labelledby="community-story-title">
        <div className="story-masthead">
          <div><span className="story-index">02 / THE EVERYDAY COMMUTE</span><p className="story-overline">A COMMUNITY IN MOTION</p><h2 id="community-story-title">A hundred people.<br/><em>One community.</em></h2></div>
          <p className="story-intro">Every morning, people from the same community head in the same direction — without knowing it.</p>
          <div className="story-progress"><span>01</span><i/><span>02</span><i/><span>03</span><i/><span>04</span></div>
        </div>
        <div className="story-sequence">
          <svg className="story-road" viewBox="0 0 1200 2600" preserveAspectRatio="none" aria-hidden="true">
            <defs><linearGradient id="roadGlow" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#8eaf6e" stopOpacity=".2"/><stop offset=".5" stopColor="#b5e783" stopOpacity=".95"/><stop offset="1" stopColor="#8eaf6e" stopOpacity=".2"/></linearGradient><filter id="roadBlur"><feGaussianBlur stdDeviation="9"/></filter></defs>
            <path className="road-halo" d="M600 -30 C600 170 1030 180 1010 390 S160 600 190 830 S1060 1010 1000 1260 S150 1500 220 1740 S1030 1960 950 2180 S500 2450 600 2630"/>
            <path className="road-surface" d="M600 -30 C600 170 1030 180 1010 390 S160 600 190 830 S1060 1010 1000 1260 S150 1500 220 1740 S1030 1960 950 2180 S500 2450 600 2630"/>
            <path className="road-edge" d="M600 -30 C600 170 1030 180 1010 390 S160 600 190 830 S1060 1010 1000 1260 S150 1500 220 1740 S1030 1960 950 2180 S500 2450 600 2630"/>
            <path className="road-center" d="M600 -30 C600 170 1030 180 1010 390 S160 600 190 830 S1060 1010 1000 1260 S150 1500 220 1740 S1030 1960 950 2180 S500 2450 600 2630"/>
            <path className="road-motion-path" d="M600 -30 C600 170 1030 180 1010 390 S160 600 190 830 S1060 1010 1000 1260 S150 1500 220 1740 S1030 1960 950 2180 S500 2450 600 2630" />
            {[0,1,2].map((v)=><g className="road-vehicle" key={v}><ellipse cx="0" cy="3" rx="24" ry="42" fill="#17231c" opacity=".22"/><rect x="-18" y="-43" width="36" height="86" rx="12" fill={v===0?'#f5f1e8':v===1?'#8eaa73':'#c8d0c5'} stroke="#25352a" strokeWidth="2"/><path d="M-13 -22 Q0 -31 13 -22 L13 -3 L-13 -3Z" fill="#63766b"/><path d="M-13 8 L13 8 L13 25 Q0 32 -13 25Z" fill="#53675c"/><rect x="-15" y="-37" width="7" height="5" rx="2" fill="#f9f4d8"/><rect x="8" y="-37" width="7" height="5" rx="2" fill="#f9f4d8"/><rect x="-15" y="32" width="7" height="5" rx="2" fill="#d97862"/><rect x="8" y="32" width="7" height="5" rx="2" fill="#d97862"/><rect x="-21" y="-24" width="4" height="17" rx="2" fill="#26362b"/><rect x="17" y="-24" width="4" height="17" rx="2" fill="#26362b"/><rect x="-21" y="12" width="4" height="17" rx="2" fill="#26362b"/><rect x="17" y="12" width="4" height="17" rx="2" fill="#26362b"/></g>)}
            <g className="road-vehicle-single"><ellipse cx="0" cy="3" rx="25" ry="44" fill="#17231c" opacity=".22"/><rect x="-19" y="-45" width="38" height="90" rx="13" fill="#b6d987" stroke="#24362a" strokeWidth="2"/><path d="M-14 -23 Q0 -33 14 -23 L14 -2 L-14 -2Z" fill="#52695c"/><path d="M-14 9 L14 9 L14 27 Q0 34 -14 27Z" fill="#52695c"/><rect x="-15" y="-39" width="7" height="5" rx="2" fill="#fff5d4"/><rect x="8" y="-39" width="7" height="5" rx="2" fill="#fff5d4"/><rect x="-15" y="34" width="7" height="5" rx="2" fill="#dc7864"/><rect x="8" y="34" width="7" height="5" rx="2" fill="#dc7864"/></g>
          </svg>
          <article className="story-chapter chapter-community" data-chapter="0">
            <div className="chapter-copy" data-reveal><span className="chapter-number">01 <i/> THE PLACE WE SHARE</span><h3>A hundred people.<br/><em>One community.</em></h3><p>Different routines. Similar goals. A shared place to call home.</p><span className="chapter-note"><Building2 size={15}/> LAKEVIEW RESIDENCY · 7:45 AM</span></div>
            <div className="chapter-visual community-visual" data-reveal><div className="story-photo community-photo" role="img" aria-label="A modern residential community in the morning"/><span className="visual-caption">THE DAY BEGINS HERE <b>↗</b></span></div>
          </article>
          <article className="story-chapter chapter-separate" data-chapter="1">
            <div className="chapter-visual commute-visual" data-reveal><div className="story-photo commute-photo" role="img" aria-label="Cars leaving a residential community separately"/><span className="visual-caption">MONDAY · 8:05 AM <b>SEPARATE CARS / SAME DIRECTION</b></span></div>
            <div className="chapter-copy" data-reveal><span className="chapter-number">02 <i/> THE DAILY ROUTINE</span><h3>Every morning,<br/>we leave <em>separately.</em></h3><p>Different cars. Different journeys. Often heading to the very same workplace.</p><div className="route-facts"><span><CarFront size={17}/> One car at a time</span><span><MapPin size={17}/> Same direction</span></div></div>
          </article>
          <article className="story-chapter chapter-connection" data-chapter="2">
            <div className="chapter-copy" data-reveal><span className="chapter-number">03 <i/> THE LITTLE DISCOVERY</span><h3>What if your neighbour was <em>going your way?</em></h3><p>Someone just a few doors away could be heading to the same destination.</p><span className="chapter-note"><Users size={15}/> TWO ROUTINES. ONE SHARED DIRECTION.</span></div>
            <div className="chapter-visual connection-visual" data-reveal><div className="story-photo connection-photo" role="img" aria-label="Two neighbours meeting beside a car"/><span className="visual-caption">A FAMILIAR FACE. A NEW CONNECTION.</span></div>
          </article>
          <article className="story-chapter story-final" data-chapter="3">
            <div className="chapter-visual shared-visual" data-reveal><div className="story-photo shared-photo-image" role="img" aria-label="Two neighbours sharing a car journey together"/><span className="visual-caption">ONE CAR · ONE SHARED JOURNEY</span></div>
            <div className="chapter-copy shared-story-copy" data-reveal><span className="chapter-number">04 <i/> THE VIARIS WAY</span><h3>Many journeys.<br/><em>One shared ride.</em></h3><p>Share the journey, split the cost and get to know the people going your way.</p><div className="shared-outcomes"><span>Share the fuel cost</span><span>Make empty seats count</span><span>Meet your neighbours</span></div><a className="story-cta" href="#how-it-works">See how Viaris works <ArrowUpRight size={16}/></a></div>
          </article>
        </div>
        <div className="story-ending"><span className="ending-line"/><p>Same roads. <em>Different people.</em> One journey.</p><span className="ending-line"/></div>
      </section>
      <div id="how-it-works" /><div id="communities" /><div id="get-app" />
    </main>
  );
}
