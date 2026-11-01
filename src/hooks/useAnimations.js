import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger)
export default function useAnimations(root) {
  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const compact = window.matchMedia('(max-width: 640px)').matches
    const storyNarrow = window.matchMedia('(max-width: 820px)').matches
    let lenis
    let lenisTicker
    const syncScrollTrigger = () => ScrollTrigger.update()

    if (!rm) {
      lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      })
      lenis.on('scroll', syncScrollTrigger)
      lenisTicker = (time) => lenis.raf(time * 1000)
      gsap.ticker.add(lenisTicker)
      gsap.ticker.lagSmoothing(0)
    }

    const ctx = gsap.context(() => {
      document.querySelectorAll('[data-n]').forEach(el => {
        const n = +el.dataset.n, s = el.dataset.s || ''
        if (rm) { el.textContent = n + s; return }
        const o = { v: 0 }
        gsap.to(o, { v: n, duration: 1.6, delay: 1, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(o.v) + s } })
      })
      if (rm) return
      const st = (t, start = 'top 80%') => ({ trigger: t, start })
      const bentoSt = (trigger, start = 'top 80%') => ({
        trigger,
        start,
        toggleActions: 'restart none restart none',
      })
      gsap.timeline()
        .from('.h-a', { y: 40, opacity: 0, stagger: .12, duration: .9, ease: 'power3.out' })
        .from('.art svg g', { scale: .6, opacity: 0, transformOrigin: '50% 50%', stagger: .1, duration: .8, ease: 'back.out(1.6)' }, .2)
        .from('.draw', { strokeDashoffset: 200, strokeDasharray: 200, duration: 1.2, ease: 'power2.inOut' }, 1)
      gsap.utils.toArray('.tech-line').forEach(line => {
        const length = line.getTotalLength()
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
      })
      gsap.timeline({ scrollTrigger: { trigger: '.tech-stack', start: 'top 85%', once: true } })
        .to('.tech-stem', { strokeDashoffset: 0, duration: .28, ease: 'power2.out' })
        .to('.tech-rail', { strokeDashoffset: 0, duration: .45, ease: 'power2.out' })
        .to('.tech-drop', { strokeDashoffset: 0, duration: .35, stagger: .08, ease: 'power2.out' }, '<')
      const pointerTl = gsap.timeline({
        repeat: -1,
        repeatDelay: .55,
        delay: 1.4,
        scrollTrigger: { trigger: '.tech-stack', start: 'top 85%', end: 'bottom top', toggleActions: 'play pause resume pause' },
      })
      ;[100, 300, 500, 700, 900].forEach(x => {
        pointerTl.set('.tech-pointer', { attr: { cx: 500, cy: 0 }, opacity: 1 })
          .to('.tech-pointer', { attr: { cy: 28 }, duration: .24, ease: 'power1.inOut' })
          .to('.tech-pointer', { attr: { cx: x }, duration: .34, ease: 'power1.inOut' })
          .to('.tech-pointer', { attr: { cy: 84 }, duration: .25, ease: 'power1.inOut' })
          .to('.tech-pointer', { opacity: 0, duration: .16, delay: .22 })
      })
      gsap.from('.bar', { scaleY: 0, transformOrigin: '50% 100%', stagger: .08, duration: .8, ease: 'power3.out', clearProps: 'transform', scrollTrigger: bentoSt('.bento', 'top 75%') })
      gsap.from('.hc', { opacity: 0, stagger: { amount: 1.2, from: 'random' }, clearProps: 'opacity', scrollTrigger: bentoSt('.c2') })
      gsap.from('.tb', { scaleX: 0, transformOrigin: '0 50%', stagger: .2, duration: .9, ease: 'power3.out', clearProps: 'transform', scrollTrigger: bentoSt('.c3') })
      gsap.from('.snd', { y: 24, opacity: 0, stagger: .12, duration: .6, ease: 'back.out(1.7)', clearProps: 'transform,opacity', scrollTrigger: bentoSt('.c4') })
      gsap.from('.pf', { scaleX: 0, transformOrigin: '0% 50%', transformBox: 'fill-box', duration: 1.2, delay: .6, ease: 'power2.out', clearProps: 'transform', scrollTrigger: bentoSt('.c4') })
      gsap.from('.cell', { y: 60, opacity: 0, stagger: .1, duration: .8, ease: 'power3.out', scrollTrigger: bentoSt('.bento', 'top 85%') })
      const scenes = gsap.utils.toArray('.story-scene')
      const storySteps = gsap.utils.toArray('.story-step')
      gsap.set(scenes.slice(1), { autoAlpha: 0 })
      storySteps.forEach((step, i) => {
        gsap.fromTo(step.querySelector('.story-step-inner'),
          { y: 26, opacity: .4 },
          { y: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: step, start: storyNarrow ? 'top 92%' : 'top 85%', end: storyNarrow ? 'top 65%' : 'top 48%', scrub: true } })
        if (!i) return
        const outgoing = scenes[i - 1]
        const incoming = scenes[i]
        const oldPieces = outgoing.querySelectorAll('.story-piece')
        const newPieces = incoming.querySelectorAll('.story-piece')
        gsap.timeline({ scrollTrigger: { trigger: step, start: storyNarrow ? 'top 82%' : 'top 54%', end: storyNarrow ? 'top 50%' : 'top 18%', scrub: true } })
          .set(incoming, { visibility: 'visible' }, 0)
          .to(oldPieces, { x: j => j % 2 ? 60 : -55, y: j => j % 2 ? -36 : 42, rotation: j => j % 2 ? 8 : -8, opacity: 0, stagger: .07, duration: .6 }, 0)
          .to(outgoing, { opacity: 0, duration: .55 }, .12)
          .fromTo(newPieces,
            { x: j => j % 2 ? -65 : 70, y: j => j % 2 ? 40 : -45, rotation: j => j % 2 ? -8 : 8, opacity: 0 },
            { x: 0, y: 0, rotation: 0, opacity: 1, stagger: .08, duration: .6, ease: 'power2.out' }, .3)
          .to(incoming, { opacity: 1, duration: .5 }, .25)
          .set(outgoing, { visibility: 'hidden' }, 1)
      })
      gsap.to('.story-scene .story-alert-ring', { scale: 1.06, transformOrigin: '50% 50%', transformBox: 'fill-box', duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: .3 })
      const wd = () => document.querySelector('.wlw')
      gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '.wlw', start: 'top top', end: () => compact ? '+=700' : '+=1000', pin: true, scrub: compact ? true : .6, anticipatePin: 1, invalidateOnRefresh: true } })
        .fromTo('.wl', { width: () => Math.min(440, innerWidth * .8), height: () => innerHeight * .36, borderRadius: 200 }, { width: () => wd().offsetWidth, height: () => wd().offsetHeight, borderRadius: 0, duration: 1 })
        .fromTo('.wl>:not(.grain)', { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: .08, duration: .5 }, .6)
      gsap.to('.grain', { yPercent: -8, ease: 'none', scrollTrigger: { trigger: '.wlw', start: 'top bottom', end: 'bottom top', scrub: true } })
    }, root)
    ScrollTrigger.refresh()

    const scrollToHash = (hash, immediate = false) => {
      const target = document.getElementById(hash.slice(1))
      if (!target) return
      const navHeight = document.querySelector('nav')?.offsetHeight || 0
      const waitlistPin = hash === '#waitlist'
        ? ScrollTrigger.getAll().find(trigger => trigger.trigger === target && trigger.vars.pin)
        : null
      const destination = waitlistPin
        ? waitlistPin.start + (waitlistPin.end - waitlistPin.start) * .99
        : Math.max(0, target.getBoundingClientRect().top + window.scrollY - (hash === '#top' ? 0 : navHeight))

      if (lenis) {
        lenis.scrollTo(destination, {
          immediate,
          duration: Math.min(1.8, Math.max(.85, Math.abs(destination - window.scrollY) / 1800)),
          easing: t => 1 - Math.pow(1 - t, 3),
        })
      } else {
        window.scrollTo({ top: destination, behavior: immediate || rm ? 'auto' : 'smooth' })
      }
    }
    const handleAnchorClick = event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = event.target.closest?.('a[href^="#"]')
      const hash = link?.getAttribute('href')
      if (!hash || !document.getElementById(hash.slice(1))) return
      event.preventDefault()
      if (window.location.hash !== hash) window.history.pushState(null, '', hash)
      scrollToHash(hash)
    }
    const handleHistoryNavigation = () => scrollToHash(window.location.hash || '#top', true)
    document.addEventListener('click', handleAnchorClick)
    window.addEventListener('popstate', handleHistoryNavigation)
    const initialHashFrame = window.location.hash
      ? window.requestAnimationFrame(() => scrollToHash(window.location.hash, true))
      : null

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      window.removeEventListener('popstate', handleHistoryNavigation)
      if (initialHashFrame) window.cancelAnimationFrame(initialHashFrame)
      ctx.revert()
      if (lenis) {
        lenis.off('scroll', syncScrollTrigger)
        if (lenisTicker) gsap.ticker.remove(lenisTicker)
        lenis.destroy()
        gsap.ticker.lagSmoothing(500, 33)
      }
    }
  }, [root])
}
