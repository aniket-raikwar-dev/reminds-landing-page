import { Join } from './Waitlist'
const G = '#3E8F6B', P = '#F6BCD6', K = '#14201A'
const f = { fontFamily: 'DM Sans' }
function HeroArt() {
  return (
    <svg viewBox="0 0 460 440" width="100%" role="img" aria-label="Illustration of a task card, calendar and reminder ring">
      <g className="par" data-d="12"><path d="M60 120h70l50 40v120l-50 40H60z" fill={K} /><path d="M80 130h50l30 30v40H80z" fill={P} /></g>
      <g className="par" data-d="-10"><path d="M170 140l70-40v260l-70-40z" fill={K} /><path d="M170 340l70-40v60l-70 20z" fill={G} /></g>
      <g className="par" data-d="22"><rect x="258" y="70" width="170" height="170" fill={G} /><text x="272" y="98" fontSize="12" fill="#fff" style={f}>Today · 4 reminders</text>
        <path className="draw" d="M284 210l32-38 24 18 36-50 28-32" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" /><circle cx="340" cy="190" r="5" fill={G} stroke="#fff" strokeWidth="2" /></g>
      <g className="par" data-d="-18"><rect x="30" y="250" width="150" height="150" fill={P} />
        <circle cx="105" cy="285" r="18" fill="#fff" stroke={K} strokeWidth="2" /><circle cx="99" cy="282" r="2.4" fill={K} /><circle cx="111" cy="282" r="2.4" fill={K} /><path d="M98 290q7 6 14 0" stroke={K} strokeWidth="2" fill="none" />
        <text x="105" y="330" fontSize="13" textAnchor="middle" fill={K} fontWeight="700" style={f}>Call mom</text><text x="105" y="348" fontSize="11" textAnchor="middle" fill="#6b4a58" style={f}>bypasses Do Not Disturb</text><text x="105" y="382" fontSize="22" textAnchor="middle" fill={K} fontWeight="700" style={f}>6:30 PM</text></g>
      <g className="par" data-d="8"><rect x="250" y="270" width="120" height="8" fill={K} /><rect x="250" y="290" width="80" height="8" fill={P} /><rect x="250" y="310" width="100" height="8" fill={G} /><rect x="250" y="330" width="60" height="8" fill={K} /></g>
      <g className="par" data-d="-24"><path d="M330 350l30-24h50v70h-80z" fill={K} /><rect x="320" y="340" width="76" height="76" fill="#fff" stroke={K} strokeWidth="3" />
        <circle cx="358" cy="378" r="22" fill="none" stroke={P} strokeWidth="9" /><circle className="ring" cx="358" cy="378" r="22" fill="none" stroke={G} strokeWidth="9" strokeLinecap="round" strokeDasharray="60 140" /></g>
      <g className="par" data-d="14"><rect x="20" y="40" width="136" height="52" fill="#fff" stroke={K} strokeWidth="2" /><text x="30" y="60" fontSize="11" fill={K} style={f}>Alarm tone</text><rect x="30" y="70" width="60" height="6" fill={P} /><rect x="30" y="70" width="28" height="6" fill={K} /><text x="98" y="78" fontSize="10" fill={K} style={f}>Chime</text></g>
    </svg>)
}
export function Marquee() {
  const t = ['Tasks', 'Reminders', 'Timeline', 'Calendar', 'AI', 'Custom sounds'], r = [...t, ...t, ...t, ...t]
  return <div className="mq serif" aria-hidden="true"><div className="track">{r.map((x, i) => <span key={i}>{x}{i % 2 ? ' ✦' : ' ●'}</span>)}</div></div>
}
export default function Hero() {
  return (
    <div className="wrap hero"><div>
      <span className="tag h-a">App in development · early access</span>
      <h1 className="serif h-a">Reminders you can’t sleep through.</h1>
      <p className="sub h-a">Reminds is a task app for iOS and Android. Pick a date, set a sound, and your reminder gets through even when Do Not Disturb is on.</p>
      <div className="h-a"><Join /></div>
      <div className="stats h-a"><div><b data-n="3">0</b><span>ways to see your day</span></div><div><b data-n="100" data-s="%">0</b><span>reminders get through</span></div><div><b data-n="1">0</b><span>built-in AI assistant</span></div></div>
    </div><div className="art"><HeroArt /></div></div>)
}
