const specs = [
  { label: 'Sound', value: 'Chime, Bell or Alarm' },
  { label: 'Priority', value: 'Mark the ones that matter' },
  { label: 'Views', value: 'List, calendar and timeline' },
]

export default function ReminderSetup() {
  return <section className="setup" id="setup" aria-labelledby="setup-title">
    <div className="wrap setup-layout">
      <div className="setup-copy">
        <span className="setup-kicker">SETUP <span>·</span> REMINDS</span>
        <h2 id="setup-title">Every reminder, your way.</h2>
        <p>Name it, time it, give it a sound. Reminds keeps each task exactly as you set it and brings it to you right on time.</p>
        <dl className="setup-specs">
          {specs.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </div>
      <figure className="setup-card" aria-label="Example of a reminder being set up">
        <figcaption className="setup-card-head"><span className="setup-chip">NEW</span><span className="setup-path">reminders / today</span></figcaption>
        <pre className="setup-code" aria-hidden="true">
          <span className="setup-line c">{'// "Team Meets today at 6:30pm"'}</span>
          <span className="setup-line">{'{'}</span>
          <span className="setup-line">{'  '}<i>"task"</i>{': '}<b>"Team Meets"</b>{','}</span>
          <span className="setup-line">{'  '}<i>"time"</i>{': '}<b>"Today · 6:30 PM"</b>{','}</span>
          <span className="setup-line">{'  '}<i>"sound"</i>{': '}<b>"Chime"</b>{','}</span>
          <span className="setup-line">{'  '}<i>"priority"</i>{': '}<em>true</em></span>
          <span className="setup-line">{'}'}</span>
          <span className="setup-line gap" />
          <span className="setup-line ok">✓ Scheduled</span>
          <span className="setup-line">{'{ '}<i>"alert"</i>{': '}<b>"6:30 PM · Priority alert"</b>{' }'}</span>
        </pre>
      </figure>
    </div>
  </section>
}
