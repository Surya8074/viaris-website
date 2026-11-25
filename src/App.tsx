import { useEffect } from 'react';
import { ArrowUpRight, Menu, MapPin, Users, Fuel, Wallet, ArrowUpRight as DiagonalArrow } from 'lucide-react';

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
    }, { threshold: 0.18 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
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

      <section className="commute-story" id="experiences" aria-labelledby="commute-title">
        <div className="commute-intro">
          <div className="commute-copy" data-reveal>
            <span className="story-index">02 / THE EVERYDAY COMMUTE</span>
            <p className="story-overline">EVERY MORNING, THE SAME STORY</p>
            <h2 id="commute-title">Same community.<br /><em>Same destination.</em></h2>
            <p className="story-lede">Yet we leave separately. One car at a time, burning fuel, spending more — often heading to the very same workplace.</p>
          </div>
          <div className="commute-map" data-reveal aria-label="Illustration of separate commutes leaving one community">
            <div className="map-heading"><span>LAKEVIEW RESIDENCY</span><span>7:45 AM · MONDAY</span></div>
            <div className="map-origin"><span className="origin-pulse"></span><MapPin size={15}/><span>YOUR COMMUNITY</span></div>
            <svg className="route-art" viewBox="0 0 620 310" role="img" aria-label="Three separate routes travelling toward the same office district">
              <path className="route route-one" d="M82 35 C180 35 166 120 278 120 S420 62 548 62"/>
              <path className="route route-two" d="M82 35 C190 35 185 190 300 190 S420 150 548 150"/>
              <path className="route route-three" d="M82 35 C190 35 180 265 315 265 S438 238 548 238"/>
              <circle className="route-dot dot-one" cx="278" cy="120" r="5"/><circle className="route-dot dot-two" cx="300" cy="190" r="5"/><circle className="route-dot dot-three" cx="315" cy="265" r="5"/>
            </svg>
            <div className="solo-car car-one"><span className="car-symbol">↗</span><span>ALONE</span></div>
            <div className="solo-car car-two"><span className="car-symbol">↗</span><span>ALONE</span></div>
            <div className="solo-car car-three"><span className="car-symbol">↗</span><span>ALONE</span></div>
            <div className="map-destination"><span className="destination-dot"></span><span>THE SAME WORKPLACE DISTRICT</span></div>
            <div className="map-foot"><span>3 CARS</span><span>3 SEPARATE JOURNEYS</span></div>
          </div>
        </div>

        <div className="commute-turn">
          <div className="turn-copy" data-reveal>
            <span className="turn-kicker">NOW IMAGINE THIS</span>
            <h2>What if your neighbour was <em>going your way?</em></h2>
            <p>One shared ride could mean less fuel, a lighter commute and someone new to know.</p>
            <div className="turn-benefits">
              <span><Fuel size={16}/> Share the fuel cost</span>
              <span><Wallet size={16}/> Earn from empty seats</span>
              <span><Users size={16}/> Meet your neighbours</span>
            </div>
          </div>
          <div className="shared-journey" data-reveal>
            <div className="shared-photo" role="img" aria-label="Two neighbours sharing a morning car journey"></div>
            <div className="shared-route">
              <span className="shared-route-line"></span>
              <span className="shared-route-point"><MapPin size={13}/></span>
              <span className="shared-route-label">ONE ROUTE · SHARED</span>
              <span className="shared-route-end"><DiagonalArrow size={14}/></span>
            </div>
            <div className="shared-caption"><span>YOUR NEXT CO-PASSENGER</span><strong>could be your neighbour.</strong></div>
          </div>
        </div>
      </section>
      <div id="how-it-works" /><div id="communities" /><div id="get-app" />
    </main>
  );
}
