const K = '#14201A'
const G = '#3E8F6B'
const P = '#F6BCD6'
const L = '#B79CEB'
const F = { fontFamily: 'DM Sans, sans-serif' }

function Step1() {
  return <svg viewBox="0 0 420 340" style={F} role="img" aria-label="A task form with a date, time, sound, and reminder setting">
    <defs><filter id="form-shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="15" stdDeviation="16" floodColor={K} floodOpacity=".13"/></filter></defs>
    <circle cx="212" cy="170" r="145" fill="none" stroke={K} strokeOpacity=".09"/>
    <circle cx="212" cy="170" r="117" fill="none" stroke={K} strokeOpacity=".07"/>
    <g className="il" filter="url(#form-shadow)">
      <rect x="50" y="23" width="306" height="294" rx="27" fill="#fff"/>
      <rect x="51" y="24" width="304" height="292" rx="26" fill="none" stroke="#E1E4E1"/>
      <rect x="68" y="41" width="29" height="29" rx="10" fill={K}/>
      <text x="82.5" y="61" textAnchor="middle" fontSize="17" fontFamily="Georgia,serif" fontStyle="italic" fill="#fff">re</text>
      <text x="108" y="60" fontSize="14" fontWeight="700" fill={K}>New reminder</text>
      <circle cx="331" cy="56" r="2" fill="#9BA39D"/><circle cx="324" cy="56" r="2" fill="#9BA39D"/><circle cx="317" cy="56" r="2" fill="#9BA39D"/>
      <text x="69" y="94" fontSize="11" fontWeight="700" fill="#5F6861">TASK NAME</text>
      <rect x="68" y="102" width="270" height="41" rx="13" fill="#F4F5F4"/>
      <text x="83" y="128" fontSize="15" fontWeight="600" fill={K}>Call Mom</text>
      <path d="M153 113v19" stroke={G} strokeWidth="1.5"/>
      <text x="69" y="164" fontSize="11" fontWeight="700" fill="#5F6861">WHEN</text>
      <rect x="68" y="172" width="127" height="43" rx="13" fill="#F4F5F4"/>
      <rect x="204" y="172" width="134" height="43" rx="13" fill="#F4F5F4"/>
      <rect x="81" y="183" width="19" height="19" rx="5" fill="#fff" stroke="#D8DDD9"/>
      <path d="M85 180v6m11-6v6m-11 4h11" stroke={G} strokeWidth="1.4" strokeLinecap="round"/>
      <text x="108" y="198" fontSize="12" fontWeight="600" fill={K}>Sat, Nov 7</text>
      <circle cx="222" cy="194" r="10" fill="#fff" stroke="#D8DDD9"/>
      <path d="M222 188v6l4 2" fill="none" stroke={G} strokeWidth="1.5" strokeLinecap="round"/>
      <text x="239" y="198" fontSize="12" fontWeight="600" fill={K}>6:30 PM</text>
      <text x="69" y="236" fontSize="11" fontWeight="700" fill="#5F6861">SOUND</text>
      <rect x="68" y="244" width="166" height="37" rx="12" fill="#F4F5F4"/>
      <text x="82" y="268" fontSize="12" fontWeight="600" fill={K}>Gentle chime</text>
      <g className="ov-wave" fill={G}><rect x="183" y="258" width="3" height="9" rx="1.5"/><rect x="190" y="253" width="3" height="19" rx="1.5"/><rect x="197" y="256" width="3" height="13" rx="1.5"/><rect x="204" y="251" width="3" height="23" rx="1.5"/><rect x="211" y="257" width="3" height="11" rx="1.5"/></g>
      <rect x="244" y="244" width="94" height="37" rx="12" fill="#F4F5F4"/>
      <text x="257" y="268" fontSize="11" fontWeight="600" fill={K}>DND</text>
      <rect x="297" y="255" width="30" height="16" rx="8" fill={G}/><circle cx="318" cy="263" r="6" fill="#fff"/>
      <rect x="68" y="290" width="270" height="18" rx="9" fill={K}/>
      <text x="203" y="303" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">CREATE REMINDER</text>
    </g>
    <g className="il ov-save" filter="url(#form-shadow)">
      <rect x="288" y="4" width="121" height="43" rx="16" fill="#fff"/>
      <rect x="288.5" y="4.5" width="120" height="42" rx="15.5" fill="none" stroke="#E1E4E1"/>
      <circle cx="309" cy="25" r="11" fill={G}/><path d="m304 25 3 3 6-7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="327" y="30" fontSize="12" fontWeight="700" fill={K}>Saved</text>
    </g>
  </svg>
}

function Step2() {
  return <svg viewBox="0 0 420 340" style={F} role="img" aria-label="A reminder notification appearing over a phone's quiet mode">
    <defs><filter id="phone-shadow" x="-40%" y="-30%" width="180%" height="170%"><feDropShadow dx="0" dy="14" stdDeviation="15" floodColor={K} floodOpacity=".14"/></filter></defs>
    <g className="ov-rings" fill="none" stroke={K} strokeOpacity=".13"><circle className="rp" cx="210" cy="170" r="91"/><circle className="rp" cx="210" cy="170" r="91"/></g>
    <g className="il" filter="url(#phone-shadow)">
      <rect x="103" y="9" width="214" height="322" rx="36" fill="#fff"/>
      <rect x="104" y="10" width="212" height="320" rx="35" fill="none" stroke="#E2E5E2"/>
      <text x="126" y="35" fontSize="11" fontWeight="700" fill={K}>9:41</text>
      <path d="M274 29v4m4-7v7m4-10v10" stroke={K} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M288 28q6-6 12 0m-9 3q3-3 6 0" fill="none" stroke={K} strokeWidth="1.4" strokeLinecap="round"/>
      <rect x="303" y="25" width="9" height="6" rx="2" fill={K}/>
      <text x="124" y="73" fontSize="18" fontWeight="700" fill={K}>Today</text>
      <text x="124" y="90" fontSize="11" fill="#7B837D">Saturday, November 7</text>
      <rect x="124" y="109" width="172" height="46" rx="15" fill="#F4F5F4"/>
      {['S','M','T','W','T','F','S'].map((day, i) => <g key={i}>
        {i === 6 && <rect x={127 + i * 23.5} y="115" width="23" height="34" rx="10" fill={K}/>}
        <text x={138 + i * 23.5} y="127" textAnchor="middle" fontSize="8" fontWeight="600" fill={i === 6 ? '#fff' : '#8E9690'}>{day}</text>
        <text x={138 + i * 23.5} y="141" textAnchor="middle" fontSize="10" fontWeight="700" fill={i === 6 ? '#fff' : K}>{i + 1}</text>
      </g>)}
      <rect x="124" y="168" width="172" height="30" rx="15" fill="#F3F3F3"/>
      <circle cx="141" cy="183" r="9" fill={K}/><path d="M145 180a5 5 0 1 1-6 7 5 5 0 0 0 6-7Z" fill="#fff"/>
      <text x="156" y="187" fontSize="10" fontWeight="600" fill={K}>Do Not Disturb is on</text>
      <rect x="124" y="210" width="172" height="87" rx="17" fill="#F3F4F3"/>
      <rect x="137" y="224" width="27" height="27" rx="9" fill={K}/>
      <text x="150.5" y="244" textAnchor="middle" fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" fill="#fff">re</text>
      <text x="173" y="235" fontSize="10" fontWeight="700" fill="#818982">REMINDS</text>
      <text x="173" y="249" fontSize="13" fontWeight="700" fill={K}>Call Mom</text>
      <text x="137" y="273" fontSize="10" fill="#68736B">Your reminder is right on time.</text>
      <rect x="166" y="312" width="88" height="4" rx="2" fill="#D4D8D4"/>
    </g>
    <g className="il ov-bell" filter="url(#phone-shadow)">
      <rect x="271" y="189" width="126" height="45" rx="16" fill="#fff"/>
      <rect x="271.5" y="189.5" width="125" height="44" rx="15.5" fill="none" stroke="#E2E5E2"/>
      <circle cx="291" cy="211" r="11" fill={L}/>
      <path d="M287 214h8l-1.5-2v-3a2.5 2.5 0 0 0-5 0v3z" fill={K}/>
      <text x="310" y="208" fontSize="9" fontWeight="700" fill="#737D75">ALERT</text>
      <text x="310" y="222" fontSize="11" fontWeight="700" fill={K}>Rings through</text>
    </g>
  </svg>
}

function Step3() {
  const tasks = [
    ['Morning standup', '9:00 AM'],
    ['Call Mom', '6:30 PM'],
    ['Go for a run', '7:00 PM'],
    ['Book dentist', 'Tomorrow'],
  ]
  return <svg viewBox="0 0 420 340" style={F} role="img" aria-label="A daily overview showing completed tasks and progress">
    <defs><filter id="day-shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="15" stdDeviation="16" floodColor={K} floodOpacity=".13"/></filter></defs>
    <g className="il" filter="url(#day-shadow)">
      <rect x="27" y="18" width="356" height="307" rx="27" fill="#fff"/>
      <rect x="27.5" y="18.5" width="355" height="306" rx="26.5" fill="none" stroke="#E1E4E1"/>
      <text x="49" y="48" fontSize="10" fontWeight="600" fill="#879088">SATURDAY, NOV 7</text>
      <text x="49" y="74" fontSize="22" fontWeight="700" fill={K}>Your day</text>
      <rect x="49" y="88" width="312" height="51" rx="16" fill="#F4F5F4"/>
      {['S','M','T','W','T','F','S'].map((day, i) => <g key={i}>
        {i === 6 && <rect x={55 + i * 43} y="94" width="35" height="39" rx="12" fill={K}/>}
        <text x={72 + i * 43} y="108" textAnchor="middle" fontSize="9" fontWeight="600" fill={i === 6 ? '#fff' : '#858E87'}>{day}</text>
        <text x={72 + i * 43} y="125" textAnchor="middle" fontSize="12" fontWeight="700" fill={i === 6 ? '#fff' : K}>{i + 1}</text>
      </g>)}
      <text x="49" y="163" fontSize="11" fontWeight="700" fill={K}>TODAY’S TASKS</text>
      <text x="361" y="163" textAnchor="end" fontSize="10" fontWeight="600" fill={G}>3 of 4 done</text>
      {tasks.map(([task, time], i) => <g key={task} className="ov-task" transform={`translate(0 ${i * 34})`}>
        <rect x="49" y="173" width="312" height="31" rx="10" fill="#F6F7F6"/>
        <rect x="59" y="181" width="15" height="15" rx="5" fill={i < 3 ? G : '#fff'} stroke={i < 3 ? G : '#C5CCC6'}/>
        {i < 3 && <path className="ov-check" d="m62 188 3 3 5-6" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}
        <text x="84" y="193" fontSize="11" fontWeight="600" fill={i < 3 ? '#77827A' : K} textDecoration={i < 3 ? 'line-through' : 'none'}>{task}</text>
        <text x="350" y="193" textAnchor="end" fontSize="9" fill="#89938B">{time}</text>
      </g>)}
      <rect x="49" y="315" width="312" height="3" rx="1.5" fill="#E3E8E4"/>
      <rect className="ov-progress" x="49" y="315" width="234" height="3" rx="1.5" fill={G}/>
    </g>
    <g className="il ov-progress-card" filter="url(#day-shadow)">
      <circle cx="363" cy="55" r="45" fill="#fff"/>
      <circle cx="363" cy="55" r="44.5" fill="none" stroke="#E1E4E1"/>
      <circle cx="363" cy="55" r="38" fill="none" stroke="#E8EDE9" strokeWidth="6"/>
      <circle className="ov-ring" cx="363" cy="55" r="38" fill="none" stroke={G} strokeWidth="6" strokeLinecap="round" strokeDasharray="179 239" transform="rotate(-90 363 55)"/>
      <text x="363" y="60" textAnchor="middle" fontSize="15" fontWeight="700" fill={K}>75%</text>
    </g>
    <g className="il ov-confetti" fill={P}><circle cx="401" cy="148" r="4"/><circle cx="17" cy="222" r="3" fill={G}/><path d="m396 272 5 8-5 8-5-8z" fill={L}/></g>
  </svg>
}

const steps = [
  ['Create a task', 'MAKE IT YOURS', 'Name the task, choose its time and sound, then decide whether it should alert you during Do Not Disturb.', ['Date & time', 'Custom sound', 'DND bypass'], Step1],
  ['Get the reminder', 'RIGHT ON TIME', 'When the moment arrives, Reminds plays your chosen sound and brings the task to your attention, even during Do Not Disturb.', ['On schedule', 'Your sound', 'Gets through DND'], Step2],
  ['Check it off', 'FROM HERE TO DONE', 'Check off what’s done, see what’s next in your timeline or calendar, and let AI help plan the rest.', ['Daily progress', 'Timeline & calendar', 'AI planning'], Step3],
]

export default function Overview() {
  return <section id="overview" className="overview" style={{ paddingTop: 20 }}><div className="wrap">
    <h2 className="serif">Three steps from <span className="sans-emphasis">“I’ll remember”</span> to done.</h2>
    <div className="stk">{steps.map(([title, label, text, details, Art], i) => <article key={title} className="sc" style={{ '--i': i }}><div className="sh"><b>{i + 1}</b><h3>{title}</h3></div><div className="sb"><div className="step-copy"><span className="step-eyebrow">{label}</span><p>{text}</p><ul className="step-details">{details.map(detail => <li key={detail}>{detail}</li>)}</ul></div><Art /></div></article>)}</div>
  </div></section>
}
