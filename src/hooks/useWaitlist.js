import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function useWaitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [error, setError] = useState('')

  const submit = async (event) => {
    event?.preventDefault()
    if (status === 'loading') return
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError('Enter a valid email address.')
      return
    }

    setError(''); setStatus('loading')
    try {
      const { error: requestError } = await supabase.functions.invoke('waitlist-signup', {
        body: { email: email.trim() },
      })
      if (requestError) throw requestError
      setStatus('done')
    } catch { setStatus('idle'); setError('Could not join the waitlist. Try again.') }
  }

  return { email, setEmail, status, error, submit }
}
