const ink = 'var(--ink)'
const muted = 'var(--mut)'
const paper = 'var(--bg)'
const green = '#3E8F6B'
const pink = '#F6BCD6'
const purple = '#B79CEB'
const font = { fontFamily: 'DM Sans, sans-serif' }

function DiagramBase({ number }) {
  return <g className="story-piece story-diagram-base">
    <text x="12" y="360" className="story-outline-number">{number}</text>
    <path d="M26 374H494M26 60V374" fill="none" stroke={ink} strokeOpacity=".14" strokeWidth="1" />
    <circle cx="26" cy="374" r="3" fill={green} />
    <text x="38" y="391" fontSize="10" fontWeight="700" letterSpacing="2" fill={muted}>REMINDS / HOW IT WORKS</text>
  </g>
}

function Step1() {
  return <svg viewBox="0 0 520 420" style={font} role="img" aria-label="A task named Team Meets connects to its time and priority alert settings">
    <DiagramBase number="01" />
    <g className="story-piece">
      <path d="M76 103H357L374 120V261H93L76 244Z" fill={ink} opacity=".2" />
      <rect x="66" y="91" width="290" height="152" fill={paper} stroke={ink} strokeWidth="1.5" />
      <circle cx="93" cy="116" r="6" fill={pink} />
      <text x="108" y="120" fontSize="11" fontWeight="700" letterSpacing="1.5" fill={muted}>NEW TASK</text>
      <path d="M88 134H334" stroke={ink} strokeOpacity=".18" />
      <text x="88" y="185" fontSize="36" fontWeight="500" letterSpacing="-1.5" fill={ink}>Team Meets</text>
      <path d="M88 208H246" stroke={ink} strokeOpacity=".32" strokeWidth="2" />
      <path d="M88 220H183" stroke={ink} strokeOpacity=".16" strokeWidth="2" />
      <circle cx="329" cy="214" r="9" fill={green} />
      <path d="m325 214 3 3 5-6" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <g className="story-piece">
      <path d="M355 161H440V269" fill="none" stroke={ink} strokeOpacity=".34" strokeWidth="1.5" />
      <circle cx="440" cy="269" r="3.5" fill={ink} />
      <rect x="298" y="266" width="174" height="78" fill={purple} />
      <text x="315" y="291" fontSize="10" fontWeight="700" letterSpacing="1.3" fill="#14201A">WHEN</text>
      <text x="315" y="320" fontSize="22" fontWeight="600" letterSpacing="-.7" fill="#14201A">Sat · 6:30 PM</text>
    </g>
    <g className="story-piece">
      <path d="M133 243V283H91" fill="none" stroke={ink} strokeOpacity=".34" strokeWidth="1.5" />
      <circle cx="91" cy="283" r="3.5" fill={ink} />
      <rect x="55" y="294" width="202" height="53" fill={green} />
      <text x="72" y="326" fontSize="13" fontWeight="700" letterSpacing=".6" fill="#fff">PRIORITY ALERT</text>
      <path d="M226 310v20m8-15v10m8-18v26" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
}

function Step2() {
  return <svg viewBox="0 0 520 420" style={font} role="img" aria-label="A priority reminder arrives at 6:30 PM and plays the sound you chose">
    <DiagramBase number="02" />
    <g className="story-piece">
      <circle className="story-alert-ring" cx="250" cy="207" r="141" fill="none" stroke={green} strokeOpacity=".17" strokeWidth="1.5" />
      <circle className="story-alert-ring" cx="250" cy="207" r="109" fill="none" stroke={green} strokeOpacity=".25" strokeWidth="1.5" />
      <circle cx="250" cy="207" r="76" fill="none" stroke={green} strokeOpacity=".4" strokeWidth="1.5" />
    </g>
    <g className="story-piece">
      <path d="M166 137H330L350 157V319H186L166 299Z" fill={green} opacity=".5" />
      <rect x="154" y="125" width="177" height="177" fill={ink} />
      <path d="M242 161c-17 0-27 12-27 29v16l-9 13h72l-9-13v-16c0-17-10-29-27-29Z" fill="none" stroke={paper} strokeWidth="3" strokeLinejoin="round" />
      <path d="M236 229c1 7 11 7 12 0" fill="none" stroke={paper} strokeWidth="3" strokeLinecap="round" />
      <text x="242" y="260" textAnchor="middle" fontSize="22" fontWeight="600" fill={paper}>6:30 PM</text>
      <text x="242" y="280" textAnchor="middle" fontSize="10" fontWeight="700" letterSpacing="1.3" fill={paper}>TEAM MEETS</text>
    </g>
    <g className="story-piece">
      <rect x="44" y="101" width="152" height="62" fill={pink} />
      <text x="61" y="126" fontSize="10" fontWeight="700" letterSpacing="1.2" fill="#14201A">REMINDER SET</text>
      <text x="61" y="147" fontSize="17" fontWeight="600" fill="#14201A">Priority alert</text>
      <path d="M120 163v29h33" fill="none" stroke={ink} strokeOpacity=".35" strokeWidth="1.5" />
      <circle cx="153" cy="192" r="3" fill={ink} />
    </g>
    <g className="story-piece">
      <path d="M331 205h84v41" fill="none" stroke={ink} strokeOpacity=".35" strokeWidth="1.5" />
      <circle cx="415" cy="246" r="3" fill={ink} />
      <rect x="314" y="257" width="166" height="65" fill={paper} stroke={ink} strokeWidth="1.4" />
      <circle cx="335" cy="279" r="6" fill={green} />
      <text x="350" y="283" fontSize="11" fontWeight="700" letterSpacing=".7" fill={muted}>DELIVERED</text>
      <text x="332" y="307" fontSize="17" fontWeight="600" fill={ink}>Sound plays</text>
    </g>
  </svg>
}

function Step3() {
  return <svg viewBox="0 0 520 420" style={font} role="img" aria-label="A completed task joins the day's progress and timeline">
    <DiagramBase number="03" />
    <g className="story-piece">
      <circle cx="183" cy="192" r="100" fill={paper} stroke={ink} strokeWidth="1.4" />
      <circle cx="183" cy="192" r="78" fill="none" stroke={green} strokeWidth="18" strokeOpacity=".16" />
      <circle className="story-progress-arc" cx="183" cy="192" r="78" fill="none" stroke={green} strokeWidth="18" strokeDasharray="367 490" transform="rotate(-90 183 192)" />
      <path d="m143 193 27 26 53-59" fill="none" stroke={ink} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <g className="story-piece">
      <path d="M287 104H460L474 118V264H301L287 250Z" fill={ink} opacity=".18" />
      <rect x="275" y="92" width="183" height="158" fill={paper} stroke={ink} strokeWidth="1.4" />
      <text x="296" y="122" fontSize="10" fontWeight="700" letterSpacing="1.2" fill={muted}>TODAY’S PROGRESS</text>
      <text x="296" y="185" fontSize="57" fontWeight="500" letterSpacing="-3" fill={ink}>3 / 4</text>
      <text x="298" y="209" fontSize="12" fontWeight="600" fill={muted}>tasks complete</text>
      <rect x="297" y="222" width="138" height="5" fill={ink} opacity=".12" />
      <rect x="297" y="222" width="103" height="5" fill={green} />
    </g>
    <g className="story-piece">
      <path d="M87 295H442" fill="none" stroke={ink} strokeOpacity=".35" strokeWidth="1.5" />
      {[104, 215, 326, 437].map((x) => <circle key={x} cx={x} cy="295" r="3" fill={ink} />)}
      <rect x="91" y="309" width="92" height="25" fill={green} />
      <rect x="202" y="309" width="92" height="25" fill={purple} />
      <rect x="313" y="309" width="92" height="25" fill={pink} />
      <text x="91" y="354" fontSize="10" fontWeight="700" letterSpacing="1.2" fill={muted}>PLAN</text>
      <text x="202" y="354" fontSize="10" fontWeight="700" letterSpacing="1.2" fill={muted}>REMIND</text>
      <text x="313" y="354" fontSize="10" fontWeight="700" letterSpacing="1.2" fill={muted}>DONE</text>
    </g>
  </svg>
}

const steps = [
  { title: 'Create a task', label: 'MAKE IT YOURS', text: 'Name what matters, choose the time and sound, and mark the ones that need a priority alert.', details: ['Date & time', 'Your sound', 'Priority alert'], Art: Step1 },
  { title: 'Get the reminder', label: 'RIGHT ON TIME', text: 'When the moment arrives, Reminds plays your chosen sound and brings the task to your attention.', details: ['On schedule', 'Hard to miss', 'Ready to act'], Art: Step2 },
  { title: 'Check it off', label: 'FROM HERE TO DONE', text: 'Mark it complete, see what is next in your timeline or calendar, and let AI help plan the rest.', details: ['Daily progress', 'Timeline & calendar', 'AI planning'], Art: Step3 },
]

export default function Overview() {
  return <section id="overview" className="overview"><div className="wrap">
    <div className="story-header">
      <span className="story-kicker">HOW IT WORKS <span>·</span> REMINDS</span>
      <h2>Three steps from “I’ll remember” to done.</h2>
      <p>A clear path from making a task to making it happen.</p>
    </div>
    <div className="story-layout">
      <div className="story-stage" aria-hidden="true">
        {steps.map(({ Art }, i) => <div className={`story-scene story-scene-${i + 1}`} key={i}><Art /></div>)}
      </div>
      <div className="story-steps">
        {steps.map(({ title, label, text, details, Art }, i) => <article className="story-step" key={title}>
          <div className="story-step-inner">
            <div className="story-static-art"><Art /></div>
            <div className="story-meta"><span>0{i + 1} <span>/ 03</span></span><span>{label}</span></div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="story-details">{details.map((detail, index) => <div key={detail}><span>0{index + 1}</span><span>{detail}</span></div>)}</div>
          </div>
        </article>)}
      </div>
    </div>
  </div></section>
}
