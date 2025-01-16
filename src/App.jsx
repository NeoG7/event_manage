import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Home from './Page/Home'
import EventPage from './Page/createEvent/EventPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Home/>
      <EventPage/>
    </>
  )
}

export default App
