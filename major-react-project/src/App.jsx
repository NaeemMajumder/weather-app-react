import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Component
import SearchBox from './Components/SearchBox.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Major React Project (Weather Widget)</h2>
      <SearchBox></SearchBox>
    </>
  )
}

export default App
