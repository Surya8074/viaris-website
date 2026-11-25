import { useMemo, useState } from 'react';
import { CarFront, Fuel, Leaf, Wallet } from 'lucide-react';
import '../styles/impact-calculator.css';

const FUEL_EFFICIENCY = 15;
const CO2_PER_LITRE = 2.31;
const formatNumber = (value: number, digits = 0) => new Intl.NumberFormat('en-IN', { maximumFractionDigits: digits, minimumFractionDigits: digits }).format(value);

export default function ImpactCalculator() {
  const [distance, setDistance] = useState(30);
  const [days, setDays] = useState(5);
  const [people, setPeople] = useState(3);
  const [fuelPrice, setFuelPrice] = useState(100);
  const impact = useMemo(() => {
    const avoidedKm = distance * days * (people - 1);
    const fuelLitres = avoidedKm / FUEL_EFFICIENCY;
    return { avoidedKm, fuelLitres, money: fuelLitres * fuelPrice, co2: fuelLitres * CO2_PER_LITRE, rides: days * (people - 1) };
  }, [distance, days, people, fuelPrice]);

  return <section className="impact-section" id="impact" aria-labelledby="impact-title">
    <div className="impact-inner">
      <header className="impact-heading">
        <span className="impact-eyebrow">THE DIFFERENCE WE CAN MAKE</span>
        <h2 id="impact-title">One shared ride.<br/><em>A lighter footprint.</em></h2>
        <p>Small changes to your daily journey can add up to something meaningful. Adjust the details and see what sharing could save.</p>
      </header>
      <div className="impact-calculator">
        <div className="impact-controls">
          <div className="impact-controls-top"><span className="impact-section-label">YOUR WEEKLY ROUTINE</span><span className="impact-live"><i/> LIVE ESTIMATE</span></div>
          <label className="impact-control" htmlFor="impact-distance"><span className="impact-control-title">Round-trip distance <strong>{distance} km</strong></span><input id="impact-distance" type="range" min="5" max="120" step="5" value={distance} onChange={e => setDistance(Number(e.target.value))}/><span className="impact-range-labels"><span>5 km</span><span>120 km</span></span></label>
          <label className="impact-control" htmlFor="impact-days"><span className="impact-control-title">Days you travel each week <strong>{days} days</strong></span><input id="impact-days" type="range" min="1" max="7" value={days} onChange={e => setDays(Number(e.target.value))}/><span className="impact-range-labels"><span>1 day</span><span>7 days</span></span></label>
          <div className="impact-control"><span className="impact-control-title">People sharing the ride <strong>{people} people</strong></span><div className="impact-people" role="group" aria-label="People sharing the ride">{[2,3,4,5].map(count => <button type="button" key={count} className={people===count?'is-selected':''} aria-pressed={people===count} onClick={()=>setPeople(count)}>{count}</button>)}</div><span className="impact-hint">Including the driver</span></div>
          <label className="impact-fuel-price" htmlFor="impact-fuel"><span>Petrol price used for estimate</span><span className="impact-price-input"><b>₹</b><input id="impact-fuel" type="number" min="1" max="300" value={fuelPrice} onChange={e=>setFuelPrice(Math.max(1,Math.min(300,Number(e.target.value)||1)))}/><small>/ litre</small></span></label>
        </div>
        <div className="impact-results">
          <div className="impact-results-top"><span className="impact-section-label">YOUR ESTIMATED IMPACT</span><span className="impact-period">PER WEEK</span></div>
          <div className="impact-road-art" aria-hidden="true"><svg viewBox="0 0 520 112" role="presentation"><path d="M-12 80 C92 8 154 8 260 56 S430 104 532 28" fill="none" stroke="#d9e2d0" strokeWidth="42" strokeLinecap="round"/><path d="M-12 80 C92 8 154 8 260 56 S430 104 532 28" fill="none" stroke="#fffefa" strokeWidth="2" strokeDasharray="8 12" strokeLinecap="round"/>{[[92,31,-18],[270,57,18],[430,66,-20]].map(([x,y,r],i)=><g key={i} transform={`translate(${x} ${y}) rotate(${r})`}><rect x="-18" y="-9" width="36" height="18" rx="6" fill={i===0?'#315b42':i===1?'#8eae76':'#b9c7ad'}/><rect x="-9" y="-7" width="18" height="8" rx="3" fill="#eaf0e4"/><circle cx="-10" cy="9" r="3" fill="#1c3024"/><circle cx="10" cy="9" r="3" fill="#1c3024"/></g>)}</svg></div>
          <div className="impact-primary-result"><span>Fuel saved across the group</span><strong>{formatNumber(impact.fuelLitres,1)} <small>litres</small></strong></div>
          <div className="impact-metrics">
            <div className="impact-metric"><span className="impact-metric-icon"><Wallet size={17}/></span><span className="impact-metric-label">Fuel cost avoided</span><strong>₹{formatNumber(impact.money)}</strong></div>
            <div className="impact-metric"><span className="impact-metric-icon"><Leaf size={17}/></span><span className="impact-metric-label">CO₂ emissions avoided</span><strong>{formatNumber(impact.co2,1)} kg</strong></div>
            <div className="impact-metric"><span className="impact-metric-icon"><CarFront size={17}/></span><span className="impact-metric-label">Solo car trips avoided</span><strong>{formatNumber(impact.rides)}</strong></div>
            <div className="impact-metric"><span className="impact-metric-icon"><Fuel size={17}/></span><span className="impact-metric-label">Individual car km avoided</span><strong>{formatNumber(impact.avoidedKm)} km</strong></div>
          </div>
          <p className="impact-disclaimer">Illustrative estimate using 15 km/l petrol efficiency and 2.31 kg CO₂ per litre. Assumes each passenger would otherwise drive alone for the same round trip. Actual savings vary by route, vehicle and fuel price.</p>
        </div>
      </div>
      <p className="impact-footnote">More people sharing the same direction means fewer separate cars making the same journey.</p>
    </div>
  </section>;
}
