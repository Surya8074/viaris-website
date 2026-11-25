import { Wallet, UsersRound, Leaf, CalendarClock } from 'lucide-react';
import '../styles/benefits.css';

const BENEFITS = [
  {
    number: '01',
    icon: Wallet,
    title: 'Make every trip go further.',
    description: 'Share fuel and other journey costs, so getting where you need to be can cost less.',
    detail: 'LESS SPENT ON THE WAY'
  },
  {
    number: '02',
    icon: UsersRound,
    title: 'Meet people going your way.',
    description: 'Turn familiar routes into shared journeys with people from your neighbourhood and beyond.',
    detail: 'MORE CONNECTIONS'
  },
  {
    number: '03',
    icon: Leaf,
    title: 'Leave a lighter footprint.',
    description: 'Fewer people driving alone means fewer separate cars making the same journey.',
    detail: 'FEWER SOLO CARS'
  },
  {
    number: '04',
    icon: CalendarClock,
    title: 'Fits the way you travel.',
    description: 'Find a one-time ride, plan your regular commute or share the road between cities.',
    detail: 'YOUR ROUTINE, YOUR WAY'
  }
];

export default function BenefitsSection() {
  return (
    <section className="benefits-section" aria-labelledby="benefits-title">
      <div className="benefits-inner">
        <header className="benefits-heading">
          <div>
            <span className="benefits-eyebrow">THE GOOD IN GOING TOGETHER</span>
            <h2 id="benefits-title">A better journey.<br/><em>In more ways than one.</em></h2>
          </div>
          <p>Sharing a ride is a small change to your routine. The good it brings can travel much further.</p>
        </header>
        <div className="benefits-grid">
          {BENEFITS.map(({ number, icon: Icon, title, description, detail }) => (
            <article className="benefit-item" key={number}>
              <div className="benefit-art" aria-hidden="true">
                <span className="benefit-orbit benefit-orbit--outer"/>
                <span className="benefit-orbit benefit-orbit--inner"/>
                <span className="benefit-icon"><Icon size={54} strokeWidth={1.35}/></span>
                <span className="benefit-index">{number}</span>
              </div>
              <div className="benefit-copy">
                <span className="benefit-detail">{detail}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="benefits-signoff"><span/>A little more shared. A little better for everyone.<span/></div>
      </div>
    </section>
  );
}
