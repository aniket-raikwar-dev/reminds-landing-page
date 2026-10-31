import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger)
export default function useAnimations(root) {
  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const compact = window.matchMedia('(max-width: 640px)').matches
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
          .to('.tech-pointer', { attr: { cy: 22 }, duration: .24, ease: 'power1.inOut' })
          .to('.tech-pointer', { attr: { cx: x }, duration: .34, ease: 'power1.inOut' })
          .to('.tech-pointer', { attr: { cy: 72 }, duration: .25, ease: 'power1.inOut' })
          .to('.tech-pointer', { opacity: 0, duration: .16, delay: .22 })
      })
      gsap.utils.toArray('.hero-artwork .par').forEach((g, i) => gsap.to(g, {
        x: +(g.dataset.baseX || 0) + +(g.dataset.x || 0),
        y: +(g.dataset.baseY || 0) + +(g.dataset.d || 0), rotation: +(g.dataset.r || 0),
        transformOrigin: '50% 50%', duration: 2.5 + (i % 3) * .45, delay: i * .12,
        yoyo: true, repeat: -1, ease: 'sine.inOut',
      }))
      gsap.from('.bar', { scaleY: 0, transformOrigin: '50% 100%', stagger: .08, duration: .8, ease: 'power3.out', scrollTrigger: bentoSt('.bento', 'top 75%') })
      gsap.from('.hc', { opacity: 0, stagger: { amount: 1.2, from: 'random' }, scrollTrigger: bentoSt('.c2') })
      gsap.from('.tb', { scaleX: 0, transformOrigin: '0 50%', stagger: .2, duration: .9, ease: 'power3.out', scrollTrigger: bentoSt('.c3') })
      gsap.from('.snd', { y: 24, opacity: 0, stagger: .12, duration: .6, ease: 'back.out(1.7)', scrollTrigger: bentoSt('.c4') })
      gsap.from('.pf', { scaleX: 0, transformOrigin: '0% 50%', transformBox: 'fill-box', duration: 1.2, delay: .6, ease: 'power2.out', scrollTrigger: bentoSt('.c4') })
      gsap.from('.cell', { y: 60, opacity: 0, stagger: .1, duration: .8, ease: 'power3.out', scrollTrigger: bentoSt('.bento', 'top 85%') })
      const cs = gsap.utils.toArray('.sc')
      const sh = () => document.querySelector('.stk').offsetHeight
      const stackEnd = () => compact ? `+=${Math.max(1100, Math.round(innerHeight * 1.7))}` : '+=2000'
      const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '.stk', start: 'top 80px', end: stackEnd, pin: true, scrub: true, anticipatePin: 1, invalidateOnRefresh: true } })
      cs.forEach((c, i) => {
        if (!i) return
        tl.from(c, { y: sh, duration: 1 }, i === 1 ? .3 : '>+.3').to(cs[i - 1], { scale: .96, duration: 1 }, '<').from(c.querySelectorAll('.il'), { y: 30, opacity: 0, stagger: .1, duration: .6 }, '<+.4')
        if (i === 2) {
          tl.to(cs[0], { scaleX: .92, duration: 1 }, '<')
            .fromTo(c.querySelector('.ov-ring'), { strokeDashoffset: 239 }, { strokeDashoffset: 60, duration: .8, ease: 'power2.out' }, '<+.25')
            .fromTo(c.querySelectorAll('.ov-check'), { strokeDasharray: 18, strokeDashoffset: 18 }, { strokeDashoffset: 0, duration: .24, stagger: .12, ease: 'power2.out' }, '<')
        }
      })
      tl.to({}, { duration: .3 })
      gsap.from(cs[0].querySelectorAll('.il'), { y: 50, opacity: 0, stagger: .12, duration: .8, ease: 'power3.out', scrollTrigger: st('.stk') })
      gsap.fromTo('.rp', { scale: .58, opacity: .45 }, { scale: 1.42, opacity: 0, duration: 2.2, repeat: -1, stagger: 1.1, ease: 'power1.out', transformOrigin: '50% 50%', transformBox: 'fill-box' })
      gsap.fromTo('.ov-wave rect', { scaleY: .45 }, { scaleY: 1, transformOrigin: '50% 50%', transformBox: 'fill-box', duration: .42, repeat: -1, yoyo: true, stagger: .1, ease: 'sine.inOut' })
      gsap.to('.ov-save', { y: -7, duration: 1.4, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.ov-bell', { rotation: 8, transformOrigin: '50% 50%', transformBox: 'fill-box', duration: .22, repeat: 5, yoyo: true, repeatDelay: 1.6, ease: 'sine.inOut' })
      gsap.to('.ov-confetti', { y: -5, rotation: 3, transformOrigin: '50% 50%', transformBox: 'fill-box', duration: 1.1, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      const wd = () => document.querySelector('.wlw')
      gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '.wlw', start: 'top top', end: () => compact ? '+=700' : '+=1000', pin: true, scrub: compact ? true : .6, anticipatePin: 1, invalidateOnRefresh: true } })
        .fromTo('.wl', { width: () => Math.min(440, innerWidth * .8), height: () => innerHeight * .36, borderRadius: 200 }, { width: () => wd().offsetWidth, height: () => wd().offsetHeight, borderRadius: 0, duration: 1 })
        .fromTo('.wl>:not(.grain)', { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: .08, duration: .5 }, .6)
      gsap.to('.grain', { yPercent: -8, ease: 'none', scrollTrigger: { trigger: '.wlw', start: 'top bottom', end: 'bottom top', scrub: true } })
    }, root)
    ScrollTrigger.refresh()

    return () => {
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
