import '../styles/benefits.css';

const benefits = [
  {
    title: 'Spend less on every journey',
    description: 'Share fuel and travel costs with people already heading your way.',
    image: 'icon-01-spend-less.png',
    alt: 'Green wallet illustration representing shared travel savings',
  },
  {
    title: 'Make every ride greener',
    description: 'Fewer cars making the same trip means a lighter footprint on the road.',
    image: 'icon-02-travel-greener.png',
    alt: 'Two green leaves representing lower environmental impact',
  },
  {
    title: 'Feel closer to your community',
    description: 'Get to know verified neighbours and people travelling in your direction.',
    image: 'icon-03-neighbourhood.png',
    alt: 'People illustration representing a connected neighbourhood',
  },
  {
    title: 'Fits the way you travel',
    description: 'Share a one-off journey or make carpooling part of your everyday routine.',
    image: 'icon-04-daily-life.png',
    alt: 'Calendar illustration representing everyday travel',
  },
];

function BenefitCard({ item, index }: { item: typeof benefits[number]; index: number }) {
  return (
    <article className="vb-card">
      <div className="vb-card-visual">
        <img
          className="vb-card-icon"
          src={`/viaris-website/images/${item.image}`}
          alt={item.alt}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="vb-card-content">
        <span className="vb-card-index">0{index + 1} / BENEFIT</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

function CommunityIllustration() {
  return (
    <div className="vb-community-art" aria-hidden="true">
      <svg viewBox="0 0 560 190" role="presentation">
        <defs>
          <linearGradient id="vb-sky" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e4f2df"/><stop offset="1" stopColor="#cfe6c7"/></linearGradient>
          <linearGradient id="vb-road" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b8c7b2"/><stop offset="1" stopColor="#849987"/></linearGradient>
          <linearGradient id="vb-car" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#dce9dc"/></linearGradient>
        </defs>
        <path d="M0 120 Q105 65 220 110 T560 83 V190 H0Z" fill="url(#vb-sky)" opacity=".75"/>
        <circle cx="455" cy="38" r="24" fill="#f3d98d" opacity=".7"/>
        <g fill="#b8d0b3" opacity=".8"><path d="M315 95V30h35v65zm42 0V15h42v80zm50 0V42h30v53z"/><path d="M324 43h6v8h-6zm13 0h6v8h-6zm30-12h7v10h-7zm14 0h7v10h-7zm-27 24h7v10h-7zm14 0h7v10h-7z" fill="#edf5e9"/></g>
        <path d="M0 143 Q130 105 260 135 T560 120 V190 H0Z" fill="#a8c99d"/>
        <path d="M210 190 Q310 122 560 133 V190Z" fill="url(#vb-road)"/>
        <path d="M300 190 Q375 143 560 148" fill="none" stroke="#f5f3d8" strokeWidth="3" strokeDasharray="14 12"/>
        <g><path d="M72 137v-33" stroke="#8c6a46" strokeWidth="7" strokeLinecap="round"/><circle cx="72" cy="95" r="24" fill="#72a85f"/><circle cx="54" cy="105" r="15" fill="#8cba72"/><circle cx="88" cy="108" r="16" fill="#5f994f"/></g>
        <g><path d="M490 130v-42" stroke="#8c6a46" strokeWidth="8" strokeLinecap="round"/><circle cx="490" cy="76" r="31" fill="#69a454"/><circle cx="468" cy="91" r="19" fill="#8cbd70"/><circle cx="514" cy="94" r="20" fill="#579447"/></g>
        <g transform="translate(335 112)"><ellipse cx="90" cy="53" rx="104" ry="10" fill="#66866a" opacity=".2"/><path d="M13 36 27 10q6-11 22-11h79q14 0 23 12l19 25v20H8V43q0-7 5-7Z" fill="url(#vb-car)" stroke="#9db69a" strokeWidth="2"/><path d="m39 7-13 25h58V2H49q-7 0-10 5Zm53-5v30h61l-16-24q-4-6-12-6Z" fill="#8eaf92"/><path d="M8 38h161" stroke="#6a9b61" strokeWidth="3"/><circle cx="43" cy="56" r="12" fill="#354b3a"/><circle cx="43" cy="56" r="5" fill="#dce8d9"/><circle cx="143" cy="56" r="12" fill="#354b3a"/><circle cx="143" cy="56" r="5" fill="#dce8d9"/><rect x="78" y="35" width="30" height="12" rx="6" fill="#258345"/><path d="m87 41 4-4 4 4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></g>
      </svg>
    </div>
  );
}

function ProofIcon({ type }: { type: 'cost' | 'planet' | 'people' }) {
  if (type === 'cost') {
    return <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M7 19 10 10q1-3 4-3h12q3 0 4 3l3 9v12h-4v-4H11v4H7Z M10 19h20M13 13h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="13" cy="23" r="1.5" fill="currentColor"/><circle cx="27" cy="23" r="1.5" fill="currentColor"/></svg>;
  }
  if (type === 'planet') {
    return <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M32 6C16 6 7 13 8 25c1 6 6 9 12 7C30 28 32 17 32 6Z M9 32 25 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }
  return <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="10" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="8" cy="16" r="3.5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="32" cy="16" r="3.5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 31v-5c0-5 3-8 8-8s8 3 8 8v5ZM2 31v-4c0-4 2-7 6-7 2 0 3 .5 4 2m26 9v-4c0-4-2-7-6-7-2 0-3 .5-4 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export default function BenefitsSection() {
  return (
    <section className="vb-section" aria-labelledby="vb-title">
      <div className="vb-shell">
        <header className="vb-header">
          <div className="vb-eyebrow"><span aria-hidden="true">✳</span> THE VIARIS DIFFERENCE</div>
          <h2 id="vb-title">Good things happen<br className="vb-title-break" /> when we <em>go together.</em></h2>
          <span className="vb-underline" aria-hidden="true" />
          <p>Less spent on the road. A lighter impact on the planet. More connection along the way.</p>
        </header>

        <div className="vb-grid">
          {benefits.map((item, index) => <BenefitCard key={item.title} item={item} index={index} />)}
        </div>

        <aside className="vb-banner" aria-label="The impact of shared journeys">
          <div className="vb-banner-message">
            <span className="vb-banner-kicker">A BETTER WAY, TOGETHER</span>
            <h3>A more connected<br />and sustainable community.</h3>
          </div>
          <span className="vb-divider" aria-hidden="true" />
          <div className="vb-proof">
            <div className="vb-proof-item"><ProofIcon type="cost" /><span>Lower travel<br />costs</span></div>
            <div className="vb-proof-item"><ProofIcon type="planet" /><span>Fewer emissions<br />per shared trip</span></div>
            <div className="vb-proof-item"><ProofIcon type="people" /><span>Stronger local<br />connections</span></div>
          </div>
          <CommunityIllustration />
        </aside>
      </div>
    </section>
  );
}
