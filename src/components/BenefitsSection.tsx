import '../styles/benefits.css';

function BenefitIllustration({ type }: { type: string }) {
  if (type === 'cost') return <svg viewBox="0 0 190 170" fill="none" aria-hidden="true">
    <path d="M45 46h57a8 8 0 0 1 8 8v75H45z" fill="#fffefa" stroke="#315b42" strokeWidth="2.5"/>
    <path d="M45 59h65M57 76h35" stroke="#315b42" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M110 69h11l12 13v31h-12V91l-11-10" stroke="#315b42" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M133 113h7a6 6 0 0 0 6-6V91" stroke="#315b42" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="77" cy="105" r="17" fill="#dce9d3" stroke="#769765" strokeWidth="1.5"/>
    <path d="M77 96v18m-6-13c0-3 12-4 12 0s-12 3-12 7 12 4 12 0" stroke="#315b42" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M34 139h105" stroke="#9caf8c" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="43" cy="139" r="3" fill="#9caf8c"/><circle cx="136" cy="139" r="3" fill="#9caf8c"/>
  </svg>;
  if (type === 'people') return <svg viewBox="0 0 190 170" fill="none" aria-hidden="true">
    <path d="M31 125c7-22 22-34 43-34s36 12 43 34" stroke="#315b42" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="74" cy="65" r="20" fill="#fffefa" stroke="#315b42" strokeWidth="3"/>
    <path d="M92 91c18-2 35 10 42 31" stroke="#78976a" strokeWidth="3" strokeLinecap="round"/>
    <path d="M102 48c13 3 20 15 17 28-2 8-7 13-14 16" stroke="#78976a" strokeWidth="3" strokeLinecap="round"/>
    <path d="M27 137h120" stroke="#9caf8c" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M44 145c12-7 24-7 36 0s24 7 36 0" stroke="#9caf8c" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="147" cy="43" r="13" fill="#dce9d3"/><path d="M141 43h12m-6-6v12" stroke="#52764b" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>;
  if (type === 'planet') return <svg viewBox="0 0 190 170" fill="none" aria-hidden="true">
    <circle cx="91" cy="83" r="47" fill="#fffefa" stroke="#9caf8c" strokeWidth="1.5"/>
    <path d="M57 94c17-26 43-35 72-30-4 28-22 48-49 49-11 0-19-7-23-19Z" fill="#dce9d3" stroke="#315b42" strokeWidth="2"/>
    <path d="M59 120c17-23 35-39 61-54" stroke="#315b42" strokeWidth="2.4" strokeLinecap="round"/>
    <path d="M92 88c-2-11-1-20 5-29m-18 45c-9-1-16-5-22-12m41-4c9-1 16-5 22-12" stroke="#769765" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M22 139h140" stroke="#9caf8c" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M34 130c9-9 18-9 27 0m62 0c9-9 18-9 27 0" stroke="#769765" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="144" cy="39" r="4" fill="#9caf8c"/><circle cx="36" cy="49" r="3" fill="#9caf8c"/>
  </svg>;
  return <svg viewBox="0 0 190 170" fill="none" aria-hidden="true">
    <rect x="43" y="39" width="87" height="94" rx="7" fill="#fffefa" stroke="#315b42" strokeWidth="2.5"/>
    <path d="M43 63h87M64 31v17m45-17v17" stroke="#315b42" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M61 82h14m-14 15h14m-14 15h14" stroke="#9caf8c" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="119" cy="111" r="25" fill="#dce9d3" stroke="#769765" strokeWidth="2"/>
    <path d="M119 97v15l10 6" stroke="#315b42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 143h126" stroke="#9caf8c" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M145 49h12m-6-6v12" stroke="#769765" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>;
}

const BENEFITS = [
  {number:'01',type:'cost',detail:'LESS SPENT ON THE WAY',title:'Make every trip go further.',description:'Share fuel and journey costs, so getting where you need to be can cost less.'},
  {number:'02',type:'people',detail:'MORE CONNECTIONS',title:'Meet people going your way.',description:'Turn familiar routes into shared journeys with people from your neighbourhood and beyond.'},
  {number:'03',type:'planet',detail:'FEWER SOLO CARS',title:'Leave a lighter footprint.',description:'Fewer people driving alone means fewer separate cars making the same journey.'},
  {number:'04',type:'time',detail:'YOUR ROUTINE, YOUR WAY',title:'Fits the way you travel.',description:'Find a one-time ride, plan your regular commute or share the road between cities.'}
];

export default function BenefitsSection() {
  return <section className="benefits-section" aria-labelledby="benefits-title">
    <div className="benefits-inner">
      <header className="benefits-heading">
        <div className="benefits-heading-main">
          <span className="benefits-eyebrow">THE GOOD IN GOING TOGETHER</span>
          <h2 id="benefits-title">A better journey.<br/><em>In more ways than one.</em></h2>
        </div>
        <p>Sharing a ride is a small change to your routine. The good it brings can travel much further.</p>
      </header>
      <div className="benefits-grid">
        {BENEFITS.map(item=><article className="benefit-item" key={item.number}>
          <span className="benefit-number">{item.number}</span>
          <div className="benefit-art"><BenefitIllustration type={item.type}/></div>
          <div className="benefit-copy">
            <span className="benefit-detail">{item.detail}</span>
            <h3>{item.title}</h3><p>{item.description}</p>
          </div>
        </article>)}
      </div>
      <div className="benefits-signoff"><span/>A little more shared. A little better for everyone.<span/></div>
    </div>
  </section>;
}
