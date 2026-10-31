const K = '#14201A', G = '#3E8F6B', P = '#F6BCD6', PU = '#B79CEB', F = { fontFamily: 'DM Sans' }
const Step1 = () => (
  <svg viewBox="0 0 420 340" style={F} role="img" aria-label="New reminder form">
    <path className="il" d="M10 80h60l44 40v130l-44 40H10z" fill={K} /><rect className="il" x="320" y="50" width="90" height="90" fill={G} />
    <g className="il"><rect x="60" y="30" width="280" height="290" fill="#fff" stroke={K} strokeWidth="3" />
      <text x="80" y="64" fontSize="15" fontWeight="700" fill={K}>New reminder</text>
      <rect x="80" y="78" width="240" height="38" fill="#F4F1EA" /><text x="92" y="102" fontSize="15" fill={K}>Call mom</text>
      <rect x="80" y="130" width="112" height="34" fill={G} /><text x="92" y="152" fontSize="13" fill="#fff">Sat, Nov 7</text>
      <rect x="202" y="130" width="118" height="34" fill={K} /><text x="214" y="152" fontSize="13" fill="#fff">6:30 PM</text>
      <rect x="80" y="178" width="240" height="38" fill="#F4F1EA" /><text x="92" y="202" fontSize="13" fill={K}>Sound: Chime</text>
      {[4, 10, 6, 12, 5].map((h, i) => <rect key={i} x={270 + i * 9} y={190 - h / 2} width="5" height={h + 2} fill={P} />)}
      <text x="80" y="246" fontSize="12" fill={K}>Break through Do Not Disturb</text><rect x="282" y="232" width="38" height="20" rx="10" fill={G} /><circle cx="310" cy="242" r="7" fill="#fff" />
      <rect x="80" y="272" width="240" height="34" fill={K} /><text x="200" y="294" fontSize="13" fill="#fff" textAnchor="middle">Add reminder</text></g>
  </svg>)
const Step2 = () => (
  <svg viewBox="0 0 420 340" style={F} role="img" aria-label="Reminder ringing on a phone in Do Not Disturb">
    <path className="il" d="M20 190h70l40 36v100H20z" fill={K} /><rect className="il" x="322" y="40" width="84" height="84" fill="#fff" />
    <circle cx="215" cy="182" r="80" fill="none" stroke={K} strokeWidth="2" className="rp" /><circle cx="215" cy="182" r="80" fill="none" stroke={K} strokeWidth="2" className="rp" />
    <g className="il"><rect x="125" y="6" width="180" height="328" rx="28" fill={K} /><rect x="135" y="18" width="160" height="304" rx="20" fill="#F4F1EA" />
      <text x="215" y="76" fontSize="36" fontWeight="700" textAnchor="middle" fill={K}>6:30</text>
      <rect x="160" y="94" width="110" height="24" rx="12" fill={K} /><circle cx="176" cy="106" r="6" fill={P} /><circle cx="179" cy="104" r="5" fill={K} /><text x="190" y="110" fontSize="10" fill="#fff">Do Not Disturb</text>
      <rect x="150" y="146" width="130" height="64" rx="12" fill="#fff" stroke={K} strokeWidth="2" /><circle cx="173" cy="178" r="14" fill={G} /><path d="M166 183h14l-2-3v-4a5 5 0 0 0-10 0v4z" fill="#fff" />
      <text x="196" y="173" fontSize="13" fontWeight="700" fill={K}>Call mom</text><text x="196" y="190" fontSize="10" fill="#5d6660">now · 6:30 PM</text>
      <rect x="150" y="222" width="130" height="50" rx="12" fill="#fff" opacity=".6" /><rect x="150" y="284" width="130" height="10" rx="5" fill={K} opacity=".15" /></g>
  </svg>)
const Step3 = () => (
  <svg viewBox="0 0 420 340" style={F} role="img" aria-label="Daily task list with progress">
    <path className="il" d="M330 250l60-34v110h-60z" fill={K} />
    <g className="il"><rect x="30" y="24" width="260" height="292" fill="#fff" stroke={K} strokeWidth="3" />
      <text x="52" y="58" fontSize="15" fontWeight="700" fill={K}>Today</text><text x="52" y="76" fontSize="12" fill="#5d6660">3 of 4 done</text>
      <path d="M64 120v140" stroke={K} strokeWidth="2" strokeDasharray="4 5" />
      {['Standup', 'Call mom', 'Gym', 'Dentist'].map((t, i) => (
        <g key={i}><circle cx="64" cy={112 + i * 50} r="12" fill={i < 3 ? G : '#fff'} stroke={K} strokeWidth="2" />
          {i < 3 && <path d={`M58 ${112 + i * 50}l4 4 7-8`} stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />}
          <text x="88" y={117 + i * 50} fontSize="14" fill={K} opacity={i < 3 ? .55 : 1}>{t}</text></g>))}</g>
    <g className="il"><circle cx="350" cy="90" r="40" fill="#fff" stroke={K} strokeWidth="3" /><circle cx="350" cy="90" r="40" fill="none" stroke={G} strokeWidth="12" strokeDasharray="188 251" transform="rotate(-90 350 90)" /><text x="350" y="96" fontSize="16" fontWeight="700" textAnchor="middle" fill={K}>75%</text></g>
    <g className="il">{[.3, .8, .5, 1, .4, .9, .6].map((o, i) => <rect key={i} x={318 + (i % 4) * 24} y={158 + Math.floor(i / 4) * 24} width="20" height="20" fill="#5B35B8" opacity={o} />)}</g>
  </svg>)
const S = [['Create a task', 'Pick a date and a time, choose a sound, and turn on Do Not Disturb bypass. It takes a few seconds.', Step1], ['Get the reminder', 'When the time comes, Reminds rings through Do Not Disturb with the sound you chose.', Step2], ['Check it off', 'See your day in the timeline or calendar, tick tasks off, and ask the AI to plan the rest.', Step3]]
export default function Overview() {
  return (
    <section id="overview" style={{ paddingTop: 20 }}><div className="wrap">
      <h2 className="serif">Three steps from “I’ll remember” to done.</h2>
      <div className="stk">{S.map(([title, text, Art], i) => (
        <article key={i} className="sc" style={{ '--i': i }}><div className="sh"><b>{i + 1}</b><h3>{title}</h3></div><div className="sb"><p>{text}</p><Art /></div></article>))}</div>
    </div></section>)
}
