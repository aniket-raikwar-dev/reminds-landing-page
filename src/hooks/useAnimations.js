import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function useAnimations(root) {
  useEffect(() => {
    const rm = matchMedia('(prefers-reduced-motion:reduce)').matches
    const ctx = gsap.context(() => {
      document.querySelectorAll('[data-n]').forEach(el => {
        const n = +el.dataset.n, s = el.dataset.s || ''
        if (rm) { el.textContent = n + s; return }
        const o = { v: 0 }
        gsap.to(o, { v: n, duration: 1.6, delay: 1, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(o.v) + s } })
      })
      if (rm) return
      const st = (t, start = 'top 80%') => ({ trigger: t, start })
      gsap.timeline()
        .from('.h-a', { y: 40, opacity: 0, stagger: .12, duration: .9, ease: 'power3.out' })
        .from('.art svg g', { scale: .6, opacity: 0, transformOrigin: '50% 50%', stagger: .1, duration: .8, ease: 'back.out(1.6)' }, .2)
        .from('.draw', { strokeDashoffset: 200, strokeDasharray: 200, duration: 1.2, ease: 'power2.inOut' }, 1)
      gsap.utils.toArray('.par').forEach(g => gsap.to(g, { y: +g.dataset.d, duration: 2.4 + Math.random(), yoyo: true, repeat: -1, ease: 'sine.inOut' }))
      gsap.to('.ring', { rotation: 360, transformOrigin: '50% 50%', transformBox: 'fill-box', duration: 1.4, repeat: -1, ease: 'none' })
      gsap.to('.track', { xPercent: -25, duration: 22, repeat: -1, ease: 'none' })
      gsap.from('.bar', { scaleY: 0, transformOrigin: '50% 100%', stagger: .08, duration: .8, ease: 'power3.out', scrollTrigger: st('.bento', 'top 75%') })
      gsap.from('.hc', { opacity: 0, stagger: { amount: 1.2, from: 'random' }, scrollTrigger: st('.c2') })
      gsap.from('.tb', { scaleX: 0, transformOrigin: '0 50%', stagger: .2, duration: .9, ease: 'power3.out', scrollTrigger: st('.c3') })
      gsap.from('.snd', { y: 24, opacity: 0, stagger: .12, duration: .6, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.c4', start: 'top 80%', once: true } })
      gsap.from('.pf', { scaleX: 0, transformOrigin: '0% 50%', transformBox: 'fill-box', duration: 1.2, delay: .6, ease: 'power2.out', scrollTrigger: { trigger: '.c4', start: 'top 80%', once: true } })
      gsap.from('.cell', { y: 60, opacity: 0, stagger: .1, duration: .8, ease: 'power3.out', scrollTrigger: st('.bento', 'top 85%') })
      const cs = gsap.utils.toArray('.sc'), sh = () => document.querySelector('.stk').offsetHeight
      const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '.stk', start: 'top 80px', end: '+=2000', pin: true, scrub: .6, anticipatePin: 1, invalidateOnRefresh: true } })
      cs.forEach((c, i) => {
        if (!i) return
        tl.from(c, { y: sh, duration: 1 }, i === 1 ? .3 : '>+.3').to(cs[i - 1], { scale: .96, filter: 'brightness(.9)', duration: 1 }, '<').from(c.querySelectorAll('.il'), { y: 30, opacity: 0, stagger: .1, duration: .6 }, '<+.4')
      })
      tl.to({}, { duration: .3 })
      gsap.from(cs[0].querySelectorAll('.il'), { y: 50, opacity: 0, stagger: .12, duration: .8, ease: 'power3.out', scrollTrigger: st('.stk') })
      gsap.to('.rp', { scale: 1.5, opacity: 0, duration: 2.4, repeat: -1, stagger: 1.2, ease: 'power1.out', transformOrigin: '50% 50%', transformBox: 'fill-box' })
      const wd = () => document.querySelector('.wlw')
      gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '.wlw', start: 'top top', end: '+=1000', pin: true, scrub: .6, anticipatePin: 1, invalidateOnRefresh: true } })
        .fromTo('.wl', { width: () => Math.min(440, innerWidth * .8), height: () => innerHeight * .36, borderRadius: 200 }, { width: () => wd().offsetWidth, height: () => wd().offsetHeight, borderRadius: 0, duration: 1 })
        .fromTo('.wl>:not(.grain)', { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: .08, duration: .5 }, .6)
      gsap.to('.grain', { yPercent: -8, ease: 'none', scrollTrigger: { trigger: '.wlw', start: 'top bottom', end: 'bottom top', scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [root])
}
