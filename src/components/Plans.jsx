const plans = [
  { name: 'Free', label: 'A thoughtful place to start', detail: 'For everyday task planning.', price: '$0', cadence: 'free forever' },
  { name: 'Plus', label: 'More room to make it yours', detail: 'For a more personal reminder routine.', price: '$3.50', cadence: 'per month', featured: true },
  { name: 'Family', label: 'Make room for everyone', detail: 'For planning around a shared household.', price: '$4.99', cadence: 'per month' },
]

export default function Plans() {
  return <section className="plans" id="plans" aria-labelledby="plans-title">
    <div className="wrap">
      <div className="plans-heading">
        <div>
          <span className="plans-kicker">PLANS <span>·</span> REMINDS</span>
          <h2 id="plans-title">Three ways to make room for what matters.</h2>
        </div>
        <p>Choose the plan that fits your day. Pricing and plan details are coming soon.</p>
      </div>
      <div className="plans-grid">
        {plans.map(({ name, label, detail, price, cadence, featured }) => <article className={`plan${featured ? ' plan-featured' : ''}`} key={name}>
          <div className="plan-topline"><span>{label}</span>{featured && <span className="plan-badge">MOST FLEXIBLE</span>}</div>
          <h3>{name}</h3>
          <p className="plan-detail">{detail}</p>
          <div className="plan-price"><strong>{price}<small>{name === 'Free' ? '' : '/ mo'}</small></strong><span>{cadence}</span></div>
          <a href="#waitlist">Join the waitlist <span aria-hidden="true">↗</span></a>
        </article>)}
      </div>
    </div>
  </section>
}
