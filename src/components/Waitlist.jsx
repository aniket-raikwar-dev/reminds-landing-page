import { motion, AnimatePresence } from 'framer-motion'
import useWaitlist from '../hooks/useWaitlist'
export function Join({ dark }) {
  const { email, setEmail, status, error, submit } = useWaitlist()
  return (
    <AnimatePresence mode="wait">
      {status === 'done' ? (
        <motion.p key="ok" className="ok serif" initial={{ opacity: 0, y: 16, scale: .95 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
          You’re on the list. We’ll email you when Reminds opens.</motion.p>
      ) : (
        <motion.div key="f" exit={{ opacity: 0, y: -10 }}>
          <div className="form">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()} placeholder="Your email address" aria-label="Email address" />
            <motion.button className={dark ? 'btn' : 'btn g'} onClick={submit} disabled={status === 'loading'} whileTap={{ scale: .95 }}>
              {status === 'loading' ? 'Joining…' : 'Join waitlist'}</motion.button>
          </div>
          {error && <p role="alert" style={{ fontSize: 13, marginTop: 8 }}>{error}</p>}
        </motion.div>)}
    </AnimatePresence>)
}
export default function Waitlist() {
  return (
    <section id="waitlist" className="wlw" style={{ padding: 0 }}>
      <div className="wl"><div className="grain" />
        <h2 className="serif">Reminds is still being built. Join the waitlist.</h2>
        <p style={{ maxWidth: 460, margin: '0 auto', color: '#e6e8ff' }}>Be first to try it. We’ll email you once when the app is ready, and nothing else.</p>
        <Join dark />
        <div className="chips"><span>No spam</span><span>One email at launch</span><span>iOS and Android</span></div>
      </div></section>)
}
