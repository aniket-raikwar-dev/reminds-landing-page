import { motion, AnimatePresence } from 'motion/react'
import useWaitlist from '../hooks/useWaitlist'
export function Join({ dark }) {
  const { email, setEmail, status, error, submit } = useWaitlist()
  const content = (
    <AnimatePresence mode="wait">
      {status === 'done' ? (
        <motion.p key="ok" className="ok serif" initial={{ opacity: 0, y: 16, scale: .95 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
          You’re on the list. We’ll email you when Reminds opens.</motion.p>
      ) : (
        <motion.div key="f" className="wl-form-state" exit={{ opacity: 0, y: -10 }}>
          <form className="form" onSubmit={submit}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" aria-label="Email address" autoComplete="email" required />
            <motion.button type="submit" className={dark ? 'btn' : 'btn g'} disabled={status === 'loading'} whileTap={{ scale: .95 }}>
              {status === 'loading' ? 'Joining…' : 'Join waitlist'}</motion.button>
          </form>
          {error && <p role="alert" style={{ fontSize: 13, marginTop: 8 }}>{error}</p>}
        </motion.div>)}
    </AnimatePresence>
  )
  return dark ? <div className="wl-join">{content}</div> : content
}
export default function Waitlist() {
  return (
    <section id="waitlist" className="wlw" style={{ padding: 0 }}>
      <div className="wl"><div className="grain" />
        <h2 className="serif"><span className="wm wm-inline-heading"><i>re</i><b>minds</b></span> is still being built. Join the waitlist.</h2>
        <p style={{ maxWidth: 460, margin: '0 auto', color: '#e6e8ff' }}>Be first to try it. We’ll email you once when the app is ready, and nothing else.</p>
        <Join dark />
        <div className="chips"><span>No spam</span><span>One email at launch</span><span>iOS and Android</span></div>
      </div></section>)
}
