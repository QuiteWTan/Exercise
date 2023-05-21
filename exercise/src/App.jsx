import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import FContent from './components/FirstSlideContent'
import SContent from './components/SecondSlideContent'
import Social from  './components/Social'
import ContactSection from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <FContent/>
        <SContent/>
        <Social/>
        <ContactSection/>
      </div>
    </>
  )
}

export default App
