import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { motion } from 'motion/react'
export const Logo = () => (
  <a className="logo" href="#top" aria-label="Reminds">
    <span className="wm"><i>re</i><b>minds</b></span>
  </a>)
export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const themeTransitionTimer = useRef(null)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    const savedTheme = window.localStorage.getItem('reminds-theme')
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })
  const closeMenu = () => setMenuOpen(false)
  useEffect(() => () => {
    window.clearTimeout(themeTransitionTimer.current)
    document.documentElement.classList.remove('theme-changing')
  }, [])
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (document.startViewTransition && !reducedMotion) {
      document.startViewTransition(() => flushSync(() => setTheme(nextTheme)))
    } else {
      if (!reducedMotion) {
        document.documentElement.classList.add('theme-changing')
        window.clearTimeout(themeTransitionTimer.current)
        themeTransitionTimer.current = window.setTimeout(() => document.documentElement.classList.remove('theme-changing'), 500)
      }
      setTheme(nextTheme)
    }
  }
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('reminds-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111111' : '#FAF8F2')
  }, [theme])
  return <motion.nav initial={{ y: -64 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
    <div className="wrap"><Logo />
      <div className="links"><a href="#features">Features</a><a href="#overview">How it works</a><a href="#waitlist">Waitlist</a></div>
      <div className="nav-actions">
        <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={toggleTheme}>
          {theme === 'dark' ? <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z"/></svg>}
        </button>
        <motion.a className="btn" href="#waitlist" onClick={closeMenu} whileHover={{ scale: 1.05 }} whileTap={{ scale: .96 }}>Join waitlist</motion.a>
        <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>
          <span/><span/><span/>
        </button>
      </div>
    </div>
    {menuOpen && <div className="mobile-links" id="mobile-navigation">
      <a href="#features" onClick={closeMenu}>Features</a><a href="#overview" onClick={closeMenu}>How it works</a><a href="#waitlist" onClick={closeMenu}>Waitlist</a>
    </div>}
  </motion.nav>
}
export const Footer = () => (
  <footer className="site-footer">
    <div className="footer-wordmark" aria-hidden="true"><span className="footer-wordmark-inner"><i>re</i><b>minds</b></span></div>
    <div className="wrap footer-main">
      <div className="footer-brand">
        <Logo />
        <p>Reminders that reach you, right on time. Coming soon to iOS and Android.</p>
        <a className="footer-pill" href="#waitlist"><span className="footer-pill-dot" />Join the waitlist <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-column"><span className="footer-label">Explore</span><a href="#features">Features</a><a href="#overview">How it works</a><a href="#waitlist">Waitlist</a></div>
      <div className="footer-column"><span className="footer-label">The app</span><span>iOS — coming soon</span><span>Android — coming soon</span></div>
      <div className="footer-column footer-updates"><span className="footer-label">Stay updated</span><a href="#waitlist">Join the waitlist</a><p>We’ll email you when Reminds is ready to try.</p></div>
    </div>
    <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Reminds</span><span>Make room for what matters.</span><a href="#top">Back to top ↑</a></div>
  </footer>)
