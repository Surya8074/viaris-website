import '../styles/benefits.css';

const benefits = [
  { title:'Spend Less', copy:<>Share fuel and travel costs<br/>with people on the same route.</>, image:'icon-01-spend-less.png', alt:'Green wallet illustration' },
  { title:'Travel Greener', copy:<>Fewer cars on the road,<br/>a cleaner, healthier city.</>, image:'icon-02-travel-greener.png', alt:'Two green leaves illustration' },
  { title:'Travel with Neighbours', copy:<>Ride with verified people<br/>from your community.</>, image:'icon-03-neighbourhood.png', alt:'Group of people illustration' },
  { title:'Built for Daily Life', copy:<>From one-time rides to<br/>daily commutes, all in one place.</>, image:'icon-04-daily-life.png', alt:'Calendar with check illustration' }
];

function BenefitCard({item}:{item:typeof benefits[number]}) {
  return <article className="vb-card">
    <img className="vb-card-icon" src={`/viaris-website/images/benefits/${item.image}`} alt={item.alt} loading="lazy"/>
    <h3>{item.title}</h3>
    <p>{item.copy}</p>
  </article>;
}

export default function BenefitsSection() {
  return <section className="vb-section" aria-labelledby="vb-title">
    <div className="vb-header">
      <div className="vb-eyebrow"><span aria-hidden="true">♧</span> Benefits</div>
      <h2 id="vb-title">Benefits</h2>
      <span className="vb-underline" aria-hidden="true"/>
      <p>Turn everyday commutes into shared, cost-effective and eco-friendly rides<br className="vb-desktop-break"/> with people from your own community.</p>
    </div>
    <div className="vb-grid">{benefits.map(item=><BenefitCard key={item.title} item={item}/>)}</div>
    <div className="vb-banner">
      <h3>A more connected<br/>and sustainable community.</h3>
      <div className="vb-divider" aria-hidden="true"/>
      <div className="vb-proof">
        <div className="vb-proof-item"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M7 19 10 10q1-3 4-3h12q3 0 4 3l3 9v12h-4v-4H11v4H7Z M10 19h20M13 13h14M12 23h2m12 0h2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="13" cy="23" r="1.5" fill="currentColor"/><circle cx="27" cy="23" r="1.5" fill="currentColor"/></svg><span>Lower<br/>travel cost</span></div>
        <div className="vb-proof-item"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M32 6C16 6 7 13 8 25c1 6 6 9 12 7C30 28 32 17 32 6Z M9 32 25 15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Less<br/>emissions</span></div>
        <div className="vb-proof-item"><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="10" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="8" cy="16" r="3.5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="32" cy="16" r="3.5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 31v-5c0-5 3-8 8-8s8 3 8 8v5ZM2 31v-4c0-4 2-7 6-7 2 0 3 .5 4 2m26 9v-4c0-4-2-7-6-7-2 0-3 .5-4 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Stronger<br/>neighbourhoods</span></div>
      </div>
      <img className="vb-community-art" src="/viaris-website/images/benefits/footer-community-illustration.png" alt="Illustration of a green residential neighbourhood" loading="lazy"/>
    </div>
  </section>;
}
