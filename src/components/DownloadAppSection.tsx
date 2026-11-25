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
        <img src="/viaris-website/images/viaris-app-cta-visual.png" alt="" />
      </div>
    </section>
  );
}
