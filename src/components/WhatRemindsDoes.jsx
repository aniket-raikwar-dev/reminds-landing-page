const highlights = [
  {
    name: 'Tasks',
    icon: <><path d="M18 14h17M18 24h17M18 34h17"/><path d="m9 14 2 2 4-4m-6 12 2 2 4-4m-6 12 2 2 4-4"/></>,
  },
  {
    name: 'Calendar',
    icon: <><rect x="7" y="11" width="34" height="30" rx="4"/><path d="M7 20h34M16 7v8M32 7v8M16 27h5m-5 7h5m7-7h5"/></>,
  },
  {
    name: 'Timeline',
    icon: <><path d="M8 10v28M8 16h31M8 26h24M8 36h17"/><circle cx="39" cy="16" r="2"/><circle cx="32" cy="26" r="2"/><circle cx="25" cy="36" r="2"/></>,
  },
  {
    name: 'Your sounds',
    icon: <><path d="M12 29h6l11 8V11l-11 8h-6a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4Z"/><path d="M34 18c3 3 3 9 0 12m5-17c6 6 6 16 0 22"/></>,
  },
  {
    name: 'Priority alerts',
    icon: <><path d="M24 7c-7 0-12 5-12 12v9l-4 5h32l-4-5v-9c0-7-5-12-12-12ZM20 39a4 4 0 0 0 8 0"/><path d="M24 13v10m0 5h.01"/></>,
  },
  {
    name: 'AI assistant',
    icon: <><path d="m24 5 3.5 11.5L39 20l-11.5 3.5L24 35l-3.5-11.5L9 20l11.5-3.5L24 5ZM38 32l1.5 4.5L44 38l-4.5 1.5L38 44l-1.5-4.5L32 38l4.5-1.5L38 32Z"/></>,
  },
]

export default function WhatRemindsDoes() {
  return <section className="product-preview" aria-labelledby="product-preview-title">
    <div className="wrap product-preview-main">
      <h2 id="product-preview-title">Make room for what matters.</h2>
      <p>Tasks, timely reminders, and a clearer view of your day. Coming to iOS and Android.</p>
      <div className="product-highlights" aria-label="What Reminds is being built to do">
        {highlights.map(({ name, icon }) => <div className="product-highlight" key={name}>
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icon}</svg>
          <span>{name}</span>
        </div>)}
      </div>
      <div className="product-preview-actions"><a className="product-preview-primary" href="#waitlist">Join the waitlist</a><a className="product-preview-secondary" href="#overview">See how it works</a></div>
    </div>
    <div className="wrap product-preview-details">
      <div><h3>Important reminders,<br/>hard to miss.</h3><p>Pick the tasks that need extra attention and choose the sound that makes them hard to miss.</p><a href="#features">Explore the features <span aria-hidden="true">↗</span></a></div>
      <div><h3>A calmer way to<br/>see your day.</h3><p>Move between your calendar and timeline, check things off, and let the AI assistant help plan what comes next.</p><a href="#overview">See the three steps <span aria-hidden="true">↗</span></a></div>
    </div>
  </section>
}
