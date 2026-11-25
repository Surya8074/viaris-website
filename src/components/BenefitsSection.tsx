import { Wallet, UsersRound, Leaf, CalendarClock } from 'lucide-react';
import '../styles/benefits.css';

const BENEFITS = [
  {number:'01',icon:Wallet,detail:'SAVE ON EVERY JOURNEY',title:'Keep more in your pocket.',description:'Share fuel and travel costs with people going the same way. A smarter way to make every commute count.'},
  {number:'02',icon:UsersRound,detail:'TRAVEL WITH YOUR COMMUNITY',title:'The road feels better together.',description:'Find familiar faces and meet people nearby who share your route, routine or destination.'},
  {number:'03',icon:Leaf,detail:'MAKE A LIGHTER IMPACT',title:'One less car going alone.',description:'When more people share a ride, fewer separate cars need to make the same journey.'},
  {number:'04',icon:CalendarClock,detail:'BUILT AROUND YOUR ROUTINE',title:'Your journey, on your terms.',description:'Find a one-time ride, arrange your regular weekday commute or share a trip between cities.'}
];

export default function BenefitsSection() {
  return <section className="benefits-section" aria-labelledby="benefits-title">
    <div className="benefits-inner">
      <header className="benefits-heading">
        <div>
          <span className="benefits-eyebrow">WHY GO IT ALONE?</span>
          <h2 id="benefits-title">Good things happen<br/><em>when we go together.</em></h2>
        </div>
        <p>One shared ride can make a difference to your day, your neighbourhood and the road ahead.</p>
      </header>
      <div className="benefits-grid">
        {BENEFITS.map(({number,icon:Icon,detail,title,description})=><article className="benefit-item" key={number}>
          <div className="benefit-art" aria-hidden="true"><Icon/></div>
          <div className="benefit-copy">
            <span className="benefit-number">{number}</span>
            <span className="benefit-detail">{detail}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </article>)}
      </div>
      <div className="benefits-signoff"><span/>SAME ROADS. DIFFERENT PEOPLE. ONE JOURNEY.<span/></div>
    </div>
  </section>;
}
