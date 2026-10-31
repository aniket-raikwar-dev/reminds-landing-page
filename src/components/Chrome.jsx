import { motion } from 'framer-motion'
export const Logo = () => (
  <a className="logo" href="#top" aria-label="Reminds">
    <span className="wm"><i>re</i><b>minds</b></span>
  </a>)
export const Nav = () => (
  <motion.nav initial={{ y: -64 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
    <div className="wrap"><Logo />
      <div className="links"><a href="#features">Features</a><a href="#overview">How it works</a><a href="#waitlist">Waitlist</a></div>
      <motion.a className="btn" href="#waitlist" whileHover={{ scale: 1.05 }} whileTap={{ scale: .96 }}>Join waitlist</motion.a>
    </div></motion.nav>)
export const Footer = () => (
  <footer><div className="wrap">
    <div><Logo /><p style={{ marginTop: 10, maxWidth: 260 }}>Reminders that get through. Coming soon to iOS and Android.</p></div>
    <div><a href="#features">Features</a><a href="#overview">How it works</a><a href="#waitlist">Waitlist</a></div>
    <div><a href="#top">Privacy</a><a href="#top">Contact</a><p style={{ marginTop: 14 }}>© 2026 Reminds</p></div>
  </div></footer>)
