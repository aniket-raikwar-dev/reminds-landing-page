import HeroArtwork from './HeroArtwork'

const heroFeatures = ['Plan your day', 'Hear what matters', 'See your progress']

function HeroFeatures() {
  return <ul className="hero-features" aria-label="What Reminds helps you do">
    {heroFeatures.map((text, index) => <li key={text}><span className="hero-feature-number" aria-hidden="true">0{index + 1}</span><span className="hero-feature-text">{text}</span></li>)}
  </ul>
}

export function Marquee() {
  return <div className="mq tech-stack" aria-label="Tools used to build Reminds"><div className="wrap">
    <div className="tech-heading">
      <div><span className="tech-kicker">THE STACK <span>·</span> REMINDS</span><h2>Built with</h2></div>
      <p>The tools behind Reminds, from its interface and hosting to data and waitlist emails.</p>
    </div>
    <div className="tech-network">
      <div className="tech-root"><span className="wm"><i>re</i><b>minds</b></span><small>THE PRODUCT</small></div>
      <svg className="tech-branches" viewBox="0 0 1000 96" preserveAspectRatio="none" aria-hidden="true">
        <path className="tech-line tech-stem" d="M500 0V28"/>
        <path className="tech-line tech-rail" d="M100 28H900"/>
        {[100, 300, 500, 700, 900].map(x => <path key={x} className="tech-line tech-drop" d={`M${x} 28V84`}/>)}
        {[100, 300, 500, 700, 900].map(x => <circle key={x} className="tech-node" cx={x} cy="84" r="4"/>)}
        <circle className="tech-pointer" cx="500" cy="0" r="5"/>
      </svg>
      <div className="tech-list">
        <div className="tech-item"><span className="tech-logo"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3 31 29H1L16 3Zm0 7.4L7.8 25h16.4L16 10.4Z"/></svg><b>Vercel</b></span><small>HOSTING</small></div>
        <div className="tech-item"><span className="tech-logo cloudflare"><svg viewBox="0 0 40 32" aria-hidden="true"><path fill="#F38020" d="M5 22.8c0-4.4 3.5-7.9 7.9-7.9.7-5.2 5.1-9.2 10.4-9.2 4.5 0 8.3 2.8 9.8 6.8 4 .2 7.1 3.5 7.1 7.5 0 4.2-3.4 7.6-7.6 7.6H13c-4.4 0-8-1.8-8-4.8Z"/><path fill="#FAAD3F" d="M3 24.3c0-2.5 2-4.5 4.5-4.5h23.7c2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8H7.2C4.9 27.4 3 26.2 3 24.3Z"/></svg><b>Cloudflare</b></span><small>DOMAIN &amp; DNS</small></div>
        <div className="tech-item"><span className="tech-logo resend"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M6 5h11.8c5 0 8.2 2.8 8.2 7.1 0 3.1-1.8 5.4-4.8 6.5L27 27h-7.2l-5-7.5h-2.5V27H6V5Zm6.3 5.3v4h5.3c1.6 0 2.5-.7 2.5-2s-.9-2-2.5-2h-5.3Z"/></svg><b>Resend</b></span><small>EMAIL</small></div>
        <div className="tech-item"><span className="tech-logo supabase"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#3ECF8E" d="M17.7 3.2c.8-1.3 2.8-.7 2.8.8v8.3h7.2c1.5 0 2.3 1.7 1.4 2.8L14.2 29c-1 1.2-3 .5-3-1.1v-8H4.1c-1.5 0-2.3-1.7-1.4-2.9L17.7 3.2Z"/></svg><b>Supabase</b></span><small>DATABASE</small></div>
        <div className="tech-item"><span className="tech-logo react"><svg viewBox="0 0 32 32" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="16" cy="16" rx="14" ry="5.5"/><ellipse cx="16" cy="16" rx="14" ry="5.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5.5" transform="rotate(120 16 16)"/></g><circle cx="16" cy="16" r="2.4" fill="currentColor"/></svg><b>React</b></span><small>INTERFACE</small></div>
      </div>
    </div>
  </div></div>
}
export default function Hero() {
  return (
    <div className="wrap hero">
      <div className="hero-meta h-a">
        <span><span className="hero-meta-dot" aria-hidden="true" /> REMINDS <span className="hero-meta-separator">·</span> EARLY ACCESS</span>
        <span>COMING TO IOS + ANDROID</span>
      </div>
      <div className="hero-copy">
        <h1 className="h-a"><span className="hero-title-line hero-title-sans">Reminders you</span><span className="hero-title-line"><span className="hero-title-accent">can’t miss</span><span className="hero-title-sans">,</span></span><span className="hero-title-line hero-title-sans">right on time.</span></h1>
        <p className="sub h-a">Plan your tasks, choose a sound for each reminder, and mark the important ones so they stand out when it’s time.</p>
        <div className="hero-join h-a"><div className="hero-actions"><a className="btn g" href="#waitlist">Join waitlist</a><a className="btn hero-explore" href="#features">Explore</a></div><small>Join the list for a note when the app is ready.</small><HeroFeatures /></div>
      </div>
      <div className="art hero-art"><HeroArtwork /></div>
    </div>)
}
