import AiDemo from './AiDemo'
const K = '#14201A', P = '#F6BCD6'
const bars = [40, 70, 30, 45, 100, 85, 50], barC = ['#223B2E', K, '#1F4A36', '#2E6B4F', '#2E7A57', '#3E8F6B', '#1F4A36']
const heat = []
for (let r = 0; r < 6; r++) for (let c = 0; c < 14; c++) {
  const v = (Math.sin(r * 1.7 + c * .9) + Math.cos(c * .6 - r)) * .5 + .5
  heat.push(<rect key={r + '-' + c} className="hc" x={c * 22} y={r * 22} width="20" height="20" fill="#5B35B8" opacity={(.15 + v * .8).toFixed(2)} />)
}
export default function Bento() {
  return (
    <section id="features"><div className="wrap">
      <div className="bento-heading"><span className="bento-kicker">FEATURES <span>·</span> REMINDS</span><h2>Built to be noticed, designed to stay calm.</h2></div>
      <div className="bento">
        <article className="cell c1" data-index="01"><div className="cell-copy"><small>DO NOT DISTURB</small><h3 className="big">Gets through</h3><p>Hear the reminders that matter, even during Do Not Disturb.</p></div>
          <div className="cell-art"><svg viewBox="0 0 260 150" aria-hidden="true">{bars.map((h, i) => <rect key={i} className="bar" x={i * 37} y={150 - h * 1.4} width="32" height={h * 1.4} fill={barC[i]} />)}</svg></div></article>
        <article className="cell c2" data-index="02"><div className="cell-copy"><small>CALENDAR VIEW</small><h3 className="big">See the month</h3><p>Spot your busiest days at a glance.</p></div>
          <div className="cell-art"><svg viewBox="0 0 306 130" aria-hidden="true">{heat}</svg></div></article>
        <article className="cell c3" data-index="03"><div className="cell-copy"><small>TIMELINE VIEW</small><h3 className="big">Plan the day</h3><p>See your tasks in time order, hour by hour.</p></div>
          <div className="cell-art"><svg viewBox="0 0 300 112" role="img" aria-label="Today's timeline: Standup at 9 AM, Gym at 1 PM, and Team Meets at 6:30 PM">
            <path d="M12 25H288" fill="none" stroke="#AC8B76" strokeWidth="2" />
            <g className="tb">
              <circle cx="22" cy="25" r="4" fill="#79442F" />
              <path d="M22 29v14" stroke="#79442F" strokeWidth="2" />
              <text x="12" y="15" fontSize="11" fontWeight="700" fill="#79442F">9 AM</text>
              <rect x="12" y="43" width="92" height="54" fill="#79442F" />
              <text x="21" y="75" fontSize="12" fontWeight="600" fill="#fff">Standup</text>
              <path d="M21 84h45" stroke="#D5B19E" strokeWidth="3" />
            </g>
            <g className="tb">
              <circle cx="119" cy="25" r="4" fill="#C76B39" />
              <path d="M119 29v14" stroke="#C76B39" strokeWidth="2" />
              <text x="109" y="15" fontSize="11" fontWeight="700" fill="#79442F">1 PM</text>
              <rect x="109" y="43" width="92" height="54" fill="#C76B39" />
              <text x="118" y="75" fontSize="12" fontWeight="600" fill="#fff">Gym</text>
              <path d="M118 84h40" stroke="#F1BD98" strokeWidth="3" />
            </g>
            <g className="tb">
              <circle cx="216" cy="25" r="4" fill="#B77B56" />
              <path d="M216 29v14" stroke="#B77B56" strokeWidth="2" />
              <text x="206" y="15" fontSize="11" fontWeight="700" fill="#79442F">6:30 PM</text>
              <rect x="206" y="43" width="82" height="54" fill="#E9D2BC" />
              <text x="215" y="72" fontSize="11" fontWeight="600" fill={K}>Team</text>
              <text x="215" y="86" fontSize="11" fontWeight="600" fill={K}>Meets</text>
            </g>
            <path d="M12 103H288" fill="none" stroke="#AC8B76" strokeWidth="1" strokeOpacity=".55" />
          </svg></div></article>
        <article className="cell c4" data-index="04"><div className="cell-copy"><small>CUSTOM SOUNDS</small><h3 className="big">Make it yours</h3><p>Choose a sound that fits each reminder.</p></div>
          <div className="cell-art"><svg viewBox="0 0 260 110" role="img" aria-label="Tone picker">
          <g className="snd"><rect width="260" height="48" rx="10" fill="#fff" /><circle cx="26" cy="24" r="14" fill={K} /><path d="M21 17l12 7-12 7z" fill="#fff" /><rect x="54" y="21" width="150" height="6" rx="3" fill="#D9DEF5" /><rect className="pf" x="54" y="21" width="62" height="6" rx="3" fill={K} /><text x="216" y="29" fontSize="12" fill={K}>0:02</text></g>
          {['Chime', 'Bell', 'Alarm'].map((t, i) => <g className="snd" key={t}><rect x={i * 92} y="60" width="76" height="40" rx="10" fill={i === 0 ? '#3E8F6B' : '#fff'} /><text x={i * 92 + 38} y="85" fontSize="13" fontWeight="700" textAnchor="middle" fill={i === 0 ? '#fff' : K}>{t}</text></g>)}</svg></div></article>
        <article className="cell c5" data-index="05"><div className="cell-copy"><small>AI ASSISTANT</small><h3 className="big">Just say it</h3><p>Describe a task and let Reminds set it up.</p></div>
          <div className="cell-art"><AiDemo /></div></article>
      </div></div></section>)
}
