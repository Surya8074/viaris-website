import { useEffect } from 'react';
import { ArrowUpRight, Menu, MapPin, CarFront, Users, Building2, Wallet, Fuel } from 'lucide-react';

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
          const dx = ahead.x - point.x;
          const dy = ahead.y - point.y;
          const angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
          const lateral = merge ? 0 : (index - 1) * 17;
          const normalLength = Math.hypot(dx, dy) || 1;
          const nx = -dy / normalLength;
          const ny = dx / normalLength;
          vehicle.setAttribute('transform', `translate(${point.x + nx * lateral} ${point.y + ny * lateral}) rotate(${angle}) scale(.66)`);
          vehicle.style.opacity = merge && index > 0 ? '0' : '1';
        });
        const single = story.querySelector<SVGGElement>('.road-vehicle-single');
        if (single) {
          const point = road.getPointAtLength(length * Math.min(.96, Math.max(.02, progress * .82 + .42)));
          const ahead = road.getPointAtLength(Math.min(length, length * Math.min(.96, Math.max(.02, progress * .82 + .42)) + 2));
          const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180 / Math.PI + 90;
          single.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(${angle}) scale(.7)`);
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
          <svg className="story-road" viewBox="0 0 160 2600" preserveAspectRatio="none" aria-hidden="true">
            <defs><linearGradient id="roadShoulder" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#b7b7a4"/><stop offset=".18" stopColor="#dedbc9"/><stop offset=".5" stopColor="#eee9d8"/><stop offset=".82" stopColor="#d4d0be"/><stop offset="1" stopColor="#aaa995"/></linearGradient><linearGradient id="roadAsphalt" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#303a35"/><stop offset=".18" stopColor="#414b44"/><stop offset=".52" stopColor="#4c554d"/><stop offset=".82" stopColor="#39443d"/><stop offset="1" stopColor="#27342d"/></linearGradient><filter id="roadShadow" x="-100%" y="-10%" width="300%" height="120%"><feGaussianBlur stdDeviation="5"/></filter></defs>
            <path className="road-shadow" d="M80 -40 C80 100 122 135 116 260 S28 420 38 590 S130 760 112 930 S24 1100 42 1270 S130 1440 110 1610 S24 1780 42 1950 S126 2120 106 2290 S65 2460 80 2640"/><path className="road-shoulder" d="M80 -40 C80 100 122 135 116 260 S28 420 38 590 S130 760 112 930 S24 1100 42 1270 S130 1440 110 1610 S24 1780 42 1950 S126 2120 106 2290 S65 2460 80 2640"/><path className="road-asphalt" d="M80 -40 C80 100 122 135 116 260 S28 420 38 590 S130 760 112 930 S24 1100 42 1270 S130 1440 110 1610 S24 1780 42 1950 S126 2120 106 2290 S65 2460 80 2640"/><path className="road-edge-line" d="M80 -40 C80 100 122 135 116 260 S28 420 38 590 S130 760 112 930 S24 1100 42 1270 S130 1440 110 1610 S24 1780 42 1950 S126 2120 106 2290 S65 2460 80 2640"/><path className="road-center" d="M80 -40 C80 100 122 135 116 260 S28 420 38 590 S130 760 112 930 S24 1100 42 1270 S130 1440 110 1610 S24 1780 42 1950 S126 2120 106 2290 S65 2460 80 2640"/><path className="road-motion-path" d="M80 -40 C80 100 122 135 116 260 S28 420 38 590 S130 760 112 930 S24 1100 42 1270 S130 1440 110 1610 S24 1780 42 1950 S126 2120 106 2290 S65 2460 80 2640"/>
            <g className="road-vehicle"><ellipse cx="1" cy="5" rx="17" ry="34" fill="#142019" opacity=".24"/><path d="M-10 -31 Q-9 -39 -4 -41 L4 -41 Q9 -39 10 -31 L14 -18 Q17 -10 17 2 L16 25 Q15 34 8 36 L-8 36 Q-15 34 -16 25 L-17 2 Q-17 -10 -14 -18Z" fill="#e8e4d8" stroke="#26372b" strokeWidth="1.8"/><path d="M-9 -24 Q0 -33 9 -24 L11 -8 L-11 -8Z" fill="#65766e" stroke="#33463a" strokeWidth="1"/><path d="M-11 -4 L11 -4 L12 13 L-12 13Z" fill="#65766e" opacity=".9"/><path d="M-9 18 L9 18 L8 28 Q0 32 -8 28Z" fill="#40564a"/><path d="M-12 -34 L-7 -37 L7 -37 L12 -34" fill="none" stroke="#fff5d9" strokeWidth="2.4" strokeLinecap="round"/><rect x="-14" y="-28" width="3" height="8" rx="1.2" fill="#fff3d1"/><rect x="11" y="-28" width="3" height="8" rx="1.2" fill="#fff3d1"/><rect x="-14" y="27" width="3" height="6" rx="1" fill="#d87967"/><rect x="11" y="27" width="3" height="6" rx="1" fill="#d87967"/><path d="M-17 -18 L-20 -14 L-20 -3 L-17 0 M17 -18 L20 -14 L20 -3 L17 0 M-17 11 L-20 14 L-20 23 L-16 25 M17 11 L20 14 L20 23 L16 25" fill="#25352a" stroke="#25352a" strokeWidth="2"/></g><g className="road-vehicle"><ellipse cx="1" cy="5" rx="17" ry="34" fill="#142019" opacity=".24"/><path d="M-10 -31 Q-9 -39 -4 -41 L4 -41 Q9 -39 10 -31 L14 -18 Q17 -10 17 2 L16 25 Q15 34 8 36 L-8 36 Q-15 34 -16 25 L-17 2 Q-17 -10 -14 -18Z" fill="#a9bf8a" stroke="#26372b" strokeWidth="1.8"/><path d="M-9 -24 Q0 -33 9 -24 L11 -8 L-11 -8Z" fill="#53685e" stroke="#33463a" strokeWidth="1"/><path d="M-11 -4 L11 -4 L12 13 L-12 13Z" fill="#53685e" opacity=".9"/><path d="M-9 18 L9 18 L8 28 Q0 32 -8 28Z" fill="#40564a"/><path d="M-12 -34 L-7 -37 L7 -37 L12 -34" fill="none" stroke="#fff5d9" strokeWidth="2.4" strokeLinecap="round"/><rect x="-14" y="-28" width="3" height="8" rx="1.2" fill="#fff3d1"/><rect x="11" y="-28" width="3" height="8" rx="1.2" fill="#fff3d1"/><rect x="-14" y="27" width="3" height="6" rx="1" fill="#d87967"/><rect x="11" y="27" width="3" height="6" rx="1" fill="#d87967"/><path d="M-17 -18 L-20 -14 L-20 -3 L-17 0 M17 -18 L20 -14 L20 -3 L17 0 M-17 11 L-20 14 L-20 23 L-16 25 M17 11 L20 14 L20 23 L16 25" fill="#25352a" stroke="#25352a" strokeWidth="2"/></g><g className="road-vehicle"><ellipse cx="1" cy="5" rx="17" ry="34" fill="#142019" opacity=".24"/><path d="M-10 -31 Q-9 -39 -4 -41 L4 -41 Q9 -39 10 -31 L14 -18 Q17 -10 17 2 L16 25 Q15 34 8 36 L-8 36 Q-15 34 -16 25 L-17 2 Q-17 -10 -14 -18Z" fill="#b9c4c4" stroke="#26372b" strokeWidth="1.8"/><path d="M-9 -24 Q0 -33 9 -24 L11 -8 L-11 -8Z" fill="#5c7067" stroke="#33463a" strokeWidth="1"/><path d="M-11 -4 L11 -4 L12 13 L-12 13Z" fill="#5c7067" opacity=".9"/><path d="M-9 18 L9 18 L8 28 Q0 32 -8 28Z" fill="#40564a"/><path d="M-12 -34 L-7 -37 L7 -37 L12 -34" fill="none" stroke="#fff5d9" strokeWidth="2.4" strokeLinecap="round"/><rect x="-14" y="-28" width="3" height="8" rx="1.2" fill="#fff3d1"/><rect x="11" y="-28" width="3" height="8" rx="1.2" fill="#fff3d1"/><rect x="-14" y="27" width="3" height="6" rx="1" fill="#d87967"/><rect x="11" y="27" width="3" height="6" rx="1" fill="#d87967"/><path d="M-17 -18 L-20 -14 L-20 -3 L-17 0 M17 -18 L20 -14 L20 -3 L17 0 M-17 11 L-20 14 L-20 23 L-16 25 M17 11 L20 14 L20 23 L16 25" fill="#25352a" stroke="#25352a" strokeWidth="2"/></g><g className="road-vehicle-single"><ellipse cx="1" cy="5" rx="17" ry="34" fill="#142019" opacity=".24"/><path d="M-10 -31 Q-9 -39 -4 -41 L4 -41 Q9 -39 10 -31 L14 -18 Q17 -10 17 2 L16 25 Q15 34 8 36 L-8 36 Q-15 34 -16 25 L-17 2 Q-17 -10 -14 -18Z" fill="#b6d987" stroke="#26372b" strokeWidth="1.8"/><path d="M-9 -24 Q0 -33 9 -24 L11 -8 L-11 -8Z" fill="#465e52" stroke="#33463a" strokeWidth="1"/><path d="M-11 -4 L11 -4 L12 13 L-12 13Z" fill="#465e52" opacity=".9"/><path d="M-9 18 L9 18 L8 28 Q0 32 -8 28Z" fill="#40564a"/><path d="M-12 -34 L-7 -37 L7 -37 L12 -34" fill="none" stroke="#fff5d9" strokeWidth="2.4" strokeLinecap="round"/><rect x="-14" y="-28" width="3" height="8" rx="1.2" fill="#fff3d1"/><rect x="11" y="-28" width="3" height="8" rx="1.2" fill="#fff3d1"/><rect x="-14" y="27" width="3" height="6" rx="1" fill="#d87967"/><rect x="11" y="27" width="3" height="6" rx="1" fill="#d87967"/><path d="M-17 -18 L-20 -14 L-20 -3 L-17 0 M17 -18 L20 -14 L20 -3 L17 0 M-17 11 L-20 14 L-20 23 L-16 25 M17 11 L20 14 L20 23 L16 25" fill="#25352a" stroke="#25352a" strokeWidth="2"/></g>
          </svg>
          <article className="story-chapter chapter-community" data-chapter="0">
            <div className="chapter-copy" data-reveal><span className="chapter-number">01 <i/> THE PLACE WE SHARE</span><h3>A hundred people.<br/><em>One community.</em></h3><p>Different routines. Similar goals. A shared place to call home.</p><div className="story-tags"><span><Building2 size={17}/> Shared neighbourhood</span><span><Users size={17}/> Familiar faces</span></div></div>
            <div className="chapter-visual community-visual" data-reveal><div className="story-photo community-photo" role="img" aria-label="A modern residential community in the morning"/><span className="visual-caption">THE DAY BEGINS HERE <b>↗</b></span></div>
          </article>
          <article className="story-chapter chapter-separate" data-chapter="1">
            <div className="chapter-visual commute-visual" data-reveal><div className="story-photo commute-photo" role="img" aria-label="Cars leaving a residential community separately"/><span className="visual-caption">MONDAY · 8:05 AM <b>SEPARATE CARS / SAME DIRECTION</b></span></div>
            <div className="chapter-copy" data-reveal><span className="chapter-number">02 <i/> THE DAILY ROUTINE</span><h3>Every morning,<br/>we leave <em>separately.</em></h3><p>Different cars. Different journeys. Often heading to the very same workplace.</p><div className="route-facts"><span><CarFront size={17}/> One car at a time</span><span><MapPin size={17}/> Same direction</span></div></div>
          </article>
          <article className="story-chapter chapter-connection" data-chapter="2">
            <div className="chapter-copy" data-reveal><span className="chapter-number">03 <i/> THE LITTLE DISCOVERY</span><h3>What if your neighbour was <em>going your way?</em></h3><p>Someone just a few doors away could be heading to the same destination.</p><div className="story-tags"><span><MapPin size={17}/> Same destination</span><span><Users size={17}/> Just a few doors away</span></div></div>
            <div className="chapter-visual connection-visual" data-reveal><div className="story-photo connection-photo" role="img" aria-label="Two neighbours meeting beside a car"/><span className="visual-caption">A FAMILIAR FACE. A NEW CONNECTION.</span></div>
          </article>
          <article className="story-chapter story-final" data-chapter="3">
            <div className="chapter-visual shared-visual" data-reveal><div className="story-photo shared-photo-image" role="img" aria-label="Two neighbours sharing a car journey together"/><span className="visual-caption">ONE CAR · ONE SHARED JOURNEY</span></div>
            <div className="chapter-copy shared-story-copy" data-reveal><span className="chapter-number">04 <i/> THE VIARIS WAY</span><h3>Many journeys.<br/><em>One shared ride.</em></h3><p>Share the journey, split the cost and get to know the people going your way.</p><div className="shared-outcomes"><span><Fuel size={18}/> Share the fuel cost</span><span><Wallet size={18}/> Split the ride fairly</span><span><Users size={18}/> Meet your neighbours</span></div><a className="story-cta" href="#how-it-works">See how Viaris works <ArrowUpRight size={16}/></a></div>
          </article>
        </div>
        <div className="story-ending"><span className="ending-line"/><p>Same roads. <em>Different people.</em> One journey.</p><span className="ending-line"/></div>
      </section>
      <div id="how-it-works" /><div id="communities" /><div id="get-app" />
    </main>
  );
}
