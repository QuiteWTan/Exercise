import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import FContent from './components/FirstSlideContent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <FContent/>
      </div>
    </>
  )
}

export default App
