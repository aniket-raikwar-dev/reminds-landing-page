// Small, quiet illustrations for the bottom-right of each card: soft pills, dashed links and a little motion.
const wave = [10, 18, 28, 16, 32, 22, 12, 26, 18, 10]
const days = []
for (let r = 0; r < 3; r++) for (let c = 0; c < 7; c++) days.push({ x: 8 + c * 24, y: 28 + r * 24, k: r * 7 + c })
const busy = { 2: 1, 5: 2, 9: 1, 11: 3, 12: 2, 16: 1, 18: 2 }

const PriorityMini = () => <svg className="mini" viewBox="0 0 190 100" aria-hidden="true">
  <circle className="ring" cx="150" cy="50" r="40" fill="none" stroke="#9D75D2" strokeOpacity=".14" />
  <circle className="ring" cx="150" cy="50" r="28" fill="none" stroke="#9D75D2" strokeOpacity=".26" style={{ animationDelay: '.5s' }} />
  <path className="dash" d="M98 50H135" />
  <g className="float">
    <rect className="pill pill-s" x="4" y="30" width="94" height="40" rx="12" />
    <circle cx="19" cy="50" r="4" fill="#4C8F69" />
    <text x="30" y="48" fontSize="10.5" fontWeight="700">Team Meets</text>
    <text className="mut" x="30" y="61" fontSize="8.5">6:30 PM</text>
  </g>
  <circle cx="150" cy="50" r="15" fill="#9D75D2" />
  <path className="bell-icon" d="M150 41.5c-4.2 0-6.4 3-6.4 6.8v3.4l-1.8 2.6h16.4l-1.8-2.6v-3.4c0-3.8-2.2-6.8-6.4-6.8Zm-2 15.4c.6 2.2 3.4 2.2 4 0" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const CalendarMini = () => <svg className="mini" viewBox="0 0 190 100" aria-hidden="true">
  {days.map(({ x, y, k }) => <rect key={k} className={busy[k] ? `day busy b${busy[k]}` : 'day'} x={x} y={y} width="19" height="19" rx="5" />)}
  <rect className="day pick" x="104" y="52" width="19" height="19" rx="5" />
  <g className="float">
    <rect className="pill pill-s" x="94" y="2" width="58" height="19" rx="9.5" />
    <circle cx="105" cy="11.5" r="3" fill="#9D75D2" />
    <text x="113" y="14.5" fontSize="8.5" fontWeight="700">3 tasks</text>
  </g>
  <path className="dash" d="M113 21V51" />
</svg>

const TimelineMini = () => <svg className="mini" viewBox="0 0 190 100" aria-hidden="true">
  <path className="dash" d="M6 52H184" />
  <path className="dash" d="M26 52V68M94 52V68M162 52V36" />
  <g className="chip chip-a">
    <rect className="pill pill-s" x="6" y="14" width="42" height="22" rx="11" />
    <text x="27" y="28.5" fontSize="9" fontWeight="700" textAnchor="middle">9 AM</text>
  </g>
  <g className="chip chip-b">
    <rect className="pill pill-s" x="132" y="14" width="60" height="22" rx="11" />
    <text x="162" y="28.5" fontSize="9" fontWeight="700" textAnchor="middle">6:30 PM</text>
  </g>
  <g className="float">
    <rect x="68" y="68" width="52" height="22" rx="11" fill="#4C8F69" />
    <text x="94" y="82.5" fontSize="9" fontWeight="700" textAnchor="middle" fill="#fff">Gym</text>
  </g>
  <circle className="node" cx="26" cy="52" r="5" fill="#14201A" stroke="var(--bg)" strokeWidth="2" />
  <circle className="node" cx="94" cy="52" r="5" fill="#4C8F69" stroke="var(--bg)" strokeWidth="2" style={{ animationDelay: '.4s' }} />
  <circle className="node" cx="162" cy="52" r="5" fill="#9D75D2" stroke="var(--bg)" strokeWidth="2" style={{ animationDelay: '.8s' }} />
</svg>

const SoundMini = () => <svg className="mini" viewBox="0 0 190 100" aria-hidden="true">
  <rect className="pill pill-s" x="6" y="38" width="178" height="48" rx="24" />
  <g className="play">
    <circle cx="32" cy="62" r="13" fill="#4C8F69" />
    <path d="M29 56.5 38 62l-9 5.5z" fill="#fff" />
  </g>
  {wave.map((h, i) => <rect key={i} className="wv" x={58 + i * 12} y={62 - h / 2} width="4" height={h} rx="2" fill={i % 3 === 0 ? '#72B18D' : '#4C8F69'} style={{ animationDelay: `${i * 90}ms` }} />)}
  <path className="dash" d="M126 24V38" />
  <g className="float">
    <rect x="98" y="4" width="56" height="20" rx="10" fill="#9D75D2" />
    <text x="126" y="17.5" fontSize="9" fontWeight="700" textAnchor="middle" fill="#fff">Chime</text>
  </g>
</svg>

const AiMini = () => <svg className="mini" viewBox="0 0 190 100" aria-hidden="true">
  <g className="chip chip-a">
    <rect className="pill" x="4" y="6" width="92" height="20" rx="10" />
    <circle cx="16" cy="16" r="4" fill="#9D75D2" />
    <text className="mut" x="25" y="19" fontSize="8.5">Dentist Tue 4pm</text>
  </g>
  <path className="dash" d="M42 26V44M60 62H82" />
  <circle className="orb" cx="42" cy="62" r="17" fill="#9D75D2" />
  <path className="spark-star" d="m42 52 2.6 6.4 6.4 2.6-6.4 2.6L42 70l-2.6-6.4L33 61l6.4-2.6z" fill="#fff" />
  <g className="float">
    <rect x="84" y="42" width="102" height="42" rx="11" fill="#4C8F69" />
    <circle cx="103" cy="63" r="8" fill="#fff" />
    <path d="m99.5 63 2.6 2.6 4.8-5.4" fill="none" stroke="#4C8F69" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <text x="117" y="61" fontSize="11" fontWeight="700" fill="#fff">Dentist</text>
    <text x="117" y="74" fontSize="8" fontWeight="600" fill="#fff" fillOpacity=".85">Tue · 4 PM</text>
  </g>
</svg>

export default function Bento() {
  return (
    <section id="features"><div className="wrap">
      <div className="bento-heading"><span className="bento-kicker">FEATURES <span>·</span> REMINDS</span><h2>Built to be noticed, designed to stay calm.</h2></div>
      <div className="bento">
        <article className="cell c1" data-index="01"><div className="cell-copy"><small>PRIORITY ALERTS</small><h3 className="big">Stands out</h3><p>Mark the tasks that matter and give them a sound that’s hard to miss.</p></div>
          <div className="cell-art"><PriorityMini /></div></article>
        <article className="cell c2" data-index="02"><div className="cell-copy"><small>CALENDAR VIEW</small><h3 className="big">See the month</h3><p>Spot your busiest days at a glance.</p></div>
          <div className="cell-art"><CalendarMini /></div></article>
        <article className="cell c3" data-index="03"><div className="cell-copy"><small>TIMELINE VIEW</small><h3 className="big">Plan the day</h3><p>See your tasks in time order, hour by hour.</p></div>
          <div className="cell-art"><TimelineMini /></div></article>
        <article className="cell c4" data-index="04"><div className="cell-copy"><small>CUSTOM SOUNDS</small><h3 className="big">Make it yours</h3><p>Choose a sound that fits each reminder.</p></div>
          <div className="cell-art"><SoundMini /></div></article>
        <article className="cell c5" data-index="05"><div className="cell-copy"><small>AI ASSISTANT</small><h3 className="big">Just say it</h3><p>Describe a task and let Reminds set it up.</p></div>
          <div className="cell-art"><AiMini /></div></article>
      </div></div></section>)
}
