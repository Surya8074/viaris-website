import { useState } from 'react';
import { ArrowUpRight, Menu, MapPin, CalendarDays, Clock3, CarFront, Users, Navigation } from 'lucide-react';

type RideMode = 'find' | 'publish';

export default function App() {
  const [mode, setMode] = useState<RideMode>('find');

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

          <div className="journey-card">
            <div className="card-heading">
              <div><span className="card-kicker">START YOUR NEXT JOURNEY</span><h2>Where are you headed?</h2></div>
              <span className="card-icon"><Navigation size={19} /></span>
            </div>
            <div className="mode-switch" role="tablist" aria-label="Choose what you want to do">
              <button className={mode === 'find' ? 'selected' : ''} onClick={() => setMode('find')} role="tab" aria-selected={mode === 'find'}><MapPin size={14} /> Find a ride</button>
              <button className={mode === 'publish' ? 'selected' : ''} onClick={() => setMode('publish')} role="tab" aria-selected={mode === 'publish'}><Users size={14} /> Publish a ride</button>
            </div>
            <label className="field"><span>{mode === 'find' ? 'PICK-UP LOCATION' : 'STARTING POINT'}</span><div><MapPin size={15} /><input placeholder="Enter your starting point" /></div></label>
            <label className="field"><span>{mode === 'find' ? 'DROP-OFF LOCATION' : 'DESTINATION'}</span><div><MapPin size={15} /><input placeholder="Where are you going?" /></div></label>
            <div className="field-row">
              <label className="field"><span>TRAVEL DATE</span><div><CalendarDays size={15} /><input type="text" placeholder="Choose date" onFocus={(e) => (e.currentTarget.type = 'date')} /></div></label>
              <label className="field"><span>TIME</span><div><Clock3 size={15} /><input type="time" defaultValue="08:30" /></div></label>
            </div>
            <button className="card-submit" onClick={() => document.getElementById(mode === 'find' ? 'how-it-works' : 'how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>{mode === 'find' ? 'Explore available rides' : 'Share your journey'} <ArrowUpRight size={16} /></button>
            <p className="card-note">One platform. Two ways to make the journey count.</p>
          </div>

          <div className="hero-bottomline"><span>DAILY COMMUTE <i /> INTERCITY <i /> COMMUNITIES</span><span>GO FURTHER, TOGETHER <b>↗</b></span></div>
        </div>
      </section>

      <section className="below-fold" id="experiences">
        <span>01 / THE VIARIS EXPERIENCE</span>
        <p>More than getting there.<br /><strong>It’s who you go with.</strong></p>
      </section>
      <div id="how-it-works" /><div id="communities" /><div id="get-app" />
    </main>
  );
}
