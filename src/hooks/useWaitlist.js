import { useState } from 'react'
const URL_ = import.meta.env.VITE_WAITLIST_URL
export default function useWaitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [error, setError] = useState('')
  const submit = async () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) { setError('Enter a valid email address.'); return }
    setError(''); setStatus('loading')
    try {
      if (URL_) {
        const r = await fetch(URL_, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
        if (!r.ok) throw new Error()
      } else await new Promise(r => setTimeout(r, 600))
      setStatus('done')
    } catch { setStatus('idle'); setError('Could not join the waitlist. Try again.') }
  }
  return { email, setEmail, status, error, submit }
}
