import { Join } from './Waitlist'
import HeroArtwork from './HeroArtwork'
export function Marquee() {
  return <div className="mq tech-stack" aria-label="Tools used to build Reminds">
    <div className="tech-heading"><h2 className="serif">Built with</h2><p>Thoughtful technology behind Reminds</p></div>
    <svg className="tech-branches" viewBox="0 0 1000 82" preserveAspectRatio="none" aria-hidden="true">
      <path className="tech-line tech-stem" d="M500 0V22"/>
      <path className="tech-line tech-rail" d="M100 22H900"/>
      {[100, 300, 500, 700, 900].map(x => <path key={x} className="tech-line tech-drop" d={`M${x} 22V72`}/>)}
      {[100, 300, 500, 700, 900].map(x => <circle key={x} className="tech-node" cx={x} cy="72" r="4"/>)}
      <circle className="tech-pointer" cx="500" cy="0" r="5"/>
    </svg>
    <div className="tech-list">
      <span className="tech-logo"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3 31 29H1L16 3Zm0 7.4L7.8 25h16.4L16 10.4Z"/></svg><b>Vercel</b></span>
      <span className="tech-logo cloudflare"><svg viewBox="0 0 40 32" aria-hidden="true"><path fill="#F38020" d="M5 22.8c0-4.4 3.5-7.9 7.9-7.9.7-5.2 5.1-9.2 10.4-9.2 4.5 0 8.3 2.8 9.8 6.8 4 .2 7.1 3.5 7.1 7.5 0 4.2-3.4 7.6-7.6 7.6H13c-4.4 0-8-1.8-8-4.8Z"/><path fill="#FAAD3F" d="M3 24.3c0-2.5 2-4.5 4.5-4.5h23.7c2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8H7.2C4.9 27.4 3 26.2 3 24.3Z"/></svg><b>Cloudflare</b></span>
      <span className="tech-logo resend"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M6 5h11.8c5 0 8.2 2.8 8.2 7.1 0 3.1-1.8 5.4-4.8 6.5L27 27h-7.2l-5-7.5h-2.5V27H6V5Zm6.3 5.3v4h5.3c1.6 0 2.5-.7 2.5-2s-.9-2-2.5-2h-5.3Z"/></svg><b>Resend</b></span>
      <span className="tech-logo supabase"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#3ECF8E" d="M17.7 3.2c.8-1.3 2.8-.7 2.8.8v8.3h7.2c1.5 0 2.3 1.7 1.4 2.8L14.2 29c-1 1.2-3 .5-3-1.1v-8H4.1c-1.5 0-2.3-1.7-1.4-2.9L17.7 3.2Z"/></svg><b>Supabase</b></span>
      <span className="tech-logo react"><svg viewBox="0 0 32 32" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="16" cy="16" rx="14" ry="5.5"/><ellipse cx="16" cy="16" rx="14" ry="5.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5.5" transform="rotate(120 16 16)"/></g><circle cx="16" cy="16" r="2.4" fill="currentColor"/></svg><b>React</b></span>
    </div>
  </div>
}
export default function Hero() {
  return (
    <div className="wrap hero"><div>
      <span className="tag h-a"><span className="tag-dot" aria-hidden="true" />App in Development <span className="tag-divider" aria-hidden="true">·</span> Early Access</span>
      <h1 className="serif h-a"><span className="sans-emphasis">Reminders</span> that reach you, right on time.</h1>
      <p className="sub h-a">Plan your tasks, choose a sound for each reminder, and let the important ones alert you—even during Do Not Disturb. Coming soon to iOS and Android.</p>
      <div className="h-a"><Join /></div>
      <div className="stats h-a"><div><b data-n="3">0</b><span>ways to see your day</span></div><div><b data-n="100" data-s="%">0</b><span>reminders get through</span></div><div><b data-n="1">0</b><span>built-in AI assistant</span></div></div>
    </div><div className="art"><HeroArtwork /></div></div>)
}
