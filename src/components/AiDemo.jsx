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
    <svg className="ai-visual" viewBox="0 0 320 183" role="img" aria-label={`${example.prompt} becomes a reminder for ${example.when.toLowerCase()}`}>
      <rect x="13" y="9" width="278" height="62" rx="13" fill="#F9F8F5" stroke="#DADDD8" strokeWidth="1.3" />
      <circle cx="34" cy="30" r="8" fill="#EAB8D0" />
      <path d="m34 25 1.4 3.6L39 30l-3.6 1.4L34 35l-1.4-3.6L29 30l3.6-1.4L34 25Z" fill="#14201A" />
      <text x="51" y="33" className="ai-svg-label">ASK REMINDS</text>
      <text x="27" y="56" className="ai-svg-prompt">{typed}<tspan className="ai-svg-cursor">│</tspan></text>

      <path className="ai-svg-connector" d="M153 72v15c0 7 7 7 14 7h6" fill="none" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.5" strokeDasharray="3 4" />
      <circle className={`ai-svg-spark ${ready ? 'is-ready' : ''}`} cx="177" cy="94" r="5" fill="#EAB8D0" stroke="currentColor" strokeWidth="1" />
      <path d="m175 94 1.5 1.5 3-3.5" fill="none" stroke="#14201A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

      <g className={`ai-svg-result ${ready ? 'is-ready' : ''}`}>
        <rect x="37" y="105" width="270" height="67" rx="13" fill="color-mix(in srgb, var(--ink) 18%, transparent)" />
        <rect x="31" y="100" width="270" height="67" rx="13" fill="#F9F8F5" stroke="#DADDD8" strokeWidth="1.3" />
        <circle cx="57" cy="128" r="13" fill="#4E916E" />
        <path d="m51 128 4 4 8-9" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="78" y="126" className="ai-svg-task">{example.task}</text>
        <text x="78" y="146" className="ai-svg-date">{example.when}</text>
        <rect x="252" y="113" width="35" height="18" rx="9" fill="#EAB8D0" />
        <text x="269.5" y="125.5" textAnchor="middle" className="ai-svg-set">SET</text>
      </g>
    </svg>
    <div className="ai-examples" aria-label="Try a task example">
      {examples.map((item, index) => <button type="button" key={item.label} className={selected === index ? 'on' : ''} aria-pressed={selected === index} onClick={() => { setSelected(index); setAnimationRun((run) => run + 1) }}>{item.label}</button>)}
    </div>
  </div>
}
