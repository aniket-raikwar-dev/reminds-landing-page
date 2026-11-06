const ink = '#14201A'
const green = '#4C8F69'
const violet = '#9D75D2'
const lilac = '#B9A9E4'
const type = { fontFamily: 'DM Sans, sans-serif' }

// Same soft language as the feature cards: faded surfaces, dashed links, quiet motion.
export default function HeroArtwork() {
  return <svg className="hero-artwork" viewBox="0 0 480 490" width="100%" role="img" aria-label="Illustrated task dashboard with a reminder, connected timeline, progress chart, and completion graph">
    <defs>
      <linearGradient id="hero-green" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#5E9C7B" />
        <stop offset="1" stopColor="#3E7F5E" />
      </linearGradient>
    </defs>

    <g aria-hidden="true">
      <path className="dash" d="M347 217V246" />
      <path className="dash" d="M190 356V414" />
      <path className="dash" d="M150 74H262" />
    </g>

    <g style={type}><g className="float">
      <rect className="card soft" x="30" y="30" width="120" height="84" rx="0" />
      <text x="46" y="53" fontSize="9" fontWeight="700" letterSpacing="1" fill="var(--mut)">TODAY</text>
      <text x="46" y="83" fontSize="26" fontWeight="700" fill="var(--ink)">3 / 4</text>
      <text x="46" y="98" fontSize="9.5" fill="var(--mut)">tasks complete</text>
      <rect x="46" y="104" width="88" height="4" rx="2" fill="var(--art-track)" />
      <rect x="46" y="104" width="66" height="4" rx="2" fill={green} />
    </g></g>

    <g style={type}><g className="float" style={{ animationDelay: '-1.6s' }}>
      <rect className="soft" x="262" y="45" width="170" height="168" rx="0" fill="url(#hero-green)" />
      <text x="282" y="73" fontSize="9" fontWeight="700" letterSpacing=".6" fill="#E4F0E7">WEEKLY PROGRESS</text>
      <text x="282" y="97" fontSize="22" fontWeight="700" fill="#fff">On track</text>
      <path d="M282 124h132M282 148h132M282 172h132M282 196h132" stroke="#fff" strokeOpacity=".24" strokeDasharray="3 4" />
      <path d="M284 184 309 156 329 163 351 135 371 143 402 103" fill="none" stroke="#0F2A1E" strokeOpacity=".28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path className="draw" d="M284 172 309 144 329 151 351 123 371 131 402 91" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="309" cy="144" r="4.5" fill="#3E7F5E" stroke="#fff" strokeWidth="2" /><circle cx="351" cy="123" r="4.5" fill="#3E7F5E" stroke="#fff" strokeWidth="2" />
      <path d="m394 96 8-5-2 10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g></g>

    <g style={type}><g className="float" style={{ animationDelay: '-3.1s' }}>
      <rect className="soft" x="34" y="224" width="176" height="128" rx="0" fill={lilac} />
      <circle className="ring" cx="184" cy="253" r="19" fill="none" stroke="#3D2A7A" strokeOpacity=".28" />
      <circle cx="184" cy="253" r="13" fill="#fff" />
      <path d="M184 246.5c-3.2 0-4.8 2.3-4.8 5.1v2.6l-1.4 2h12.4l-1.4-2v-2.6c0-2.8-1.6-5.1-4.8-5.1Zm-1.5 11.6c.5 1.7 2.5 1.7 3 0" fill="none" stroke={violet} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="50" y="288" fontSize="9.5" fontWeight="700" letterSpacing=".8" fill="#3D2A7A">NEXT REMINDER</text>
      <text x="50" y="314" fontSize="21" fontWeight="700" fill={ink}>Team Meets</text>
      <text x="50" y="336" fontSize="12.5" fontWeight="600" fill={ink}>6:30 PM · Priority alert</text>
    </g></g>

    <g style={type}>
      <text x="270" y="258" fontSize="9" fontWeight="700" letterSpacing=".7" fill="var(--ink)">DAY AT A GLANCE</text>
      <path d="M270 268h140" stroke="var(--ink)" strokeOpacity=".3" strokeWidth="1.2" />
      <rect x="270" y="280" width="44" height="7" rx="3.5" fill="var(--ink)" fillOpacity=".78" /><rect x="316" y="280" width="36" height="7" rx="3.5" fill={lilac} /><rect x="354" y="280" width="56" height="7" rx="3.5" fill="var(--art-track)" />
      <rect x="270" y="295" width="28" height="7" rx="3.5" fill="var(--ink)" fillOpacity=".78" /><rect x="300" y="295" width="78" height="7" rx="3.5" fill={green} /><rect x="380" y="295" width="30" height="7" rx="3.5" fill="var(--art-track)" />
      <rect x="270" y="310" width="38" height="7" rx="3.5" fill="var(--ink)" fillOpacity=".78" /><rect x="310" y="310" width="34" height="7" rx="3.5" fill={violet} /><rect x="346" y="310" width="64" height="7" rx="3.5" fill="var(--art-track)" />
      <text x="270" y="338" fontSize="9" fill="var(--mut)">Plan · focus · finish</text>
    </g>

    <g style={type}><g className="float" style={{ animationDelay: '-2.2s' }}>
      <rect className="card soft" x="366" y="326" width="72" height="88" rx="0" />
      <circle cx="402" cy="361" r="19" fill="none" stroke="var(--art-track)" strokeWidth="7" />
      <circle cx="402" cy="361" r="19" fill="none" stroke={green} strokeWidth="7" strokeLinecap="round" strokeDasharray="89 120" transform="rotate(-90 402 361)" />
      <text x="402" y="365.5" fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--ink)">75%</text>
      <text x="402" y="398" fontSize="8.5" fontWeight="700" letterSpacing=".8" textAnchor="middle" fill="var(--mut)">DONE</text>
    </g></g>

    <g style={type}>
      <text x="52" y="398" fontSize="9" fontWeight="700" letterSpacing=".8" fill="var(--ink)">TODAY’S TIMELINE</text>
      <path className="dash" d="M52 420H360" />
      <rect x="52" y="432" width="112" height="24" rx="12" fill={green} /><rect x="64" y="442" width="30" height="4" rx="2" fill="#fff" />
      <rect x="172" y="432" width="104" height="24" rx="12" fill={violet} /><rect x="184" y="442" width="40" height="4" rx="2" fill="#fff" />
      <rect x="284" y="432" width="76" height="24" rx="12" fill="var(--art-track)" /><rect x="296" y="442" width="34" height="4" rx="2" fill="var(--ink)" fillOpacity=".55" />
      <circle className="node" cx="60" cy="420" r="5" fill={green} stroke="var(--bg)" strokeWidth="2" />
      <circle className="node" cx="176" cy="420" r="5" fill={violet} stroke="var(--bg)" strokeWidth="2" style={{ animationDelay: '.5s' }} />
      <circle className="node" cx="291" cy="420" r="5" fill="var(--ink)" stroke="var(--bg)" strokeWidth="2" style={{ animationDelay: '1s' }} />
      <text x="56" y="474" fontSize="9" fill="var(--mut)">9:00 AM</text><text x="173" y="474" fontSize="9" fill="var(--mut)">1:00 PM</text><text x="287" y="474" fontSize="9" fill="var(--mut)">6:30 PM</text>
    </g>
  </svg>
}
