import { useMemo, useState } from 'react';
import { CarFront, Fuel, Leaf, Wallet } from 'lucide-react';
import '../styles/impact-calculator.css';

const FUEL_EFFICIENCY = 15;
const CO2_PER_LITRE = 2.31;
const formatNumber = (value: number, digits = 0) =>
  new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

function MovingCars() {
  return (
    <div className="impact-road-art" aria-hidden="true">
      <svg viewBox="0 0 620 150" role="presentation">
        <defs>
          <path id="impact-road-path" d="M-35 112 C95 12 195 12 310 74 S500 135 655 34" />
        </defs>
        <use href="#impact-road-path" className="impact-road-base" />
        <use href="#impact-road-path" className="impact-road-centre" />
        <g className="impact-car impact-car-one">
          <g transform="translate(-20 -12)">
            <rect x="0" y="5" width="40" height="19" rx="7" />
            <path className="impact-car-window" d="M9 5 L14 0 H28 L33 5Z" />
            <circle className="impact-car-wheel" cx="9" cy="24" r="3.4" />
            <circle className="impact-car-wheel" cx="31" cy="24" r="3.4" />
          </g>
          <animateMotion dur="9s" repeatCount="indefinite" rotate="auto"><mpath href="#impact-road-path" /></animateMotion>
        </g>
        <g className="impact-car impact-car-two">
          <g transform="translate(-20 -12)">
            <rect x="0" y="5" width="40" height="19" rx="7" />
            <path className="impact-car-window" d="M9 5 L14 0 H28 L33 5Z" />
            <circle className="impact-car-wheel" cx="9" cy="24" r="3.4" />
            <circle className="impact-car-wheel" cx="31" cy="24" r="3.4" />
          </g>
          <animateMotion dur="9s" begin="-3s" repeatCount="indefinite" rotate="auto"><mpath href="#impact-road-path" /></animateMotion>
        </g>
        <g className="impact-car impact-car-three">
          <g transform="translate(-20 -12)">
            <rect x="0" y="5" width="40" height="19" rx="7" />
            <path className="impact-car-window" d="M9 5 L14 0 H28 L33 5Z" />
            <circle className="impact-car-wheel" cx="9" cy="24" r="3.4" />
            <circle className="impact-car-wheel" cx="31" cy="24" r="3.4" />
          </g>
          <animateMotion dur="9s" begin="-6s" repeatCount="indefinite" rotate="auto"><mpath href="#impact-road-path" /></animateMotion>
        </g>
      </svg>
      <span className="impact-road-caption">A few separate journeys. One shared direction.</span>
    </div>
  );
}

export default function ImpactCalculator() {
  const [distance, setDistance] = useState(30);
  const [days, setDays] = useState(5);
  const [people, setPeople] = useState(3);
  const [fuelPrice, setFuelPrice] = useState(100);

  const impact = useMemo(() => {
    const soloCarsAvoided = people - 1;
    const avoidedKm = distance * days * soloCarsAvoided;
    const fuelLitres = avoidedKm / FUEL_EFFICIENCY;
    return {
      avoidedKm,
      fuelLitres,
      money: fuelLitres * fuelPrice,
      co2: fuelLitres * CO2_PER_LITRE,
      trips: days * soloCarsAvoided,
    };
  }, [distance, days, people, fuelPrice]);

  return (
    <section className="impact-section" id="impact" aria-labelledby="impact-title">
      <div className="impact-inner">
        <header className="impact-heading">
          <span className="impact-eyebrow">A LITTLE LESS SOLO. A LOT MORE SHARED.</span>
          <h2 id="impact-title">What could sharing<br /><em>your commute save?</em></h2>
          <p>Put in your usual week. We’ll show you what could stay in your pocket — and what fewer cars on the road could mean.</p>
        </header>

        <div className="impact-calculator">
          <div className="impact-controls">
            <div className="impact-panel-heading">
              <div>
                <span className="impact-step">01 / YOUR ROUTINE</span>
                <h3>Make it your commute</h3>
              </div>
              <span className="impact-live"><i /> Updates as you adjust</span>
            </div>

            <div className="impact-control">
              <div className="impact-control-title">
                <label htmlFor="impact-distance">Daily round-trip distance</label>
                <output htmlFor="impact-distance">{distance} <small>km</small></output>
              </div>
              <input className="impact-range" id="impact-distance" type="range" min="5" max="120" step="5" value={distance} onChange={e => setDistance(Number(e.target.value))} />
              <div className="impact-range-labels"><span>5 km</span><span>120 km</span></div>
            </div>

            <div className="impact-control">
              <div className="impact-control-title">
                <label htmlFor="impact-days">Days you make the trip</label>
                <output htmlFor="impact-days">{days} <small>{days === 1 ? 'day' : 'days'}</small></output>
              </div>
              <input className="impact-range" id="impact-days" type="range" min="1" max="7" step="1" value={days} onChange={e => setDays(Number(e.target.value))} />
              <div className="impact-range-labels"><span>1 day</span><span>7 days</span></div>
            </div>

            <fieldset className="impact-control impact-passengers">
              <legend className="impact-control-title"><span>People in the car</span><output>{people} <small>people</small></output></legend>
              <div className="impact-people">
                {[2, 3, 4, 5].map(count => (
                  <button type="button" key={count} className={people === count ? 'is-selected' : ''} aria-pressed={people === count} onClick={() => setPeople(count)}>
                    {count}<span>{count === 2 ? 'people' : 'people'}</span>
                  </button>
                ))}
              </div>
              <span className="impact-hint">Including the driver</span>
            </fieldset>

            <div className="impact-fuel-price">
              <label htmlFor="impact-fuel">Petrol price in your area</label>
              <div className="impact-price-input">
                <span>₹</span>
                <input id="impact-fuel" type="number" min="1" max="300" step="1" value={fuelPrice} onChange={e => setFuelPrice(Math.max(1, Math.min(300, Number(e.target.value) || 1)))} aria-label="Petrol price per litre in rupees" />
                <small>per litre</small>
              </div>
            </div>
          </div>

          <div className="impact-results" aria-live="polite" aria-atomic="true">
            <div className="impact-results-top">
              <span className="impact-step">02 / YOUR POTENTIAL SAVINGS</span>
              <span className="impact-period">EACH WEEK</span>
            </div>
            <MovingCars />
            <div className="impact-primary-result">
              <span>Fuel that could be saved</span>
              <strong>{formatNumber(impact.fuelLitres, 1)} <small>litres</small></strong>
              <span className="impact-result-context">Across the group, compared with everyone driving alone.</span>
            </div>
            <div className="impact-metrics">
              <div className="impact-metric">
                <span className="impact-metric-icon"><Wallet size={17} strokeWidth={1.8} /></span>
                <span className="impact-metric-label">Fuel cost avoided</span>
                <strong>₹{formatNumber(impact.money)}</strong>
              </div>
              <div className="impact-metric">
                <span className="impact-metric-icon"><Leaf size={17} strokeWidth={1.8} /></span>
                <span className="impact-metric-label">CO₂ emissions avoided</span>
                <strong>{formatNumber(impact.co2, 1)} kg</strong>
              </div>
              <div className="impact-metric">
                <span className="impact-metric-icon"><CarFront size={17} strokeWidth={1.8} /></span>
                <span className="impact-metric-label">Solo car trips avoided</span>
                <strong>{formatNumber(impact.trips)}</strong>
              </div>
              <div className="impact-metric">
                <span className="impact-metric-icon"><Fuel size={17} strokeWidth={1.8} /></span>
                <span className="impact-metric-label">Solo driving avoided</span>
                <strong>{formatNumber(impact.avoidedKm)} km</strong>
              </div>
            </div>
            <p className="impact-disclaimer">Estimates use 15 km/l fuel efficiency and 2.31 kg CO₂ per litre. We assume each passenger would otherwise make the same trip in a separate car. Actual results depend on the vehicles and route.</p>
          </div>
        </div>
        <p className="impact-footnote">One car with a few more seats can mean fewer cars making the same trip.</p>
      </div>
    </section>
  );
}
