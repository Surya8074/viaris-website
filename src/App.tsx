import { useState } from 'react';
import { ArrowUpRight, Menu, MapPin, CalendarDays, Clock3, ArrowRight, CarFront, Users } from 'lucide-react';

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
        <a className="header-cta" href="#get-app">Get the app <ArrowUpRight size={15} /></a>
        <button className="menu-button" aria-label="Open menu"><Menu size={23} /></button>
      </header>

      <section className="hero" id="home">
        <div className="hero-photo" role="img" aria-label="A car travelling along a scenic open road">
          <div className="photo-shade" />
          <div className="hero-topline"><span>MOVE TOGETHER</span><span>01 — A NEW WAY TO GO</span></div>
          <div className="hero-copy">
            <p className="eyebrow"><span /> A MORE CONNECTED WAY TO TRAVEL</p>
            <h1>Same roads.<br /><em>Different people.</em><br />One journey.</h1>
            <p className="hero-description">Your next journey has room for more.<br />Find people going your way, or share the ride.</p>
            <a className="explore-link" href="#experiences">Discover the Viaris way <ArrowRight size={17} /></a>
          </div>

          <div className="journey-card">
            <div className="card-heading">
              <div><span className="card-kicker">YOUR JOURNEY STARTS HERE</span><h2>Where are you headed?</h2></div>
              <span className="card-icon"><CarFront size={20} /></span>
            </div>
            <div className="mode-switch" role="tablist" aria-label="Journey action">
              <button className={mode === 'find' ? 'selected' : ''} onClick={() => setMode('find')} role="tab" aria-selected={mode === 'find'}><MapPin size={15} /> Find a ride</button>
              <button className={mode === 'publish' ? 'selected' : ''} onClick={() => setMode('publish')} role="tab" aria-selected={mode === 'publish'}><Users size={15} /> Publish a ride</button>
            </div>
            <label className="field"><span>{mode === 'find' ? 'PICK-UP LOCATION' : 'STARTING FROM'}</span><div><MapPin size={16} /><input placeholder="Enter your starting point" /></div></label>
            <label className="field"><span>{mode === 'find' ? 'YOUR DESTINATION' : 'HEADED TO'}</span><div><MapPin size={16} /><input placeholder="Where are you going?" /></div></label>
            <div className="field-row">
              <label className="field"><span>DATE</span><div><CalendarDays size={16} /><input type="text" placeholder="Choose a date" onFocus={(e) => (e.currentTarget.type = 'date')} /></div></label>
              <label className="field"><span>TIME</span><div><Clock3 size={16} /><input type="time" defaultValue="08:30" /></div></label>
            </div>
            <button className="card-submit" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>{mode === 'find' ? 'Explore available rides' : 'Share your journey'} <ArrowUpRight size={17} /></button>
            <p className="card-note">One platform. Two ways to make the journey count.</p>
          </div>
          <div className="hero-bottomline"><span>DAILY COMMUTE · INTERCITY · COMMUNITIES</span><span>GO FURTHER, TOGETHER <span className="bottom-dot">↗</span></span></div>
        </div>
      </section>
      <div className="below-fold" id="experiences"><span>01 / THE VIARIS EXPERIENCE</span><p>More than getting there.<br /><strong>It’s who you go with.</strong></p></div>
      <div id="how-it-works" /><div id="communities" /><div id="get-app" />
    </main>
  );
}
