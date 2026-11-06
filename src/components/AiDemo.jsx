import { useEffect, useState } from 'react'

const examples = [
  { label: 'Dentist', prompt: 'Dentist next Tuesday at 4pm', task: 'Dentist', when: 'NEXT TUE  ·  4:00 PM' },
  { label: 'Call mom', prompt: 'Call mom Saturday at 6:30pm', task: 'Call mom', when: 'SATURDAY  ·  6:30 PM' },
  { label: 'Gym', prompt: 'Gym every Monday at 7am', task: 'Gym', when: 'MONDAYS  ·  7:00 AM' },
]

export default function AiDemo() {
  const [selected, setSelected] = useState(0)
  const [typed, setTyped] = useState(examples[0].prompt)
  const [ready, setReady] = useState(true)
  const [animationRun, setAnimationRun] = useState(0)
  const example = examples[selected]

  useEffect(() => {
    if (!animationRun) return
    const prompt = example.prompt
    let index = 0
    let revealTimeout
    setTyped('')
    setReady(false)
    const interval = setInterval(() => {
      index += 1
      setTyped(prompt.slice(0, index))
      if (index === prompt.length) {
        clearInterval(interval)
        revealTimeout = setTimeout(() => setReady(true), 220)
      }
    }, 31)
    return () => { clearInterval(interval); clearTimeout(revealTimeout) }
  }, [animationRun, example])

  return <div className="ai">
    <svg className="ai-visual" viewBox="0 0 300 96" role="img" aria-label={`${example.prompt} becomes a reminder for ${example.when.toLowerCase()}`}>
      <rect x=".5" y=".5" width="299" height="39" fill="var(--bg)" stroke="color-mix(in srgb, var(--ink) 28%, transparent)" />
      <circle cx="16" cy="13" r="6.5" fill="#B79CEB" />
      <path d="m16 9.2 1.1 2.7 2.7 1.1-2.7 1.1-1.1 2.7-1.1-2.7-2.7-1.1 2.7-1.1z" fill="#14201A" />
      <text x="28" y="16" className="ai-svg-label">ASK REMINDS</text>
      <text x="12" y="31" className="ai-svg-prompt">{typed}<tspan className="ai-svg-cursor">│</tspan></text>

      <path d="M150 40v10" stroke="var(--ink)" strokeOpacity=".4" strokeWidth="1.2" strokeDasharray="2 3" />
      <circle cx="150" cy="45" r="2.5" fill="#B79CEB" />

      <g className={`ai-svg-result ${ready ? 'is-ready' : ''}`}>
        <rect x="0" y="50" width="300" height="46" fill="#4E916E" />
        <circle cx="24" cy="73" r="10" fill="#fff" />
        <path d="m19.5 73 3.2 3.2 6-7" fill="none" stroke="#4E916E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="42" y="70" className="ai-svg-task">{example.task}</text>
        <text x="42" y="84" className="ai-svg-date">{example.when}</text>
        <rect x="258" y="58" width="32" height="15" rx="2" fill="#fff" />
        <text x="274" y="68.5" textAnchor="middle" className="ai-svg-set">SET</text>
      </g>
    </svg>
    <div className="ai-examples" aria-label="Try a task example">
      {examples.map((item, index) => <button type="button" key={item.label} className={selected === index ? 'on' : ''} aria-pressed={selected === index} onClick={() => { setSelected(index); setAnimationRun((run) => run + 1) }}>{item.label}</button>)}
    </div>
  </div>
}
