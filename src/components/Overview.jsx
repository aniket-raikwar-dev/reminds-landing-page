const K = '#14201A'
const G = '#3E8F6B'
const P = '#F6BCD6'
const L = '#B79CEB'
const F = { fontFamily: 'DM Sans, sans-serif' }

function Step1() {
  return <svg viewBox="0 0 420 340" style={F} role="img" aria-label="A reminder being created with a date, time, and sound">
    <ellipse cx="205" cy="303" rx="142" ry="16" fill={K} opacity=".1" />
    <g className="il">
      <rect x="64" y="26" width="270" height="286" rx="22" fill="#fff" stroke={K} strokeWidth="2.5" />
      <path d="M64 48a22 22 0 0 1 22-22h226a22 22 0 0 1 22 22v30H64z" fill={K} />
      <circle cx="86" cy="52" r="5" fill={P}/><circle cx="103" cy="52" r="5" fill={L}/><circle cx="120" cy="52" r="5" fill={G}/>
      <text x="84" y="107" fontSize="12" fontWeight="700" letterSpacing="1.2" fill="#728078">REMINDER</text>
      <text x="84" y="140" fontSize="25" fontWeight="700" fill={K}>Call Mom</text>
      <path d="M84 153h228" stroke="#E5E9E5" strokeWidth="2" />
      <rect x="84" y="170" width="108" height="43" rx="12" fill="#F1F4F0" />
      <circle cx="102" cy="191" r="8" fill={G}/><path d="M99 191l2 2 4-5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <text x="116" y="196" fontSize="12" fontWeight="600" fill={K}>Sat, Nov 7</text>
      <rect x="202" y="170" width="110" height="43" rx="12" fill="#F1F4F0" />
      <circle cx="220" cy="191" r="8" fill={L}/><path d="M220 186v5l3 2" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      <text x="234" y="196" fontSize="12" fontWeight="600" fill={K}>6:30 PM</text>
      <rect x="84" y="225" width="228" height="42" rx="12" fill="#F1F4F0" />
      <circle cx="103" cy="246" r="9" fill={P}/><path d="M99 248v-4m4 7v-9m4 7v-5" stroke={K} strokeWidth="1.5" strokeLinecap="round" />
      <text x="120" y="251" fontSize="12" fontWeight="600" fill={K}>Gentle chime</text>
      <g className="ov-wave" fill={G}><rect x="263" y="242" width="3" height="8" rx="1.5"/><rect x="271" y="237" width="3" height="18" rx="1.5"/><rect x="279" y="233" width="3" height="26" rx="1.5"/><rect x="287" y="239" width="3" height="14" rx="1.5"/><rect x="295" y="235" width="3" height="22" rx="1.5"/></g>
      <rect x="84" y="278" width="228" height="22" rx="11" fill={G}/><text x="198" y="293" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">SAVE REMINDER</text>
    </g>
    <g className="il ov-save"><rect x="274" y="8" width="118" height="42" rx="14" fill="#fff" stroke={K} strokeWidth="2"/><circle cx="294" cy="29" r="10" fill={G}/><path d="M290 29l3 3 6-7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><text x="310" y="33" fontSize="12" fontWeight="700" fill={K}>Saved!</text></g>
  </svg>
}

function Step2() {
  return <svg viewBox="0 0 420 340" style={F} role="img" aria-label="A reminder arrives on a phone, even while Do Not Disturb is on">
    <ellipse cx="210" cy="318" rx="78" ry="11" fill={K} opacity=".12" />
    <g className="ov-rings" fill="none" stroke={K} strokeWidth="2"><circle className="rp" cx="209" cy="165" r="100" opacity=".28"/><circle className="rp" cx="209" cy="165" r="100" opacity=".18"/></g>
    <g className="il"><path d="M81 84q-22 22 0 44m-15-59q-38 38 0 76" fill="none" stroke={G} strokeWidth="5" strokeLinecap="round"/><path d="M339 84q22 22 0 44m15-59q38 38 0 76" fill="none" stroke={G} strokeWidth="5" strokeLinecap="round"/></g>
    <g className="il">
      <rect x="129" y="9" width="162" height="320" rx="30" fill={K}/><rect x="137" y="17" width="146" height="304" rx="23" fill="#F5F6F3"/>
      <rect x="184" y="23" width="52" height="12" rx="6" fill={K}/>
      <text x="210" y="88" textAnchor="middle" fontSize="36" fontWeight="700" fill={K}>6:30</text><text x="210" y="108" textAnchor="middle" fontSize="11" fill="#728078">SATURDAY, NOV 7</text>
      <rect x="155" y="125" width="110" height="25" rx="13" fill={K}/><circle cx="171" cy="137" r="6" fill={P}/><text x="184" y="141" fontSize="9" fontWeight="600" fill="#fff">FOCUS IS ON</text>
      <rect x="149" y="166" width="122" height="91" rx="15" fill="#fff" stroke="#DDE3DE" strokeWidth="1.5"/>
      <circle cx="171" cy="190" r="13" fill={G}/><path d="M165 195h12l-2-3v-4a4 4 0 0 0-8 0v4z" fill="#fff"/>
      <text x="191" y="187" fontSize="9" fontWeight="700" letterSpacing=".6" fill="#728078">REMINDS</text>
      <text x="163" y="220" fontSize="14" fontWeight="700" fill={K}>Call Mom</text><text x="163" y="239" fontSize="10" fill="#728078">It’s time for your reminder</text>
      <rect x="149" y="267" width="122" height="32" rx="16" fill={P}/><text x="210" y="287" textAnchor="middle" fontSize="11" fontWeight="700" fill={K}>OPEN REMINDER</text>
    </g>
    <g className="il ov-bell" transform="translate(310 214)"><circle r="29" fill="#fff" stroke={K} strokeWidth="2"/><path d="M-11 7h22l-3-4v-7a8 8 0 0 0-16 0v7z" fill={L} stroke={K} strokeWidth="2" strokeLinejoin="round"/><circle cy="12" r="2.5" fill={K}/></g>
  </svg>
}

function Step3() {
  const tasks = ['Morning standup', 'Call Mom', 'Go for a run', 'Book dentist']
  return <svg viewBox="0 0 420 340" style={F} role="img" aria-label="A completed daily task list with progress">
    <ellipse cx="202" cy="312" rx="146" ry="12" fill={K} opacity=".1" />
    <g className="il">
      <rect x="47" y="21" width="267" height="287" rx="20" fill="#fff" stroke={K} strokeWidth="2.5"/>
      <text x="72" y="61" fontSize="12" fontWeight="700" letterSpacing="1.2" fill="#728078">SATURDAY · NOV 7</text><text x="72" y="93" fontSize="25" fontWeight="700" fill={K}>Your day</text>
      <rect x="72" y="108" width="217" height="8" rx="4" fill="#E8EDE9"/><rect className="ov-progress" x="72" y="108" width="163" height="8" rx="4" fill={G}/>
      <text x="72" y="137" fontSize="11" fontWeight="600" fill="#728078">3 OF 4 COMPLETE</text>
      <path d="M86 164v107" stroke="#DDE3DE" strokeWidth="2" strokeDasharray="3 6"/>
      {tasks.map((task, i) => <g key={task} className="ov-task" transform={`translate(0 ${i * 37})`}>
        <circle cx="86" cy="165" r="10" fill={i < 3 ? G : '#fff'} stroke={i < 3 ? G : '#AEB8B1'} strokeWidth="2"/>
        {i < 3 && <path className="ov-check" d="M81 165l3 3 7-7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
        <text x="107" y="170" fontSize="13" fontWeight={i === 3 ? '500' : '600'} fill={i < 3 ? '#839087' : K} textDecoration={i < 3 ? 'line-through' : 'none'}>{task}</text>
      </g>)}
    </g>
    <g className="il ov-progress-card"><circle cx="343" cy="94" r="49" fill="#fff" stroke={K} strokeWidth="2.5"/><circle cx="343" cy="94" r="38" fill="none" stroke="#E8EDE9" strokeWidth="9"/><circle className="ov-ring" cx="343" cy="94" r="38" fill="none" stroke={G} strokeWidth="9" strokeLinecap="round" strokeDasharray="179 239" transform="rotate(-90 343 94)"/><text x="343" y="100" textAnchor="middle" fontSize="17" fontWeight="700" fill={K}>75%</text><text x="343" y="159" textAnchor="middle" fontSize="10" fontWeight="700" letterSpacing=".7" fill="#728078">DAY DONE</text></g>
    <g className="il ov-confetti" fill={P}><path d="M343 212l7 12-7 12-7-12z"/><circle cx="377" cy="258" r="5"/><path d="M318 273l4 8-4 8-4-8z" fill={L}/><circle cx="389" cy="197" r="4" fill={G}/></g>
  </svg>
}

const steps = [
  ['Create a task', 'Pick a date and time, choose a sound, and turn on Do Not Disturb bypass. It takes a few seconds.', Step1],
  ['Get the reminder', 'When the time comes, Reminds rings through Do Not Disturb with the sound you chose.', Step2],
  ['Check it off', 'See your day in the timeline or calendar, tick tasks off, and ask the AI to plan the rest.', Step3],
]

export default function Overview() {
  return <section id="overview" className="overview" style={{ paddingTop: 20 }}><div className="wrap">
    <h2 className="serif">Three steps from <span className="sans-emphasis">“I’ll remember”</span> to done.</h2>
    <div className="stk">{steps.map(([title, text, Art], i) => <article key={title} className="sc" style={{ '--i': i }}><div className="sh"><b>{i + 1}</b><h3>{title}</h3></div><div className="sb"><p>{text}</p><Art /></div></article>)}</div>
  </div></section>
}
