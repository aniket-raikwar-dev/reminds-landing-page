import { useLayoutEffect, useState } from 'react'
import { motion } from 'motion/react'
export const Logo = () => (
  <a className="logo" href="#top" aria-label="Reminds">
    <span className="wm"><i>re</i><b>minds</b></span>
  </a>)
export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    const savedTheme = window.localStorage.getItem('reminds-theme')
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })
  const closeMenu = () => setMenuOpen(false)
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('reminds-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111111' : '#FAF8F2')
  }, [theme])
  return <motion.nav initial={{ y: -64 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
    <div className="wrap"><Logo />
      <div className="links"><a href="#features">Features</a><a href="#overview">How it works</a><a href="#waitlist">Waitlist</a></div>
      <div className="nav-actions">
        <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}>
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
  <footer><div className="wrap">
    <div><Logo /><p style={{ marginTop: 10, maxWidth: 260 }}>Reminders that get through. Coming soon to iOS and Android.</p></div>
    <div><a href="#features">Features</a><a href="#overview">How it works</a><a href="#waitlist">Waitlist</a></div>
    <div><a href="#top">Privacy</a><a href="#top">Contact</a><p style={{ marginTop: 14 }}>© 2026 Reminds</p></div>
  </div></footer>)
