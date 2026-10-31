import { useEffect, useRef, useState } from 'react'
const EX = [['Dentist', 'Dentist next Tuesday at 4pm', 'Done. Reminder set for Tue, 3:30 PM.'], ['Call mom', 'Call mom Saturday at 6:30pm', 'Done. It will ring through Do Not Disturb.'], ['Gym', 'Gym every Monday at 7am', 'Done. Repeats weekly, with your chosen sound.']]
export default function AiDemo() {
  const [k, setK] = useState(0), [t, setT] = useState(''), [r, setR] = useState(false), [go, setGo] = useState(false), ref = useRef()
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGo(true); o.disconnect() } }, { threshold: .6 })
    o.observe(ref.current); return () => o.disconnect()
  }, [])
  useEffect(() => {
    if (!go) return
    const s = EX[k][1]; let i = 0, w
    setT(''); setR(false)
    const id = setInterval(() => { i++; setT(s.slice(0, i)); if (i >= s.length) { clearInterval(id); w = setTimeout(() => setR(true), 350) } }, 38)
    return () => { clearInterval(id); clearTimeout(w) }
  }, [k, go])
  return (
    <div className="ai" ref={ref}>
      <div className="ub">{t}<i className="cur" /></div>
      <div className="arow">{r && <div className="ab">{EX[k][2]}</div>}</div>
      <div className="ex">{EX.map((x, i) => <button key={i} className={i === k ? 'on' : ''} onClick={() => { setGo(true); setK(i) }}>{x[0]}</button>)}</div>
    </div>)
}
