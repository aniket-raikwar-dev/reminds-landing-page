import { useRef } from 'react'
import useAnimations from './hooks/useAnimations'
import { Nav, Footer } from './components/Chrome'
import Hero, { Marquee } from './components/Hero'
import Bento from './components/Bento'
import Overview from './components/Overview'
import ReminderSetup from './components/ReminderSetup'
import WhatRemindsDoes from './components/WhatRemindsDoes'
import Plans from './components/Plans'
import PriceComparison from './components/PriceComparison'
import Waitlist from './components/Waitlist'
export default function App() {
  const root = useRef()
  useAnimations(root)
  return (<div ref={root} id="top"><Nav /><Hero /><Marquee /><Bento /><Overview /><WhatRemindsDoes /><ReminderSetup /><PriceComparison /><Plans /><Waitlist /><Footer /></div>)
}
