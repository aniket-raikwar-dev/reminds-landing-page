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
      <h2 className="serif">Built to be noticed, designed to stay calm.</h2>
      <div className="bento">
        <div className="cell c1"><small>DO NOT DISTURB</small><div className="serif big">Gets through</div><p>Important reminders break through Do Not Disturb and silent mode, so you never miss the one that counts.</p>
          <svg viewBox="0 0 260 150" height="150">{bars.map((h, i) => <rect key={i} className="bar" x={i * 37} y={150 - h * 1.4} width="32" height={h * 1.4} fill={barC[i]} />)}</svg></div>
        <div className="cell c2"><small>CALENDAR VIEW</small><div className="serif big">See the month</div><p>Busy days glow darker, so you can spot a packed week at a glance.</p><svg viewBox="0 0 306 130" height="110">{heat}</svg></div>
        <div className="cell c3"><small>TIMELINE VIEW</small><div className="serif big">Plan the day</div><p>Your tasks stack in time order, hour by hour.</p>
          <svg viewBox="0 0 300 100" height="90"><rect className="tb" width="300" height="100" fill="#FFC9A0" opacity=".5" /><rect className="tb" width="190" height="100" fill="#7A2E14" /><rect className="tb" x="190" width="110" height="46" fill="#E05A14" /><text x="12" y="88" fontSize="11" fill="#fff">9:00 Standup</text><text x="198" y="88" fontSize="11" fill={K}>1:00 Gym</text></svg></div>
        <div className="cell c4"><small>CUSTOM SOUNDS</small><div className="serif big">Make it yours</div><p>Pick a tone for each task, from a soft chime to a loud alarm.</p>
          <svg viewBox="0 0 260 110" height="110" role="img" aria-label="Tone picker">
          <g className="snd"><rect width="260" height="48" rx="10" fill="#fff" /><circle cx="26" cy="24" r="14" fill={K} /><path d="M21 17l12 7-12 7z" fill="#fff" /><rect x="54" y="21" width="150" height="6" rx="3" fill="#D9DEF5" /><rect className="pf" x="54" y="21" width="62" height="6" rx="3" fill={K} /><text x="216" y="29" fontSize="12" fill={K}>0:02</text></g>
          {['Chime', 'Bell', 'Alarm'].map((t, i) => <g className="snd" key={t}><rect x={i * 92} y="60" width="76" height="40" rx="10" fill={i === 0 ? K : '#fff'} /><text x={i * 92 + 38} y="85" fontSize="13" fontWeight="700" textAnchor="middle" fill={i === 0 ? '#fff' : K}>{t}</text></g>)}</svg></div>
        <div className="cell c5"><small>AI ASSISTANT</small><div className="serif big">Just say it</div><p>Type “dentist next Tuesday at 4” and Reminds sets it up.</p>
          <AiDemo /></div>
      </div></div></section>)
}
