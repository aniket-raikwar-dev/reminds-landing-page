const ink = '#14201A'
const green = '#568D73'
const pink = '#F3BDD4'
const lilac = '#CBB5EC'
const type = { fontFamily: 'DM Sans, sans-serif' }

export default function HeroArtwork() {
  return <svg className="hero-artwork" viewBox="0 0 480 490" width="100%" role="img" aria-label="Illustrated task dashboard with a reminder, connected timeline, progress chart, and completion graph">
    <g className="art-grid" fill="none" strokeWidth="1.2" strokeLinecap="square" aria-hidden="true">
      <path d="M343 228v23M85 374v21"/>
    </g>

    <g className="par" transform="translate(-8 -6)" data-base-x="-8" data-base-y="-6" data-d="-8" data-x="3" data-r="-1" style={type}>
      <path className="art-depth" d="M44 34h112l15 15v78h-112l-15-15z" fill={ink}/>
      <rect x="30" y="24" width="112" height="86" fill="#fff" stroke={ink} strokeWidth="1.4"/>
      <text x="43" y="44" fontSize="8.5" fontWeight="700" letterSpacing="1" fill="#69746B">TODAY</text>
      <text x="43" y="72" fontSize="25" fontWeight="700" fill={ink}>3 / 4</text>
      <text x="43" y="87" fontSize="9" fill="#68766C">tasks complete</text>
      <rect x="43" y="97" width="80" height="4" fill="#E7E9E5"/><rect x="43" y="97" width="60" height="4" fill={green}/>
    </g>

    <g className="par" transform="translate(12 -2)" data-base-x="12" data-base-y="-2" data-d="-11" data-x="6" data-r="1" style={type}>
      <path className="art-depth" d="M262 45h162l18 19v166h-162l-18-19z" fill={ink}/>
      <path d="M262 45h162v166H262z" fill={green}/>
      <path className="art-depth" d="M424 45l18 19v166l-18-19z" fill="#111915"/>
      <text x="280" y="69" fontSize="9" fontWeight="700" letterSpacing=".4" fill="#E4F0E7">WEEKLY PROGRESS</text>
      <text x="280" y="91" fontSize="22" fontWeight="700" fill="#fff">On track</text>
      <path d="M280 116h126M280 143h126M280 170h126M280 197h126" stroke="#fff" strokeOpacity=".24"/>
      <path d="M284 185 309 157 329 164 351 136 371 144 402 104" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="draw" d="M284 172 309 144 329 151 351 123 371 131 402 91" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="309" cy="144" r="4" fill={green} stroke="#fff" strokeWidth="2"/><circle cx="351" cy="123" r="4" fill={green} stroke="#fff" strokeWidth="2"/>
      <path d="m394 96 8-5-2 10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>

    <g className="par" transform="translate(-6 5)" data-base-x="-6" data-base-y="5" data-d="8" data-x="-6" data-r="-1" style={type}>
      <path className="art-depth" d="M34 222h169l20 20v127H54l-20-20z" fill={ink}/>
      <path d="M34 222h169v127H34z" fill={pink}/>
      <path className="art-depth" d="M203 222l20 20v127l-20-20z" fill="#111915"/>
      <rect x="49" y="239" width="24" height="24" rx="7" fill="#fff"/>
      <text x="61" y="256" fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle" fill={ink}>re</text>
      <text x="49" y="282" fontSize="10" fontWeight="700" letterSpacing=".6" fill="#57444D">NEXT REMINDER</text>
      <text x="49" y="308" fontSize="20" fontWeight="700" fill={ink}>Team Meets</text>
      <text x="49" y="331" fontSize="12" fontWeight="600" fill={ink}>6:30 PM · Priority alert</text>
      <path d="M151 272h34M151 279h24" stroke={ink} strokeWidth="1.5"/>
      <circle cx="183" cy="292" r="6" fill="#fff" stroke={ink}/><circle cx="183" cy="292" r="2" fill={ink}/>
    </g>

    <g className="par" transform="translate(14 9)" data-base-x="14" data-base-y="9" data-d="-6" data-x="4" style={type}>
      <text x="257" y="254" fontSize="9" fontWeight="700" letterSpacing=".7" fill="var(--ink)">DAY AT A GLANCE</text>
      <path d="M256 265h141" stroke="var(--ink)" strokeWidth="1.3"/>
      <rect x="257" y="276" width="49" height="7" fill="var(--ink)"/><rect x="308" y="276" width="39" height="7" fill={pink}/><rect x="349" y="276" width="43" height="7" fill="var(--art-track)"/>
      <rect x="257" y="291" width="29" height="7" fill="var(--ink)"/><rect x="288" y="291" width="82" height="7" fill={green}/><rect x="372" y="291" width="20" height="7" fill="var(--art-track)"/>
      <rect x="257" y="306" width="39" height="7" fill="var(--ink)"/><rect x="298" y="306" width="36" height="7" fill={lilac}/><rect x="336" y="306" width="56" height="7" fill="var(--art-track)"/>
      <text x="258" y="334" fontSize="9" fill="var(--mut)">Plan · focus · finish</text>
    </g>

    <g className="par" transform="translate(-2 7)" data-base-x="-2" data-base-y="7" data-d="5" data-x="-4" style={type}>
      <text x="47" y="398" fontSize="9" fontWeight="700" letterSpacing=".8" fill="var(--ink)">TODAY’S TIMELINE</text>
      <path d="M54 409v45M171 409v45M286 409v45" stroke="var(--ink)" strokeWidth="1.2"/>
      <path d="M52 420h105l12 12H64l-12-12z" fill={green}/>
      <rect x="68" y="426" width="30" height="4" rx="2" fill="#fff"/><rect x="68" y="435" width="56" height="3" rx="1.5" fill="#fff" opacity=".7"/>
      <path d="M166 420h102l12 12H178l-12-12z" fill={lilac}/>
      <rect x="181" y="426" width="47" height="4" rx="2" fill="#fff"/><rect x="181" y="435" width="30" height="3" rx="1.5" fill="#fff" opacity=".7"/>
      <path d="M279 420h71l12 12h-71l-12-12z" fill={pink}/>
      <rect x="294" y="426" width="38" height="4" rx="2" fill={ink} opacity=".7"/>
      <text x="56" y="462" fontSize="9" fill="var(--mut)">9:00 AM</text><text x="173" y="462" fontSize="9" fill="var(--mut)">1:00 PM</text><text x="287" y="462" fontSize="9" fill="var(--mut)">6:30 PM</text>
    </g>

    <g className="par" transform="translate(18 11)" data-base-x="18" data-base-y="11" data-d="-10" data-x="4" data-r="1" style={type}>
      <path className="art-depth" d="M390 341h48l15 15v68h-48l-15-15z" fill={ink}/>
      <rect x="378" y="329" width="60" height="80" fill="#fff" stroke={ink} strokeWidth="1.4"/>
      <circle cx="408" cy="364" r="19" fill="none" stroke="#E5EAE5" strokeWidth="7"/>
      <circle cx="408" cy="364" r="19" fill="none" stroke={green} strokeWidth="7" strokeDasharray="89 120" transform="rotate(-90 408 364)"/>
      <text x="408" y="370" fontSize="12" fontWeight="700" textAnchor="middle" fill={ink} style={type}>75%</text>
      <text x="408" y="396" fontSize="8" fontWeight="700" textAnchor="middle" fill="#68766C" style={type}>DONE</text>
    </g>
  </svg>
}
