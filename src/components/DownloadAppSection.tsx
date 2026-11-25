import { Apple, ArrowUpRight, Play } from 'lucide-react';
import '../styles/download-app.css';

export default function DownloadAppSection() {
  return (
    <section className="download-app" aria-labelledby="download-app-title">
      <div className="download-app__copy">
        <span className="download-app__eyebrow"><i /> YOUR NEXT JOURNEY STARTS HERE</span>
        <h2 id="download-app-title">Good journeys<br/>start <em>together.</em></h2>
        <p>Find people heading your way. Share the ride, split the cost, and make every commute count.</p>
        <div className="download-app__actions">
          <span className="download-app__store"><Apple size={19}/><span><small>Download on the</small><b>App Store</b></span><em>Coming soon</em></span>
          <span className="download-app__store"><Play size={18}/><span><small>Get it on</small><b>Google Play</b></span><em>Coming soon</em></span>
        </div>
        <span className="download-app__note">Viaris Ride · Go further, together.</span>
      </div>
      <div className="download-app__visual" aria-hidden="true">
        <div className="download-app__phone">
          <div className="download-app__phone-top"><span>9:41</span><span>●●●</span></div>
          <div className="download-app__map"><span className="download-app__map-pin pin-a">●</span><span className="download-app__map-pin pin-b">●</span><span className="download-app__route" /></div>
          <div className="download-app__ride-card">
            <span className="download-app__ride-kicker">YOUR COMMUNITY RIDE</span>
            <b>Going your way?</b>
            <div className="download-app__avatars"><i>R</i><i>A</i><i>M</i><small>+2</small></div>
            <div className="download-app__ride-meta"><span>Today · 8:30 AM</span><span>3 seats</span></div>
            <div className="download-app__ride-button">Find a shared ride <ArrowUpRight size={13}/></div>
          </div>
        </div>
        <span className="download-app__float-icon float-car">♧</span>
        <span className="download-app__float-icon float-people">◎</span>
      </div>
    </section>
  );
}
