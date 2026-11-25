import "../styles/community-exchange.css";

function CommunityConnector() {
  return (
    <div className="ce-connector" aria-hidden="true">
      <svg viewBox="0 0 180 116" preserveAspectRatio="none">
        <path className="ce-connector__path" d="M2 30 C42 30 50 86 90 86 S138 30 178 30" />
        <circle className="ce-connector__dot" cx="2" cy="30" r="5" />
        <circle className="ce-connector__dot" cx="178" cy="30" r="5" />
      </svg>
      <span className="ce-connector__hub">
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="14" r="6.5" />
          <circle cx="11" cy="19" r="5" />
          <circle cx="37" cy="19" r="5" />
          <path d="M11 38v-4c0-6 5-10 13-10s13 4 13 10v4M2 36v-3c0-5 3-8 9-9M46 36v-3c0-5-3-8-9-9" />
        </svg>
      </span>
    </div>
  );
}

function RideCard({ kind, title, question, copy, people }: {
  kind: "find" | "offer";
  title: string;
  question: string;
  copy: string;
  people: string[];
}) {
  return (
    <article className={`ce-card ce-card--${kind}`}>
      <div className="ce-card__top">
        <span className="ce-card__eyebrow">{kind === "find" ? "FIND YOUR MATCH" : "SHARE YOUR ROUTE"}</span>
        <span className="ce-card__arrow" aria-hidden="true">↗</span>
      </div>
      <div className="ce-card__people" aria-hidden="true">
        {people.map((person, index) => <span className={`ce-avatar ce-avatar--${index + 1}`} key={person}>{person}</span>)}
      </div>
      <h2>{title}</h2>
      <p className="ce-card__question">{question}</p>
      <p className="ce-card__copy">{copy}</p>
      <span className="ce-card__bottomline">{kind === "find" ? "Travel together" : "Make your seats count"} <span>↗</span></span>
    </article>
  );
}

export default function CommunityExchangeSection() {
  return (
    <section className="ce-section" id="communities" aria-labelledby="ce-heading">
      <div className="ce-shell">
        <div className="ce-hero">
          <div className="ce-hero__copy">
            <span className="ce-pill"><span className="ce-pill__icon" aria-hidden="true">◎</span> Communities</span>
            <h1 id="ce-heading">Your community<br /><em>moves together.</em></h1>
            <p>Find neighbours travelling your way, or share your journey with someone nearby.</p>
          </div>
          <div className="ce-neighbourhood" role="img" aria-label="A car travelling along a shared route between a residential community, gym, park, school and workplace">
            <img
              src="/viaris-website/images/viaris-community-section.png"
              alt=""
              width="1672"
              height="941"
              loading="lazy"
            />
          </div>
        </div>

        <div className="ce-rides">
          <RideCard
            kind="find"
            title="Find a Ride"
            question="Need a seat?"
            copy="Discover people from your apartment, gym, school or workplace who are already heading your way."
            people={["AK", "SM", "RV", "+8"]}
          />
          <CommunityConnector />
          <RideCard
            kind="offer"
            title="Offer a Ride"
            question="Have empty seats?"
            copy="Share your destination and available seats so people in your community can join you."
            people={["AR", "DR"]}
          />
        </div>

        <footer className="ce-shared">
          <span className="ce-shared__mark" aria-hidden="true">✦</span>
          <h2>One shared community network</h2>
          <p>Passengers and drivers discover each other<br className="ce-desktop-break" /> through the same community.</p>
        </footer>
      </div>
    </section>
  );
}
