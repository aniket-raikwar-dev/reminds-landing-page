import { useEffect, useRef, useState } from 'react'

const comparisons = [
  {
    title: 'Individual plans',
    note: 'Monthly price for one person',
    rows: [
      { name: 'Google Tasks', plan: 'Free', price: 0, href: 'https://play.google.com/store/apps/details?id=com.google.android.apps.tasks' },
      { name: 'Reminds', plan: 'Free', price: 0, featured: true },
      { name: 'Reminds', plan: 'Plus', price: 3.5, featured: true },
      { name: 'Todoist', plan: 'Pro', price: 7, href: 'https://www.todoist.com/pricing' },
      { name: 'Any.do', plan: 'Premium', price: 7.99, href: 'https://www.any.do/pricing' },
    ],
  },
  {
    title: 'Family plans',
    note: 'Monthly plan price; included members vary',
    rows: [
      { name: 'Reminds', plan: 'Family', price: 4.99, featured: true },
      { name: 'Any.do', plan: 'Family · up to 4 members', price: 9.99, href: 'https://www.any.do/pricing' },
    ],
  },
]

function PriceGroup({ title, note, rows, animate }) {
  const max = Math.max(...rows.map(({ price }) => price), 1)
  return <div className="comparison-group">
    <div className="comparison-group-heading"><h3>{title}</h3><span>{note}</span></div>
    <div className="comparison-rows">
      {rows.map(({ name, plan, price, href, featured }, index) => {
        const rowLabel = <><strong>{name}</strong><span>{plan}</span></>
        return <div className={`comparison-row${featured ? ' is-reminds' : ''}`} key={`${name}-${plan}`}>
          <div className="comparison-name">{href ? <a href={href} target="_blank" rel="noreferrer">{rowLabel}</a> : rowLabel}</div>
          <div className="comparison-track" aria-label={`${name} ${plan}: $${price.toFixed(2)} per month`}>
            {price > 0 && <span className={`comparison-fill${featured ? ' comparison-fill-reminds' : ''}`} style={{ '--bar-width': `${price / max * 100}%`, '--bar-delay': `${index * 90}ms`, transform: animate ? 'scaleX(1)' : 'scaleX(0)' }} />}
          </div>
          <strong className="comparison-price">{price === 0 ? 'Free' : `$${price.toFixed(2)}`}<small>{price > 0 ? '/ mo' : ''}</small></strong>
        </div>
      })}
    </div>
  </div>
}

export default function PriceComparison() {
  const sectionRef = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    if (!('IntersectionObserver' in window)) {
      setAnimate(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      setAnimate(entry.isIntersecting)
    }, { threshold: 0.2 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <section className="price-comparison" aria-labelledby="comparison-title" ref={sectionRef}>
    <div className="wrap">
      <div className="comparison-heading">
        <div><span className="plans-kicker">A CLEARER COMPARISON <span>·</span> REMINDS</span><h2 id="comparison-title">A little more room in your budget.</h2></div>
        <p>Monthly US list prices, billed monthly where available. Compare individual plans separately from family plans.</p>
      </div>
      <div className="comparison-groups">
        {comparisons.map(group => <PriceGroup key={group.title} {...group} animate={animate} />)}
      </div>
      <p className="comparison-footnote">Prices checked November 2026. Plan features and included members vary by provider and region. <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.tasks" target="_blank" rel="noreferrer">Google Tasks</a>, <a href="https://www.todoist.com/pricing" target="_blank" rel="noreferrer">Todoist</a>, <a href="https://www.any.do/pricing" target="_blank" rel="noreferrer">Any.do</a>.</p>
    </div>
  </section>
}
